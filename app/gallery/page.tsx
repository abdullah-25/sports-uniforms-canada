'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight } from 'lucide-react'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

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
        <div className={`flex flex-col min-h-screen  bg-gradient-to-br from-gray-50 to-red-50 ${inter.className}`}>
            <main className="flex-grow container mx-auto px-4 py-28">
                <h1 className="text-4xl font-bold mb-8 text-center">In-Game Gallery</h1>

                <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Select value={sport} onValueChange={setSport}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Sport" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Sports</SelectItem>
                            <SelectItem value="soccer">Soccer</SelectItem>
                            <SelectItem value="basketball">Basketball</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select value={year} onValueChange={setYear}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Years</SelectItem>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2025">2025</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredItems.map((item) => (
                        <Card key={item.id} className="overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            <CardContent className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                                <p className="text-gray-600 mb-4">{item.sport.charAt(0).toUpperCase() + item.sport.slice(1)} - {item.year}</p>
                                <Link href={`/gallery/${item.id}`} passHref>
                                    <Button variant="outline" className="w-full">
                                        View Details
                                        <ChevronRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <p className="text-center text-gray-500 mt-8">No gallery items found for the selected filters.</p>
                )}

                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Want to see your team in our gallery?</h2>
                    <Button size="lg" className="bg-red-600 hover:bg-red-700">
                        Order Your Uniforms Now
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </main>
        </div>
    )
}