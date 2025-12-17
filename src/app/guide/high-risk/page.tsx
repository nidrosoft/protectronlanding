"use client";

import { motion } from "motion/react";
import { AlertTriangle, Shield, FileText, Database, Eye, Users, Lock, CheckCircle2, Clock, ArrowRight, Scale, Briefcase, GraduationCap, Heart, Building2, Gavel } from "lucide-react";
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
                        High-Risk AI Systems
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        The Complete Guide to EU AI Act High-Risk Requirements
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-warning-50 dark:bg-warning-900/20 px-4 py-2 border border-warning-200 dark:border-warning-800">
                        <Clock className="h-5 w-5 text-warning-600" />
                        <span className="text-sm font-medium text-warning-700 dark:text-warning-400">
                            Key Deadline: August 2, 2026
                        </span>
                    </div>
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
                        High-risk AI systems face the most stringent requirements under the EU AI Act. If your AI system falls into this category, you'll need to comply with Articles 9-15 and undergo conformity assessment before placing it on the EU market.
                    </p>
                    <div className="mt-6 rounded-xl border border-warning-200 bg-warning-50 dark:border-warning-800 dark:bg-warning-900/20 p-6">
                        <p className="font-semibold text-warning-700 dark:text-warning-400">Key Deadline</p>
                        <p className="mt-2 text-tertiary">
                            High-risk AI systems must comply by <strong>August 2, 2026</strong>.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ClassificationSection = () => {
    const annexIProducts = [
        "Medical devices",
        "Machinery",
        "Toys",
        "Lifts",
        "Radio equipment",
        "Civil aviation",
        "Motor vehicles",
        "Railway systems",
        "Marine equipment",
    ];

    const annexIIICategories = [
        { category: "Biometrics", useCases: "Remote biometric identification, categorization, emotion recognition", icon: Eye },
        { category: "Critical Infrastructure", useCases: "Safety components of water, gas, electricity, traffic management", icon: Building2 },
        { category: "Education", useCases: "Admissions decisions, assessments, proctoring, cheating detection", icon: GraduationCap },
        { category: "Employment", useCases: "Recruitment, screening, hiring, task allocation, performance evaluation, termination", icon: Briefcase },
        { category: "Essential Services", useCases: "Credit scoring, emergency services dispatch, health/life insurance assessment", icon: Heart },
        { category: "Law Enforcement", useCases: "Risk assessment, polygraphs, evidence evaluation, crime prediction", icon: Shield },
        { category: "Migration", useCases: "Document verification, visa applications, residence permits", icon: Users },
        { category: "Justice", useCases: "Sentencing, legal research, case outcome prediction", icon: Gavel },
        { category: "Elections", useCases: "Influencing voting behavior (with exceptions for non-manipulative uses)", icon: Scale },
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
                        What Makes AI "High-Risk"?
                    </h2>
                    <p className="mt-4 text-tertiary">
                        AI systems are classified as high-risk through two pathways:
                    </p>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl border border-primary bg-secondary p-6">
                            <h3 className="text-lg font-semibold text-primary">Pathway 1: Safety Components (Annex I)</h3>
                            <p className="mt-2 text-sm text-tertiary">
                                AI systems that are <strong>safety components</strong> of products covered by EU harmonization legislation:
                            </p>
                            <ul className="mt-4 grid grid-cols-2 gap-2">
                                {annexIProducts.map((product) => (
                                    <li key={product} className="text-sm text-tertiary">• {product}</li>
                                ))}
                            </ul>
                            <p className="mt-4 text-xs text-tertiary italic">
                                Example: An AI system that controls braking in an autonomous vehicle is a safety component of that vehicle.
                            </p>
                        </div>

                        <div className="rounded-xl border border-primary bg-secondary p-6">
                            <h3 className="text-lg font-semibold text-primary">Pathway 2: Standalone High-Risk (Annex III)</h3>
                            <p className="mt-2 text-sm text-tertiary">
                                AI systems in specific use cases that pose risks to safety or fundamental rights.
                            </p>
                        </div>
                    </div>

                    <h3 className="mt-12 text-lg font-semibold text-primary">Annex III Categories</h3>
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        {annexIIICategories.map((cat) => (
                            <div key={cat.category} className="rounded-xl border border-primary bg-secondary p-4">
                                <cat.icon className="h-6 w-6 text-brand-600" />
                                <h4 className="mt-3 font-semibold text-primary">{cat.category}</h4>
                                <p className="mt-1 text-xs text-tertiary">{cat.useCases}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const DeepDiveSection = () => {
    const categories = [
        {
            title: "1. Biometrics",
            highRisk: ["Remote biometric identification — Identifying individuals from a distance using biometric data", "Biometric categorization — Categorizing individuals by protected characteristics", "Emotion recognition — Inferring emotional states in workplace or educational settings"],
            examples: ["Facial recognition for access control", "Voice recognition for identity verification", "Systems inferring mood from facial expressions"],
            notHighRisk: ["Biometric verification (one-to-one matching for authentication)", "Systems designed for accessibility purposes"],
        },
        {
            title: "3. Education and Vocational Training",
            highRisk: ["Determine access — Admissions decisions, assignment to programs", "Evaluate outcomes — Grading, assessment scoring", "Monitor students — Cheating detection, exam proctoring", "Predict success — Dropout prediction, performance forecasting"],
            examples: ["AI scoring college applications", "Automated essay grading", "Remote proctoring software", "Systems predicting student dropout risk"],
        },
        {
            title: "4. Employment",
            highRisk: ["Recruitment — Posting ads, screening applications", "Hiring — Evaluating candidates, ranking applicants", "Task allocation — Assigning work, scheduling", "Performance — Evaluating worker performance", "Termination — Decisions about ending employment"],
            examples: ["Resume screening tools", "AI-powered interview analysis", "Algorithmic scheduling systems", "Productivity monitoring tools"],
            note: "This is one of the most common high-risk categories for AI startups.",
        },
        {
            title: "5. Access to Essential Services",
            highRisk: ["Credit — Credit scoring, loan decisions", "Public benefits — Welfare, unemployment, housing", "Emergency services — Prioritizing emergency calls", "Insurance — Health and life insurance pricing/coverage"],
            examples: ["AI credit scoring models", "Fraud detection in insurance claims", "Emergency dispatch prioritization", "Benefits eligibility assessment"],
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
                        Annex III Categories Deep Dive
                    </h2>

                    <div className="mt-8 space-y-6">
                        {categories.map((cat) => (
                            <div key={cat.title} className="rounded-xl border border-primary bg-primary p-6">
                                <h3 className="text-lg font-semibold text-primary">{cat.title}</h3>
                                {cat.note && (
                                    <p className="mt-2 text-sm font-medium text-brand-600">{cat.note}</p>
                                )}
                                <p className="mt-3 text-sm font-medium text-primary">High-risk if used for:</p>
                                <ul className="mt-2 space-y-1 text-sm text-tertiary">
                                    {cat.highRisk.map((item) => (
                                        <li key={item}>• {item}</li>
                                    ))}
                                </ul>
                                <p className="mt-4 text-sm font-medium text-primary">Examples:</p>
                                <ul className="mt-2 space-y-1 text-sm text-tertiary">
                                    {cat.examples.map((item) => (
                                        <li key={item}>• {item}</li>
                                    ))}
                                </ul>
                                {cat.notHighRisk && (
                                    <>
                                        <p className="mt-4 text-sm font-medium text-primary">Not high-risk:</p>
                                        <ul className="mt-2 space-y-1 text-sm text-tertiary">
                                            {cat.notHighRisk.map((item) => (
                                                <li key={item}>• {item}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const RequirementsSection = () => {
    const articles = [
        {
            article: "Article 9",
            title: "Risk Management System",
            description: "Establish a continuous risk management process",
            requirements: [
                { req: "Risk identification", desc: "Identify known and foreseeable risks" },
                { req: "Risk estimation", desc: "Evaluate risks from intended use and misuse" },
                { req: "Risk mitigation", desc: "Implement measures to address risks" },
                { req: "Residual risk", desc: "Communicate remaining risks to users" },
                { req: "Testing", desc: "Verify risk management effectiveness" },
                { req: "Documentation", desc: "Document the entire process" },
            ],
            outputs: ["Risk assessment document", "Mitigation measures list", "Residual risk communication", "Testing procedures and results"],
        },
        {
            article: "Article 10",
            title: "Data and Data Governance",
            description: "Ensure training data quality",
            requirements: [
                { req: "Governance practices", desc: "Documented data management" },
                { req: "Data quality", desc: "Relevant, representative, error-free" },
                { req: "Statistical properties", desc: "Appropriate for intended purpose" },
                { req: "Bias assessment", desc: "Identify and address biases" },
                { req: "Gap analysis", desc: "Document data shortcomings" },
                { req: "GDPR compliance", desc: "Personal data processed lawfully" },
            ],
            outputs: ["Data governance documentation", "Data quality assessment", "Bias testing results", "Privacy compliance evidence"],
        },
        {
            article: "Article 11",
            title: "Technical Documentation",
            description: "Prepare comprehensive documentation",
            requirements: [
                { req: "General description", desc: "System purpose, functionality" },
                { req: "Development", desc: "Design, architecture, algorithms" },
                { req: "Monitoring", desc: "How system is monitored and controlled" },
                { req: "Risk management", desc: "Risk assessment and mitigation" },
                { req: "Changes", desc: "Modifications throughout lifecycle" },
                { req: "Performance", desc: "Accuracy, robustness metrics" },
            ],
            outputs: ["Technical documentation package", "System architecture description", "Performance specifications"],
        },
        {
            article: "Article 12",
            title: "Record-Keeping",
            description: "Implement automatic logging",
            requirements: [
                { req: "Automatic", desc: "No manual intervention required" },
                { req: "Duration tracking", desc: "Log operational periods" },
                { req: "Database access", desc: "Log reference database queries" },
                { req: "Input data", desc: "Log or enable reconstruction of inputs" },
                { req: "Traceability", desc: "Enable full decision reconstruction" },
            ],
            outputs: ["Logging implementation", "Audit trail capability", "Export functionality"],
            link: "/guide/article-12",
        },
        {
            article: "Article 13",
            title: "Transparency and Information",
            description: "Provide clear information to deployers",
            requirements: [
                { req: "Instructions for use", desc: "How to properly use the system" },
                { req: "Capabilities", desc: "What the system can do" },
                { req: "Limitations", desc: "What the system cannot do" },
                { req: "Performance", desc: "Accuracy and error rates" },
                { req: "Oversight", desc: "How to implement human oversight" },
                { req: "Lifetime", desc: "Expected operational lifetime" },
            ],
            outputs: ["Instructions for use document", "Performance specifications", "User guidance materials"],
        },
        {
            article: "Article 14",
            title: "Human Oversight",
            description: "Enable effective human oversight",
            requirements: [
                { req: "Understanding", desc: "Humans can understand system behavior" },
                { req: "Awareness", desc: "Humans aware of automation bias risk" },
                { req: "Interpretation", desc: "Humans can correctly interpret output" },
                { req: "Override", desc: "Humans can decide not to use or override" },
                { req: "Intervention", desc: "Humans can stop the system" },
            ],
            outputs: ["Human oversight procedures", "Training materials for operators", "Override and intervention mechanisms"],
        },
        {
            article: "Article 15",
            title: "Accuracy, Robustness, Cybersecurity",
            description: "Ensure technical quality",
            requirements: [
                { req: "Accuracy", desc: "Appropriate for intended purpose" },
                { req: "Robustness", desc: "Resilient to errors and attacks" },
                { req: "Redundancy", desc: "Fail-safe measures where appropriate" },
                { req: "Cybersecurity", desc: "Protected against threats" },
            ],
            outputs: ["Accuracy metrics and testing", "Robustness evaluation", "Security assessment"],
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
                        Requirements for High-Risk AI (Articles 9-15)
                    </h2>
                    <p className="mt-4 text-tertiary">
                        Once classified as high-risk, you must comply with these requirements:
                    </p>

                    <div className="mt-8 space-y-6">
                        {articles.map((article) => (
                            <div key={article.article} className="rounded-xl border border-primary bg-secondary p-6">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <span className="inline-flex items-center rounded-full bg-brand-100 dark:bg-brand-900/30 px-2 py-0.5 text-xs font-semibold text-brand-700 dark:text-brand-400">
                                            {article.article}
                                        </span>
                                        <h3 className="mt-2 text-lg font-semibold text-primary">{article.title}</h3>
                                        <p className="text-sm text-tertiary">{article.description}</p>
                                    </div>
                                    {article.link && (
                                        <a href={article.link} className="text-sm text-brand-600 hover:underline">
                                            Detailed Guide →
                                        </a>
                                    )}
                                </div>
                                <div className="mt-4 overflow-hidden rounded-lg border border-primary">
                                    <table className="w-full text-sm">
                                        <thead className="bg-primary">
                                            <tr>
                                                <th className="px-3 py-2 text-left font-semibold text-primary">Requirement</th>
                                                <th className="px-3 py-2 text-left font-semibold text-primary">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-primary">
                                            {article.requirements.map((req) => (
                                                <tr key={req.req}>
                                                    <td className="px-3 py-2 font-medium text-primary">{req.req}</td>
                                                    <td className="px-3 py-2 text-tertiary">{req.desc}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-4 text-xs font-medium text-primary">Key outputs:</p>
                                <ul className="mt-1 flex flex-wrap gap-2">
                                    {article.outputs.map((output) => (
                                        <li key={output} className="rounded-full bg-primary px-2 py-0.5 text-xs text-tertiary">
                                            {output}
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

const ConformitySection = () => {
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
                        Conformity Assessment
                    </h2>

                    <h3 className="mt-8 text-lg font-semibold text-primary">What It Is</h3>
                    <p className="mt-2 text-tertiary">
                        Before placing a high-risk AI system on the EU market, you must demonstrate compliance through conformity assessment.
                    </p>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Two Pathways</h3>
                    <div className="mt-4 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full text-sm">
                            <thead className="bg-primary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Pathway</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">When It Applies</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Process</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-primary bg-secondary">
                                <tr>
                                    <td className="px-4 py-3 font-medium text-primary">Internal control</td>
                                    <td className="px-4 py-3 text-tertiary">Most Annex III systems</td>
                                    <td className="px-4 py-3 text-tertiary">Self-assessment + documentation</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-medium text-primary">Third-party assessment</td>
                                    <td className="px-4 py-3 text-tertiary">Biometric identification, critical infrastructure</td>
                                    <td className="px-4 py-3 text-tertiary">Notified body involvement</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <h4 className="font-semibold text-primary">Internal Control (Most Common)</h4>
                            <p className="mt-2 text-sm text-tertiary">For most high-risk AI systems:</p>
                            <ol className="mt-4 space-y-2 text-sm text-tertiary list-decimal list-inside">
                                <li><strong>Implement</strong> all Article 9-15 requirements</li>
                                <li><strong>Document</strong> compliance in technical documentation</li>
                                <li><strong>Establish</strong> quality management system</li>
                                <li><strong>Prepare</strong> EU Declaration of Conformity</li>
                                <li><strong>Affix</strong> CE marking</li>
                                <li><strong>Register</strong> in EU database</li>
                            </ol>
                        </div>

                        <div className="rounded-xl border border-primary bg-primary p-6">
                            <h4 className="font-semibold text-primary">Third-Party Assessment</h4>
                            <p className="mt-2 text-sm text-tertiary">For biometric ID and critical infrastructure:</p>
                            <ol className="mt-4 space-y-2 text-sm text-tertiary list-decimal list-inside">
                                <li><strong>Implement</strong> all Article 9-15 requirements</li>
                                <li><strong>Engage</strong> a notified body</li>
                                <li><strong>Submit</strong> technical documentation for review</li>
                                <li><strong>Address</strong> any findings</li>
                                <li><strong>Obtain</strong> conformity certificate</li>
                                <li><strong>Affix</strong> CE marking</li>
                                <li><strong>Register</strong> in EU database</li>
                            </ol>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const TimelineSection = () => {
    const phases = [
        { phase: "Assessment", timeline: "Now", activities: "Classify systems, identify gaps" },
        { phase: "Planning", timeline: "Q1 2026", activities: "Resource allocation, project planning" },
        { phase: "Implementation", timeline: "Q2-Q3 2026", activities: "Build compliance, create documentation" },
        { phase: "Testing", timeline: "Q3 2026", activities: "Verify conformity, address gaps" },
        { phase: "Certification", timeline: "Q3 2026", activities: "Conformity assessment, registration" },
        { phase: "Compliance", timeline: "Aug 2, 2026", activities: "Full compliance required" },
    ];

    const sixMonthPlan = [
        {
            months: "Months 1-2: Foundation",
            tasks: ["Complete risk classification for all AI systems", "Identify which systems are high-risk", "Gap analysis against Articles 9-15", "Resource and budget planning"],
        },
        {
            months: "Months 3-4: Core Implementation",
            tasks: ["Implement risk management system", "Document data governance", "Create technical documentation", "Implement logging capabilities"],
        },
        {
            months: "Months 5-6: Finalization",
            tasks: ["Complete all documentation", "Conduct conformity assessment", "Register in EU database", "Train team on ongoing compliance"],
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
                        Implementation Timeline
                    </h2>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Now → August 2026</h3>
                    <div className="mt-4 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full text-sm">
                            <thead className="bg-secondary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Phase</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Timeline</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Activities</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                {phases.map((phase) => (
                                    <tr key={phase.phase}>
                                        <td className="px-4 py-2 font-medium text-primary">{phase.phase}</td>
                                        <td className="px-4 py-2 text-brand-600">{phase.timeline}</td>
                                        <td className="px-4 py-2 text-tertiary">{phase.activities}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 className="mt-8 text-lg font-semibold text-primary">Recommended 6-Month Plan</h3>
                    <div className="mt-4 space-y-4">
                        {sixMonthPlan.map((phase) => (
                            <div key={phase.months} className="rounded-xl border border-primary bg-secondary p-4">
                                <h4 className="font-semibold text-primary">{phase.months}</h4>
                                <ul className="mt-2 space-y-1 text-sm text-tertiary">
                                    {phase.tasks.map((task) => (
                                        <li key={task}>• {task}</li>
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

const MistakesSection = () => {
    const mistakes = [
        {
            mistake: "Waiting Too Long",
            quote: "We'll deal with it when enforcement starts.",
            reality: "Implementation takes 6+ months. Starting in 2026 is too late.",
        },
        {
            mistake: "Underestimating Scope",
            quote: "We only have a few AI features.",
            reality: "Every AI system needs classification. Many companies discover more high-risk systems than expected.",
        },
        {
            mistake: "Documentation-Only Approach",
            quote: "We'll just create the documents.",
            reality: "Documentation must reflect real processes. Auditors will verify implementation.",
        },
        {
            mistake: "Ignoring Continuous Compliance",
            quote: "We're compliant now, we're done.",
            reality: "Risk management is continuous. Documentation needs updates. Logs need monitoring.",
        },
        {
            mistake: "DIY for Complex Systems",
            quote: "We can figure this out ourselves.",
            reality: "High-risk compliance is complex. Professional tools and/or expert guidance often pay for themselves.",
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
                        Common Mistakes
                    </h2>
                    <div className="mt-8 space-y-4">
                        {mistakes.map((item, index) => (
                            <div key={item.mistake} className="rounded-xl border border-primary bg-primary p-4">
                                <h3 className="font-semibold text-primary">{index + 1}. {item.mistake}</h3>
                                <p className="mt-2 text-sm italic text-tertiary">"{item.quote}"</p>
                                <p className="mt-2 text-sm text-tertiary">
                                    <strong>Reality:</strong> {item.reality}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const PenaltiesSection = () => {
    const penalties = [
        { violation: "Non-compliance with high-risk requirements", penalty: "€15 million or 3% of global annual turnover" },
        { violation: "Failure to register in EU database", penalty: "€7.5 million or 1.5% of turnover" },
        { violation: "Providing incorrect information", penalty: "€7.5 million or 1.5% of turnover" },
    ];

    const otherConsequences = [
        "Market withdrawal orders",
        "Recall of non-compliant systems",
        "Prohibition of market placement",
        "Reputational damage",
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
                        Penalties for Non-Compliance
                    </h2>
                    <div className="mt-8 overflow-hidden rounded-xl border border-primary">
                        <table className="w-full text-sm">
                            <thead className="bg-secondary">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Violation</th>
                                    <th className="px-4 py-3 text-left font-semibold text-primary">Maximum Penalty</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-primary">
                                {penalties.map((item) => (
                                    <tr key={item.violation}>
                                        <td className="px-4 py-3 text-tertiary">{item.violation}</td>
                                        <td className="px-4 py-3 font-medium text-warning-600">{item.penalty}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-tertiary">Beyond fines:</p>
                    <ul className="mt-2 space-y-1 text-tertiary">
                        {otherConsequences.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                                <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0 text-warning-500" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

const HowProtectronHelpsSection = () => {
    const features = [
        { title: "Risk Classification", description: "Instantly determine if your AI is high-risk. Understand which Annex III category applies." },
        { title: "Requirement Tracking", description: "Track all 113 high-risk requirements. See progress across Articles 9-15." },
        { title: "Document Generation", description: "Generate required documentation with AI. Technical documentation templates." },
        { title: "Audit Trail (Article 12)", description: "Automatic logging via SDK. LangChain, CrewAI integration." },
        { title: "Evidence Management", description: "Centralized evidence repository. Link evidence to requirements." },
        { title: "Compliance Reporting", description: "Real-time compliance score. Progress dashboards." },
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
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm text-center">
                        How Protectron Helps
                    </h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.title} className="rounded-xl border border-primary bg-primary p-4">
                                <h3 className="font-semibold text-primary">{feature.title}</h3>
                                <p className="mt-2 text-sm text-tertiary">{feature.description}</p>
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
        { title: "Article 12 Guide", href: "/guide/article-12", description: "Deep dive on logging" },
        { title: "GPAI Requirements", href: "/guide/gpai", description: "If using foundation models" },
        { title: "Risk Classification", href: "/features/risk-classification", description: "Classify your systems" },
        { title: "Compliance Checklist", href: "/resources/eu-ai-act-checklist", description: "Downloadable PDF" },
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
                        Get Started
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        High-risk compliance is complex, but it's manageable with the right tools.
                    </p>
                    <p className="mt-2 text-white/70">
                        Classify your AI systems, track requirements, and generate documentation—all in one platform.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/assessment">
                            Start Your Free Trial
                        </Button>
                        <Button size="xl" color="link-gray" href="mailto:hello@protectron.ai" className="text-white hover:text-white/80">
                            Contact Us →
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-white/60 italic">
                        Questions about high-risk compliance? Contact us for a personalized assessment.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default function HighRiskAIGuidePage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <OverviewSection />
            <ClassificationSection />
            <DeepDiveSection />
            <RequirementsSection />
            <ConformitySection />
            <TimelineSection />
            <MistakesSection />
            <PenaltiesSection />
            <HowProtectronHelpsSection />
            <RelatedResourcesSection />
            <CTASection />
            <Footer />
        </div>
    );
}
