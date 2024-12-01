'use client'


import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight, Loader2 } from 'lucide-react'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { motion } from 'framer-motion'

import { Badge } from "@/components/ui/badge"


const inter = Inter({ subsets: ['latin'] })

export default function AIDesigner() {
    const [sport, setSport] = useState('soccer')
    const [primaryColor, setPrimaryColor] = useState('#ff0000')
    const [secondaryColor, setSecondaryColor] = useState('#ffffff')
    const [selectedLook, setSelectedLook] = useState('sleek')
    const [selectedPattern, setSelectedPattern] = useState('abstract')
    const [selectedFeel, setSelectedFeel] = useState('speed')
    const [selectedOptions, setSelectedOptions] = useState({
        stripes: false,
        silhouette: false,
        texture: false
    })
    const [isGenerating, setIsGenerating] = useState(false)
    const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null)



    const generateDesign = async () => {
        setIsGenerating(true)
        setGeneratedImageUrl(null)
        console.log(primaryColor, secondaryColor)
        try {
            const response = await fetch('/api/generate-design', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sport,
                    primaryColor,
                    secondaryColor,
                    selectedLook,
                    selectedFeel,
                    selectedPattern,
                    selectedOptions
                }),
            })

            if (!response.ok) {
                throw new Error('Failed to generate design')
            }

            const data = await response.json()
            console.log(data.prompt)

            if (data.images && data.images.length > 0 && data.images[0].url) {
                setGeneratedImageUrl(data.images[0].url)

            } else {
                throw new Error('Invalid response format')
            }
        } catch (error) {
            console.error('Error generating jersey design:', error)

        } finally {
            setIsGenerating(false)
        }
    }

    const handleSaveDesign = async () => {
        if (!generatedImageUrl) return;

        try {
            // Create filename
            const timestamp = new Date().toLocaleDateString().replace(/\//g, '-');
            const filename = `${sport}-jersey-design-${timestamp}.png`;

            // Fetch the image and convert to blob
            const response = await fetch(generatedImageUrl);
            const blob = await response.blob();

            // Create download link
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = filename; // This is key for forcing download vs opening in new tab

            // Trigger download
            document.body.appendChild(link);
            link.click();

            // Cleanup
            document.body.removeChild(link);
            window.URL.revokeObjectURL(downloadUrl);


        } catch (error) {
            console.error('Error saving image:', error);

        }
    };


    return (
        <div className={`flex flex-col min-h-screen  bg-gradient-to-br from-gray-50 to-red-50${inter.className}`}>


            <main className="flex-grow container mx-auto px-4 py-28">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Badge className="bg-red-600/10 text-red-600 hover:bg-red-600/20 mb-4">
                        AI-Powered Design
                    </Badge>
                    {/* <h1 className="text-4xl md:text-5xl font-bold mb-16 text-black">
                        Design Your Dream Jersey with AI
                    </h1> */}
                    {/* <p className="text-lg text-black-300 mb-8 ">
                        Create unique, professional-quality jerseys in minutes. Our AI understands your preferences
                        and generates designs that match your team's identity.
                    </p> */}
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2">
                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-4">Design Options</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Sport</label>
                                    <Select value={sport} onValueChange={setSport}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a sport" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="soccer">Soccer</SelectItem>
                                            <SelectItem value="basketball">Basketball</SelectItem>

                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
                                    <input
                                        type="color"
                                        value={primaryColor}
                                        onChange={(e) => setPrimaryColor(e.target.value)}
                                        className="w-full h-10 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Color</label>
                                    <input
                                        type="color"
                                        value={secondaryColor}
                                        onChange={(e) => setSecondaryColor(e.target.value)}
                                        className="w-full h-10 rounded-md"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="look" className="text-base font-semibold">Select Look</Label>
                                    <Select onValueChange={(value) => setSelectedLook(value)}>
                                        <SelectTrigger id="look">
                                            <SelectValue placeholder="Choose a look" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="sleek">Sleek</SelectItem>
                                            <SelectItem value="athletic">Athletic</SelectItem>
                                            <SelectItem value="bold">Bold</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label htmlFor="look" className="text-base font-semibold">Select Feel</Label>
                                    <Select onValueChange={(value) => setSelectedFeel(value)}>
                                        <SelectTrigger id="feel">
                                            <SelectValue placeholder="Choose a feel" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Speed">Speed</SelectItem>
                                            <SelectItem value="Strength">Strength</SelectItem>
                                            <SelectItem value="Agility">Agility</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label htmlFor="pattern" className="text-base font-semibold">Select Pattern Type</Label>
                                    <Select onValueChange={(value) => setSelectedPattern(value)}>
                                        <SelectTrigger id="pattern">
                                            <SelectValue placeholder="Choose a pattern" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="abstract">Abstract</SelectItem>
                                            <SelectItem value="geometric">Geometric</SelectItem>
                                            <SelectItem value="minimalistic">Minimalistic</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-4">
                                    <Label className="text-base font-semibold">Additional Options</Label>
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="stripes" className="cursor-pointer">Stripes</Label>
                                        <Switch
                                            id="stripes"
                                            checked={selectedOptions.stripes}
                                            onCheckedChange={(checked: boolean) => setSelectedOptions(prev => ({ ...prev, stripes: checked }))}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="silhouette" className="cursor-pointer">Silhouette</Label>
                                        <Switch
                                            id="silhouette"
                                            checked={selectedOptions.silhouette}
                                            onCheckedChange={(checked: boolean) => setSelectedOptions(prev => ({ ...prev, silhouette: checked }))}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="texture" className="cursor-pointer">Texture</Label>
                                        <Switch
                                            id="texture"
                                            checked={selectedOptions.texture}
                                            onCheckedChange={(checked: boolean) => setSelectedOptions(prev => ({ ...prev, texture: checked }))}
                                        />
                                    </div>
                                </div>

                                <Button onClick={generateDesign} className="w-full mt-4">
                                    Generate Design
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-4">Preview</h2>
                            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                                {isGenerating ? (
                                    <div className="flex flex-col items-center">
                                        <Loader2 className="h-8 w-8 animate-spin text-gray-500 mb-2" />
                                        <p className="text-gray-500">Generating design...</p>
                                    </div>
                                ) : generatedImageUrl ? (
                                    <Image
                                        src={generatedImageUrl}
                                        alt="AI-generated jersey design"
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <p className="text-gray-500">AI-generated design will appear here</p>
                                )}
                            </div>
                            <div className="mt-4 space-y-2">
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={handleSaveDesign}
                                    disabled={!generatedImageUrl}
                                >
                                    {/* <Download className="mr-2 h-4 w-4" /> Optional: Add download icon */}
                                    Save Design
                                </Button>
                                <Button
                                    className="w-full"
                                    // onClick={handleRequestQuote}
                                    disabled={!generatedImageUrl}
                                >
                                    Request Quote
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>


        </div>
    )
}