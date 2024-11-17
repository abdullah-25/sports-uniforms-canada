'use client'


import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import Link from "next/link"



export default function AboutUs() {
    return (
        <div className="relative">
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">About Sports Uniforms Canada</h2>
                    <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
                        Sports Uniforms Canada is dedicated to providing high-quality, customizable uniforms for teams across the nation. With our commitment to excellence and customer satisfaction, we've become a trusted partner for sports organizations of all sizes.
                    </p>
                    <div className="text-center">
                        <Link
                            href={{
                                pathname: `/about`,

                            }}
                        >
                            <Button variant="outline" size="lg">
                                Learn More About Us
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

        </div>

    )
}