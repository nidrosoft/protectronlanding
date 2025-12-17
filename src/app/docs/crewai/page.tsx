"use client";

import { motion } from "motion/react";
import { CheckCircle2, Terminal, Users, GitBranch, Shield, Settings, Eye, Layers } from "lucide-react";
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
                        Integration Guide
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        CrewAI Integration Guide
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        Complete guide to integrating Protectron with CrewAI for EU AI Act compliance logging of multi-agent systems.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <div className="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-3 font-mono text-sm text-gray-100">
                            <Terminal className="h-4 w-4 text-brand-400" />
                            <span>pip install protectron[crewai]</span>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-tertiary">
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-success-500" />
                            Per-agent action tracking
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-success-500" />
                            Task delegation logging
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-success-500" />
                            Full crew audit trail
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const WhyMultiAgentSection = () => {
    const challenges = [
        { challenge: "Agent attribution", risk: '"Which agent made this decision?"', solution: "Per-agent event tagging" },
        { challenge: "Delegation chains", risk: '"Why did Agent B get this task?"', solution: "Delegation logging" },
        { challenge: "Emergent behavior", risk: '"We didn\'t expect this outcome"', solution: "Full execution trace" },
        { challenge: "Accountability", risk: '"Who\'s responsible?"', solution: "Clear agent → action mapping" },
        { challenge: "Reproducibility", risk: '"Can we explain what happened?"', solution: "Complete audit trail" },
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
                        Why Multi-Agent Compliance Matters
                    </h2>
                    <p className="mt-4 text-tertiary">
                        Multi-agent systems introduce unique compliance challenges. The EU AI Act's Article 12 requires logging of "events relevant to identifying risks." For multi-agent systems, that means tracking every agent's contribution.
                    </p>
                    <div className="mt-8 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full">
                            <thead className="bg-primary">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Challenge</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Risk</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">Protectron Solution</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                {challenges.map((item) => (
                                    <tr key={item.challenge}>
                                        <td className="px-4 py-3 text-sm font-medium text-primary">{item.challenge}</td>
                                        <td className="px-4 py-3 text-sm text-tertiary">{item.risk}</td>
                                        <td className="px-4 py-3 text-sm text-brand-600">{item.solution}</td>
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

const InstallationSection = () => {
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
                        Installation
                    </h2>
                    <pre className="mt-6 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`# Install with CrewAI support
pip install protectron[crewai]

# Or install separately
pip install protectron crewai crewai-tools`}</code>
                    </pre>
                    <div className="mt-6 rounded-xl border border-primary bg-secondary p-4">
                        <p className="font-medium text-primary">Requirements:</p>
                        <ul className="mt-2 space-y-1 text-sm text-tertiary">
                            <li>• Python 3.10+ (CrewAI requirement)</li>
                            <li>• CrewAI 0.28.0+</li>
                            <li>• Protectron 1.0.0+</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const BasicSetupSection = () => {
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
                        Basic Setup
                    </h2>
                    <h3 className="mt-8 text-lg font-semibold text-primary">1. Initialize the Callback</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`from protectron.crewai import ProtectronCallback

# Basic initialization
callback = ProtectronCallback(
    system_id="my-crew"
)

# Full configuration
callback = ProtectronCallback(
    system_id="my-crew",
    environment="production",
    
    # CrewAI-specific options
    log_agent_thoughts=True,      # Log agent reasoning
    log_delegation=True,          # Log task delegation
    log_collaboration=True,       # Log inter-agent communication
    
    # Content options
    log_llm_content=True,         # Log prompts/completions
    log_tool_outputs=True,        # Log tool results
    
    # Privacy
    pii_redaction=True,           # Auto-redact PII
)`}</code>
                    </pre>
                    <h3 className="mt-8 text-lg font-semibold text-primary">2. Add to Your Crew</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`from crewai import Agent, Task, Crew, Process

# Define agents
researcher = Agent(
    role="Research Analyst",
    goal="Find accurate and relevant information",
    backstory="You are an expert researcher with attention to detail.",
    verbose=True
)

writer = Agent(
    role="Content Writer",
    goal="Create engaging and informative content",
    backstory="You are a skilled writer who makes complex topics accessible.",
    verbose=True
)

# Define tasks
research_task = Task(
    description="Research the EU AI Act requirements for high-risk AI systems",
    agent=researcher,
    expected_output="A detailed summary of key requirements"
)

writing_task = Task(
    description="Write a compliance guide based on the research",
    agent=writer,
    expected_output="A clear, actionable compliance guide"
)

# Create crew with Protectron callback
crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, writing_task],
    process=Process.sequential,
    callbacks=[callback]  # Add Protectron here
)

# Run crew - all agent actions logged
result = crew.kickoff()
print(result)`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};

const IntegrationPatternsSection = () => {
    const patterns = [
        {
            icon: Layers,
            title: "Sequential Crew",
            description: "Agents work one after another, each building on the previous agent's work.",
            events: ["crew_start", "task_start", "agent_action", "tool_start/end", "task_end", "crew_end"],
        },
        {
            icon: GitBranch,
            title: "Hierarchical Crew (Manager Delegation)",
            description: "A manager agent delegates tasks to worker agents. Perfect for complex projects.",
            events: ["delegation_start", "delegation_details", "agent_action", "delegation_end"],
        },
        {
            icon: Users,
            title: "Crew with Human Input",
            description: "Agents can request human input at critical decision points for Article 14 compliance.",
            events: ["human_input_requested", "human_approval", "intervention context"],
        },
        {
            icon: Settings,
            title: "Crew with Custom Tools",
            description: "Track tool usage across agents with full attribution.",
            events: ["tool_start", "tool_input", "tool_end", "agent → tool → action mapping"],
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
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Integration Patterns
                    </h2>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {patterns.map((pattern, index) => (
                        <motion.div
                            key={pattern.title}
                            className="rounded-2xl border border-primary bg-secondary p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <pattern.icon className="h-8 w-8 text-brand-600" />
                            <h3 className="mt-4 text-lg font-semibold text-primary">{pattern.title}</h3>
                            <p className="mt-2 text-tertiary">{pattern.description}</p>
                            <div className="mt-4">
                                <p className="text-sm font-medium text-primary">Events logged:</p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {pattern.events.map((event) => (
                                        <span key={event} className="rounded-full bg-brand-100 dark:bg-brand-900/30 px-3 py-1 text-xs font-medium text-brand-700 dark:text-brand-400">
                                            {event}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HumanOversightSection = () => {
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
                        Human Oversight Integration
                    </h2>
                    <p className="mt-4 text-tertiary">
                        For Article 14 compliance, add human oversight to critical crew actions:
                    </p>
                    <pre className="mt-6 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`from crewai import Agent, Task, Crew
from protectron.crewai import ProtectronCallback
from protectron import Protectron

callback = ProtectronCallback(system_id="supervised-crew")
protectron = Protectron(system_id="supervised-crew")

class SupervisedCrew:
    """Crew wrapper with human oversight capabilities."""
    
    def __init__(self, crew: Crew, require_approval_for: list[str] = None):
        self.crew = crew
        self.require_approval_for = require_approval_for or []
    
    def kickoff(self, approver_email: str):
        """Run crew with human oversight checkpoints."""
        
        # Pre-execution approval for sensitive crews
        if "crew_start" in self.require_approval_for:
            if not self._get_approval("crew_start", approver_email):
                return {"status": "rejected", "reason": "Crew execution not approved"}
        
        # Run the crew
        result = self.crew.kickoff()
        
        # Post-execution approval for critical outputs
        if "crew_output" in self.require_approval_for:
            approved = self._get_approval("crew_output", approver_email)
            if approved:
                protectron.log_human_approval(
                    action_type="crew_output",
                    action_details={"output": str(result)[:500]},
                    approved_by=approver_email
                )
            else:
                protectron.log_human_rejection(
                    action_type="crew_output",
                    action_details={"output": str(result)[:500]},
                    rejected_by=approver_email,
                    rejection_reason="Output not approved for use"
                )
        
        return {"status": "approved", "result": result}

# Usage
supervised = SupervisedCrew(
    crew=crew,
    require_approval_for=["crew_output"]
)
result = supervised.kickoff(approver_email="supervisor@company.com")`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};

const AdvancedConfigSection = () => {
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
                        Advanced Configuration
                    </h2>
                    
                    <h3 className="mt-8 text-lg font-semibold text-primary">Per-Agent Logging Configuration</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`callback = ProtectronCallback(
    system_id="granular-logging",
    
    # Agent-specific settings
    agent_config={
        "Research Analyst": {
            "log_thoughts": True,
            "log_tool_outputs": True
        },
        "Content Writer": {
            "log_thoughts": False,  # Don't log creative process
            "log_tool_outputs": True
        }
    }
)`}</code>
                    </pre>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Sensitive Task Handling</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`callback = ProtectronCallback(
    system_id="sensitive-crew",
    
    # Don't log content for specific tasks
    exclude_task_content=[
        "Process customer PII",
        "Handle payment information"
    ],
    
    # Redact specific patterns
    custom_redaction_patterns={
        "credit_card": r"\\d{4}-\\d{4}-\\d{4}-\\d{4}",
        "api_key": r"sk-[a-zA-Z0-9]{32,}"
    }
)`}</code>
                    </pre>

                    <h3 className="mt-8 text-lg font-semibold text-primary">High-Volume Optimization</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`callback = ProtectronCallback(
    system_id="high-volume-crew",
    
    # Reduce logging verbosity
    log_agent_thoughts=False,
    log_llm_content=False,  # Metadata only
    
    # Sample events
    sample_rate=0.5,  # Log 50% of events
    
    # Batch settings
    buffer_size=2000,
    flush_interval=15.0
)`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};

const MonitoringSection = () => {
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
                        Monitoring Crew Performance
                    </h2>
                    <p className="mt-4 text-tertiary">
                        Your Protectron dashboard shows real-time crew execution status:
                    </p>
                    <pre className="mt-6 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`┌─────────────────────────────────────────────────────────────────┐
│                    Crew: content-creation-crew                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Status: Running                    Elapsed: 00:03:45           │
│                                                                  │
│  Agents:                                                         │
│  ┌──────────────────┬────────────┬───────────┬─────────────┐   │
│  │ Agent            │ Status     │ Actions   │ Tools Used  │   │
│  ├──────────────────┼────────────┼───────────┼─────────────┤   │
│  │ Research Analyst │ ✓ Complete │ 12        │ 5           │   │
│  │ Content Writer   │ ● Active   │ 3         │ 0           │   │
│  │ Editor           │ ○ Pending  │ 0         │ 0           │   │
│  └──────────────────┴────────────┴───────────┴─────────────┘   │
│                                                                  │
│  Tasks:                                                          │
│  [████████████████████░░░░░░░░░░] 2/3 Complete                  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}</code>
                    </pre>
                    <h3 className="mt-8 text-lg font-semibold text-primary">Crew Analytics</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`from protectron import Protectron

protectron = Protectron(system_id="my-crew")

# Get crew execution summary
summary = protectron.get_crew_summary(
    crew_run_id="run_abc123",
    include_agent_breakdown=True
)

# Returns:
# {
#   "total_duration": 245.3,
#   "tasks_completed": 3,
#   "total_agent_actions": 28,
#   "total_tool_calls": 12,
#   "agents": {
#     "Research Analyst": {"actions": 15, "tool_calls": 10},
#     "Content Writer": {"actions": 13, "tool_calls": 2}
#   },
#   "errors": 0,
#   "human_interventions": 1
# }`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};

const crewAIFaqs = [
    {
        question: "How does Protectron track which agent did what?",
        answer: "Every event is tagged with the agent's role and ID. The audit trail shows a clear mapping from agent to action to outcome, making it easy to attribute decisions.",
    },
    {
        question: "Can I track task delegation in hierarchical crews?",
        answer: "Yes, set log_delegation=True to capture when a manager agent delegates tasks to workers, including the task description, assigned agent, and context.",
    },
    {
        question: "Does logging affect crew performance?",
        answer: "With async_mode=True (default), logging is non-blocking. For complex crews, typical overhead is less than 1% of total execution time.",
    },
    {
        question: "How do I log human approvals in CrewAI?",
        answer: "Use the Protectron client directly: protectron.log_human_approval() when humans approve crew outputs or intervene in crew execution.",
    },
    {
        question: "Can I exclude certain agents from logging?",
        answer: "Yes, use agent_config to set per-agent logging preferences, or exclude_agents to skip specific agents entirely.",
    },
    {
        question: "What happens if a crew fails mid-execution?",
        answer: "All events up to the failure are logged, including the error details, which agent was active, and the crew state at failure time.",
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
                        Start Logging Your CrewAI Agents
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        Add EU AI Act compliance to your multi-agent systems in minutes.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/docs/quickstart">
                            Quick Start Guide
                        </Button>
                        <Button size="xl" color="link-gray" href="/features/agent-audit-trail" className="text-white hover:text-white/80">
                            Agent Audit Trail →
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default function CrewAIGuidePage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <WhyMultiAgentSection />
            <InstallationSection />
            <BasicSetupSection />
            <IntegrationPatternsSection />
            <HumanOversightSection />
            <AdvancedConfigSection />
            <MonitoringSection />
            <FAQSection faqs={crewAIFaqs} />
            <CTASection />
            <Footer />
        </div>
    );
}
