'use client'


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from 'lucide-react'
import Image from "next/image"
import { motion } from 'framer-motion'
import Link from "next/link"


export default function OurProducts() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Products</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our range of customizable uniforms for various sports. Each piece is crafted with attention to detail and quality.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="overflow-hidden">
                            <Image
                                src={`/our-products/soccer.jpg`}
                                alt="Soccer Uniforms"
                                width={600}
                                height={400}
                                className="w-full h-[300px] object-cover"
                            />
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">Soccer Uniforms</h3>
                                <p className="text-gray-600 mb-4">Customizable soccer uniforms for all levels</p>
                                <Link
                                    href={{
                                        pathname: `/soccer`,

                                    }}
                                >
                                    <Button variant="outline" className="w-full">
                                        Explore Soccer
                                        <ChevronRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="overflow-hidden">
                            <Image
                                src={`/our-products/basketball.jpg`}
                                alt="Basketball Uniforms"
                                width={600}
                                height={400}
                                className="w-full h-[300px] object-cover"
                            />
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">Basketball Uniforms</h3>
                                <p className="text-gray-600 mb-4">Customizable basketball uniforms for all levels</p>
                                <Link
                                    href={{
                                        pathname: `/basketball`,

                                    }}
                                >
                                    <Button variant="outline" className="w-full">
                                        Explore Basketball
                                        <ChevronRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

