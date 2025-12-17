"use client";

import { motion } from "motion/react";
import { Terminal, CheckCircle2, Copy, ExternalLink, Clock, Zap, Shield, FileText } from "lucide-react";
import { TickCircle } from "iconsax-react";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/components/marketing/header-navigation/header";
import { Footer } from "@/components/shared/footer";
import { FAQSection } from "@/components/shared/faq-section";
import { Metadata } from "next";

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
                        Developer Documentation
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        Quick Start Guide
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        Get EU AI Act compliance logging for your AI application in under 5 minutes.
                    </p>
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
                            5-minute integration
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const PrerequisitesSection = () => {
    const prerequisites = [
        { text: "Python 3.8+ or Node.js 18+" },
        { text: "A Protectron account", link: "https://dashboard.protectron.ai/signup", linkText: "Sign up free" },
        { text: "An AI application using LangChain, CrewAI, or custom code" },
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
                        Prerequisites
                    </h2>
                    <p className="mt-4 text-tertiary">Before you begin, make sure you have:</p>
                    <ul className="mt-6 space-y-3">
                        {prerequisites.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-tertiary">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                                <span>
                                    {item.text}
                                    {item.link && (
                                        <> — <a href={item.link} className="text-brand-600 hover:underline">{item.linkText}</a></>
                                    )}
                                </span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

const StepsSection = () => {
    const steps = [
        {
            number: "1",
            title: "Create Your Account",
            description: "Sign up at dashboard.protectron.ai/signup with email or SSO, then verify your email address.",
            code: null,
        },
        {
            number: "2",
            title: "Register Your AI System",
            description: "Click 'Add AI System' in your dashboard, enter a name, select the AI type (Agent, Chain/Pipeline, Chatbot, or Other), and click 'Create System'. You'll receive a System ID.",
            code: null,
        },
        {
            number: "3",
            title: "Get Your API Key",
            description: "Go to Settings → API Keys, create a new key, and copy it immediately. Store it as an environment variable.",
            code: `# Add to your .env file or shell profile
export PROTECTRON_API_KEY=pk_live_xxxxxxxxxxxxxxxxxxxxxxxx`,
        },
        {
            number: "4",
            title: "Install the SDK",
            description: "Install the Protectron SDK for your language.",
            code: `# Python - Core SDK
pip install protectron

# With LangChain support
pip install protectron[langchain]

# With CrewAI support
pip install protectron[crewai]

# TypeScript / JavaScript
npm install @protectron/sdk`,
        },
        {
            number: "5",
            title: "Add to Your Application",
            description: "Add the Protectron callback to your AI application. Here's a LangChain example:",
            code: `from langchain.agents import create_react_agent, AgentExecutor
from langchain_openai import ChatOpenAI
from protectron.langchain import ProtectronCallback

# Create the Protectron callback
callback = ProtectronCallback(
    system_id="sys_abc123xyz"  # Your system ID from Step 2
)

# Create your agent with the callback
llm = ChatOpenAI(model="gpt-5.2")
agent = create_react_agent(llm, tools, prompt)
executor = AgentExecutor(
    agent=agent, 
    tools=tools, 
    callbacks=[callback]  # Add Protectron here
)

# Run your agent - all actions are automatically logged
result = executor.invoke({"input": "Your query here"})`,
        },
        {
            number: "6",
            title: "Verify It's Working",
            description: "Go to dashboard.protectron.ai, select your AI system, and click 'Audit Trail'. You should see events appearing in real-time.",
            code: null,
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
                        Step-by-Step Integration
                    </h2>
                </motion.div>
                <div className="mt-12 mx-auto max-w-3xl space-y-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className="rounded-2xl border border-primary bg-secondary p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                                    {step.number}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
                                    <p className="mt-2 text-tertiary">{step.description}</p>
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

const EventsTableSection = () => {
    const events = [
        { type: "trace_start", description: "Beginning of a session/conversation" },
        { type: "llm_call", description: "Each LLM interaction with input/output" },
        { type: "tool_call", description: "Each tool/function invocation" },
        { type: "agent_action", description: "Agent decisions and actions" },
        { type: "trace_end", description: "End of session" },
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
                        Expected Events
                    </h2>
                    <p className="mt-4 text-tertiary">After running your code, you should see events like:</p>
                    <div className="mt-8 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full">
                            <thead className="bg-primary">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Event Type</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-secondary">
                                {events.map((event) => (
                                    <tr key={event.type}>
                                        <td className="px-4 py-3 font-mono text-sm text-brand-600">{event.type}</td>
                                        <td className="px-4 py-3 text-sm text-tertiary">{event.description}</td>
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
                        Add Human Oversight Logging (Optional)
                    </h2>
                    <p className="mt-4 text-tertiary">
                        For Article 14 compliance, log when humans approve, reject, or override AI actions:
                    </p>
                    <pre className="mt-6 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`from protectron import Protectron

protectron = Protectron(system_id="sys_abc123xyz")

# When a human approves an AI action
def approve_action(action, approver_email):
    protectron.log_human_approval(
        action_type=action["type"],
        action_details=action["details"],
        approved_by=approver_email
    )
    execute_action(action)

# When a human rejects an AI action
def reject_action(action, approver_email, reason):
    protectron.log_human_rejection(
        action_type=action["type"],
        action_details=action["details"],
        rejected_by=approver_email,
        rejection_reason=reason
    )

# When a human overrides an AI decision
def override_action(original_action, new_action, approver_email, reason):
    protectron.log_human_override(
        original_decision=original_action["type"],
        override_decision=new_action["type"],
        overridden_by=approver_email,
        override_reason=reason
    )
    execute_action(new_action)`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};

const WhatIsLoggedSection = () => {
    const loggedData = [
        { data: "LLM prompts", purpose: "Audit trail of inputs" },
        { data: "LLM responses", purpose: "Audit trail of outputs" },
        { data: "Tool calls", purpose: "Record of AI actions" },
        { data: "Tool results", purpose: "Outcomes of actions" },
        { data: "Timestamps", purpose: "Timeline reconstruction" },
        { data: "Session context", purpose: "Grouping related events" },
        { data: "Errors", purpose: "Failure tracking" },
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
                        What's Being Logged?
                    </h2>
                    <p className="mt-4 text-tertiary">By default, Protectron logs:</p>
                    <div className="mt-8 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full">
                            <thead className="bg-primary">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Data</th>
                                    <th className="px-4 py-3 text-center text-sm font-semibold text-primary">Logged</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Purpose</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-secondary">
                                {loggedData.map((item) => (
                                    <tr key={item.data}>
                                        <td className="px-4 py-3 text-sm text-primary">{item.data}</td>
                                        <td className="px-4 py-3 text-center text-success-500">✓</td>
                                        <td className="px-4 py-3 text-sm text-tertiary">{item.purpose}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-primary">Customize What's Logged</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`callback = ProtectronCallback(
    system_id="sys_abc123xyz",
    
    # Content options
    log_llm_content=True,      # Set False to log metadata only
    log_tool_inputs=True,      # Log tool parameters
    log_tool_outputs=True,     # Log tool results
    
    # Privacy options
    pii_redaction=True,        # Auto-redact emails, phones, etc.
    hash_user_ids=True,        # Hash user identifiers
    
    # Sampling (for high-volume)
    sample_rate=1.0            # 1.0 = 100%, 0.1 = 10%
)`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};

const NextStepsSection = () => {
    const nextSteps = [
        {
            category: "Deepen Your Integration",
            items: [
                { title: "LangChain Integration Guide", href: "/docs/langchain", description: "Advanced LangChain patterns" },
                { title: "CrewAI Integration Guide", href: "/docs/crewai", description: "Multi-agent crew logging" },
            ],
        },
        {
            category: "Complete Your Compliance",
            items: [
                { title: "Risk Classification", href: "/features/risk-classification", description: "Classify your AI system's risk level" },
                { title: "Requirement Tracking", href: "/features/requirement-tracking", description: "Track all EU AI Act requirements" },
                { title: "Document Generation", href: "/features/document-generation", description: "Generate compliance documentation" },
            ],
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
                        Next Steps
                    </h2>
                    <p className="mt-4 text-tertiary">
                        You're now logging AI actions for EU AI Act compliance! Here's what to explore next:
                    </p>
                    <div className="mt-8 space-y-8">
                        {nextSteps.map((section) => (
                            <div key={section.category}>
                                <h3 className="text-lg font-semibold text-primary">{section.category}</h3>
                                <div className="mt-4 grid gap-4 md:grid-cols-2">
                                    {section.items.map((item) => (
                                        <a
                                            key={item.title}
                                            href={item.href}
                                            className="rounded-xl border border-primary bg-secondary p-4 transition-colors hover:bg-primary_hover"
                                        >
                                            <p className="font-medium text-primary">{item.title}</p>
                                            <p className="mt-1 text-sm text-tertiary">{item.description}</p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SummarySection = () => {
    const steps = [
        { step: "Create account", time: "1 min" },
        { step: "Register AI system", time: "1 min" },
        { step: "Get API key", time: "30 sec" },
        { step: "Install SDK", time: "30 sec" },
        { step: "Add callback", time: "2 min" },
        { step: "Verify in dashboard", time: "30 sec" },
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
                        Summary
                    </h2>
                    <div className="mt-8 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full">
                            <thead className="bg-primary">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Step</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Action</th>
                                    <th className="px-4 py-3 text-right text-sm font-semibold text-primary">Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-secondary">
                                {steps.map((item, index) => (
                                    <tr key={item.step}>
                                        <td className="px-4 py-3 text-sm text-primary">{index + 1}</td>
                                        <td className="px-4 py-3 text-sm text-tertiary">{item.step}</td>
                                        <td className="px-4 py-3 text-right text-sm text-tertiary">{item.time}</td>
                                    </tr>
                                ))}
                                <tr className="bg-brand-50 dark:bg-brand-900/20">
                                    <td className="px-4 py-3 text-sm font-semibold text-primary" colSpan={2}>Total - Full integration</td>
                                    <td className="px-4 py-3 text-right text-sm font-semibold text-brand-600">~5 min</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-6 text-center text-lg text-tertiary">
                        You're now logging AI actions for EU AI Act compliance. 🎉
                    </p>
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
                        Create your free account and start logging AI actions in minutes.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="https://dashboard.protectron.ai/signup">
                            Create Free Account
                        </Button>
                        <Button size="xl" color="link-gray" href="/docs/langchain" className="text-white hover:text-white/80">
                            View LangChain Guide
                        </Button>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
                        <span>✓ 100,000 events free</span>
                        <span>✓ No credit card required</span>
                        <span>✓ 5-minute integration</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default function QuickStartPage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <PrerequisitesSection />
            <StepsSection />
            <EventsTableSection />
            <HumanOversightSection />
            <WhatIsLoggedSection />
            <NextStepsSection />
            <SummarySection />
            <CTASection />
            <Footer />
        </div>
    );
}
