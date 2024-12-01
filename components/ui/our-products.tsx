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
        link: "/contact"
    },
    {
        title: "basketball",
        name: "Basketball Jerseys",
        description: "Premium quality basketball jerseys that combine style with functionality. Designed for optimal performance and team branding, suitable for all court warriors.",
        image: "/our-products/basketball.jpg",
        link: "/contact"
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
        <section className="py-8 bg-gradient-to-br from-gray-50 to-red-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">Custom Sports Uniforms for Every Level</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Designed for comfort, style, and performance—tailored to your team's identity.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card className="overflow-hidden h-full">
                                <CardContent className="p-0">
                                    <div
                                        className="relative h-64 transition-transform duration-300 ease-in-out transform hover:scale-105"
                                        onMouseEnter={() => setHoveredProduct(product.name)}
                                        onMouseLeave={() => setHoveredProduct(null)}
                                    >
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                        {hoveredProduct === product.name && (
                                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                                <Link href={product.title}>
                                                    <Button
                                                        size="lg"
                                                        className="bg-red-500 hover:bg-red-600 text-white transition-colors duration-300"
                                                    >
                                                        Explore {product.name}
                                                        <ChevronRight className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                                        <p className="text-gray-600 mb-6">{product.description}</p>
                                        <Link href={product.link}>
                                            <Button
                                                size="lg"
                                                className="w-full bg-red-600 hover:bg-red-700 text-white transition-colors duration-300"
                                            >
                                                Customize Now
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
        </section>
    )
}

// 'use client'


// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { ChevronRight } from 'lucide-react'
// import Image from "next/image"
// import { motion } from 'framer-motion'
// import Link from "next/link"


// export default function OurProducts() {
//     return (
//         <section className="py-20 bg-gray-50">
//             <div className="container mx-auto px-4">
//                 <div className="text-center mb-12">
//                     <h2 className="text-3xl font-bold mb-4">Our Products</h2>
//                     <p className="text-gray-600 max-w-2xl mx-auto">
//                         Explore our range of customizable uniforms for various sports. Each piece is crafted with attention to detail and quality.
//                     </p>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <motion.div
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <Card className="overflow-hidden">
//                             <Image
//                                 src={`/our-products/soccer.jpg`}
//                                 alt="Soccer Uniforms"
//                                 width={600}
//                                 height={400}
//                                 className="w-full h-[300px] object-cover"
//                             />
//                             <CardContent className="p-6">
//                                 <h3 className="text-2xl font-semibold mb-2">Soccer Uniforms</h3>
//                                 <p className="text-gray-600 mb-4">Customizable soccer uniforms for all levels</p>
// <Link
//     href={{
//         pathname: `/soccer`,

//     }}
// >
//                                     <Button variant="outline" className="w-full">
//                                         Explore Soccer
//                                         <ChevronRight className="ml-2 h-4 w-4" />
//                                     </Button>
//                                 </Link>
//                             </CardContent>
//                         </Card>
//                     </motion.div>
//                     <motion.div
//                         initial={{ opacity: 0, x: 20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <Card className="overflow-hidden">
//                             <Image
//                                 src={`/our-products/basketball.jpg`}
//                                 alt="Basketball Uniforms"
//                                 width={600}
//                                 height={400}
//                                 className="w-full h-[300px] object-cover"
//                             />
//                             <CardContent className="p-6">
//                                 <h3 className="text-2xl font-semibold mb-2">Basketball Uniforms</h3>
//                                 <p className="text-gray-600 mb-4">Customizable basketball uniforms for all levels</p>
//                                 <Link
//                                     href={{
//                                         pathname: `/basketball`,

//                                     }}
//                                 >
//                                     <Button variant="outline" className="w-full">
//                                         Explore Basketball
//                                         <ChevronRight className="ml-2 h-4 w-4" />
//                                     </Button>
//                                 </Link>
//                             </CardContent>
//                         </Card>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     )
// }

