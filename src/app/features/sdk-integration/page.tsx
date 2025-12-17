"use client";

import { motion } from "motion/react";
import { Check, Terminal, Zap, Shield, Clock, Code, Settings, Bug, CheckCircle2 } from "lucide-react";
import { TickCircle, Code1 } from "iconsax-react";
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
                        For Developers
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        Compliance as Code
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        Add EU AI Act compliance to your AI applications with a few lines of code. Automatic audit trails, human oversight tracking, and compliance evidence—without changing how you build.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <div className="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-3 font-mono text-sm text-gray-100">
                            <Terminal className="h-4 w-4 text-brand-400" />
                            <span>pip install protectron</span>
                        </div>
                        <Button size="xl" color="secondary" href="/docs">
                            View Documentation
                        </Button>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-tertiary">
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-success-500" />
                            Works with LangChain, CrewAI, AutoGen
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-success-500" />
                            Python and TypeScript
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-success-500" />
                            Open-source SDK, cloud dashboard
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const WhySDKSection = () => {
    const benefits = [
        {
            icon: Code,
            title: "Compliance Built Into Your Stack",
            description: "Instead of bolting compliance onto finished systems, integrate it during development. Every AI action is logged from day one.",
        },
        {
            icon: Zap,
            title: "Zero Friction Integration",
            description: "Our SDK hooks into your existing frameworks. Add a callback or middleware—your business logic stays unchanged.",
        },
        {
            icon: Shield,
            title: "Automatic Evidence Generation",
            description: "Logs become compliance evidence automatically. No manual documentation of \"what the AI did.\"",
        },
        {
            icon: Clock,
            title: "Continuous Compliance",
            description: "Every production run generates compliance data. You're not compliant once—you're compliant continuously.",
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
                        Why Compliance Needs Code
                    </h2>
                    <p className="mt-4 text-lg text-tertiary">
                        EU AI Act compliance isn't just documentation—it requires operational changes to how your AI systems work.
                    </p>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            className="rounded-2xl border border-primary bg-primary p-6 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/30">
                                <benefit.icon className="h-6 w-6 text-brand-600" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-primary">{benefit.title}</h3>
                            <p className="mt-2 text-sm text-tertiary">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const InstallationSection = () => {
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
                        Get Started in 60 Seconds
                    </h2>
                </motion.div>
                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    <motion.div
                        className="rounded-2xl border border-primary bg-secondary p-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold text-primary">Python</h3>
                        <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                            <code>{`# Install the core SDK
pip install protectron

# With framework integrations
pip install protectron[langchain]
pip install protectron[crewai]
pip install protectron[autogen]

# Or install everything
pip install protectron[all]`}</code>
                        </pre>
                        <p className="mt-4 text-sm text-tertiary">Python 3.8+ • No native dependencies • Linux, macOS, Windows</p>
                    </motion.div>
                    <motion.div
                        className="rounded-2xl border border-primary bg-secondary p-6"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold text-primary">TypeScript / JavaScript</h3>
                        <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                            <code>{`# npm
npm install @protectron/sdk

# yarn
yarn add @protectron/sdk

# pnpm
pnpm add @protectron/sdk

# Framework packages
npm install @protectron/langchain
npm install @protectron/vercel-ai`}</code>
                        </pre>
                        <p className="mt-4 text-sm text-tertiary">Node.js 18+ • TypeScript 4.7+ • ESM and CommonJS</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const QuickStartSection = () => {
    const steps = [
        {
            number: "1",
            title: "Get Your API Key",
            description: "Sign up at dashboard.protectron.ai and create an API key.",
            code: `export PROTECTRON_API_KEY=pk_live_xxxxxxxxxxxxx`,
        },
        {
            number: "2",
            title: "Initialize the SDK",
            description: "Configure with your system ID and environment.",
            code: `from protectron import Protectron

protectron = Protectron(
    system_id="my-ai-system",
    environment="production"
)`,
        },
        {
            number: "3",
            title: "Add to Your AI Application",
            description: "Integrate with LangChain, CrewAI, or any framework.",
            code: `from protectron.langchain import ProtectronCallback

agent = create_react_agent(
    llm=ChatOpenAI(model="gpt-5.2"),
    tools=my_tools,
    callbacks=[ProtectronCallback(system_id="support-agent")]
)

# Use normally - all actions are logged
result = agent.invoke({"input": "Help me with my order"})`,
        },
        {
            number: "4",
            title: "View Your Audit Trail",
            description: "Open dashboard.protectron.ai to see logged events in real-time.",
            code: null,
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
                        Your First Integration
                    </h2>
                </motion.div>
                <div className="mt-12 space-y-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className="rounded-2xl border border-primary bg-primary p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                                    {step.number}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
                                    <p className="mt-1 text-tertiary">{step.description}</p>
                                    {step.code && (
                                        <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                                            <code>{step.code}</code>
                                        </pre>
                                    )}
                                </div>
                            </div>
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
            icon: "📝",
            title: "Event Logging",
            description: "Log any event with structured data. Custom event types, metadata, and context.",
        },
        {
            icon: "🔗",
            title: "Trace Context",
            description: "Group related events into traces. Nested spans for sub-operations.",
        },
        {
            icon: "🤖",
            title: "LLM Call Logging",
            description: "Structured logging for LLM interactions. Model, input, output, tokens, latency.",
        },
        {
            icon: "🔧",
            title: "Tool Call Logging",
            description: "Capture tool/function invocations with parameters and results.",
        },
        {
            icon: "🔀",
            title: "Decision Logging",
            description: "Document when your AI makes choices. Options, selection, confidence, reasoning.",
        },
        {
            icon: "👤",
            title: "Human Oversight Logging",
            description: "Track human interventions for Article 14 compliance. Approvals, rejections, overrides.",
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
                        SDK Capabilities
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
                            <span className="text-3xl">{feature.icon}</span>
                            <h3 className="mt-4 text-lg font-semibold text-primary">{feature.title}</h3>
                            <p className="mt-2 text-tertiary">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ConfigSection = () => {
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
                        Flexible Configuration
                    </h2>
                    <p className="mt-4 text-lg text-tertiary">
                        Fine-tune logging behavior, privacy settings, and performance options
                    </p>
                </motion.div>
                <motion.div 
                    className="mt-12 mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <pre className="overflow-x-auto rounded-2xl bg-gray-900 p-6 text-sm text-gray-100">
                        <code>{`from protectron import Protectron

protectron = Protectron(
    # Required
    api_key="pk_live_xxx",
    system_id="my-system",
    
    # Environment
    environment="production",
    version="1.2.0",
    
    # Content options
    log_llm_content=True,
    log_tool_inputs=True,
    log_tool_outputs=True,
    
    # Privacy
    pii_redaction=True,
    hash_user_ids=True,
    
    # Performance
    async_mode=True,
    buffer_size=1000,
    flush_interval=5.0,
)`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};

const PerformanceSection = () => {
    const metrics = [
        { label: "Async Mode Latency", value: "< 1ms", description: "per event" },
        { label: "Events Per Second", value: "10,000+", description: "per SDK instance" },
        { label: "Memory Usage", value: "~2MB", description: "default buffer" },
        { label: "Upload Throughput", value: "1,000+", description: "events/second batched" },
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
                        Built for Performance
                    </h2>
                    <p className="mt-4 text-lg text-tertiary">
                        Non-blocking, resilient, and minimal overhead
                    </p>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-4">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            className="rounded-2xl border border-primary bg-secondary p-6 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <p className="text-3xl font-bold text-brand-600">{metric.value}</p>
                            <p className="mt-1 text-sm text-tertiary">{metric.description}</p>
                            <p className="mt-2 text-sm font-medium text-primary">{metric.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const sdkIntegrationFaqs = [
    {
        question: "Does the SDK work with my existing observability tools?",
        answer: "Yes. Protectron complements tools like LangSmith, Datadog, and others. Use them for debugging and performance monitoring, use Protectron for compliance. Both can run simultaneously.",
    },
    {
        question: "What happens if my application crashes before events are sent?",
        answer: "Enable persist_on_failure to write events to disk if upload fails. Events are recovered and sent when your application restarts.",
    },
    {
        question: "Can I use the SDK in development without sending data?",
        answer: "Yes. Set enabled=False to disable logging entirely, or use environment='development' to separate dev data from production.",
    },
    {
        question: "How do I handle sensitive data in logs?",
        answer: "Use pii_redaction=True for automatic PII detection, log_llm_content=False to skip prompt/completion content, or exclude_tools to skip specific tool outputs.",
    },
    {
        question: "Is the SDK open source?",
        answer: "The SDK is open source and available on GitHub. The cloud dashboard and storage are hosted services included in your subscription.",
    },
    {
        question: "What frameworks will you support next?",
        answer: "Our roadmap includes Haystack, DSPy, and Semantic Kernel. Request integrations at feedback@protectron.ai or via the dashboard.",
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
                        Start Building Compliant AI
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        Add EU AI Act compliance to your AI applications today. Install the SDK, add a callback, and you're logging.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/docs/quickstart">
                            Quick Start Guide
                        </Button>
                        <Button size="xl" color="link-gray" href="https://github.com/protectron/sdk" className="text-white hover:text-white/80">
                            View on GitHub
                        </Button>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
                        <span>✓ Free tier available</span>
                        <span>✓ No credit card required</span>
                        <span>✓ 5-minute integration</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default function SDKIntegrationPage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <WhySDKSection />
            <InstallationSection />
            <QuickStartSection />
            <FeaturesSection />
            <ConfigSection />
            <PerformanceSection />
            <FAQSection faqs={sdkIntegrationFaqs} />
            <CTASection />
            <Footer />
        </div>
    );
}
