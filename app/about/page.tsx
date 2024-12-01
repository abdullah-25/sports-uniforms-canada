
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from 'lucide-react'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function AboutUs() {
    return (
        <div className={`flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-red-50 ${inter.className}`}>


            <main className="flex-grow container mx-auto px-4 py-28">
                <h1 className="text-4xl font-bold mb-8 text-center"></h1>

                <div className="grid gap-8 md:grid-cols-2">
                    <div>
                        <Image
                            src="/about.jpg"
                            alt="Sports Uniforms Canada Team"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">Our Story</h2>
                        <p className="text-gray-700">
                            Founded in 2024, Sports Uniforms Canada has quickly become a go-to provider of premium, customizable uniforms for sports teams. What started as a new venture has rapidly grown thanks to our unbeatable combination of top-notch quality and competitive pricing.
                        </p>
                        <p className="text-gray-700">
                            Serving numerous happy clients in the GTA, we take pride in offering uniforms that not only look great but also provide comfort and durability. Our commitment to excellence continues as we expand and deliver standout uniforms to even more teams across the region.
                        </p>
                    </div>
                </div>

                <Card className="mt-12">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-gray-700 mb-4">
                            At Sports Uniforms Canada, our mission is to empower teams with high-quality, customizable uniforms that not only look great but also enhance performance. We believe that when athletes feel confident in their uniforms, they perform better on the field.
                        </p>
                        <p className="text-gray-700">
                            We're committed to innovation, sustainability, and exceptional customer service. Our goal is to be the go-to uniform provider for sports teams across Canada, from local recreational leagues to professional organizations.
                        </p>
                    </CardContent>
                </Card>

                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Quality</h3>
                            <p className="text-gray-700">
                                We use only the finest materials and latest manufacturing techniques to ensure our uniforms stand up to the rigors of competition.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Customization</h3>
                            <p className="text-gray-700">
                                From colors to designs, we offer extensive customization options to make sure your team's uniforms are truly unique.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Service</h3>
                            <p className="text-gray-700">
                                Our dedicated team is always ready to assist you, from design consultation to after-sales support.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
                    <Link href='/contact'>
                        <Button size="lg" className=" bg-red-600 hover:bg-red-700 text-white transition-colors duration-300">
                            Request a Quote
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </main>

        </div>
    )
}