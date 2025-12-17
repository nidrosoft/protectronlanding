"use client";

import { motion } from "motion/react";
import { Check, FileText, Download, AlertTriangle } from "lucide-react";
import { TickCircle, Edit, DocumentCode } from "iconsax-react";
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
                        AI-Assisted Drafting
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        Documentation in Minutes, Not Months
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        Generate EU AI Act compliant documentation with AI-assisted drafting. Technical documentation, risk assessments, policies, and model cards—created from your inputs, ready for review.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="primary" href="/assessment">
                            Generate Your First Document
                        </Button>
                        <Button size="xl" color="secondary" href="#samples">
                            View Sample Documents
                        </Button>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-tertiary">
                        <span className="flex items-center gap-2">
                            <TickCircle size="18" className="text-success-500" variant="Bold" />
                            20+ document templates included
                        </span>
                        <span className="flex items-center gap-2">
                            <TickCircle size="18" className="text-success-500" variant="Bold" />
                            Aligned to Article 11 requirements
                        </span>
                        <span className="flex items-center gap-2">
                            <TickCircle size="18" className="text-success-500" variant="Bold" />
                            Export as PDF, Word, or Markdown
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
            icon: "📝",
            title: "It's Not Just a README",
            description: "EU AI Act technical documentation must cover system description, design specifications, risk management, training data, testing procedures, and more. This isn't documentation your engineering team already has.",
        },
        {
            icon: "⏱️",
            title: "It Takes Forever",
            description: "Compliance consultants estimate 3-6 months to create complete technical documentation manually. Most teams don't have that runway before the August 2026 deadline.",
        },
        {
            icon: "💸",
            title: "Consultants Are Expensive",
            description: "Professional documentation services start at €50,000. For startups and mid-market companies, that's a significant budget hit for what amounts to formatted text.",
        },
        {
            icon: "🎯",
            title: "Getting It Wrong Is Costly",
            description: "Incomplete or incorrect documentation doesn't just fail audits—it can lead to conformity assessment rejection, market access denial, and regulatory penalties.",
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
                        Documentation Is the Hardest Part of Compliance
                    </h2>
                    <p className="mt-4 text-lg text-tertiary">
                        Article 11 of the EU AI Act requires comprehensive technical documentation for high-risk AI systems. Most teams underestimate what's involved.
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
                    Protectron's document generation combines AI-assisted drafting with EU AI Act expertise to produce compliant documentation in a fraction of the time and cost.
                </motion.p>
            </div>
        </section>
    );
};

const SolutionSection = () => {
    const benefits = [
        {
            title: "Fast First Drafts",
            description: "Generate complete document drafts in minutes instead of weeks. Focus your time on review and refinement, not blank-page writing.",
        },
        {
            title: "Compliance-Aligned",
            description: "Every template is structured around EU AI Act requirements. We ensure you cover what regulators expect to see.",
        },
        {
            title: "Your Voice, Your Details",
            description: "Documents are generated from your specific inputs. This isn't generic boilerplate—it's your AI system, described accurately.",
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
                        AI-Powered Documentation That Meets the Standard
                    </h2>
                    <p className="mt-4 mx-auto max-w-3xl text-lg text-tertiary">
                        Answer guided questions about your AI system. Our AI drafting engine creates comprehensive documentation aligned to EU AI Act requirements. Review, customize, and export—ready for auditors, customers, and regulators.
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

const DocumentTypesSection = () => {
    const documentCategories = [
        {
            icon: DocumentCode,
            title: "Technical Documentation (Article 11)",
            description: "The core documentation package required for high-risk AI systems.",
            documents: [
                "AI System Description",
                "Design and Development Specification",
                "Model Card",
                "Training Data Documentation",
                "Testing and Validation Report",
            ],
        },
        {
            icon: AlertTriangle,
            title: "Risk Management Documents",
            description: "Documentation supporting your Article 9 risk management system.",
            documents: [
                "Risk Assessment Report",
                "Risk Mitigation Plan",
                "Risk Management Policy",
            ],
        },
        {
            icon: FileText,
            title: "Policies and Procedures",
            description: "Internal governance documents demonstrating organizational compliance.",
            documents: [
                "AI Governance Policy",
                "Data Governance Policy",
                "Human Oversight Procedures",
                "Incident Response Plan",
                "Change Management Procedures",
            ],
        },
        {
            icon: Edit,
            title: "Transparency Documents",
            description: "User-facing documentation required by Article 13.",
            documents: [
                "Instructions for Use",
                "Deployer Information Package",
                "User Notification Template",
            ],
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
                        Complete Documentation Library
                    </h2>
                    <p className="mt-4 text-lg text-tertiary">
                        20+ document templates covering all EU AI Act documentation requirements
                    </p>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {documentCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className="rounded-2xl border border-primary bg-primary p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <category.icon className="h-8 w-8 text-brand-600" />
                            <h3 className="mt-4 text-lg font-semibold text-primary">{category.title}</h3>
                            <p className="mt-2 text-sm text-tertiary">{category.description}</p>
                            <ul className="mt-4 space-y-2">
                                {category.documents.map((doc) => (
                                    <li key={doc} className="flex items-center gap-2 text-sm text-tertiary">
                                        <TickCircle size="16" className="shrink-0 text-success-500" variant="Bold" />
                                        {doc}
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

const HowItWorksSection = () => {
    const steps = [
        {
            number: "1",
            title: "Select Document Type",
            description: "Choose from our library of 20+ EU AI Act aligned templates. Each template shows what information you'll need to provide.",
        },
        {
            number: "2",
            title: "Answer Guided Questions",
            description: "Our intelligent questionnaire walks you through the information needed. Questions are tailored to the document type and your AI system's risk classification.",
        },
        {
            number: "3",
            title: "AI Generates Draft",
            description: "Our drafting engine synthesizes your answers into a complete, structured document following EU AI Act terminology and structure.",
        },
        {
            number: "4",
            title: "Review and Customize",
            description: "Review the generated draft in our editor. Make changes, add details, and refine language with your legal or compliance team.",
        },
        {
            number: "5",
            title: "Export and Use",
            description: "Export your finished document as PDF, Word (.docx), or Markdown. Documents are automatically versioned and stored.",
        },
    ];

    return (
        <section id="samples" className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                        How Document Generation Works
                    </h2>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-5">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className="relative text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                                {step.number}
                            </div>
                            <h3 className="mt-4 text-md font-semibold text-primary">{step.title}</h3>
                            <p className="mt-2 text-sm text-tertiary">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SampleDocumentSection = () => {
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
                        See What You'll Get
                    </h2>
                    <p className="mt-4 text-lg text-tertiary">
                        Sample excerpt from generated Technical Documentation
                    </p>
                </motion.div>
                <motion.div 
                    className="mt-12 mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="rounded-2xl border border-primary bg-primary p-6 shadow-lg">
                        <div className="flex items-center gap-2 border-b border-secondary pb-4 mb-4">
                            <div className="flex gap-1.5">
                                <div className="h-3 w-3 rounded-full bg-error-400" />
                                <div className="h-3 w-3 rounded-full bg-warning-400" />
                                <div className="h-3 w-3 rounded-full bg-success-400" />
                            </div>
                            <span className="text-sm text-tertiary ml-2">technical-documentation.md</span>
                        </div>
                        <pre className="text-sm text-tertiary overflow-x-auto font-mono leading-relaxed">
{`3.1 System Description

The Customer Support AI Agent is a high-risk AI system 
designed for automated customer service interactions in 
accordance with EU AI Act classification criteria. The 
system falls under Annex III, Category 4: Employment, 
workers management and access to self-employment.

3.1.1 Intended Purpose
The system is intended to handle customer inquiries, 
process support tickets, and escalate complex issues 
to human agents. It is designed to be used by customer 
service teams in B2B SaaS environments.

3.1.2 Technical Architecture
The system comprises the following components:
- LLM Engine: GPT-5.2 based language model
- RAG Pipeline: Vector database for knowledge retrieval
- Escalation Module: Human-in-the-loop integration
- Audit Logger: Protectron SDK for compliance logging

3.1.3 Performance Specifications
The system has been validated to achieve:
- Accuracy: 94.2% on internal test set
- Response Time: < 2 seconds average
- Escalation Rate: 12% of conversations`}
                        </pre>
                    </div>
                    <div className="mt-6 text-center">
                        <Button size="lg" color="secondary" href="/samples/technical-documentation.pdf">
                            <Download className="h-4 w-4 mr-2" />
                            Download Full Sample (PDF)
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const DifferentiatorsSection = () => {
    const differentiators = [
        {
            title: "Structured for Compliance",
            description: "Every document is structured around what EU AI Act requires. We don't just give you blank templates—we ensure you cover the specific elements regulators expect.",
        },
        {
            title: "Generated From Your Inputs",
            description: "This isn't generic boilerplate you fill in. Our AI drafting engine creates unique content based on your specific answers about your AI system.",
        },
        {
            title: "Plain Language, Legal Precision",
            description: "Our drafts balance readability with the precision compliance requires. Technical enough to satisfy auditors, clear enough for non-experts.",
        },
        {
            title: "Version Control Built In",
            description: "Every document is automatically versioned. Track changes over time. Know who made edits and when. Essential for audit trails.",
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
                        Not Just Templates—Intelligent Drafting
                    </h2>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {differentiators.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className="rounded-2xl border border-primary bg-secondary p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                            <p className="mt-2 text-tertiary">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ComparisonSection = () => {
    const comparisons = [
        { approach: "Protectron", time: "Hours", cost: "€99-999/mo", alignment: "Built-in", customization: "High" },
        { approach: "Manual (Internal)", time: "Weeks to months", cost: "Staff time", alignment: "Variable", customization: "High" },
        { approach: "Generic Templates", time: "Days", cost: "€50-500 one-time", alignment: "Low", customization: "Medium" },
        { approach: "Compliance Consultants", time: "Months", cost: "€50,000+", alignment: "High", customization: "High" },
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
                        Why AI-Assisted Drafting Beats the Alternatives
                    </h2>
                </motion.div>
                <motion.div 
                    className="mt-12 overflow-x-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <table className="w-full min-w-[600px] border-collapse">
                        <thead>
                            <tr className="border-b border-primary">
                                <th className="py-4 px-4 text-left text-sm font-semibold text-primary">Approach</th>
                                <th className="py-4 px-4 text-left text-sm font-semibold text-primary">Time to Draft</th>
                                <th className="py-4 px-4 text-left text-sm font-semibold text-primary">Cost</th>
                                <th className="py-4 px-4 text-left text-sm font-semibold text-primary">Compliance Alignment</th>
                                <th className="py-4 px-4 text-left text-sm font-semibold text-primary">Customization</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisons.map((row, index) => (
                                <tr key={row.approach} className={`border-b border-primary ${index === 0 ? 'bg-brand-50 dark:bg-brand-900/20' : ''}`}>
                                    <td className={`py-4 px-4 text-sm ${index === 0 ? 'font-semibold text-brand-700 dark:text-brand-400' : 'text-primary'}`}>{row.approach}</td>
                                    <td className={`py-4 px-4 text-sm ${index === 0 ? 'font-medium text-brand-600' : 'text-tertiary'}`}>{row.time}</td>
                                    <td className={`py-4 px-4 text-sm ${index === 0 ? 'font-medium text-brand-600' : 'text-tertiary'}`}>{row.cost}</td>
                                    <td className={`py-4 px-4 text-sm ${index === 0 ? 'font-medium text-brand-600' : 'text-tertiary'}`}>{row.alignment}</td>
                                    <td className={`py-4 px-4 text-sm ${index === 0 ? 'font-medium text-brand-600' : 'text-tertiary'}`}>{row.customization}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
                <motion.p 
                    className="mt-8 text-center text-lg text-tertiary"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <strong className="text-primary">The Sweet Spot:</strong> Protectron gives you consultant-quality structure at a fraction of the time and cost.
                </motion.p>
            </div>
        </section>
    );
};

const documentGenerationFaqs = [
    {
        question: "Can AI-generated documents really satisfy regulators?",
        answer: "Our documents are structured to meet EU AI Act requirements, but they're generated from your inputs—not invented by AI. The AI assists with drafting and structure; the content reflects your actual AI system. We recommend human review before finalizing any compliance document.",
    },
    {
        question: "What if I don't know the answer to a question?",
        answer: "You can skip questions, but we'll flag sections as incomplete. For technical questions you can't answer, we suggest who in your organization (engineering, data science, legal) might have the information.",
    },
    {
        question: "Can I edit the generated documents?",
        answer: "Absolutely. Generated documents are starting points. Our editor lets you modify any section. Many customers use our drafts as 80% complete, then add company-specific details and language.",
    },
    {
        question: "Do I own the generated documents?",
        answer: "Yes. Documents you generate are your intellectual property. Export them, modify them, share them—they're yours.",
    },
    {
        question: "How long does generation take?",
        answer: "Answering the questionnaire takes 15-30 minutes depending on document complexity. Generation itself takes seconds. A complete Technical Documentation package can be drafted in under an hour—compared to weeks or months manually.",
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
                        Stop Staring at Blank Pages
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        EU AI Act documentation shouldn't take months or cost a fortune. Generate compliant first drafts in minutes, then refine with your team.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/assessment">
                            Generate Your First Document
                        </Button>
                        <Button size="xl" color="link-gray" href="/samples" className="text-white hover:text-white/80">
                            Download Sample Templates
                        </Button>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
                        <span>✓ First document free</span>
                        <span>✓ No credit card required</span>
                        <span>✓ Export in PDF, Word, or Markdown</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default function DocumentGenerationPage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <DocumentTypesSection />
            <HowItWorksSection />
            <SampleDocumentSection />
            <DifferentiatorsSection />
            <ComparisonSection />
            <FAQSection faqs={documentGenerationFaqs} />
            <CTASection />
            <Footer />
        </div>
    );
}
