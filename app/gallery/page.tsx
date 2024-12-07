'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ChevronRight } from 'lucide-react'
import { Poppins } from 'next/font/google'
import { useState } from 'react'

const poppins = Poppins({
    weight: ['400'],  // or whatever weights you need
    subsets: ['latin']
})

export default function Gallery() {
    const [sport, setSport] = useState('all')
    const [year, setYear] = useState('all')

    const galleryItems = [
        { id: 1, sport: 'soccer', year: '2024', title: 'Aiden FC', image: '/gallery/aiden.jpg' },
        { id: 2, sport: 'soccer', year: '2024', title: 'Liverpool FC', image: '/gallery/liverpool.jpg' },
        { id: 3, sport: 'soccer', year: '2024', title: 'Ismaili Sports League', image: '/gallery/ismaili.jpg' },
        { id: 4, sport: 'soccer', year: '2024', title: 'Sorella', image: '/gallery/sorella.jpg' },
        { id: 5, sport: 'soccer', year: '2024', title: 'Thunder FC', image: '/gallery/thunder.jpg' },
        { id: 6, sport: 'basketball', year: '2024', title: 'Chip Chaser', image: '/gallery/chipchaser.jpg' },
        { id: 7, sport: 'basketball', year: '2024', title: 'Dream Team', image: '/gallery/dreamteam.jpg' },
        { id: 8, sport: 'basketball', year: '2024', title: 'Spidaa', image: '/gallery/spidaa.jpg' },
        { id: 9, sport: 'basketball', year: '2024', title: 'Swishaz', image: '/gallery/swishaz.jpg' },
    ]

    const filteredItems = galleryItems.filter(item =>
        (sport === 'all' || item.sport === sport) &&
        (year === 'all' || item.year === year)
    )

    return (
        <div className={`flex flex-col min-h-screen custom-bg relative ${poppins.className}`}>

            <main className="flex-grow container mx-auto px-4 py-28">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-12 text-center"
                >
                    Gallery
                </motion.h1>

                <Card className="mb-12 p-6 bg-white/50 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:items-center gap-8 justify-center">
                        <div className="space-y-3">
                            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Sport</h2>
                            <RadioGroup
                                value={sport}
                                onValueChange={setSport}
                                className="flex gap-6"
                            >
                                {['all', 'soccer', 'basketball'].map((value) => (
                                    <div key={value} className="flex items-center space-x-2">
                                        <RadioGroupItem value={value} id={`sport-${value}`} />
                                        <Label
                                            htmlFor={`sport-${value}`}
                                            className="capitalize cursor-pointer"
                                        >
                                            {value === 'all' ? 'All Sports' : value}
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </div>

                        <div className="w-px h-8 bg-gray-200 hidden md:block" />

                        <div className="space-y-3">
                            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Year</h2>
                            <RadioGroup
                                value={year}
                                onValueChange={setYear}
                                className="flex gap-6"
                            >
                                {['all', '2024'].map((value) => (
                                    <div key={value} className="flex items-center space-x-2">
                                        <RadioGroupItem value={value} id={`year-${value}`} />
                                        <Label
                                            htmlFor={`year-${value}`}
                                            className="capitalize cursor-pointer"
                                        >
                                            {value === 'all' ? 'All Years' : value}
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </div>
                    </div>
                </Card>

                <motion.div
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                                <div className="relative">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                </div>
                                <CardContent className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                                    <p className="text-gray-600 mb-4">
                                        {item.sport.charAt(0).toUpperCase() + item.sport.slice(1)} - {item.year}
                                    </p>
                                    <Link href={`/gallery/${item.id}`}>
                                        <Button
                                            variant="outline"
                                            className="w-full group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors duration-300"
                                        >
                                            View Details
                                            <ChevronRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {filteredItems.length === 0 && (
                    <p className="text-center text-gray-500 mt-8">No gallery items found for the selected filters.</p>
                )}

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">Want to see your team in our gallery?</h2>
                    <Button
                        size="lg"
                        className="bg-red-600 hover:bg-red-700 transition-colors duration-300"
                    >
                        Order Your Uniforms Now
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </motion.div>
            </main>
        </div>
    )
}