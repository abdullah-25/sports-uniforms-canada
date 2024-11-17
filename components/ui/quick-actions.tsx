'use client'


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from 'lucide-react'


export default function QuickActions() {
    return (
        <div className="relative">
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Quick Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {['Request a Quote', 'Explore Templates', 'AI Jersey Designer'].map((action, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <h3 className="text-xl font-semibold mb-2">{action}</h3>
                                    <p className="text-gray-700 mb-4">Quick and easy way to get started</p>
                                    <Button variant="outline">
                                        Get Started
                                        <ChevronRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

        </div>

    )
}


