import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft } from 'lucide-react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface TeamDetailsProps {
    team: {
        id: number
        name: string
        sport: string
        year: string
        mainImage: string
        gallery: string[]
    }
}

export default function TeamDetails({ team }: TeamDetailsProps) {
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        console.log('TeamDetails received team:', team)
        if (!team || !team.name) {
            setError('Team data is missing or incomplete')
        } else {
            setError(null)
        }
    }, [team])

    if (error) {
        return <div className="flex justify-center items-center h-screen text-red-600">{error}</div>
    }

    return (
        <div className={`flex flex-col min-h-screen  bg-gradient-to-br from-gray-50 to-red-50 ${inter.className}`}>


            <main className="flex-grow container mx-auto px-4 py-28">
                <div className="mb-8">
                    <Button variant="ghost" className="mb-4" onClick={() => window.history.back()}>
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Back to Gallery
                    </Button>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h1 className="text-4xl font-bold">{team.name}</h1>
                            <p className="text-gray-600">{team.sport} - {team.year}</p>
                        </div>
                        {/* <div className="flex gap-2">
                            <Button variant="outline">
                                <Share2 className="mr-2 h-4 w-4" />
                                Share
                            </Button>
                            <Button variant="outline">
                                <Download className="mr-2 h-4 w-4" />
                                Download Photos
                            </Button>
                        </div> */}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="mb-8">
                        <CardContent className="p-0">
                            <Image
                                src={team.mainImage}
                                alt={`${team.name} team photo`}
                                width={800}
                                height={600}
                                className="w-full h-[400px] md:h-[600px] object-cover rounded-lg"
                                priority
                            />
                        </CardContent>
                    </Card>

                    <Tabs defaultValue="gallery" className="mb-8">

                        <TabsContent value="gallery">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                                {team.gallery.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <Image
                                            src={image}
                                            alt={`Game photo ${index + 1}`}
                                            width={400}    // Fixed width
                                            height={300}   // Fixed height
                                            className="rounded-lg hover:opacity-90 transition-opacity cursor-pointer object-cover"  // Added object-cover
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="uniforms">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Uniform Details</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-medium">Home Kit</h4>
                                            <p className="text-gray-600">Blue and white striped jersey with navy shorts</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Away Kit</h4>
                                            <p className="text-gray-600">Red jersey with white shorts</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Customization</h4>
                                            <p className="text-gray-600">Player names and numbers in official team font</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="details">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Team Information</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-medium">League</h4>
                                            <p className="text-gray-600">Regional Premier Division</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Season</h4>
                                            <p className="text-gray-600">{team.year}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Location</h4>
                                            <p className="text-gray-600">Toronto, Ontario</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Interested in similar uniforms?</h2>
                        <Button size="lg" className="bg-red-600 hover:bg-red-700">
                            Request a Quote
                        </Button>
                    </div>
                </motion.div>
            </main>


        </div>
    )
}