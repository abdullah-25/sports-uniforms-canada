'use client'


import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'


export default function InGameGallery() {
    return (

        <section className="py-8 bg-gradient-to-br from-gray-50 to-red-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Gallery</h2>
                    {/* <p className="text-gray-600 max-w-2xl mx-auto">
                        See our uniforms in action. Browse through our gallery of teams wearing our custom-designed uniforms.
                    </p> */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {[1, 2, 3, 4].map((image) => (
                        <motion.div
                            key={image}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: image * 0.1 }}
                            className="relative group overflow-hidden rounded-lg"
                        >
                            <Image
                                src={`/gallery/game-${image}.jpg`}
                                alt={`In-game photo ${image}`}
                                width={400}
                                height={450}
                                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="text-center">
                    <Link
                        href={{
                            pathname: `/gallery`,

                        }}
                    >
                        <Button variant="outline" size="lg" className="bg-red-600 hover:bg-red-700 text-white transition-colors duration-300">
                            View Full Gallery
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
