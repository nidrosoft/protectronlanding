"use client";

import { motion } from "motion/react";
import { Code, Zap, Shield, Clock, CheckCircle2, Terminal, Package, BookOpen, ArrowRight } from "lucide-react";
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
                        Documentation
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        Protectron SDK
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        Add EU AI Act compliance to your AI applications in minutes.
                    </p>
                    <pre className="mt-8 mx-auto max-w-lg overflow-x-auto rounded-lg bg-gray-900 p-4 text-left text-sm text-gray-100">
                        <code>{`# Three lines to compliance logging
from protectron.langchain import ProtectronCallback

callback = ProtectronCallback(system_id="my-ai-agent")
executor = AgentExecutor(agent=agent, tools=tools, callbacks=[callback])`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};

const WhatIsSection = () => {
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
                        What is the Protectron SDK?
                    </h2>
                    <p className="mt-6 text-lg text-tertiary">
                        The Protectron SDK is a lightweight library that automatically captures compliance-relevant events from your AI applications. It provides the logging and audit trail capabilities required by Article 12 of the EU AI Act, without changing how your AI systems work.
                    </p>
                    <p className="mt-4 text-tertiary">
                        Every LLM call, tool invocation, agent decision, and human intervention is automatically logged to your Protectron dashboard—creating a complete, tamper-evident audit trail.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const WhyUseSection = () => {
    const benefits = [
        {
            title: "Article 12 Compliance",
            description: "The EU AI Act requires high-risk AI systems to have automatic logging capabilities that enable traceability.",
            features: [
                "Automatic event logging — No manual instrumentation needed",
                "Immutable audit trail — Cryptographically chained records",
                "Complete traceability — Reconstruct any AI decision",
                "Evidence generation — Export compliance reports",
            ],
            icon: Shield,
        },
        {
            title: "Zero Performance Impact",
            description: "The SDK is designed for production use with minimal overhead.",
            features: [
                "Async by default — Non-blocking event delivery",
                "<1ms latency — No perceptible slowdown",
                "Resilient — Graceful degradation if network fails",
                "Lightweight — Minimal memory footprint",
            ],
            icon: Zap,
        },
        {
            title: "Framework Native",
            description: "Works with how you already build AI applications.",
            features: [
                "LangChain — Native callback integration",
                "CrewAI — Multi-agent crew logging",
                "AutoGen — Conversation tracking",
                "Vercel AI SDK — Edge-ready TypeScript",
                "Custom — Simple API for any framework",
            ],
            icon: Code,
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
                        Why Use the SDK?
                    </h2>
                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        {benefits.map((benefit) => (
                            <div key={benefit.title} className="rounded-xl border border-primary bg-secondary p-6">
                                <benefit.icon className="h-8 w-8 text-brand-600" />
                                <h3 className="mt-4 text-lg font-semibold text-primary">{benefit.title}</h3>
                                <p className="mt-2 text-sm text-tertiary">{benefit.description}</p>
                                <ul className="mt-4 space-y-2">
                                    {benefit.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2 text-sm text-tertiary">
                                            <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                            {feature}
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

const InstallationSection = () => {
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
                        Supported Languages
                    </h2>
                    
                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <h3 className="text-lg font-semibold text-primary">Python</h3>
                            <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-3 text-sm text-gray-100">
                                <code>pip install protectron</code>
                            </pre>
                            <p className="mt-3 text-sm text-tertiary"><strong>Requirements:</strong> Python 3.8+</p>
                            <div className="mt-4">
                                <p className="text-sm font-medium text-primary">Framework packages:</p>
                                <pre className="mt-2 overflow-x-auto rounded-lg bg-gray-900 p-3 text-xs text-gray-100">
                                    <code>{`pip install protectron[langchain]   # LangChain
pip install protectron[crewai]      # CrewAI
pip install protectron[autogen]     # AutoGen
pip install protectron[all]         # All frameworks`}</code>
                                </pre>
                            </div>
                        </div>

                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <h3 className="text-lg font-semibold text-primary">TypeScript / JavaScript</h3>
                            <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-3 text-sm text-gray-100">
                                <code>npm install @protectron/sdk</code>
                            </pre>
                            <p className="mt-3 text-sm text-tertiary"><strong>Requirements:</strong> Node.js 18+</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const CoreConceptsSection = () => {
    const eventTypes = [
        { type: "llm_call", description: "LLM prompt and completion" },
        { type: "tool_call", description: "Tool/function invocation" },
        { type: "agent_action", description: "Agent decision or action" },
        { type: "human_approval", description: "Human approved an action" },
        { type: "human_rejection", description: "Human rejected an action" },
        { type: "human_override", description: "Human changed AI decision" },
        { type: "risk_event", description: "Anomaly or policy violation" },
        { type: "error", description: "Error or exception" },
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
                        Core Concepts
                    </h2>
                    
                    <div className="mt-8 space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold text-primary">Systems</h3>
                            <p className="mt-2 text-tertiary">
                                A <strong>System</strong> represents an AI application you want to track. Each system has a unique ID, risk level, and applicable compliance requirements.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">Traces</h3>
                            <p className="mt-2 text-tertiary">
                                A <strong>Trace</strong> groups related events into a logical unit—typically a conversation, session, or request.
                            </p>
                            <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                                <code>{`with protectron.trace("user-session-123") as trace:
    # All events within this block are grouped
    result = agent.invoke({"input": user_message})`}</code>
                            </pre>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">Events</h3>
                            <p className="mt-2 text-tertiary">
                                <strong>Events</strong> are individual actions captured by the SDK:
                            </p>
                            <div className="mt-4 overflow-hidden rounded-xl border border-primary">
                                <table className="w-full text-sm">
                                    <thead className="bg-secondary">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-semibold text-primary">Event Type</th>
                                            <th className="px-4 py-3 text-left font-semibold text-primary">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                        {eventTypes.map((event) => (
                                            <tr key={event.type}>
                                                <td className="px-4 py-2 font-mono text-brand-600">{event.type}</td>
                                                <td className="px-4 py-2 text-tertiary">{event.description}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">Callbacks</h3>
                            <p className="mt-2 text-tertiary">
                                <strong>Callbacks</strong> are the primary integration mechanism. They hook into your AI framework and automatically capture events.
                            </p>
                            <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                                <code>{`# LangChain callback
from protectron.langchain import ProtectronCallback
callback = ProtectronCallback(system_id="my-agent")

# CrewAI callback
from protectron.crewai import ProtectronCallback
callback = ProtectronCallback(system_id="my-crew")`}</code>
                            </pre>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const QuickExampleSection = () => {
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
                        Quick Example
                    </h2>
                    <h3 className="mt-8 text-lg font-semibold text-primary">LangChain Agent</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`from langchain.agents import create_react_agent, AgentExecutor
from langchain_openai import ChatOpenAI
from langchain.tools import Tool
from langchain import hub
from protectron.langchain import ProtectronCallback

# 1. Create the Protectron callback
callback = ProtectronCallback(
    system_id="support-agent",      # Your system ID
    environment="production",        # production, staging, development
    pii_redaction=True              # Auto-redact PII
)

# 2. Set up your agent as normal
llm = ChatOpenAI(model="gpt-5.2")
tools = [
    Tool(name="search", func=search_fn, description="Search knowledge base"),
    Tool(name="ticket", func=create_ticket, description="Create support ticket"),
]
prompt = hub.pull("hwchase17/react")
agent = create_react_agent(llm, tools, prompt)

# 3. Add callback to executor
executor = AgentExecutor(
    agent=agent,
    tools=tools,
    callbacks=[callback],  # Add Protectron here
    verbose=True
)

# 4. Run - all events automatically logged
result = executor.invoke({"input": "I need help with my order"})`}</code>
                    </pre>

                    <h3 className="mt-8 text-lg font-semibold text-primary">What Gets Logged</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`Trace: trc_abc123
├── 10:23:01.123 llm_call
│   ├── model: gpt-5.2
│   ├── input: "I need help with my order..."
│   ├── output: "I'll search for your order..."
│   └── tokens: 142 in, 89 out
│
├── 10:23:02.456 tool_call
│   ├── tool: search
│   ├── input: {"query": "order status"}
│   └── output: "Order #12345: Shipped..."
│
├── 10:23:03.789 llm_call
│   ├── model: gpt-5.2
│   ├── input: [conversation context]
│   └── output: "Your order #12345 has shipped..."
│
└── 10:23:04.012 trace_end
    └── duration: 2.89s`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};

const ConfigurationSection = () => {
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
                        Configuration
                    </h2>
                    
                    <h3 className="mt-8 text-lg font-semibold text-primary">Environment Variables</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`# Required
export PROTECTRON_API_KEY=pk_live_xxxxxxxxxxxxxxxx

# Optional
export PROTECTRON_ENVIRONMENT=production
export PROTECTRON_DEBUG=false`}</code>
                    </pre>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Callback Options</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`callback = ProtectronCallback(
    # Required
    system_id="my-agent",
    
    # Environment
    environment="production",       # production, staging, development
    
    # Content logging
    log_llm_content=True,          # Log prompts and completions
    log_tool_inputs=True,          # Log tool parameters
    log_tool_outputs=True,         # Log tool results
    
    # Privacy
    pii_redaction=True,            # Auto-redact emails, phones, etc.
    pii_types=["email", "phone", "ssn", "credit_card"],
    hash_user_ids=True,            # Hash user identifiers
    
    # Performance
    async_mode=True,               # Non-blocking (recommended)
    buffer_size=1000,              # Events before flush
    flush_interval=5.0,            # Seconds between flushes
    
    # Sampling (for high volume)
    sample_rate=1.0,               # 1.0 = 100%, 0.1 = 10%
    
    # Metadata
    include_metadata={
        "team": "customer-success",
        "version": "1.2.0"
    }
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
            description: "Full support for LangChain's callback system: LLM calls, Agents, Chains, Tools, Memory",
            link: "/docs/langchain",
        },
        {
            name: "CrewAI",
            description: "Complete multi-agent logging: Per-agent tracking, Task delegation, Inter-agent communication",
            link: "/docs/crewai",
        },
        {
            name: "AutoGen",
            description: "Microsoft AutoGen support: Conversation logging, Agent messages, Code execution, Human-in-the-loop",
            link: "#",
        },
        {
            name: "Vercel AI SDK",
            description: "Edge-ready TypeScript integration for Next.js and Vercel deployments",
            link: "#",
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
                        Framework Integrations
                    </h2>
                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        {frameworks.map((framework) => (
                            <a
                                key={framework.name}
                                href={framework.link}
                                className="group rounded-xl border border-primary bg-primary p-6 transition-all hover:border-brand-300 hover:shadow-lg"
                            >
                                <h3 className="text-lg font-semibold text-primary group-hover:text-brand-600">{framework.name}</h3>
                                <p className="mt-2 text-sm text-tertiary">{framework.description}</p>
                                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600">
                                    View Guide <ArrowRight className="h-4 w-4" />
                                </span>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const HumanOversightSection = () => {
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
                        Human Oversight (Article 14)
                    </h2>
                    <p className="mt-4 text-tertiary">
                        Log human interventions for Article 14 compliance:
                    </p>
                    <pre className="mt-6 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`from protectron import Protectron

protectron = Protectron(system_id="supervised-agent")

# When human approves an AI action
protectron.log_human_approval(
    action_type="refund_request",
    action_details={"amount": 150.00, "order_id": "ORD-123"},
    approved_by="supervisor@company.com"
)

# When human rejects an AI action
protectron.log_human_rejection(
    action_type="refund_request",
    action_details={"amount": 5000.00, "order_id": "ORD-456"},
    rejected_by="supervisor@company.com",
    rejection_reason="Amount exceeds auto-approval limit"
)

# When human overrides an AI decision
protectron.log_human_override(
    original_decision="route_to_tier1",
    override_decision="route_to_tier2",
    overridden_by="supervisor@company.com",
    override_reason="Complex technical issue"
)`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};

const PackagesSection = () => {
    const packages = [
        { package: "protectron", language: "Python", install: "pip install protectron" },
        { package: "protectron[langchain]", language: "Python", install: "pip install protectron[langchain]" },
        { package: "protectron[crewai]", language: "Python", install: "pip install protectron[crewai]" },
        { package: "protectron[autogen]", language: "Python", install: "pip install protectron[autogen]" },
        { package: "protectron[all]", language: "Python", install: "pip install protectron[all]" },
        { package: "@protectron/sdk", language: "TypeScript", install: "npm install @protectron/sdk" },
        { package: "@protectron/vercel-ai", language: "TypeScript", install: "npm install @protectron/vercel-ai" },
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
                        SDK Packages
                    </h2>
                    <div className="mt-8 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full text-sm">
                            <thead className="bg-primary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Package</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Language</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Install</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-primary bg-secondary">
                                {packages.map((pkg) => (
                                    <tr key={pkg.package}>
                                        <td className="px-4 py-3 font-mono text-brand-600">{pkg.package}</td>
                                        <td className="px-4 py-3 text-tertiary">{pkg.language}</td>
                                        <td className="px-4 py-3 font-mono text-xs text-tertiary">{pkg.install}</td>
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

const NextStepsSection = () => {
    const links = [
        { title: "Quick Start Guide", description: "5-minute setup", href: "/docs/quickstart", icon: Terminal },
        { title: "API Reference", description: "Complete API documentation", href: "/docs/api", icon: BookOpen },
        { title: "LangChain Guide", description: "LangChain integration", href: "/docs/langchain", icon: Code },
        { title: "CrewAI Guide", description: "Multi-agent crews", href: "/docs/crewai", icon: Package },
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
                        What's Next?
                    </h2>
                    <div className="mt-12 grid gap-4 md:grid-cols-2">
                        {links.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                className="group flex items-start gap-4 rounded-xl border border-primary bg-secondary p-4 transition-all hover:border-brand-300"
                            >
                                <link.icon className="h-6 w-6 shrink-0 text-brand-600" />
                                <div>
                                    <h3 className="font-semibold text-primary group-hover:text-brand-600">{link.title}</h3>
                                    <p className="text-sm text-tertiary">{link.description}</p>
                                </div>
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
                        Ready to Get Started?
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        Follow the Quick Start Guide to add compliance logging in 5 minutes.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/docs/quickstart">
                            Quick Start Guide
                        </Button>
                        <Button size="xl" color="link-gray" href="/docs/api" className="text-white hover:text-white/80">
                            API Reference →
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default function SDKOverviewPage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <WhatIsSection />
            <WhyUseSection />
            <InstallationSection />
            <CoreConceptsSection />
            <QuickExampleSection />
            <ConfigurationSection />
            <FrameworksSection />
            <HumanOversightSection />
            <PackagesSection />
            <NextStepsSection />
            <CTASection />
            <Footer />
        </div>
    );
}
