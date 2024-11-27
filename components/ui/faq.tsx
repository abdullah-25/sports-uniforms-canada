'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"



export default function Faq() {
    const [searchQuery, setSearchQuery] = useState('')

    const commonFaqs = [
        { question: "How long does it take to receive a custom uniform order?", answer: "Typically, custom orders are delivered within 2-3 weeks from the date of order confirmation." },
        { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and bank transfers for larger orders." },
        { question: "Do you offer team discounts?", answer: "Yes, we offer discounts for bulk orders. Please contact our sales team for more information." },
    ]
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 font-sports">Frequently Asked Questions</h2>
                <div className="max-w-2xl mx-auto">
                    <div className="mb-6">
                        <Input
                            type="text"
                            placeholder="Search FAQs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full"
                        // icon={<Search className="h-4 w-4 text-gray-500" />}
                        />
                    </div>
                    <Tabs defaultValue="common" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="common">Common Questions</TabsTrigger>
                            <TabsTrigger value="all">All FAQs</TabsTrigger>
                        </TabsList>
                        <TabsContent value="common">
                            <div className="space-y-4">
                                {commonFaqs.map((faq, index) => (
                                    <Card key={index}>
                                        <CardContent className="p-4">
                                            <h3 className="font-semibold mb-2 font-sports">{faq.question}</h3>
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="all">
                            <p className="text-center text-gray-600">Full FAQ list coming soon...</p>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}

