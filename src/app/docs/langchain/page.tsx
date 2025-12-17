"use client";

import { motion } from "motion/react";
import { CheckCircle2, Terminal, Code, Zap, Shield, Settings, Bug, GitBranch } from "lucide-react";
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
                        LangChain Integration Guide
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        Complete guide to integrating Protectron with LangChain for EU AI Act compliance logging.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <div className="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-3 font-mono text-sm text-gray-100">
                            <Terminal className="h-4 w-4 text-brand-400" />
                            <span>pip install protectron[langchain]</span>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-tertiary">
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-success-500" />
                            LangChain 0.1.0+ supported
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-success-500" />
                            No code changes required
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-success-500" />
                            Works with LCEL & LangGraph
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const OverviewSection = () => {
    const captures = [
        "All LLM calls (prompts, completions, token usage)",
        "Tool/function invocations and results",
        "Agent reasoning steps and decisions",
        "Chain execution flow",
        "Retriever queries and results",
        "Errors and exceptions",
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
                        Overview
                    </h2>
                    <p className="mt-4 text-tertiary">
                        Protectron's LangChain integration uses LangChain's native callback system to automatically capture:
                    </p>
                    <ul className="mt-6 space-y-3">
                        {captures.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-tertiary">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-6 text-lg font-medium text-primary">
                        No changes to your existing code required — just add our callback.
                    </p>
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
                        <code>{`# Install with LangChain support
pip install protectron[langchain]

# Or install separately
pip install protectron langchain langchain-openai`}</code>
                    </pre>
                    <div className="mt-6 rounded-xl border border-primary bg-secondary p-4">
                        <p className="font-medium text-primary">Requirements:</p>
                        <ul className="mt-2 space-y-1 text-sm text-tertiary">
                            <li>• Python 3.8+</li>
                            <li>• LangChain 0.1.0+ (also supports 0.2.x)</li>
                            <li>• langchain-core, langchain-community (automatically installed)</li>
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
                        <code>{`from protectron.langchain import ProtectronCallback

# Basic initialization (uses PROTECTRON_API_KEY env var)
callback = ProtectronCallback(
    system_id="my-langchain-app"
)

# Full configuration
callback = ProtectronCallback(
    system_id="my-langchain-app",
    environment="production",        # production, staging, development
    
    # Content logging
    log_llm_content=True,           # Log prompts and completions
    log_tool_inputs=True,           # Log tool parameters
    log_tool_outputs=True,          # Log tool results
    
    # Privacy
    pii_redaction=True,             # Auto-redact PII
    hash_user_ids=True,             # Hash user identifiers
    
    # Performance
    sample_rate=1.0,                # 1.0 = log everything
    async_mode=True,                # Non-blocking (recommended)
)`}</code>
                    </pre>
                    <h3 className="mt-8 text-lg font-semibold text-primary">2. Add to Your LangChain Components</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`from langchain_openai import ChatOpenAI

# Option 1: Add to LLM
llm = ChatOpenAI(
    model="gpt-5.2",
    callbacks=[callback]
)

# Option 2: Add at invocation time
result = chain.invoke(
    {"input": "Hello"},
    config={"callbacks": [callback]}
)

# Option 3: Add to executor/runner
executor = AgentExecutor(
    agent=agent,
    tools=tools,
    callbacks=[callback]
)`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};

const IntegrationPatternsSection = () => {
    const patterns = [
        {
            title: "Simple LLM Chain",
            description: "Basic chain with prompt, LLM, and output parser.",
            code: `from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from protectron.langchain import ProtectronCallback

callback = ProtectronCallback(system_id="simple-chain")

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant."),
    ("user", "{input}")
])

llm = ChatOpenAI(model="gpt-5.2")
chain = prompt | llm | StrOutputParser()

result = chain.invoke(
    {"input": "Explain EU AI Act in one sentence"},
    config={"callbacks": [callback]}
)`,
            events: ["chain_start", "llm_start", "llm_end", "chain_end"],
        },
        {
            title: "ReAct Agent",
            description: "Agent with tools that reasons and acts.",
            code: `from langchain.agents import create_react_agent, AgentExecutor
from langchain_openai import ChatOpenAI
from langchain.tools import tool
from langchain import hub
from protectron.langchain import ProtectronCallback

callback = ProtectronCallback(
    system_id="react-agent",
    environment="production"
)

@tool
def search_database(query: str) -> str:
    """Search the internal database for information."""
    return f"Found results for: {query}"

tools = [search_database]

llm = ChatOpenAI(model="gpt-5.2", temperature=0)
prompt = hub.pull("hwchase17/react")
agent = create_react_agent(llm, tools, prompt)

executor = AgentExecutor(
    agent=agent,
    tools=tools,
    callbacks=[callback],
    verbose=True
)

result = executor.invoke({"input": "Search for AI compliance"})`,
            events: ["agent_start", "llm_start/end", "tool_start", "tool_end", "agent_action", "agent_finish"],
        },
        {
            title: "RAG (Retrieval-Augmented Generation)",
            description: "Combine retrieval with generation for grounded responses.",
            code: `from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser
from protectron.langchain import ProtectronCallback

callback = ProtectronCallback(
    system_id="rag-system",
    log_tool_outputs=True,  # Log retrieved documents
)

embeddings = OpenAIEmbeddings()
vectorstore = Chroma(embedding_function=embeddings)
retriever = vectorstore.as_retriever(search_kwargs={"k": 4})

template = """Answer based on this context:
{context}

Question: {question}"""

prompt = ChatPromptTemplate.from_template(template)
llm = ChatOpenAI(model="gpt-5.2")

def format_docs(docs):
    return "\\n\\n".join(doc.page_content for doc in docs)

rag_chain = (
    {"context": retriever | format_docs, "question": RunnablePassthrough()}
    | prompt | llm | StrOutputParser()
)

answer = rag_chain.invoke(
    "What are high-risk AI requirements?",
    config={"callbacks": [callback]}
)`,
            events: ["retriever_start", "retriever_end", "llm_start/end"],
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
                        Integration Patterns
                    </h2>
                    <div className="mt-12 space-y-12">
                        {patterns.map((pattern, index) => (
                            <motion.div
                                key={pattern.title}
                                className="rounded-2xl border border-primary bg-secondary p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3 className="text-xl font-semibold text-primary">{pattern.title}</h3>
                                <p className="mt-2 text-tertiary">{pattern.description}</p>
                                <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                                    <code>{pattern.code}</code>
                                </pre>
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
                </motion.div>
            </div>
        </section>
    );
};

const AdvancedConfigSection = () => {
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
                        Advanced Configuration
                    </h2>
                    
                    <h3 className="mt-8 text-lg font-semibold text-primary">Selective Logging</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`callback = ProtectronCallback(
    system_id="selective-logging",
    
    # Don't log prompts/completions (metadata only)
    log_llm_content=False,
    
    # Skip specific tools
    exclude_tools=["internal_search", "debug_tool"],
    
    # Only log certain event types
    include_event_types=[
        "agent_action",
        "tool_start",
        "tool_end",
        "agent_finish"
    ]
)`}</code>
                    </pre>

                    <h3 className="mt-8 text-lg font-semibold text-primary">PII Redaction</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`callback = ProtectronCallback(
    system_id="pii-safe",
    pii_redaction=True,
    pii_types=[
        "email",
        "phone",
        "ssn",
        "credit_card",
        "address"
    ]
)

# Before logging: "Contact john@example.com at 555-123-4567"
# After redaction: "Contact [EMAIL] at [PHONE]"`}</code>
                    </pre>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Custom Metadata</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`callback = ProtectronCallback(
    system_id="metadata-rich",
    include_metadata={
        "team": "customer-success",
        "version": "2.1.0",
        "region": "eu-west-1"
    }
)

# Or add per-invocation metadata
result = executor.invoke(
    {"input": "Hello"},
    config={
        "callbacks": [callback],
        "metadata": {
            "user_id": "user_123",
            "session_id": "sess_abc"
        }
    }
)`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};

const TroubleshootingSection = () => {
    const issues = [
        {
            problem: "Events Not Appearing",
            solutions: [
                "Check API key: Ensure PROTECTRON_API_KEY environment variable is set",
                "Enable debug mode: callback = ProtectronCallback(system_id='test', debug=True)",
                "Check system ID matches your dashboard exactly",
                "Force flush: callback.flush()",
            ],
        },
        {
            problem: "Missing Events",
            solutions: [
                "Ensure callback is attached to the chain/agent",
                "Check sampling rate is set to 1.0 for full logging",
                "Verify callback is in the config parameter",
            ],
        },
        {
            problem: "High Latency",
            solutions: [
                "Enable async mode: async_mode=True",
                "Increase buffer for high volume: buffer_size=5000",
                "Adjust flush interval: flush_interval=15.0",
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
                        Troubleshooting
                    </h2>
                    <div className="mt-8 space-y-6">
                        {issues.map((issue) => (
                            <div key={issue.problem} className="rounded-xl border border-primary bg-secondary p-6">
                                <h3 className="text-lg font-semibold text-primary">{issue.problem}</h3>
                                <ul className="mt-4 space-y-2">
                                    {issue.solutions.map((solution, index) => (
                                        <li key={index} className="flex items-start gap-2 text-sm text-tertiary">
                                            <span className="mt-1 text-brand-600">→</span>
                                            {solution}
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

const langchainFaqs = [
    {
        question: "Does Protectron work with LangChain 0.2.x?",
        answer: "Yes, Protectron supports both LangChain 0.1.x and 0.2.x. The callback API is compatible with both versions.",
    },
    {
        question: "Can I use Protectron with LangGraph?",
        answer: "Yes, LangGraph is fully supported. Add the callback to your graph compilation or individual node invocations.",
    },
    {
        question: "Does logging affect my agent's performance?",
        answer: "With async_mode=True (default), logging is non-blocking and adds less than 5ms latency. For high-volume applications, use sampling.",
    },
    {
        question: "Can I use Protectron alongside LangSmith?",
        answer: "Absolutely. Both callbacks can run simultaneously. Use LangSmith for debugging and development, Protectron for compliance.",
    },
    {
        question: "How do I log custom events?",
        answer: "Use the Protectron client directly: protectron.log_event('custom_event', {'key': 'value'}). This works alongside the LangChain callback.",
    },
    {
        question: "What happens if logging fails?",
        answer: "Events are buffered locally and retried. If the buffer fills, oldest events are dropped. Enable persist_on_failure to write to disk.",
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
                        Start Logging Your LangChain Apps
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        Add EU AI Act compliance to your LangChain applications in minutes.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/docs/quickstart">
                            Quick Start Guide
                        </Button>
                        <Button size="xl" color="link-gray" href="/docs/crewai" className="text-white hover:text-white/80">
                            CrewAI Guide →
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default function LangChainGuidePage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <OverviewSection />
            <InstallationSection />
            <BasicSetupSection />
            <IntegrationPatternsSection />
            <AdvancedConfigSection />
            <TroubleshootingSection />
            <FAQSection faqs={langchainFaqs} />
            <CTASection />
            <Footer />
        </div>
    );
}
