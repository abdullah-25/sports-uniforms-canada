'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight, Wand2 } from 'lucide-react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const navItems = [
    { name: 'Products', href: '/products' },
    { name: 'AI Designer', href: '/ai-designer' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
]

const heroImages = [
    {
        src: "/DSC_7899-Enhanced-NR.jpg",
        alt: "Sports team in action",
        title: "Your Dream Jersey, Designed by AI in Seconds",
        description: "Custom uniforms that capture your team's spirit, without the wait",
    },
    {
        src: "/seventhHero.jpg",
        alt: "Basketball team on court",
        title: "Stand Out on the Court",
        description: "Performance meets style",
    },
    {
        src: "/thirdHero.jpg",
        alt: "Basketball team celebrating",
        title: "Unite in Victory",
        description: "Quality uniforms, delivered",
    },
    {
        src: "/fourthHero.jpg",
        alt: "Sports team in action",
        title: "Elite Team Gear",
        description: "Champions wear excellence",
    },
    {
        src: "/fifthHero.jpg",
        alt: "Basketball team on court",
        title: "Victory Essential",
        description: "Premium sportswear simplified",
    },
    {
        src: "/sixthHero.jpg",
        alt: "Basketball team celebrating",
        title: "Pro Squad Supply",
        description: "Gear that performs, delivered",
    },
    {
        src: "/secondHero.jpg",
        alt: "Basketball team celebrating",
        title: "Game Day Ready",
        description: "Trusted by athletes",
    },
    {
        src: "/eightHero.jpg",
        alt: "Basketball team celebrating",
        title: "Victory Essential",
        description: "Premium sportswear simplified",
    },
]

export default function ModernHeaderHero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        pauseOnHover: false
    }

    return (
        <div className="relative">
            <header
                className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-90 py-2' : 'bg-transparent py-4'
                    }`}
            >
                <nav className=" mx-auto px-6 py-2 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-white">
                        <Image
                            src='/logo-new.PNG'
                            alt="Sports Uniforms Canada"
                            width={90}
                            height={90}
                            className="w-[70px] h-[70px] md:w-[95px] md:h-[90px]"
                            priority
                        />
                    </Link>
                    <div className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-white hover:text-red-500 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        className="md:hidden text-black border-white hover:bg-white hover:text-black"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="sr-only">Toggle menu</span>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </nav>
            </header>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-16 left-0 right-0 bg-black z-20 md:hidden"
                    >
                        <nav className=" mx-auto px-6 py-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block py-2 text-white hover:text-red-500 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            <section className="relative h-screen overflow-hidden">
                <Slider {...settings} className="h-full overflow-x-hidden [&_.slick-list]:h-full [&_.slick-track]:h-full [&_.slick-slide]:h-full [&_.slick-slide>div]:h-full">
                    {heroImages.map((image, index) => (
                        <div key={index} className="relative h-full">
                            <div className="absolute inset-0">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes="100vw"
                                    quality={100}
                                    priority={index === 0}
                                    className="object-cover"
                                    style={{
                                        objectPosition: 'center 20%'
                                    }}
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-16">
                                <div className="max-w-3xl">
                                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 w-full">
                                        {image.title}
                                    </h1>
                                    <p className="text-xl md:text-1xl text-gray-200 mb-8">
                                        {image.description}
                                    </p>
                                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                        <Link href="/contact">
                                            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                                                Request a Quote
                                                <ChevronRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                        <Link href="/ai-designer">
                                            <Button
                                                size="lg"
                                                variant="outline"
                                                className="text-black border-white group"
                                            >
                                                Try Our AI Designer
                                                <Wand2 className="ml-2 h-5 w-5 group-hover:text-purple-500 transition-colors" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        </div>
    )
}
