"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, Download, CheckCircle2, Shield, Clock, Users, X, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/components/marketing/header-navigation/header";
import { Footer } from "@/components/shared/footer";

const EmailCaptureModal = ({ isOpen, onClose, onSubmit }: { isOpen: boolean; onClose: () => void; onSubmit: (email: string) => void }) => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        
        if (!email || !email.includes("@")) {
            setError("Please enter a valid email address");
            return;
        }

        setIsSubmitting(true);
        
        // Simulate API call - in production, this would send to your backend
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        onSubmit(email);
        setIsSubmitting(false);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
                <motion.div
                    className="relative w-full max-w-md rounded-2xl border border-primary bg-primary p-6 shadow-2xl"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                >
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 rounded-lg p-1 text-tertiary hover:bg-secondary hover:text-primary transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <div className="text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/30">
                            <FileText className="h-6 w-6 text-brand-600" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-primary">
                            Get Your Free Checklist
                        </h3>
                        <p className="mt-2 text-sm text-tertiary">
                            Enter your email and we'll send you the EU AI Act Compliance Checklist PDF.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-primary">
                                Work Email
                            </label>
                            <div className="mt-1 relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-tertiary" />
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@company.com"
                                    className="w-full rounded-lg border border-primary bg-secondary py-2.5 pl-10 pr-4 text-primary placeholder:text-tertiary focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                                />
                            </div>
                            {error && <p className="mt-2 text-sm text-error-600">{error}</p>}
                        </div>

                        <Button
                            type="submit"
                            color="primary"
                            size="lg"
                            className="mt-4 w-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Download Checklist"}
                        </Button>

                        <p className="mt-4 text-center text-xs text-tertiary">
                            By downloading, you agree to receive occasional updates from Protectron. Unsubscribe anytime.
                        </p>
                    </form>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const SuccessModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    const handleDownload = () => {
        // Trigger the actual PDF download
        const link = document.createElement("a");
        link.href = "/eu-ai-act-compliance-checklist.pdf";
        link.download = "EU-AI-Act-Compliance-Checklist.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
                <motion.div
                    className="relative w-full max-w-md rounded-2xl border border-primary bg-primary p-6 shadow-2xl"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                >
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 rounded-lg p-1 text-tertiary hover:bg-secondary hover:text-primary transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <div className="text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success-100 dark:bg-success-900/30">
                            <CheckCircle2 className="h-6 w-6 text-success-600" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-primary">
                            Check Your Email!
                        </h3>
                        <p className="mt-2 text-sm text-tertiary">
                            We've sent the EU AI Act Compliance Checklist to your inbox. You can also download it directly below.
                        </p>
                    </div>

                    <div className="mt-6 space-y-3">
                        <Button
                            onClick={handleDownload}
                            color="primary"
                            size="lg"
                            className="w-full"
                        >
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF Now
                        </Button>
                        <Button
                            onClick={onClose}
                            color="secondary"
                            size="lg"
                            className="w-full"
                        >
                            Close
                        </Button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const HeroSection = ({ onDownloadClick }: { onDownloadClick: () => void }) => {
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
                        Free Resource
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        EU AI Act Compliance Checklist
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        The complete checklist for EU AI Act compliance. 113 requirements across all risk categories, organized by article and deadline.
                    </p>
                    <div className="mt-8">
                        <Button size="xl" color="primary" onClick={onDownloadClick}>
                            <Download className="mr-2 h-5 w-5" />
                            Download Free Checklist
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const PreviewSection = ({ onDownloadClick }: { onDownloadClick: () => void }) => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid gap-12 md:grid-cols-2 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                            Everything You Need to Know
                        </h2>
                        <p className="mt-4 text-tertiary">
                            Our comprehensive checklist covers all EU AI Act requirements, organized by risk category and compliance deadline. Perfect for CTOs, compliance officers, and AI product managers.
                        </p>
                        <ul className="mt-6 space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                                <span className="text-tertiary">113 requirements across all risk categories</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                                <span className="text-tertiary">Organized by EU AI Act article (9-15)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                                <span className="text-tertiary">Clear deadlines and enforcement dates</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                                <span className="text-tertiary">Actionable steps for each requirement</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                                <span className="text-tertiary">Printable PDF format</span>
                            </li>
                        </ul>
                        <Button size="lg" color="primary" className="mt-8" onClick={onDownloadClick}>
                            <Download className="mr-2 h-4 w-4" />
                            Get the Checklist
                        </Button>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="aspect-[3/4] rounded-2xl border border-primary bg-primary p-8 shadow-xl">
                            <div className="flex items-center gap-3 border-b border-primary pb-4">
                                <FileText className="h-8 w-8 text-brand-600" />
                                <div>
                                    <p className="font-semibold text-primary">EU AI Act Compliance</p>
                                    <p className="text-sm text-tertiary">Complete Checklist</p>
                                </div>
                            </div>
                            <div className="mt-6 space-y-4">
                                <div className="rounded-lg bg-secondary p-3">
                                    <p className="text-xs font-medium text-tertiary uppercase tracking-wider">Article 9</p>
                                    <p className="mt-1 text-sm font-medium text-primary">Risk Management System</p>
                                    <div className="mt-2 flex gap-2">
                                        <span className="rounded bg-brand-100 dark:bg-brand-900/30 px-2 py-0.5 text-xs text-brand-700 dark:text-brand-400">12 requirements</span>
                                    </div>
                                </div>
                                <div className="rounded-lg bg-secondary p-3">
                                    <p className="text-xs font-medium text-tertiary uppercase tracking-wider">Article 10</p>
                                    <p className="mt-1 text-sm font-medium text-primary">Data Governance</p>
                                    <div className="mt-2 flex gap-2">
                                        <span className="rounded bg-brand-100 dark:bg-brand-900/30 px-2 py-0.5 text-xs text-brand-700 dark:text-brand-400">15 requirements</span>
                                    </div>
                                </div>
                                <div className="rounded-lg bg-secondary p-3">
                                    <p className="text-xs font-medium text-tertiary uppercase tracking-wider">Article 11</p>
                                    <p className="mt-1 text-sm font-medium text-primary">Technical Documentation</p>
                                    <div className="mt-2 flex gap-2">
                                        <span className="rounded bg-brand-100 dark:bg-brand-900/30 px-2 py-0.5 text-xs text-brand-700 dark:text-brand-400">18 requirements</span>
                                    </div>
                                </div>
                                <div className="rounded-lg bg-secondary p-3 opacity-60">
                                    <p className="text-xs font-medium text-tertiary uppercase tracking-wider">+ 4 more articles</p>
                                    <p className="mt-1 text-sm font-medium text-primary">68 additional requirements</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 rounded-xl border border-primary bg-brand-600 px-4 py-2 text-white shadow-lg">
                            <p className="text-sm font-semibold">Free Download</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const WhoIsThisForSection = () => {
    const personas = [
        {
            title: "CTOs & Engineering Leaders",
            description: "Understand what technical changes your AI systems need to be compliant.",
            icon: Users,
        },
        {
            title: "Compliance Officers",
            description: "Get a clear framework for tracking and reporting EU AI Act compliance.",
            icon: Shield,
        },
        {
            title: "Product Managers",
            description: "Plan your product roadmap around compliance requirements and deadlines.",
            icon: Clock,
        },
        {
            title: "Legal Teams",
            description: "Translate regulatory text into actionable technical requirements.",
            icon: FileText,
        },
    ];

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Who Is This For?
                    </h2>
                    <p className="mt-4 text-lg text-tertiary">
                        Built for teams navigating EU AI Act compliance
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {personas.map((persona, index) => (
                        <motion.div
                            key={persona.title}
                            className="rounded-xl border border-primary bg-secondary p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <persona.icon className="h-8 w-8 text-brand-600" />
                            <h3 className="mt-4 font-semibold text-primary">{persona.title}</h3>
                            <p className="mt-2 text-sm text-tertiary">{persona.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTASection = ({ onDownloadClick }: { onDownloadClick: () => void }) => {
    return (
        <section 
            className="py-16 md:py-24" 
            style={{ 
                background: 'linear-gradient(135deg, #3D2A7D 0%, #2C1C5F 50%, #1E1340 100%)' 
            }}
        >
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-sm font-semibold text-white md:text-display-md">
                        Start Your Compliance Journey
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        Download the free checklist and get a clear picture of what EU AI Act compliance requires for your AI systems.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" onClick={onDownloadClick}>
                            <Download className="mr-2 h-5 w-5" />
                            Download Free Checklist
                        </Button>
                        <Button size="xl" color="link-gray" href="/assessment" className="text-white hover:text-white/80">
                            Try Protectron Free →
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-white/60">No credit card required</p>
                </motion.div>
            </div>
        </section>
    );
};

export default function EUAIActChecklistPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const handleDownloadClick = () => {
        setIsModalOpen(true);
    };

    const handleEmailSubmit = (email: string) => {
        console.log("Email submitted:", email);
        // In production, send email to backend/CRM
        setIsModalOpen(false);
        setIsSuccessModalOpen(true);
    };

    return (
        <div className="bg-primary">
            <Header />
            <HeroSection onDownloadClick={handleDownloadClick} />
            <PreviewSection onDownloadClick={handleDownloadClick} />
            <WhoIsThisForSection />
            <CTASection onDownloadClick={handleDownloadClick} />
            <Footer />

            <EmailCaptureModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleEmailSubmit}
            />
            <SuccessModal
                isOpen={isSuccessModalOpen}
                onClose={() => setIsSuccessModalOpen(false)}
            />
        </div>
    );
}
