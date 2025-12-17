"use client";

import { motion } from "motion/react";
import { Code, Key, Shield, Clock, AlertTriangle, CheckCircle2, Terminal, BookOpen, ArrowRight, Globe, Webhook } from "lucide-react";
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
                        API Reference
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        Complete reference for the Protectron REST API (v1).
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2">
                        <Globe className="h-4 w-4 text-brand-600" />
                        <code className="text-sm text-primary">https://api.protectron.ai/v1</code>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const OverviewSection = () => {
    const capabilities = [
        "Submit events from custom integrations",
        "Query audit trail data",
        "Generate compliance reports",
        "Manage AI systems and configurations",
        "Set up webhooks for real-time notifications",
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
                    <p className="mt-6 text-tertiary">
                        The Protectron API allows you to programmatically interact with your compliance data. Use it to:
                    </p>
                    <ul className="mt-4 space-y-2">
                        {capabilities.map((cap) => (
                            <li key={cap} className="flex items-start gap-2 text-tertiary">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                                {cap}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 rounded-lg bg-primary p-4">
                        <p className="text-sm text-tertiary"><strong>API Version:</strong> <code className="text-brand-600">v1</code> (stable)</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const AuthenticationSection = () => {
    const keyTypes = [
        { prefix: "pk_live_", type: "Production", useCase: "Live applications" },
        { prefix: "pk_test_", type: "Test", useCase: "Development and testing" },
    ];

    const scopes = [
        { scope: "events:write", description: "Submit events" },
        { scope: "events:read", description: "Read events and traces" },
        { scope: "systems:read", description: "Read system configurations" },
        { scope: "systems:write", description: "Modify system configurations" },
        { scope: "reports:read", description: "Generate and download reports" },
        { scope: "admin", description: "Full access" },
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
                        Authentication
                    </h2>
                    <p className="mt-6 text-tertiary">
                        All API requests require authentication using an API key.
                    </p>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Getting Your API Key</h3>
                    <ol className="mt-4 space-y-2 text-tertiary list-decimal list-inside">
                        <li>Go to <a href="https://dashboard.protectron.ai" className="text-brand-600 hover:underline">dashboard.protectron.ai</a></li>
                        <li>Navigate to <strong>Settings → API Keys</strong></li>
                        <li>Click <strong>Create New Key</strong></li>
                        <li>Copy the key (you won't see it again)</li>
                    </ol>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Using Your API Key</h3>
                    <p className="mt-2 text-tertiary">Include your API key in the <code className="text-brand-600">Authorization</code> header:</p>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`curl https://api.protectron.ai/v1/systems \\
  -H "Authorization: Bearer pk_live_xxxxxxxxxxxxxxxx"`}</code>
                    </pre>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Key Types</h3>
                    <div className="mt-4 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full text-sm">
                            <thead className="bg-secondary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Key Prefix</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Type</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Use Case</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                {keyTypes.map((key) => (
                                    <tr key={key.prefix}>
                                        <td className="px-4 py-3 font-mono text-brand-600">{key.prefix}</td>
                                        <td className="px-4 py-3 text-primary">{key.type}</td>
                                        <td className="px-4 py-3 text-tertiary">{key.useCase}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Key Scopes</h3>
                    <div className="mt-4 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full text-sm">
                            <thead className="bg-secondary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Scope</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                {scopes.map((scope) => (
                                    <tr key={scope.scope}>
                                        <td className="px-4 py-3 font-mono text-brand-600">{scope.scope}</td>
                                        <td className="px-4 py-3 text-tertiary">{scope.description}</td>
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

const RateLimitsSection = () => {
    const limits = [
        { plan: "Starter", perMinute: "60", perDay: "10,000" },
        { plan: "Growth", perMinute: "300", perDay: "100,000" },
        { plan: "Scale", perMinute: "1,000", perDay: "500,000" },
        { plan: "Enterprise", perMinute: "Custom", perDay: "Custom" },
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
                        Rate Limits
                    </h2>
                    <div className="mt-8 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full text-sm">
                            <thead className="bg-primary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Plan</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Requests/minute</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Requests/day</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-primary bg-secondary">
                                {limits.map((limit) => (
                                    <tr key={limit.plan}>
                                        <td className="px-4 py-3 font-medium text-primary">{limit.plan}</td>
                                        <td className="px-4 py-3 text-tertiary">{limit.perMinute}</td>
                                        <td className="px-4 py-3 text-tertiary">{limit.perDay}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-sm text-tertiary">
                        Rate limit headers are included in every response:
                    </p>
                    <pre className="mt-2 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`X-RateLimit-Limit: 300
X-RateLimit-Remaining: 299
X-RateLimit-Reset: 1702742400`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};

const ErrorsSection = () => {
    const errors = [
        { code: "200", description: "Success" },
        { code: "201", description: "Created" },
        { code: "400", description: "Bad Request — Invalid parameters" },
        { code: "401", description: "Unauthorized — Invalid or missing API key" },
        { code: "403", description: "Forbidden — Insufficient permissions" },
        { code: "404", description: "Not Found — Resource doesn't exist" },
        { code: "429", description: "Too Many Requests — Rate limited" },
        { code: "500", description: "Internal Server Error" },
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
                        Errors
                    </h2>
                    <p className="mt-6 text-tertiary">The API uses standard HTTP status codes:</p>
                    <div className="mt-4 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full text-sm">
                            <thead className="bg-secondary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Code</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                {errors.map((error) => (
                                    <tr key={error.code}>
                                        <td className="px-4 py-3 font-mono text-brand-600">{error.code}</td>
                                        <td className="px-4 py-3 text-tertiary">{error.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-6 text-tertiary">Error responses include details:</p>
                    <pre className="mt-2 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`{
  "error": {
    "code": "invalid_parameter",
    "message": "system_id is required",
    "param": "system_id",
    "doc_url": "https://docs.protectron.ai/api#events-create"
  }
}`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};

const EndpointsSection = () => {
    const endpoints = [
        {
            category: "Systems",
            items: [
                { method: "GET", path: "/v1/systems", description: "List all AI systems" },
                { method: "GET", path: "/v1/systems/{system_id}", description: "Get system details" },
                { method: "POST", path: "/v1/systems", description: "Create a new system" },
                { method: "PATCH", path: "/v1/systems/{system_id}", description: "Update a system" },
                { method: "DELETE", path: "/v1/systems/{system_id}", description: "Delete a system" },
            ],
        },
        {
            category: "Events",
            items: [
                { method: "POST", path: "/v1/events", description: "Create a single event" },
                { method: "POST", path: "/v1/events/batch", description: "Create events in batch (up to 1000)" },
                { method: "GET", path: "/v1/events", description: "List events with filters" },
                { method: "GET", path: "/v1/events/{event_id}", description: "Get event details" },
            ],
        },
        {
            category: "Traces",
            items: [
                { method: "GET", path: "/v1/traces", description: "List traces" },
                { method: "GET", path: "/v1/traces/{trace_id}", description: "Get trace with events" },
            ],
        },
        {
            category: "Reports",
            items: [
                { method: "POST", path: "/v1/reports", description: "Generate a compliance report" },
                { method: "GET", path: "/v1/reports/{report_id}", description: "Get report status" },
                { method: "GET", path: "/v1/reports/{report_id}/download", description: "Download report file" },
            ],
        },
        {
            category: "Webhooks",
            items: [
                { method: "POST", path: "/v1/webhooks", description: "Create a webhook" },
                { method: "GET", path: "/v1/webhooks", description: "List webhooks" },
                { method: "DELETE", path: "/v1/webhooks/{webhook_id}", description: "Delete a webhook" },
            ],
        },
    ];

    const getMethodColor = (method: string) => {
        switch (method) {
            case "GET": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
            case "POST": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
            case "PATCH": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
            case "DELETE": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
            default: return "bg-gray-100 text-gray-700";
        }
    };

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
                        Endpoints
                    </h2>
                    <div className="mt-8 space-y-8">
                        {endpoints.map((category) => (
                            <div key={category.category}>
                                <h3 className="text-lg font-semibold text-primary">{category.category}</h3>
                                <div className="mt-4 overflow-hidden rounded-xl border border-primary">
                                    <table className="w-full text-sm">
                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                            {category.items.map((item) => (
                                                <tr key={item.path}>
                                                    <td className="px-4 py-3 w-20">
                                                        <span className={`inline-flex rounded px-2 py-0.5 text-xs font-medium ${getMethodColor(item.method)}`}>
                                                            {item.method}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 font-mono text-sm text-brand-600">{item.path}</td>
                                                    <td className="px-4 py-3 text-tertiary">{item.description}</td>
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

const EventTypesSection = () => {
    const eventTypes = [
        { type: "llm_call", description: "LLM prompt and completion" },
        { type: "tool_call", description: "Tool/function invocation" },
        { type: "agent_action", description: "Agent decision or action" },
        { type: "agent_delegation", description: "Task delegation between agents" },
        { type: "human_approval", description: "Human approved action" },
        { type: "human_rejection", description: "Human rejected action" },
        { type: "human_override", description: "Human overrode decision" },
        { type: "risk_event", description: "Anomaly or violation" },
        { type: "error", description: "Error or exception" },
        { type: "custom", description: "Custom event type" },
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
                        Event Types
                    </h2>
                    <div className="mt-8 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full text-sm">
                            <thead className="bg-secondary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Type</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                {eventTypes.map((event) => (
                                    <tr key={event.type}>
                                        <td className="px-4 py-3 font-mono text-brand-600">{event.type}</td>
                                        <td className="px-4 py-3 text-tertiary">{event.description}</td>
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

const CodeExamplesSection = () => {
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
                        Code Examples
                    </h2>
                    
                    <h3 className="mt-8 text-lg font-semibold text-primary">Python</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`import requests

API_KEY = "pk_live_xxx"
BASE_URL = "https://api.protectron.ai/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# List systems
response = requests.get(f"{BASE_URL}/systems", headers=headers)
systems = response.json()["data"]

# Create event
event = {
    "system_id": "sys_abc123",
    "event_type": "llm_call",
    "data": {
        "model": "gpt-5.2",
        "input": [{"role": "user", "content": "Hello"}],
        "output": "Hi there!",
        "tokens_input": 5,
        "tokens_output": 3
    }
}
response = requests.post(f"{BASE_URL}/events", json=event, headers=headers)`}</code>
                    </pre>

                    <h3 className="mt-8 text-lg font-semibold text-primary">TypeScript</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`const API_KEY = 'pk_live_xxx';
const BASE_URL = 'https://api.protectron.ai/v1';

async function listSystems() {
  const response = await fetch(\`\${BASE_URL}/systems\`, {
    headers: {
      'Authorization': \`Bearer \${API_KEY}\`,
    },
  });
  return response.json();
}

async function createEvent(event: object) {
  const response = await fetch(\`\${BASE_URL}/events\`, {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${API_KEY}\`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  });
  return response.json();
}`}</code>
                    </pre>

                    <h3 className="mt-8 text-lg font-semibold text-primary">cURL</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`# List systems
curl https://api.protectron.ai/v1/systems \\
  -H "Authorization: Bearer pk_live_xxx"

# Create event
curl https://api.protectron.ai/v1/events \\
  -X POST \\
  -H "Authorization: Bearer pk_live_xxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "system_id": "sys_abc123",
    "event_type": "llm_call",
    "data": {
      "model": "gpt-5.2",
      "tokens_input": 5,
      "tokens_output": 3
    }
  }'`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};

const SDKsSection = () => {
    const sdks = [
        { language: "Python", package: "protectron", link: "/docs/sdk" },
        { language: "TypeScript", package: "@protectron/sdk", link: "/docs/sdk" },
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
                        SDKs
                    </h2>
                    <p className="mt-4 text-tertiary">
                        For most use cases, we recommend using our SDKs instead of the REST API directly:
                    </p>
                    <div className="mt-6 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full text-sm">
                            <thead className="bg-secondary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Language</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Package</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Documentation</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                {sdks.map((sdk) => (
                                    <tr key={sdk.language}>
                                        <td className="px-4 py-3 text-primary">{sdk.language}</td>
                                        <td className="px-4 py-3 font-mono text-brand-600">{sdk.package}</td>
                                        <td className="px-4 py-3">
                                            <a href={sdk.link} className="text-brand-600 hover:underline">SDK Overview</a>
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
                        Get started with the SDK for the easiest integration, or use the REST API for custom implementations.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/docs/sdk">
                            SDK Overview
                        </Button>
                        <Button size="xl" color="link-gray" href="/docs/quickstart" className="text-white hover:text-white/80">
                            Quick Start Guide →
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default function APIReferencePage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <OverviewSection />
            <AuthenticationSection />
            <RateLimitsSection />
            <ErrorsSection />
            <EndpointsSection />
            <EventTypesSection />
            <CodeExamplesSection />
            <SDKsSection />
            <CTASection />
            <Footer />
        </div>
    );
}
