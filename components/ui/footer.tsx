

'use client'
import Link from 'next/link'


export default function Footer() {
    return (
        <div className="relative">
            <footer className="bg-black text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Sports Uniforms Canada</h3>
                            <p className="text-sm text-gray-400">Providing high-quality custom uniforms for teams across Canada.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link href="/products" className="text-sm text-gray-400 hover:text-white">Products</Link></li>
                                <li><Link href="/ai-designer" className="text-sm text-gray-400 hover:text-white">AI Designer</Link></li>
                                <li><Link href="/about" className="text-sm text-gray-400 hover:text-white">About Us</Link></li>
                                <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <p className="text-sm text-gray-400 mb-2">Email: sportsuniformscanada@gmail.com</p>
                            <p className="text-sm text-gray-400">Phone: 647-677-5465</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Sports Uniforms Canada. All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </div>

    )
}

