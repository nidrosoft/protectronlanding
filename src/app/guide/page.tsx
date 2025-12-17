"use client";

import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock, AlertTriangle, CheckCircle, Shield, Users, Building, Scale, FileText, Target, TrendingUp } from "lucide-react";
import { Header } from "@/components/marketing/header-navigation/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/base/buttons/button";

const TableOfContents = () => {
    const sections = [
        { id: "what-is", label: "What is the EU AI Act?" },
        { id: "who-must-comply", label: "Who Must Comply?" },
        { id: "risk-levels", label: "The Four Risk Levels" },
        { id: "deadlines", label: "Key Deadlines" },
        { id: "gpai", label: "GPAI Requirements" },
        { id: "penalties", label: "Penalties" },
        { id: "how-to-comply", label: "How to Achieve Compliance" },
        { id: "faq", label: "Common Questions" },
        { id: "why-compliance", label: "Why Compliance Matters" },
        { id: "how-we-help", label: "How Protectron.ai Helps" },
    ];

    return (
        <nav className="sticky top-24 hidden lg:block">
            <h3 className="text-sm font-semibold text-primary mb-4">On this page</h3>
            <ul className="space-y-2 border-l border-secondary pl-4">
                {sections.map((section) => (
                    <li key={section.id}>
                        <a 
                            href={`#${section.id}`}
                            className="text-sm text-tertiary hover:text-primary transition-colors"
                        >
                            {section.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const SectionHeading = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <motion.h2 
        id={id}
        className="text-display-xs font-semibold text-primary md:text-display-sm mt-16 mb-6 scroll-mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
        {children}
    </motion.h2>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold text-primary mt-8 mb-4">{children}</h3>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
    <p className="text-md text-tertiary leading-relaxed mb-4">{children}</p>
);

const BulletList = ({ items }: { items: string[] }) => (
    <ul className="space-y-2 mb-6">
        {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-md text-tertiary">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                {item}
            </li>
        ))}
    </ul>
);

const InfoCard = ({ icon: Icon, title, children, variant = "default" }: { 
    icon: React.ElementType; 
    title: string; 
    children: React.ReactNode;
    variant?: "default" | "warning" | "success";
}) => {
    const variants = {
        default: "bg-secondary border-secondary",
        warning: "bg-warning-50 border-warning-200 dark:bg-warning-950 dark:border-warning-800",
        success: "bg-success-50 border-success-200 dark:bg-success-950 dark:border-success-800",
    };
    
    const iconVariants = {
        default: "text-brand-500",
        warning: "text-warning-500",
        success: "text-success-500",
    };

    return (
        <div className={`rounded-xl border p-6 mb-6 ${variants[variant]}`}>
            <div className="flex items-start gap-4">
                <Icon className={`h-6 w-6 flex-shrink-0 ${iconVariants[variant]}`} />
                <div>
                    <h4 className="font-semibold text-primary mb-2">{title}</h4>
                    <div className="text-md text-tertiary">{children}</div>
                </div>
            </div>
        </div>
    );
};

const DataTable = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
    <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">
            <thead>
                <tr className="border-b border-secondary">
                    {headers.map((header, index) => (
                        <th key={index} className="text-left py-3 px-4 text-sm font-semibold text-primary bg-secondary">
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-secondary">
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="py-3 px-4 text-sm text-tertiary">
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default function EUAIActGuidePage() {
    return (
        <div className="bg-primary min-h-screen">
            <Header isFloating />
            
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-brand-50 to-transparent dark:from-brand-950/20">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <motion.div 
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-medium text-brand-700 dark:bg-brand-900 dark:text-brand-300 mb-6">
                            <FileText className="h-4 w-4" />
                            Complete Guide for 2025
                        </div>
                        <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                            The Complete EU AI Act Guide
                        </h1>
                        <p className="mt-6 text-lg text-tertiary md:text-xl max-w-3xl mx-auto">
                            Everything you need to know about the world's first comprehensive AI regulation: requirements, deadlines, risk levels, and how to prepare your organization.
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-tertiary">
                            <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                Last updated: December 2025
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                25 min read
                            </span>
                        </div>
                        <div className="mt-8">
                            <Button size="xl" href="/assessment">
                                <span className="flex items-center gap-2">
                                    Start Free Risk Assessment
                                    <ArrowRight className="h-5 w-5" />
                                </span>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 md:py-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex gap-12">
                        {/* Table of Contents - Sidebar */}
                        <aside className="hidden lg:block w-64 flex-shrink-0">
                            <TableOfContents />
                        </aside>

                        {/* Article Content */}
                        <article className="flex-1 max-w-3xl">
                            {/* Introduction */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <Paragraph>
                                    The European Union's Artificial Intelligence Act is the world's first comprehensive legal framework for AI. If your company develops, deploys, or uses AI systems that affect people in Europe, this regulation applies to you — regardless of where your company is based.
                                </Paragraph>
                                <Paragraph>
                                    This guide breaks down everything you need to know: what the EU AI Act requires, who must comply, key deadlines, and how to prepare your organization.
                                </Paragraph>
                            </motion.div>

                            {/* What is the EU AI Act */}
                            <SectionHeading id="what-is">What is the EU AI Act?</SectionHeading>
                            <Paragraph>
                                The EU AI Act (Regulation (EU) 2024/1689) establishes harmonized rules for the development, deployment, and use of artificial intelligence systems within the European Union.
                            </Paragraph>
                            
                            <InfoCard icon={FileText} title="Key Facts">
                                <ul className="space-y-2">
                                    <li><strong>Adopted:</strong> March 2024</li>
                                    <li><strong>Entered into force:</strong> August 1, 2024</li>
                                    <li><strong>Full application:</strong> August 2, 2027 (phased implementation)</li>
                                    <li><strong>Scope:</strong> Any AI system serving EU users, regardless of where the company is located</li>
                                </ul>
                            </InfoCard>

                            <Paragraph>
                                The regulation takes a risk-based approach, categorizing AI systems into four tiers with different requirements for each. The higher the risk, the stricter the rules.
                            </Paragraph>

                            {/* Who Must Comply */}
                            <SectionHeading id="who-must-comply">Who Must Comply with the EU AI Act?</SectionHeading>
                            <Paragraph>
                                The EU AI Act applies to multiple parties in the AI value chain:
                            </Paragraph>

                            <SubHeading>Providers (Developers)</SubHeading>
                            <Paragraph>
                                Companies that develop AI systems or have them developed, and place them on the market or put them into service under their own name or trademark.
                            </Paragraph>
                            <BulletList items={[
                                "AI startups building products",
                                "SaaS companies with AI features",
                                "Enterprises developing internal AI tools",
                                "Companies using third-party AI and rebranding it"
                            ]} />

                            <SubHeading>Deployers (Users)</SubHeading>
                            <Paragraph>
                                Organizations that use AI systems under their authority, except for purely personal use.
                            </Paragraph>
                            <BulletList items={[
                                "Companies using AI hiring tools",
                                "Banks using AI for credit decisions",
                                "Healthcare providers using AI diagnostics",
                                "Any business using AI that affects customers or employees"
                            ]} />

                            <SubHeading>Importers and Distributors</SubHeading>
                            <Paragraph>
                                Companies that bring AI systems into the EU market or make them available within the EU.
                            </Paragraph>

                            <InfoCard icon={AlertTriangle} title="Key Point: Location Doesn't Matter" variant="warning">
                                If you're a US company with European customers, you must comply. If your AI system processes data about EU residents or makes decisions affecting them, the EU AI Act applies to you.
                            </InfoCard>

                            {/* Risk Levels */}
                            <SectionHeading id="risk-levels">The Four Risk Levels Explained</SectionHeading>
                            <Paragraph>
                                The EU AI Act categorizes AI systems into four risk tiers. Each tier has different compliance requirements.
                            </Paragraph>

                            <SubHeading>1. Unacceptable Risk (Prohibited)</SubHeading>
                            <Paragraph>
                                These AI practices are banned entirely. No compliance pathway exists — they simply cannot be used.
                            </Paragraph>
                            <BulletList items={[
                                "Social scoring: Evaluating people based on social behavior or personality characteristics for detrimental treatment",
                                "Real-time biometric identification: Facial recognition in public spaces (with limited law enforcement exceptions)",
                                "Emotion recognition in workplace/education: AI that infers emotions of employees or students",
                                "Cognitive manipulation: AI designed to manipulate vulnerable groups (children, elderly, disabled)",
                                "Biometric categorization: Inferring sensitive characteristics like race, religion, or sexual orientation from biometric data",
                                "Predictive policing: Assessing likelihood of individuals committing crimes based on profiling",
                                "Facial recognition database scraping: Building databases from untargeted internet or CCTV scraping"
                            ]} />

                            <InfoCard icon={AlertTriangle} title="Status: Banned as of February 2, 2025" variant="warning">
                                <strong>Penalties:</strong> Up to €35 million or 7% of global annual revenue
                            </InfoCard>

                            <SubHeading>2. High-Risk</SubHeading>
                            <Paragraph>
                                AI systems with significant potential impact on health, safety, or fundamental rights. These face the most comprehensive compliance requirements.
                            </Paragraph>

                            <DataTable 
                                headers={["Category", "Examples"]}
                                rows={[
                                    ["Biometrics", "Remote biometric identification, biometric categorization"],
                                    ["Critical Infrastructure", "AI managing water, gas, electricity, transport safety"],
                                    ["Education", "AI determining access to education, evaluating students, exam proctoring"],
                                    ["Employment", "Recruitment tools, hiring decisions, task allocation, performance monitoring"],
                                    ["Essential Services", "Credit scoring, insurance pricing, emergency services dispatch"],
                                    ["Law Enforcement", "Risk assessment tools, polygraphs, evidence evaluation"],
                                    ["Migration & Border", "Visa processing, asylum applications, border security"],
                                    ["Justice", "Sentencing assistance, legal research affecting individuals"]
                                ]}
                            />

                            <Paragraph>
                                <strong>Requirements for high-risk AI:</strong>
                            </Paragraph>
                            <BulletList items={[
                                "Risk management system (continuous, documented)",
                                "Data governance practices",
                                "Technical documentation",
                                "Record-keeping and logging",
                                "Transparency and user information",
                                "Human oversight measures",
                                "Accuracy, robustness, and cybersecurity standards",
                                "Conformity assessment",
                                "EU database registration",
                                "Post-market monitoring"
                            ]} />

                            <InfoCard icon={Calendar} title="Deadline: August 2, 2026" variant="warning">
                                High-risk AI requirements become fully applicable for Annex III systems.
                            </InfoCard>

                            <SubHeading>3. Limited Risk</SubHeading>
                            <Paragraph>
                                AI systems that interact with people or generate content, requiring transparency obligations.
                            </Paragraph>
                            <BulletList items={[
                                "Chatbots: Must inform users they're interacting with AI",
                                "Emotion recognition systems: Must inform subjects (when not prohibited)",
                                "Deepfakes and synthetic content: Must be labeled as AI-generated",
                                "AI-generated text: Must disclose AI involvement when published as factual content"
                            ]} />

                            <SubHeading>4. Minimal Risk</SubHeading>
                            <Paragraph>
                                AI systems with no specific regulatory requirements under the EU AI Act.
                            </Paragraph>
                            <BulletList items={[
                                "Spam filters",
                                "AI in video games",
                                "Inventory management systems",
                                "Most recommendation systems",
                                "Internal analytics tools"
                            ]} />

                            {/* Key Deadlines */}
                            <SectionHeading id="deadlines">Key Deadlines You Cannot Miss</SectionHeading>
                            <Paragraph>
                                The EU AI Act is being implemented in phases. Here are the critical dates:
                            </Paragraph>

                            <DataTable 
                                headers={["Date", "What Happens"]}
                                rows={[
                                    ["February 2, 2025", "✅ Prohibited AI practices banned — enforcement begins"],
                                    ["August 2, 2025", "✅ GPAI transparency rules active, governance structures established"],
                                    ["August 2, 2026", "⚠️ High-risk AI requirements fully applicable (Annex III systems)"],
                                    ["August 2, 2027", "High-risk AI in regulated products (medical devices, vehicles, etc.)"]
                                ]}
                            />

                            <InfoCard icon={AlertTriangle} title="The August 2026 Deadline is Critical" variant="warning">
                                <Paragraph>
                                    If you have high-risk AI systems, you have approximately <strong>8 months</strong> from the time of this writing to achieve full compliance. This includes completing all technical documentation, implementing risk management systems, establishing human oversight procedures, conducting conformity assessments, and registering in the EU database.
                                </Paragraph>
                                <Paragraph>
                                    This is not something you can accomplish in the final weeks. <strong>Start now.</strong>
                                </Paragraph>
                            </InfoCard>

                            {/* GPAI Requirements */}
                            <SectionHeading id="gpai">General-Purpose AI (GPAI) Requirements</SectionHeading>
                            <Paragraph>
                                If you use or provide foundation models like GPT-5.2, Claude 4.5, Gemini 3.0, Llama 4, or similar large language models, additional rules apply.
                            </Paragraph>

                            <SubHeading>For All GPAI Models:</SubHeading>
                            <BulletList items={[
                                "Technical documentation",
                                "Information for downstream providers",
                                "Copyright compliance documentation",
                                "Training data summary publication"
                            ]} />

                            <SubHeading>For GPAI with Systemic Risk:</SubHeading>
                            <Paragraph>
                                Models with significant capabilities face additional requirements:
                            </Paragraph>
                            <BulletList items={[
                                "Comprehensive model evaluation and testing",
                                "Risk assessment and mitigation",
                                "Incident reporting to authorities",
                                "Cybersecurity protections"
                            ]} />

                            {/* Penalties */}
                            <SectionHeading id="penalties">Penalties for Non-Compliance</SectionHeading>
                            <Paragraph>
                                The EU AI Act includes significant penalties for violations:
                            </Paragraph>

                            <DataTable 
                                headers={["Violation Type", "Maximum Penalty"]}
                                rows={[
                                    ["Prohibited AI practices", "€35 million or 7% of global annual revenue"],
                                    ["High-risk non-compliance", "€15 million or 3% of global annual revenue"],
                                    ["Incorrect information to authorities", "€7.5 million or 1.5% of global annual revenue"]
                                ]}
                            />

                            <Paragraph>
                                For SMEs and startups, penalties are calculated as the higher of the fixed amount or revenue percentage, but with proportionality considerations.
                            </Paragraph>

                            <InfoCard icon={Scale} title="Important">
                                These are maximum penalties. Actual fines depend on the nature, gravity, and duration of the infringement. However, regulators have shown willingness to impose substantial fines under similar regulations like GDPR.
                            </InfoCard>

                            {/* How to Achieve Compliance */}
                            <SectionHeading id="how-to-comply">How to Achieve EU AI Act Compliance</SectionHeading>
                            <Paragraph>
                                Compliance with the EU AI Act requires a systematic approach. Here's a practical roadmap:
                            </Paragraph>

                            <SubHeading>Step 1: Inventory Your AI Systems</SubHeading>
                            <Paragraph>
                                Create a complete inventory of all AI systems in your organization:
                            </Paragraph>
                            <BulletList items={[
                                "What AI systems do you develop or use?",
                                "What is each system's purpose?",
                                "What data does it process?",
                                "Who does it affect?",
                                "Where are affected users located?"
                            ]} />

                            <SubHeading>Step 2: Classify Each System by Risk Level</SubHeading>
                            <Paragraph>
                                For each AI system, determine its risk classification:
                            </Paragraph>
                            <BulletList items={[
                                "Is it on the prohibited list? → Stop using it immediately",
                                "Does it fall into Annex III high-risk categories? → High-risk requirements apply",
                                "Does it interact with users or generate content? → Limited-risk transparency rules apply",
                                "None of the above? → Minimal risk, no specific requirements"
                            ]} />

                            <SubHeading>Step 3: Gap Analysis</SubHeading>
                            <Paragraph>
                                For high-risk and limited-risk systems, assess your current state against requirements:
                            </Paragraph>
                            <BulletList items={[
                                "Do you have technical documentation?",
                                "Is there a risk management system in place?",
                                "Are human oversight measures defined?",
                                "Do you have data governance policies?",
                                "Are logging and record-keeping enabled?"
                            ]} />

                            <SubHeading>Step 4: Implement Required Measures</SubHeading>
                            <Paragraph>
                                Based on your gap analysis, implement the necessary compliance measures for high-risk and limited-risk systems.
                            </Paragraph>

                            <SubHeading>Step 5: Ongoing Compliance</SubHeading>
                            <Paragraph>
                                EU AI Act compliance is not a one-time project:
                            </Paragraph>
                            <BulletList items={[
                                "Monitor systems for changes in risk profile",
                                "Update documentation as systems evolve",
                                "Conduct regular risk assessments",
                                "Stay informed about regulatory guidance",
                                "Report incidents when required"
                            ]} />

                            {/* FAQ */}
                            <SectionHeading id="faq">Common Questions About the EU AI Act</SectionHeading>

                            <SubHeading>Does the EU AI Act apply to US companies?</SubHeading>
                            <Paragraph>
                                Yes. If your AI system serves EU users or makes decisions affecting EU residents, you must comply regardless of where your company is headquartered.
                            </Paragraph>

                            <SubHeading>What if I use third-party AI (like OpenAI or AWS)?</SubHeading>
                            <Paragraph>
                                You may still have compliance obligations as a "deployer." The responsibility depends on how you use the AI and what decisions it influences. Using a third-party model doesn't automatically transfer your compliance burden to them.
                            </Paragraph>

                            <SubHeading>Is my chatbot high-risk?</SubHeading>
                            <Paragraph>
                                Probably not. Most customer service chatbots are "limited risk" — requiring only transparency disclosures (telling users they're talking to AI). However, if your chatbot makes consequential decisions (like approving applications or providing medical advice), it could be classified higher.
                            </Paragraph>

                            <SubHeading>What's the difference between GDPR and the EU AI Act?</SubHeading>
                            <Paragraph>
                                GDPR focuses on personal data protection. The EU AI Act focuses on AI system safety and fundamental rights. They complement each other — you likely need to comply with both if you process EU personal data using AI.
                            </Paragraph>

                            <SubHeading>Can I self-certify for high-risk AI?</SubHeading>
                            <Paragraph>
                                For most Annex III high-risk systems, yes — you can conduct a self-assessment (conformity assessment based on internal control). However, some high-risk systems require third-party assessment by a notified body.
                            </Paragraph>

                            <SubHeading>What about AI I use internally (not customer-facing)?</SubHeading>
                            <Paragraph>
                                If internal AI systems fall into high-risk categories (like AI for employee performance evaluation or hiring), compliance requirements still apply. The classification is based on the AI's function, not whether it's internal or external.
                            </Paragraph>

                            {/* Why Compliance Matters */}
                            <SectionHeading id="why-compliance">Why Compliance Matters Beyond Avoiding Fines</SectionHeading>
                            <Paragraph>
                                While penalties are significant, there are strategic reasons to prioritize EU AI Act compliance:
                            </Paragraph>

                            <div className="grid gap-4 md:grid-cols-2 mb-8">
                                <InfoCard icon={Target} title="Market Access">
                                    Non-compliant AI systems cannot legally operate in the EU. With 450+ million potential customers, losing access to the European market is a serious business risk.
                                </InfoCard>
                                <InfoCard icon={Users} title="Customer Trust">
                                    Enterprise customers increasingly require vendor compliance. "Are you EU AI Act compliant?" is becoming a standard procurement question.
                                </InfoCard>
                                <InfoCard icon={TrendingUp} title="Investor Expectations">
                                    VCs and investors are asking about AI governance during due diligence. Demonstrating compliance readiness signals operational maturity.
                                </InfoCard>
                                <InfoCard icon={Shield} title="Reduced Liability">
                                    Proper documentation and risk management protect your company if something goes wrong. It's easier to defend your practices when you have evidence of systematic compliance efforts.
                                </InfoCard>
                            </div>

                            {/* How Protectron.ai Helps */}
                            <SectionHeading id="how-we-help">How Protectron.ai Helps</SectionHeading>
                            <Paragraph>
                                Achieving EU AI Act compliance can feel overwhelming — hundreds of pages of regulation, complex requirements, and tight deadlines. Protectron.ai simplifies the process:
                            </Paragraph>

                            <div className="space-y-4 mb-8">
                                <InfoCard icon={Target} title="Risk Classification Engine" variant="success">
                                    Answer a few questions about your AI systems and instantly understand which requirements apply to you.
                                </InfoCard>
                                <InfoCard icon={FileText} title="Automated Documentation" variant="success">
                                    Generate required compliance documents — technical documentation, risk assessments, data governance policies, and more — in minutes instead of weeks.
                                </InfoCard>
                                <InfoCard icon={CheckCircle} title="Requirements Tracking" variant="success">
                                    Interactive checklists for each AI system, tracking your progress toward compliance with clear visibility into what's done and what remains.
                                </InfoCard>
                                <InfoCard icon={Building} title="Audit-Ready Reports" variant="success">
                                    One-click generation of compliance reports you can share with customers, investors, and regulators.
                                </InfoCard>
                            </div>

                            {/* CTA */}
                            <motion.div 
                                className="mt-16 rounded-2xl bg-brand-600 p-8 md:p-12 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-display-xs font-semibold text-white md:text-display-sm">
                                    Ready to Get Started?
                                </h3>
                                <p className="mt-4 text-lg text-brand-100">
                                    The EU AI Act is not a future concern — it's happening now. Take action today with our free risk assessment.
                                </p>
                                <div className="mt-8">
                                    <Button size="xl" color="secondary" href="/assessment">
                                        <span className="flex items-center gap-2">
                                            Start Free Risk Assessment
                                            <ArrowRight className="h-5 w-5" />
                                        </span>
                                    </Button>
                                </div>
                                <p className="mt-4 text-sm text-brand-200">
                                    No credit card required. See where you stand in minutes.
                                </p>
                            </motion.div>

                            {/* Additional Resources */}
                            <div className="mt-16 pt-8 border-t border-secondary">
                                <h3 className="text-lg font-semibold text-primary mb-4">Additional Resources</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 transition-colors">
                                            Official EU AI Act Text →
                                        </a>
                                        <span className="text-sm text-tertiary ml-2">Full legal text</span>
                                    </li>
                                    <li>
                                        <a href="https://artificialintelligenceact.eu/ai-act-explorer/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 transition-colors">
                                            EU AI Act Explorer →
                                        </a>
                                        <span className="text-sm text-tertiary ml-2">Interactive navigation tool</span>
                                    </li>
                                    <li>
                                        <a href="https://digital-strategy.ec.europa.eu/en/policies/ai-office" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 transition-colors">
                                            European Commission AI Office →
                                        </a>
                                        <span className="text-sm text-tertiary ml-2">Official guidance and updates</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Disclaimer */}
                            <div className="mt-8 p-4 rounded-lg bg-secondary text-sm text-tertiary italic">
                                This guide is provided for informational purposes and does not constitute legal advice. Consult qualified legal counsel for advice specific to your situation.
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
