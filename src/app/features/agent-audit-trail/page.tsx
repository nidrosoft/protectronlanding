"use client";

import { motion } from "motion/react";
import { Check, Shield, Clock, Eye, AlertTriangle, FileText, Database, Lock } from "lucide-react";
import { TickCircle, Code1, SecurityUser, Timer1, Warning2 } from "iconsax-react";
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
                        For AI Agent Builders
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        Know What Your AI Agents Did. Prove It.
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        Automatic logging of every agent action, decision, and human override. Full EU AI Act Article 12 compliance—without changing how you build agents.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="primary" href="/features/sdk-integration">
                            Explore SDK Documentation
                        </Button>
                        <Button size="xl" color="secondary" href="#how-it-works">
                            See Live Demo
                        </Button>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-tertiary">
                        <span className="flex items-center gap-2">
                            <TickCircle size="18" className="text-success-500" variant="Bold" />
                            Works with LangChain, CrewAI, AutoGen
                        </span>
                        <span className="flex items-center gap-2">
                            <TickCircle size="18" className="text-success-500" variant="Bold" />
                            5-minute integration
                        </span>
                        <span className="flex items-center gap-2">
                            <TickCircle size="18" className="text-success-500" variant="Bold" />
                            Article 12 compliant logging
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
            icon: "🤖",
            title: "Autonomous Decision-Making",
            description: "Unlike simple AI models that respond to prompts, agents decide what to do next. They choose which tools to call, what data to access, and how to complete tasks. Every decision is a potential compliance event.",
        },
        {
            icon: "🔗",
            title: "Multi-Step Complexity",
            description: "A single agent task might involve dozens of reasoning steps, tool calls, and intermediate decisions. Manual logging is impossible. Missing even one step breaks your audit trail.",
        },
        {
            icon: "👤",
            title: "Human Oversight Requirements",
            description: "Article 14 of the EU AI Act requires human oversight for high-risk AI. For agents, this means logging when humans approve, reject, or override agent actions.",
        },
        {
            icon: "📋",
            title: "Article 12 Is Explicit",
            description: "The EU AI Act Article 12 specifically requires \"automatic recording of events\" for the AI system's lifetime. For agents, this means every action, every decision, every intervention—logged immutably.",
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
                        AI Agents Are a Compliance Nightmare
                    </h2>
                    <p className="mt-4 text-lg text-tertiary">
                        AI agents are transforming what's possible—but from a compliance perspective, they're the highest-risk AI you can deploy.
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
                    Existing observability tools track agent performance. Protectron tracks agent compliance. That's the difference between debugging and defending your AI in front of regulators.
                </motion.p>
            </div>
        </section>
    );
};

const SolutionSection = () => {
    const captures = [
        {
            icon: Code1,
            title: "Tool Calls & Results",
            description: "Every tool your agent invokes is logged with tool name, parameters, execution timestamp, result or error, and duration.",
        },
        {
            icon: "🧠",
            title: "LLM Interactions",
            description: "Every prompt and completion is captured: input messages, model used, output generated, token usage, and content filtering flags.",
        },
        {
            icon: "🔀",
            title: "Decision Points",
            description: "When your agent chooses between options: available options considered, selection made, confidence scores, and context that influenced the decision.",
        },
        {
            icon: SecurityUser,
            title: "Human Oversight Events",
            description: "Critical for Article 14: human-in-the-loop approvals, rejections with reason, manual overrides, escalation triggers, and intervention timestamps.",
        },
        {
            icon: Warning2,
            title: "Risk & Safety Events",
            description: "Automatic flagging: content policy violations, unexpected behaviors, error conditions, boundary violations, and anomaly detection triggers.",
        },
        {
            icon: Database,
            title: "Session & Context Metadata",
            description: "Full context: session ID, user context (anonymized), system version, environment, and deployment identifier.",
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
                        Compliance-First Agent Logging
                    </h2>
                    <p className="mt-4 mx-auto max-w-3xl text-lg text-tertiary">
                        Protectron's Agent Audit Trail captures everything regulators need to see—automatically. One SDK integration, and every agent action is logged with the context required for EU AI Act compliance.
                    </p>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {captures.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className="rounded-2xl border border-primary bg-secondary p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            {typeof item.icon === 'string' ? (
                                <span className="text-3xl">{item.icon}</span>
                            ) : (
                                <item.icon size="28" className="text-brand-600" />
                            )}
                            <h3 className="mt-4 text-lg font-semibold text-primary">{item.title}</h3>
                            <p className="mt-2 text-tertiary">{item.description}</p>
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
            title: "Install the SDK",
            description: "Add Protectron to your project with a single command: pip install protectron or npm install @protectron/sdk",
        },
        {
            number: "2",
            title: "Add the Callback",
            description: "Integrate with your existing agent framework. One line of code—your business logic stays unchanged.",
        },
        {
            number: "3",
            title: "Run Your Agent",
            description: "That's it. Run your agent normally. Every action is automatically logged to your Protectron audit trail.",
        },
        {
            number: "4",
            title: "View Audit Trail",
            description: "Open your Protectron dashboard to see the complete audit trail: timeline of all events, filterable and searchable.",
        },
        {
            number: "5",
            title: "Generate Compliance Evidence",
            description: "With one click, generate compliance reports that map your audit trail to EU AI Act requirements.",
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
                        Integration in Minutes, Compliance Forever
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

const FrameworksSection = () => {
    const frameworks = [
        {
            name: "LangChain / LangGraph",
            icon: "🦜",
            description: "The most popular agent framework, fully supported. Works with Agents, Chains, LCEL pipelines, and LangGraph state machines.",
            code: `from protectron.langchain import ProtectronCallback

agent = create_react_agent(
    llm, tools, 
    callbacks=[ProtectronCallback()]
)`,
        },
        {
            name: "CrewAI",
            icon: "🚢",
            description: "Multi-agent orchestration with full crew visibility. Track which agent did what within multi-agent crews.",
            code: `from protectron.crewai import ProtectronCallback

crew = Crew(
    agents=[agent1, agent2],
    callbacks=[ProtectronCallback()]
)`,
        },
        {
            name: "AutoGen",
            icon: "🤖",
            description: "Microsoft's multi-agent conversation framework. Support for AssistantAgent, UserProxyAgent, and GroupChat.",
            code: `from protectron.autogen import ProtectronCallback

assistant = AssistantAgent(
    "assistant",
    callbacks=[ProtectronCallback()]
)`,
        },
        {
            name: "Vercel AI SDK",
            icon: "⚡",
            description: "For TypeScript/JavaScript agent builders. Works with streamText, generateText, and tool calls.",
            code: `import { protectronMiddleware } from '@protectron/vercel-ai';

const result = await generateText({
  model: openai('gpt-5.2'),
  experimental_telemetry: protectronMiddleware()
});`,
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
                        Works With Your Agent Framework
                    </h2>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {frameworks.map((framework, index) => (
                        <motion.div
                            key={framework.name}
                            className="rounded-2xl border border-primary bg-secondary p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">{framework.icon}</span>
                                <h3 className="text-lg font-semibold text-primary">{framework.name}</h3>
                            </div>
                            <p className="mt-3 text-tertiary">{framework.description}</p>
                            <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                                <code>{framework.code}</code>
                            </pre>
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
            icon: Eye,
            title: "Human Oversight Tracking",
            description: "Prove your Article 14 compliance. Log all human approvals, rejections, and overrides with full context and timestamps.",
        },
        {
            icon: Lock,
            title: "Immutable Audit Trail",
            description: "Write-once storage with cryptographic verification. Once an event is logged, it cannot be modified or deleted.",
        },
        {
            icon: AlertTriangle,
            title: "Automatic Risk Flagging",
            description: "Proactive compliance: automatically flag content policy events, boundary violations, anomalies, and custom risk rules.",
        },
        {
            icon: FileText,
            title: "Compliance Evidence Export",
            description: "Generate Article 12 and Article 14 compliance reports with one click. PDF format, structured for regulatory review.",
        },
        {
            icon: Shield,
            title: "Privacy-First Design",
            description: "PII redaction, content exclusion, EU data residency. Control what gets logged with fine-grained configuration.",
        },
        {
            icon: Clock,
            title: "7-Year Retention",
            description: "Default retention aligned with regulatory requirements. Custom retention periods available on Growth and Enterprise plans.",
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
                        Built for Compliance, Not Just Observability
                    </h2>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="rounded-2xl border border-primary bg-primary p-6"
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
            icon: "🏦",
            title: "Financial Services Agents",
            description: "Complete log of every customer interaction. Human approval tracking for sensitive actions. Risk flagging for unusual transaction patterns.",
        },
        {
            icon: "🏥",
            title: "Healthcare AI Assistants",
            description: "Audit trail for medical-adjacent decisions. Human oversight proof for care recommendations. PII redaction for privacy compliance.",
        },
        {
            icon: "🛒",
            title: "E-commerce Customer Service",
            description: "Log every customer service decision. Track refund approvals and escalations. Generate evidence for consumer complaints.",
        },
        {
            icon: "💼",
            title: "Enterprise Workflow Automation",
            description: "Track agent actions affecting employees. Log approval chains for sensitive operations. Integration with enterprise compliance systems.",
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
                        Who Uses Agent Audit Trail
                    </h2>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={useCase.title}
                            className="rounded-2xl border border-primary bg-secondary p-6"
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

const agentAuditTrailFaqs = [
    {
        question: "Does Protectron slow down my agents?",
        answer: "Logging is asynchronous and non-blocking. Typical latency overhead is <5ms per event. For latency-critical applications, we support batched async logging that adds zero latency to the hot path.",
    },
    {
        question: "What happens if logging fails?",
        answer: "We use a resilient architecture with local buffering. If our servers are unreachable, events are queued locally and synced when connectivity resumes. No events are lost.",
    },
    {
        question: "Can I use Protectron alongside LangSmith or other observability tools?",
        answer: "Absolutely. Protectron complements observability tools. Use LangSmith for debugging and development, Protectron for compliance. Both callbacks can run simultaneously.",
    },
    {
        question: "How long are logs retained?",
        answer: "Default retention is 7 years (aligned with typical regulatory requirements). Custom retention periods are available on Growth and Enterprise plans. You can export data before deletion.",
    },
    {
        question: "Is the audit trail actually immutable?",
        answer: "Yes. We use append-only storage with cryptographic chaining. Once an event is written, it cannot be modified. Even we cannot alter historical records.",
    },
    {
        question: "What if my agent handles sensitive data?",
        answer: "Use our PII redaction features, content exclusion options, or sampling to control what's logged. You can log the fact that an action happened without logging the content of that action.",
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
                        Make Your Agents Audit-Ready
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        The EU AI Act treats autonomous AI agents as high-risk. Prove your compliance with automatic audit trails that capture every action, decision, and human intervention.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/assessment">
                            Start Free Trial
                        </Button>
                        <Button size="xl" color="link-gray" href="/docs" className="text-white hover:text-white/80">
                            View Documentation
                        </Button>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
                        <span>✓ 100,000 events free</span>
                        <span>✓ No credit card required</span>
                        <span>✓ Works with LangChain, CrewAI, AutoGen</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default function AgentAuditTrailPage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <HowItWorksSection />
            <FrameworksSection />
            <FeaturesSection />
            <UseCasesSection />
            <FAQSection faqs={agentAuditTrailFaqs} />
            <CTASection />
            <Footer />
        </div>
    );
}
