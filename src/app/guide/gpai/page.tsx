"use client";

import { motion } from "motion/react";
import { Brain, Building2, Users, Clock, FileText, Shield, AlertTriangle, CheckCircle2, Code, ArrowRight } from "lucide-react";
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
                        EU AI Act Guide
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        General Purpose AI (GPAI) Requirements
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        Understanding Your Obligations Under the EU AI Act
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const WhatIsGPAISection = () => {
    const examples = [
        { model: "GPT-5.2, GPT-5", provider: "OpenAI", type: "Foundation LLM" },
        { model: "Claude 4.5 Opus, Claude 4.5 Sonnet", provider: "Anthropic", type: "Foundation LLM" },
        { model: "Gemini 3.0 Pro, Gemini 3.0 Ultra", provider: "Google", type: "Multimodal Foundation" },
        { model: "Llama 4, Llama 3.3", provider: "Meta", type: "Open-source LLM" },
        { model: "Mistral Large 3", provider: "Mistral AI", type: "Foundation LLM" },
        { model: "Command R+", provider: "Cohere", type: "Foundation LLM" },
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
                        What is GPAI?
                    </h2>
                    <p className="mt-6 text-tertiary">
                        General Purpose AI (GPAI) models are AI models that can perform a wide variety of tasks, regardless of how they're placed on the market.
                    </p>

                    <div className="mt-6 rounded-xl border border-primary bg-primary p-6">
                        <h3 className="font-semibold text-primary">Definition from the EU AI Act</h3>
                        <blockquote className="mt-4 border-l-4 border-brand-300 pl-4 italic text-tertiary">
                            "A general-purpose AI model means an AI model, including when trained with a large amount of data using self-supervision at scale, that displays significant generality and is capable to competently perform a wide range of distinct tasks."
                        </blockquote>
                    </div>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Examples of GPAI Models</h3>
                    <div className="mt-4 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full text-sm">
                            <thead className="bg-primary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Model</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Provider</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Type</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-secondary">
                                {examples.map((item) => (
                                    <tr key={item.model}>
                                        <td className="px-4 py-2 font-medium text-primary">{item.model}</td>
                                        <td className="px-4 py-2 text-tertiary">{item.provider}</td>
                                        <td className="px-4 py-2 text-brand-600">{item.type}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 className="mt-8 text-lg font-semibold text-primary">What Makes a Model "General Purpose"?</h3>
                    <p className="mt-2 text-tertiary">A model is considered GPAI if it:</p>
                    <ol className="mt-4 space-y-2 text-tertiary list-decimal list-inside">
                        <li><strong>Displays significant generality</strong> — Can perform many different types of tasks</li>
                        <li><strong>Can be integrated into various systems</strong> — Not designed for one specific use</li>
                        <li><strong>Serves multiple purposes</strong> — Both direct use and integration into other AI systems</li>
                    </ol>
                </motion.div>
            </div>
        </section>
    );
};

const WhoNeedsToComplySection = () => {
    const providers = [
        "Develop and train foundation models",
        "Make GPAI models available on the market (including via API)",
        "Put your name/trademark on a GPAI model",
    ];

    const deployers = [
        "Build applications on top of GPAI models",
        "Integrate GPAI into your products",
        "Use GPAI APIs in your services",
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
                        Who Needs to Comply?
                    </h2>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl border border-primary bg-secondary p-6">
                            <Building2 className="h-8 w-8 text-brand-600" />
                            <h3 className="mt-4 text-lg font-semibold text-primary">GPAI Providers</h3>
                            <p className="mt-2 text-sm text-tertiary">You're a GPAI Provider if you:</p>
                            <ul className="mt-4 space-y-2">
                                {providers.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-tertiary">
                                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-xs text-tertiary">
                                <strong>Examples:</strong> OpenAI, Anthropic, Google, Meta, Mistral
                            </p>
                        </div>

                        <div className="rounded-xl border border-primary bg-secondary p-6">
                            <Users className="h-8 w-8 text-brand-600" />
                            <h3 className="mt-4 text-lg font-semibold text-primary">GPAI Deployers</h3>
                            <p className="mt-2 text-sm text-tertiary">You're a GPAI Deployer if you:</p>
                            <ul className="mt-4 space-y-2">
                                {deployers.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-tertiary">
                                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-xs text-tertiary">
                                <strong>Examples:</strong> SaaS companies using GPT-5.2 API, startups building on Claude
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 rounded-xl border border-brand-200 bg-brand-50 dark:border-brand-800 dark:bg-brand-900/20 p-6">
                        <p className="font-semibold text-brand-700 dark:text-brand-400">Important</p>
                        <p className="mt-2 text-tertiary">
                            Deployers have different (generally lighter) obligations than providers. If you're using GPT-5.2 via API, you're a deployer, not a provider.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const TimelineSection = () => {
    const milestones = [
        { date: "Aug 2, 2025", milestone: "GPAI transparency requirements in effect", status: "done" },
        { date: "Aug 2, 2025", milestone: "Systemic risk requirements in effect", status: "done" },
        { date: "Ongoing", milestone: "Code of Practice development", status: "progress" },
        { date: "Future", milestone: "Harmonized standards publication", status: "pending" },
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
                        Timeline
                    </h2>
                    <p className="mt-4 text-tertiary">
                        GPAI obligations took effect on <strong>August 2, 2025</strong>.
                    </p>
                    <div className="mt-6 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full text-sm">
                            <thead className="bg-primary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Date</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Milestone</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-secondary">
                                {milestones.map((item) => (
                                    <tr key={item.milestone}>
                                        <td className="px-4 py-3 text-tertiary">
                                            {item.status === "done" && "✅ "}
                                            {item.status === "progress" && "🔄 "}
                                            {item.status === "pending" && "📋 "}
                                            {item.date}
                                        </td>
                                        <td className="px-4 py-3 text-primary">{item.milestone}</td>
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

const AllGPAIRequirementsSection = () => {
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
                        Requirements for All GPAI Providers
                    </h2>

                    <div className="mt-8 space-y-6">
                        <div className="rounded-xl border border-primary bg-secondary p-6">
                            <h3 className="text-lg font-semibold text-primary">1. Technical Documentation</h3>
                            <p className="mt-2 text-tertiary">Prepare and maintain comprehensive documentation covering:</p>
                            <div className="mt-4 grid gap-4 md:grid-cols-3">
                                <div>
                                    <p className="font-medium text-primary">Model Information</p>
                                    <ul className="mt-2 space-y-1 text-sm text-tertiary">
                                        <li>• Model architecture and design</li>
                                        <li>• Training methodology</li>
                                        <li>• Data sources and preprocessing</li>
                                        <li>• Capabilities and limitations</li>
                                        <li>• Intended use cases</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-medium text-primary">Training Details</p>
                                    <ul className="mt-2 space-y-1 text-sm text-tertiary">
                                        <li>• Computational resources used</li>
                                        <li>• Training data characteristics</li>
                                        <li>• Fine-tuning and RLHF processes</li>
                                        <li>• Evaluation results</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-medium text-primary">Performance</p>
                                    <ul className="mt-2 space-y-1 text-sm text-tertiary">
                                        <li>• Benchmark results</li>
                                        <li>• Known limitations</li>
                                        <li>• Failure modes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-primary bg-secondary p-6">
                            <h3 className="text-lg font-semibold text-primary">2. Information for Downstream Providers</h3>
                            <p className="mt-2 text-tertiary">If others build AI systems using your GPAI model, provide:</p>
                            <ul className="mt-4 space-y-2 text-tertiary">
                                <li>• Model capabilities and limitations</li>
                                <li>• Integration guidelines</li>
                                <li>• Known risks and mitigation measures</li>
                                <li>• Information needed for their own compliance</li>
                            </ul>
                        </div>

                        <div className="rounded-xl border border-primary bg-secondary p-6">
                            <h3 className="text-lg font-semibold text-primary">3. Copyright Policy</h3>
                            <p className="mt-2 text-tertiary">Establish and implement a policy to respect EU copyright law:</p>
                            <ul className="mt-4 space-y-2 text-tertiary">
                                <li>• Identify copyrighted content in training data</li>
                                <li>• Implement opt-out mechanisms for rights holders</li>
                                <li>• Document compliance with Text and Data Mining (TDM) provisions</li>
                                <li>• Provide transparency about training data sources</li>
                            </ul>
                        </div>

                        <div className="rounded-xl border border-primary bg-secondary p-6">
                            <h3 className="text-lg font-semibold text-primary">4. Training Content Summary</h3>
                            <p className="mt-2 text-tertiary">Publish a sufficiently detailed summary of training content:</p>
                            <ul className="mt-4 space-y-2 text-tertiary">
                                <li>• General description of training data</li>
                                <li>• Sources and types of data used</li>
                                <li>• Data collection methodology</li>
                                <li>• <strong>Not required:</strong> specific datasets or trade secrets</li>
                            </ul>
                            <div className="mt-4 rounded-lg bg-primary p-4">
                                <p className="text-sm text-tertiary">
                                    <strong>Template approach:</strong> "The model was trained on a diverse dataset including [categories: web pages, books, code repositories, etc.] spanning [languages] and [domains]. Data was collected from [source types] with [preprocessing steps]. Training data covers the period [date range]."
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SystemicRiskSection = () => {
    const systemicModels = [
        { model: "GPT-5.2", provider: "OpenAI", classification: "Systemic Risk" },
        { model: "Claude 4.5 Opus", provider: "Anthropic", classification: "Systemic Risk" },
        { model: "Gemini 3.0 Ultra", provider: "Google", classification: "Systemic Risk" },
        { model: "Llama 4 405B", provider: "Meta", classification: "Systemic Risk" },
    ];

    const additionalRequirements = [
        {
            title: "1. Model Evaluation",
            description: "Perform adversarial testing and red-teaming",
            items: ["Evaluate model against standardized protocols", "Test for dangerous capabilities", "Assess dual-use potential", "Document evaluation methodology and results"],
        },
        {
            title: "2. Risk Assessment and Mitigation",
            description: "Assess and address systemic risks",
            items: ["Identify potential systemic risks", "Implement mitigation measures", "Document residual risks", "Update assessments as model evolves"],
        },
        {
            title: "3. Incident Tracking and Reporting",
            description: "Track and report serious incidents",
            items: ["Monitor for serious incidents", "Report to EU AI Office without undue delay", "Include incident details and corrective measures", "Maintain incident documentation"],
        },
        {
            title: "4. Cybersecurity Protection",
            description: "Ensure adequate cybersecurity",
            items: ["Protect model weights and infrastructure", "Implement access controls", "Monitor for unauthorized access or misuse", "Secure the training pipeline"],
        },
        {
            title: "5. Energy Consumption Reporting",
            description: "Document environmental impact",
            items: ["Report energy consumption during training", "Estimate inference energy consumption", "Include in technical documentation"],
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
                        Requirements for GPAI with Systemic Risk
                    </h2>

                    <h3 className="mt-8 text-lg font-semibold text-primary">What is Systemic Risk?</h3>
                    <p className="mt-2 text-tertiary">
                        A GPAI model poses <strong>systemic risk</strong> if it has high-impact capabilities that could affect:
                    </p>
                    <ul className="mt-4 space-y-2 text-tertiary">
                        <li>• Public health or safety</li>
                        <li>• Fundamental rights</li>
                        <li>• Critical infrastructure</li>
                        <li>• Democratic processes</li>
                    </ul>

                    <div className="mt-6 rounded-xl border border-warning-200 bg-warning-50 dark:border-warning-800 dark:bg-warning-900/20 p-6">
                        <h4 className="font-semibold text-warning-700 dark:text-warning-400">Automatic Systemic Risk Classification</h4>
                        <p className="mt-2 text-tertiary">
                            A model is <strong>automatically classified as systemic risk</strong> if the cumulative compute used for training exceeds <strong>10^25 FLOPs</strong> (floating point operations).
                        </p>
                    </div>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Current Models with Systemic Risk</h3>
                    <div className="mt-4 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full text-sm">
                            <thead className="bg-primary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Model</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Provider</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Likely Classification</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-secondary">
                                {systemicModels.map((item) => (
                                    <tr key={item.model}>
                                        <td className="px-4 py-2 font-medium text-primary">{item.model}</td>
                                        <td className="px-4 py-2 text-tertiary">{item.provider}</td>
                                        <td className="px-4 py-2 text-warning-600">{item.classification}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Additional Requirements for Systemic Risk</h3>
                    <p className="mt-2 text-tertiary">Beyond the base GPAI requirements:</p>
                    <div className="mt-6 space-y-4">
                        {additionalRequirements.map((req) => (
                            <div key={req.title} className="rounded-xl border border-primary bg-primary p-4">
                                <h4 className="font-semibold text-primary">{req.title}</h4>
                                <p className="text-sm text-tertiary">{req.description}</p>
                                <ul className="mt-2 space-y-1 text-sm text-tertiary">
                                    {req.items.map((item) => (
                                        <li key={item}>• {item}</li>
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

const DeployerObligationsSection = () => {
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
                        Obligations for Deployers
                    </h2>
                    <p className="mt-4 text-tertiary">
                        If you <strong>use</strong> GPAI models (not provide them), your obligations are different:
                    </p>

                    <div className="mt-8 space-y-6">
                        <div className="rounded-xl border border-primary bg-secondary p-6">
                            <h3 className="text-lg font-semibold text-primary">When You're Building on GPAI</h3>
                            <p className="mt-2 text-tertiary">If you integrate GPAI into your own AI system:</p>
                            <ol className="mt-4 space-y-2 text-tertiary list-decimal list-inside">
                                <li><strong>Understand the model</strong> — Review provider documentation</li>
                                <li><strong>Assess your system's risk</strong> — Your AI system may be high-risk even if the GPAI isn't</li>
                                <li><strong>Comply with applicable rules</strong> — Based on your system's classification</li>
                                <li><strong>Transparency</strong> — Disclose AI use per limited-risk requirements</li>
                            </ol>
                        </div>

                        <div className="rounded-xl border border-warning-200 bg-warning-50 dark:border-warning-800 dark:bg-warning-900/20 p-6">
                            <h3 className="text-lg font-semibold text-warning-700 dark:text-warning-400">When Your System Becomes High-Risk</h3>
                            <p className="mt-2 text-tertiary">If you build a high-risk AI system using GPAI:</p>
                            <ul className="mt-4 space-y-2 text-tertiary">
                                <li>• You're responsible for Articles 9-15 compliance</li>
                                <li>• The GPAI provider should give you needed information</li>
                                <li>• You must ensure the complete system meets requirements</li>
                            </ul>
                            <p className="mt-4 text-sm text-tertiary">
                                <strong>Example:</strong> You build a hiring tool using GPT-5.2. Even though GPT-5.2 is a GPAI model, your hiring tool is a high-risk AI system. You're responsible for high-risk compliance.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ChecklistsSection = () => {
    const providerChecklist = [
        "Model architecture documented",
        "Training methodology described",
        "Training data sources summarized",
        "Capabilities and limitations listed",
        "Intended use cases specified",
        "Benchmark results included",
        "Known failure modes documented",
        "Integration guidelines provided",
        "Copyright policy established",
        "Training content summary published",
    ];

    const systemicChecklist = [
        "Adversarial testing performed",
        "Red-team evaluations completed",
        "Systemic risks assessed",
        "Mitigation measures implemented",
        "Incident tracking system in place",
        "Reporting procedures established",
        "Cybersecurity measures implemented",
        "Energy consumption documented",
    ];

    const deployerChecklist = [
        "Provider documentation reviewed",
        "Model limitations understood",
        "Own system risk classified",
        "Applicable requirements identified",
        "Transparency requirements met",
        "Human oversight implemented (if needed)",
        "Logging enabled (if high-risk)",
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
                        Practical Implementation
                    </h2>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <h3 className="font-semibold text-primary">For GPAI Providers</h3>
                            <p className="mt-2 text-sm text-tertiary">Documentation Checklist:</p>
                            <ul className="mt-4 space-y-2">
                                {providerChecklist.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-tertiary">
                                        <div className="mt-0.5 h-4 w-4 shrink-0 rounded border border-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <h3 className="font-semibold text-primary">For Systemic Risk Models</h3>
                            <ul className="mt-4 space-y-2">
                                {systemicChecklist.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-tertiary">
                                        <div className="mt-0.5 h-4 w-4 shrink-0 rounded border border-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 rounded-xl border border-primary bg-primary p-6">
                        <h3 className="font-semibold text-primary">For GPAI Deployers</h3>
                        <p className="mt-2 text-sm text-tertiary">Integration Checklist:</p>
                        <ul className="mt-4 grid gap-2 md:grid-cols-2">
                            {deployerChecklist.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-tertiary">
                                    <div className="mt-0.5 h-4 w-4 shrink-0 rounded border border-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const FAQSection = () => {
    const faqs = [
        {
            q: "Do GPAI requirements apply to my startup?",
            a: "If you're using APIs (deployer): Generally, you have lighter obligations focused on transparency and understanding what you're building with. If you're training/providing models (provider): Yes, GPAI requirements apply.",
        },
        {
            q: "Is GPT-5.2/Claude considered systemic risk?",
            a: "Based on training compute estimates, frontier models from major labs likely exceed the 10^25 FLOP threshold. However, official classifications depend on provider disclosures to the AI Office.",
        },
        {
            q: "What if I fine-tune an open-source model?",
            a: "If you fine-tune and redistribute, you may become a GPAI provider for that model. Documentation obligations transfer to you. If you fine-tune for internal use only, you're generally treated as a deployer.",
        },
        {
            q: "How does this affect my high-risk AI system?",
            a: "If you build a high-risk AI system using GPAI, the GPAI provider gives you information, but you're responsible for full high-risk compliance. Provider obligations are separate from your obligations.",
        },
        {
            q: "What about open-source models?",
            a: "Open-source GPAI providers have the same obligations, with some accommodations. They may have simplified documentation requirements, and the community can contribute to compliance.",
        },
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
                        Common Questions
                    </h2>
                    <div className="mt-8 space-y-4">
                        {faqs.map((faq) => (
                            <div key={faq.q} className="rounded-xl border border-primary bg-secondary p-4">
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

const KeyTakeawaysSection = () => {
    const providerTakeaways = [
        "Document everything — Technical docs, training data, capabilities",
        "Support downstream users — Provide information they need",
        "Respect copyright — Implement TDM compliance",
        "Publish training summary — Transparency is mandatory",
        "If systemic risk — Additional evaluation, reporting, security",
    ];

    const deployerTakeaways = [
        "Understand what you're using — Review provider documentation",
        "Classify your own system — GPAI use doesn't exempt you",
        "Meet transparency requirements — Disclose AI use appropriately",
        "Maintain evidence — Document your compliance efforts",
        "High-risk is your responsibility — Even when using GPAI",
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
                        Key Takeaways
                    </h2>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <h3 className="font-semibold text-primary">For GPAI Providers</h3>
                            <ol className="mt-4 space-y-2 text-sm text-tertiary list-decimal list-inside">
                                {providerTakeaways.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ol>
                        </div>

                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <h3 className="font-semibold text-primary">For GPAI Deployers</h3>
                            <ol className="mt-4 space-y-2 text-sm text-tertiary list-decimal list-inside">
                                {deployerTakeaways.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const RelatedResourcesSection = () => {
    const resources = [
        { title: "High-Risk AI Guide", href: "/guide/high-risk", description: "If your AI system is high-risk" },
        { title: "Risk Classification", href: "/features/risk-classification", description: "Classify your AI systems" },
        { title: "Article 12 Guide", href: "/guide/article-12", description: "Logging requirements" },
        { title: "EU AI Act Guide", href: "/guide", description: "Complete regulation overview" },
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
                        Related Resources
                    </h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {resources.map((resource) => (
                            <a
                                key={resource.title}
                                href={resource.href}
                                className="group flex items-center justify-between rounded-xl border border-primary bg-secondary p-4 hover:border-brand-300 transition-colors"
                            >
                                <div>
                                    <p className="font-semibold text-primary group-hover:text-brand-600">{resource.title}</p>
                                    <p className="text-sm text-tertiary">{resource.description}</p>
                                </div>
                                <ArrowRight className="h-5 w-5 text-tertiary group-hover:text-brand-600" />
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
                        Stay Updated
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        GPAI requirements are evolving as the Code of Practice develops and the AI Office issues guidance. Subscribe to our newsletter for updates.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/assessment">
                            Start Free Trial
                        </Button>
                        <Button size="xl" color="link-gray" href="mailto:hello@protectron.ai" className="text-white hover:text-white/80">
                            Contact Us →
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-white/60 italic">
                        Building on GPAI models? Start your free trial to track your compliance obligations.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default function GPAIRequirementsPage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <WhatIsGPAISection />
            <WhoNeedsToComplySection />
            <TimelineSection />
            <AllGPAIRequirementsSection />
            <SystemicRiskSection />
            <DeployerObligationsSection />
            <ChecklistsSection />
            <FAQSection />
            <KeyTakeawaysSection />
            <RelatedResourcesSection />
            <CTASection />
            <Footer />
        </div>
    );
}
