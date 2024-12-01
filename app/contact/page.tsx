'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight, Mail, Phone, MapPin } from 'lucide-react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
    return (
        <main className="flex-grow container mx-auto px-4 py-28 ">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

            <div className="grid gap-8 md:grid-cols-2">
                <Card>
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <Input id="name" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <Input id="email" type="email" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label htmlFor="inquiry-type" className="block text-sm font-medium text-gray-700 mb-1">Inquiry Type</label>
                                <Select>
                                    <SelectTrigger id="inquiry-type">
                                        <SelectValue placeholder="Select inquiry type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="general">General Inquiry</SelectItem>
                                        <SelectItem value="quote">Request a Quote</SelectItem>
                                        <SelectItem value="custom">Custom Design</SelectItem>
                                        <SelectItem value="support">Customer Support</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <Textarea id="message" placeholder="Your message here..." rows={4} />
                            </div>
                            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                                Send Message
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                <div className="space-y-8">
                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Mail className="h-5 w-5 mr-2 text-red-600" />
                                    <span>sportsuniformscanada@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="h-5 w-5 mr-2 text-red-600" />
                                    <span>647-677-5465</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="h-5 w-5 mr-2 text-red-600" />
                                    <span>123 Uniform Street, Toronto, ON M1M 1M1</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
                            <ul className="space-y-2">
                                <li><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</li>
                                <li><strong>Saturday:</strong> 10:00 AM - 2:00 PM</li>
                                <li><strong>Sunday:</strong> Closed</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
                            <div className="flex space-x-4">
                                {/* <a href="#" className="text-red-600 hover:text-red-800">Facebook</a> */}
                                <a href="https://www.instagram.com/sportsuniformscanada/" className="text-red-600 hover:text-red-800">Instagram</a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
}