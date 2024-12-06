
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
                        <p className="text-gray-700 mb-4">
                            At Sports Uniforms Canada, we started with a vision: to transform the way teams connect through custom sports apparel. What began as a small endeavor has grown into a trusted name for quality, creativity, and affordability in the sportswear industry.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Our roots are grounded in our love for sports and teamwork. Over the years, we've worked with diverse teams—from local recreational leagues to competitive clubs—delivering uniforms that combine functionality with striking designs. Every jersey, short, or kit we create tells a story of teamwork, dedication, and passion.
                        </p>
                        <p className="text-gray-700 mb-4">
                            We’re proud to offer more than just uniforms; we offer a way for teams to express their identity, build camaraderie, and leave a lasting impression. Our journey is driven by a commitment to craftsmanship, attention to detail, and the belief that every team deserves to stand out on their terms.
                        </p>
                    </div>
                </div>

                <Card className="mt-12">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-gray-700 mb-4">
                            Our mission is simple: to empower teams with exceptional sportswear that inspires confidence, fosters unity, and elevates performance.
                        </p>
                        <p className="text-gray-700 mb-4 ">
                            We are dedicated to providing high-quality, customizable uniforms at accessible prices without compromising on durability or design. By combining advanced manufacturing techniques, sustainable practices, and a customer-first approach, we aim to be the go-to partner for teams across Canada and beyond.
                        </p>
                        <p className="text-gray-700 mb-4">
                            At the heart of what we do is a passion for helping teams represent their values, culture, and ambition. Whether you're a grassroots club or a professional team, our mission is to ensure you look and feel like champions every time you step onto the field, court, or rink—because our uniforms are Crafted for Champions, Worn by All.
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