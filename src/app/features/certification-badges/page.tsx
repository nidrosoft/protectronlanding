"use client";

import { motion } from "motion/react";
import { CheckCircle2, Shield, Award, Eye, Globe, Code, Palette, Link2, Download, Users } from "lucide-react";
import { TickCircle } from "iconsax-react";
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
                        Trust & Transparency
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        Show Your AI Compliance. Prove It Instantly.
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        Display verifiable EU AI Act compliance badges on your website, product, and sales materials. One click from your badge to real-time compliance verification—building trust with customers, partners, and regulators.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="primary" href="/assessment">
                            Get Your Compliance Badge
                        </Button>
                        <Button size="xl" color="secondary" href="#badge-types">
                            See Live Examples
                        </Button>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-tertiary">
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-success-500" />
                            Real-time verification
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-success-500" />
                            Embeddable in minutes
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-success-500" />
                            Links to full compliance documentation
                        </span>
                    </div>
                </motion.div>
                <motion.div 
                    className="mt-12 mx-auto max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="rounded-xl border-2 border-success-500 bg-white dark:bg-gray-900 p-6 text-center shadow-lg">
                        <div className="flex items-center justify-center gap-2">
                            <CheckCircle2 className="h-6 w-6 text-success-500" />
                            <span className="text-lg font-semibold text-primary">EU AI Act Compliant</span>
                        </div>
                        <p className="mt-2 text-sm text-tertiary">Verified by Protectron</p>
                        <p className="mt-1 text-xs text-brand-600 hover:underline cursor-pointer">Click to verify →</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ProblemSection = () => {
    const problems = [
        {
            icon: "🤷",
            title: '"Trust Us" Isn\'t Enough',
            description: "Enterprise customers, partners, and regulators increasingly demand proof of AI compliance. A checkbox on your website saying \"EU AI Act Compliant\" means nothing without verification.",
        },
        {
            icon: "📋",
            title: "Audit Requests Are Time-Consuming",
            description: "Every enterprise deal, every partnership, every regulatory inquiry requires pulling together compliance documentation. You're answering the same questions repeatedly.",
        },
        {
            icon: "🔍",
            title: "Customers Can't Verify Claims",
            description: "When a prospect asks \"Are you EU AI Act compliant?\", they have no way to verify your answer. They're taking your word for it—and sophisticated buyers don't do that anymore.",
        },
        {
            icon: "⚖️",
            title: "False Claims Are Risky",
            description: "Claiming compliance you can't prove isn't just bad practice—it's potential legal exposure. When regulations have teeth, unverified claims become liabilities.",
        },
        {
            icon: "🏆",
            title: "Competitors Are Getting Certified",
            description: "As EU AI Act enforcement approaches, companies with verifiable compliance will win deals over those with just promises. Compliance is becoming a competitive advantage.",
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
                        Compliance Claims Without Proof Don't Build Trust
                    </h2>
                    <p className="mt-4 text-lg text-tertiary">
                        Everyone says they're compliant. But in a world of increasing AI regulation, claims without verification are worthless—or worse, risky.
                    </p>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {problems.slice(0, 3).map((problem, index) => (
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
                <div className="mt-6 grid gap-6 md:grid-cols-2 md:max-w-2xl md:mx-auto">
                    {problems.slice(3).map((problem, index) => (
                        <motion.div
                            key={problem.title}
                            className="rounded-2xl border border-primary bg-primary p-6 shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index + 3) * 0.1 }}
                        >
                            <span className="text-3xl">{problem.icon}</span>
                            <h3 className="mt-4 text-lg font-semibold text-primary">{problem.title}</h3>
                            <p className="mt-2 text-tertiary">{problem.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SolutionSection = () => {
    const benefits = [
        {
            title: "Instant Credibility",
            description: "Professional badges that signal compliance maturity. Display on your website, in sales decks, and product interfaces.",
        },
        {
            title: "Real-Time Verification",
            description: "Every badge links to a live verification page showing current compliance status, last audit date, and coverage details.",
        },
        {
            title: "Zero Maintenance",
            description: "Badges update automatically as your compliance status changes. No manual updates, no stale claims.",
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
                        Compliance You Can Display. Verification Anyone Can Check.
                    </h2>
                    <p className="mt-4 mx-auto max-w-3xl text-lg text-tertiary">
                        Protectron Certification Badges are embeddable trust indicators that link directly to your real-time compliance status. When someone clicks your badge, they see verified compliance data—not just a claim.
                    </p>
                </motion.div>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/30">
                                <CheckCircle2 className="h-6 w-6 text-brand-600" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-primary">{benefit.title}</h3>
                            <p className="mt-2 text-tertiary">{benefit.description}</p>
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
            title: "Achieve Compliance Coverage",
            description: "Classify your AI systems, track requirements, collect evidence, and maintain audit trails. Badges reflect your real compliance status.",
        },
        {
            number: "2",
            title: "Generate Your Badge",
            description: "Once eligible (70%+ coverage, no critical gaps), generate your badge from Settings → Certification Badges. Choose type, style, and systems to include.",
        },
        {
            number: "3",
            title: "Embed on Your Properties",
            description: "Add the badge to your website, product, or materials using HTML embed, React component, JavaScript widget, or static image.",
        },
        {
            number: "4",
            title: "Anyone Can Verify",
            description: "When someone clicks your badge, they see your verification page with compliance status, AI systems covered, and article-by-article breakdown.",
        },
        {
            number: "5",
            title: "Automatic Updates",
            description: "Your badge and verification page update automatically. Changes in Protectron reflect within minutes—no manual updates needed.",
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
                        How Certification Badges Work
                    </h2>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-5">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className="text-center"
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

const BadgeTypesSection = () => {
    const badgeTypes = [
        {
            icon: Award,
            title: "Standard Badge",
            description: "The most popular choice. Clean, professional, immediately recognizable.",
            bestFor: "Website footers, product pages, trust sections",
        },
        {
            icon: "📊",
            title: "Detailed Badge",
            description: "Shows coverage percentage, AI systems count, and last audit date at a glance.",
            bestFor: "Enterprise sales materials, partner portals, detailed trust pages",
        },
        {
            icon: "⚡",
            title: "Minimal Badge",
            description: "Small footprint, maximum impact. For space-constrained contexts.",
            bestFor: "Product interfaces, email signatures, mobile apps",
        },
        {
            icon: "🎯",
            title: "System-Specific Badge",
            description: "Badge for a specific AI system, showing its risk level and compliance status.",
            bestFor: "Product pages for specific AI features, API documentation",
        },
        {
            icon: "🏢",
            title: "Enterprise Badge",
            description: "Custom branding with your logo alongside Protectron verification.",
            bestFor: "Enterprise customers, co-branded materials, partner pages",
        },
        {
            icon: "📅",
            title: "Time-Bounded Badge",
            description: "Shows specific compliance period. For annual certifications.",
            bestFor: "Annual compliance certifications, audit cycles",
        },
    ];

    return (
        <section id="badge-types" className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                        Choose Your Badge Style
                    </h2>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {badgeTypes.map((badge, index) => (
                        <motion.div
                            key={badge.title}
                            className="rounded-2xl border border-primary bg-secondary p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            {typeof badge.icon === 'string' ? (
                                <span className="text-3xl">{badge.icon}</span>
                            ) : (
                                <badge.icon className="h-8 w-8 text-brand-600" />
                            )}
                            <h3 className="mt-4 text-lg font-semibold text-primary">{badge.title}</h3>
                            <p className="mt-2 text-tertiary">{badge.description}</p>
                            <p className="mt-3 text-sm text-brand-600"><span className="font-medium">Best for:</span> {badge.bestFor}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const BadgeStatesSection = () => {
    const states = [
        {
            status: "Compliant",
            color: "text-success-500",
            bgColor: "bg-success-100 dark:bg-success-900/30",
            description: "Full compliance achieved. All requirements met or exceeded.",
            criteria: ["90%+ overall requirement coverage", "No critical compliance gaps", "All high-risk AI systems covered", "Evidence up to date"],
        },
        {
            status: "Substantially Compliant",
            color: "text-warning-500",
            bgColor: "bg-warning-100 dark:bg-warning-900/30",
            description: "High compliance with minor gaps.",
            criteria: ["70-89% overall requirement coverage", "No critical gaps", "Minor evidence gaps acceptable"],
        },
        {
            status: "Compliance in Progress",
            color: "text-brand-500",
            bgColor: "bg-brand-100 dark:bg-brand-900/30",
            description: "Actively working toward compliance.",
            criteria: ["Below 70% but actively tracking", "Clear improvement trajectory", "Commitment to compliance visible"],
        },
        {
            status: "Review Needed",
            color: "text-orange-500",
            bgColor: "bg-orange-100 dark:bg-orange-900/30",
            description: "Compliance status requires attention.",
            criteria: ["Evidence expired and not refreshed", "Significant compliance score drop", "New requirements not addressed"],
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
                        Dynamic Badge States
                    </h2>
                    <p className="mt-4 text-lg text-tertiary">
                        Badges reflect your actual compliance status in real-time.
                    </p>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {states.map((state, index) => (
                        <motion.div
                            key={state.status}
                            className="rounded-2xl border border-primary bg-primary p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex items-center gap-3">
                                <span className={`inline-flex items-center rounded-full ${state.bgColor} px-3 py-1 text-sm font-semibold ${state.color}`}>
                                    {state.status}
                                </span>
                            </div>
                            <p className="mt-3 text-tertiary">{state.description}</p>
                            <ul className="mt-4 space-y-2">
                                {state.criteria.map((criterion) => (
                                    <li key={criterion} className="flex items-start gap-2 text-sm text-tertiary">
                                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success-500" />
                                        {criterion}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const EmbedSection = () => {
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
                        Easy Embedding Options
                    </h2>
                    
                    <h3 className="mt-8 text-lg font-semibold text-primary">HTML Embed</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`<!-- Protectron Compliance Badge -->
<a href="https://verify.protectron.ai/org/your-org-id" 
   target="_blank" rel="noopener">
  <img 
    src="https://badges.protectron.ai/badge/your-org-id/standard-light.svg" 
    alt="EU AI Act Compliant - Verified by Protectron"
    width="200"
  />
</a>`}</code>
                    </pre>

                    <h3 className="mt-8 text-lg font-semibold text-primary">React Component</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`import { ProtectronBadge } from '@protectron/react-badge';

function Footer() {
  return (
    <footer>
      <ProtectronBadge 
        orgId="your-org-id"
        variant="standard"
        theme="auto"
        size="medium"
      />
    </footer>
  );
}`}</code>
                    </pre>

                    <h3 className="mt-8 text-lg font-semibold text-primary">JavaScript Widget</h3>
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                        <code>{`<div id="protectron-badge"></div>
<script src="https://badges.protectron.ai/widget.js"></script>
<script>
  ProtectronBadge.render({
    container: '#protectron-badge',
    orgId: 'your-org-id',
    variant: 'detailed',
    theme: 'dark'
  });
</script>`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};

const UseCasesSection = () => {
    const useCases = [
        {
            icon: Globe,
            title: "Website Footer",
            description: "The most common placement. Visible on every page, building trust with every visitor.",
        },
        {
            icon: "📄",
            title: "Product Pages",
            description: "Display on pages featuring AI capabilities. Prospects see compliance tied to specific features.",
        },
        {
            icon: "📊",
            title: "Sales Decks & Proposals",
            description: "Include in enterprise sales materials. Procurement teams can verify claims instantly.",
        },
        {
            icon: "📧",
            title: "Email Signatures",
            description: "Subtle compliance indicator in every email. Reinforces messaging continuously.",
        },
        {
            icon: "📱",
            title: "Product Interface",
            description: "Display within your AI-powered product. Users see compliance where they interact with AI.",
        },
        {
            icon: Users,
            title: "Partner Portal",
            description: "Display for partners and integrators. Build confidence in your compliance posture.",
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
                        Where to Display Your Badge
                    </h2>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={useCase.title}
                            className="rounded-2xl border border-primary bg-primary p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            {typeof useCase.icon === 'string' ? (
                                <span className="text-3xl">{useCase.icon}</span>
                            ) : (
                                <useCase.icon className="h-8 w-8 text-brand-600" />
                            )}
                            <h3 className="mt-4 text-lg font-semibold text-primary">{useCase.title}</h3>
                            <p className="mt-2 text-tertiary">{useCase.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const certificationBadgesFaqs = [
    {
        question: "What are the requirements to display a badge?",
        answer: "You need at least one AI system registered, risk classification completed, 70%+ requirement coverage, and no critical compliance gaps. Badges reflect your real compliance status.",
    },
    {
        question: "What happens if my compliance score drops?",
        answer: "Your badge automatically updates to reflect your current status. If compliance drops below threshold, the badge may show 'Substantially Compliant' or 'Review Needed' instead of 'Compliant'.",
    },
    {
        question: "Can I customize the badge appearance?",
        answer: "Yes, you can customize theme (light/dark/auto), colors, size, border radius, and content shown. Enterprise plans include custom branding with your logo.",
    },
    {
        question: "What do visitors see when they click the badge?",
        answer: "They see a verification page with your organization name, compliance status, AI systems covered, article-by-article breakdown, and options to download verification PDF or request full audit report.",
    },
    {
        question: "Is there an API for programmatic access?",
        answer: "Yes, we provide Badge Status API, Verification API, and webhooks for status changes. You can integrate badge status into your own systems.",
    },
    {
        question: "What languages are supported?",
        answer: "Badges and verification pages are available in English, German, French, Spanish, Italian, Dutch, Portuguese, Polish, and Swedish. Auto-detect uses visitor's browser language.",
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
                        Build Trust with Verifiable Compliance
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        Stop making claims you can't prove. Get a certification badge that links to real-time verification.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/assessment">
                            Get Your Badge
                        </Button>
                        <Button size="xl" color="link-gray" href="/pricing" className="text-white hover:text-white/80">
                            See Pricing
                        </Button>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
                        <span>✓ Real-time verification</span>
                        <span>✓ Multiple badge styles</span>
                        <span>✓ Automatic updates</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default function CertificationBadgesPage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <HowItWorksSection />
            <BadgeTypesSection />
            <BadgeStatesSection />
            <EmbedSection />
            <UseCasesSection />
            <FAQSection faqs={certificationBadgesFaqs} />
            <CTASection />
            <Footer />
        </div>
    );
}
