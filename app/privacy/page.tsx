"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Shield } from "lucide-react"

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#020617] text-slate-300">
            <Header />

            <main className="flex-1 pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-4 bg-blue-500/10 rounded-2xl mb-6">
                            <Shield className="w-8 h-8 text-blue-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Privacy Policy</h1>
                        <p className="text-xl text-slate-400">Last updated: January 21, 2026</p>
                    </div>

                    <div className="space-y-12 bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                            <p className="leading-relaxed mb-4">
                                Welcome to SnappGame ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Data We Collect</h2>
                            <p className="leading-relaxed mb-4">
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong className="text-white">Identity Data:</strong> includes username or similar identifier.</li>
                                <li><strong className="text-white">Contact Data:</strong> includes email address.</li>
                                <li><strong className="text-white">Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                                <li><strong className="text-white">Usage Data:</strong> includes information about how you use our website, products and services.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
                            <p className="leading-relaxed mb-4">
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                <li>Where we need to comply with a legal obligation.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                            <p className="leading-relaxed">
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
                            <p className="leading-relaxed">
                                If you have any questions about this privacy policy or our privacy practices, please contact us at:
                            </p>
                            <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10 inline-block">
                                <p className="font-mono text-blue-300">privacy@snappgame.com</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
