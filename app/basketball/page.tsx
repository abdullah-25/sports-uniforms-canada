'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from 'next/link'


export default function BasketballUniformsPage() {
    const products = [
        { name: 'basketball Kits', price: 45, src: '/our-products/basketball-1.jpg' },
        { name: 'Jerseys', price: 35, src: '/our-products/basketball-2.jpg' },
        { name: 'Shorts', price: 15, src: '/our-products/basketball-3.jpg' },
        // { name: 'Reversible Kit', price: 32, src: '/our-products/basketball-4.jpg' },
        // { name: 'Reversible Jerseys', price: 35, src: '/our-products/basketball-5.jpg' },
        // { name: 'Reversible Shorts', price: 15, src: '/our-products/basketball-6.jpg' },
        // { name: 'Reversibles Kit', price: 32, src: '/our-products/basketball-7.jpg' },
        // { name: 'Reversibles Jerseys', price: 35, src: '/our-products/basketball-8.jpg' },
        // { name: 'Reversibles Shorts', price: 15, src: '/our-products/basketball-9.jpg' },
    ]

    const customizationData = {
        fabrics: ['Dri-Fit Fabric', 'Mesh', 'Polyester', 'Spandex Blends', 'Cotton Blends'],
        printing: ['Sublimation (most common)', 'Embroidery', 'DTF (Direct-to-Film)', 'DTG (Direct-to-Garment)', 'Screen Printing'],
        customization: ['Custom Colors and Designs', 'Player Names and Numbers', 'Team Logos and Crests', 'Sponsor Logos', 'Personalized Sizing Options'],
        addons: ['Patches', 'Labels', 'Custom Tags', 'Reflective Elements', 'Specialty Finishes (e.g., metallic, glitter)']
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
            {/* Introduction */}
            <section className="py-10 pt-40 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h1 className="text-4xl font-bold mb-6">BASKETBALL UNIFORMS</h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Elevate your game with top-tier basketball uniforms from Sports Uniforms Canada. Our basketball uniforms combine functionality with style, offering comfort and durability for players of all levels. Crafted from high-performance fabrics and featuring advanced stitching techniques, our uniforms are designed to endure intense play and maintain their look season after season. Explore our selection below to find the perfect fit for your team's needs.
                    </p>
                </motion.div>
            </section>

            {/* Products Grid */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-red-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full">
                                    <CardContent className="p-6">
                                        <div className="aspect-square  rounded-lg mb-4 flex items-center justify-center">
                                            <Image
                                                src={product.src}
                                                alt={product.name}
                                                width={300}
                                                height={300}
                                                className="object-cover"
                                            />
                                        </div>
                                        {/* <h3 className="text-xl font-semibold mb-2">{product.name}</h3> */}
                                        {/* <p className="text-gray-600">Starting from ${product.price}</p> */}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customization Section */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-red-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-4">Customization Options</h2>
                        <p className="text-center text-gray-600 mb-12">
                            Personalize your team's look with our wide range of customization options. From colors and logos to names and numbers,
                            we offer various features to ensure your jerseys reflect your team's unique identity. Explore the customization possibilities below to create the perfect uniform for your team.
                        </p>

                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="font-bold">Fabrics Used</TableHead>
                                    <TableHead className="font-bold">Printing Methods</TableHead>
                                    <TableHead className="font-bold">Product Customization</TableHead>
                                    <TableHead className="font-bold">Additional Add-ons</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{customizationData.fabrics[i]}</TableCell>
                                        <TableCell>{customizationData.printing[i]}</TableCell>
                                        <TableCell>{customizationData.customization[i]}</TableCell>
                                        <TableCell>{customizationData.addons[i]}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-red-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
                        <div className="space-y-4">
                            <Link href="/contact">
                                <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white transition-colors duration-300">
                                    Request a Quote
                                </Button>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}