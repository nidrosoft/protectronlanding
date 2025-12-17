"use client";

import { motion } from "motion/react";
import { Code, Puzzle, CheckCircle2, ArrowRight, Terminal, Package, Zap } from "lucide-react";
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
                        Integrations
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        Integrations
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        Add compliance to your existing AI stack.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const FrameworksSection = () => {
    const frameworks = [
        {
            name: "LangChain",
            description: "The most popular framework for building LLM applications.",
            supported: ["Agents (ReAct, OpenAI Functions, Structured Chat)", "Chains (LCEL, legacy)", "Tools and retrievers", "All LLM providers"],
            code: `from protectron.langchain import ProtectronCallback

callback = ProtectronCallback(system_id="my-agent")
executor = AgentExecutor(agent=agent, tools=tools, callbacks=[callback])`,
            link: "/docs/langchain",
        },
        {
            name: "CrewAI",
            description: "Multi-agent orchestration framework.",
            supported: ["Multi-agent crews", "Task delegation", "Per-agent logging", "Inter-agent communication"],
            code: `from protectron.crewai import ProtectronCallback

callback = ProtectronCallback(system_id="my-crew")
crew = Crew(agents=[...], tasks=[...], callbacks=[callback])`,
            link: "/docs/crewai",
        },
        {
            name: "AutoGen",
            description: "Microsoft's multi-agent conversation framework.",
            supported: ["Agent conversations", "Code execution logging", "Human-in-the-loop", "Group chat"],
            code: `from protectron.autogen import ProtectronLogger

logger = ProtectronLogger(system_id="autogen-app")`,
            link: null,
        },
        {
            name: "Vercel AI SDK",
            description: "TypeScript SDK for AI applications.",
            supported: ["streamText / generateText", "All model providers", "Edge runtime compatible"],
            code: `import { withProtectron } from '@protectron/vercel-ai';

const result = await withProtectron(
    streamText({ model: openai('gpt-5.2'), prompt }),
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
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        AI Frameworks
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
                                <p className="mt-4 text-sm font-medium text-primary">Supported:</p>
                                <ul className="mt-2 space-y-1">
                                    {fw.supported.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-tertiary">
                                            <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                                    <code>{fw.code}</code>
                                </pre>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const CustomIntegrationSection = () => {
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
                        Custom Integration
                    </h2>
                    <p className="mt-4 text-tertiary">Building something custom? Use our base SDK.</p>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Python</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`from protectron import Protectron

protectron = Protectron(system_id="custom-app")

with protectron.trace("session-123") as trace:
    trace.log_llm_call(model="gpt-5.2", input=[...], output="...")
    trace.log_tool_call(tool="search", input={...}, output={...})`}</code>
                    </pre>

                    <h3 className="mt-8 text-lg font-semibold text-primary">TypeScript</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`import { Protectron } from '@protectron/sdk';

const protectron = new Protectron({ systemId: 'custom-app' });
await protectron.logEvent('llm_call', { model: 'gpt-5.2', ... });`}</code>
                    </pre>

                    <a href="/docs/sdk" className="mt-6 inline-flex items-center gap-1 text-brand-600 hover:underline">
                        → SDK Overview
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

const LLMProvidersSection = () => {
    const providers = [
        { provider: "OpenAI", status: "✅ Supported" },
        { provider: "Anthropic", status: "✅ Supported" },
        { provider: "Google (Gemini)", status: "✅ Supported" },
        { provider: "Azure OpenAI", status: "✅ Supported" },
        { provider: "AWS Bedrock", status: "✅ Supported" },
        { provider: "Mistral", status: "✅ Supported" },
        { provider: "Cohere", status: "✅ Supported" },
        { provider: "Ollama", status: "✅ Supported" },
        { provider: "Local models", status: "✅ Supported" },
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
                        LLM Providers
                    </h2>
                    <p className="mt-4 text-tertiary">Works with any LLM provider through our framework integrations:</p>
                    <div className="mt-6 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full text-sm">
                            <thead className="bg-primary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Provider</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-primary bg-secondary">
                                {providers.map((item) => (
                                    <tr key={item.provider}>
                                        <td className="px-4 py-2 text-primary">{item.provider}</td>
                                        <td className="px-4 py-2 text-success-600">{item.status}</td>
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

const ComingSoonSection = () => {
    const upcoming = [
        { integration: "Haystack", status: "🔄 In Development", eta: "Q1 2026" },
        { integration: "LlamaIndex", status: "📋 Planned", eta: "Q1 2026" },
        { integration: "Slack (notifications)", status: "📋 Planned", eta: "Q1 2026" },
        { integration: "Jira (requirements sync)", status: "📋 Planned", eta: "Q2 2026" },
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
                        Coming Soon
                    </h2>
                    <div className="mt-6 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full text-sm">
                            <thead className="bg-secondary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Integration</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Status</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">ETA</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                {upcoming.map((item) => (
                                    <tr key={item.integration}>
                                        <td className="px-4 py-2 text-primary">{item.integration}</td>
                                        <td className="px-4 py-2 text-tertiary">{item.status}</td>
                                        <td className="px-4 py-2 text-tertiary">{item.eta}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-tertiary">
                        <strong>Want a specific integration?</strong>{" "}
                        <a href="mailto:hello@protectron.ai" className="text-brand-600 hover:underline">
                            Let us know
                        </a>
                    </p>
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
                        Installation
                    </h2>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <div className="flex items-center gap-2">
                                <Terminal className="h-5 w-5 text-brand-600" />
                                <h3 className="font-semibold text-primary">Python</h3>
                            </div>
                            <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                                <code>{`# Core SDK
pip install protectron

# With framework support
pip install protectron[langchain]
pip install protectron[crewai]
pip install protectron[autogen]
pip install protectron[all]`}</code>
                            </pre>
                        </div>

                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <div className="flex items-center gap-2">
                                <Package className="h-5 w-5 text-brand-600" />
                                <h3 className="font-semibold text-primary">TypeScript</h3>
                            </div>
                            <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                                <code>{`npm install @protectron/sdk
npm install @protectron/vercel-ai`}</code>
                            </pre>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const GetStartedSection = () => {
    const steps = [
        { step: "1", title: "Create an account", description: "Free 14-day trial", href: "https://dashboard.protectron.ai/signup" },
        { step: "2", title: "Install the SDK", description: "Choose your framework" },
        { step: "3", title: "Add the callback", description: "One line of code" },
        { step: "4", title: "View your traces", description: "See events in your dashboard" },
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
                        Get Started
                    </h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {steps.map((s) => (
                            <div key={s.step} className="flex gap-4 rounded-xl border border-primary bg-secondary p-4">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                                    {s.step}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary">{s.title}</h3>
                                    <p className="text-sm text-tertiary">{s.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a href="/docs/quickstart" className="mt-6 inline-flex items-center gap-1 text-brand-600 hover:underline">
                        → Quick Start Guide
                    </a>
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
                        Ready to Integrate?
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        Add EU AI Act compliance to your AI stack in minutes.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/assessment">
                            Start Free Trial
                        </Button>
                        <Button size="xl" color="link-gray" href="/docs/quickstart" className="text-white hover:text-white/80">
                            View Quick Start →
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-white/60 italic">
                        Need help with integration? Contact support@protectron.ai
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default function IntegrationsPage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <FrameworksSection />
            <CustomIntegrationSection />
            <LLMProvidersSection />
            <ComingSoonSection />
            <InstallationSection />
            <GetStartedSection />
            <CTASection />
            <Footer />
        </div>
    );
}
