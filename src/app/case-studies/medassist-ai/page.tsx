"use client";

import { motion } from "motion/react";
import { CheckCircle2, Users, Clock, TrendingUp, FileText, Shield, Code, Award, Building2, AlertTriangle, Heart, Globe, Cpu } from "lucide-react";
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
                        How MedAssist AI Achieved 94% Compliance Across 8 AI Systems in 6 Weeks
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        A Series B healthcare AI company prepared for regulatory audit and expanded to 3 new EU markets with comprehensive EU AI Act compliance—including 3 autonomous agents.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const AtAGlanceSection = () => {
    const stats = [
        { label: "Company", value: "MedAssist AI" },
        { label: "Industry", value: "Healthcare / Clinical AI" },
        { label: "Company Size", value: "180 employees" },
        { label: "Stage", value: "Series B (€32M raised)" },
        { label: "AI Systems", value: "8 (incl. 3 agents)" },
        { label: "Risk Classification", value: "6 High-Risk, 2 Limited" },
        { label: "Time to Compliance", value: "6 weeks" },
        { label: "Markets Entered", value: "Germany, France, Netherlands" },
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
                        MedAssist AI, a Series B healthcare technology company, faced a perfect storm: regulatory authorities announced increased scrutiny of healthcare AI, enterprise hospital systems demanded compliance proof, and the company needed to expand into three new EU markets simultaneously.
                    </p>
                    <p className="mt-4 text-lg text-tertiary">
                        With 8 AI systems—including 3 autonomous clinical agents built on CrewAI—MedAssist needed comprehensive EU AI Act compliance that could handle the complexity of multi-agent healthcare AI.
                    </p>
                    <p className="mt-4 text-lg text-tertiary">
                        Using Protectron, MedAssist achieved <span className="font-semibold text-primary">94% compliance coverage</span> across all systems in <span className="font-semibold text-primary">6 weeks</span>, generated over <span className="font-semibold text-primary">120 pages</span> of documentation, implemented full audit trails for their AI agents, and successfully entered <span className="font-semibold text-primary">Germany, France, and the Netherlands</span> with compliant AI products.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const ProductPortfolioSection = () => {
    const systems = [
        { name: "Clinical Triage Agent", type: "Autonomous Agent (CrewAI)", function: "Triages patient symptoms, routes to appropriate care", risk: "High-Risk" },
        { name: "Diagnostic Support Agent", type: "Autonomous Agent (CrewAI)", function: "Assists physicians with differential diagnosis", risk: "High-Risk" },
        { name: "Care Coordination Agent", type: "Autonomous Agent (CrewAI)", function: "Coordinates care across multiple providers", risk: "High-Risk" },
        { name: "Medical Coding AI", type: "ML Pipeline", function: "Automates medical coding from clinical notes", risk: "High-Risk" },
        { name: "Appointment Optimization", type: "ML Model", function: "Optimizes scheduling and reduces no-shows", risk: "High-Risk" },
        { name: "Clinical Documentation", type: "LLM Application", function: "Generates clinical notes from consultations", risk: "High-Risk" },
        { name: "Patient Communication Bot", type: "Chatbot", function: "Handles routine patient inquiries", risk: "Limited Risk" },
        { name: "Internal Knowledge Search", type: "RAG System", function: "Helps staff find clinical guidelines", risk: "Limited Risk" },
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
                        Product Portfolio
                    </h2>
                    <p className="mt-4 text-tertiary">
                        MedAssist AI develops AI-powered clinical decision support tools used by 150+ healthcare facilities across Europe, processing 2M+ patient interactions monthly.
                    </p>
                    <div className="mt-8 overflow-x-auto">
                        <table className="w-full min-w-[600px]">
                            <thead className="bg-primary">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">System</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Type</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Function</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Risk Level</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                {systems.map((system) => (
                                    <tr key={system.name}>
                                        <td className="px-4 py-3 text-sm font-medium text-primary">{system.name}</td>
                                        <td className="px-4 py-3 text-sm text-tertiary">{system.type}</td>
                                        <td className="px-4 py-3 text-sm text-tertiary">{system.function}</td>
                                        <td className="px-4 py-3">
                                            <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${system.risk === 'High-Risk' ? 'bg-error-100 text-error-700 dark:bg-error-900/30 dark:text-error-400' : 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400'}`}>
                                                {system.risk}
                                            </span>
                                        </td>
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

const ChallengeSection = () => {
    const challenges = [
        {
            title: "Regulatory Scrutiny Announcement",
            description: "The European Commission announced that healthcare AI would be a priority focus for EU AI Act enforcement, with audits beginning Q3 2025.",
        },
        {
            title: "Enterprise Hospital Demands",
            description: "Three major hospital networks—Charité (Berlin), AP-HP (Paris), and Amsterdam UMC—required comprehensive EU AI Act compliance documentation.",
        },
        {
            title: "Market Expansion Timeline",
            description: "Committed to investors to enter Germany, France, and the Netherlands by Q3 2025. Regulatory compliance was a prerequisite.",
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
                        The Challenge: A Perfect Storm
                    </h2>
                    <p className="mt-6 text-tertiary">
                        In early 2025, MedAssist faced three simultaneous challenges:
                    </p>
                    <div className="mt-8 space-y-4">
                        {challenges.map((challenge, index) => (
                            <div key={challenge.title} className="rounded-xl border border-primary bg-secondary p-6">
                                <div className="flex items-start gap-4">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                                        {index + 1}
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-primary">{challenge.title}</h3>
                                        <p className="mt-2 text-tertiary">{challenge.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 rounded-xl border-l-4 border-brand-600 bg-secondary p-6">
                        <p className="italic text-tertiary">
                            "When the Commission announced healthcare AI as a priority, our board asked one question: 'Are we ready for an audit?' The honest answer was no."
                        </p>
                        <p className="mt-4 text-sm font-medium text-primary">— Dr. Elena Vasquez, Chief Medical Officer</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ComplexitySection = () => {
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
                        The Complexity Problem
                    </h2>
                    
                    <h3 className="mt-8 text-lg font-semibold text-primary">Autonomous Agents</h3>
                    <p className="mt-4 text-tertiary">
                        Three of their most critical systems were autonomous agents built on CrewAI. Traditional compliance approaches didn't address agent-specific requirements.
                    </p>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`Clinical Triage Agent
├── Symptom Analyzer Agent
├── Risk Assessment Agent  
├── Routing Decision Agent
└── Human Escalation Handler

Each agent makes autonomous decisions about patient care routing.`}</code>
                    </pre>
                    
                    <h3 className="mt-8 text-lg font-semibold text-primary">Agent-Specific Requirements</h3>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2 text-tertiary">
                            <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0 text-warning-500" />
                            Logging multi-agent decision chains
                        </li>
                        <li className="flex items-start gap-2 text-tertiary">
                            <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0 text-warning-500" />
                            Tracking inter-agent communication
                        </li>
                        <li className="flex items-start gap-2 text-tertiary">
                            <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0 text-warning-500" />
                            Capturing human oversight interventions
                        </li>
                        <li className="flex items-start gap-2 text-tertiary">
                            <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0 text-warning-500" />
                            Auditing autonomous actions
                        </li>
                    </ul>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Interconnected Systems</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`Patient Interaction Flow:

Patient → Communication Bot → Triage Agent → Diagnostic Agent
                                    ↓
                           Care Coordination Agent
                                    ↓
                        Clinical Documentation AI
                                    ↓
                           Medical Coding AI`}</code>
                    </pre>
                    <p className="mt-4 text-tertiary">
                        Compliance needed to cover the entire flow, not just individual components.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const FailedApproachesSection = () => {
    const approaches = [
        {
            title: "Healthcare Compliance Consultants",
            quote: "€420,000",
            timeline: "12-18 months",
            limitation: "No expertise in autonomous AI agents",
        },
        {
            title: "DIY with Legal Support",
            quote: "€85,000 in legal fees",
            timeline: "6 weeks (incomplete)",
            limitation: "Agent systems remained undocumented—too complex",
        },
        {
            title: "Enterprise GRC Platforms",
            quote: "€150,000-300,000/year",
            timeline: "6-12 months",
            limitation: "None had EU AI Act modules or agent logging",
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
                        Failed Approaches
                    </h2>
                    <div className="mt-8 space-y-6">
                        {approaches.map((approach) => (
                            <div key={approach.title} className="rounded-xl border border-primary bg-secondary p-6">
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
                                <p className="mt-4 text-sm text-tertiary"><span className="font-medium">Limitation:</span> {approach.limitation}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 rounded-xl border-l-4 border-brand-600 bg-secondary p-6">
                        <p className="italic text-tertiary">
                            "We tried everything. Consultants didn't understand agents. GRC platforms didn't understand EU AI Act. Internal efforts couldn't scale. We were spending money and getting nowhere."
                        </p>
                        <p className="mt-4 text-sm font-medium text-primary">— James Morrison, VP Compliance</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SolutionSection = () => {
    const capabilities = [
        { requirement: "8 AI systems, mixed risk levels", solution: "Multi-system dashboard with per-system tracking" },
        { requirement: "3 autonomous agents on CrewAI", solution: "CrewAI SDK with per-agent audit trails" },
        { requirement: "Healthcare-specific documentation", solution: "Document generation with medical AI context" },
        { requirement: "Hospital procurement requirements", solution: "Audit packages and certification badges" },
        { requirement: "Multi-market expansion", solution: "Multi-language support (DE, FR, NL)" },
        { requirement: "Regulatory audit preparation", solution: "Evidence management and compliance reports" },
        { requirement: "Speed to compliance", solution: "6-week implementation vs. 12-18 months" },
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
                        The Solution: Protectron
                    </h2>
                    <p className="mt-6 text-tertiary">
                        MedAssist's CTO discovered Protectron while researching compliance solutions for CrewAI. The Agent Audit Trail feature was the differentiator.
                    </p>
                    <div className="mt-6 rounded-xl border-l-4 border-brand-600 bg-primary p-6">
                        <p className="italic text-tertiary">
                            "Every other solution treated AI as a black box. Protectron understood that agents are different—they make decisions, delegate tasks, collaborate. That's exactly what we needed to log."
                        </p>
                        <p className="mt-4 text-sm font-medium text-primary">— Dr. Michael Torres, CTO</p>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-primary">Why Protectron Was the Right Fit</h3>
                    <div className="mt-6 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full">
                            <thead className="bg-primary">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">MedAssist Requirement</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Protectron Solution</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-primary bg-secondary">
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
    const phases = [
        {
            title: "Phase 1: Foundation (Weeks 1-2)",
            goal: "Establish compliance infrastructure and classify all systems",
            activities: [
                { activity: "Platform setup and team training", output: "8 users onboarded" },
                { activity: "Register all 8 AI systems", output: "Complete system inventory" },
                { activity: "Risk classification for each system", output: "6 high-risk, 2 limited risk" },
                { activity: "Requirement mapping", output: "847 total requirements" },
                { activity: "Evidence repository setup", output: "Existing docs uploaded" },
            ],
        },
        {
            title: "Phase 2: Agent Integration (Weeks 3-4)",
            goal: "Implement audit trails for autonomous agents",
            activities: [
                { activity: "CrewAI SDK integration", output: "3 agents instrumented" },
                { activity: "Per-agent audit trail setup", output: "Full decision logging" },
                { activity: "Human oversight integration", output: "Approval workflows active" },
                { activity: "PII redaction configuration", output: "HIPAA/GDPR compliant" },
            ],
        },
        {
            title: "Phase 3: Documentation & Evidence (Weeks 5-6)",
            goal: "Generate all required documentation and compile audit packages",
            activities: [
                { activity: "Technical documentation (8 systems)", output: "64 pages" },
                { activity: "Risk management system (6 high-risk)", output: "24 pages" },
                { activity: "Data governance documentation", output: "12 pages" },
                { activity: "Human oversight procedures (3 agents)", output: "8 pages" },
                { activity: "Policies and transparency docs", output: "16 pages" },
            ],
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
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Implementation: A Phased Approach
                    </h2>
                    <div className="mt-8 space-y-8">
                        {phases.map((phase) => (
                            <div key={phase.title} className="rounded-xl border border-primary bg-secondary p-6">
                                <h3 className="text-lg font-semibold text-primary">{phase.title}</h3>
                                <p className="mt-2 text-sm text-tertiary italic">{phase.goal}</p>
                                <div className="mt-4 overflow-hidden rounded-lg border border-primary">
                                    <table className="w-full">
                                        <thead className="bg-primary">
                                            <tr>
                                                <th className="px-4 py-2 text-left text-sm font-semibold text-primary">Activity</th>
                                                <th className="px-4 py-2 text-left text-sm font-semibold text-primary">Output</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-primary bg-secondary">
                                            {phase.activities.map((item) => (
                                                <tr key={item.activity}>
                                                    <td className="px-4 py-2 text-sm text-tertiary">{item.activity}</td>
                                                    <td className="px-4 py-2 text-sm font-medium text-brand-600">{item.output}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const AgentIntegrationSection = () => {
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
                        CrewAI Agent Integration
                    </h2>
                    <pre className="mt-6 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`from crewai import Agent, Task, Crew
from protectron.crewai import ProtectronCallback

# Initialize Protectron callback with healthcare-specific settings
callback = ProtectronCallback(
    system_id="clinical-triage-agent",
    environment="production",
    
    # Healthcare-specific configuration
    log_agent_thoughts=True,      # Capture clinical reasoning
    log_delegation=True,          # Track agent-to-agent handoffs
    log_collaboration=True,       # Record multi-agent decisions
    pii_redaction=True,           # HIPAA/GDPR compliance
    
    # Human oversight tracking
    human_oversight_required=["routing_decision", "escalation"],
)

triage_crew = Crew(
    agents=[symptom_analyzer, risk_assessor, routing_agent],
    tasks=[analyze_task, assess_task, route_task],
    callbacks=[callback]  # Full audit trail
)`}</code>
                    </pre>
                    
                    <h3 className="mt-8 text-lg font-semibold text-primary">What the Audit Trail Captured</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`Triage Session: TRG-2025-001234
├── 09:14:32 - Symptom Analyzer: Received patient input
│   └── Analysis: Identified 3 potential conditions
│   └── Confidence: 87%
│
├── 09:14:35 - Risk Assessor: Evaluated urgency
│   └── Risk Level: MODERATE
│   └── Reasoning: "Symptoms consistent with non-emergency..."
│
├── 09:14:38 - Routing Decision: Determined care pathway
│   └── Decision: Route to telehealth consultation
│   └── Alternatives considered: [ER, Urgent Care, Scheduled]
│
├── 09:14:40 - Human Oversight: Physician review
│   └── Action: APPROVED
│   └── Reviewer: Dr. [REDACTED]
│
└── 09:14:42 - Session Complete
    └── Total agents involved: 3
    └── Human interventions: 1
    └── Audit trail: Complete`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};

const ResultsSection = () => {
    const complianceMetrics = [
        { metric: "Overall compliance score", result: "94%" },
        { metric: "Requirements completed", result: "796/847" },
        { metric: "Documentation generated", result: "124 pages" },
        { metric: "Evidence items linked", result: "89 documents" },
        { metric: "Agent audit events logged", result: "2.4M+" },
    ];

    const hospitalDeals = [
        {
            hospital: "Charité (Berlin)",
            value: "€1.8M (3-year)",
            deployment: "Clinical Triage + Diagnostic Support agents",
            factor: "Audit trail demonstration convinced medical informatics team",
        },
        {
            hospital: "AP-HP (Paris)",
            value: "€2.1M (3-year)",
            deployment: "Full platform (6 systems)",
            factor: "French-language documentation and CNIL alignment",
        },
        {
            hospital: "Amsterdam UMC",
            value: "€1.2M (3-year)",
            deployment: "Care Coordination + Documentation AI",
            factor: "Dutch healthcare authority (IGJ) pre-approval",
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
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        The Results
                    </h2>
                    
                    <h3 className="mt-8 text-lg font-semibold text-primary">Compliance Metrics</h3>
                    <div className="mt-4 grid gap-4 md:grid-cols-5">
                        {complianceMetrics.map((item) => (
                            <div key={item.metric} className="rounded-xl border border-primary bg-secondary p-4 text-center">
                                <p className="text-2xl font-bold text-brand-600">{item.result}</p>
                                <p className="mt-1 text-sm text-tertiary">{item.metric}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="mt-12 text-lg font-semibold text-primary">Hospital Network Outcomes</h3>
                    <div className="mt-4 space-y-4">
                        {hospitalDeals.map((deal) => (
                            <div key={deal.hospital} className="rounded-xl border border-primary bg-secondary p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-success-500" />
                                        <h4 className="text-lg font-semibold text-primary">{deal.hospital}</h4>
                                    </div>
                                    <span className="text-2xl font-bold text-brand-600">{deal.value}</span>
                                </div>
                                <p className="mt-4 text-sm text-tertiary"><span className="font-medium">Deployment:</span> {deal.deployment}</p>
                                <p className="mt-2 text-sm text-tertiary"><span className="font-medium">Key Factor:</span> {deal.factor}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="mt-12 text-lg font-semibold text-primary">Market Expansion</h3>
                    <div className="mt-4 grid gap-4 md:grid-cols-3">
                        <div className="rounded-xl border border-primary bg-secondary p-4 text-center">
                            <Globe className="mx-auto h-8 w-8 text-brand-600" />
                            <p className="mt-2 font-semibold text-primary">Germany</p>
                            <p className="text-sm text-tertiary">8 weeks to first deal</p>
                        </div>
                        <div className="rounded-xl border border-primary bg-secondary p-4 text-center">
                            <Globe className="mx-auto h-8 w-8 text-brand-600" />
                            <p className="mt-2 font-semibold text-primary">France</p>
                            <p className="text-sm text-tertiary">10 weeks to first deal</p>
                        </div>
                        <div className="rounded-xl border border-primary bg-secondary p-4 text-center">
                            <Globe className="mx-auto h-8 w-8 text-brand-600" />
                            <p className="mt-2 font-semibold text-primary">Netherlands</p>
                            <p className="text-sm text-tertiary">12 weeks to first deal</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ROISection = () => {
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
                        ROI Calculation
                    </h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <h3 className="text-lg font-semibold text-primary">Investment</h3>
                            <div className="mt-4 space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-tertiary">Protectron annual cost (Scale)</span>
                                    <span className="font-medium text-primary">€11,988</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-tertiary">Implementation effort</span>
                                    <span className="font-medium text-primary">~€90,000</span>
                                </div>
                                <div className="border-t border-primary pt-3 flex justify-between">
                                    <span className="font-semibold text-primary">Total investment</span>
                                    <span className="font-bold text-primary">~€102,000</span>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl border border-brand-600 bg-brand-50 dark:bg-brand-900/20 p-6">
                            <h3 className="text-lg font-semibold text-primary">Return</h3>
                            <div className="mt-4 space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-tertiary">Contract value closed</span>
                                    <span className="font-medium text-primary">€5,100,000</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-tertiary">Avoided consultant costs</span>
                                    <span className="font-medium text-primary">€420,000</span>
                                </div>
                                <div className="border-t border-brand-200 dark:border-brand-800 pt-3 flex justify-between">
                                    <span className="font-semibold text-primary">ROI</span>
                                    <span className="text-3xl font-bold text-brand-600">5,400%</span>
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
            quote: "We thought agent compliance would be our biggest challenge. It turned out to be our biggest differentiator. Competitors couldn't show what their agents were doing. We could show every decision, every delegation, every human intervention. That's why we won the hospital deals.",
            author: "Dr. Michael Torres",
            role: "CTO, MedAssist AI",
        },
        {
            quote: "In healthcare, explainability isn't optional—it's ethical. The EU AI Act formalized what good medical AI should have been doing all along. Protectron helped us prove we were doing it right.",
            author: "Dr. Elena Vasquez",
            role: "Chief Medical Officer, MedAssist AI",
        },
        {
            quote: "The agent audit trail changed everything. Before, I had to ask engineering 'what does this AI do?' and hope for a good answer. Now I can show anyone—regulators, hospitals, our board—exactly what every agent does, in real-time.",
            author: "James Morrison",
            role: "VP Compliance, MedAssist AI",
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
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        What the Team Says
                    </h2>
                    <div className="mt-8 space-y-6">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.author} className="rounded-xl border border-primary bg-secondary p-6">
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

const KeyTakeawaysSection = () => {
    const takeaways = [
        "Agent compliance requires agent-aware tools — Generic GRC platforms can't handle multi-agent workflows",
        "Healthcare AI will be scrutinized first — Being prepared is a competitive advantage",
        "Compliance enables market expansion — Three new markets opened because of compliance readiness",
        "Document the journey, not just the destination — Agents make multiple decisions; log them all",
        "Human oversight must be verifiable — Saying you have oversight isn't enough; prove it",
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
                    <div className="mt-8 space-y-4">
                        {takeaways.map((takeaway, index) => (
                            <div key={index} className="flex items-start gap-4 rounded-xl border border-primary bg-primary p-4">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                                    {index + 1}
                                </span>
                                <p className="text-tertiary">{takeaway}</p>
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
                        Ready to Prepare for Healthcare AI Compliance?
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        MedAssist went from compliance uncertainty to €5.1M in hospital contracts and expansion to 3 new markets. See how Protectron can help your healthcare AI company.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/assessment">
                            Start Free Trial
                        </Button>
                        <Button size="xl" color="link-gray" href="/features/agent-audit-trail" className="text-white hover:text-white/80">
                            View Agent Audit Trail →
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-white/60">No credit card required</p>
                </motion.div>
            </div>
        </section>
    );
};

export default function MedAssistAICaseStudyPage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <AtAGlanceSection />
            <ExecutiveSummarySection />
            <ProductPortfolioSection />
            <ChallengeSection />
            <ComplexitySection />
            <FailedApproachesSection />
            <SolutionSection />
            <ImplementationSection />
            <AgentIntegrationSection />
            <ResultsSection />
            <ROISection />
            <TestimonialsSection />
            <KeyTakeawaysSection />
            <CTASection />
            <Footer />
        </div>
    );
}
