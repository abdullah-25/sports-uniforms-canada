'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'


export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            rating: 5,
            text: "High-quality jerseys, efficient service, and affordable pricing. The team at Sports Uniforms Canada truly stands out in the industry.",
            author: "Shaila",
            organization: "Ismaili Sports League"
        },
        {
            id: 2,
            rating: 5,
            text: "Sports Uniforms Canada delivered exactly what we needed—great quality jerseys, fast service, and no hassles. Couldn’t be happier!",
            author: "Victor",
            organization: "Aiden F.C"
        },
        {
            id: 3,
            rating: 5,
            text: "Outstanding uniforms and friendly service. Sports Uniforms Canada made the whole process easy from start to finish.",
            author: "Joey",
            organization: "Penalties Only"
        },
    ]
    return (
        <div className="relative">
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial) => (
                            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        {[...Array(testimonial.rating)].map((_, index) => (
                                            <Star key={index} className="h-5 w-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                                        <div>
                                            <p className="font-semibold">{testimonial.author}</p>
                                            <p className="text-sm text-gray-500">{testimonial.organization}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>


        </div>

    )
}
