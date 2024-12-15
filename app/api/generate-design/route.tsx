import { NextRequest, NextResponse } from 'next/server';
import { config, subscribe } from '@fal-ai/serverless-client';

config({
    credentials: process.env.FAL_KEY,
});

export async function POST(request: NextRequest) {
    try {
        const {
            primaryColor,   // This will be hex color like "#FF0000"
            secondaryColor, // This will be hex color like "#0000FF"
            prompt

        } = await request.json();

        const hexToColorName = (hex: string) => {
            hex = hex.toUpperCase();
            if (!hex.startsWith('#')) hex = '#' + hex;

            // Define common colors and their hex values
            const colorMap: { [key: string]: string } = {
                // Reds
                '#FF0000': 'pure red',
                '#8B0000': 'dark red',
                '#DC143C': 'crimson red',
                '#CD5C5C': 'indian red',
                '#FF6B6B': 'light coral red',
                '#B22222': 'firebrick red',
                '#800000': 'maroon',
                '#A52A2A': 'brown red',
                '#FF4500': 'orange red',
                '#FF6347': 'tomato red',

                // Greens
                '#228B22': 'forest green',
                '#006400': 'deep green',
                '#32CD32': 'lime green',
                '#008000': 'pure green',
                '#355E3B': 'hunter green',
                '#2E8B57': 'sea green',
                '#3CB371': 'medium sea green',
                '#90EE90': 'light green',
                '#98FB98': 'pale green',
                '#00FF00': 'neon green',

                // Blues
                '#0000FF': 'pure blue',
                '#00008B': 'dark blue',
                '#4169E1': 'royal blue',
                '#1E90FF': 'dodger blue',
                '#87CEEB': 'sky blue',
                '#000080': 'navy blue',
                '#0047AB': 'cobalt blue',
                '#5F9EA0': 'cadet blue',
                '#6495ED': 'cornflower blue',
                '#7B68EE': 'medium slate blue',

                // Purples
                '#800080': 'pure purple',
                '#4B0082': 'indigo',
                '#8B008B': 'dark magenta',
                '#9400D3': 'dark violet',
                '#9932CC': 'dark orchid',
                '#BA55D3': 'medium orchid',
                '#DDA0DD': 'plum',
                '#EE82EE': 'violet',
                '#FF00FF': 'magenta',
                '#DA70D6': 'orchid',

                // Yellows
                '#FFFF00': 'pure yellow',
                '#FFD700': 'gold',
                '#FFA500': 'orange',
                '#DAA520': 'goldenrod',
                '#F0E68C': 'khaki',
                '#BDB76B': 'dark khaki',
                '#FFDAB9': 'peach',
                '#FFE4B5': 'moccasin',
                '#FFEFD5': 'papaya whip',
                '#FFFACD': 'lemon chiffon',

                // Grays
                '#808080': 'gray',
                '#A9A9A9': 'dark gray',
                '#D3D3D3': 'light gray',
                '#696969': 'dim gray',
                '#778899': 'light slate gray',
                '#708090': 'slate gray',
                '#C0C0C0': 'silver',
                '#DCDCDC': 'gainsboro',
                '#F5F5F5': 'white smoke',
                '#2F4F4F': 'dark slate gray',

                // Browns
                '#8B4513': 'saddle brown',
                '#A0522D': 'sienna',
                '#D2691E': 'chocolate',
                '#CD853F': 'peru',
                '#DEB887': 'burlywood',
                '#F4A460': 'sandy brown',
                '#B8860B': 'dark goldenrod',
                '#D2B48C': 'tan',
                '#BC8F8F': 'rosy brown',

                // Whites
                '#FFFFFF': 'pure white',
                '#FFFAFA': 'snow white',
                '#F0FFF0': 'honeydew',
                '#F5FFFA': 'mint cream',
                '#F0FFFF': 'azure',
                '#F5F5DC': 'beige',
                '#FFF8DC': 'cornsilk',
                '#FFFFF0': 'ivory',
                '#FAFAD2': 'light goldenrod',
                '#FAF0E6': 'linen',

                // Black
                '#000000': 'black'

            };

            // Find exact match
            if (colorMap[hex]) {
                return colorMap[hex];
            }

            // If no exact match, convert to RGB to find closest color
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);

            let closestColor = '';
            let minDistance = Infinity;

            Object.entries(colorMap).forEach(([hexValue, colorName]) => {
                const r2 = parseInt(hexValue.slice(1, 3), 16);
                const g2 = parseInt(hexValue.slice(3, 5), 16);
                const b2 = parseInt(hexValue.slice(5, 7), 16);

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
        const detailedPrompt = `using these exact colors:
PRIMARY COLOR: ${primaryColor} (${hexToColorName(primaryColor)})
SECONDARY COLOR: ${secondaryColor} (${hexToColorName(secondaryColor)}), ${prompt}`



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