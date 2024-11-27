'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from 'lucide-react'
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'
import ProductCarousel from '@/components/ui/product-carousel'

const inter = Inter({ subsets: ['latin'] })

export default function Products() {
    const products = [
        {
            name: "Soccer Jerseys",
            description: "High-performance, customizable soccer uniforms for teams of all levels. Our soccer jerseys are designed for comfort, durability, and style on the field.",
            image: "/placeholder.svg?height=600&width=800&text=Soccer+Jerseys",
            link: "/products/soccer"
        },
        {
            name: "Basketball Jerseys",
            description: "Premium quality basketball uniforms that combine style with functionality. Perfect for teams looking to make a statement on the court.",
            image: "/placeholder.svg?height=600&width=800&text=Basketball+Jerseys",
            link: "/products/basketball"
        }
    ]
    return (
        <div className={`bg-gradient-to-br from-gray-50 to-red-50 flex flex-col min-h-screen ${inter.className}`}>


            <main className="flex-grow container mx-auto px-4 py-28">
                {/* <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1> */}

                <div className="py-16 bg-gradient-to-br from-gray-50 to-red-50">
                    <div className="container mx-auto px-4">
                        <motion.h1
                            className="text-4xl font-bold text-center mb-8"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Our Products
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Explore our range of high-quality, customizable sports uniforms designed for peak performance and style.
                        </motion.p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {products.map((product, index) => (
                                <motion.div
                                    key={product.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                                >
                                    <Card className="overflow-hidden">
                                        <CardContent className="p-0">
                                            <div className="relative h-64 md:h-80">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                                                <p className="text-gray-600 mb-6">{product.description}</p>
                                                <Link href={product.link}>
                                                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white transition-colors duration-300">
                                                        Explore {product.name}
                                                        <ChevronRight className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <ProductCarousel />

                <section className="mt-12 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Custom Design Request</h2>
                    <p className="text-gray-700 mb-4">
                        Have a unique design in mind? We can bring your vision to life! Upload your design ideas or describe your requirements, and our team will work with you to create the perfect custom uniforms for your team.
                    </p>
                    <Button className=" bg-red-600 hover:bg-red-700 text-white transition-colors duration-300">
                        Start Custom Design Request
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </section>
            </main>


        </div>
    )
}