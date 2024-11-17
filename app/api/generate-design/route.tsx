import { NextRequest, NextResponse } from 'next/server';
import { config, subscribe } from '@fal-ai/serverless-client';

config({
    credentials: process.env.FAL_KEY,
});

export async function POST(request: NextRequest) {
    try {
        const {
            sport,
            primaryColor,   // This will be hex color like "#FF0000"
            secondaryColor, // This will be hex color like "#0000FF"
            selectedLook,
            selectedFeel,
            selectedPattern,
            selectedOptions,
        } = await request.json();

        const hexToColorName = (hex: string) => {
            // Remove the # if present
            hex = hex.toLowerCase().replace('#', '');

            // Define common colors and their hex values
            const colorMap: { [key: string]: string } = {
                '000000': 'black',
                'ffffff': 'white',
                'ff0000': 'red',
                '00ff00': 'green',
                '0000ff': 'blue',
                'ffff00': 'yellow',
                'ff00ff': 'magenta',
                '00ffff': 'cyan',
                'ffa500': 'orange',
                '800080': 'purple',
                'ffc0cb': 'pink',
                '808080': 'gray',
                'a52a2a': 'brown',
                '008000': 'dark green',
                '800000': 'maroon',
                'add8e6': 'light blue',
                // Add more colors as needed
            };

            // Find exact match
            if (colorMap[hex]) {
                return colorMap[hex];
            }

            // If no exact match, convert to RGB to find closest color
            const r = parseInt(hex.substring(0, 2), 16);
            const g = parseInt(hex.substring(2, 4), 16);
            const b = parseInt(hex.substring(4, 6), 16);

            // Convert all hex colors in colorMap to RGB for comparison
            let closestColor = '';
            let minDistance = Infinity;

            Object.entries(colorMap).forEach(([hexValue, colorName]) => {
                const r2 = parseInt(hexValue.substring(0, 2), 16);
                const g2 = parseInt(hexValue.substring(2, 4), 16);
                const b2 = parseInt(hexValue.substring(4, 6), 16);

                // Calculate color distance using simple Euclidean distance
                const distance = Math.sqrt(
                    Math.pow(r - r2, 2) +
                    Math.pow(g - g2, 2) +
                    Math.pow(b - b2, 2)
                );

                if (distance < minDistance) {
                    minDistance = distance;
                    closestColor = colorName;
                }
            });

            return closestColor;
        };

        // Construct the prompt using hex colors directly
        const detailedPrompt = `Generate a modern ${sport} jersey design with ${hexToColorName(primaryColor)} as primary color and ${hexToColorName(secondaryColor)} as secondary color o the jersey, The shirt should have a ${selectedLook} look with ${selectedPattern} pattern. ${selectedOptions.stripes ? 'Add subtle stripes to enhance dynamic feel. ' : ''} ${selectedOptions.silhouette ? 'Add subtle silhouette design to enhance dynamic feel. ' : ''} ${selectedOptions.texture ? 'Add subtle texture to enhance dynamic feel ' : ''}The overall style should evoke ${selectedFeel}`;



        const result = await subscribe("fal-ai/flux/schnell", {
            input: {
                prompt: detailedPrompt,
                image_size: "landscape_4_3",
                num_inference_steps: 4,
                num_images: 1,
                enable_safety_checker: true,
            },
            logs: true,
        });

        return NextResponse.json(result);
    } catch (error) {
        console.error("Error generating image:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}