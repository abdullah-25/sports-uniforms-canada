'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'

const trustedBy = [
    { name: 'Ismaili', logo: `/Ismaili.png` },
    { name: 'Taaqat', logo: `/Taaqat.png` },
    { name: 'Aiden', logo: `/Aiden.png` },
    { name: 'AV', logo: `/AV.png` },
    { name: 'Sirs', logo: `/Sirs.png` },
    { name: 'Sorella', logo: `/Sorella.png` },
    { name: 'Sixco', logo: `/Sixco.png` },
]

export default function TrustedByCarousel() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: false, amount: 0.5 })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start('visible')
        }
    }, [isInView, controls])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <section className="py-20 bg-black" ref={containerRef}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16 text-white">Trusted By</h2>
                <motion.div
                    className="overflow-hidden"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.div
                        className="flex space-x-8"
                        animate={{
                            x: [0, -100 * trustedBy.length],
                            transition: {
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear",
                                },
                            },
                        }}
                    >
                        {[...trustedBy, ...trustedBy].map((company, index) => (
                            <motion.div
                                key={`${company.name}-${index}`}
                                className="flex-shrink-0"
                                variants={itemVariants}
                            >
                                <Image
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    width={200}
                                    height={80}
                                    className="h-20 w-auto object-contain"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}