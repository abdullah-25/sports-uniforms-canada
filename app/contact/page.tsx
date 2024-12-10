'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight, Mail, Phone, MapPin } from 'lucide-react'
import { Inter } from 'next/font/google'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current!,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setSubmitStatus('success');
            if (formRef.current) {
                formRef.current.reset();
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="relative custom-bg">
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 "></div>

            {/* Content container */}
            <div className="relative px-4 md:px-24 py-16 md:py-28 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-12 text-center text-black my-10"></h1>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Form Card */}
                    <Card className="backdrop-blur-sm bg-white/95">
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                            {submitStatus === 'success' && (
                                <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-md">
                                    Thank you! We'll get back to you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
                                    Something went wrong. Please try again.
                                </div>
                            )}
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <Input name="user_name" id="name" placeholder="Your Name" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <Input name="user_email" id="email" type="email" placeholder="your@email.com" required />
                                </div>
                                <div>
                                    <label htmlFor="inquiry-type" className="block text-sm font-medium text-gray-700 mb-1">Inquiry Type</label>
                                    <Select name="inquiry_type" required>
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
                                    <Textarea name="message" id="message" placeholder="Your message here..." rows={4} required />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Info Cards */}
                    <div className="space-y-6">
                        <Card className="backdrop-blur-sm bg-white/95">
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
                                        <span>145 Wicksteed Ave, East York, ON, M4G 4H9 *</span>
                                    </div>

                                    <div className="flex items-center">

                                        <span> * Please let us know before visiting, as this is a shared facility.</span>
                                    </div>


                                </div>
                            </CardContent>
                        </Card>

                        {/* <Card className="backdrop-blur-sm bg-white/95">
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
                                <ul className="space-y-2">
                                    <li><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</li>
                                    <li><strong>Saturday:</strong> 10:00 AM - 2:00 PM</li>
                                    <li><strong>Sunday:</strong> Closed</li>
                                </ul>
                            </CardContent>
                        </Card> */}

                        <Card className="backdrop-blur-sm bg-white/95">
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://www.instagram.com/sportsuniformscanada/"
                                        className="text-red-600 hover:text-red-800 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Instagram
                                    </a>
                                    <a
                                        href="https://www.facebook.com/profile.php?id=61564086935491"
                                        className="text-red-600 hover:text-red-800 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Facebook
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/company/sportsuniformscanada"
                                        className="text-red-600 hover:text-red-800 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Linkedin
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    )
}