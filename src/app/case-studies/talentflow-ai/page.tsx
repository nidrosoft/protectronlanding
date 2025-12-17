"use client";

import { motion } from "motion/react";
import { CheckCircle2, Users, Clock, TrendingUp, FileText, Shield, Code, Award, Building2, AlertTriangle } from "lucide-react";
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
                        Case Study
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        How TalentFlow AI Closed €2.1M in Enterprise Deals by Getting EU AI Act Compliant in 2 Weeks
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        A Series A HR tech startup went from losing enterprise deals to closing €2.1M in contracts by achieving EU AI Act compliance with Protectron.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const AtAGlanceSection = () => {
    const stats = [
        { label: "Company", value: "TalentFlow AI" },
        { label: "Industry", value: "HR Technology / Recruitment AI" },
        { label: "Company Size", value: "45 employees" },
        { label: "Stage", value: "Series A (€8M raised)" },
        { label: "AI Systems", value: "3 systems" },
        { label: "Risk Classification", value: "High-Risk" },
        { label: "Time to Compliance", value: "2 weeks" },
        { label: "Enterprise Deals Closed", value: "€2.1M ARR" },
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
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        At a Glance
                    </h2>
                    <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="rounded-xl border border-primary bg-primary p-4">
                                <p className="text-sm text-tertiary">{stat.label}</p>
                                <p className="mt-1 text-lg font-semibold text-primary">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ExecutiveSummarySection = () => {
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
                        Executive Summary
                    </h2>
                    <p className="mt-6 text-lg text-tertiary">
                        TalentFlow AI, a Series A HR tech startup, was losing enterprise deals because they couldn't demonstrate EU AI Act compliance. With their AI directly involved in hiring decisions—a high-risk category under the EU AI Act—enterprise procurement teams were walking away.
                    </p>
                    <p className="mt-4 text-lg text-tertiary">
                        Using Protectron, TalentFlow achieved full EU AI Act compliance in <span className="font-semibold text-primary">2 weeks</span>, generated <span className="font-semibold text-primary">47 pages</span> of compliance documentation, and closed three enterprise deals worth <span className="font-semibold text-primary">€2.1M</span> in combined ARR within 90 days.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const CompanyBackgroundSection = () => {
    const products = [
        {
            title: "Resume Screening AI",
            description: "Automatically evaluates candidate applications against job requirements",
        },
        {
            title: "Interview Scheduling AI",
            description: "Coordinates interviews across multiple stakeholders and time zones",
        },
        {
            title: "Candidate Matching AI",
            description: "Recommends candidates to open positions based on skills, experience, and cultural fit",
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
                        About TalentFlow AI
                    </h2>
                    <p className="mt-6 text-tertiary">
                        TalentFlow AI builds AI-powered recruitment tools that help companies hire faster and more fairly. Founded in 2022, TalentFlow had achieved strong product-market fit with SMB customers across Europe. They'd raised €8M in Series A funding and were ready to move upmarket to enterprise customers.
                    </p>
                    <div className="mt-8 space-y-4">
                        {products.map((product) => (
                            <div key={product.title} className="rounded-xl border border-primary bg-primary p-4">
                                <h3 className="font-semibold text-primary">{product.title}</h3>
                                <p className="mt-1 text-sm text-tertiary">{product.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 rounded-xl border border-primary bg-primary p-6">
                        <h3 className="font-semibold text-primary">Technology Stack</h3>
                        <ul className="mt-4 space-y-2 text-sm text-tertiary">
                            <li>• Python-based ML models</li>
                            <li>• LangChain for candidate interaction workflows</li>
                            <li>• Custom transformer models for resume analysis</li>
                            <li>• Deployed on AWS EU (Frankfurt)</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ChallengeSection = () => {
    const deals = [
        { company: "German Automotive Manufacturer", employees: "50,000+", potential: "€800K ARR" },
        { company: "French Banking Group", employees: "30,000+", potential: "€650K ARR" },
        { company: "Pan-European Retailer", employees: "80,000+", potential: "€700K ARR" },
    ];

    const procurementRequests = [
        "Risk classification documentation",
        "Technical documentation per Article 11",
        "Human oversight procedures per Article 14",
        "Bias testing and data governance documentation",
        "Evidence of logging and audit trail capabilities",
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
                        The Challenge
                    </h2>
                    <h3 className="mt-8 text-lg font-semibold text-primary">Enterprise Deals Stalling</h3>
                    <p className="mt-4 text-tertiary">
                        In Q3 2024, TalentFlow entered late-stage negotiations with three major enterprise prospects. All three deals stalled at procurement.
                    </p>
                    <div className="mt-6 space-y-3">
                        {deals.map((deal, index) => (
                            <div key={deal.company} className="flex items-center justify-between rounded-lg border border-primary bg-secondary p-4">
                                <div>
                                    <p className="font-medium text-primary">{index + 1}. {deal.company}</p>
                                    <p className="text-sm text-tertiary">{deal.employees} employees</p>
                                </div>
                                <span className="text-lg font-semibold text-brand-600">{deal.potential}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 rounded-xl border-l-4 border-brand-600 bg-secondary p-6">
                        <p className="italic text-tertiary">
                            "We received the same response from all three procurement teams: 'Your AI makes hiring recommendations. Under the EU AI Act, that's high-risk. Show us your compliance documentation or we can't proceed.'"
                        </p>
                        <p className="mt-4 text-sm font-medium text-primary">— Sarah Chen, CEO, TalentFlow AI</p>
                    </div>

                    <h3 className="mt-8 text-lg font-semibold text-primary">The Procurement Roadblock</h3>
                    <p className="mt-4 text-tertiary">The procurement questionnaires asked for:</p>
                    <ul className="mt-4 space-y-2">
                        {procurementRequests.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-tertiary">
                                <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0 text-warning-500" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-lg font-medium text-error-600">TalentFlow had none of this documentation.</p>
                </motion.div>
            </div>
        </section>
    );
};

const FailedApproachesSection = () => {
    const approaches = [
        {
            title: "Law Firm",
            quote: "€180,000",
            timeline: "6-9 months",
            problem: "Budget was 50% of their annual legal spend; timeline would lose all three deals",
        },
        {
            title: "DIY",
            quote: "3 weeks spent",
            timeline: "Incomplete",
            problem: "Read 400+ pages of EU AI Act text, produced a risk assessment that was 'probably wrong'",
        },
        {
            title: "Enterprise Compliance Platform",
            quote: "€85,000-120,000/year",
            timeline: "4-6 months",
            problem: "Required dedicated admin and long implementation timeline",
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
                        Why Traditional Approaches Failed
                    </h2>
                    <div className="mt-8 space-y-6">
                        {approaches.map((approach) => (
                            <div key={approach.title} className="rounded-xl border border-primary bg-primary p-6">
                                <h3 className="text-lg font-semibold text-primary">{approach.title}</h3>
                                <div className="mt-4 flex gap-6">
                                    <div>
                                        <p className="text-sm text-tertiary">Cost</p>
                                        <p className="font-semibold text-error-600">{approach.quote}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-tertiary">Timeline</p>
                                        <p className="font-semibold text-error-600">{approach.timeline}</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm text-tertiary">{approach.problem}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 rounded-xl border-l-4 border-brand-600 bg-primary p-6">
                        <p className="italic text-tertiary">
                            "We were stuck. We couldn't afford the enterprise solutions, couldn't wait 6 months, and couldn't figure it out ourselves. Meanwhile, our competitors were telling prospects they were 'EU AI Act ready' without any proof."
                        </p>
                        <p className="mt-4 text-sm font-medium text-primary">— Marcus Weber, Head of Compliance, TalentFlow AI</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SolutionSection = () => {
    const capabilities = [
        { requirement: "Speed to compliance", solution: "2-week implementation vs. 6+ months" },
        { requirement: "High-risk AI documentation", solution: "Full Article 9-15 requirement coverage" },
        { requirement: "AI-assisted document generation", solution: "Technical docs, risk assessments, policies" },
        { requirement: "Audit trail for LangChain", solution: "SDK integration for automatic logging" },
        { requirement: "Evidence management", solution: "Centralized repository for procurement" },
        { requirement: "Verifiable compliance", solution: "Certification badge for trust" },
        { requirement: "Budget-friendly", solution: "€299/month vs. €100K+ alternatives" },
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
                        The Solution: Protectron
                    </h2>
                    <p className="mt-6 text-tertiary">
                        TalentFlow's CTO found Protectron while researching LangChain compliance solutions. The agent audit trail feature caught his attention—TalentFlow used LangChain for candidate interaction workflows and needed to demonstrate logging capabilities.
                    </p>
                    <h3 className="mt-8 text-lg font-semibold text-primary">Why Protectron Fit</h3>
                    <div className="mt-6 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full">
                            <thead className="bg-secondary">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Requirement</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Protectron Capability</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                {capabilities.map((item) => (
                                    <tr key={item.requirement}>
                                        <td className="px-4 py-3 text-sm text-tertiary">{item.requirement}</td>
                                        <td className="px-4 py-3 text-sm font-medium text-brand-600">{item.solution}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ImplementationSection = () => {
    const week1 = [
        { day: "Monday", activity: "Account setup, team onboarding", output: "3 team members added" },
        { day: "Tuesday", activity: "AI system registration (3 systems)", output: "Systems in dashboard" },
        { day: "Wednesday", activity: "Risk classification for all systems", output: "All 3 classified as High-Risk" },
        { day: "Thursday", activity: "Requirement tracking setup", output: "113 requirements identified" },
        { day: "Friday", activity: "SDK integration (LangChain callback)", output: "Audit trail active" },
    ];

    const week2 = [
        { day: "Monday", activity: "Technical documentation generation", output: "3 system descriptions (28 pages)" },
        { day: "Tuesday", activity: "Risk management documentation", output: "Risk assessment, mitigation plan (12 pages)" },
        { day: "Wednesday", activity: "Data governance documentation", output: "Data documentation, bias assessment (8 pages)" },
        { day: "Thursday", activity: "Policy generation", output: "5 policies (AI governance, human oversight, etc.)" },
        { day: "Friday", activity: "Evidence compilation, badge activation", output: "Audit package ready" },
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
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Implementation Timeline
                    </h2>
                    
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold text-primary">Week 1: Foundation</h3>
                        <div className="mt-4 overflow-hidden rounded-xl border border-primary">
                            <table className="w-full">
                                <thead className="bg-primary">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Day</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Activity</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Output</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-primary bg-secondary">
                                    {week1.map((item) => (
                                        <tr key={item.day}>
                                            <td className="px-4 py-3 text-sm font-medium text-primary">{item.day}</td>
                                            <td className="px-4 py-3 text-sm text-tertiary">{item.activity}</td>
                                            <td className="px-4 py-3 text-sm text-brand-600">{item.output}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-lg font-semibold text-primary">Week 2: Documentation</h3>
                        <div className="mt-4 overflow-hidden rounded-xl border border-primary">
                            <table className="w-full">
                                <thead className="bg-primary">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Day</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Activity</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Output</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-primary bg-secondary">
                                    {week2.map((item) => (
                                        <tr key={item.day}>
                                            <td className="px-4 py-3 text-sm font-medium text-primary">{item.day}</td>
                                            <td className="px-4 py-3 text-sm text-tertiary">{item.activity}</td>
                                            <td className="px-4 py-3 text-sm text-brand-600">{item.output}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SDKIntegrationSection = () => {
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
                        SDK Integration
                    </h2>
                    <pre className="mt-6 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`# TalentFlow's LangChain integration
from langchain.agents import AgentExecutor
from protectron.langchain import ProtectronCallback

callback = ProtectronCallback(
    system_id="candidate-matching-agent",
    environment="production",
    pii_redaction=True  # Redact candidate PII automatically
)

matching_agent = AgentExecutor(
    agent=agent,
    tools=tools,
    callbacks=[callback]
)

# Every candidate interaction now logged for Article 12 compliance`}</code>
                    </pre>
                    <div className="mt-6 rounded-xl border-l-4 border-brand-600 bg-secondary p-6">
                        <p className="italic text-tertiary">
                            "Adding the SDK took our backend engineer 2 hours. Now every candidate interaction is automatically logged. When procurement asks 'how do you audit AI decisions?', we show them the dashboard."
                        </p>
                        <p className="mt-4 text-sm font-medium text-primary">— Daniel Park, CTO, TalentFlow AI</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ResultsSection = () => {
    const complianceMetrics = [
        { metric: "Time to compliance", result: "2 weeks" },
        { metric: "Requirements completed", result: "113/113 (100%)" },
        { metric: "Documentation generated", result: "47 pages" },
        { metric: "Evidence items linked", result: "34 documents" },
        { metric: "Compliance score", result: "96%" },
    ];

    const deals = [
        {
            company: "German Automotive Manufacturer",
            status: "Closed",
            arr: "€780,000",
            timeline: "6 weeks",
            factor: "Technical documentation package satisfied procurement in first review",
        },
        {
            company: "French Banking Group",
            status: "Closed",
            arr: "€620,000",
            timeline: "8 weeks",
            factor: "Human oversight documentation addressed their regulatory concerns",
        },
        {
            company: "Pan-European Retailer",
            status: "Closed",
            arr: "€700,000",
            timeline: "10 weeks",
            factor: "Certification badge provided instant credibility",
        },
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
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        The Results
                    </h2>
                    
                    <h3 className="mt-8 text-lg font-semibold text-primary">Compliance Achievement</h3>
                    <div className="mt-4 grid gap-4 md:grid-cols-5">
                        {complianceMetrics.map((item) => (
                            <div key={item.metric} className="rounded-xl border border-primary bg-primary p-4 text-center">
                                <p className="text-2xl font-bold text-brand-600">{item.result}</p>
                                <p className="mt-1 text-sm text-tertiary">{item.metric}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="mt-12 text-lg font-semibold text-primary">Deal Outcomes</h3>
                    <div className="mt-4 space-y-4">
                        {deals.map((deal) => (
                            <div key={deal.company} className="rounded-xl border border-primary bg-primary p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-success-500" />
                                        <h4 className="text-lg font-semibold text-primary">{deal.company}</h4>
                                    </div>
                                    <span className="text-2xl font-bold text-brand-600">{deal.arr}</span>
                                </div>
                                <div className="mt-4 flex gap-6">
                                    <div>
                                        <p className="text-sm text-tertiary">Status</p>
                                        <p className="font-medium text-success-600">{deal.status}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-tertiary">Timeline</p>
                                        <p className="font-medium text-primary">{deal.timeline}</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm text-tertiary"><span className="font-medium">Key Factor:</span> {deal.factor}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ROISection = () => {
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
                        ROI Calculation
                    </h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl border border-primary bg-secondary p-6">
                            <h3 className="text-lg font-semibold text-primary">Investment</h3>
                            <div className="mt-4 space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-tertiary">Protectron annual cost</span>
                                    <span className="font-medium text-primary">€3,588</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-tertiary">Implementation time</span>
                                    <span className="font-medium text-primary">~€15,000</span>
                                </div>
                                <div className="border-t border-primary pt-3 flex justify-between">
                                    <span className="font-semibold text-primary">Total investment</span>
                                    <span className="font-bold text-primary">~€18,588</span>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl border border-brand-600 bg-brand-50 dark:bg-brand-900/20 p-6">
                            <h3 className="text-lg font-semibold text-primary">Return</h3>
                            <div className="mt-4 space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-tertiary">Enterprise ARR closed</span>
                                    <span className="font-medium text-primary">€2,100,000</span>
                                </div>
                                <div className="border-t border-brand-200 dark:border-brand-800 pt-3 flex justify-between">
                                    <span className="font-semibold text-primary">ROI</span>
                                    <span className="text-3xl font-bold text-brand-600">11,200%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "If you're selling AI to enterprises in Europe, EU AI Act compliance isn't optional anymore. The question isn't whether to get compliant—it's how fast you can do it. We chose Protectron because we needed speed without sacrificing quality. Two weeks later, we were closing the biggest deals in our company's history.",
            author: "Sarah Chen",
            role: "CEO, TalentFlow AI",
        },
        {
            quote: "As an engineer, I was skeptical of 'AI compliance' tools. But Protectron's SDK integration was clean, the documentation generation was actually good, and it didn't add overhead to our development process. It's now part of our standard stack for any AI feature.",
            author: "Daniel Park",
            role: "CTO, TalentFlow AI",
        },
        {
            quote: "I went from spending all my time reading regulatory documents to actually managing compliance. Protectron handles the complexity; I handle the strategy. That's how it should be.",
            author: "Marcus Weber",
            role: "Head of Compliance, TalentFlow AI",
        },
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
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        What the Team Says
                    </h2>
                    <div className="mt-8 space-y-6">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.author} className="rounded-xl border border-primary bg-primary p-6">
                                <p className="text-lg italic text-tertiary">"{testimonial.quote}"</p>
                                <div className="mt-4">
                                    <p className="font-semibold text-primary">{testimonial.author}</p>
                                    <p className="text-sm text-tertiary">{testimonial.role}</p>
                                </div>
                            </div>
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
                        Ready to Accelerate Your Enterprise Sales?
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        TalentFlow went from stalled deals to €2.1M closed in 90 days. See how Protectron can help your AI company demonstrate compliance and win enterprise customers.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/assessment">
                            Start Free Trial
                        </Button>
                        <Button size="xl" color="link-gray" href="/case-studies/medassist-ai" className="text-white hover:text-white/80">
                            Read MedAssist AI Case Study →
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-white/60">No credit card required</p>
                </motion.div>
            </div>
        </section>
    );
};

export default function TalentFlowAICaseStudyPage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <AtAGlanceSection />
            <ExecutiveSummarySection />
            <CompanyBackgroundSection />
            <ChallengeSection />
            <FailedApproachesSection />
            <SolutionSection />
            <ImplementationSection />
            <SDKIntegrationSection />
            <ResultsSection />
            <ROISection />
            <TestimonialsSection />
            <CTASection />
            <Footer />
        </div>
    );
}
