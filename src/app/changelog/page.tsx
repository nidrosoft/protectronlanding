"use client";

import { motion } from "motion/react";
import { Sparkles, Shield, Code, Package, FileText, Clock, CheckCircle2, AlertTriangle, Rocket, Bug, Zap } from "lucide-react";
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
                        Product Updates
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        Changelog
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        All notable changes to Protectron are documented here.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const VersionFormatSection = () => {
    return (
        <section className="bg-secondary py-12 md:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-lg font-semibold text-primary">Version Format</h2>
                    <p className="mt-2 text-tertiary">
                        We use <a href="https://semver.org/" className="text-brand-600 hover:underline">Semantic Versioning</a>:
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-tertiary">
                        <li><strong>Major</strong> (1.x.x) — Breaking changes</li>
                        <li><strong>Minor</strong> (x.1.x) — New features, backward compatible</li>
                        <li><strong>Patch</strong> (x.x.1) — Bug fixes, backward compatible</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

const V1ReleaseSection = () => {
    const dashboardFeatures = [
        "Risk Classification Engine — Automatically classify AI systems by EU AI Act risk level",
        "Requirement Tracking — Track all 113 high-risk AI requirements with progress monitoring",
        "Compliance Score — Real-time compliance score calculation across all your AI systems",
        "Multi-System Management — Manage unlimited AI systems from a single dashboard",
        "Team Collaboration — Invite team members with role-based access",
    ];

    const documentTypes = [
        "Technical Documentation (Article 11)",
        "Risk Management System (Article 9)",
        "Data Governance Documentation (Article 10)",
        "Human Oversight Procedures (Article 14)",
        "Transparency Documentation (Article 13)",
        "AI Governance Policy",
        "AI Ethics Policy",
        "Incident Response Plan",
    ];

    const sdkFeatures = [
        "Python SDK — pip install protectron",
        "TypeScript SDK — npm install @protectron/sdk",
        "LangChain Integration — Native callback support",
        "CrewAI Integration — Multi-agent crew logging",
        "AutoGen Integration — Microsoft AutoGen conversation tracking",
    ];

    const eventTypes = [
        "LLM calls (prompts, completions, tokens, latency)",
        "Tool/function invocations",
        "Agent actions and decisions",
        "Agent delegation and collaboration",
        "Human oversight interventions",
        "Errors and exceptions",
    ];

    const securityFeatures = [
        "EU Data Residency — All data stored in AWS EU (Frankfurt)",
        "Encryption — TLS 1.3 in transit, AES-256 at rest",
        "SOC 2 Type I — Certified (Type II in progress)",
        "GDPR Compliant — Full compliance with EU data protection",
        "SSO Support — SAML 2.0 and OIDC (Enterprise plans)",
    ];

    const sdkPackages = [
        { package: "protectron", version: "1.0.0", install: "pip install protectron" },
        { package: "protectron[langchain]", version: "1.0.0", install: "pip install protectron[langchain]" },
        { package: "protectron[crewai]", version: "1.0.0", install: "pip install protectron[crewai]" },
        { package: "protectron[autogen]", version: "1.0.0", install: "pip install protectron[autogen]" },
        { package: "@protectron/sdk", version: "1.0.0", install: "npm install @protectron/sdk" },
    ];

    const pricingPlans = [
        { plan: "Starter", price: "€99/mo", systems: "3", events: "10,000" },
        { plan: "Growth", price: "€299/mo", systems: "10", events: "100,000" },
        { plan: "Scale", price: "€599/mo", systems: "25", events: "500,000" },
        { plan: "Enterprise", price: "Custom", systems: "Unlimited", events: "Unlimited" },
    ];

    const knownIssues = [
        "Large PDF exports (>100 pages) may timeout on Starter plans",
        "Safari 15.x may show badge rendering issues (fix in progress)",
        "Webhook retry logic limited to 3 attempts in V1",
    ];

    const comingSoon = [
        "Slack Integration — Compliance alerts in Slack",
        "Jira Integration — Sync requirements with Jira tickets",
        "AutoGen v0.4 Support — Updated AutoGen integration",
        "Vercel AI SDK — Native TypeScript integration",
        "Multi-language Documents — Generate docs in DE, FR, ES, IT",
        "Compliance Templates — Industry-specific templates",
        "Custom Branding — White-label badges and reports",
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
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/30">
                            <Sparkles className="h-5 w-5 text-brand-600" />
                        </div>
                        <div>
                            <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                                [1.0.0] — 2025-12-16
                            </h2>
                            <p className="text-sm text-tertiary">Official V1 Release</p>
                        </div>
                    </div>

                    <div className="mt-8 rounded-xl border border-brand-200 bg-brand-50 dark:border-brand-800 dark:bg-brand-900/20 p-6">
                        <p className="text-tertiary">
                            We're excited to announce the official V1 release of Protectron — the complete EU AI Act compliance platform for AI systems and agents.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="mt-12">
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                            <Sparkles className="h-5 w-5 text-brand-600" />
                            Features
                        </h3>

                        <h4 className="mt-6 font-semibold text-primary">Dashboard</h4>
                        <ul className="mt-3 space-y-2">
                            {dashboardFeatures.map((feature) => (
                                <li key={feature} className="flex items-start gap-2 text-sm text-tertiary">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <h4 className="mt-6 font-semibold text-primary">Document Generation</h4>
                        <ul className="mt-3 space-y-2">
                            <li className="flex items-start gap-2 text-sm text-tertiary">
                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                AI-Powered Generation — Generate EU AI Act documentation using AI
                            </li>
                        </ul>
                        <p className="mt-3 text-sm font-medium text-primary">Document Types:</p>
                        <ul className="mt-2 grid grid-cols-2 gap-2">
                            {documentTypes.map((doc) => (
                                <li key={doc} className="text-sm text-tertiary">• {doc}</li>
                            ))}
                        </ul>
                        <ul className="mt-3 space-y-2">
                            <li className="flex items-start gap-2 text-sm text-tertiary">
                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                Export Formats — PDF, DOCX, and Markdown export
                            </li>
                            <li className="flex items-start gap-2 text-sm text-tertiary">
                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                Version History — Track document changes over time
                            </li>
                        </ul>

                        <h4 className="mt-6 font-semibold text-primary">SDK & Audit Trail</h4>
                        <ul className="mt-3 space-y-2">
                            {sdkFeatures.map((feature) => (
                                <li key={feature} className="flex items-start gap-2 text-sm text-tertiary">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-3 text-sm font-medium text-primary">Automatic Event Logging:</p>
                        <ul className="mt-2 space-y-1">
                            {eventTypes.map((event) => (
                                <li key={event} className="text-sm text-tertiary">• {event}</li>
                            ))}
                        </ul>
                        <ul className="mt-3 space-y-2">
                            <li className="flex items-start gap-2 text-sm text-tertiary">
                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                PII Redaction — Automatic detection and redaction of sensitive data
                            </li>
                            <li className="flex items-start gap-2 text-sm text-tertiary">
                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                Trace Grouping — Group related events into logical traces
                            </li>
                        </ul>

                        <h4 className="mt-6 font-semibold text-primary">Evidence Management</h4>
                        <ul className="mt-3 space-y-2">
                            <li className="flex items-start gap-2 text-sm text-tertiary">
                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                Document Upload — Upload existing compliance evidence
                            </li>
                            <li className="flex items-start gap-2 text-sm text-tertiary">
                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                Requirement Linking — Link evidence to specific requirements
                            </li>
                            <li className="flex items-start gap-2 text-sm text-tertiary">
                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                Audit Packages — Generate downloadable audit packages
                            </li>
                        </ul>

                        <h4 className="mt-6 font-semibold text-primary">Certification Badges</h4>
                        <ul className="mt-3 space-y-2">
                            <li className="flex items-start gap-2 text-sm text-tertiary">
                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                Embeddable Badges — Display compliance status on your website
                            </li>
                            <li className="flex items-start gap-2 text-sm text-tertiary">
                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                Real-Time Verification — Visitors can verify with one click
                            </li>
                            <li className="flex items-start gap-2 text-sm text-tertiary">
                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                Multiple Badge Types — Standard, Detailed, Minimal, System-Specific
                            </li>
                        </ul>

                        <h4 className="mt-6 font-semibold text-primary">API</h4>
                        <ul className="mt-3 space-y-2">
                            <li className="flex items-start gap-2 text-sm text-tertiary">
                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                REST API v1 — Full programmatic access to all features
                            </li>
                            <li className="flex items-start gap-2 text-sm text-tertiary">
                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                Webhooks — Real-time notifications for compliance events
                            </li>
                        </ul>
                    </div>

                    {/* Security */}
                    <div className="mt-12">
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                            <Shield className="h-5 w-5 text-brand-600" />
                            Security
                        </h3>
                        <ul className="mt-4 space-y-2">
                            {securityFeatures.map((feature) => (
                                <li key={feature} className="flex items-start gap-2 text-sm text-tertiary">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SDK Packages */}
                    <div className="mt-12">
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                            <Package className="h-5 w-5 text-brand-600" />
                            SDK Packages
                        </h3>
                        <div className="mt-4 overflow-hidden rounded-xl border border-primary">
                            <table className="w-full text-sm">
                                <thead className="bg-secondary">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold text-primary">Package</th>
                                        <th className="px-4 py-3 text-left font-semibold text-primary">Version</th>
                                        <th className="px-4 py-3 text-left font-semibold text-primary">Install</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                    {sdkPackages.map((pkg) => (
                                        <tr key={pkg.package}>
                                            <td className="px-4 py-2 font-mono text-brand-600">{pkg.package}</td>
                                            <td className="px-4 py-2 text-tertiary">{pkg.version}</td>
                                            <td className="px-4 py-2 font-mono text-xs text-tertiary">{pkg.install}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Documentation */}
                    <div className="mt-12">
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                            <FileText className="h-5 w-5 text-brand-600" />
                            Documentation
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="/docs/quickstart" className="text-brand-600 hover:underline">Quick Start Guide</a> — Get started in 5 minutes</li>
                            <li><a href="/docs/sdk" className="text-brand-600 hover:underline">SDK Overview</a> — Complete SDK documentation</li>
                            <li><a href="/docs/api" className="text-brand-600 hover:underline">API Reference</a> — REST API documentation</li>
                            <li><a href="/docs/langchain" className="text-brand-600 hover:underline">LangChain Guide</a> — LangChain integration</li>
                            <li><a href="/docs/crewai" className="text-brand-600 hover:underline">CrewAI Guide</a> — CrewAI integration</li>
                        </ul>
                    </div>

                    {/* Pricing */}
                    <div className="mt-12">
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                            <Zap className="h-5 w-5 text-brand-600" />
                            Pricing Plans
                        </h3>
                        <div className="mt-4 overflow-hidden rounded-xl border border-primary">
                            <table className="w-full text-sm">
                                <thead className="bg-secondary">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold text-primary">Plan</th>
                                        <th className="px-4 py-3 text-left font-semibold text-primary">Price</th>
                                        <th className="px-4 py-3 text-left font-semibold text-primary">AI Systems</th>
                                        <th className="px-4 py-3 text-left font-semibold text-primary">Events/month</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                    {pricingPlans.map((plan) => (
                                        <tr key={plan.plan}>
                                            <td className="px-4 py-2 font-medium text-primary">{plan.plan}</td>
                                            <td className="px-4 py-2 text-brand-600">{plan.price}</td>
                                            <td className="px-4 py-2 text-tertiary">{plan.systems}</td>
                                            <td className="px-4 py-2 text-tertiary">{plan.events}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-2 text-sm text-tertiary">All plans include a 14-day free trial.</p>
                    </div>

                    {/* Known Issues */}
                    <div className="mt-12">
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                            <Bug className="h-5 w-5 text-warning-500" />
                            Known Issues
                        </h3>
                        <ul className="mt-4 space-y-2">
                            {knownIssues.map((issue) => (
                                <li key={issue} className="flex items-start gap-2 text-sm text-tertiary">
                                    <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0 text-warning-500" />
                                    {issue}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Coming Soon */}
                    <div className="mt-12">
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                            <Rocket className="h-5 w-5 text-brand-600" />
                            Coming Soon
                        </h3>
                        <p className="mt-2 text-sm text-tertiary">Features planned for upcoming releases:</p>
                        <ul className="mt-4 space-y-2">
                            {comingSoon.map((feature) => (
                                <li key={feature} className="flex items-start gap-2 text-sm text-tertiary">
                                    <Clock className="h-4 w-4 mt-0.5 shrink-0 text-tertiary" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const PreReleaseSection = () => {
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
                        Pre-Release History
                    </h2>

                    <div className="mt-8 space-y-8">
                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <h3 className="font-semibold text-primary">[0.9.0-beta] — 2025-11-15</h3>
                            <p className="mt-1 text-sm text-tertiary">Beta Release</p>
                            <ul className="mt-4 space-y-1 text-sm text-tertiary">
                                <li>• Initial public beta</li>
                                <li>• Core dashboard functionality</li>
                                <li>• LangChain integration</li>
                                <li>• Basic document generation</li>
                            </ul>
                        </div>

                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <h3 className="font-semibold text-primary">[0.8.0-alpha] — 2025-10-01</h3>
                            <p className="mt-1 text-sm text-tertiary">Alpha Release</p>
                            <ul className="mt-4 space-y-1 text-sm text-tertiary">
                                <li>• Private alpha for early adopters</li>
                                <li>• Risk classification engine</li>
                                <li>• Basic event logging</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const UpgradeGuideSection = () => {
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
                        Upgrade Guide
                    </h2>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Migrating to V1</h3>
                    <p className="mt-2 text-tertiary">If you were using the beta SDK, update your packages:</p>
                    
                    <p className="mt-4 text-sm font-medium text-primary">Python:</p>
                    <pre className="mt-2 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>pip install --upgrade protectron</code>
                    </pre>

                    <p className="mt-4 text-sm font-medium text-primary">TypeScript:</p>
                    <pre className="mt-2 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>npm install @protectron/sdk@latest</code>
                    </pre>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Breaking Changes from Beta</h3>
                    
                    <div className="mt-4 space-y-6">
                        <div>
                            <p className="text-sm font-medium text-primary">1. Callback class renamed:</p>
                            <pre className="mt-2 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                                <code>{`# Beta
from protectron import ProtectronLangChainCallback

# V1
from protectron.langchain import ProtectronCallback`}</code>
                            </pre>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-primary">2. Configuration options restructured:</p>
                            <pre className="mt-2 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                                <code>{`# Beta
callback = ProtectronCallback(api_key="...", system="my-agent")

# V1
callback = ProtectronCallback(system_id="my-agent")  # API key from env`}</code>
                            </pre>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-primary">3. Event types standardized:</p>
                            <ul className="mt-2 space-y-1 text-sm text-tertiary font-mono">
                                <li>• llm_request → llm_call</li>
                                <li>• function_call → tool_call</li>
                                <li>• agent_step → agent_action</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const FeedbackSection = () => {
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
                        Feedback
                    </h2>
                    <p className="mt-4 text-tertiary">We'd love to hear from you:</p>
                    <ul className="mt-4 space-y-2 text-tertiary">
                        <li><strong>Feature Requests:</strong> <a href="https://github.com/protectron/sdk/issues" className="text-brand-600 hover:underline">github.com/protectron/sdk/issues</a></li>
                        <li><strong>Bug Reports:</strong> <a href="https://github.com/protectron/sdk/issues" className="text-brand-600 hover:underline">github.com/protectron/sdk/issues</a></li>
                        <li><strong>General Feedback:</strong> <a href="mailto:feedback@protectron.ai" className="text-brand-600 hover:underline">feedback@protectron.ai</a></li>
                    </ul>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Subscribe to Updates</h3>
                    <p className="mt-2 text-tertiary">Get notified about new releases:</p>
                    <ul className="mt-4 space-y-2 text-tertiary">
                        <li><strong>GitHub:</strong> Watch <a href="https://github.com/protectron/sdk" className="text-brand-600 hover:underline">github.com/protectron/sdk</a></li>
                        <li><strong>Email:</strong> Subscribe in your <a href="https://dashboard.protectron.ai/settings" className="text-brand-600 hover:underline">dashboard settings</a></li>
                        <li><strong>Twitter/X:</strong> Follow <a href="https://twitter.com/protectron_ai" className="text-brand-600 hover:underline">@protectron_ai</a></li>
                    </ul>

                    <p className="mt-8 text-sm text-tertiary italic">Last updated: December 16, 2025</p>
                </motion.div>
            </div>
        </section>
    );
};

export default function ChangelogPage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <VersionFormatSection />
            <V1ReleaseSection />
            <PreReleaseSection />
            <UpgradeGuideSection />
            <FeedbackSection />
            <Footer />
        </div>
    );
}
