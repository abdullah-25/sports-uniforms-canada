'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navItems = [
    { name: 'Products', href: '/products' },
    { name: 'AI Designer', href: '/ai-designer' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    // Check if we're on the homepage
    const isHomePage = pathname === '/'

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Return null on homepage
    if (isHomePage) {
        return null
    }

    // Show solid header on all other pages
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-10 bg-black">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-white">
                        <Image
                            src='/logo.png'
                            alt="Sports Uniforms Canada"
                            width={50}
                            height={50}
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
                        className="md:hidden text-white border-white hover:bg-white hover:text-black"
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
                        <nav className="container mx-auto px-6 py-4">
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
        </>
    )
}