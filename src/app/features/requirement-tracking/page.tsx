"use client";

import { motion } from "motion/react";
import { Check, Users, FileText, Bell, BarChart3, Link2, ClipboardList } from "lucide-react";
import { TickCircle } from "iconsax-react";
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
                        Compliance Management
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        Never Miss a Requirement Again
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        Track every EU AI Act requirement for every AI system. Know exactly what's done, what's pending, and what's at risk—with clear visibility for your entire team.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="primary" href="/assessment">
                            Start Tracking Requirements
                        </Button>
                        <Button size="xl" color="secondary" href="#demo">
                            See Demo Dashboard
                        </Button>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-tertiary">
                        <span className="flex items-center gap-2">
                            <TickCircle size="18" className="text-success-500" variant="Bold" />
                            113+ requirements mapped
                        </span>
                        <span className="flex items-center gap-2">
                            <TickCircle size="18" className="text-success-500" variant="Bold" />
                            Covers Articles 9-15 for high-risk AI
                        </span>
                        <span className="flex items-center gap-2">
                            <TickCircle size="18" className="text-success-500" variant="Bold" />
                            Automatic deadline alerts
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
            icon: "📊",
            title: "Spreadsheet Chaos",
            description: "Most teams start with spreadsheets. But as AI systems multiply and requirements evolve, spreadsheets become maintenance nightmares. Version control breaks down. Requirements slip through the cracks.",
        },
        {
            icon: "🔍",
            title: "No Clear Visibility",
            description: "Leadership asks: \"Are we compliant?\" Without a unified tracking system, answering that question requires hours of investigation and educated guessing.",
        },
        {
            icon: "📅",
            title: "Deadline Pressure",
            description: "The August 2026 deadline for high-risk AI isn't flexible. With 113+ requirements across multiple articles, it's easy to underestimate the work remaining—until it's too late.",
        },
        {
            icon: "🔗",
            title: "Disconnected Evidence",
            description: "Even when requirements are tracked, the evidence proving completion lives in scattered locations—Google Drive, email threads, Confluence pages. Auditors don't accept \"I'm pretty sure we did this.\"",
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
                        Compliance Tracking Shouldn't Be This Hard
                    </h2>
                    <p className="mt-4 text-lg text-tertiary">
                        The EU AI Act introduces dozens of specific requirements—and tracking them across multiple AI systems quickly becomes overwhelming.
                    </p>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2">
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
                    Protectron replaces spreadsheet chaos with a purpose-built compliance tracking system that knows exactly what the EU AI Act requires.
                </motion.p>
            </div>
        </section>
    );
};

const SolutionSection = () => {
    const benefits = [
        {
            title: "Auto-Generated Checklists",
            description: "Based on your risk classification, we generate the exact requirements that apply—no manual research needed.",
        },
        {
            title: "Real-Time Status",
            description: "See overall compliance percentage, identify gaps, and track progress across all AI systems from a single dashboard.",
        },
        {
            title: "Audit-Ready Proof",
            description: "Every completed requirement links to evidence. Export compliance reports that auditors and customers trust.",
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
                        One Dashboard for All Your AI Compliance
                    </h2>
                    <p className="mt-4 mx-auto max-w-3xl text-lg text-tertiary">
                        Protectron automatically generates the complete requirement checklist for each AI system based on its risk classification. Track progress, assign owners, attach evidence, and know your exact compliance status at any moment.
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
            title: "Classify Your AI System",
            description: "Start with our Risk Classification to determine your AI's risk level. This determines which requirements apply. High-risk AI gets 113+ requirements across Articles 9-15.",
        },
        {
            number: "2",
            title: "Get Your Personalized Checklist",
            description: "Based on classification, Protectron generates your complete requirement checklist with clear descriptions, acceptance criteria, article references, and suggested evidence types.",
        },
        {
            number: "3",
            title: "Track Progress",
            description: "Mark requirements as In Progress, Complete, or Blocked. Assign owners, add notes, link evidence, and set custom due dates with reminders.",
        },
        {
            number: "4",
            title: "Monitor and Report",
            description: "View real-time compliance status with overall completion percentages, cross-system dashboards, and export audit-ready reports.",
        },
    ];

    return (
        <section id="demo" className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                        How Requirement Tracking Works
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

const ArticlesSection = () => {
    const articles = [
        {
            article: "Article 9",
            title: "Risk Management System",
            description: "A continuous, documented process for identifying and mitigating AI risks.",
            requirements: ["Establish risk management system", "Identify known and foreseeable risks", "Implement risk mitigation measures", "Document residual risks", "Conduct ongoing monitoring"],
        },
        {
            article: "Article 10",
            title: "Data and Data Governance",
            description: "Practices ensuring training, validation, and testing data meets quality standards.",
            requirements: ["Document training data characteristics", "Assess data relevance and representativeness", "Identify and address potential biases", "Implement data governance procedures"],
        },
        {
            article: "Article 11",
            title: "Technical Documentation",
            description: "Comprehensive documentation enabling conformity assessment and regulatory oversight.",
            requirements: ["General system description", "Design specifications", "Risk management documentation", "Standards applied", "EU declaration of conformity"],
        },
        {
            article: "Article 12",
            title: "Record-Keeping",
            description: "Automatic logging capabilities for traceability throughout AI system lifetime.",
            requirements: ["Enable automatic event logging", "Log events relevant to identifying risks", "Maintain log integrity and security", "Retain logs for appropriate duration"],
        },
        {
            article: "Article 13",
            title: "Transparency",
            description: "Clear information enabling deployers to understand and use the AI system appropriately.",
            requirements: ["Provide instructions for use", "Specify intended purpose and limitations", "Document accuracy metrics", "Explain human oversight requirements"],
        },
        {
            article: "Article 14",
            title: "Human Oversight",
            description: "Measures enabling human oversight during AI system operation.",
            requirements: ["Design for effective human oversight", "Enable understanding of AI capabilities", "Allow monitoring of operation", "Enable intervention and override"],
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
                        Complete Coverage of EU AI Act Requirements
                    </h2>
                    <p className="mt-4 text-lg text-tertiary">
                        For high-risk AI systems, we cover all requirements from Articles 9-15
                    </p>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article, index) => (
                        <motion.div
                            key={article.article}
                            className="rounded-2xl border border-primary bg-secondary p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <span className="inline-flex items-center rounded-full bg-brand-100 dark:bg-brand-900/30 px-3 py-1 text-sm font-semibold text-brand-700 dark:text-brand-400">
                                {article.article}
                            </span>
                            <h3 className="mt-3 text-lg font-semibold text-primary">{article.title}</h3>
                            <p className="mt-2 text-sm text-tertiary">{article.description}</p>
                            <ul className="mt-4 space-y-2">
                                {article.requirements.map((req) => (
                                    <li key={req} className="flex items-start gap-2 text-sm text-tertiary">
                                        <TickCircle size="16" className="mt-0.5 shrink-0 text-success-500" variant="Bold" />
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeaturesSection = () => {
    const features = [
        {
            icon: ClipboardList,
            title: "Interactive Checklists",
            description: "Click through requirements, update status, and see exactly what's needed. Each requirement expands to show acceptance criteria and suggested evidence.",
        },
        {
            icon: Users,
            title: "Team Assignment",
            description: "Assign requirements to team members. Track who owns what. Get notified when assigned requirements are overdue or blocked.",
        },
        {
            icon: Link2,
            title: "Evidence Linking",
            description: "Connect requirements directly to evidence. See at a glance which requirements have evidence attached and which need documentation.",
        },
        {
            icon: BarChart3,
            title: "Progress Dashboards",
            description: "Visual progress bars and completion percentages for each AI system. Roll up to organization-wide compliance status.",
        },
        {
            icon: Bell,
            title: "Deadline Alerts",
            description: "Set due dates for requirements. Receive automated reminders as deadlines approach. Never be surprised by a compliance gap.",
        },
        {
            icon: FileText,
            title: "Audit Reports",
            description: "One-click generation of compliance reports showing status, evidence links, and audit trail. Export as PDF for auditors.",
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
                        Everything You Need in One Dashboard
                    </h2>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="rounded-2xl border border-primary bg-primary p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <feature.icon className="h-8 w-8 text-brand-600" />
                            <h3 className="mt-4 text-lg font-semibold text-primary">{feature.title}</h3>
                            <p className="mt-2 text-tertiary">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const requirementTrackingFaqs = [
    {
        question: "How do you determine which requirements apply to my AI system?",
        answer: "Requirements are generated based on your Risk Classification results. High-risk AI systems get the full set of Articles 9-15 requirements. Limited-risk systems get transparency requirements. If you use GPAI models, those obligations are added automatically.",
    },
    {
        question: "Can I customize the requirements or add my own?",
        answer: "Yes. While we provide the complete EU AI Act requirement set, you can add custom requirements for internal policies, customer-specific obligations, or other regulations you're tracking alongside EU AI Act.",
    },
    {
        question: "How do I know if a requirement is actually complete?",
        answer: "Each requirement has defined acceptance criteria. You mark it complete when you've met those criteria and attached supporting evidence. The evidence linkage provides the audit trail proving completion.",
    },
    {
        question: "Can multiple team members work on requirements simultaneously?",
        answer: "Absolutely. Assign different requirements to different team members. Everyone sees real-time status updates. Comments and activity logs keep everyone aligned.",
    },
    {
        question: "How does this help with audits?",
        answer: "Auditors want to see: (1) which requirements apply, (2) evidence of compliance, and (3) an audit trail of actions taken. Protectron provides all three in exportable reports. Many customers share their Protectron dashboard directly with auditors.",
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
                        Take Control of Your Compliance
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        Stop guessing about EU AI Act requirements. See exactly what applies to your AI systems and track your progress toward compliance.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/assessment">
                            Start Free Trial
                        </Button>
                        <Button size="xl" color="link-gray" href="/pricing" className="text-white hover:text-white/80">
                            See Pricing
                        </Button>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
                        <span>✓ 14-day free trial</span>
                        <span>✓ No credit card required</span>
                        <span>✓ Full requirement library included</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default function RequirementTrackingPage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <HowItWorksSection />
            <ArticlesSection />
            <FeaturesSection />
            <FAQSection faqs={requirementTrackingFaqs} />
            <CTASection />
            <Footer />
        </div>
    );
}
