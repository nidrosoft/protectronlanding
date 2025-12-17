"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Header } from "@/components/marketing/header-navigation/header";
import { Footer } from "@/components/shared/footer";
import { 
    TickCircle, 
    CloseCircle, 
    Warning2, 
    Timer1, 
    DollarCircle, 
    Building, 
    DocumentText,
    Chart,
    Flash,
    ShieldTick,
    People,
    Briefcase,
    MessageQuestion,
    ArrowRight,
    Clock,
    Danger,
    Star1,
    TickSquare
} from "iconsax-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const HeroSection = () => (
    <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 to-transparent dark:from-brand-900/20" />
        <div className="relative mx-auto w-full max-w-container px-4 md:px-8">
            <motion.div 
                className="mx-auto flex max-w-4xl flex-col items-center text-center"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.span 
                    className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-400"
                    variants={fadeInUp}
                >
                    <span className="h-2 w-2 rounded-full bg-brand-500" />
                    Why Choose Us
                </motion.span>
                <motion.h1 
                    className="mt-4 text-display-md font-bold text-primary md:text-display-lg lg:text-display-xl"
                    variants={fadeInUp}
                >
                    Why Choose Protectron.ai
                </motion.h1>
                <motion.p 
                    className="mt-4 text-xl font-medium text-brand-600 dark:text-brand-400 md:text-2xl"
                    variants={fadeInUp}
                >
                    The Only EU AI Act Compliance Platform Built for Speed, Simplicity, and Startups
                </motion.p>
                <motion.p 
                    className="mt-6 max-w-2xl text-lg text-tertiary"
                    variants={fadeInUp}
                >
                    You're looking for the best way to achieve EU AI Act compliance. We've done the research so you don't have to.
                </motion.p>
                <motion.div 
                    className="mt-8 flex flex-wrap items-center justify-center gap-4"
                    variants={fadeInUp}
                >
                    <Link 
                        href="#" 
                        className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-md font-semibold text-white shadow-lg transition-all hover:bg-brand-700 hover:shadow-xl"
                    >
                        Get Started for Free
                        <ArrowRight size={18} />
                    </Link>
                    <Link 
                        href="#comparison" 
                        className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 text-md font-semibold text-primary shadow-sm transition-all hover:bg-secondary"
                    >
                        See Comparison
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    </section>
);

const ComparisonTableSection = () => {
    const solutions = [
        { 
            name: "Protectron.ai", 
            bestFor: "Startups & SMBs", 
            time: "Days", 
            cost: "€1,188 – €11,988", 
            selfService: "yes",
            highlight: true 
        },
        { 
            name: "Credo AI", 
            bestFor: "Fortune 500 enterprises", 
            time: "6-12 months", 
            cost: "€50,000 – €200,000+", 
            selfService: "no" 
        },
        { 
            name: "Holistic AI", 
            bestFor: "Large enterprises", 
            time: "3-6 months", 
            cost: "€40,000 – €150,000+", 
            selfService: "no" 
        },
        { 
            name: "Vanta", 
            bestFor: "Multi-compliance needs", 
            time: "2-4 months", 
            cost: "€10,000 – €80,000", 
            selfService: "partial" 
        },
        { 
            name: "Consultants / Law Firms", 
            bestFor: "Complex, high-budget", 
            time: "6-18 months", 
            cost: "€50,000 – €400,000+", 
            selfService: "no" 
        },
        { 
            name: "DIY (Spreadsheets)", 
            bestFor: "Nobody", 
            time: "Months of pain", 
            cost: '"Free" + your time', 
            selfService: "diy" 
        },
    ];

    const renderSelfService = (status: string) => {
        switch (status) {
            case "yes":
                return <span className="inline-flex items-center gap-1.5 text-success-600 dark:text-success-400"><TickCircle size={18} variant="Bold" /> Yes</span>;
            case "no":
                return <span className="inline-flex items-center gap-1.5 text-error-600 dark:text-error-400"><CloseCircle size={18} variant="Bold" /> Sales required</span>;
            case "partial":
                return <span className="inline-flex items-center gap-1.5 text-warning-600 dark:text-warning-400"><Warning2 size={18} variant="Bold" /> Demo required</span>;
            case "diy":
                return <span className="text-tertiary">😅</span>;
            default:
                return null;
        }
    };

    return (
        <section id="comparison" className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto flex max-w-3xl flex-col items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.span 
                        className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-400"
                        variants={fadeInUp}
                    >
                        <Chart size={16} variant="Bold" color="currentColor" />
                        At a Glance
                    </motion.span>
                    <motion.h2 
                        className="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
                        variants={fadeInUp}
                    >
                        Your Options at a Glance
                    </motion.h2>
                </motion.div>

                <motion.div 
                    className="mt-12 overflow-x-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                >
                    <table className="w-full min-w-[800px] border-collapse">
                        <thead>
                            <tr className="border-b border-secondary">
                                <th className="px-4 py-4 text-left text-sm font-semibold text-tertiary">Solution</th>
                                <th className="px-4 py-4 text-left text-sm font-semibold text-tertiary">Best For</th>
                                <th className="px-4 py-4 text-left text-sm font-semibold text-tertiary">Time to Compliance</th>
                                <th className="px-4 py-4 text-left text-sm font-semibold text-tertiary">Annual Cost</th>
                                <th className="px-4 py-4 text-left text-sm font-semibold text-tertiary">Self-Service</th>
                            </tr>
                        </thead>
                        <tbody>
                            {solutions.map((solution, index) => (
                                <tr 
                                    key={solution.name} 
                                    className={`border-b border-secondary transition-colors ${
                                        solution.highlight 
                                            ? "bg-brand-50 dark:bg-brand-900/20" 
                                            : "hover:bg-secondary/50"
                                    }`}
                                >
                                    <td className="px-4 py-4">
                                        <span className={`font-semibold ${solution.highlight ? "text-brand-600 dark:text-brand-400" : "text-primary"}`}>
                                            {solution.name}
                                        </span>
                                        {solution.highlight && (
                                            <span className="ml-2 inline-flex items-center rounded-full bg-brand-600 px-2 py-0.5 text-xs font-medium text-white">
                                                Recommended
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-4 py-4 text-sm text-secondary">{solution.bestFor}</td>
                                    <td className="px-4 py-4">
                                        <span className={`text-sm font-medium ${
                                            solution.highlight ? "text-success-600 dark:text-success-400" : "text-secondary"
                                        }`}>
                                            {solution.time}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className={`text-sm font-medium ${
                                            solution.highlight ? "text-success-600 dark:text-success-400" : "text-secondary"
                                        }`}>
                                            {solution.cost}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 text-sm">{renderSelfService(solution.selfService)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
};

const CompetitorCard = ({ 
    name, 
    description, 
    target, 
    issues, 
    bestFor 
}: { 
    name: string; 
    description: string; 
    target: string; 
    issues: { icon: React.ReactNode; text: string }[];
    bestFor: string;
}) => (
    <motion.div 
        className="rounded-2xl border border-secondary bg-primary p-6 shadow-sm md:p-8"
        variants={fadeInUp}
        whileHover={{ y: -4, boxShadow: "0 12px 24px -8px rgba(0, 0, 0, 0.1)" }}
        transition={{ duration: 0.3 }}
    >
        <h3 className="text-xl font-semibold text-primary">{name}</h3>
        <p className="mt-2 text-sm text-tertiary">{description}</p>
        <p className="mt-3 text-sm"><span className="font-medium text-secondary">Who it's for:</span> <span className="text-tertiary">{target}</span></p>
        
        <div className="mt-6">
            <p className="text-sm font-semibold text-error-600 dark:text-error-400">Why it's not for you (probably):</p>
            <ul className="mt-3 space-y-2">
                {issues.map((issue, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-tertiary">
                        <span className="mt-0.5 shrink-0">{issue.icon}</span>
                        <span>{issue.text}</span>
                    </li>
                ))}
            </ul>
        </div>

        <div className="mt-6 rounded-lg bg-secondary p-3">
            <p className="text-xs font-medium text-tertiary">
                <span className="font-semibold text-secondary">Best for:</span> {bestFor}
            </p>
        </div>
    </motion.div>
);

const CompetitorsSection = () => {
    const competitors = [
        {
            name: "Credo AI",
            description: "Enterprise AI governance platform recognized by Gartner and Forrester. Covers multiple regulations including EU AI Act, NIST RMF, and ISO 42001.",
            target: "Fortune 500 companies with dedicated GRC teams, large budgets, and 6+ month implementation timelines.",
            issues: [
                { icon: <DollarCircle size={16} className="text-warning-500" />, text: "Pricing starts at ~€50,000/year — Custom enterprise contracts only" },
                { icon: <Timer1 size={16} className="text-warning-500" />, text: "Implementation takes 3-12 months — Requires professional services" },
                { icon: <Building size={16} className="text-warning-500" />, text: "Built for enterprises — Overkill if you have 1-50 AI systems" },
                { icon: <MessageQuestion size={16} className="text-warning-500" />, text: "No self-service — Must go through sales cycle just to see pricing" },
            ],
            bestFor: "Companies with 100+ AI systems, dedicated compliance teams, and enterprise budgets."
        },
        {
            name: "Holistic AI",
            description: "End-to-end AI governance covering discovery, risk management, and compliance monitoring. Strong presence in UK/EU markets.",
            target: "Large enterprises needing 'shadow AI' detection and lifecycle governance across complex organizations.",
            issues: [
                { icon: <DollarCircle size={16} className="text-warning-500" />, text: "Enterprise pricing only — No published pricing, custom quotes required" },
                { icon: <Building size={16} className="text-warning-500" />, text: "Complex implementation — Designed for organizations with existing GRC infrastructure" },
                { icon: <Chart size={16} className="text-warning-500" />, text: "Broad focus — Covers everything from bias detection to security" },
                { icon: <DocumentText size={16} className="text-warning-500" />, text: "Requires existing AI maturity — Assumes you already have AI inventory processes" },
            ],
            bestFor: "Enterprises with 50+ AI deployments needing comprehensive AI governance beyond just EU AI Act."
        },
        {
            name: "Vanta",
            description: "Trust management and compliance automation platform. Recently added EU AI Act support alongside SOC 2, ISO 27001, HIPAA, and 35+ other frameworks.",
            target: "Companies already using Vanta for security compliance who want to add EU AI Act.",
            issues: [
                { icon: <DollarCircle size={16} className="text-warning-500" />, text: "Starts at €10,000/year — For basic compliance, scales to €80,000+ with add-ons" },
                { icon: <Warning2 size={16} className="text-warning-500" />, text: "EU AI Act is an add-on — Not their core focus, added October 2024" },
                { icon: <DollarCircle size={16} className="text-warning-500" />, text: "Hidden costs add up — VRM module (€11,200/year), advanced automation (€10,000-25,000/year)" },
                { icon: <Timer1 size={16} className="text-warning-500" />, text: "Still requires significant setup — Expect 2-4 months to audit-ready" },
            ],
            bestFor: "Companies already invested in Vanta who need EU AI Act as one of several compliance frameworks."
        },
        {
            name: "Consultants & Law Firms",
            description: "Expert advisory services for EU AI Act compliance. Big 4 firms (PwC, Deloitte, EY, KPMG), boutique AI consultancies, and specialized law firms.",
            target: "Organizations with complex regulatory situations, needing bespoke guidance, or requiring legal opinions.",
            issues: [
                { icon: <DollarCircle size={16} className="text-warning-500" />, text: "EU Commission estimates: ~€52,000/year per high-risk AI system" },
                { icon: <Building size={16} className="text-warning-500" />, text: "Quality Management System setup: €193,000 – €330,000 (one-time)" },
                { icon: <DollarCircle size={16} className="text-warning-500" />, text: "Consultant hourly rates: €200 – €500+/hour" },
                { icon: <Timer1 size={16} className="text-warning-500" />, text: "Typical project timeline: 6-18 months" },
            ],
            bestFor: "Genuinely complex regulatory questions, legal opinions for board/investors, unusual AI use cases."
        },
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto flex max-w-3xl flex-col items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.span 
                        className="inline-flex items-center gap-2 rounded-full border border-error-200 bg-error-50 px-3 py-1 text-sm font-semibold text-error-700 dark:border-error-800 dark:bg-error-900/30 dark:text-error-400"
                        variants={fadeInUp}
                    >
                        <Warning2 size={16} variant="Bold" color="currentColor" />
                        The Problem with Enterprise Platforms
                    </motion.span>
                    <motion.h2 
                        className="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
                        variants={fadeInUp}
                    >
                        Why Enterprise Solutions Don't Fit
                    </motion.h2>
                    <motion.p 
                        className="mt-4 text-lg text-tertiary"
                        variants={fadeInUp}
                    >
                        Enterprise platforms are built for Fortune 500 companies with massive budgets and dedicated compliance teams. Here's why they're probably not right for you.
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="mt-12 grid gap-6 md:grid-cols-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                >
                    {competitors.map((competitor) => (
                        <CompetitorCard key={competitor.name} {...competitor} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const WhyProtectronSection = () => {
    const features = [
        { feature: "EU AI Act-specific design", protectron: "Core focus", enterprise: "One of many", vanta: "Add-on", consultants: "Varies" },
        { feature: "Risk classification engine", protectron: "Articles 5, 6, Annex III", enterprise: "Yes", vanta: "Yes", consultants: "Manual" },
        { feature: "Document generation", protectron: "AI-powered", enterprise: "Templates", vanta: "Templates", consultants: "You write" },
        { feature: "Requirements tracking", protectron: "Article-by-article", enterprise: "Yes", vanta: "Yes", consultants: "Manual" },
        { feature: "Self-service signup", protectron: "Start now", enterprise: "Sales cycle", vanta: "Demo first", consultants: "Meetings" },
        { feature: "Transparent pricing", protectron: "On website", enterprise: "Hidden", vanta: "Ranges only", consultants: "Quote required" },
    ];

    const renderCell = (value: string, isProtectron: boolean = false) => {
        const isPositive = value === "Core focus" || value === "AI-powered" || value === "Start now" || value === "On website" || value === "Articles 5, 6, Annex III" || value === "Article-by-article" || value === "Yes";
        const isNegative = value === "Hidden" || value === "Sales cycle" || value === "You write" || value === "Manual" || value === "Meetings" || value === "Quote required";
        
        if (isProtectron) {
            return <span className="font-medium text-success-600 dark:text-success-400">{value}</span>;
        }
        if (isNegative) {
            return <span className="text-error-600 dark:text-error-400">{value}</span>;
        }
        if (value === "One of many" || value === "Add-on" || value === "Templates" || value === "Demo first" || value === "Ranges only" || value === "Varies") {
            return <span className="text-warning-600 dark:text-warning-400">{value}</span>;
        }
        return <span className="text-secondary">{value}</span>;
    };

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto flex max-w-3xl flex-col items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.span 
                        className="inline-flex items-center gap-2 rounded-full border border-success-200 bg-success-50 px-3 py-1 text-sm font-semibold text-success-700 dark:border-success-800 dark:bg-success-900/30 dark:text-success-400"
                        variants={fadeInUp}
                    >
                        <ShieldTick size={16} variant="Bold" color="currentColor" />
                        The Solution
                    </motion.span>
                    <motion.h2 
                        className="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
                        variants={fadeInUp}
                    >
                        Why Protectron.ai Wins
                    </motion.h2>
                    <motion.p 
                        className="mt-4 text-lg text-tertiary"
                        variants={fadeInUp}
                    >
                        While enterprise platforms treat EU AI Act as one of many frameworks, <strong className="text-primary">Protectron.ai is purpose-built for EU AI Act compliance</strong>. Every feature, every workflow, every document template is designed around the regulation's actual requirements.
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="mt-12 overflow-x-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                >
                    <table className="w-full min-w-[700px] border-collapse">
                        <thead>
                            <tr className="border-b border-secondary">
                                <th className="px-4 py-4 text-left text-sm font-semibold text-tertiary">Feature</th>
                                <th className="px-4 py-4 text-left text-sm font-semibold text-brand-600 dark:text-brand-400">Protectron.ai</th>
                                <th className="px-4 py-4 text-left text-sm font-semibold text-tertiary">Enterprise Platforms</th>
                                <th className="px-4 py-4 text-left text-sm font-semibold text-tertiary">Vanta</th>
                                <th className="px-4 py-4 text-left text-sm font-semibold text-tertiary">Consultants</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((row) => (
                                <tr key={row.feature} className="border-b border-secondary hover:bg-secondary/50 transition-colors">
                                    <td className="px-4 py-4 text-sm font-medium text-primary">{row.feature}</td>
                                    <td className="px-4 py-4 text-sm">{renderCell(row.protectron, true)}</td>
                                    <td className="px-4 py-4 text-sm">{renderCell(row.enterprise)}</td>
                                    <td className="px-4 py-4 text-sm">{renderCell(row.vanta)}</td>
                                    <td className="px-4 py-4 text-sm">{renderCell(row.consultants)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
};

const PricingComparisonSection = () => {
    const plans = [
        { name: "Starter", monthly: "€99", annual: "€1,188", bestFor: "1-2 AI systems, early-stage startups" },
        { name: "Growth", monthly: "€299", annual: "€3,588", bestFor: "3-10 AI systems, growing companies" },
        { name: "Scale", monthly: "€599", annual: "€7,188", bestFor: "10-25 AI systems, scaling teams" },
        { name: "Enterprise", monthly: "€999", annual: "€11,988", bestFor: "25+ systems, large organizations" },
    ];

    const competitors = [
        { name: "Credo AI", cost: "€50,000 – €200,000+/year" },
        { name: "Holistic AI", cost: "Custom enterprise pricing" },
        { name: "Vanta", cost: "€10,000 – €80,000/year" },
        { name: "Consultants", cost: "€50,000+ per project" },
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto flex max-w-3xl flex-col items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.span 
                        className="inline-flex items-center gap-2 rounded-full border border-success-200 bg-success-50 px-3 py-1 text-sm font-semibold text-success-700 dark:border-success-800 dark:bg-success-900/30 dark:text-success-400"
                        variants={fadeInUp}
                    >
                        <DollarCircle size={16} variant="Bold" color="currentColor" />
                        Pricing
                    </motion.span>
                    <motion.h2 
                        className="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
                        variants={fadeInUp}
                    >
                        Pricing That Makes Sense
                    </motion.h2>
                </motion.div>

                <motion.div 
                    className="mt-12 grid gap-4 md:grid-cols-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                >
                    {plans.map((plan, index) => (
                        <motion.div 
                            key={plan.name}
                            className={`rounded-2xl border p-6 ${
                                index === 1 
                                    ? "border-brand-500 bg-brand-50 dark:bg-brand-900/20" 
                                    : "border-secondary bg-primary"
                            }`}
                            variants={fadeInUp}
                            whileHover={{ y: -4, boxShadow: "0 12px 24px -8px rgba(0, 0, 0, 0.1)" }}
                        >
                            <h3 className="text-lg font-semibold text-primary">{plan.name}</h3>
                            <div className="mt-3">
                                <span className="text-display-xs font-bold text-primary">{plan.monthly}</span>
                                <span className="text-sm text-tertiary">/month</span>
                            </div>
                            <p className="mt-1 text-sm text-tertiary">{plan.annual}/year</p>
                            <p className="mt-4 text-xs text-tertiary">{plan.bestFor}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className="mt-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                >
                    <h3 className="text-center text-lg font-semibold text-primary">Compare that to:</h3>
                    <div className="mt-6 grid gap-4 md:grid-cols-4">
                        {competitors.map((competitor) => (
                            <div key={competitor.name} className="rounded-xl border border-error-200 bg-error-50 p-4 dark:border-error-800 dark:bg-error-900/20">
                                <p className="text-sm font-medium text-error-700 dark:text-error-400">{competitor.name}</p>
                                <p className="mt-1 text-sm text-error-600 dark:text-error-300">{competitor.cost}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SpeedSection = () => {
    const protectronSteps = [
        { icon: <Flash size={20} className="text-success-500" />, time: "Minutes", description: "Sign up and classify your first AI system" },
        { icon: <DocumentText size={20} className="text-success-500" />, time: "Hours", description: "Generate technical documentation and risk assessments" },
        { icon: <TickCircle size={20} className="text-success-500" />, time: "Days", description: "Complete compliance framework for your organization" },
        { icon: <Chart size={20} className="text-success-500" />, time: "Ongoing", description: "Track progress, manage evidence, stay compliant" },
    ];

    const alternatives = [
        { name: "Enterprise platforms", time: "3-6 month implementation" },
        { name: "Consultants", time: "6-18 month engagements" },
        { name: "DIY", time: "3-6 months of manual work" },
    ];

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto flex max-w-3xl flex-col items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.span 
                        className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-400"
                        variants={fadeInUp}
                    >
                        <Flash size={16} variant="Bold" color="currentColor" />
                        Speed
                    </motion.span>
                    <motion.h2 
                        className="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
                        variants={fadeInUp}
                    >
                        Speed That Matters
                    </motion.h2>
                </motion.div>

                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                    <motion.div 
                        className="rounded-2xl border border-success-200 bg-success-50 p-6 dark:border-success-800 dark:bg-success-900/20 md:p-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeInUp}
                    >
                        <h3 className="text-lg font-semibold text-success-700 dark:text-success-400">With Protectron.ai</h3>
                        <ul className="mt-6 space-y-4">
                            {protectronSteps.map((step, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="mt-0.5 shrink-0">{step.icon}</span>
                                    <div>
                                        <span className="font-semibold text-success-700 dark:text-success-400">{step.time}:</span>
                                        <span className="ml-1 text-success-600 dark:text-success-300">{step.description}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div 
                        className="rounded-2xl border border-error-200 bg-error-50 p-6 dark:border-error-800 dark:bg-error-900/20 md:p-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeInUp}
                    >
                        <h3 className="text-lg font-semibold text-error-700 dark:text-error-400">With alternatives</h3>
                        <ul className="mt-6 space-y-4">
                            {alternatives.map((alt, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CloseCircle size={20} className="mt-0.5 shrink-0 text-error-500" variant="Bold" />
                                    <div>
                                        <span className="font-semibold text-error-700 dark:text-error-400">{alt.name}:</span>
                                        <span className="ml-1 text-error-600 dark:text-error-300">{alt.time}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 rounded-lg bg-error-100 p-4 dark:bg-error-900/30">
                            <p className="text-sm font-medium text-error-700 dark:text-error-400">
                                <Danger size={16} className="mr-1 inline" />
                                The Aug 2, 2026 deadline isn't moving. Every month you spend evaluating enterprise solutions is a month you're not making progress.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const WhoShouldUseSection = () => {
    const recommendations = [
        {
            title: "Choose Protectron.ai if you:",
            color: "success",
            items: [
                "Are a startup or SMB",
                "Have 1-50 AI systems",
                "Want to get started today",
                "Need transparent, affordable pricing",
                "Want EU AI Act-specific features",
                "Prefer self-service over sales calls",
                "Need AI-generated documentation to save time",
            ]
        },
        {
            title: "Choose enterprise platforms if you:",
            color: "warning",
            items: [
                "Are a Fortune 500 or large enterprise",
                "Have 100+ AI systems across the organization",
                "Have a dedicated GRC/compliance team",
                "Have €50,000+ annual compliance budget",
                "Need deep integrations with existing MLOps infrastructure",
                "Need multi-framework compliance (EU AI Act + NIST + ISO 42001)",
            ]
        },
        {
            title: "Choose Vanta if you:",
            color: "brand",
            items: [
                "Already use Vanta for SOC 2 or ISO 27001",
                "Need multi-framework compliance in one platform",
                "Have €15,000-50,000+ annual budget",
                "Want to reuse existing compliance evidence",
            ]
        },
        {
            title: "Choose consultants if you:",
            color: "tertiary",
            items: [
                "Need legal opinions for board/investors",
                "Have complex, unusual AI use cases",
                "Require interpretation of edge cases in the regulation",
                "Have €50,000+ budget for advisory services",
            ]
        },
    ];

    const getColorClasses = (color: string) => {
        switch (color) {
            case "success":
                return "border-success-200 bg-success-50 dark:border-success-800 dark:bg-success-900/20";
            case "warning":
                return "border-warning-200 bg-warning-50 dark:border-warning-800 dark:bg-warning-900/20";
            case "brand":
                return "border-brand-200 bg-brand-50 dark:border-brand-800 dark:bg-brand-900/20";
            default:
                return "border-secondary bg-secondary";
        }
    };

    const getTextColor = (color: string) => {
        switch (color) {
            case "success":
                return "text-success-700 dark:text-success-400";
            case "warning":
                return "text-warning-700 dark:text-warning-400";
            case "brand":
                return "text-brand-700 dark:text-brand-400";
            default:
                return "text-secondary";
        }
    };

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto flex max-w-3xl flex-col items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.span 
                        className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-400"
                        variants={fadeInUp}
                    >
                        <People size={16} variant="Bold" color="currentColor" />
                        Who Should Use What
                    </motion.span>
                    <motion.h2 
                        className="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
                        variants={fadeInUp}
                    >
                        Find the Right Solution for You
                    </motion.h2>
                </motion.div>

                <motion.div 
                    className="mt-12 grid gap-6 md:grid-cols-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                >
                    {recommendations.map((rec) => (
                        <motion.div 
                            key={rec.title}
                            className={`rounded-2xl border p-6 md:p-8 ${getColorClasses(rec.color)}`}
                            variants={fadeInUp}
                        >
                            <h3 className={`text-lg font-semibold ${getTextColor(rec.color)}`}>{rec.title}</h3>
                            <ul className="mt-4 space-y-2">
                                {rec.items.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-secondary">
                                        <TickSquare size={16} className={`mt-0.5 shrink-0 ${getTextColor(rec.color)}`} variant="Bold" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const CostOfWaitingSection = () => {
    const penalties = [
        { violation: "Prohibited AI practices", penalty: "Up to €35 million or 7% of global revenue" },
        { violation: "High-risk non-compliance", penalty: "Up to €15 million or 3% of global revenue" },
        { violation: "False information", penalty: "Up to €7.5 million or 1.5% of global revenue" },
    ];

    const consequences = [
        { icon: <CloseCircle size={20} className="text-error-500" variant="Bold" />, text: "Market withdrawal orders — Your AI system can be banned from EU" },
        { icon: <Chart size={20} className="text-error-500" variant="Bold" />, text: "Reputation damage — Headlines about non-compliance hurt trust" },
        { icon: <Briefcase size={20} className="text-error-500" variant="Bold" />, text: "Lost deals — Enterprise customers increasingly require proof of compliance" },
        { icon: <DocumentText size={20} className="text-error-500" variant="Bold" />, text: "M&A impact — Non-compliance is now part of due diligence" },
    ];

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto flex max-w-3xl flex-col items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.span 
                        className="inline-flex items-center gap-2 rounded-full border border-error-200 bg-error-50 px-3 py-1 text-sm font-semibold text-error-700 dark:border-error-800 dark:bg-error-900/30 dark:text-error-400"
                        variants={fadeInUp}
                    >
                        <Danger size={16} variant="Bold" color="currentColor" />
                        Urgency
                    </motion.span>
                    <motion.h2 
                        className="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
                        variants={fadeInUp}
                    >
                        The Real Cost of Waiting
                    </motion.h2>
                </motion.div>

                <motion.div 
                    className="mt-12 rounded-2xl border border-error-200 bg-error-50 p-6 dark:border-error-800 dark:bg-error-900/20 md:p-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                >
                    <h3 className="text-lg font-semibold text-error-700 dark:text-error-400">EU AI Act Penalties</h3>
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        {penalties.map((item) => (
                            <div key={item.violation} className="rounded-xl bg-error-100 p-4 dark:bg-error-900/30">
                                <p className="text-sm font-medium text-error-700 dark:text-error-400">{item.violation}</p>
                                <p className="mt-2 text-lg font-bold text-error-800 dark:text-error-300">{item.penalty}</p>
                            </div>
                        ))}
                    </div>

                    <h4 className="mt-8 text-md font-semibold text-error-700 dark:text-error-400">Beyond fines:</h4>
                    <ul className="mt-4 space-y-3">
                        {consequences.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm text-error-600 dark:text-error-300">
                                <span className="mt-0.5 shrink-0">{item.icon}</span>
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 rounded-xl bg-error-100 p-4 dark:bg-error-900/30">
                        <p className="text-sm font-medium text-error-700 dark:text-error-400">
                            <Clock size={16} className="mr-1 inline" />
                            <strong>Timeline reality:</strong> Prohibited practices already in effect (Feb 2, 2025). High-risk AI systems deadline: <strong>Aug 2, 2026</strong> — ~8 months away.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "We evaluated enterprise solutions and realized we'd spend more on implementation than our entire annual software budget. Protectron got us compliant in days, not months.",
            author: "CTO, AI SaaS Startup"
        },
        {
            quote: "The document generation alone saved us 80+ hours. Our technical docs would have taken our engineering team weeks to write from scratch.",
            author: "Compliance Lead, Healthcare AI"
        },
        {
            quote: "Finally, a compliance tool that doesn't require a 6-figure budget and a 6-month implementation.",
            author: "Founder, European AI Company"
        },
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto flex max-w-3xl flex-col items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.span 
                        className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-400"
                        variants={fadeInUp}
                    >
                        <Star1 size={16} variant="Bold" color="currentColor" />
                        Testimonials
                    </motion.span>
                    <motion.h2 
                        className="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
                        variants={fadeInUp}
                    >
                        What Customers Say
                    </motion.h2>
                </motion.div>

                <motion.div 
                    className="mt-12 grid gap-6 md:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div 
                            key={index}
                            className="rounded-2xl border border-secondary bg-primary p-6 shadow-sm md:p-8"
                            variants={fadeInUp}
                            whileHover={{ y: -4, boxShadow: "0 12px 24px -8px rgba(0, 0, 0, 0.1)" }}
                        >
                            <p className="text-md italic text-secondary">"{testimonial.quote}"</p>
                            <p className="mt-4 text-sm font-medium text-tertiary">— {testimonial.author}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const GetStartedSection = () => {
    const steps = [
        { step: "1", title: "Sign Up", description: "Create your account in 60 seconds. No sales call required." },
        { step: "2", title: "Add Your AI Systems", description: "Describe your AI systems and get instant risk classification." },
        { step: "3", title: "Generate Documentation", description: "AI-powered document generation creates your technical docs, risk assessments, and policies." },
        { step: "4", title: "Track Progress", description: "Monitor compliance progress, manage evidence, and stay audit-ready." },
    ];

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto flex max-w-3xl flex-col items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.span 
                        className="inline-flex items-center gap-2 rounded-full border border-success-200 bg-success-50 px-3 py-1 text-sm font-semibold text-success-700 dark:border-success-800 dark:bg-success-900/30 dark:text-success-400"
                        variants={fadeInUp}
                    >
                        <Flash size={16} variant="Bold" color="currentColor" />
                        Get Started
                    </motion.span>
                    <motion.h2 
                        className="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
                        variants={fadeInUp}
                    >
                        Get Started in Minutes, Not Months
                    </motion.h2>
                </motion.div>

                <motion.div 
                    className="mt-12 grid gap-6 md:grid-cols-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                >
                    {steps.map((step) => (
                        <motion.div 
                            key={step.step}
                            className="relative rounded-2xl border border-secondary bg-secondary p-6"
                            variants={fadeInUp}
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                                {step.step}
                            </span>
                            <h3 className="mt-4 text-lg font-semibold text-primary">{step.title}</h3>
                            <p className="mt-2 text-sm text-tertiary">{step.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className="mt-12 flex flex-wrap items-center justify-center gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                >
                    <Link 
                        href="#" 
                        className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-md font-semibold text-white shadow-lg transition-all hover:bg-brand-700 hover:shadow-xl"
                    >
                        Get Started for Free
                        <ArrowRight size={18} />
                    </Link>
                    <Link 
                        href="/#pricing" 
                        className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-8 py-4 text-md font-semibold text-primary shadow-sm transition-all hover:bg-secondary"
                    >
                        See Pricing
                    </Link>
                                    </motion.div>
            </div>
        </section>
    );
};

const FooterBanner = () => (
    <section className="bg-brand-600 py-8">
        <div className="mx-auto w-full max-w-container px-4 text-center md:px-8">
            <p className="text-lg font-semibold text-white">
                Protectron.ai — EU AI Act Compliance Made Simple
            </p>
            <p className="mt-2 text-sm text-brand-100">
                🇪🇺 Data hosted in EU | GDPR compliant | SOC 2 in progress
            </p>
        </div>
    </section>
);

const DisclaimerSection = () => (
    <section className="bg-secondary py-8">
        <div className="mx-auto w-full max-w-container px-4 md:px-8">
            <p className="text-center text-xs text-tertiary">
                <strong>Disclaimer:</strong> This comparison is based on publicly available information as of December 2024. Pricing and features may change. Protectron.ai provides compliance management tools, not legal advice. Always consult qualified legal counsel for specific regulatory questions.
            </p>
        </div>
    </section>
);

export default function ComparePage() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <HeroSection />
                <ComparisonTableSection />
                <CompetitorsSection />
                <WhyProtectronSection />
                <PricingComparisonSection />
                <SpeedSection />
                <WhoShouldUseSection />
                <CostOfWaitingSection />
                <TestimonialsSection />
                <GetStartedSection />
                <FooterBanner />
                <DisclaimerSection />
            </main>
            <Footer />
        </div>
    );
}
