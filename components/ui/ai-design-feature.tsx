'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wand2, Star, ChevronRight, Play } from 'lucide-react'

const features = [
    {
        title: "Instant Custom Designs",
        description: "Generate unique designs in seconds"
    },
    {
        title: "No Design Skills Needed",
        description: "AI does all the creative work for you"
    },
    {
        title: "Unlimited Combinations",
        description: "Explore endless color and pattern options"
    },
    {
        title: "Smart Pattern Generation",
        description: "AI-powered patterns that look professional"
    },
    {
        title: "Real-time 3D Preview",
        description: "See your design from every angle"
    },
    {
        title: "Guaranteed Quality",
        description: "Premium materials and printing"
    }
]

const testimonial = {
    name: "Ahmed",
    role: "Team Manager",
    text: "The AI Designer made creating our team uniforms incredibly easy. We got exactly what we wanted in minutes!",
    rating: 5
}

const contentExamples = [
    { type: 'video', src: '/sportsuniforms-ai.mp4', poster: '' },
]

export default function AIDesignerFeature() {
    const [isHovered, setIsHovered] = useState(false)
    // const [isPlaying, setIsPlaying] = useState(false)

    return (
        <section className="py-8 bg-gradient-to-br from-gray-50 to-red-50 ">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div>
                            <Badge className="bg-red-100 text-red-800 hover:bg-red-100 mb-4">
                                AI-Powered Design
                            </Badge>
                            <h2 className="text-4xl  font-bold mb-4">Design Your Dream Jersey with AI</h2>
                            <p className="text-lg  mb-6">
                                Experience the future of sports uniform design with our cutting-edge AI Designer.
                                Create unique, personalized jerseys in minutes, no design skills required!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start space-x-3"
                                >
                                    <Wand2 className="w-5 h-5 text-red-600 mt-1 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold">{feature.title}</h3>
                                        <p className="text-sm text-gray-600">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <Link href="/ai-designer">
                            <Button
                                size="lg"
                                className="mt-5 bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto"
                            >
                                Create Your Dream Jersey Now
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>

                        <Card className="mt-8">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-2">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                                <div>
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div
                            className="relative aspect-[3/4] rounded-xl overflow-hidden"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {/* <Image
                                src="/placeholder.svg?height=800&width=600&text=AI+Jersey+Preview"
                                alt="AI-generated jersey design"
                                fill
                                className="object-cover transition-transform duration-300"
                                style={{
                                    transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                                }}
                            /> */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {/* {!isPlaying && (
                                <button
                                    onClick={() => setIsPlaying(true)}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full transition-colors"
                                >
                                    <Play className="w-8 h-8 text-red-600" />
                                </button>
                            )} */}


                            <video
                                src={contentExamples[0].src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className='w-full h-full object-cover'
                            // className="absolute inset-0 w-full h-full object-cover"
                            >
                                {/* <source src="/sportsuniforms.mp4" type="video/mp4" />
                                    Your browser does not support the video tag. */}
                            </video>


                            <div className="absolute bottom-4 left-4 right-4">
                                <p className="text-white text-sm">AI-generated design example</p>
                                {isHovered && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-white/80 text-sm mt-2"
                                    >
                                        Click to see the design process in action
                                    </motion.p>
                                )}
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-4 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                            Ready in Seconds
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}






// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import Link from 'next/link'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Wand2 } from 'lucide-react'

// export default function AIDesignerFeature() {
//     return (
//         <section className="py-16 bg-gradient-to-br from-gray-100 to-red-50">
//             <div className="container mx-auto px-4">
//                 <Card className="overflow-hidden border-red-200">
//                     <CardContent className="p-0">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                             <motion.div
//                                 className="p-8"
//                                 initial={{ opacity: 0, x: -20 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 0.5 }}
//                                 viewport={{ once: true }}
//                             >
//                                 <h2 className="text-3xl font-bold mb-4 text-gray-900">Design Your Dream Jersey with AI</h2>
//                                 <p className="text-gray-700 mb-6">
//                                     Experience the future of sports uniform design with our cutting-edge AI Designer.
//                                     Create unique, personalized jerseys in minutes, no design skills required!
//                                 </p>
//                                 <ul className="list-disc list-inside text-gray-700 mb-6">
//                                     <li>Instant custom designs</li>
//                                     <li>Unlimited color combinations</li>
//                                     <li>Smart pattern generation</li>
//                                     <li>Real-time 3D preview</li>
//                                 </ul>
//                                 <Link href="/ai-designer">
//                                     <Button size="lg" className="group bg-red-600 hover:bg-red-700 text-white">
//                                         Try AI Designer
//                                         <Wand2 className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
//                                     </Button>
//                                 </Link>
//                             </motion.div>
//                             <motion.div
//                                 className="relative h-64 md:h-full"
//                                 initial={{ opacity: 0, scale: 0.9 }}
//                                 whileInView={{ opacity: 1, scale: 1 }}
//                                 transition={{ duration: 0.5 }}
//                                 viewport={{ once: true }}
//                             >
//                                 <Image
//                                     src="/gallery/ai-design.png"
//                                     alt="AI Designer Preview"
//                                     fill

//                                     className="object-cover rounded-r-lg"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-r-lg" />
//                                 <div className="absolute bottom-4 left-4 right-4 text-white">
//                                     <p className="text-sm font-medium">AI-generated design example</p>
//                                 </div>
//                             </motion.div>
//                         </div>
//                     </CardContent>
//                 </Card>
//             </div>
//         </section>
//     )
// }