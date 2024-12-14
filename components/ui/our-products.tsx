'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const products = [
    {
        title: "soccer",
        name: "Soccer Products",
        description: "Customizable soccer uniforms for all levels, made with high-performance fabrics to ensure durability and comfort. Perfect for teams seeking a professional look and feel.",
        image: "/our-products/soccer-new.jpg",
        link: "/soccer"
    },
    {
        title: "basketball",
        name: "Basketball Products",
        description: "Premium quality basketball jerseys that combine style with functionality. Designed for optimal performance and team branding, suitable for all court warriors.",
        image: "/our-products/basketball-new.jpg",
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
                                <Link href={product.link}>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                    />
                                </Link>

                            </div>
                            <Link href={product.link}>
                                <Button size="lg" className="mt-4 bg-red-600 hover:bg-red-700 text-white">
                                    {product.name}
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}