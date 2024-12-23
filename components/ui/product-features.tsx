'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'


export default function ProductFeatures() {
    const features = [
        {
            title: "Premium Materials",
            description: "Made with lightweight, breathable fabrics that keep you comfortable during every match.",
            image: "/product-features/complete.jpg",
        },
        {
            title: "Advanced Technology",
            description: "Incorporating cutting-edge moisture-wicking technology for optimal performance.",
            image: "/product-features/detail.jpg",
        },
        {
            title: "Performance Design",
            description: "Engineered with ergonomic patterns to enhance player movement and comfort.",
            image: "/product-features/main.jpg",
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left grid - full height image */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[1200px]"
            >
                <Image
                    src={features[0].image}
                    alt={features[0].title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-8 md:p-12">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {features[0].title}
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-200 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        {features[0].description}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {/* <Button
                            variant="outline"
                            className="bg-red-600 hover:bg-red-700 text-white transition-colors duration-300"
                        // className="text-black border border-black hover:bg-black hover:text-white transition-colors"
                        >
                            Learn more
                        </Button> */}
                    </motion.div>
                </div>
            </motion.div>

            {/* Right grid - two sections */}
            <div className="grid grid-rows-2 h-[1200px]">
                {features.slice(1).map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[600px]"
                    >
                        <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-8 md:p-12">
                            <motion.h2
                                className="text-3xl md:text-4xl font-bold text-white mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                {feature.title}
                            </motion.h2>
                            <motion.p
                                className="text-lg text-gray-200 mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                {feature.description}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                {/* <Button
                                    variant="outline"
                                    className="bg-red-600 hover:bg-red-700 text-white transition-colors duration-300"
                                >
                                    Learn more
                                </Button> */}
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}