'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const ImageCarouselSection = () => {
    return (
        <section className="py-8 bg-gradient-to-br from-gray-50 to-red-50">
            <div className="container px-6 md:px-4 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Gallery</h2>
                </div>

                <div className="mb-8">
                    <Carousel
                        opts={{
                            // align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {[1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12].map((image) => (
                                <CarouselItem key={image} className="pl-2 md:pl-4 basis-1/1 px-4 md:basis-1/2 lg:basis-1/4">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: image * 0.1 }}
                                        className="relative group overflow-hidden rounded-lg h-[250px]"
                                    >
                                        <Image
                                            src={`/gallery/games-${image}.jpg`}
                                            alt={`In-game photo ${image}`}
                                            width={800}
                                            height={900}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex items-center justify-center mt-10">
                            <CarouselPrevious className="relative static mx-2" />
                            <CarouselNext className="relative static mx-2" />
                        </div>
                    </Carousel>
                </div>

                <div className="text-center">
                    <Link href="/gallery">
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-red-600 hover:bg-red-700 text-white transition-colors duration-300"
                        >
                            View Full Gallery
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ImageCarouselSection;
