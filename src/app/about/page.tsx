"use client";

import { motion } from "motion/react";
import { Target, Heart, Eye, Shield, Sparkles, Users, Globe, Lock, CheckCircle2, ArrowRight, Linkedin, Mail } from "lucide-react";
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
                        Our Story
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        About Protectron
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        Making AI compliance accessible to everyone building the future.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const MissionSection = () => {
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
                        Our Mission
                    </h2>
                    <p className="mt-6 text-lg text-tertiary">
                        We believe every company building with AI—from two-person startups to growing scale-ups—deserves access to world-class compliance tools. Not just the enterprises with six-figure budgets.
                    </p>
                    <p className="mt-4 text-tertiary">
                        The EU AI Act is the most significant AI regulation in history. It will shape how AI is built and deployed for decades to come. But navigating it shouldn't require an army of lawyers and consultants.
                    </p>
                    <div className="mt-8 rounded-xl border border-brand-200 bg-brand-50 dark:border-brand-800 dark:bg-brand-900/20 p-6">
                        <p className="text-lg font-semibold text-brand-700 dark:text-brand-400">
                            Protectron exists to democratize AI compliance.
                        </p>
                        <p className="mt-2 text-tertiary">
                            We're building the tools that make it possible for any team to understand their obligations, track their progress, and demonstrate compliance—without breaking the bank or losing months to bureaucracy.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const StorySection = () => {
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
                        The Story
                    </h2>
                    
                    <div className="mt-8 space-y-12">
                        <div>
                            <h3 className="text-lg font-semibold text-primary">It Started with a Problem</h3>
                            <p className="mt-4 text-tertiary">
                                The EU AI Act dropped, and suddenly every AI company had the same question: <em>"What do we actually need to do?"</em>
                            </p>
                            <p className="mt-4 text-tertiary">
                                I watched as enterprise companies hired expensive consultancies and spun up dedicated compliance teams. They'd figure it out—they always do. But what about everyone else?
                            </p>
                            <p className="mt-4 text-tertiary">
                                What about the three-person startup building an AI hiring tool? The bootstrapped founder shipping an AI customer service agent? The growing company that just raised their Series A and suddenly realized their AI touches European users?
                            </p>
                            <p className="mt-4 text-tertiary">They were left with two options:</p>
                            <ol className="mt-4 space-y-3 text-tertiary list-decimal list-inside">
                                <li><strong>Pay enterprise prices.</strong> €100,000+ for consultants. Six-figure compliance platforms. Months of implementation.</li>
                                <li><strong>Figure it out themselves.</strong> Read 400 pages of regulatory text. Hope you're interpreting it correctly. Pray you don't miss something critical.</li>
                            </ol>
                            <p className="mt-4 text-tertiary">Neither option made sense. There had to be a better way.</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">Building at the Frontier</h3>
                            <p className="mt-4 text-tertiary">
                                I'm a product engineer at Anthropic, where I work on AI systems every day. I've seen firsthand how complex these systems can be—and how important it is to build them responsibly.
                            </p>
                            <p className="mt-4 text-tertiary">
                                Anthropic's mission is the responsible development and maintenance of advanced AI for the long-term benefit of humanity. That ethos shapes everything we do: the models we build, the safety research we publish, the way we think about AI's role in society.
                            </p>
                            <p className="mt-4 text-tertiary">
                                Working in that environment gave me a unique perspective on the EU AI Act. I understood both sides: the technical reality of building AI systems, and the genuine need for thoughtful regulation.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">The Underserved Market</h3>
                            <p className="mt-4 text-tertiary">
                                I started talking to founders. Compliance leads at startups. CTOs at growing companies. The same pattern emerged everywhere:
                            </p>
                            <div className="mt-4 space-y-3">
                                <blockquote className="border-l-4 border-brand-300 pl-4 italic text-tertiary">
                                    "We know we need to comply, but we don't know where to start."
                                </blockquote>
                                <blockquote className="border-l-4 border-brand-300 pl-4 italic text-tertiary">
                                    "The enterprise tools cost more than our entire annual software budget."
                                </blockquote>
                                <blockquote className="border-l-4 border-brand-300 pl-4 italic text-tertiary">
                                    "We spent weeks trying to understand if we're even high-risk."
                                </blockquote>
                                <blockquote className="border-l-4 border-brand-300 pl-4 italic text-tertiary">
                                    "Our investors are asking about EU AI Act, and we have nothing to show them."
                                </blockquote>
                            </div>
                            <p className="mt-4 text-tertiary">
                                These weren't edge cases. This was the <em>majority</em> of companies building with AI. The market was completely underserved. Enterprise had options. Everyone else was left behind.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-primary">From Idea to Product</h3>
                            <p className="mt-4 text-tertiary">
                                Protectron started as a simple question: <em>What would AI compliance look like if it were designed for startups first?</em>
                            </p>
                            <p className="mt-4 text-tertiary">
                                Not a stripped-down enterprise tool. Not a glorified checklist. A purpose-built platform that understands how modern AI teams actually work.
                            </p>
                            <div className="mt-6 grid gap-4 md:grid-cols-2">
                                <div className="rounded-lg bg-secondary p-4">
                                    <p className="font-semibold text-primary">Fast</p>
                                    <p className="text-sm text-tertiary">Because startups can't wait 6 months for implementation.</p>
                                </div>
                                <div className="rounded-lg bg-secondary p-4">
                                    <p className="font-semibold text-primary">Affordable</p>
                                    <p className="text-sm text-tertiary">Because a three-person team shouldn't pay enterprise prices.</p>
                                </div>
                                <div className="rounded-lg bg-secondary p-4">
                                    <p className="font-semibold text-primary">Developer-first</p>
                                    <p className="text-sm text-tertiary">Because compliance needs to integrate with how you already build.</p>
                                </div>
                                <div className="rounded-lg bg-secondary p-4">
                                    <p className="font-semibold text-primary">Comprehensive</p>
                                    <p className="text-sm text-tertiary">Because cutting corners on compliance isn't an option.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const WhyMattersSection = () => {
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
                        Why This Matters
                    </h2>
                    <p className="mt-6 text-tertiary">
                        The EU AI Act isn't just another regulation. It's the foundation for how AI will be governed globally.
                    </p>
                    <p className="mt-4 text-tertiary">
                        When GDPR passed, everyone said it would never work. Too complex. Too burdensome. Too European. Then it became the global standard for data privacy.
                    </p>
                    <p className="mt-4 text-tertiary">
                        The same thing is happening with AI regulation. The EU AI Act is setting the template. Other jurisdictions are watching. Companies that get this right now will have a massive advantage.
                    </p>
                    <div className="mt-8 rounded-xl border border-primary bg-primary p-6">
                        <p className="font-semibold text-primary">But more importantly: responsible AI development is just good business.</p>
                        <ul className="mt-4 space-y-2 text-tertiary">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                                Users trust AI products that can prove they're safe and fair.
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                                Enterprise customers require compliance before signing contracts.
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-success-500" />
                                Investors see regulation readiness as a sign of operational maturity.
                            </li>
                        </ul>
                        <p className="mt-4 text-tertiary">
                            Compliance isn't a tax on innovation. It's the foundation for sustainable growth.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ValuesSection = () => {
    const values = [
        {
            title: "Accessibility First",
            description: "The best compliance tools shouldn't be reserved for companies with the biggest budgets. We price fairly, document thoroughly, and build for teams of all sizes.",
            icon: Users,
        },
        {
            title: "Developer Experience Matters",
            description: "Compliance shouldn't mean fighting your tools. Our SDK integrates in minutes. Our API is clean and well-documented. We meet developers where they are.",
            icon: Target,
        },
        {
            title: "Transparency Always",
            description: "We're building trust infrastructure. That starts with being transparent ourselves—about our product, our pricing, our limitations, and our roadmap.",
            icon: Eye,
        },
        {
            title: "Substance Over Theater",
            description: "Compliance isn't about checking boxes. It's about building AI systems that are actually safe, fair, and transparent. We help you achieve real compliance, not just the appearance of it.",
            icon: Shield,
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
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm text-center">
                        Our Values
                    </h2>
                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        {values.map((value) => (
                            <div key={value.title} className="rounded-xl border border-primary bg-secondary p-6">
                                <value.icon className="h-8 w-8 text-brand-600" />
                                <h3 className="mt-4 text-lg font-semibold text-primary">{value.title}</h3>
                                <p className="mt-2 text-tertiary">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const FounderSection = () => {
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
                        Meet the Founder
                    </h2>
                    <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">
                        <div className="shrink-0">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-5xl font-bold">
                                C
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-primary">Cyriac</h3>
                            <p className="text-brand-600 font-medium">Founder</p>
                            <p className="mt-4 text-tertiary">
                                Product engineer at Anthropic. Founder at heart. Building things that help people.
                            </p>
                            <p className="mt-4 text-tertiary">
                                I've been starting companies for as long as I can remember. There's something deeply satisfying about seeing a problem, imagining a solution, and then actually building it. Protectron is the latest chapter in that journey—but it might be the most important one yet.
                            </p>
                            <p className="mt-4 text-tertiary">
                                When I'm not working on Protectron, I'm at Anthropic helping build AI systems that are safe and beneficial. The two worlds inform each other constantly. Understanding how AI actually works makes me better at building compliance tools. Thinking about compliance makes me more thoughtful about AI development.
                            </p>
                            <p className="mt-4 text-tertiary">
                                I believe we're at an inflection point for AI. The decisions we make now—about safety, about regulation, about who gets access to these tools—will shape the next decade of technology. I want to be part of building that future responsibly.
                            </p>
                            <a 
                                href="https://www.linkedin.com/in/cyriac-zeh/" 
                                className="mt-4 inline-flex items-center gap-2 text-brand-600 hover:underline"
                            >
                                <Linkedin className="h-4 w-4" />
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const RoadmapSection = () => {
    const roadmap = [
        {
            term: "Near Term",
            items: [
                "More framework integrations (Vercel AI SDK, Haystack, and more)",
                "Multi-language document generation (German, French, Spanish, Italian)",
                "Slack and Jira integrations for workflow automation",
                "Industry-specific compliance templates",
            ],
        },
        {
            term: "Medium Term",
            items: [
                "Continuous compliance monitoring with automated alerts",
                "AI-powered gap analysis and remediation suggestions",
                "Regulatory change tracking and impact assessment",
                "Audit simulation and preparation tools",
            ],
        },
        {
            term: "Long Term",
            items: [
                "Global AI regulation coverage (UK AI Act, US state laws, international frameworks)",
                "Compliance-as-code for CI/CD pipelines",
                "Industry benchmarking and best practices",
                "Open source contributions to the AI governance ecosystem",
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
                        What We're Building Toward
                    </h2>
                    <p className="mt-4 text-tertiary">
                        Protectron V1 is just the beginning. Here's where we're headed:
                    </p>
                    <div className="mt-8 space-y-8">
                        {roadmap.map((phase) => (
                            <div key={phase.term}>
                                <h3 className="text-lg font-semibold text-primary">{phase.term}</h3>
                                <ul className="mt-3 space-y-2">
                                    {phase.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-tertiary">
                                            <Sparkles className="h-4 w-4 mt-1 shrink-0 text-brand-600" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <p className="mt-8 text-tertiary">
                        We're building the compliance infrastructure for the AI era. And we're doing it in public, with our community.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const TrustSection = () => {
    const badges = [
        { icon: Globe, title: "EU Data Residency", subtitle: "Frankfurt, Germany" },
        { icon: Lock, title: "SOC 2 Type II", subtitle: "In Progress" },
        { icon: CheckCircle2, title: "GDPR Compliant", subtitle: "Full Compliance" },
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto max-w-3xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">
                        Backed by Trust
                    </h2>
                    <div className="mt-8 flex flex-wrap justify-center gap-8">
                        {badges.map((badge) => (
                            <div key={badge.title} className="text-center">
                                <badge.icon className="h-8 w-8 mx-auto text-brand-600" />
                                <p className="mt-2 font-semibold text-primary">{badge.title}</p>
                                <p className="text-sm text-tertiary">{badge.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ContactSection = () => {
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
                        Get in Touch
                    </h2>
                    <p className="mt-4 text-tertiary">
                        Have questions? Want to learn more? We'd love to hear from you.
                    </p>
                    <a 
                        href="mailto:hello@protectron.ai"
                        className="mt-6 flex items-center gap-3 rounded-xl border border-primary bg-primary p-4 hover:border-brand-300 transition-colors max-w-md"
                    >
                        <Mail className="h-5 w-5 text-brand-600" />
                        <div>
                            <p className="font-medium text-primary">Contact Us</p>
                            <p className="text-sm text-brand-600">hello@protectron.ai</p>
                        </div>
                    </a>

                    <div className="mt-8 rounded-xl border border-primary bg-primary p-6">
                        <h3 className="font-semibold text-primary">Company Details</h3>
                        <p className="mt-2 text-tertiary">
                            <strong>Protectron B.V.</strong><br />
                            Registered in the Netherlands
                        </p>
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
                    <p className="text-lg text-white/70 italic">
                        Building the future of AI compliance, one company at a time.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/assessment">
                            Start Free Trial
                        </Button>
                        <Button size="xl" color="link-gray" href="/contact" className="text-white hover:text-white/80">
                            Contact Us →
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default function AboutPage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <MissionSection />
            <StorySection />
            <WhyMattersSection />
            <ValuesSection />
            <FounderSection />
            <RoadmapSection />
            <TrustSection />
            <ContactSection />
            <CTASection />
            <Footer />
        </div>
    );
}
