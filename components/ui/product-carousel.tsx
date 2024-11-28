'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProductCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const products = [
        {
            id: 1,
            name: "Young Sirs",
            type: "Soccer",
            link: '/gallery',
            // description: "Pink home jersey with custom numbering",
            image: "/product-carousel/sirs.jpg"
        },
        {
            id: 2,
            name: "Aiden FC",
            type: "Soccer",
            link: '/gallery',
            // description: "Professional grade away kit design",
            image: "/product-carousel/aiden.jpg"
        },
        {
            id: 3,
            name: "Jelly Fam",
            type: "Basketball",
            link: '/gallery',
            // description: "Custom designed team uniform",
            image: "/product-carousel/jelly.jpg"
        },
        {
            id: 4,
            name: "Dream Team",
            type: "Basketball",
            link: '/gallery',
            // description: "Premium performance jersey",
            image: "/product-carousel/dream.jpg"
        },
        {
            id: 5,
            name: "Bluff Goons",
            type: "Basketball",
            link: '/gallery',
            // description: "Professional soccer uniform",
            image: "/product-carousel/bluff.jpg"
        },
        {
            id: 6,
            name: "Chip Chaser",
            type: "Basketball",
            link: '/gallery',
            // description: "Custom basketball uniform",
            image: "/product-carousel/chip.jpg"
        },
        {
            id: 7,
            name: "Dream Team Kit",
            type: "Basketball",
            link: '/gallery',
            // description: "Premium basketball jersey",
            image: "/product-carousel/sirs.jpg"
        }
    ]

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 3 >= products.length ? 0 : prevIndex + 3
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 3 < 0 ? Math.max(products.length - 3, 0) : prevIndex - 3
        )
    }

    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-red-50">
            <div className="container mx-auto px-4">
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Our Products</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our range of customizable uniforms for various sports.
                        Each piece is crafted with attention to detail and quality.
                    </p>
                </motion.div> */}

                <div className="relative">
                    <div className="flex justify-between absolute top-1/2 -translate-y-1/2 -left-4 -right-4 z-10">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-12 w-12 rounded-full bg-white shadow-lg hover:bg-gray-100"
                            onClick={prevSlide}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-12 w-12 rounded-full bg-white shadow-lg hover:bg-gray-100"
                            onClick={nextSlide}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>

                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-6"
                            initial={false}
                            animate={{
                                x: `${-currentIndex * (100 / 3)}%`
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                        >
                            {products.map((product) => (
                                <Card
                                    key={product.id}
                                    className="flex-none w-full md:w-[calc(33.333%-16px)]"
                                >
                                    <CardContent className="p-4">
                                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden mb-4">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform duration-300 hover:scale-105"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-semibold text-lg">{product.name}</h3>
                                                <span className="text-sm text-gray-500">{product.type}</span>
                                            </div>
                                            {/* <p className="text-gray-600">{product.description}</p> */}
                                            <Link href={product.link}>
                                                <Button className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-300">
                                                    View Details
                                                    <ChevronRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </motion.div>
                    </div>

                    <div className="flex justify-center mt-6 gap-2">
                        {Array.from({ length: Math.ceil(products.length / 3) }).map((_, index) => (
                            <button
                                key={index}
                                className={`h-2 rounded-full transition-all ${Math.floor(currentIndex / 3) === index
                                    ? 'w-6 bg-gray-800'
                                    : 'w-2 bg-gray-300'
                                    }`}
                                onClick={() => setCurrentIndex(index * 3)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}