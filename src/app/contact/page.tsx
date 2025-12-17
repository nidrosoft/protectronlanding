"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail01, MarkerPin02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Header } from "@/components/marketing/header-navigation/header";
import { Footer } from "@/components/shared/footer";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-primary pt-32 pb-16 md:pt-40 md:pb-24">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-100/40 via-transparent to-transparent dark:from-brand-900/20" />
            <div className="relative mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-400">
                        Get in Touch
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        We'd love to hear from you
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        Our friendly team is always here to chat. Reach out and let's talk.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const ContactLinksSection = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto flex w-full max-w-3xl flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">Contact Information</h2>
                    <p className="mt-4 text-lg text-tertiary">Choose the best way to reach us.</p>
                </motion.div>

                <motion.div 
                    className="mt-12 md:mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 max-w-2xl mx-auto">
                        <li className="flex max-w-sm flex-col items-center text-center">
                            <FeaturedIcon className="hidden md:flex" size="lg" icon={Mail01} color="brand" theme="light" />
                            <FeaturedIcon className="md:hidden" size="md" icon={Mail01} color="brand" theme="light" />
                            <h3 className="mt-4 text-lg font-semibold text-primary md:mt-5 md:text-xl">Email</h3>
                            <p className="mt-1 text-md text-tertiary md:mt-2">Our friendly team is here to help.</p>
                            <Button color="link-color" size="lg" href="mailto:hello@protectron.ai" className="mt-4 md:mt-5">
                                hello@protectron.ai
                            </Button>
                        </li>
                        <li className="flex max-w-sm flex-col items-center text-center">
                            <FeaturedIcon className="hidden md:flex" size="lg" icon={MarkerPin02} color="brand" theme="light" />
                            <FeaturedIcon className="md:hidden" size="md" icon={MarkerPin02} color="brand" theme="light" />
                            <h3 className="mt-4 text-lg font-semibold text-primary md:mt-5 md:text-xl">Office</h3>
                            <p className="mt-1 text-md text-tertiary md:mt-2">Come say hello at our office.</p>
                            <Button color="link-color" size="lg" href="https://maps.google.com/?q=San+Diego,+CA" className="mt-4 whitespace-pre md:mt-5">
                                {"San Diego, CA\nUnited States"}
                            </Button>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

const ContactFormSection = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        privacy: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form data:", formData);
    };

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto flex w-full max-w-3xl flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Send a message</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Get in touch</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">We'd love to hear from you. Please fill out this form.</p>
                </motion.div>

                <motion.div 
                    className="mt-12 md:mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <form
                        onSubmit={handleSubmit}
                        className="mx-auto flex w-full flex-col gap-8 md:max-w-[480px]"
                    >
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-x-8 gap-y-6 sm:flex-row">
                                <div className="flex-1">
                                    <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-1.5">
                                        First name <span className="text-error-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        required
                                        placeholder="First name"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        className="w-full rounded-lg border border-primary bg-primary px-3.5 py-2.5 text-md text-primary placeholder:text-quaternary focus:border-brand-300 focus:outline-none focus:ring-4 focus:ring-brand-100 dark:focus:ring-brand-900/30"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-1.5">
                                        Last name <span className="text-error-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        required
                                        placeholder="Last name"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        className="w-full rounded-lg border border-primary bg-primary px-3.5 py-2.5 text-md text-primary placeholder:text-quaternary focus:border-brand-300 focus:outline-none focus:ring-4 focus:ring-brand-100 dark:focus:ring-brand-900/30"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">
                                    Email <span className="text-error-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="you@company.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full rounded-lg border border-primary bg-primary px-3.5 py-2.5 text-md text-primary placeholder:text-quaternary focus:border-brand-300 focus:outline-none focus:ring-4 focus:ring-brand-100 dark:focus:ring-brand-900/30"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">
                                    Message <span className="text-error-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Leave us a message..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full rounded-lg border border-primary bg-primary px-3.5 py-2.5 text-md text-primary placeholder:text-quaternary focus:border-brand-300 focus:outline-none focus:ring-4 focus:ring-brand-100 dark:focus:ring-brand-900/30 resize-none"
                                />
                            </div>

                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    name="privacy"
                                    checked={formData.privacy}
                                    onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                                    className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                                />
                                <label htmlFor="privacy" className="text-sm text-tertiary">
                                    You agree to our friendly{" "}
                                    <a href="/privacy" className="underline underline-offset-2 hover:text-primary">
                                        privacy policy
                                    </a>
                                    .
                                </label>
                            </div>
                        </div>

                        <Button type="submit" size="xl" className="w-full">
                            Send message
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default function ContactPage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <ContactLinksSection />
            <ContactFormSection />
            <Footer />
        </div>
    );
}
