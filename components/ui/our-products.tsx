'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronRight } from 'lucide-react'

const products = [
    {
        title: "soccer",
        name: "Soccer Uniforms",
        description: "Customizable soccer uniforms for all levels, made with high-performance fabrics to ensure durability and comfort. Perfect for teams seeking a professional look and feel.",
        image: "/our-products/soccer.jpg",
        link: "/soccer"
    },
    {
        title: "basketball",
        name: "Basketball Jerseys",
        description: "Premium quality basketball jerseys that combine style with functionality. Designed for optimal performance and team branding, suitable for all court warriors.",
        image: "/our-products/basketball.jpg",
        link: "/basketball"
    }
]

const reviews = [
    { name: "Toronto FC Academy", rating: 5, text: "Exceptional quality and design. Our team loves the new uniforms!" },
    { name: "Raptors 905", rating: 5, text: "The jerseys exceeded our expectations. Great customer service too!" },
]

// const trustLogos = [
//     { name: "Canadian Soccer Association", logo: "/placeholder.svg?height=50&width=100&text=CSA+Logo" },
//     { name: "Basketball Canada", logo: "/placeholder.svg?height=50&width=100&text=BC+Logo" },
// ]



export default function OurProductsSection() {
    const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

    return (
        <section className="py-8 ">
            <div className="container max-w-[90%] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="group relative aspect-square">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />

                            </div>
                            <Link href={product.link} className="py-8 flex items-center text-lg font-large text-black hover:text-black-700">
                                {product.name}
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}