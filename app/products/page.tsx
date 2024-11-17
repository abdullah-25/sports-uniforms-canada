'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from 'lucide-react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Products() {
    const sports = [
        { name: 'Soccer', items: ['Jerseys', 'Shorts', 'Socks', 'Goalkeeper Kits'] },
        { name: 'Basketball', items: ['Jerseys', 'Shorts', 'Warm-up Shirts'] },

    ]

    return (
        <div className={`flex flex-col min-h-screen ${inter.className}`}>


            <main className="flex-grow container mx-auto px-4 py-28">
                <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {sports.map((sport) => (
                        <Card key={sport.name} className="overflow-hidden">
                            <Image
                                src={`/placeholder.svg?height=200&width=400&text=${sport.name}`}
                                alt={`${sport.name} uniforms`}
                                width={400}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <CardContent className="p-4">
                                <h2 className="text-2xl font-semibold mb-4">{sport.name}</h2>
                                <ul className="list-disc list-inside mb-4">
                                    {sport.items.map((item) => (
                                        <li key={item} className="text-gray-700">{item}</li>
                                    ))}
                                </ul>
                                <Button className="w-full">
                                    Customize {sport.name} Uniforms
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <section className="mt-12 bg-gray-100 p-8 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Custom Design Request</h2>
                    <p className="text-gray-700 mb-4">
                        Have a unique design in mind? We can bring your vision to life! Upload your design ideas or describe your requirements, and our team will work with you to create the perfect custom uniforms for your team.
                    </p>
                    <Button>
                        Start Custom Design Request
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </section>
            </main>


        </div>
    )
}