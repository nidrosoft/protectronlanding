"use client";

import { motion } from "motion/react";
import { ArrowRight, Users, Heart, Building2, TrendingUp } from "lucide-react";
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
                        Customer Stories
                    </span>
                    <h1 className="mt-6 text-display-md font-semibold text-primary md:text-display-lg">
                        Case Studies
                    </h1>
                    <p className="mt-6 text-lg text-tertiary md:text-xl">
                        See how AI companies achieve EU AI Act compliance and accelerate enterprise sales with Protectron.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const CaseStudiesSection = () => {
    const caseStudies = [
        {
            slug: "talentflow-ai",
            company: "TalentFlow AI",
            industry: "HR Technology / Recruitment AI",
            headline: "How a Series A Startup Closed €2.1M in Enterprise Deals by Getting EU AI Act Compliant in 2 Weeks",
            description: "TalentFlow AI was losing enterprise deals because they couldn't demonstrate EU AI Act compliance. Using Protectron, they achieved full compliance in 2 weeks and closed three enterprise deals worth €2.1M.",
            stats: [
                { label: "Time to Compliance", value: "2 weeks" },
                { label: "Deals Closed", value: "€2.1M" },
                { label: "ROI", value: "11,200%" },
            ],
            icon: Users,
            color: "bg-blue-100 dark:bg-blue-900/30",
            iconColor: "text-blue-600",
        },
        {
            slug: "medassist-ai",
            company: "MedAssist AI",
            industry: "Healthcare / Clinical AI",
            headline: "How a Healthcare AI Scale-Up Achieved 94% Compliance Across 8 AI Systems in 6 Weeks",
            description: "MedAssist AI needed comprehensive EU AI Act compliance for 8 AI systems—including 3 autonomous agents—to enter new markets and win hospital contracts. They achieved 94% compliance and closed €5.1M in deals.",
            stats: [
                { label: "AI Systems", value: "8" },
                { label: "Compliance Score", value: "94%" },
                { label: "Deals Closed", value: "€5.1M" },
            ],
            icon: Heart,
            color: "bg-rose-100 dark:bg-rose-900/30",
            iconColor: "text-rose-600",
        },
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    {caseStudies.map((study, index) => (
                        <motion.a
                            key={study.slug}
                            href={`/case-studies/${study.slug}`}
                            className="group rounded-2xl border border-primary bg-primary p-8 shadow-sm transition-all hover:shadow-lg hover:border-brand-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${study.color}`}>
                                    <study.icon className={`h-6 w-6 ${study.iconColor}`} />
                                </div>
                                <div>
                                    <p className="font-semibold text-primary">{study.company}</p>
                                    <p className="text-sm text-tertiary">{study.industry}</p>
                                </div>
                            </div>
                            <h2 className="mt-6 text-xl font-semibold text-primary group-hover:text-brand-600 transition-colors">
                                {study.headline}
                            </h2>
                            <p className="mt-4 text-tertiary">
                                {study.description}
                            </p>
                            <div className="mt-6 grid grid-cols-3 gap-4">
                                {study.stats.map((stat) => (
                                    <div key={stat.label} className="text-center">
                                        <p className="text-2xl font-bold text-brand-600">{stat.value}</p>
                                        <p className="text-xs text-tertiary">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 flex items-center gap-2 text-brand-600 font-medium">
                                Read Case Study
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ResultsSection = () => {
    const results = [
        { value: "€7.2M+", label: "Enterprise deals closed" },
        { value: "2-6 weeks", label: "Average time to compliance" },
        { value: "94%+", label: "Average compliance score" },
        { value: "5,400%+", label: "Average ROI" },
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
                        Results Our Customers Achieve
                    </h2>
                </motion.div>
                <div className="mt-12 grid gap-6 md:grid-cols-4">
                    {results.map((result, index) => (
                        <motion.div
                            key={result.label}
                            className="rounded-xl border border-primary bg-secondary p-6 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <p className="text-3xl font-bold text-brand-600">{result.value}</p>
                            <p className="mt-2 text-tertiary">{result.label}</p>
                        </motion.div>
                    ))}
                </div>
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
                        Ready to Write Your Success Story?
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        Join companies like TalentFlow AI and MedAssist AI who've transformed compliance from a blocker into a competitive advantage.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="xl" color="secondary" href="/assessment">
                            Start Free Trial
                        </Button>
                        <Button size="xl" color="link-gray" href="/pricing" className="text-white hover:text-white/80">
                            View Pricing
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-white/60">No credit card required • 100,000 events free</p>
                </motion.div>
            </div>
        </section>
    );
};

export default function CaseStudiesPage() {
    return (
        <div className="bg-primary">
            <Header />
            <HeroSection />
            <CaseStudiesSection />
            <ResultsSection />
            <CTASection />
            <Footer />
        </div>
    );
}
