"use client";

import { motion } from "motion/react";
import { ClipboardCheck, BarChart3, FileText, FolderOpen, Shield, Award, Users, Clock, CheckCircle2, ArrowRight, Building2, Zap } from "lucide-react";
import { Button } from "@/components/base/buttons/button";
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
                        For Compliance Teams
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        Built for Compliance Teams
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        Everything you need to manage EU AI Act compliance across your organization.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const ChallengeSection = () => {
    const challenges = [
        "113 requirements for high-risk AI systems",
        "Multiple AI systems across different teams",
        "Technical complexity that's hard to translate",
        "Tight deadlines with real penalties",
        "Limited resources to throw at the problem",
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        The Challenge
                    </h2>
                    <p className="mt-6 text-tertiary">
                        The EU AI Act is here. Your organization uses AI. Now what?
                    </p>
                    <ul className="mt-6 space-y-3">
                        {challenges.map((challenge) => (
                            <li key={challenge} className="flex items-start gap-3 text-tertiary">
                                <span className="text-warning-500">•</span>
                                {challenge}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-6 text-tertiary">
                        You need a system that makes compliance manageable—not another burden.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const FeaturesSection = () => {
    const features = [
        {
            icon: BarChart3,
            title: "Know Where You Stand",
            subtitle: "Real-time compliance dashboard",
            description: "See your organization's AI compliance status at a glance:",
            items: ["Overall compliance score", "Systems by risk level", "Requirements completion", "Upcoming deadlines", "Recent activity"],
            note: "No more spreadsheets. No more guessing.",
        },
        {
            icon: ClipboardCheck,
            title: "Classify Every AI System",
            subtitle: "Instant risk classification",
            description: "Answer a few questions about each AI system and get:",
            items: ["Risk level — Prohibited, High-Risk, Limited, or Minimal", "Applicable articles — Exactly which requirements apply", "Rationale — Clear explanation of why", "Next steps — What you need to do"],
            link: { label: "Learn about Risk Classification", href: "/features/risk-classification" },
        },
        {
            icon: FileText,
            title: "Track Every Requirement",
            subtitle: "Comprehensive requirement management",
            description: "For each high-risk AI system, track Articles 9-15 with 50+ requirements. Assign owners. Set deadlines. Track progress. Never lose visibility.",
            link: { label: "Learn about Requirement Tracking", href: "/features/requirement-tracking" },
        },
        {
            icon: Zap,
            title: "Generate Documentation",
            subtitle: "AI-powered document generation",
            description: "Stop staring at blank pages. Generate compliant documentation:",
            items: ["Technical Documentation (Article 11)", "Risk Management System (Article 9)", "Data Governance Documentation (Article 10)", "Human Oversight Procedures (Article 14)", "Transparency Documentation (Article 13)", "AI Governance Policy", "AI Ethics Policy", "Incident Response Plan"],
            link: { label: "Learn about Document Generation", href: "/features/document-generation" },
        },
        {
            icon: FolderOpen,
            title: "Manage Evidence",
            subtitle: "Centralized evidence repository",
            description: "Collect and organize all compliance evidence:",
            items: ["Upload existing documents", "Link evidence to requirements", "Version control for updates", "Quick search and filtering", "Audit-ready export"],
            note: "When auditors come, you're ready.",
            link: { label: "Learn about Evidence Management", href: "/features/evidence-management" },
        },
        {
            icon: Shield,
            title: "Automatic Audit Trails",
            subtitle: "Technical compliance without the technical work",
            description: "Your engineering team integrates our SDK. You get:",
            items: ["Complete audit trails for every AI system", "Automatic logging of all AI decisions", "Human oversight tracking", "Tamper-evident records", "Export for regulators"],
            note: "Article 12 compliance handled automatically.",
            link: { label: "Learn about Agent Audit Trail", href: "/features/agent-audit-trail" },
        },
        {
            icon: Award,
            title: "Prove Your Compliance",
            subtitle: "Verifiable certification badges",
            description: "Show customers and partners you're compliant:",
            items: ["Embeddable website badges", "Real-time verification", "Detailed compliance status", "Builds trust instantly"],
            link: { label: "Learn about Certification Badges", href: "/features/certification-badges" },
        },
    ];

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm text-center">
                        One Platform for All Your AI Compliance
                    </h2>
                    <div className="mt-12 space-y-8">
                        {features.map((feature) => (
                            <div key={feature.title} className="rounded-xl border border-primary bg-secondary p-6">
                                <div className="flex items-start gap-4">
                                    <feature.icon className="h-8 w-8 shrink-0 text-brand-600" />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
                                        <p className="text-sm font-medium text-brand-600">{feature.subtitle}</p>
                                        <p className="mt-2 text-tertiary">{feature.description}</p>
                                        {feature.items && (
                                            <ul className="mt-3 space-y-1">
                                                {feature.items.map((item) => (
                                                    <li key={item} className="flex items-start gap-2 text-sm text-tertiary">
                                                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {feature.note && (
                                            <p className="mt-3 text-sm font-medium text-primary">{feature.note}</p>
                                        )}
                                        {feature.link && (
                                            <a href={feature.link.href} className="mt-3 inline-flex items-center gap-1 text-sm text-brand-600 hover:underline">
                                                → {feature.link.label}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const WorkflowSection = () => {
    const phases = [
        {
            title: "Week 1: Assessment",
            tasks: ["Inventory — List all AI systems in your organization", "Classify — Determine risk level for each", "Prioritize — Focus on high-risk systems first", "Assign — Designate owners for each system"],
        },
        {
            title: "Week 2-4: Implementation",
            tasks: ["Track requirements — Set up tracking for each high-risk system", "Gap analysis — Identify what's missing", "Generate documents — Create required documentation", "Collect evidence — Gather and organize proof"],
        },
        {
            title: "Ongoing: Maintenance",
            tasks: ["Monitor — Track compliance score and changes", "Update — Keep documentation current", "Report — Generate reports for leadership", "Audit — Be ready for regulatory review"],
        },
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        How Compliance Teams Use Protectron
                    </h2>
                    <div className="mt-8 space-y-6">
                        {phases.map((phase) => (
                            <div key={phase.title} className="rounded-xl border border-primary bg-primary p-6">
                                <h3 className="font-semibold text-primary">{phase.title}</h3>
                                <ol className="mt-4 space-y-2">
                                    {phase.tasks.map((task, i) => (
                                        <li key={task} className="flex items-start gap-3 text-sm text-tertiary">
                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-semibold text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                                                {i + 1}
                                            </span>
                                            {task}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const DesignedForSection = () => {
    const categories = [
        {
            title: "Multi-System Management",
            items: ["See all systems in one view", "Filter by risk level, status, or owner", "Bulk actions for efficiency", "Cross-system reporting"],
        },
        {
            title: "Team Collaboration",
            items: ["Role-based access — Control who sees what", "Assigned owners — Clear accountability", "Activity feed — See what's happening", "Comments — Collaborate in context"],
        },
        {
            title: "Progress Tracking",
            items: ["Overall compliance score", "Per-system progress", "Requirement completion rates", "Time-based trends"],
        },
        {
            title: "Reporting",
            items: ["Executive summaries", "Detailed compliance reports", "Audit packages", "Board-ready presentations"],
        },
    ];

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm text-center">
                        Designed for Your Workflow
                    </h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        {categories.map((cat) => (
                            <div key={cat.title} className="rounded-xl border border-primary bg-secondary p-6">
                                <h3 className="font-semibold text-primary">{cat.title}</h3>
                                <ul className="mt-4 space-y-2">
                                    {cat.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-tertiary">
                                            <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ComparisonSection = () => {
    const manual = [
        { task: "Risk classification", approach: "Read 400 pages, interpret rules", time: "Days" },
        { task: "Requirement mapping", approach: "Create spreadsheets", time: "Weeks" },
        { task: "Documentation", approach: "Start from scratch", time: "Months" },
        { task: "Evidence collection", approach: "Chase down teams", time: "Ongoing" },
        { task: "Audit preparation", approach: "Panic", time: "Stressful" },
    ];

    const protectron = [
        { task: "Risk classification", approach: "Guided questionnaire", time: "10 minutes" },
        { task: "Requirement mapping", approach: "Automatic", time: "Instant" },
        { task: "Documentation", approach: "AI-generated drafts", time: "Hours" },
        { task: "Evidence collection", approach: "Centralized uploads", time: "Organized" },
        { task: "Audit preparation", approach: "Export packages", time: "Ready" },
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm text-center">
                        The Alternative: Manual Compliance
                    </h2>
                    <p className="mt-4 text-center text-tertiary">Without a dedicated platform, EU AI Act compliance means:</p>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <div>
                            <h3 className="font-semibold text-primary mb-4">Manual Approach</h3>
                            <div className="overflow-hidden rounded-xl border border-primary">
                                <table className="w-full text-sm">
                                    <thead className="bg-primary">
                                        <tr>
                                            <th className="px-3 py-2 text-left font-semibold text-primary">Task</th>
                                            <th className="px-3 py-2 text-left font-semibold text-primary">Time</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-primary bg-secondary">
                                        {manual.map((item) => (
                                            <tr key={item.task}>
                                                <td className="px-3 py-2 text-tertiary">{item.task}</td>
                                                <td className="px-3 py-2 text-warning-600">{item.time}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-primary mb-4">With Protectron</h3>
                            <div className="overflow-hidden rounded-xl border border-primary">
                                <table className="w-full text-sm">
                                    <thead className="bg-primary">
                                        <tr>
                                            <th className="px-3 py-2 text-left font-semibold text-primary">Task</th>
                                            <th className="px-3 py-2 text-left font-semibold text-primary">Time</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-primary bg-secondary">
                                        {protectron.map((item) => (
                                            <tr key={item.task}>
                                                <td className="px-3 py-2 text-tertiary">{item.task}</td>
                                                <td className="px-3 py-2 text-success-600">{item.time}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const OrgSizeSection = () => {
    const sizes = [
        {
            title: "Startups (1-50 employees)",
            items: ["Quick setup without dedicated compliance staff", "Affordable pricing that scales with you", "Clear guidance for first-time compliance", "Focus on building, not bureaucracy"],
        },
        {
            title: "Scale-ups (50-500 employees)",
            items: ["Manage multiple AI systems centrally", "Team collaboration features", "Growing complexity, managed simply", "Enterprise customer requirements met"],
        },
        {
            title: "Enterprises (500+ employees)",
            items: ["Organization-wide compliance visibility", "Advanced access controls", "Custom integrations", "Dedicated support"],
        },
    ];

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm text-center">
                        For Every Organization Size
                    </h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {sizes.map((size) => (
                            <div key={size.title} className="rounded-xl border border-primary bg-secondary p-6">
                                <Building2 className="h-6 w-6 text-brand-600" />
                                <h3 className="mt-4 font-semibold text-primary">{size.title}</h3>
                                <ul className="mt-4 space-y-2">
                                    {size.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-tertiary">
                                            <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SecuritySection = () => {
    const security = [
        { title: "EU data residency", description: "All data in Frankfurt, Germany" },
        { title: "Encryption", description: "TLS 1.3 in transit, AES-256 at rest" },
        { title: "SOC 2 Type II", description: "Enterprise security standards" },
        { title: "GDPR compliant", description: "Full data protection compliance" },
    ];

    const enterprise = [
        { title: "SSO support", description: "SAML 2.0, OIDC" },
        { title: "Role-based access", description: "Granular permissions" },
        { title: "Audit logs", description: "Track all platform activity" },
        { title: "DPA available", description: "Standard data processing agreement" },
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Security & Trust
                    </h2>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <h3 className="font-semibold text-primary">Your Data is Protected</h3>
                            <ul className="mt-4 space-y-3">
                                {security.map((item) => (
                                    <li key={item.title} className="text-sm text-tertiary">
                                        <span className="font-medium text-primary">{item.title}</span> — {item.description}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <h3 className="font-semibold text-primary">Enterprise Ready</h3>
                            <ul className="mt-4 space-y-3">
                                {enterprise.map((item) => (
                                    <li key={item.title} className="text-sm text-tertiary">
                                        <span className="font-medium text-primary">{item.title}</span> — {item.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <a href="/security" className="mt-6 inline-flex items-center gap-1 text-brand-600 hover:underline">
                        → View Security Details
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

const PricingSection = () => {
    const plans = [
        { plan: "Starter", systems: "3", bestFor: "Small teams, first AI systems", price: "€99/mo" },
        { plan: "Growth", systems: "10", bestFor: "Growing companies, multiple systems", price: "€299/mo" },
        { plan: "Scale", systems: "25", bestFor: "Scale-ups, complex portfolios", price: "€599/mo" },
        { plan: "Enterprise", systems: "Unlimited", bestFor: "Large organizations", price: "Custom" },
    ];

    const included = ["Full requirement tracking", "Document generation", "Evidence management", "Team collaboration"];

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Pricing
                    </h2>
                    <div className="mt-8 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full text-sm">
                            <thead className="bg-secondary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Plan</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">AI Systems</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Best For</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Price</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                {plans.map((plan) => (
                                    <tr key={plan.plan}>
                                        <td className="px-4 py-3 font-medium text-primary">{plan.plan}</td>
                                        <td className="px-4 py-3 text-tertiary">{plan.systems}</td>
                                        <td className="px-4 py-3 text-tertiary">{plan.bestFor}</td>
                                        <td className="px-4 py-3 font-semibold text-brand-600">{plan.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-sm text-tertiary">All plans include:</p>
                    <ul className="mt-2 flex flex-wrap gap-4">
                        {included.map((item) => (
                            <li key={item} className="flex items-center gap-1 text-sm text-tertiary">
                                <CheckCircle2 className="h-4 w-4 text-success-500" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

const FAQSection = () => {
    const faqs = [
        {
            q: "Do I need technical skills to use Protectron?",
            a: "No. The dashboard is designed for compliance professionals. Your engineering team handles the SDK integration—you manage compliance through a user-friendly interface.",
        },
        {
            q: "How long does implementation take?",
            a: "Most teams are up and running within a week. Risk classification takes minutes. Full implementation depends on your AI portfolio size.",
        },
        {
            q: "Can I try before I buy?",
            a: "Yes. We offer a 14-day free trial with full access to all features. No credit card required.",
        },
        {
            q: "Do you provide implementation support?",
            a: "Yes. All plans include documentation and email support. Growth and above include onboarding calls. Enterprise includes dedicated support.",
        },
        {
            q: "What if regulations change?",
            a: "We continuously update Protectron as the EU AI Act evolves and guidance is issued. Your compliance tracking stays current automatically.",
        },
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Frequently Asked Questions
                    </h2>
                    <div className="mt-8 space-y-4">
                        {faqs.map((faq) => (
                            <div key={faq.q} className="rounded-xl border border-primary bg-primary p-4">
                                <p className="font-semibold text-primary">{faq.q}</p>
                                <p className="mt-2 text-sm text-tertiary">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ResourcesSection = () => {
    const guides = [
        { title: "EU AI Act Guide", href: "/guide", description: "Complete regulation overview" },
        { title: "High-Risk AI Guide", href: "/guide/high-risk", description: "Annex III deep dive" },
        { title: "Article 12 Guide", href: "/guide/article-12", description: "Logging requirements" },
    ];

    const tools = [
        { title: "Compliance Checklist", href: "/resources/eu-ai-act-checklist", description: "Downloadable PDF" },
        { title: "Risk Classification", href: "/features/risk-classification", description: "Free assessment" },
    ];

    const caseStudies = [
        { title: "TalentFlow AI", href: "/case-studies/talentflow-ai", description: "HR tech compliance story" },
        { title: "MedAssist AI", href: "/case-studies/medassist-ai", description: "Healthcare AI compliance" },
    ];

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Resources for Compliance Teams
                    </h2>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Guides</h3>
                    <div className="mt-4 grid gap-4 md:grid-cols-3">
                        {guides.map((resource) => (
                            <a
                                key={resource.title}
                                href={resource.href}
                                className="group rounded-xl border border-primary bg-secondary p-4 hover:border-brand-300 transition-colors"
                            >
                                <p className="font-semibold text-primary group-hover:text-brand-600">{resource.title}</p>
                                <p className="text-sm text-tertiary">{resource.description}</p>
                            </a>
                        ))}
                    </div>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Tools</h3>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                        {tools.map((resource) => (
                            <a
                                key={resource.title}
                                href={resource.href}
                                className="group rounded-xl border border-primary bg-secondary p-4 hover:border-brand-300 transition-colors"
                            >
                                <p className="font-semibold text-primary group-hover:text-brand-600">{resource.title}</p>
                                <p className="text-sm text-tertiary">{resource.description}</p>
                            </a>
                        ))}
                    </div>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Case Studies</h3>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                        {caseStudies.map((resource) => (
                            <a
                                key={resource.title}
                                href={resource.href}
                                className="group rounded-xl border border-primary bg-secondary p-4 hover:border-brand-300 transition-colors"
                            >
                                <p className="font-semibold text-primary group-hover:text-brand-600">{resource.title}</p>
                                <p className="text-sm text-tertiary">{resource.description}</p>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

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
                        Ready to Simplify EU AI Act Compliance?
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        Stop drowning in spreadsheets. Start managing compliance effectively.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/assessment">
                            Start Free Trial
                        </Button>
                        <Button size="xl" color="link-gray" href="mailto:hello@protectron.ai?subject=Demo%20Request" className="text-white hover:text-white/80">
                            Schedule Demo →
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-white/60 italic">
                        Questions? Contact us at hello@protectron.ai
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default function ForCompliancePage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <ChallengeSection />
            <FeaturesSection />
            <WorkflowSection />
            <DesignedForSection />
            <ComparisonSection />
            <OrgSizeSection />
            <SecuritySection />
            <PricingSection />
            <FAQSection />
            <ResourcesSection />
            <CTASection />
            <Footer />
        </div>
    );
}
