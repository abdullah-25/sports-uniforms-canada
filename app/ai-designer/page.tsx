'use client'


import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Download } from 'lucide-react'
import { Poppins } from 'next/font/google'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Wand2 } from 'lucide-react'
import Link from 'next/link'


const poppins = Poppins({
    weight: ['400'],  // or whatever weights you need
    subsets: ['latin']
})
const examplePrompts = [
    {
        title: "Modern Soccer Jersey",
        prompt: "Create a modern soccer jersey. Add geometric patterns and make it look professional.",
    },
    {
        title: "Classic Basketball Jersey",
        prompt: "Design a classic basketball jersey. Include traditional striping pattern.",
    },
    {
        title: "Bold Team Design",
        prompt: "Generate a bold soccer uniform with gradient effects. Add dynamic side panels and modern collar.",
    },
]

export default function AIDesigner() {
    const [sport, setSport] = useState('soccer')
    const [primaryColor, setPrimaryColor] = useState('#ff0000')
    const [secondaryColor, setSecondaryColor] = useState('#ffffff')

    const [isGenerating, setIsGenerating] = useState(false)
    const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null)
    const [prompt, setPrompt] = useState('')

    const handleUseExample = (examplePrompt: string) => {
        setPrompt(examplePrompt)
    }
    function handleRequestQuote() {
        return <Link href='/contact'></Link>
    }



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
                    primaryColor,
                    secondaryColor,
                    prompt
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
        <div className={` py-12 custom-bg relative flex flex-col min-h-screen ${poppins.className}`}>


            <main className="  relative flex-grow container mx-auto px-4 py-28">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Badge className="bg-red-600/10 text-red-600 hover:bg-red-600/20 mb-4">
                        AI-Powered Design
                    </Badge>
                    <h2 className="text-2xl font-bold mb-2">Design Your Jersey</h2>
                    <p className="text-gray-600 mb-4">
                        Describe your perfect jersey design and let our AI bring it to life.
                    </p>
                </motion.div>

                <div className={` grid gap-8 md:grid-cols-2 ${poppins.className}`}>
                    <Card>
                        <CardContent className="p-6">
                            <h2 className={`text-2xl font-semibold mb-4${poppins.className}`}>Design Options</h2>
                            <div className="space-y-4">
                                <div>
                                    {/* <label className="block text-sm font-medium text-gray-700 mb-1">Sport</label>
                                    <Select value={sport} onValueChange={setSport}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a sport" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="soccer">Soccer</SelectItem>
                                            <SelectItem value="basketball">Basketball</SelectItem>

                                        </SelectContent>
                                    </Select> */}
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
                                    <Textarea
                                        placeholder="Describe your dream jersey design... Be specific about colours, patterns and style."
                                        value={prompt}
                                        onChange={(e) => setPrompt(e.target.value)}
                                        className="min-h-[200px] mb-4"
                                    />

                                    <Button
                                        onClick={generateDesign}
                                        className="w-full mt-4"
                                        disabled={!prompt || isGenerating}
                                    >
                                        {isGenerating ? (
                                            <>
                                                <Wand2 className="mr-2 h-4 w-4 animate-spin" />
                                                Generating Design...
                                            </>
                                        ) : (
                                            <>
                                                <Wand2 className="mr-2 h-4 w-4" />
                                                Generate Design
                                            </>
                                        )}
                                    </Button>

                                </div>

                                {/* <Button onClick={generateDesign} className="w-full mt-4">
                                    Generate Design
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Button> */}
                            </div>
                            <div className="space-y-4 my-8 ">
                                <div className="flex items-center gap-2">
                                    <Lightbulb className="h-5 w-5 text-amber-500" />
                                    <h3 className="font-semibold">Example Prompts</h3>
                                </div>

                                <div className="grid gap-3">
                                    {examplePrompts.map((example, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Card
                                                className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                                                onClick={() => handleUseExample(example.prompt)}
                                            >
                                                <Badge className="mb-2 bg-red-100 text-red-700 hover:bg-red-200">
                                                    {example.title}
                                                </Badge>
                                                <p className="text-sm text-gray-600">{example.prompt}</p>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className={`p-6  ${poppins.className}`}>
                            <h2 className={`text-2xl font-semibold mb-4 ${poppins.className}`}>Preview</h2>
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
                                    <Download className="mr-2 h-4 w-4" />
                                    Save Design
                                </Button>
                                <Link href='/contact'>
                                    <Button
                                        className="w-full my-5"
                                        disabled={!generatedImageUrl}
                                    // onClick={handleRequestQuote}

                                    >
                                        Request Quote
                                    </Button>
                                </Link>



                            </div>

                        </CardContent>
                    </Card>
                </div>
            </main >


        </div >
    )
}