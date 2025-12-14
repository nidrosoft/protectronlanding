"use client";

import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock, AlertTriangle, CheckCircle, Shield, Euro, Building, Scale, FileText, Target, TrendingUp, Users, XCircle } from "lucide-react";
import { Header } from "@/components/marketing/header-navigation/header";
import { Button } from "@/components/base/buttons/button";

const TableOfContents = () => {
    const sections = [
        { id: "penalty-structure", label: "Penalty Structure" },
        { id: "what-triggers", label: "What Triggers Penalties" },
        { id: "how-calculated", label: "How Fines Are Calculated" },
        { id: "who-enforces", label: "Who Enforces" },
        { id: "enforcement-begun", label: "Enforcement Has Begun" },
        { id: "beyond-fines", label: "Beyond Fines" },
        { id: "protect-company", label: "Protect Your Company" },
        { id: "cost-comparison", label: "Cost Comparison" },
        { id: "common-mistakes", label: "Common Mistakes" },
        { id: "timeline", label: "Timeline" },
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
                <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
        ))}
    </ul>
);

const InfoCard = ({ icon: Icon, title, children, variant = "default" }: { 
    icon: React.ElementType; 
    title: string; 
    children: React.ReactNode;
    variant?: "default" | "warning" | "success" | "error";
}) => {
    const variants = {
        default: "bg-secondary border-secondary",
        warning: "bg-warning-50 border-warning-200 dark:bg-warning-950 dark:border-warning-800",
        success: "bg-success-50 border-success-200 dark:bg-success-950 dark:border-success-800",
        error: "bg-error-50 border-error-200 dark:bg-error-950 dark:border-error-800",
    };
    
    const iconVariants = {
        default: "text-brand-500",
        warning: "text-warning-500",
        success: "text-success-500",
        error: "text-error-500",
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
                            <td key={cellIndex} className="py-3 px-4 text-sm text-tertiary" dangerouslySetInnerHTML={{ __html: cell }} />
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const PenaltyCard = ({ amount, percentage, description }: { amount: string; percentage: string; description: string }) => (
    <div className="rounded-xl border border-error-200 bg-error-50 dark:bg-error-950 dark:border-error-800 p-6 text-center">
        <div className="text-3xl font-bold text-error-600 dark:text-error-400">{amount}</div>
        <div className="text-lg font-semibold text-error-500 mt-1">or {percentage}</div>
        <div className="text-sm text-tertiary mt-3">{description}</div>
    </div>
);

export default function BlogPage() {
    // Calculate days until August 2, 2026
    const deadline = new Date('2026-08-02');
    const today = new Date();
    const daysUntil = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    return (
        <div className="bg-primary min-h-screen">
            <Header isFloating />
            
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-error-50 to-transparent dark:from-error-950/20">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <motion.div 
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full bg-error-100 px-4 py-2 text-sm font-medium text-error-700 dark:bg-error-900 dark:text-error-300 mb-6">
                            <AlertTriangle className="h-4 w-4" />
                            Enforcement Active
                        </div>
                        <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                            EU AI Act Penalties: Up to €35 Million in Fines Are Now Enforceable
                        </h1>
                        <p className="mt-6 text-lg text-tertiary md:text-xl max-w-3xl mx-auto">
                            The grace period is over. Companies using prohibited AI practices face fines up to €35 million or 7% of global annual revenue. Here's what you need to know.
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-tertiary">
                            <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                Published: December 2025
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                15 min read
                            </span>
                        </div>
                        
                        {/* Countdown Banner */}
                        <div className="mt-8 inline-flex items-center gap-3 rounded-xl bg-warning-100 dark:bg-warning-900 px-6 py-4">
                            <AlertTriangle className="h-6 w-6 text-warning-600" />
                            <div className="text-left">
                                <div className="text-sm font-medium text-warning-700 dark:text-warning-300">High-Risk AI Deadline</div>
                                <div className="text-2xl font-bold text-warning-800 dark:text-warning-200">{daysUntil} days until August 2, 2026</div>
                            </div>
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
                                    As of February 2025, companies using prohibited AI practices face fines up to €35 million or 7% of global annual revenue. And by August 2026, any company with high-risk AI systems that isn't compliant faces penalties up to €15 million.
                                </Paragraph>
                                <Paragraph>
                                    This isn't a theoretical future risk. <strong>Enforcement has begun.</strong>
                                </Paragraph>
                                <Paragraph>
                                    Here's what you need to know about EU AI Act penalties, what triggers them, and how to protect your company.
                                </Paragraph>
                            </motion.div>

                            {/* Penalty Structure */}
                            <SectionHeading id="penalty-structure">The Penalty Structure at a Glance</SectionHeading>
                            <Paragraph>
                                The EU AI Act establishes a three-tier penalty system based on the severity of violations:
                            </Paragraph>

                            <div className="grid gap-4 md:grid-cols-3 mb-8">
                                <PenaltyCard 
                                    amount="€35M" 
                                    percentage="7% of revenue" 
                                    description="Prohibited AI practices"
                                />
                                <PenaltyCard 
                                    amount="€15M" 
                                    percentage="3% of revenue" 
                                    description="High-risk non-compliance"
                                />
                                <PenaltyCard 
                                    amount="€7.5M" 
                                    percentage="1.5% of revenue" 
                                    description="False information"
                                />
                            </div>

                            <Paragraph>
                                The penalty is always calculated as whichever amount is <strong>higher</strong> — the fixed sum or the revenue percentage.
                            </Paragraph>

                            <InfoCard icon={Euro} title="Example Calculations" variant="warning">
                                <p className="mb-2"><strong>Company with €500M annual revenue:</strong></p>
                                <ul className="list-disc list-inside mb-3 space-y-1">
                                    <li>Prohibited AI violation: Up to €35 million</li>
                                    <li>High-risk non-compliance: Up to €15 million</li>
                                </ul>
                                <p className="mb-2"><strong>Company with €1B annual revenue:</strong></p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Prohibited AI violation: Up to <strong>€70 million</strong> (7% exceeds fixed)</li>
                                    <li>High-risk non-compliance: Up to <strong>€30 million</strong> (3% exceeds fixed)</li>
                                </ul>
                            </InfoCard>

                            <Paragraph>
                                The math gets painful very quickly for larger organizations.
                            </Paragraph>

                            {/* What Triggers Penalties */}
                            <SectionHeading id="what-triggers">What Triggers the Maximum Penalties?</SectionHeading>

                            <SubHeading>€35 Million: Prohibited AI Practices</SubHeading>
                            <Paragraph>
                                The harshest penalties are reserved for AI systems that should never have been deployed in the first place.
                            </Paragraph>
                            <Paragraph>
                                <strong>You face maximum penalties if you:</strong>
                            </Paragraph>
                            <BulletList items={[
                                "<strong>Deploy social scoring systems</strong> that evaluate people based on social behavior for detrimental treatment",
                                "<strong>Use real-time biometric identification</strong> (facial recognition) in public spaces without authorization",
                                "<strong>Implement emotion recognition</strong> in workplaces or educational settings",
                                "<strong>Build AI designed to manipulate</strong> vulnerable groups like children or elderly",
                                "<strong>Create biometric categorization systems</strong> that infer sensitive attributes (race, religion, sexual orientation)",
                                "<strong>Use predictive policing</strong> that assesses crime probability based on personal profiling",
                                "<strong>Scrape facial images</strong> from the internet or CCTV to build recognition databases"
                            ]} />

                            <InfoCard icon={XCircle} title="These practices were banned on February 2, 2025" variant="error">
                                There is no compliance pathway — they are simply prohibited.
                            </InfoCard>

                            <InfoCard icon={AlertTriangle} title="Real-world implications" variant="warning">
                                If your HR department uses an AI tool that detects employee emotions to assess "engagement" or "productivity," you may already be in violation. If your security system uses real-time facial recognition without explicit legal authorization, you're exposed.
                            </InfoCard>

                            <SubHeading>€15 Million: High-Risk Non-Compliance</SubHeading>
                            <Paragraph>
                                The second tier of penalties applies to high-risk AI systems that fail to meet the comprehensive requirements under Articles 9-15.
                            </Paragraph>
                            <Paragraph>
                                <strong>You face these penalties if your high-risk AI:</strong>
                            </Paragraph>
                            <BulletList items={[
                                "Lacks a documented risk management system",
                                "Has no technical documentation",
                                "Doesn't maintain proper records and logs",
                                "Fails to provide transparency information to users",
                                "Has no human oversight measures",
                                "Hasn't undergone conformity assessment",
                                "Isn't registered in the EU database (when required)",
                                "Doesn't meet accuracy and robustness standards"
                            ]} />

                            <Paragraph>
                                <strong>High-risk AI includes systems used for:</strong>
                            </Paragraph>
                            <BulletList items={[
                                "Recruitment and hiring decisions",
                                "Credit scoring and lending",
                                "Insurance pricing and claims",
                                "Educational admissions and grading",
                                "Healthcare diagnosis and treatment recommendations",
                                "Law enforcement and legal proceedings",
                                "Border control and immigration"
                            ]} />

                            <InfoCard icon={Calendar} title="Deadline: August 2, 2026" variant="warning">
                                The deadline for full high-risk compliance is <strong>August 2, 2026</strong>.
                            </InfoCard>

                            <SubHeading>€7.5 Million: Providing False Information</SubHeading>
                            <Paragraph>
                                The "lightest" penalty tier still carries significant fines for:
                            </Paragraph>
                            <BulletList items={[
                                "Providing incorrect, incomplete, or misleading information to authorities",
                                "Failing to cooperate with regulatory requests",
                                "Submitting false documentation during conformity assessments"
                            ]} />

                            {/* How Fines Are Calculated */}
                            <SectionHeading id="how-calculated">How Fines Are Calculated</SectionHeading>
                            <Paragraph>
                                The EU AI Act provides guidance on how authorities should determine actual penalty amounts within these maximums.
                            </Paragraph>

                            <SubHeading>Factors that increase penalties:</SubHeading>
                            <BulletList items={[
                                "Intentional or negligent violation",
                                "Previous violations of the AI Act",
                                "Duration of the violation",
                                "Number of people affected",
                                "Severity of harm caused",
                                "Lack of cooperation with authorities",
                                "Financial benefits gained from the violation"
                            ]} />

                            <SubHeading>Factors that may reduce penalties:</SubHeading>
                            <BulletList items={[
                                "Proactive remediation efforts",
                                "First-time offense",
                                "Good faith attempts at compliance",
                                "Cooperation with investigators",
                                "Limited scope of violation",
                                "Voluntary disclosure of issues"
                            ]} />

                            <InfoCard icon={Building} title="SME Considerations">
                                For small and medium enterprises (and startups), the regulation calls for "proportionate" penalties. However, this doesn't mean immunity — it means regulators should consider company size when setting fines within the allowable range. A €1 million fine might be proportionate for a startup, while €35 million would be reserved for larger offenders. But <strong>€1 million is still company-ending for many startups</strong>.
                            </InfoCard>

                            {/* Who Enforces */}
                            <SectionHeading id="who-enforces">Who Enforces the EU AI Act?</SectionHeading>
                            <Paragraph>
                                Enforcement happens at multiple levels:
                            </Paragraph>

                            <SubHeading>National Authorities</SubHeading>
                            <Paragraph>
                                Each EU member state designates national competent authorities to enforce the AI Act within their borders. These authorities can:
                            </Paragraph>
                            <BulletList items={[
                                "Conduct investigations and audits",
                                "Request documentation and information",
                                "Issue compliance orders",
                                "Impose fines and penalties",
                                "Order AI systems to be withdrawn from the market"
                            ]} />

                            <SubHeading>The AI Office</SubHeading>
                            <Paragraph>
                                The European Commission's AI Office coordinates enforcement across member states and directly oversees:
                            </Paragraph>
                            <BulletList items={[
                                "General-purpose AI (GPAI) model compliance",
                                "Cross-border enforcement coordination",
                                "Development of codes of practice",
                                "Guidance and interpretation"
                            ]} />

                            <SubHeading>Market Surveillance</SubHeading>
                            <Paragraph>
                                Market surveillance authorities monitor AI systems in the market and can:
                            </Paragraph>
                            <BulletList items={[
                                "Request access to AI systems for testing",
                                "Order recalls or withdrawals",
                                "Issue public warnings about non-compliant systems"
                            ]} />

                            {/* Enforcement Has Begun */}
                            <SectionHeading id="enforcement-begun">Enforcement Has Already Begun</SectionHeading>
                            <Paragraph>
                                While we haven't yet seen major EU AI Act fines make headlines, enforcement infrastructure is now active:
                            </Paragraph>

                            <SubHeading>What's happening now:</SubHeading>
                            <BulletList items={[
                                "National authorities are being designated across EU member states",
                                "The AI Office is operational and issuing guidance",
                                "Prohibited practices are being monitored",
                                "Complaints mechanisms are being established"
                            ]} />

                            <SubHeading>What to expect:</SubHeading>
                            <Paragraph>
                                Based on GDPR enforcement patterns, we can anticipate:
                            </Paragraph>
                            <BulletList items={[
                                "Initial focus on clear-cut violations (prohibited AI)",
                                "High-profile enforcement actions to establish precedent",
                                "Gradual increase in enforcement intensity",
                                "Cross-border coordination on major cases"
                            ]} />

                            <InfoCard icon={AlertTriangle} title="Companies Most at Risk" variant="error">
                                The companies most at risk are those with obvious violations — social scoring, unauthorized biometric systems, or workplace emotion recognition that haven't been discontinued.
                            </InfoCard>

                            {/* Beyond Fines */}
                            <SectionHeading id="beyond-fines">Beyond Fines: Other Consequences</SectionHeading>
                            <Paragraph>
                                Financial penalties aren't the only risk. Non-compliance can trigger:
                            </Paragraph>

                            <div className="grid gap-4 md:grid-cols-2 mb-8">
                                <InfoCard icon={XCircle} title="Market Withdrawal Orders" variant="error">
                                    Authorities can order non-compliant AI systems to be removed from the EU market entirely. For companies dependent on EU customers, this is existential.
                                </InfoCard>
                                <InfoCard icon={Users} title="Reputational Damage">
                                    Enforcement actions are public. Being known as a company that violated AI regulations damages trust with customers, partners, and investors.
                                </InfoCard>
                                <InfoCard icon={FileText} title="Contract Terminations">
                                    Enterprise customers increasingly include AI compliance requirements in contracts. Non-compliance can trigger termination clauses and loss of major accounts.
                                </InfoCard>
                                <InfoCard icon={Scale} title="Insurance & Liability">
                                    D&O insurance and cyber insurance policies may not cover penalties from willful non-compliance. Executives could face personal liability.
                                </InfoCard>
                            </div>

                            {/* Protect Your Company */}
                            <SectionHeading id="protect-company">How to Protect Your Company</SectionHeading>
                            <Paragraph>
                                Avoiding EU AI Act penalties requires proactive compliance. Here's what to do:
                            </Paragraph>

                            <SubHeading>Immediate Actions (This Week)</SubHeading>
                            <BulletList items={[
                                "<strong>Audit for prohibited AI</strong> — Check if any of your systems fall into the banned categories. If they do, discontinue immediately.",
                                "<strong>Inventory your AI systems</strong> — Create a complete list of all AI you develop, deploy, or use.",
                                "<strong>Initial classification</strong> — Determine which systems are high-risk, limited-risk, or minimal-risk."
                            ]} />

                            <SubHeading>Short-Term Actions (This Month)</SubHeading>
                            <BulletList items={[
                                "<strong>Risk assessment</strong> — For high-risk systems, begin documenting risks and mitigation measures.",
                                "<strong>Gap analysis</strong> — Compare your current practices against EU AI Act requirements.",
                                "<strong>Compliance roadmap</strong> — Create a timeline to address gaps before the August 2026 deadline."
                            ]} />

                            <SubHeading>Ongoing Actions</SubHeading>
                            <BulletList items={[
                                "<strong>Documentation</strong> — Build and maintain required technical documentation.",
                                "<strong>Implement controls</strong> — Establish human oversight, logging, and monitoring.",
                                "<strong>Prepare for conformity assessment</strong> — Gather evidence you'll need for self-assessment or third-party audit.",
                                "<strong>Stay informed</strong> — Monitor regulatory guidance and update practices accordingly."
                            ]} />

                            {/* Cost Comparison */}
                            <SectionHeading id="cost-comparison">The Cost of Compliance vs. Non-Compliance</SectionHeading>
                            <Paragraph>
                                Let's be direct about the math:
                            </Paragraph>

                            <div className="grid gap-6 md:grid-cols-2 mb-8">
                                <div className="rounded-xl border border-success-200 bg-success-50 dark:bg-success-950 dark:border-success-800 p-6">
                                    <h4 className="font-semibold text-success-700 dark:text-success-300 mb-4 flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5" />
                                        Cost of Proactive Compliance
                                    </h4>
                                    <ul className="space-y-2 text-sm text-tertiary">
                                        <li>• Compliance software: €1,000-12,000/year</li>
                                        <li>• Documentation effort: Weeks of internal work</li>
                                        <li>• Process changes: Manageable operational adjustments</li>
                                    </ul>
                                </div>
                                <div className="rounded-xl border border-error-200 bg-error-50 dark:bg-error-950 dark:border-error-800 p-6">
                                    <h4 className="font-semibold text-error-700 dark:text-error-300 mb-4 flex items-center gap-2">
                                        <XCircle className="h-5 w-5" />
                                        Cost of Non-Compliance
                                    </h4>
                                    <ul className="space-y-2 text-sm text-tertiary">
                                        <li>• Fines: Up to €35 million</li>
                                        <li>• Market withdrawal: Loss of EU revenue</li>
                                        <li>• Reputation damage: Incalculable</li>
                                        <li>• Legal fees: Hundreds of thousands</li>
                                        <li>• Business disruption: Months of firefighting</li>
                                    </ul>
                                </div>
                            </div>

                            <Paragraph>
                                The choice is obvious. Companies that invest in compliance now are buying insurance against catastrophic outcomes.
                            </Paragraph>

                            {/* Common Mistakes */}
                            <SectionHeading id="common-mistakes">Common Mistakes That Lead to Penalties</SectionHeading>
                            <Paragraph>
                                Based on how similar regulations have been enforced, here are the mistakes most likely to trigger EU AI Act penalties:
                            </Paragraph>

                            <SubHeading>1. Assuming "We're Not in the EU"</SubHeading>
                            <Paragraph>
                                If you have EU customers, users, or your AI affects EU residents, you're in scope. Location of headquarters is irrelevant.
                            </Paragraph>

                            <SubHeading>2. Ignoring the Prohibited List</SubHeading>
                            <Paragraph>
                                Some companies have deployed emotion recognition or social scoring features without realizing they're banned. Ignorance isn't a defense.
                            </Paragraph>

                            <SubHeading>3. Misclassifying Risk Levels</SubHeading>
                            <Paragraph>
                                Incorrectly classifying a high-risk system as minimal-risk to avoid compliance requirements will be treated harshly when discovered.
                            </Paragraph>

                            <SubHeading>4. Documentation Gaps</SubHeading>
                            <Paragraph>
                                "We do all the right things but didn't document them" won't protect you. The EU AI Act requires written evidence of compliance.
                            </Paragraph>

                            <SubHeading>5. Waiting Until the Deadline</SubHeading>
                            <Paragraph>
                                Compliance requires significant preparation. Starting in July 2026 for an August 2026 deadline is a recipe for failure — and penalties.
                            </Paragraph>

                            <SubHeading>6. Assuming Third-Party AI Is Someone Else's Problem</SubHeading>
                            <Paragraph>
                                Using OpenAI or AWS doesn't transfer your compliance obligations. Deployers have their own requirements.
                            </Paragraph>

                            {/* Timeline */}
                            <SectionHeading id="timeline">Timeline to Penalty Exposure</SectionHeading>
                            <Paragraph>
                                Here's when different penalties become enforceable:
                            </Paragraph>

                            <DataTable 
                                headers={["Date", "What Becomes Enforceable"]}
                                rows={[
                                    ["<strong>February 2, 2025</strong>", "✅ Prohibited AI penalties (€35M tier) — <strong>NOW ACTIVE</strong>"],
                                    ["<strong>August 2, 2025</strong>", "✅ GPAI non-compliance penalties — <strong>NOW ACTIVE</strong>"],
                                    ["<strong>August 2, 2026</strong>", `⚠️ High-risk AI penalties (€15M tier) — <strong>${daysUntil} DAYS AWAY</strong>`],
                                    ["<strong>August 2, 2027</strong>", "High-risk AI in regulated products"]
                                ]}
                            />

                            <InfoCard icon={Clock} title="The Clock is Ticking" variant="warning">
                                Every day without action is a day closer to potential penalty exposure.
                            </InfoCard>

                            {/* CTA */}
                            <motion.div 
                                className="mt-16 rounded-2xl bg-brand-600 p-8 md:p-12 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-display-xs font-semibold text-white md:text-display-sm">
                                    Take Action Today
                                </h3>
                                <p className="mt-4 text-lg text-brand-100">
                                    The EU AI Act is the most significant AI regulation in the world, and its penalties are designed to be taken seriously. Companies that act now will be prepared. Companies that delay will scramble.
                                </p>
                                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button size="xl" color="secondary" href="/assessment">
                                        <span className="flex items-center gap-2">
                                            Start Free Risk Assessment
                                            <ArrowRight className="h-5 w-5" />
                                        </span>
                                    </Button>
                                </div>
                                <p className="mt-4 text-sm text-brand-200">
                                    Get a personalized compliance roadmap in minutes.
                                </p>
                            </motion.div>

                            {/* Disclaimer */}
                            <div className="mt-8 p-4 rounded-lg bg-secondary text-sm text-tertiary italic">
                                Disclaimer: This article is for informational purposes only and does not constitute legal advice. For guidance specific to your situation, consult qualified legal counsel.
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-primary py-12 border-t border-secondary">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex flex-col gap-1">
                            <span className="text-lg font-bold text-primary">Protectron.ai</span>
                            <p className="text-sm text-tertiary">EU AI Act Compliance Platform</p>
                        </div>
                        <p className="text-sm text-tertiary flex items-center gap-1">
                            Built with <span className="text-red-500">❤️</span> by{" "}
                            <a 
                                href="https://nidrosoft.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="font-medium text-primary hover:text-brand-600 transition-colors"
                            >
                                Nidrosoft
                            </a>
                        </p>
                        <div className="flex flex-col items-center md:items-end gap-1">
                            <p className="text-sm text-quaternary">© {new Date().getFullYear()} Protectron.ai</p>
                            <p className="text-sm text-tertiary flex items-center gap-1">
                                <span>🇪🇺</span> Data hosted in EU
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
