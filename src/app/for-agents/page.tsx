"use client";

import { motion } from "motion/react";
import { Bot, Code, Zap, Shield, Eye, Users, Lock, CheckCircle2, Clock, ArrowRight, Terminal, Cpu, MessageSquare } from "lucide-react";
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
                        For AI Agent Builders
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        Built for AI Agents
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        EU AI Act compliance designed for how you actually build.
                    </p>
                    <pre className="mt-8 mx-auto max-w-lg overflow-x-auto rounded-lg bg-gray-900 p-4 text-left text-sm text-gray-100">
                        <code>{`from langchain.agents import AgentExecutor
from protectron.langchain import ProtectronCallback

# Add Protectron to your existing agent
callback = ProtectronCallback(system_id="my-agent")

executor = AgentExecutor(
    agent=agent,
    tools=tools,
    callbacks=[callback]  # That's it
)`}</code>
                    </pre>
                    <p className="mt-4 text-sm text-tertiary">No refactoring. No infrastructure changes. Just add the callback.</p>
                </motion.div>
            </div>
        </section>
    );
};

const ChallengeSection = () => {
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
                        The Agent Compliance Challenge
                    </h2>
                    <p className="mt-6 text-tertiary">
                        AI agents are different. They're autonomous. They make decisions. They use tools. They collaborate with other agents.
                    </p>
                    <p className="mt-4 text-tertiary">
                        Traditional compliance tools don't understand this. They treat AI as a black box—input in, output out. But regulators want to see <em>how</em> your agent reached its decisions.
                    </p>
                    <div className="mt-6 rounded-xl border border-brand-200 bg-brand-50 dark:border-brand-800 dark:bg-brand-900/20 p-6">
                        <p className="font-semibold text-brand-700 dark:text-brand-400">
                            Protectron was built for agents from day one.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const WhatWeCaptureSection = () => {
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
                        What We Capture
                    </h2>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Every Agent Decision</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`Trace: trc_abc123
│
├── 10:23:01 agent_action
│   ├── thought: "User needs order status, I'll search..."
│   ├── action: search_orders
│   └── confidence: 0.92
│
├── 10:23:02 tool_call
│   ├── tool: search_orders
│   ├── input: {"order_id": "ORD-123"}
│   └── output: {"status": "shipped", "eta": "Dec 18"}
│
├── 10:23:03 agent_action
│   ├── thought: "Found the order, composing response..."
│   └── action: respond
│
└── 10:23:04 llm_call
    ├── model: gpt-5.2
    └── output: "Your order #123 has shipped..."`}</code>
                    </pre>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Multi-Agent Collaboration</h3>
                    <p className="mt-2 text-tertiary">For CrewAI and multi-agent systems:</p>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`Crew Execution: crew_xyz789
│
├── Agent: researcher
│   ├── task: "Analyze market trends"
│   ├── tools_used: [web_search, data_analysis]
│   └── output: "Market analysis complete..."
│
├── Agent: writer
│   ├── task: "Draft report"
│   ├── delegated_from: researcher
│   └── output: "Report draft ready..."
│
└── Agent: reviewer
    ├── task: "Quality check"
    ├── human_approval: required
    └── status: approved_by_supervisor@company.com`}</code>
                    </pre>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Human-in-the-Loop</h3>
                    <p className="mt-2 text-tertiary">When humans intervene:</p>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`# Automatically captured
protectron.log_human_approval(
    action="high_value_refund",
    approved_by="supervisor@company.com"
)

protectron.log_human_override(
    original="deny_request",
    override="approve_request",
    reason="Loyal customer exception"
)`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};

const FrameworksSection = () => {
    const frameworks = [
        {
            name: "LangChain",
            description: "Native callback integration for Agents, Chains, Tools, Retrievers, and Memory.",
            code: `from protectron.langchain import ProtectronCallback

callback = ProtectronCallback(
    system_id="langchain-agent",
    log_llm_content=True,
    pii_redaction=True
)`,
            link: "/docs/langchain",
        },
        {
            name: "CrewAI",
            description: "Complete multi-agent crew logging with per-agent tracking, task delegation, and collaboration.",
            code: `from crewai import Crew
from protectron.crewai import ProtectronCallback

callback = ProtectronCallback(
    system_id="my-crew",
    log_agent_thoughts=True
)

crew = Crew(
    agents=[researcher, writer, reviewer],
    tasks=[research_task, write_task, review_task],
    callbacks=[callback]
)`,
            link: "/docs/crewai",
        },
        {
            name: "AutoGen",
            description: "Microsoft AutoGen conversation tracking for agent messages, code execution, and human messages.",
            code: `from protectron.autogen import ProtectronLogger

logger = ProtectronLogger(system_id="autogen-app")`,
            link: null,
        },
        {
            name: "Vercel AI SDK",
            description: "Edge-ready TypeScript integration.",
            code: `import { streamText } from 'ai';
import { withProtectron } from '@protectron/vercel-ai';

const result = await withProtectron(
    streamText({
        model: openai('gpt-5.2'),
        prompt: userMessage,
    }),
    { systemId: 'my-app' }
);`,
            link: null,
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
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm text-center">
                        Framework Support
                    </h2>
                    <div className="mt-8 space-y-6">
                        {frameworks.map((fw) => (
                            <div key={fw.name} className="rounded-xl border border-primary bg-primary p-6">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-primary">{fw.name}</h3>
                                        <p className="mt-1 text-sm text-tertiary">{fw.description}</p>
                                    </div>
                                    {fw.link && (
                                        <a href={fw.link} className="text-sm text-brand-600 hover:underline shrink-0">
                                            View Guide →
                                        </a>
                                    )}
                                </div>
                                <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                                    <code>{fw.code}</code>
                                </pre>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 rounded-xl border border-primary bg-primary p-6">
                        <h3 className="text-lg font-semibold text-primary">Custom Agents</h3>
                        <p className="mt-1 text-sm text-tertiary">Building something custom? We've got you:</p>
                        <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                            <code>{`from protectron import Protectron

protectron = Protectron(system_id="custom-agent")

with protectron.trace("session-123") as trace:
    trace.log_agent_action(
        action="decide_next_step",
        reasoning="Based on user input...",
        decision="search_database"
    )
    
    trace.log_tool_call(
        tool="database_search",
        input={"query": "..."},
        output={"results": [...]}
    )`}</code>
                        </pre>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const WhyAgentsNeedSection = () => {
    const requirements = [
        { requirement: "Automatic logging", meaning: "Every decision logged without manual code" },
        { requirement: "Traceability", meaning: "Reconstruct how any decision was made" },
        { requirement: "Input recording", meaning: "What triggered each action" },
        { requirement: "Duration tracking", meaning: "When the agent was active" },
    ];

    const benefits = [
        { title: "Debug faster", description: "See exactly what went wrong" },
        { title: "Improve performance", description: "Analyze decision patterns" },
        { title: "Build trust", description: "Show customers how decisions are made" },
        { title: "Reduce liability", description: "Evidence when disputes arise" },
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
                        Why Agents Need This
                    </h2>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Article 12 Compliance</h3>
                    <p className="mt-2 text-tertiary">
                        The EU AI Act requires high-risk AI systems to have automatic logging that enables traceability. For agents, this means:
                    </p>
                    <div className="mt-4 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full text-sm">
                            <thead className="bg-secondary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Requirement</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">What It Means for Agents</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                {requirements.map((item) => (
                                    <tr key={item.requirement}>
                                        <td className="px-4 py-2 font-medium text-primary">{item.requirement}</td>
                                        <td className="px-4 py-2 text-tertiary">{item.meaning}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Beyond Compliance</h3>
                    <p className="mt-2 text-tertiary">Good logging makes your agents better:</p>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                        {benefits.map((benefit) => (
                            <div key={benefit.title} className="rounded-lg bg-secondary p-4">
                                <p className="font-semibold text-primary">{benefit.title}</p>
                                <p className="text-sm text-tertiary">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ProductionReadySection = () => {
    const performance = [
        { feature: "Async by default", description: "Non-blocking event delivery" },
        { feature: "<1ms overhead", description: "No perceptible slowdown" },
        { feature: "Buffered uploads", description: "Batch events efficiently" },
        { feature: "Graceful degradation", description: "Agent works even if logging fails" },
    ];

    const privacy = [
        { feature: "PII redaction", description: "Automatically detect and redact sensitive data" },
        { feature: "Content control", description: "Choose what to log" },
        { feature: "EU data residency", description: "All data stays in Frankfurt" },
        { feature: "Encryption", description: "TLS 1.3 in transit, AES-256 at rest" },
    ];

    const enterprise = [
        { feature: "SOC 2 compliant", description: "Enterprise security standards" },
        { feature: "SSO support", description: "SAML 2.0, OIDC" },
        { feature: "Role-based access", description: "Control who sees what" },
        { feature: "Audit exports", description: "Ready for regulators" },
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
                        Built for Production
                    </h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <Zap className="h-6 w-6 text-brand-600" />
                            <h3 className="mt-4 font-semibold text-primary">Zero Performance Impact</h3>
                            <ul className="mt-4 space-y-2">
                                {performance.map((item) => (
                                    <li key={item.feature} className="text-sm text-tertiary">
                                        <span className="font-medium text-primary">{item.feature}</span> — {item.description}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <Lock className="h-6 w-6 text-brand-600" />
                            <h3 className="mt-4 font-semibold text-primary">Privacy First</h3>
                            <ul className="mt-4 space-y-2">
                                {privacy.map((item) => (
                                    <li key={item.feature} className="text-sm text-tertiary">
                                        <span className="font-medium text-primary">{item.feature}</span> — {item.description}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <Shield className="h-6 w-6 text-brand-600" />
                            <h3 className="mt-4 font-semibold text-primary">Enterprise Ready</h3>
                            <ul className="mt-4 space-y-2">
                                {enterprise.map((item) => (
                                    <li key={item.feature} className="text-sm text-tertiary">
                                        <span className="font-medium text-primary">{item.feature}</span> — {item.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const GetStartedSection = () => {
    const steps = [
        { step: "1", title: "Install the SDK", code: "pip install protectron[langchain]  # or crewai, autogen" },
        { step: "2", title: "Get Your API Key", description: "Sign up at dashboard.protectron.ai and create your first system." },
        { step: "3", title: "Add the Callback", code: `from protectron.langchain import ProtectronCallback\n\ncallback = ProtectronCallback(system_id="my-agent")\n# Add to your agent executor` },
        { step: "4", title: "Deploy", description: "Your agent now has Article 12 compliant audit trails." },
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
                        Get Started in 5 Minutes
                    </h2>
                    <div className="mt-8 space-y-6">
                        {steps.map((s) => (
                            <div key={s.step} className="flex gap-4">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                                    {s.step}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-primary">{s.title}</h3>
                                    {s.description && <p className="mt-1 text-sm text-tertiary">{s.description}</p>}
                                    {s.code && (
                                        <pre className="mt-2 overflow-x-auto rounded-lg bg-gray-900 p-3 text-sm text-gray-100">
                                            <code>{s.code}</code>
                                        </pre>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const DashboardSection = () => {
    const features = [
        "Real-time traces — Watch agent executions as they happen",
        "Decision trees — Visual representation of agent reasoning",
        "Tool usage — Which tools are called most",
        "Performance metrics — Latency, token usage, success rates",
        "Anomaly detection — Unusual patterns flagged automatically",
    ];

    const reports = [
        "Event counts by type",
        "Human oversight statistics",
        "System availability logs",
        "Exportable for auditors",
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
                        See It in Action
                    </h2>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Dashboard View</h3>
                    <p className="mt-2 text-tertiary">Once integrated, your dashboard shows:</p>
                    <ul className="mt-4 space-y-2">
                        {features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-tertiary">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Compliance Reports</h3>
                    <p className="mt-2 text-tertiary">Generate Article 12 reports with one click:</p>
                    <ul className="mt-4 space-y-2">
                        {reports.map((report) => (
                            <li key={report} className="flex items-start gap-2 text-tertiary">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                                {report}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

const PricingSection = () => {
    const plans = [
        { plan: "Starter", agents: "3", events: "10,000", price: "€99/mo" },
        { plan: "Growth", agents: "10", events: "100,000", price: "€299/mo" },
        { plan: "Scale", agents: "25", events: "500,000", price: "€599/mo" },
        { plan: "Enterprise", agents: "Unlimited", events: "Unlimited", price: "Custom" },
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
                        Pricing for Agent Teams
                    </h2>
                    <div className="mt-8 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full text-sm">
                            <thead className="bg-secondary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Plan</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Agents</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Events/mo</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Price</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                {plans.map((plan) => (
                                    <tr key={plan.plan}>
                                        <td className="px-4 py-3 font-medium text-primary">{plan.plan}</td>
                                        <td className="px-4 py-3 text-tertiary">{plan.agents}</td>
                                        <td className="px-4 py-3 text-tertiary">{plan.events}</td>
                                        <td className="px-4 py-3 font-semibold text-brand-600">{plan.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-sm text-tertiary text-center">All plans include a 14-day free trial.</p>
                </motion.div>
            </div>
        </section>
    );
};

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "We added Protectron to our LangChain agents in an afternoon. Now we have complete audit trails for every customer interaction.",
            author: "CTO, AI Customer Service Startup",
        },
        {
            quote: "The CrewAI integration is exactly what we needed. We can finally show enterprise customers how our multi-agent system makes decisions.",
            author: "Founder, AI Automation Platform",
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
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm text-center">
                        From the Community
                    </h2>
                    <div className="mt-8 space-y-6">
                        {testimonials.map((t, i) => (
                            <blockquote key={i} className="rounded-xl border border-primary bg-primary p-6">
                                <p className="text-tertiary italic">"{t.quote}"</p>
                                <p className="mt-4 text-sm font-semibold text-primary">— {t.author}</p>
                            </blockquote>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ResourcesSection = () => {
    const resources = [
        { title: "Quick Start Guide", href: "/docs/quickstart", description: "Get started in 5 minutes" },
        { title: "LangChain Guide", href: "/docs/langchain", description: "Detailed LangChain integration" },
        { title: "CrewAI Guide", href: "/docs/crewai", description: "Multi-agent crew logging" },
        { title: "SDK Overview", href: "/docs/sdk", description: "Complete SDK documentation" },
        { title: "Article 12 Guide", href: "/guide/article-12", description: "Understand logging requirements" },
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
                        Resources
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
                        Ready to Make Your Agents Compliant?
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        Add EU AI Act compliance to your agents today. No infrastructure changes. No code refactoring. Just add a callback.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/assessment">
                            Start Free Trial
                        </Button>
                        <Button size="xl" color="link-gray" href="/docs" className="text-white hover:text-white/80">
                            View Documentation →
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-white/60 italic">
                        Questions? Email us at hello@protectron.ai
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default function ForAgentsPage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <ChallengeSection />
            <WhatWeCaptureSection />
            <FrameworksSection />
            <WhyAgentsNeedSection />
            <ProductionReadySection />
            <GetStartedSection />
            <DashboardSection />
            <PricingSection />
            <TestimonialsSection />
            <ResourcesSection />
            <CTASection />
            <Footer />
        </div>
    );
}
