"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Warning2, TickCircle, InfoCircle, CloseCircle } from "iconsax-react";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/components/marketing/header-navigation/header";
import { Footer } from "@/components/shared/footer";
import { FAQSection } from "@/components/shared/faq-section";

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
                        AI-Powered Classification
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        Know Your AI Risk Level in Minutes
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        Our intelligent classifier analyzes your AI system against EU AI Act criteria and instantly determines your risk category—so you know exactly which requirements apply to you.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="primary" href="/assessment">
                            Start Free Assessment
                        </Button>
                        <Button size="xl" color="secondary" href="#how-it-works">
                            See How It Works
                        </Button>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-tertiary">
                        <span className="flex items-center gap-2">
                            <TickCircle size="18" className="text-success-500" variant="Bold" />
                            No credit card required
                        </span>
                        <span className="flex items-center gap-2">
                            <TickCircle size="18" className="text-success-500" variant="Bold" />
                            Results in under 10 minutes
                        </span>
                        <span className="flex items-center gap-2">
                            <TickCircle size="18" className="text-success-500" variant="Bold" />
                            Covers all Annex III categories
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ProblemSection = () => {
    const problems = [
        {
            icon: "🎯",
            title: "Misclassification is Expensive",
            description: "Classify too high, and you waste resources on unnecessary compliance. Classify too low, and you face fines up to €35 million. The stakes couldn't be higher.",
        },
        {
            icon: "📚",
            title: "400+ Pages of Regulation",
            description: "The EU AI Act spans hundreds of pages with complex decision trees, cross-references to Annex I products, and nuanced category definitions. Most teams don't have weeks to parse legal text.",
        },
        {
            icon: "⏰",
            title: "Deadlines Are Approaching",
            description: "High-risk AI requirements take effect August 2026. By the time you figure out your classification manually, you may not have enough runway to achieve compliance.",
        },
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                        Most Companies Don't Know Their AI Risk Level
                    </h2>
                    <p className="mt-4 text-lg text-tertiary">
                        The EU AI Act categorizes AI systems into four risk tiers—but determining where your AI falls isn't straightforward.
                    </p>
                </motion.div>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={problem.title}
                            className="rounded-2xl border border-primary bg-primary p-6 shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <span className="text-3xl">{problem.icon}</span>
                            <h3 className="mt-4 text-lg font-semibold text-primary">{problem.title}</h3>
                            <p className="mt-2 text-tertiary">{problem.description}</p>
                        </motion.div>
                    ))}
                </div>
                <motion.p 
                    className="mt-12 text-center text-lg text-tertiary"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    That's why we built an intelligent classification engine that does in minutes what used to take weeks.
                </motion.p>
            </div>
        </section>
    );
};

const SolutionSection = () => {
    const benefits = [
        {
            title: "Instant Results",
            description: "Get your risk classification in minutes, not weeks. Answer guided questions and receive immediate analysis.",
        },
        {
            title: "Audit-Ready Reports",
            description: "Every classification comes with a detailed report explaining the rationale—ready to share with auditors, customers, or investors.",
        },
        {
            title: "Always Up-to-Date",
            description: "Our engine incorporates the latest EU AI Act guidance and interpretations, so your classification reflects current regulatory expectations.",
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
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                        Instant, Accurate Risk Classification
                    </h2>
                    <p className="mt-4 mx-auto max-w-3xl text-lg text-tertiary">
                        Protectron's Risk Classification Engine walks you through a guided assessment, analyzes your responses against the full EU AI Act framework, and delivers a detailed classification report—complete with the specific requirements that apply to your AI system.
                    </p>
                </motion.div>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/30">
                                <Check className="h-6 w-6 text-brand-600" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-primary">{benefit.title}</h3>
                            <p className="mt-2 text-tertiary">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HowItWorksSection = () => {
    const steps = [
        {
            number: "1",
            title: "Describe Your AI System",
            description: "Answer guided questions about your AI's purpose, the decisions it influences, the data it processes, and the people it affects. No legal expertise required—we translate technical details into compliance language.",
        },
        {
            number: "2",
            title: "Automatic Analysis",
            description: "Our classification engine maps your responses to Annex III high-risk categories, Annex I product integrations, prohibited practices under Article 5, and GPAI model usage.",
        },
        {
            number: "3",
            title: "Get Your Classification",
            description: "Receive a clear determination: Unacceptable Risk (prohibited), High-Risk (full compliance required), Limited Risk (transparency obligations), or Minimal Risk (no specific requirements).",
        },
        {
            number: "4",
            title: "See Your Roadmap",
            description: "Based on your classification, get a personalized compliance roadmap showing exactly which requirements apply, key deadlines, and recommended next steps.",
        },
    ];

    return (
        <section id="how-it-works" className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                        How Risk Classification Works
                    </h2>
                </motion.div>
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className="relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                                {step.number}
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-primary">{step.title}</h3>
                            <p className="mt-2 text-tertiary">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const RiskLevelsSection = () => {
    const riskLevels = [
        {
            icon: CloseCircle,
            level: "Unacceptable Risk",
            subtitle: "Prohibited",
            description: "AI practices that are banned entirely under the EU AI Act. No compliance pathway exists.",
            examples: "Social scoring, real-time facial recognition in public spaces, emotion recognition in workplaces, AI manipulation of vulnerable groups.",
            status: "Banned since February 2025",
            penalty: "Up to €35M or 7% of global revenue",
            color: "bg-error-100 dark:bg-error-900/30",
            iconColor: "text-error-600",
            borderColor: "border-error-200 dark:border-error-800",
        },
        {
            icon: Warning2,
            level: "High-Risk",
            subtitle: "",
            description: "AI systems with significant impact on health, safety, or fundamental rights. Subject to comprehensive compliance requirements.",
            examples: "AI in recruitment and hiring, credit scoring, insurance pricing, educational assessment, medical diagnosis, law enforcement tools.",
            status: "Deadline: August 2, 2026",
            penalty: "",
            color: "bg-warning-100 dark:bg-warning-900/30",
            iconColor: "text-warning-600",
            borderColor: "border-warning-200 dark:border-warning-800",
        },
        {
            icon: InfoCircle,
            level: "Limited Risk",
            subtitle: "",
            description: "AI systems that interact with people or generate content. Subject to transparency obligations.",
            examples: "Chatbots, AI-generated content, emotion recognition (where permitted), deepfakes.",
            status: "Already in effect",
            penalty: "",
            color: "bg-blue-100 dark:bg-blue-900/30",
            iconColor: "text-blue-600",
            borderColor: "border-blue-200 dark:border-blue-800",
        },
        {
            icon: TickCircle,
            level: "Minimal Risk",
            subtitle: "",
            description: "AI systems with no specific regulatory requirements under the EU AI Act.",
            examples: "Spam filters, recommendation systems, inventory management, AI in video games.",
            status: "No requirements",
            penalty: "",
            color: "bg-success-100 dark:bg-success-900/30",
            iconColor: "text-success-600",
            borderColor: "border-success-200 dark:border-success-800",
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
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                        Understanding the Four Risk Levels
                    </h2>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {riskLevels.map((risk, index) => (
                        <motion.div
                            key={risk.level}
                            className={`rounded-2xl border ${risk.borderColor} ${risk.color} p-6`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex items-start gap-4">
                                <risk.icon size="28" className={risk.iconColor} variant="Bold" />
                                <div>
                                    <h3 className="text-lg font-semibold text-primary">
                                        {risk.level} {risk.subtitle && <span className="text-tertiary">({risk.subtitle})</span>}
                                    </h3>
                                    <p className="mt-2 text-tertiary">{risk.description}</p>
                                    <p className="mt-3 text-sm"><span className="font-medium text-secondary">Examples:</span> <span className="text-tertiary">{risk.examples}</span></p>
                                    <div className="mt-3 flex flex-wrap gap-3">
                                        {risk.status && (
                                            <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-secondary">
                                                {risk.status}
                                            </span>
                                        )}
                                        {risk.penalty && (
                                            <span className="inline-flex items-center rounded-full bg-error-50 dark:bg-error-900/50 px-3 py-1 text-xs font-medium text-error-700 dark:text-error-400">
                                                {risk.penalty}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const UseCasesSection = () => {
    const useCases = [
        {
            title: "SaaS Companies Adding AI Features",
            description: "You've integrated AI into your product—maybe a recommendation engine, a chatbot, or automated decision-making. Now enterprise customers are asking about EU AI Act compliance. Get clarity on your obligations before your next sales call.",
        },
        {
            title: "AI Startups Preparing for Enterprise Sales",
            description: "Enterprise procurement teams increasingly require EU AI Act compliance documentation. Know your risk level and requirements before you enter due diligence.",
        },
        {
            title: "Legal and Compliance Teams",
            description: "Conducting an AI audit across your organization? Classify all AI systems systematically and identify high-risk deployments that need immediate attention.",
        },
        {
            title: "VCs and Investors",
            description: "Evaluating an AI company's compliance posture during due diligence? Our classification reports provide clear, auditable documentation of regulatory exposure.",
        },
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                        Who Uses Risk Classification
                    </h2>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={useCase.title}
                            className="rounded-2xl border border-primary bg-primary p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="text-lg font-semibold text-primary">{useCase.title}</h3>
                            <p className="mt-2 text-tertiary">{useCase.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const riskClassificationFaqs = [
    {
        question: "How accurate is the automated classification?",
        answer: "Our classification engine is built on the complete EU AI Act text, official EU guidance, and ongoing regulatory interpretations. For straightforward cases, automated classification is highly reliable. For edge cases or novel AI applications, we flag areas of uncertainty and recommend human review.",
    },
    {
        question: "What if my AI system spans multiple risk categories?",
        answer: "If your AI system could fall into multiple categories, the highest applicable risk level applies. Our engine identifies all potential categories and explains the classification logic.",
    },
    {
        question: "Does classification mean I'm compliant?",
        answer: "Classification is the first step—it tells you which requirements apply. Compliance means implementing those requirements. Protectron helps with both: classification first, then requirement tracking, documentation, and evidence management.",
    },
    {
        question: "What if regulations change?",
        answer: "The EU AI Act is being implemented in phases, with ongoing guidance from the AI Office. Our classification engine is updated to reflect new interpretations and clarifications. Your classification remains current as long as you maintain your Protectron account.",
    },
    {
        question: "Can I classify multiple AI systems?",
        answer: "Yes. Most organizations have multiple AI systems with different risk profiles. Protectron supports unlimited classifications across all your AI systems, with a unified dashboard view.",
    },
    {
        question: "Is my classification data confidential?",
        answer: "Absolutely. Your AI system details and classification results are encrypted and stored in EU data centers. We never share your data with third parties. See our Security page for details.",
    },
];

const CTASection = () => {
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
                        Know Where You Stand
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        Don't guess your AI risk level. Get a definitive classification in minutes—with a clear roadmap to compliance.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/assessment">
                            Start Free Risk Assessment
                        </Button>
                        <Button size="xl" color="link-gray" href="/contact" className="text-white hover:text-white/80">
                            Talk to an Expert
                        </Button>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
                        <span>✓ No credit card required</span>
                        <span>✓ Free classification for your first AI system</span>
                        <span>✓ Results you can share with stakeholders</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default function RiskClassificationPage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <HowItWorksSection />
            <RiskLevelsSection />
            <UseCasesSection />
            <FAQSection faqs={riskClassificationFaqs} />
            <CTASection />
            <Footer />
        </div>
    );
}
