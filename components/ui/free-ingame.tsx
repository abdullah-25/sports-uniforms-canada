'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Play, Share2, ChevronRight } from 'lucide-react'

const contentExamples = [
    // { type: 'image', src: '/placeholder.svg?height=600&width=800&text=Action+Shot+1', alt: 'Soccer team scoring a goal' },
    // { type: 'image', src: '/placeholder.svg?height=600&width=800&text=Action+Shot+2', alt: 'Basketball team celebrating' },
    { type: 'video', src: '/video.MP4', alt: 'game vidoe', poster: '' },
]

const features = [
    { icon: Camera, title: 'Instant Highlights', description: 'Professionally shot photos and videos delivered after the game' },
    // { icon: Share2, title: 'Share Your Success', description: 'Easily share with your team, fans, and on social media' },
    { icon: Play, title: 'Memories for Life', description: "Relive your team's best moments, whether you're playing at a tournament or a local league" },
]

export default function FreeInGameContent() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % contentExamples.length)
        }, 5000)

        // const handleScroll = () => {
        //     const scrollPosition = window.scrollY
        //     const componentPosition = document.getElementById('free-content-section')?.offsetTop || 0
        //     setIsSticky(scrollPosition > componentPosition + window.innerHeight)
        // }

        // window.addEventListener('scroll', handleScroll)

        // return () => {
        //     clearInterval(interval)
        //     window.removeEventListener('scroll', handleScroll)
        // }
    }, [])

    return (
        <section id="free-content-section" className="py-8 bg-gradient-to-br from-gray-50 to-red-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
                    {/* Left side - Video */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative aspect-video rounded-xl overflow-hidden"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                {contentExamples[currentSlide].type === 'image' ? (
                                    <Image
                                        src={contentExamples[currentSlide].src}
                                        alt={contentExamples[currentSlide].alt}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <video
                                        src={contentExamples[currentSlide].src}
                                        poster={contentExamples[currentSlide].poster}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline

                                    />
                                )}
                            </motion.div>
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                            <p className="text-lg font-semibold">This could be your team's highlight!</p>
                            <p className="text-sm">Professional quality content delivered after every game</p>
                        </div>
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-8 mt-8"
                    >
                        <div className="">
                            <Badge className="bg-red-100 text-white-800 hover:bg-red-100 mb-4">
                                Exclusive Offer*
                            </Badge>
                            <h2 className="text-3xl font-bold mb-4">Free Content with Every Jersey Purchase</h2>
                            <p className="text-lg text-gray-600">
                                Get professional in-game content to capture your team's best moments—at no extra cost. Perfect for sharing highlights and building your team's presence.
                            </p>
                            <p className="text-sm mt-2 text-gray-600">
                                * Only available for teams located in the GTA. Not all teams may be selected.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start space-x-4"
                                >
                                    <div className="bg-red-100 p-3 rounded-full">
                                        <feature.icon className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact">
                                <Button size="lg" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white">
                                    Get Free In-Game Content
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

