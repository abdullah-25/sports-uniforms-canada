'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight, Wand2 } from 'lucide-react'
import Slider from 'react-slick'

// You'll need to install these packages:
// npm install react-slick @types/react-slick slick-carousel

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
        // title: "Elevate Your Team's Look",
        description: "Custom uniforms that capture your team's spirit, without the wait",
    },
    {
        src: "/secondHero.jpg",
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
]

export default function ModernHeaderHero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
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
        autoplaySpeed: 5000,
        fade: true,
        beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex)
    }

    return (
        <div className="relative">
            <header
                className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-90 py-2' : 'bg-transparent py-4'
                    }`}
            >
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-white">
                        <Image
                            src='/logo.png'
                            alt="Sports Uniforms Canada"
                            width={60}
                            height={60}
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
                        </div>
                    ))}
                </Slider>
                <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-3xl"
                        >
                            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 w-full ">
                                {heroImages[currentSlide].title}
                            </h1>
                            <p className="text-xl md:text-1xl text-gray-200 mb-8">
                                {heroImages[currentSlide].description}
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <Link
                                    href={{
                                        pathname: `/contact`,

                                    }}
                                >
                                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                                        Request a Quote
                                        <ChevronRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>

                                <Link
                                    href={{
                                        pathname: `/ai-designer`,

                                    }}
                                >
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
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </div >
    )
}
// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Button } from "@/components/ui/button"
// import { Menu, X, ChevronRight, Wand2 } from 'lucide-react'
// import { Sparkles } from 'lucide-react'


// const navItems = [
//     { name: 'Products', href: '/products' },
//     { name: 'AI Designer', href: '/ai-designer' },
//     { name: 'About', href: '/about' },
//     { name: 'Gallery', href: '/gallery' },
//     { name: 'Contact', href: '/contact' },
// ]

// const heroTexts = [
//     "Elevate Your Team's Look",
//     "Customized for Champions",
//     "Quality Uniforms, Delivered",
// ]

// export default function ModernHeaderHero() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false)
//     const [currentTextIndex, setCurrentTextIndex] = useState(0)
//     const [isScrolled, setIsScrolled] = useState(false)

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentTextIndex((prevIndex) => (prevIndex + 1) % heroTexts.length)
//         }, 3000)

//         return () => clearInterval(interval)
//     }, [])

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 50)
//         }

//         window.addEventListener('scroll', handleScroll)

//         // Cleanup function to remove the event listener
//         return () => window.removeEventListener('scroll', handleScroll)
//     }, [])

//     return (
//         <div className="relative">
//             <header
//                 className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-90 py-2' : 'bg-transparent py-4'
//                     }`}
//             >
//                 <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
//                     <Link href="/" className="text-2xl font-bold text-white">
//                         <Image
//                             src='/thumbnail_IMG_1937-removebg-preview.png'
//                             alt="Sports Uniforms Canada"
//                             width={50} // Adjust based on your logo's dimensions
//                             height={50} // Adjust based on your logo's dimensions
//                             priority
//                         />
//                     </Link>
//                     <div className="hidden md:flex space-x-6">
//                         {navItems.map((item) => (
//                             <Link
//                                 key={item.name}
//                                 href={item.href}
//                                 className="text-white hover:text-red-500 transition-colors"
//                             >
//                                 {item.name}
//                             </Link>
//                         ))}
//                     </div>
//                     <Button
//                         variant="outline"
//                         size="icon"
//                         className="md:hidden text-black border-white hover:bg-white hover:text-black"
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     >
//                         <span className="sr-only">Toggle menu</span>
//                         {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </Button>
//                 </nav>
//             </header>

//             <AnimatePresence>
//                 {isMenuOpen && (
//                     <motion.div
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -20 }}
//                         className="absolute top-16 left-0 right-0 bg-black z-20 md:hidden"
//                     >
//                         <nav className="container mx-auto px-6 py-4">
//                             {navItems.map((item) => (
//                                 <Link
//                                     key={item.name}
//                                     href={item.href}
//                                     className="block py-2 text-white hover:text-red-500 transition-colors"
//                                     onClick={() => setIsMenuOpen(false)}
//                                 >
//                                     {item.name}
//                                 </Link>
//                             ))}
//                         </nav>
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             <section className="relative h-screen flex items-center justify-center overflow-hidden">
// <Image
//     src="/DSC_7899-Enhanced-NR.jpg"
//     alt="Sports team in action"
//     layout="fill"
//     objectFit="cover"
//     className="absolute inset-0"
//     priority
// />
//                 <div className="absolute inset-0 bg-black bg-opacity-50" />
//                 <div className="relative z-10 text-center text-white">
//                     <motion.h1
//                         className="text-4xl md:text-6xl font-bold mb-4"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         Sports Uniforms Canada
//                     </motion.h1>
//                     <AnimatePresence mode="wait">
//                         <motion.p
//                             key={currentTextIndex}
//                             className="text-xl md:text-2xl mb-8"
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -20 }}
//                             transition={{ duration: 0.5 }}
//                         >
//                             {heroTexts[currentTextIndex]}
//                         </motion.p>
//                     </AnimatePresence>
//                     <motion.div
//                         className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}


//                     >
// <Link
//     href={{
//         pathname: `/contact`,

//     }}
// >
//     <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
//         Request a Quote
//         <ChevronRight className="ml-2 h-4 w-4" />
//     </Button>
// </Link>

// <Link
//     href={{
//         pathname: `/ai-designer`,

//     }}
// >
//     <Button
//         size="lg"
//         variant="outline"
//         className="text-black border-white group"
//     >
//         Try Our AI Designer
//         <Wand2 className="ml-2 h-5 w-5 group-hover:text-purple-500 transition-colors" />
//     </Button>
// </Link>


//                     </motion.div>
//                 </div>
//                 <motion.div
//                     className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.4 }}
//                 >
//                     <svg
//                         className="animate-bounce w-6 h-6 text-white"
//                         fill="none"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//                     </svg>
//                 </motion.div>
//             </section>
//         </div>
//     )
// }