'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"



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

export default function Faq() {
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
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-sports">Frequently Asked Questions</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Find answers to common questions about our custom sports uniforms, ordering process, and more.
                </p>

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
                        <TabsList className="flex flex-wrap gap-2 ">
                            <TabsTrigger value="all" className="flex-1 min-w-24" >All</TabsTrigger>
                            {Object.entries(faqCategories).map(([key, label]) => (
                                <TabsTrigger key={key} value={key} className="flex-1 min-w-24" >{label}</TabsTrigger>
                            ))}
                        </TabsList>

                        <div className="space-y-4 mt-8 md:mt-12">
                            {filteredFaqs.map((faq, index) => (
                                <Card key={index} className="border-0 shadow-sm">
                                    <CardContent className="p-0">
                                        <button
                                            onClick={() => toggleQuestion(index)}
                                            className="w-full text-left px-4 py-3 md:px-6 md:py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-sm md:text-base"
                                        >
                                            <h3 className="font-semibold pr-4 md:pr-8">{faq.question}</h3>
                                            <ChevronDown
                                                className={cn(
                                                    "h-5 w-5 text-gray-500 transition-transform",
                                                    openQuestions[index] && "transform rotate-180"
                                                )}
                                            />
                                        </button>
                                        {openQuestions[index] && (
                                            <div className="px-6 pb-4 pt-2 text-gray-600 text-sm md:text-base">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}

                            {filteredFaqs.length === 0 && (
                                <div className="text-center py-8 text-gray-500">
                                    No FAQ matches your search. Please try different keywords.
                                </div>
                            )}
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}
