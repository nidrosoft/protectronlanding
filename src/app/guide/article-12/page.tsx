"use client";

import { motion } from "motion/react";
import { FileText, AlertTriangle, CheckCircle2, Shield, Clock, Database, Lock, Eye, Code, ArrowRight } from "lucide-react";
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
                        Article 12: Record-Keeping
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        The Complete Guide to EU AI Act Logging Requirements
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const OverviewSection = () => {
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
                        Overview
                    </h2>
                    <p className="mt-6 text-tertiary">
                        Article 12 of the EU AI Act establishes record-keeping requirements for high-risk AI systems. It mandates automatic logging capabilities that enable traceability throughout the AI system's lifecycle.
                    </p>
                    <div className="mt-6 rounded-xl border border-brand-200 bg-brand-50 dark:border-brand-800 dark:bg-brand-900/20 p-6">
                        <p className="font-semibold text-brand-700 dark:text-brand-400">Key Principle</p>
                        <p className="mt-2 text-tertiary">
                            High-risk AI systems must be designed to automatically record events relevant to identifying risks and enabling post-market monitoring.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const WhyMattersSection = () => {
    const penalties = [
        "Fines up to €15 million or 3% of global annual turnover",
        "Market withdrawal of your AI system",
        "Conformity assessment failures",
        "Regulatory investigations",
    ];

    const benefits = [
        { title: "Debugging", description: "Understand what went wrong when issues arise" },
        { title: "Improvement", description: "Analyze patterns to improve AI performance" },
        { title: "Trust", description: "Demonstrate to customers how your AI makes decisions" },
        { title: "Liability Protection", description: "Evidence in case of disputes" },
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
                        Why Record-Keeping Matters
                    </h2>
                    
                    <h3 className="mt-8 text-lg font-semibold text-primary">Regulatory Compliance</h3>
                    <p className="mt-2 text-tertiary">
                        Article 12 isn't optional for high-risk AI systems. Failure to implement adequate logging can result in:
                    </p>
                    <ul className="mt-4 space-y-2">
                        {penalties.map((penalty) => (
                            <li key={penalty} className="flex items-start gap-2 text-tertiary">
                                <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0 text-warning-500" />
                                {penalty}
                            </li>
                        ))}
                    </ul>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Beyond Compliance</h3>
                    <p className="mt-2 text-tertiary">Good logging practices provide business value:</p>
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

const RequirementsSection = () => {
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
                        What Article 12 Requires
                    </h2>
                    
                    <div className="mt-8 rounded-xl border border-primary bg-primary p-6">
                        <h3 className="text-lg font-semibold text-primary">The Legal Text</h3>
                        <blockquote className="mt-4 border-l-4 border-brand-300 pl-4 italic text-tertiary">
                            "High-risk AI systems shall technically allow for the automatic recording of events ('logs') over the duration of the lifetime of the system."
                        </blockquote>
                    </div>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Specific Requirements</h3>
                    <p className="mt-2 text-tertiary">Article 12 specifies that logging capabilities must enable:</p>

                    <div className="mt-6 space-y-6">
                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <h4 className="font-semibold text-primary">1. Recording of Operational Period</h4>
                            <p className="mt-2 text-tertiary">
                                Logs must capture when the AI system is being used—the start and end of each use period.
                            </p>
                            <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                                <code>{`# Log session start
protectron.log_event("session_start", {
    "session_id": "sess_123",
    "user_id": "usr_456",
    "timestamp": "2025-12-16T10:00:00Z"
})

# Log session end
protectron.log_event("session_end", {
    "session_id": "sess_123",
    "duration_seconds": 3600
})`}</code>
                            </pre>
                        </div>

                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <h4 className="font-semibold text-primary">2. Reference Database Logging</h4>
                            <p className="mt-2 text-tertiary">
                                If the AI system uses reference databases (for matching or comparison), access to these databases must be logged.
                            </p>
                            <p className="mt-2 text-sm text-tertiary"><strong>Examples:</strong> Biometric systems, hiring AI, credit scoring systems</p>
                            <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                                <code>{`protectron.log_event("database_access", {
    "database": "candidate_profiles",
    "query_type": "match",
    "records_accessed": 150,
    "purpose": "candidate_screening"
})`}</code>
                            </pre>
                        </div>

                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <h4 className="font-semibold text-primary">3. Input Data Logging</h4>
                            <p className="mt-2 text-tertiary">
                                The input data that led to a match or decision must be logged—or at minimum, the ability to reconstruct this data must exist.
                            </p>
                            <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                                <code>{`protectron.log_event("llm_call", {
    "input_hash": "sha256:abc123...",  # Hash if PII concerns
    "input_summary": "Customer inquiry about refund",
    "input_tokens": 145
})`}</code>
                            </pre>
                        </div>

                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <h4 className="font-semibold text-primary">4. Traceability</h4>
                            <p className="mt-2 text-tertiary">Logs must enable tracing the AI system's operation for:</p>
                            <ul className="mt-2 space-y-1 text-sm text-tertiary">
                                <li>• Investigating potential risks</li>
                                <li>• Understanding decision chains</li>
                                <li>• Post-market monitoring</li>
                                <li>• Incident investigation</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ImplementationSection = () => {
    const logContents = [
        { element: "Timestamp", description: "When the event occurred", example: "2025-12-16T10:23:45.123Z" },
        { element: "Event Type", description: "What type of event", example: "llm_call, tool_use, decision" },
        { element: "System ID", description: "Which AI system", example: "customer-support-agent" },
        { element: "Session/Trace", description: "Grouping identifier", example: "trc_abc123" },
        { element: "Input Reference", description: "What triggered the event", example: "Hash, summary, or full data" },
        { element: "Output Reference", description: "What the system produced", example: "Decision, response, action" },
        { element: "Metadata", description: "Additional context", example: "User ID, environment, version" },
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
                        Implementation Requirements
                    </h2>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Automatic Logging</h3>
                    <p className="mt-2 text-tertiary">
                        The key word in Article 12 is <strong>automatic</strong>. Manual logging is not sufficient. The system must:
                    </p>
                    <ul className="mt-4 space-y-2 text-tertiary">
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                            Log without human intervention
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                            Capture events in real-time
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                            Operate reliably throughout the system's lifetime
                        </li>
                    </ul>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Log Contents</h3>
                    <p className="mt-2 text-tertiary">For each logged event, capture:</p>
                    <div className="mt-4 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full text-sm">
                            <thead className="bg-secondary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Element</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Description</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Example</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                {logContents.map((item) => (
                                    <tr key={item.element}>
                                        <td className="px-4 py-2 font-medium text-primary">{item.element}</td>
                                        <td className="px-4 py-2 text-tertiary">{item.description}</td>
                                        <td className="px-4 py-2 font-mono text-xs text-brand-600">{item.example}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Log Retention</h3>
                    <p className="mt-2 text-tertiary">
                        The regulation requires logs to be maintained for a period "appropriate to the intended purpose" of the AI system, and at minimum:
                    </p>
                    <ul className="mt-4 space-y-2 text-tertiary">
                        <li>• <strong>Lifetime of the system</strong> — As long as the AI system is in operation</li>
                        <li>• <strong>Post-decommission</strong> — Reasonable period after the system is retired</li>
                        <li>• <strong>Minimum periods</strong> — Some member states may specify minimum retention periods</li>
                    </ul>
                    <div className="mt-4 rounded-lg bg-secondary p-4">
                        <p className="text-sm text-tertiary">
                            <strong>Recommendation:</strong> Retain logs for at least 7 years, or as long as the AI system is deployed plus 3 years.
                        </p>
                    </div>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Log Integrity</h3>
                    <p className="mt-2 text-tertiary">Logs must be:</p>
                    <div className="mt-4 grid gap-4 md:grid-cols-3">
                        <div className="rounded-lg bg-secondary p-4 text-center">
                            <Lock className="h-6 w-6 mx-auto text-brand-600" />
                            <p className="mt-2 font-semibold text-primary">Tamper-evident</p>
                            <p className="text-xs text-tertiary">Changes should be detectable</p>
                        </div>
                        <div className="rounded-lg bg-secondary p-4 text-center">
                            <Database className="h-6 w-6 mx-auto text-brand-600" />
                            <p className="mt-2 font-semibold text-primary">Immutable</p>
                            <p className="text-xs text-tertiary">Historical logs not modifiable</p>
                        </div>
                        <div className="rounded-lg bg-secondary p-4 text-center">
                            <Shield className="h-6 w-6 mx-auto text-brand-600" />
                            <p className="mt-2 font-semibold text-primary">Secure</p>
                            <p className="text-xs text-tertiary">Protected from unauthorized access</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ExamplesSection = () => {
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
                        What to Log by AI System Type
                    </h2>

                    <h3 className="mt-8 text-lg font-semibold text-primary">LLM Applications</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`# Every LLM call
{
    "event_type": "llm_call",
    "model": "gpt-5.2",
    "provider": "openai",
    "input_messages": [...],  # Or hash/summary
    "output_message": "...",
    "tokens_input": 150,
    "tokens_output": 89,
    "latency_ms": 1234,
    "temperature": 0.7,
    "timestamp": "2025-12-16T10:23:45.123Z"
}`}</code>
                    </pre>

                    <h3 className="mt-8 text-lg font-semibold text-primary">AI Agents</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`# Agent decisions
{
    "event_type": "agent_action",
    "agent_id": "support-agent",
    "action": "escalate_to_human",
    "reasoning": "Customer expressed frustration...",
    "confidence": 0.85,
    "alternatives_considered": ["continue_conversation", "offer_refund"]
}

# Tool usage
{
    "event_type": "tool_call",
    "tool_name": "search_knowledge_base",
    "input": {"query": "refund policy"},
    "output": {"results": 3, "top_result": "..."},
    "latency_ms": 234
}`}</code>
                    </pre>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Human Oversight</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`# Human approval
{
    "event_type": "human_approval",
    "action_type": "high_value_refund",
    "ai_recommendation": "approve_refund",
    "human_decision": "approved",
    "reviewer_id": "supervisor_123",
    "review_time_seconds": 45
}

# Human override
{
    "event_type": "human_override",
    "ai_recommendation": "deny_claim",
    "human_decision": "approve_claim",
    "override_reason": "Extenuating circumstances",
    "reviewer_id": "supervisor_123"
}`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};

const PrivacySection = () => {
    const approaches = [
        { approach: "Full logging", description: "Log complete data", tradeoffs: "Maximum traceability, highest privacy risk" },
        { approach: "Pseudonymization", description: "Replace identifiers with tokens", tradeoffs: "Good traceability, reduced risk" },
        { approach: "Hashing", description: "One-way hash of sensitive data", tradeoffs: "Verification possible, not reversible" },
        { approach: "Redaction", description: "Remove sensitive data", tradeoffs: "Lowest risk, reduced traceability" },
        { approach: "Summarization", description: "Log summaries instead of raw data", tradeoffs: "Balance of utility and privacy" },
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
                        Privacy Considerations
                    </h2>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Balancing Logging and Privacy</h3>
                    <p className="mt-2 text-tertiary">Article 12 must be implemented alongside GDPR. This means:</p>
                    <ul className="mt-4 space-y-2 text-tertiary">
                        <li>• <strong>Data minimization</strong> — Log only what's necessary</li>
                        <li>• <strong>Purpose limitation</strong> — Use logs only for stated purposes</li>
                        <li>• <strong>Storage limitation</strong> — Don't retain logs longer than necessary</li>
                        <li>• <strong>Security</strong> — Protect logs appropriately</li>
                    </ul>

                    <h3 className="mt-8 text-lg font-semibold text-primary">PII in Logs</h3>
                    <p className="mt-2 text-tertiary">Options for handling personal data in logs:</p>
                    <div className="mt-4 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full text-sm">
                            <thead className="bg-secondary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Approach</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Description</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Trade-offs</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                {approaches.map((item) => (
                                    <tr key={item.approach}>
                                        <td className="px-4 py-2 font-medium text-primary">{item.approach}</td>
                                        <td className="px-4 py-2 text-tertiary">{item.description}</td>
                                        <td className="px-4 py-2 text-sm text-tertiary">{item.tradeoffs}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Protectron Approach</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`callback = ProtectronCallback(
    system_id="my-agent",
    pii_redaction=True,  # Auto-redact emails, phones, etc.
    pii_types=["email", "phone", "ssn", "credit_card"],
    hash_user_ids=True   # Hash user identifiers
)`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};

const ChecklistSection = () => {
    const checklist = {
        "Logging Capabilities": [
            "Automatic logging enabled (no manual intervention required)",
            "All LLM/model calls logged",
            "All tool/function invocations logged",
            "All agent decisions and actions logged",
            "Session start and end times captured",
            "Database access logged (if applicable)",
            "Input data logged or reconstructable",
            "Human oversight events captured",
        ],
        "Log Content": [
            "Timestamps in ISO 8601 format with timezone",
            "Unique event identifiers",
            "System/model version information",
            "Trace/session grouping",
            "Sufficient detail for traceability",
        ],
        "Log Management": [
            "Retention period defined and documented",
            "Logs stored securely (encryption at rest)",
            "Logs transmitted securely (TLS in transit)",
            "Tamper-evident storage",
            "Access controls implemented",
            "Backup procedures in place",
        ],
        "Privacy Compliance": [
            "PII handling documented",
            "Data minimization applied",
            "GDPR requirements met",
            "Retention aligned with necessity",
        ],
        "Accessibility": [
            "Logs accessible for internal review",
            "Export capability for regulators",
            "Query functionality for investigations",
            "Documentation of log format",
        ],
    };

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
                        Compliance Checklist
                    </h2>
                    <p className="mt-4 text-tertiary">Use this checklist to verify your Article 12 implementation:</p>

                    <div className="mt-8 space-y-6">
                        {Object.entries(checklist).map(([category, items]) => (
                            <div key={category} className="rounded-xl border border-primary bg-primary p-6">
                                <h3 className="font-semibold text-primary">{category}</h3>
                                <ul className="mt-4 space-y-2">
                                    {items.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-tertiary">
                                            <div className="mt-0.5 h-4 w-4 shrink-0 rounded border border-primary" />
                                            {item}
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

const HowProtectronHelpsSection = () => {
    const features = [
        {
            title: "Automatic Logging",
            description: "One line to enable Article 12 compliant logging",
            code: `from protectron.langchain import ProtectronCallback\ncallback = ProtectronCallback(system_id="my-agent")`,
        },
    ];

    const coverage = [
        "LLM calls with full context",
        "Tool and function invocations",
        "Agent decisions and reasoning",
        "Multi-agent collaboration",
        "Human oversight and interventions",
        "Errors and exceptions",
    ];

    const builtIn = [
        "Immutable storage — Append-only, tamper-evident logs",
        "EU data residency — All data in Frankfurt, Germany",
        "Encryption — TLS 1.3 in transit, AES-256 at rest",
        "Retention management — Configurable retention policies",
        "Export capabilities — JSON, CSV for audits",
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
                        How Protectron Helps
                    </h2>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Automatic Logging</h3>
                    <p className="mt-2 text-tertiary">The Protectron SDK automatically captures all required events:</p>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`from protectron.langchain import ProtectronCallback

# One line to enable Article 12 compliant logging
callback = ProtectronCallback(system_id="my-agent")`}</code>
                    </pre>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Comprehensive Coverage</h3>
                    <p className="mt-2 text-tertiary">Every event type required by Article 12:</p>
                    <ul className="mt-4 space-y-2">
                        {coverage.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-tertiary">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Built-in Compliance</h3>
                    <ul className="mt-4 space-y-2">
                        {builtIn.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-tertiary">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Privacy by Design</h3>
                    <ul className="mt-4 space-y-2 text-tertiary">
                        <li>• Automatic PII detection and redaction</li>
                        <li>• Configurable logging levels</li>
                        <li>• User ID hashing</li>
                        <li>• Content summarization options</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

const FAQSection = () => {
    const faqs = [
        {
            q: "Does Article 12 apply to my AI system?",
            a: "Article 12 applies to high-risk AI systems as defined in Annex III. If your AI is used in areas like employment, education, healthcare, or law enforcement, it likely applies. Use our Risk Classification tool to check.",
        },
        {
            q: "What's the minimum I need to log?",
            a: "At minimum: timestamps, what inputs were received, what outputs were produced, and any decisions made. More comprehensive logging is recommended for full traceability.",
        },
        {
            q: "Can I store logs outside the EU?",
            a: "For EU AI Act compliance, storing logs in the EU is strongly recommended. If you must store elsewhere, ensure appropriate data transfer mechanisms are in place.",
        },
        {
            q: "How long must I keep logs?",
            a: "The regulation says \"appropriate to the intended purpose\" and throughout the system's lifetime. We recommend 7 years minimum, consistent with many regulatory expectations.",
        },
        {
            q: "What if logging would reveal trade secrets?",
            a: "You can summarize or hash proprietary information while maintaining traceability. The goal is being able to reconstruct decisions, not expose your algorithms.",
        },
        {
            q: "Does logging affect performance?",
            a: "With async logging (like Protectron's SDK), impact is negligible—typically less than 1ms per event.",
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
                        Frequently Asked Questions
                    </h2>
                    <div className="mt-8 space-y-4">
                        {faqs.map((faq) => (
                            <div key={faq.q} className="rounded-xl border border-primary bg-primary p-4">
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

const RelatedResourcesSection = () => {
    const resources = [
        { title: "Agent Audit Trail", href: "/features/agent-audit-trail", description: "Protectron's logging feature" },
        { title: "SDK Overview", href: "/docs/sdk", description: "How to implement logging" },
        { title: "High-Risk AI Guide", href: "/guide/high-risk", description: "Full high-risk requirements" },
        { title: "Compliance Checklist", href: "/resources/eu-ai-act-checklist", description: "Complete compliance tracking" },
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
                        Summary
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        Article 12 requires high-risk AI systems to have automatic logging that enables traceability. This means capturing:
                    </p>
                    <div className="mt-6 grid gap-4 md:grid-cols-2 text-left">
                        <div className="rounded-lg bg-white/10 p-4">
                            <p className="font-semibold text-white">When</p>
                            <p className="text-sm text-white/70">Operational periods and timestamps</p>
                        </div>
                        <div className="rounded-lg bg-white/10 p-4">
                            <p className="font-semibold text-white">What</p>
                            <p className="text-sm text-white/70">Inputs, outputs, and decisions</p>
                        </div>
                        <div className="rounded-lg bg-white/10 p-4">
                            <p className="font-semibold text-white">How</p>
                            <p className="text-sm text-white/70">The reasoning and process</p>
                        </div>
                        <div className="rounded-lg bg-white/10 p-4">
                            <p className="font-semibold text-white">Who</p>
                            <p className="text-sm text-white/70">Human oversight and interventions</p>
                        </div>
                    </div>
                    <p className="mt-6 text-white/70">
                        Implement logging from day one, and you'll not only comply with Article 12—you'll have better visibility into your AI systems.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/assessment">
                            Start Free Trial
                        </Button>
                        <Button size="xl" color="link-gray" href="mailto:hello@protectron.ai" className="text-white hover:text-white/80">
                            Contact Us →
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default function Article12GuidePage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <OverviewSection />
            <WhyMattersSection />
            <RequirementsSection />
            <ImplementationSection />
            <ExamplesSection />
            <PrivacySection />
            <ChecklistSection />
            <HowProtectronHelpsSection />
            <FAQSection />
            <RelatedResourcesSection />
            <CTASection />
            <Footer />
        </div>
    );
}
