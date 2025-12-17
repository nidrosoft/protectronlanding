"use client";

import { motion } from "motion/react";
import { Check, Upload, Link2, Clock, FileText, FolderOpen, Search, Download, Users, Shield, Image, Cpu, CheckCircle2 } from "lucide-react";
import { TickCircle, DocumentText, FolderCloud, Timer1 } from "iconsax-react";
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
                        Audit Ready
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        Audit-Ready Evidence at Your Fingertips
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        Upload, organize, and link evidence to every EU AI Act requirement. Be ready for any audit in minutes, not days—with automatic evidence from your SDK integration.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="primary" href="/assessment">
                            Start Organizing Evidence
                        </Button>
                        <Button size="xl" color="secondary" href="#how-it-works">
                            See How It Works
                        </Button>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-tertiary">
                        <span className="flex items-center gap-2">
                            <TickCircle size="18" className="text-success-500" variant="Bold" />
                            Automatic evidence from SDK logs
                        </span>
                        <span className="flex items-center gap-2">
                            <TickCircle size="18" className="text-success-500" variant="Bold" />
                            Links to requirements automatically
                        </span>
                        <span className="flex items-center gap-2">
                            <TickCircle size="18" className="text-success-500" variant="Bold" />
                            Export audit packages in one click
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
            icon: "📁",
            title: "Evidence Is Scattered Everywhere",
            description: "Compliance evidence lives in Google Drive, Confluence, email threads, Jira tickets, Slack messages, and individual laptops. When you need it, you can't find it.",
        },
        {
            icon: "🔗",
            title: "No Link to Requirements",
            description: "Even when evidence exists, there's no clear connection between \"what we did\" and \"what the EU AI Act requires.\" Auditors don't accept a folder dump.",
        },
        {
            icon: "📅",
            title: "Evidence Goes Stale",
            description: "That security assessment from 18 months ago? That training record from a departed employee? Evidence ages out, and nobody tracks what needs refreshing.",
        },
        {
            icon: "⏰",
            title: "Audit Prep Takes Weeks",
            description: "When an enterprise customer requests compliance documentation, or a regulator announces an inspection, teams spend weeks pulling together evidence packages.",
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
                        When Auditors Call, Most Teams Panic
                    </h2>
                    <p className="mt-4 text-lg text-tertiary">
                        It's not enough to be compliant—you have to prove it. When auditors, customers, or regulators ask for evidence, most teams scramble.
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
                    Protectron's Evidence Management creates a single source of truth for all your compliance evidence—organized by requirement, tracked for freshness, and exportable on demand.
                </motion.p>
            </div>
        </section>
    );
};

const SolutionSection = () => {
    const benefits = [
        {
            title: "Organized by Requirement",
            description: "Evidence is linked directly to EU AI Act requirements. See at a glance which requirements have proof and which need attention.",
        },
        {
            title: "Automatic + Manual Evidence",
            description: "Upload documents manually or let our SDK automatically generate evidence from your production systems. Both types, one system.",
        },
        {
            title: "Audit-Ready Exports",
            description: "Generate comprehensive audit packages with one click. No more scrambling when auditors come calling.",
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
                        One Place for All Your Compliance Proof
                    </h2>
                    <p className="mt-4 mx-auto max-w-3xl text-lg text-tertiary">
                        Evidence Management gives you a structured repository where every piece of compliance evidence is organized, linked to specific requirements, and ready for audit.
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
            title: "Requirements Generate Evidence Needs",
            description: "When you classify an AI system and track its requirements, Protectron automatically identifies what evidence you'll need for each article.",
        },
        {
            number: "2",
            title: "Upload Manual Evidence",
            description: "Upload documents, spreadsheets, images, or links. Drag and drop, bulk upload, or use our API for automation.",
        },
        {
            number: "3",
            title: "Automatic Evidence from SDK",
            description: "For AI systems with SDK integration, evidence is generated automatically: audit trails, human oversight logs, risk event reports.",
        },
        {
            number: "4",
            title: "Link Evidence to Requirements",
            description: "Each piece of evidence connects to one or more requirements. Auto-suggest based on content, or link manually.",
        },
        {
            number: "5",
            title: "Track Evidence Health",
            description: "Dashboard shows coverage metrics, freshness tracking, and gap identification at a glance.",
        },
        {
            number: "6",
            title: "Generate Audit Packages",
            description: "Export everything in one click: full audit package, by article, by system, or executive summary.",
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
                        How Evidence Management Works
                    </h2>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className="rounded-2xl border border-primary bg-primary p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
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

const EvidenceTypesSection = () => {
    const evidenceTypes = [
        {
            icon: FileText,
            title: "Documents",
            description: "Written policies, procedures, and reports that prove compliance.",
            examples: "AI Governance Policy, Risk Assessment Reports, Technical Documentation, Training Records",
        },
        {
            icon: FolderOpen,
            title: "Records & Logs",
            description: "Systematic records that demonstrate ongoing compliance activities.",
            examples: "Audit trail logs, Access logs, Change logs, Incident reports, Testing records",
        },
        {
            icon: Shield,
            title: "Attestations & Certifications",
            description: "Third-party validations and formal declarations.",
            examples: "Security audits, SOC 2 reports, ISO certifications, EU Declaration of Conformity",
        },
        {
            icon: Image,
            title: "Screenshots & Captures",
            description: "Visual evidence of system configurations and behaviors.",
            examples: "UI screenshots, Configuration captures, Dashboard snapshots, Error handling demos",
        },
        {
            icon: Link2,
            title: "External References",
            description: "Links to evidence in other systems.",
            examples: "Confluence docs, Jira tickets, GitHub PRs, Training platform records",
        },
        {
            icon: Cpu,
            title: "Auto-Generated Evidence",
            description: "Evidence automatically created by Protectron SDK and platform.",
            examples: "SDK audit trail exports, Human oversight summaries, Risk event reports",
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
                        What Counts as Evidence
                    </h2>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {evidenceTypes.map((type, index) => (
                        <motion.div
                            key={type.title}
                            className="rounded-2xl border border-primary bg-secondary p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <type.icon className="h-8 w-8 text-brand-600" />
                            <h3 className="mt-4 text-lg font-semibold text-primary">{type.title}</h3>
                            <p className="mt-2 text-tertiary">{type.description}</p>
                            <p className="mt-3 text-sm text-quaternary"><span className="font-medium">Examples:</span> {type.examples}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ArticleMappingSection = () => {
    const articles = [
        {
            article: "Article 9",
            title: "Risk Management",
            evidence: ["Risk Management Policy", "Risk Register", "Risk Assessment Report", "Risk Event Reports (SDK)"],
        },
        {
            article: "Article 10",
            title: "Data Governance",
            evidence: ["Data Governance Policy", "Dataset Documentation", "Bias Assessment", "Data Quality Reports"],
        },
        {
            article: "Article 11",
            title: "Technical Documentation",
            evidence: ["System Description", "Model Card", "Architecture Diagrams", "Testing Reports"],
        },
        {
            article: "Article 12",
            title: "Record-Keeping",
            evidence: ["Logging Architecture Doc", "Log Samples (SDK)", "Retention Policy", "Audit Trail Exports (SDK)"],
        },
        {
            article: "Article 13",
            title: "Transparency",
            evidence: ["Instructions for Use", "User Notifications", "Limitations Documentation"],
        },
        {
            article: "Article 14",
            title: "Human Oversight",
            evidence: ["Oversight Procedures", "Training Records", "Oversight Event Logs (SDK)", "Intervention History (SDK)"],
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
                        Evidence Mapping by EU AI Act Article
                    </h2>
                    <p className="mt-4 mx-auto max-w-3xl text-lg text-tertiary">
                        Each EU AI Act article requires specific types of evidence. Here's what you need to collect for each requirement.
                    </p>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article, index) => (
                        <motion.div
                            key={article.article}
                            className="rounded-2xl border border-primary bg-primary p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <span className="inline-flex items-center rounded-full bg-brand-100 dark:bg-brand-900/30 px-3 py-1 text-sm font-semibold text-brand-700 dark:text-brand-400">
                                {article.article}
                            </span>
                            <h3 className="mt-3 text-lg font-semibold text-primary">{article.title}</h3>
                            <ul className="mt-4 space-y-2">
                                {article.evidence.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-tertiary">
                                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                        {item}
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
            icon: Upload,
            title: "Flexible Upload",
            description: "Drag-and-drop interface, bulk upload, API upload, and browser extension for web captures.",
        },
        {
            icon: Search,
            title: "Tagging & Organization",
            description: "AI-suggested tags, custom taxonomies, full-text search, and saved searches.",
        },
        {
            icon: Clock,
            title: "Freshness Management",
            description: "Expiration tracking, automatic stale alerts, refresh workflows, and version history.",
        },
        {
            icon: Link2,
            title: "Requirement Linking",
            description: "Direct linking, coverage visualization, and gap alerts for missing evidence.",
        },
        {
            icon: Download,
            title: "Audit Package Export",
            description: "PDF, ZIP, JSON, or shareable links. Complete packages or filtered by article/system.",
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "Multi-user access, role-based permissions, assignment tracking, and review workflows.",
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
                        Evidence Management Features
                    </h2>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="rounded-2xl border border-primary bg-secondary p-6"
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

const UseCasesSection = () => {
    const useCases = [
        {
            icon: "🚀",
            title: "AI Startups Seeking Enterprise Customers",
            description: "Organize existing documentation, generate missing compliance documents, and provide professional audit packages for each prospect.",
        },
        {
            icon: "🏛️",
            title: "Compliance Teams at Scale",
            description: "Centralized evidence repository for all AI systems. Cross-system policy evidence, team permissions, and portfolio-wide compliance status.",
        },
        {
            icon: "🔍",
            title: "Preparing for Regulatory Audit",
            description: "Run immediate gap analysis, prioritize evidence collection, auto-export SDK evidence, and generate complete audit packages by article.",
        },
        {
            icon: "👩‍💻",
            title: "Engineering Teams Building AI",
            description: "SDK integration starts collecting evidence from day one. Evidence requirements visible in development workflow.",
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
                        Who Uses Evidence Management
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
                            <span className="text-3xl">{useCase.icon}</span>
                            <h3 className="mt-4 text-lg font-semibold text-primary">{useCase.title}</h3>
                            <p className="mt-2 text-tertiary">{useCase.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const evidenceManagementFaqs = [
    {
        question: "What file formats can I upload?",
        answer: "We support PDF, Word (doc/docx), Excel (xls/xlsx), PowerPoint (ppt/pptx), images (png/jpg/gif), text files, markdown, HTML, and ZIP archives. Most common business document formats work.",
    },
    {
        question: "How much storage is included?",
        answer: "Storage limits vary by plan. Starter includes 10GB, Growth includes 100GB, Scale includes 500GB. Enterprise plans have custom limits. Automatic SDK evidence counts toward storage.",
    },
    {
        question: "Can I link to external evidence instead of uploading?",
        answer: "Yes. You can add URL links to evidence in Confluence, Notion, Google Drive, or any accessible web location. We recommend capturing snapshots for critical evidence in case links change.",
    },
    {
        question: "How do I know if I have enough evidence for each requirement?",
        answer: "Our dashboard shows coverage percentage per requirement. We suggest evidence types for each requirement, and flag gaps where no evidence is linked.",
    },
    {
        question: "Who can see my evidence?",
        answer: "Only users you invite to your Protectron organization. You control permissions (viewer, editor, admin). Auditors can see only what you explicitly share via audit packages or shareable links.",
    },
    {
        question: "How does automatic evidence from SDK work?",
        answer: "When you integrate our SDK, it automatically generates evidence: audit trails become Article 12 evidence, human oversight events become Article 14 evidence, and risk events become Article 9 evidence.",
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
                        Be Audit-Ready, Always
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        Stop scrambling when auditors call. Organize your compliance evidence once, and be ready for any audit in minutes.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/assessment">
                            Start Organizing Evidence
                        </Button>
                        <Button size="xl" color="link-gray" href="/pricing" className="text-white hover:text-white/80">
                            See Pricing
                        </Button>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
                        <span>✓ 14-day free trial</span>
                        <span>✓ No credit card required</span>
                        <span>✓ 10GB storage included</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default function EvidenceManagementPage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <HowItWorksSection />
            <EvidenceTypesSection />
            <ArticleMappingSection />
            <FeaturesSection />
            <UseCasesSection />
            <FAQSection faqs={evidenceManagementFaqs} />
            <CTASection />
            <Footer />
        </div>
    );
}
