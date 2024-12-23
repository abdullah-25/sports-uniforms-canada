
'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from 'lucide-react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const poppins = Poppins({
    weight: ['400'],  // or whatever weights you need
    subsets: ['latin']
})

const allFaqs = [
    {
        category: "pricing",
        question: "What is the price range for your custom sports uniforms?",
        answer: "Our custom sports uniforms start at $35 per kit. Prices may vary based on customization options, quantities, and printing methods."
    },
    {
        category: "pricing",
        question: "What is your minimum order quantity for custom uniforms?",
        answer: "Our minimum order quantity is typically 10 uniforms per design. However, we are flexible and can discuss your specific requirements."
    },
    {
        category: "pricing",
        question: "Do you offer any discounts for bulk orders?",
        answer: "Yes, we offer discounts for bulk orders. The more you order, the more you save. Contact us to get a customized quote based on your order size."
    },
    {
        category: "customization",
        question: "What customization options do you offer for sports uniforms?",
        answer: "We offer a wide range of customization options, including sublimation printing, embroidery, DTF (Direct-to-Film), DTG (Direct-to-Garment), screen printing, heat transfer vinyl (HTV), custom colors and designs, player names and numbers, team logos, sponsor logos, and personalized sizing options."
    },
    {
        category: "customization",
        question: "Can you add sponsor logos or other custom elements to the uniforms?",
        answer: "Absolutely! We can add sponsor logos, patches, labels, custom tags, reflective elements, and specialty finishes like metallic or glitter to make your uniforms unique."
    },
    {
        category: "process",
        question: "How long does it take to receive my custom sports uniforms?",
        answer: "Our standard turnaround time is approximately 3-4 weeks. However, depending on the order size and customization details, we may be able to expedite the process."
    },
    {
        category: "process",
        question: "How do I place an order for custom sports uniforms?",
        answer: "To place an order, you can contact us through our website's contact form, email, call, or reach out via our Instagram page. We will guide you through the process and discuss all customization options."
    },
    {
        category: "materials",
        question: "What types of fabrics do you use for your sports uniforms?",
        answer: "We use high-quality fabrics such as Dri-Fit, mesh, polyester, spandex blends, and cotton blends to ensure comfort, durability, and performance. Additionally, we can source specific fabrics based on your unique requirements."
    },
    {
        category: "materials",
        question: "What stitching techniques do you use to ensure durability?",
        answer: "We use double stitching machines to provide extra durability and strength to our uniforms, making them ideal for contact sports. This ensures that the uniforms can withstand the rigors of intense physical activity."
    }
]
interface FaqItem {
    category: string;
    question: string;
    answer: string;
}

interface OpenQuestionsState {
    [key: string]: boolean;
}

const faqCategories: Record<string, string> = {
    pricing: "Pricing & Orders",
    customization: "Customization",
    process: "Process & Delivery",
    materials: "Materials & Quality"
}

interface OpenQuestions {
    [key: number]: boolean;
}

export default function AboutUs() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [openQuestions, setOpenQuestions] = useState<Record<number, boolean>>({});

    const toggleQuestion = (index: number) => {
        setOpenQuestions(prev => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    const filteredFaqs = allFaqs.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className={`min-h-screen custom-bg relative ${poppins.className}`}>
            <main className="container mx-auto px-4 py-28 pt-36">
                {/* About Section */}
                <div className="grid gap-8 md:grid-cols-2 mb-20">
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
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                                <p className="text-gray-700 mb-4">
                                    At Sports Uniforms Canada, we started with a vision: to transform the way teams connect through custom sports apparel. What began as a small endeavor has grown into a trusted name for quality, creativity, and affordability in the sportswear industry.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    Our roots are grounded in our love for sports and teamwork. Over the years, we've worked with diverse teams—from local recreational leagues to competitive clubs—delivering uniforms that combine functionality with striking designs.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                                <p className="text-gray-700 mb-4">
                                    Our mission is simple: to empower teams with exceptional sportswear that inspires confidence, fosters unity, and elevates performance.
                                </p>
                                <p className="text-gray-700">
                                    We are dedicated to providing high-quality, customizable uniforms at accessible prices without compromising on durability or design.
                                </p>
                            </CardContent>
                        </Card>

                    </div>

                </div>



                <div className="grid gap-8 md:grid-cols-3 mb-20">
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

                {/* FAQ Section */}
                <section className="mb-20 ">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
                    {/* <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Find answers to common questions about our custom sports uniforms, ordering process, and more.
                    </p> */}

                    <div className="max-w-3xl mx-auto">
                        <div className="mb-8 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <Input
                                type="text"
                                placeholder="Search FAQs..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 py-3 md:py-6"
                            />
                        </div>

                        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                            <TabsList className="flex flex-wrap gap-2">
                                <TabsTrigger value="all" className="flex-1 min-w-24">All</TabsTrigger>
                                {Object.entries(faqCategories).map(([key, label]) => (
                                    <TabsTrigger key={key} value={key} className="flex-1 min-w-24">{label}</TabsTrigger>
                                ))}
                            </TabsList>

                            <div className="space-y-4 mt-8">
                                {filteredFaqs.map((faq, index) => (
                                    <Card key={index} className="border-0 shadow-sm">
                                        <CardContent className="p-0">
                                            <button
                                                onClick={() => toggleQuestion(index)}
                                                className="w-full text-left px-4 py-3 md:px-6 md:py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                            >
                                                <h3 className="font-semibold pr-4">{faq.question}</h3>
                                                <ChevronDown
                                                    className={cn(
                                                        "h-5 w-5 text-gray-500 transition-transform",
                                                        openQuestions[index] && "transform rotate-180"
                                                    )}
                                                />
                                            </button>
                                            {openQuestions[index] && (
                                                <div className="px-6 pb-4 pt-2 text-gray-600">
                                                    {faq.answer}
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </Tabs>
                    </div>
                </section>

                {/* CTA Section */}
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
                    <Link href='/contact'>
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white transition-colors duration-300">
                            Request a Quote
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </main>
        </div>
    )
}