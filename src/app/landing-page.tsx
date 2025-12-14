"use client";

import { type FC, type ReactNode, useState, useRef } from "react";
import {
    ArrowRight,
    ArrowUpRight,
    ChartBreakoutSquare,
    Command,
    CreditCardRefresh,
    File05,
    Heart,
    Mail01,
    MessageChatCircle,
    MessageHeartCircle,
    MessageSmileCircle,
    PlayCircle,
    SlashCircle01,
    SwitchHorizontal01,
    Zap,
} from "@untitledui/icons";
import { ShieldTick, Play, Clock, MoneyRemove, Timer1, MessageQuestion, DocumentText, TaskSquare, Chart, TickCircle, SearchStatus, DocumentText1, Activity } from "iconsax-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { Avatar } from "@/components/base/avatar/avatar";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { VerifiedTick } from "@/components/base/avatar/base-components";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Badge, type BadgeColor } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Header } from "@/components/marketing/header-navigation/header";
import { PricingAbstractAngles } from "@/components/marketing/pricing-sections/pricing-abstract-angles";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { cx } from "@/utils/cx";

const HeroSection = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    
    // Mouse follow effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };
    
    return (
        <div 
            ref={heroRef} 
            className="relative overflow-hidden bg-primary"
            onMouseMove={handleMouseMove}
        >
            {/* Mouse follow glow effect */}
            <motion.div
                className="pointer-events-none absolute z-0 h-[500px] w-[500px] rounded-full bg-gradient-radial from-brand-200/20 via-brand-100/10 to-transparent blur-3xl dark:from-brand-600/10 dark:via-brand-500/5"
                style={{
                    x: useTransform(mouseX, (v) => v - 250),
                    y: useTransform(mouseY, (v) => v - 250),
                }}
            />
            
            {/* Background pattern - grid-check pattern positioned at top center */}
            <BackgroundPattern 
                pattern="grid-check" 
                size="md" 
                className="absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 md:block dark:brightness-[0.2]"
            />
            <BackgroundPattern 
                pattern="grid-check" 
                size="sm" 
                className="absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 md:hidden dark:brightness-[0.2]"
            />

            <Header isFloating />

            <section className="relative pt-16 md:pt-24">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
                        {/* Animated Badge */}
                        <motion.a 
                            href="#" 
                            className="rounded-[10px] outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                        >
                            <motion.div
                                animate={{ scale: [1, 1.02, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <BadgeGroup className="hidden md:flex" size="lg" addonText="Enforcement Active" iconTrailing={ArrowRight} theme="modern" color="brand">
                                    €35M fines are now in effect
                                </BadgeGroup>
                                <BadgeGroup className="md:hidden" size="md" addonText="Enforcement Active" iconTrailing={ArrowRight} theme="modern" color="brand">
                                    €35M fines are now in effect
                                </BadgeGroup>
                            </motion.div>
                        </motion.a>

                        {/* Animated Headline */}
                        <motion.h1 
                            className="mt-4 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                        >
                            EU AI Act Compliance in{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10">Weeks</span>
                                <motion.span 
                                    className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-brand-200 md:bottom-1.5 md:h-3.5 lg:bottom-2 lg:h-4"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                                    style={{ originX: 0 }}
                                />
                            </span>
                            {" "}<span className="text-tertiary">Not Months</span>
                        </motion.h1>

                        {/* Animated Subtitle */}
                        <motion.p 
                            className="mt-4 max-w-3xl text-lg text-balance text-tertiary md:mt-6 md:text-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                        >
                            Automated risk classification, documentation generation, and compliance tracking. Built for companies who can't afford enterprise tools or expensive consultants.
                        </motion.p>

                        {/* Animated Buttons */}
                        <motion.div 
                            className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                <Button color="secondary" size="xl">
                                    <span className="flex items-center gap-2">
                                        <Play size="20" color="currentColor" variant="Bold" />
                                        See How It Works
                                    </span>
                                </Button>
                            </motion.div>
                            <motion.div 
                                className="relative overflow-hidden rounded-lg"
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Shine effect */}
                                <motion.div
                                    className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "200%" }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                                />
                                <Button size="xl">
                                    <span className="flex items-center gap-2">
                                        <ShieldTick size="20" color="currentColor" variant="Bold" />
                                        Start Free Risk Assessment
                                    </span>
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Animated Trust Indicators */}
                        <motion.div 
                            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            {[
                                "No credit card required",
                                "10-minute risk assessment", 
                                "Instant compliance roadmap"
                            ].map((text, index) => (
                                <motion.div 
                                    key={text}
                                    className="flex items-center gap-2 text-sm text-tertiary"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                                >
                                    <TickCircle size="18" color="currentColor" variant="Bold" className="text-success-500" />
                                    <span>{text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Animated Dashboard Mockup */}
                <motion.div 
                    className="mx-auto mt-16 h-90 w-full max-w-container overflow-hidden px-4 md:h-124 md:px-8"
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    <motion.div 
                        className="mx-auto flex h-auto w-full max-w-70 items-center justify-center md:w-full md:max-w-none md:items-start"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="size-full rounded-[23.89px] bg-primary p-[3px] shadow-lg ring-[1.5px] ring-utility-gray-300 ring-inset md:rounded-[32px] md:p-1 md:ring-[2px]">
                            <div className="size-full rounded-[20.91px] bg-primary p-1 shadow-modern-mockup-inner-sm md:rounded-[28px] md:p-[5.4px] md:shadow-modern-mockup-inner-lg">
                                <div className="relative size-full overflow-hidden rounded-[17.92px] bg-utility-gray-50 ring-[1.5px] ring-utility-gray-200 md:rounded-[24px] md:ring-[2px]">
                                    {/* Light mode image (hidden in dark mode) */}
                                    <img
                                        alt="Dashboard mockup showing application interface"
                                        src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                        className="hidden size-full object-cover md:block dark:hidden"
                                    />
                                    {/* Dark mode image (hidden in light mode) */}
                                    <img
                                        alt="Dashboard mockup showing application interface"
                                        src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                        className="hidden size-full object-cover not-dark:hidden md:block"
                                    />

                                    {/* Light mode image (hidden in dark mode) */}
                                    <img
                                        alt="Iphone Screen Mockup"
                                        src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                                        className="size-full object-cover md:hidden dark:hidden"
                                    />
                                    {/* Dark mode image (hidden in light mode) */}
                                    <img
                                        alt="Iphone Screen Mockup"
                                        src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                                        className="size-full object-cover not-dark:hidden md:hidden"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};

const TrustedBySection = () => {
    const companies = [
        { name: "OpenAI", logo: "https://cdn.simpleicons.org/openai/000000" },
        { name: "Anthropic", logo: "https://cdn.simpleicons.org/anthropic/000000" },
        { name: "Meta", logo: "https://cdn.simpleicons.org/meta/0081FB" },
        { name: "Google", logo: "https://cdn.simpleicons.org/google/4285F4" },
        { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws/FF9900" },
        { name: "Hugging Face", logo: "https://cdn.simpleicons.org/huggingface/FFD21E" },
    ];
    
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="flex flex-col gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { 
                            opacity: 1,
                            transition: { staggerChildren: 0.08 }
                        }
                    }}
                >
                    <motion.p 
                        className="text-center text-md font-medium text-tertiary"
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        Trusted by AI teams at innovative companies
                    </motion.p>
                    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 xl:gap-x-14">
                        {companies.map((company, index) => (
                            <motion.div 
                                key={company.name}
                                className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300"
                                variants={{ 
                                    hidden: { opacity: 0, y: 20 }, 
                                    visible: { opacity: 0.6, y: 0, transition: { delay: index * 0.05 } } 
                                }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img 
                                    src={company.logo} 
                                    alt={company.name} 
                                    className="h-6 w-6 md:h-7 md:w-7 dark:invert"
                                />
                                <span className="text-md font-semibold text-primary md:text-lg">{company.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const DeclineChartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-error-400">
        <path d="M3 7L9 13L13 9L21 17M21 17V11M21 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const TimerStopIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-error-400">
        <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 4L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const CloudOffIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-error-400">
        <path d="M9.5 4.5C10.2372 4.17555 11.0691 4 12 4C15.3137 4 18 6.68629 18 10C18 10.0736 17.9988 10.147 17.9964 10.22M6.34141 6.34141C4.93498 7.41653 4 9.10212 4 11C4 14.3137 6.68629 17 10 17H16C16.7286 17 17.4117 16.8052 18 16.4649M3 3L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ProblemSection = () => {
    const painPoints = [
        {
            icon: MoneyRemove,
            rightIcon: DeclineChartIcon,
            label: "PROHIBITIVE COSTS",
            stat: "€50,000",
            statSuffix: "+",
            description: "Enterprise tools like Credo AI start at €50K/year. Consultants charge €400-800/hour. Most startups simply can't afford compliance.",
        },
        {
            icon: Timer1,
            rightIcon: TimerStopIcon,
            label: "THE TIME SINK",
            stat: "3–6",
            statSuffix: " Months",
            description: "Manual documentation takes forever. Understanding 400+ pages of regulation is a nightmare. Your team doesn't have time for this.",
        },
        {
            icon: MessageQuestion,
            rightIcon: CloudOffIcon,
            label: "REGULATORY FOG",
            stat: "Zero",
            statSuffix: " Clarity",
            description: "Is your AI high-risk? Limited risk? Prohibited? What documents do you need? How do you prove compliance to customers?",
        },
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto flex w-full max-w-3xl flex-col items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                    }}
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-error-200 bg-error-50 px-3 py-1 text-sm font-semibold text-error-700 dark:border-error-800 dark:bg-error-900/30 dark:text-error-400">
                            <span className="h-2 w-2 rounded-full bg-error-500" />
                            The Problem
                        </span>
                    </motion.div>
                    <motion.h2 
                        className="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        EU AI Act Compliance is Broken
                    </motion.h2>
                    <motion.p 
                        className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        The old way is broken. Current compliance methods are fragmented, expensive, and slow, actively hindering growth for AI startups in the EU.
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="mt-12 md:mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
                    }}
                >
                    <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                        {painPoints.map((item) => (
                            <motion.li 
                                key={item.label} 
                                className="relative flex flex-col rounded-3xl bg-primary p-6 shadow-sm ring-1 ring-primary md:p-8"
                                variants={{
                                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                                    visible: { 
                                        opacity: 1, 
                                        y: 0, 
                                        scale: 1,
                                        transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
                                    }
                                }}
                                whileHover={{ 
                                    y: -8, 
                                    scale: 1.02,
                                    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-error-100 dark:bg-error-900/30">
                                        <item.icon size="24" color="currentColor" variant="Bold" className="text-error-600 dark:text-error-400" />
                                    </div>
                                    <item.rightIcon />
                                </div>
                                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-tertiary">
                                    {item.label}
                                </p>
                                <p className="mt-2 text-display-sm font-bold text-primary md:text-display-md">
                                    {item.stat}<span className="font-normal text-tertiary">{item.statSuffix}</span>
                                </p>
                                <p className="mt-3 text-md text-tertiary">
                                    {item.description}
                                </p>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

const BlobPattern = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="532" height="480" viewBox="0 0 532 480" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M182.034 461.691C74.9901 428.768 1.32278 329.846 0.0121784 217.408C-1.15817 117.003 82.1936 43.2414 176.777 10.7273C260.07 -17.9056 346.327 12.9156 406.143 77.7959C484.913 163.236 571.343 274.645 512.702 375.097C449.003 484.212 302.448 498.727 182.034 461.691Z"
                className="fill-bg-secondary"
            />
        </svg>
    );
};

const SolutionFeatureItem = ({ 
    icon: Icon, 
    title, 
    subtitle 
}: { 
    icon: React.ElementType; 
    title: string; 
    subtitle: string;
}) => (
    <div className="flex flex-col gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-900/20">
            <Icon size="24" color="currentColor" variant="Bold" className="text-brand-600" />
        </div>
        <div>
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-1 text-md text-tertiary">{subtitle}</p>
        </div>
    </div>
);

const SolutionSection = () => {
    const leftFeatures = [
        {
            icon: ShieldTick,
            title: "Instant Risk Classification",
            subtitle: "Answer a simple questionnaire about your AI systems. Our platform automatically maps each system to the correct EU AI Act risk category and generates a personalized compliance roadmap.",
        },
        {
            icon: DocumentText,
            title: "Automated Documentation",
            subtitle: "Stop starting from blank pages. Our AI generates first drafts of every required document — technical documentation, model cards, data governance policies, and risk assessments.",
        },
    ];

    const rightFeatures = [
        {
            icon: TaskSquare,
            title: "Compliance Checklist & Tracking",
            subtitle: "Get a dynamic checklist of every requirement for your specific risk level. Upload evidence, assign tasks to team members, and track completion status in real-time.",
        },
        {
            icon: Chart,
            title: "Audit-Ready Reports",
            subtitle: "When regulators or enterprise customers ask for proof, generate comprehensive compliance reports with one click. Export professionally formatted documentation packages instantly.",
        },
    ];

    return (
        <section className="overflow-hidden bg-primary py-16 lg:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto flex w-full flex-col md:text-center lg:max-w-3xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                    }}
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <span className="inline-flex items-center rounded-full border border-success-200 bg-success-50 px-3 py-1 text-sm font-semibold text-success-700 dark:border-success-800 dark:bg-success-900/30 dark:text-success-400">
                            The Solution
                        </span>
                    </motion.div>
                    <motion.h2 
                        className="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        AI Compliance, Simplified
                    </motion.h2>
                    <motion.p 
                        className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        We built the compliance platform we wished existed — affordable, self-service, and designed to get you from "where do I start?" to "fully compliant" in weeks, not months.
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="z-10 mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 md:gap-16 lg:grid-cols-12 lg:items-start lg:gap-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
                    }}
                >
                    <motion.ul 
                        className="grid grid-cols-1 gap-x-8 gap-y-10 md:gap-y-12 lg:col-span-3"
                        variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
                    >
                        {leftFeatures.map((item) => (
                            <li key={item.title}>
                                <SolutionFeatureItem icon={item.icon} title={item.title} subtitle={item.subtitle} />
                            </li>
                        ))}
                    </motion.ul>

                    <motion.div 
                        className="relative order-last mt-2 flex h-90 w-full max-w-full items-center justify-center md:col-span-2 md:mt-0 md:h-160 md:overflow-visible lg:order-none lg:col-span-6 lg:overflow-hidden"
                        variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } }}
                    >
                        <img 
                            src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                            alt="Protectron.ai Dashboard"
                            className="absolute top-0 z-10 w-71 drop-shadow-2xl md:top-[auto] md:w-78.5 dark:hidden"
                        />
                        <img 
                            src="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                            alt="Protectron.ai Dashboard"
                            className="absolute top-0 z-10 w-71 drop-shadow-2xl md:top-[auto] md:w-78.5 hidden dark:block"
                        />
                        <span className="absolute top-20 inline-flex">
                            <BlobPattern />
                        </span>
                    </motion.div>

                    <motion.ul 
                        className="z-10 grid grid-cols-1 gap-x-8 gap-y-10 md:gap-y-12 lg:col-span-3"
                        variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
                    >
                        {rightFeatures.map((item) => (
                            <li key={item.title}>
                                <SolutionFeatureItem icon={item.icon} title={item.title} subtitle={item.subtitle} />
                            </li>
                        ))}
                    </motion.ul>
                </motion.div>
            </div>
        </section>
    );
};

const HowItWorksSection = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            title: "Assess Your Risk",
            subtitle: "Take our 10-minute questionnaire about your AI systems. We automatically classify each system by EU AI Act risk level and generate a personalized compliance roadmap.",
        },
        {
            title: "Generate Documentation",
            subtitle: "Our AI creates first drafts of every required compliance document — technical docs, model cards, risk assessments, and data governance policies. Review and customize in hours, not weeks.",
        },
        {
            title: "Track & Maintain Compliance",
            subtitle: "Monitor compliance status in real-time with our dashboard. Upload evidence, assign tasks to your team, and export audit-ready reports with one click.",
        },
    ];

    return (
        <section className="overflow-hidden bg-secondary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <motion.div 
                    className="flex w-full flex-col lg:max-w-3xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                    }}
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                            How It Works
                        </span>
                    </motion.div>
                    <motion.h2 
                        className="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        Get Compliant in 3 Simple Steps
                    </motion.h2>
                    <motion.p 
                        className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        From "where do I start?" to fully compliant in weeks. Our streamlined process guides you through every step of EU AI Act compliance.
                    </motion.p>
                </motion.div>

                <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
                    <ul className="flex flex-col">
                        {steps.map((item, index) => (
                            <li 
                                key={item.title} 
                                onMouseEnter={() => setActiveStep(index)}
                            >
                                <div 
                                    className={`border-l-4 py-4 pl-5 transition-all duration-300 ${
                                        activeStep === index 
                                            ? "border-brand-600 bg-brand-50 dark:bg-brand-900/20" 
                                            : "border-tertiary"
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300 ${
                                            activeStep === index 
                                                ? "bg-brand-600 text-white" 
                                                : "bg-tertiary text-primary"
                                        }`}>
                                            {index + 1}
                                        </span>
                                        <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                                            activeStep === index ? "text-brand-600" : "text-primary"
                                        }`}>
                                            {item.title}
                                        </h3>
                                        {index === 0 && (
                                            <span className="inline-flex items-center rounded-full border border-success-200 bg-success-50 px-2.5 py-0.5 text-xs font-semibold text-success-700 dark:border-success-800 dark:bg-success-900/30 dark:text-success-400">
                                                Free
                                            </span>
                                        )}
                                    </div>
                                    <p className="mt-2 pl-11 text-md text-tertiary">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="relative -ml-4 w-screen md:w-full lg:h-140">
                        <div className="-mx-4 flex items-center justify-center lg:absolute lg:mr-9.5 lg:-ml-0 lg:h-140 lg:w-[50vw] lg:justify-start">
                            <img
                                alt="Protectron.ai Dashboard"
                                src="https://www.untitledui.com/marketing/screen-mockups/mackbook-pro-screen-mockup-light.webp"
                                className="h-full object-contain lg:max-w-none dark:hidden"
                            />
                            <img
                                alt="Protectron.ai Dashboard"
                                src="https://www.untitledui.com/marketing/screen-mockups/mackbook-pro-screen-mockup-dark.webp"
                                className="h-full object-contain not-dark:hidden lg:max-w-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const WhyProtectronWinsSection = () => {
    const features = [
        { feature: "EU AI Act-specific design", protectron: "Core focus", enterprise: "One of many", vanta: "Add-on", consultants: "Varies" },
        { feature: "Risk classification engine", protectron: "Articles 5, 6, Annex III", enterprise: "Yes", vanta: "Yes", consultants: "Manual" },
        { feature: "Document generation", protectron: "AI-powered", enterprise: "Templates", vanta: "Templates", consultants: "You write" },
        { feature: "Requirements tracking", protectron: "Article-by-article", enterprise: "Yes", vanta: "Yes", consultants: "Manual" },
        { feature: "Self-service signup", protectron: "Start now", enterprise: "Sales cycle", vanta: "Demo first", consultants: "Meetings" },
        { feature: "Transparent pricing", protectron: "On website", enterprise: "Hidden", vanta: "Ranges only", consultants: "Quote required" },
    ];

    const renderCell = (value: string, isProtectron: boolean = false) => {
        const isPositive = value === "Core focus" || value === "AI-powered" || value === "Start now" || value === "On website" || value === "Articles 5, 6, Annex III" || value === "Article-by-article" || value === "Yes";
        const isNegative = value === "Hidden" || value === "Sales cycle" || value === "You write" || value === "Manual" || value === "Meetings" || value === "Quote required";
        
        if (isProtectron) {
            return (
                <span className="inline-flex items-center gap-1.5 font-medium text-success-600 dark:text-success-400">
                    <TickCircle size={16} variant="Bold" className="shrink-0" />
                    {value}
                </span>
            );
        }
        if (isNegative) {
            return <span className="text-error-600 dark:text-error-400">{value}</span>;
        }
        if (value === "One of many" || value === "Add-on" || value === "Templates" || value === "Demo first" || value === "Ranges only" || value === "Varies") {
            return <span className="text-warning-600 dark:text-warning-400">{value}</span>;
        }
        return <span className="text-secondary">{value}</span>;
    };

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto flex w-full max-w-3xl flex-col items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                    }}
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <span className="inline-flex items-center rounded-full border border-success-200 bg-success-50 px-3 py-1 text-sm font-semibold text-success-700 dark:border-success-800 dark:bg-success-900/30 dark:text-success-400">
                            Why Us
                        </span>
                    </motion.div>
                    <motion.h2 
                        className="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        Why Protectron.ai Wins
                    </motion.h2>
                    <motion.p 
                        className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        While enterprise platforms treat EU AI Act as one of many frameworks, <strong className="text-primary">Protectron.ai is purpose-built for EU AI Act compliance</strong>. Every feature, every workflow, every document template is designed around the regulation's actual requirements.
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="mt-12 overflow-x-auto md:mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                >
                    <table className="w-full min-w-[700px] border-collapse">
                        <thead>
                            <tr className="border-b border-secondary">
                                <th className="px-4 py-4 text-left text-sm font-semibold text-tertiary">Feature</th>
                                <th className="px-4 py-4 text-left text-sm font-semibold text-brand-600 dark:text-brand-400">Protectron.ai</th>
                                <th className="px-4 py-4 text-left text-sm font-semibold text-tertiary">Enterprise Platforms</th>
                                <th className="px-4 py-4 text-left text-sm font-semibold text-tertiary">Vanta</th>
                                <th className="px-4 py-4 text-left text-sm font-semibold text-tertiary">Consultants</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((row) => (
                                <tr key={row.feature} className="border-b border-secondary transition-colors hover:bg-secondary/50">
                                    <td className="px-4 py-4 text-sm font-medium text-primary">{row.feature}</td>
                                    <td className="px-4 py-4 text-sm">{renderCell(row.protectron, true)}</td>
                                    <td className="px-4 py-4 text-sm">{renderCell(row.enterprise)}</td>
                                    <td className="px-4 py-4 text-sm">{renderCell(row.vanta)}</td>
                                    <td className="px-4 py-4 text-sm">{renderCell(row.consultants)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
};

const PriceJustificationSection = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto max-w-4xl">
                    <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-16">
                        {/* Left side - Main message */}
                        <motion.div 
                            className="flex-1"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                            }}
                        >
                            <motion.span 
                                className="text-sm font-semibold text-brand-secondary md:text-md"
                                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                            >
                                Why We're Different
                            </motion.span>
                            <motion.h2 
                                className="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
                                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                            >
                                10-50x Cheaper Than Alternatives
                            </motion.h2>
                            <motion.p 
                                className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl"
                                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                            >
                                Enterprise compliance tools charge €50,000+/year. Consultants cost €15,000-50,000 per engagement. We're dramatically cheaper because we automated what they do manually.
                            </motion.p>
                        </motion.div>

                        {/* Right side - Comparison */}
                        <motion.div 
                            className="flex-1"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
                            }}
                        >
                            <div className="space-y-4">
                                <motion.div 
                                    className="rounded-xl bg-primary p-5 ring-1 ring-primary"
                                    variants={{
                                        hidden: { opacity: 0, x: 30 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                                    }}
                                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-md font-medium text-tertiary">Enterprise Tools</span>
                                        <span className="text-lg font-semibold text-error-600 line-through">€50,000+/year</span>
                                    </div>
                                </motion.div>
                                <motion.div 
                                    className="rounded-xl bg-primary p-5 ring-1 ring-primary"
                                    variants={{
                                        hidden: { opacity: 0, x: 30 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                                    }}
                                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-md font-medium text-tertiary">Consultants</span>
                                        <span className="text-lg font-semibold text-error-600 line-through">€15,000-50,000</span>
                                    </div>
                                </motion.div>
                                <motion.div 
                                    className="relative overflow-hidden rounded-xl bg-brand-50 p-5"
                                    variants={{
                                        hidden: { opacity: 0, x: 30, scale: 0.95 },
                                        visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5 } }
                                    }}
                                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                                >
                                    {/* Animated beam border */}
                                    <div className="absolute inset-0 rounded-xl">
                                        <div className="absolute inset-[-2px] rounded-xl bg-gradient-to-r from-transparent via-brand-500 to-transparent animate-[spin_3s_linear_infinite]" style={{ background: 'conic-gradient(from 0deg, transparent, #7c3aed, #6366f1, #7c3aed, transparent)' }} />
                                        <div className="absolute inset-[2px] rounded-[10px] bg-brand-50" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between">
                                            <span className="text-md font-semibold text-brand-700">Protectron.ai</span>
                                            <span className="text-lg font-bold text-brand-700">From €99/month</span>
                                        </div>
                                        <p className="mt-1 text-sm text-brand-600">Same results. Fraction of the cost.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

interface TextCentered {
    title: string;
    subtitle: string;
    footer?: ReactNode;
}

interface FeatureTextIcon extends TextCentered {
    icon: FC<{ className?: string }>;
}

const FeatureTextFeaturedIconTopCentered = ({
    color = "gray",
    theme = "modern",
    icon,
    title,
    subtitle,
    footer,
}: FeatureTextIcon & {
    color?: "brand" | "gray" | "success" | "warning" | "error";
    theme?: "light" | "gradient" | "dark" | "outline" | "modern";
}) => (
    <div className="flex max-w-sm flex-col items-center gap-4 text-center">
        <FeaturedIcon icon={icon} size="lg" color={color} theme={theme} className="hidden md:inline-flex" />
        <FeaturedIcon icon={icon} size="md" color={color} theme={theme} className="inline-flex md:hidden" />

        <div>
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-1 text-md text-tertiary">{subtitle}</p>
        </div>

        {footer}
    </div>
);

const FeatureCard = ({ 
    icon: Icon, 
    title, 
    subtitle, 
    color 
}: { 
    icon: React.ElementType; 
    title: string; 
    subtitle: string; 
    color: string;
}) => (
    <div className="flex max-w-sm flex-col items-center gap-4 text-center">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${color} md:h-14 md:w-14`}>
            <Icon size="24" color="currentColor" variant="Bold" className="text-white" />
        </div>
        <div>
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-1 text-md text-tertiary">{subtitle}</p>
        </div>
    </div>
);

const FeaturesSection = () => {
    const features = [
        {
            title: "Risk Classification",
            subtitle: "Instantly determine if your AI systems are high-risk, limited-risk, or minimal-risk. Answer a few questions and know exactly which requirements apply to you.",
            icon: SearchStatus,
            color: "bg-brand-600",
        },
        {
            title: "Document Generation",
            subtitle: "Generate technical documentation, risk assessments, data governance policies, and model cards in minutes — not weeks. AI-powered drafts customized to your systems.",
            icon: DocumentText1,
            color: "bg-success-600",
        },
        {
            title: "Requirements Tracking",
            subtitle: "Interactive checklists for each AI system based on its risk level. Track progress, assign owners, and never miss a requirement.",
            icon: TaskSquare,
            color: "bg-warning-600",
        },
        {
            title: "Evidence Management",
            subtitle: "Upload and organize supporting evidence for each requirement. Build an audit trail that proves your compliance.",
            icon: Activity,
            color: "bg-error-600",
        },
        {
            title: "Compliance Dashboard",
            subtitle: "See your organization's compliance status at a glance. Track progress across all AI systems with clear metrics and deadlines.",
            icon: Chart,
            color: "bg-indigo-600",
        },
        {
            title: "Audit-Ready Reports",
            subtitle: "Generate comprehensive compliance reports with one click. Share with customers, investors, or regulators instantly.",
            icon: DocumentText,
            color: "bg-pink-600",
        },
    ];

    return (
        <section id="features" className="bg-primary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto flex w-full max-w-3xl flex-col items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                    }}
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
                        <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700 dark:border-teal-800 dark:bg-teal-900/30 dark:text-teal-400">
                            Features
                        </span>
                    </motion.div>
                    <motion.h2 
                        className="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        Everything You Need for EU AI Act Compliance
                    </motion.h2>
                    <motion.p 
                        className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        From risk classification to audit-ready reports, Protectron.ai automates the entire compliance journey so you can focus on building great AI products.
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="mt-12 md:mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                    }}
                >
                    <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                        {features.map((item) => (
                            <motion.li 
                                key={item.title}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                            >
                                <FeatureCard 
                                    icon={item.icon} 
                                    title={item.title} 
                                    subtitle={item.subtitle} 
                                    color={item.color}
                                />
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "We went from 'where do we even start?' to fully compliant in just 3 weeks. The automated documentation saved us at least €30,000 in consultant fees.",
            name: "Marcus Weber",
            role: "CTO",
            company: "NeuralFlow AI",
            country: "Germany",
            avatar: "https://ui-avatars.com/api/?name=Marcus+Weber&background=7c3aed&color=fff",
        },
        {
            quote: "As a non-technical founder, I was terrified of EU AI Act compliance. ComplyAI made it simple enough that I could handle it myself without hiring expensive lawyers.",
            name: "Sophie Dubois",
            role: "CEO & Founder",
            company: "Predictive Health",
            country: "France",
            avatar: "https://ui-avatars.com/api/?name=Sophie+Dubois&background=6366f1&color=fff",
        },
        {
            quote: "Our enterprise customers started asking for EU AI Act compliance proof. Thanks to ComplyAI, we had audit-ready reports within days, not months.",
            name: "Erik Lindqvist",
            role: "Head of AI",
            company: "DataSense Nordic",
            country: "Sweden",
            avatar: "https://ui-avatars.com/api/?name=Erik+Lindqvist&background=10b981&color=fff",
        },
        {
            quote: "The risk classification quiz alone was worth it. We discovered two of our AI systems needed high-risk documentation we didn't even know about.",
            name: "Alessandro Rossi",
            role: "VP of Engineering",
            company: "AutoML Italia",
            country: "Italy",
            avatar: "https://ui-avatars.com/api/?name=Alessandro+Rossi&background=f59e0b&color=fff",
        },
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto flex w-full max-w-3xl flex-col items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                    }}
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-semibold text-violet-700 dark:border-violet-800 dark:bg-violet-900/30 dark:text-violet-400">
                            Testimonials
                        </span>
                    </motion.div>
                    <motion.h2 
                        className="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        Trusted by AI Teams Across Europe
                    </motion.h2>
                    <motion.p 
                        className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        Join hundreds of companies who've simplified their EU AI Act compliance journey.
                    </motion.p>
                </motion.div>

                <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2">
                    {testimonials.map((testimonial) => (
                        <figure key={testimonial.name} className="flex flex-col rounded-2xl bg-primary p-6 shadow-sm ring-1 ring-primary md:p-8">
                            <blockquote className="flex-1 text-lg text-primary">
                                "{testimonial.quote}"
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-4">
                                <Avatar src={testimonial.avatar} alt={testimonial.name} size="lg" />
                                <div>
                                    <p className="text-md font-semibold text-primary">{testimonial.name}</p>
                                    <cite className="text-sm text-tertiary not-italic">
                                        {testimonial.role}, {testimonial.company} · {testimonial.country}
                                    </cite>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

const faqsExtended = [
    {
        question: "Do I really need EU AI Act compliance?",
        answer: "If you deploy AI systems that serve EU users or customers, yes. The law is already in effect, with full enforcement by 2026. Non-compliance can result in fines up to €35 million or 7% of global revenue.",
        icon: Heart,
    },
    {
        question: "How is this different from Vanta or Drata?",
        answer: "Vanta and Drata focus on SOC 2 and ISO 27001 certifications. We're purpose-built specifically for EU AI Act compliance — different regulation, different requirements, different expertise.",
        icon: SwitchHorizontal01,
    },
    {
        question: "Can I use this if I'm not technical?",
        answer: "Absolutely. Our platform is designed for legal, compliance, and business teams, not just engineers. The questionnaire uses plain language, and our AI generates documentation that's easy to review and customize.",
        icon: SlashCircle01,
    },
    {
        question: "How long does it take to get compliant?",
        answer: "Most companies complete their initial compliance in 2-4 weeks. That's much faster than the 3-6 months consultants typically take, because our platform automates the heavy lifting.",
        icon: File05,
    },
    {
        question: "What if my AI system is high-risk?",
        answer: "We guide you through the full high-risk requirements, including conformity assessments and EU database registration. Our platform handles the complexity so you don't have to become a regulatory expert.",
        icon: CreditCardRefresh,
    },
    {
        question: "Do you replace lawyers and consultants?",
        answer: "For most companies with limited/minimal risk AI, yes. For complex high-risk scenarios, we recommend complementing with legal review. We have partner consultants available if needed.",
        icon: Mail01,
    },
    {
        question: "Is my data secure?",
        answer: "Yes. We're SOC 2 compliant and use enterprise-grade encryption. Your compliance data never leaves EU servers, ensuring full GDPR compliance for your sensitive information.",
        icon: Heart,
    },
];

const FAQSection = () => {
    const [openQuestions, setOpenQuestions] = useState(new Set([0]));

    const handleToggle = (index: number) => {
        openQuestions.has(index) ? openQuestions.delete(index) : openQuestions.add(index);
        setOpenQuestions(new Set(openQuestions));
    };

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <motion.div 
                    className="mx-auto flex w-full max-w-3xl flex-col items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                    }}
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-700 dark:border-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                            FAQ
                        </span>
                    </motion.div>
                    <motion.h2 
                        className="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        Frequently asked questions
                    </motion.h2>
                    <motion.p 
                        className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        Everything you need to know about the product and billing.
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="mx-auto mt-12 max-w-3xl md:mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                    }}
                >
                    <div className="flex flex-col gap-8">
                        {faqsExtended.map((faq, index) => (
                            <motion.div 
                                key={faq.question} 
                                className="not-first:-mt-px not-first:border-t not-first:border-secondary not-first:pt-6"
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                                }}
                            >
                                <h3>
                                    <motion.button
                                        onClick={() => handleToggle(index)}
                                        className="flex w-full cursor-pointer items-start justify-between gap-2 rounded-md text-left outline-focus-ring select-none focus-visible:outline-2 focus-visible:outline-offset-2 md:gap-6 group"
                                        whileHover={{ x: 4 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="text-md font-semibold text-primary group-hover:text-brand-600 transition-colors duration-200">{faq.question}</span>

                                        <motion.span 
                                            aria-hidden="true" 
                                            className="flex size-6 items-center text-fg-quaternary"
                                            animate={{ rotate: openQuestions.has(index) ? 45 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line
                                                    className={cx(
                                                        "origin-center rotate-0 transition duration-200 ease-out",
                                                        openQuestions.has(index) && "-rotate-90",
                                                    )}
                                                    x1="12"
                                                    y1="8"
                                                    x2="12"
                                                    y2="16"
                                                ></line>
                                                <line x1="8" y1="12" x2="16" y2="12"></line>
                                            </svg>
                                        </motion.span>
                                    </motion.button>
                                </h3>

                                <motion.div
                                    className="overflow-hidden"
                                    initial={false}
                                    animate={{ 
                                        height: openQuestions.has(index) ? "auto" : 0, 
                                        opacity: openQuestions.has(index) ? 1 : 0 
                                    }}
                                    transition={{ 
                                        height: { type: "spring", damping: 30, stiffness: 300 },
                                        opacity: { duration: 0.2 }
                                    }}
                                >
                                    <motion.div 
                                        className="pt-2 pr-8 md:pr-12"
                                        initial={{ y: -10 }}
                                        animate={{ y: openQuestions.has(index) ? 0 : -10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <p className="text-md text-tertiary">{faq.answer}</p>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    className="mt-12 flex flex-col items-center gap-6 rounded-2xl bg-secondary px-6 py-8 text-center md:mt-16 md:gap-8 md:pt-8 md:pb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="flex items-end -space-x-4">
                        <Avatar
                            src="https://ui-avatars.com/api/?name=Marcus+Weber&background=7c3aed&color=fff"
                            alt="Marco Kelly"
                            size="lg"
                            className="ring-[1.5px] ring-fg-white"
                        />
                        <Avatar
                            src="https://ui-avatars.com/api/?name=Sophie+Dubois&background=6366f1&color=fff"
                            alt="Amelie Laurent"
                            size="xl"
                            className="z-10 ring-[1.5px] ring-fg-white"
                        />
                        <Avatar
                            src="https://ui-avatars.com/api/?name=Erik+Lindqvist&background=10b981&color=fff"
                            alt="Jaya Willis"
                            size="lg"
                            className="ring-[1.5px] ring-fg-white"
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-primary">Still have questions?</h4>
                        <p className="mt-2 text-md text-tertiary md:text-lg">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                        <Button size="xl">Get in touch</Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

const reviews = [
    [
        {
            id: "review-01",
            quote: "Honestly? I was panicking. A big enterprise client asked for our EU AI Act compliance docs and I had no idea where to start. Consultants wanted €40K just for an assessment. Found Protectron.ai, and three weeks later we closed that deal. Literally paid for itself 100x over.",
            author: {
                name: "Marcus Weber",
                title: "CTO, NeuralFlow AI · Germany",
                imageUrl: "https://ui-avatars.com/api/?name=Marcus+Weber&background=7c3aed&color=fff",
            },
            company: {
                name: "NeuralFlow AI",
                imageUrl: "",
                imageUrlDark: "",
            },
        },
        {
            id: "review-02",
            quote: "I'm not a lawyer or an engineer. When I heard about €35M fines, I genuinely thought we'd have to shut down our AI features. Protectron.ai walked me through everything in plain English. I did it myself in two weekends. No consultants, no lawyers, no stress.",
            author: {
                name: "Sophie Dubois",
                title: "CEO & Founder, Predictive Health · France",
                imageUrl: "https://ui-avatars.com/api/?name=Sophie+Dubois&background=6366f1&color=fff",
            },
            company: {
                name: "Predictive Health",
                imageUrl: "",
                imageUrlDark: "",
            },
        },
        {
            id: "review-03",
            quote: "We're a 15-person startup. We don't have a compliance team. We don't have €50K for consultants. What we do have now is full EU AI Act compliance and audit-ready docs. My co-founder still can't believe how easy it was.",
            author: {
                name: "Erik Lindqvist",
                title: "Head of AI, DataSense Nordic · Sweden",
                imageUrl: "https://ui-avatars.com/api/?name=Erik+Lindqvist&background=10b981&color=fff",
            },
            company: {
                name: "DataSense Nordic",
                imageUrl: "",
                imageUrlDark: "",
            },
        },
    ],
    [
        {
            id: "review-01",
            quote: "The free risk assessment was eye-opening. Turns out our recommendation engine was high-risk and we had no idea. If we'd found out during an audit instead of now, we'd be in serious trouble. Protectron.ai probably saved us from a massive fine.",
            author: {
                name: "Alessandro Rossi",
                title: "VP of Engineering, AutoML Italia · Italy",
                imageUrl: "https://ui-avatars.com/api/?name=Alessandro+Rossi&background=f59e0b&color=fff",
            },
            company: {
                name: "AutoML Italia",
                imageUrl: "",
                imageUrlDark: "",
            },
        },
        {
            id: "review-02",
            quote: "I spent two months trying to understand the EU AI Act myself. Reading PDFs, watching webinars, getting nowhere. Signed up for Protectron.ai on a Monday, had our compliance roadmap by Wednesday. Should have done this from day one.",
            author: {
                name: "Katarina Novak",
                title: "Compliance Lead, AIVentures · Netherlands",
                imageUrl: "https://ui-avatars.com/api/?name=Katarina+Novak&background=ec4899&color=fff",
            },
            company: {
                name: "AIVentures",
                imageUrl: "",
                imageUrlDark: "",
            },
        },
        {
            id: "review-03",
            quote: "Look, I was skeptical. How can software replace a €500/hour consultant? But the documentation it generated was actually better than what we got from a law firm last year. And I could customize everything. Total game-changer for our budget.",
            author: {
                name: "Thomas Müller",
                title: "CTO, SmartData GmbH · Austria",
                imageUrl: "https://ui-avatars.com/api/?name=Thomas+Muller&background=3b82f6&color=fff",
            },
            company: {
                name: "SmartData GmbH",
                imageUrl: "",
                imageUrlDark: "",
            },
        },
    ],
    [
        {
            id: "review-01",
            quote: "Our board kept asking 'are we compliant?' and I kept saying 'I think so?' Now I can show them exactly where we stand, what's done, what's pending. The progress tracking alone is worth the subscription. Finally, I can sleep at night.",
            author: {
                name: "Elena Petrova",
                title: "Legal & Compliance Director, TechFlow · Spain",
                imageUrl: "https://ui-avatars.com/api/?name=Elena+Petrova&background=8b5cf6&color=fff",
            },
            company: {
                name: "TechFlow",
                imageUrl: "",
                imageUrlDark: "",
            },
        },
        {
            id: "review-02",
            quote: "We almost hired a full-time compliance person at €80K/year. Instead, we use Protectron.ai for a fraction of that cost. It handles 90% of what we need, and for the complex stuff, their support team actually responds within hours. Not days. Hours.",
            author: {
                name: "Henrik Jensen",
                title: "Head of Product, Nordic AI Labs · Denmark",
                imageUrl: "https://ui-avatars.com/api/?name=Henrik+Jensen&background=14b8a6&color=fff",
            },
            company: {
                name: "Nordic AI Labs",
                imageUrl: "",
                imageUrlDark: "",
            },
        },
        {
            id: "review-03",
            quote: "I told my CEO we needed six months and a consultant budget for EU AI Act compliance. He found Protectron.ai, sent me the link, and said 'try this first.' Four weeks later, we're compliant. He still brings it up in every meeting.",
            author: {
                name: "Marie Laurent",
                title: "COO, IntelliSys · Belgium",
                imageUrl: "https://ui-avatars.com/api/?name=Marie+Laurent&background=f43f5e&color=fff",
            },
            company: {
                name: "IntelliSys",
                imageUrl: "",
                imageUrlDark: "",
            },
        },
    ],
];
const ReviewsSection = () => {
    let reviewsCount = 0;
    const maxVisibleReviewsOnMobile = 4;

    return (
        <div className="flex flex-col items-center gap-16 bg-primary pb-16 lg:pb-24">
            <motion.div 
                className="flex max-w-container flex-col items-center gap-4 px-4 text-center lg:gap-5 lg:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                }}
            >
                <motion.h1 
                    className="text-display-sm font-semibold text-primary lg:text-display-md"
                    variants={{ hidden: { opacity: 0, y: 20, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }}
                >
                    Trusted by AI Teams Across Europe
                </motion.h1>
                <motion.p 
                    className="text-lg text-tertiary lg:text-xl"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                    Hear from companies who've simplified their EU AI Act compliance journey with Protectron.ai.
                </motion.p>
            </motion.div>
            <motion.div 
                className="grid max-w-container grid-cols-1 gap-5 mask-b-from-[calc(100%-340px)] px-4 lg:grid-cols-3 lg:gap-8 lg:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
            >
                {reviews.map((reviewGroup, reviewGroupIndex) => {
                    return (
                        <motion.div
                            key={reviewGroupIndex}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
                            }}
                            className={cx(
                                "flex flex-col gap-5 lg:gap-8",
                                reviewGroupIndex === 0 && "lg:py-8",
                                reviewGroupIndex === 2 && "lg:pt-10",
                                reviewsCount > maxVisibleReviewsOnMobile && "max-lg:hidden",
                            )}
                        >
                            {reviewGroup.map((review) => {
                                reviewsCount += 1;

                                return (
                                    <motion.div
                                        key={review.id}
                                        className={cx(
                                            "flex flex-col gap-8 rounded-xl bg-primary_alt p-6 shadow-xs ring-1 ring-secondary ring-inset lg:justify-between lg:gap-12 lg:p-8 cursor-pointer",
                                            reviewsCount > maxVisibleReviewsOnMobile && "max-lg:hidden",
                                        )}
                                        style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                                        whileHover={{ 
                                            scale: 1.02,
                                            rotateX: -2,
                                            rotateY: 3,
                                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                                            transition: { duration: 0.3, ease: "easeOut" }
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="flex flex-col items-start gap-3">
                                            <img className="h-8 dark:hidden" src={review.company.imageUrl} alt={review.company.name} />
                                            <img className="h-8 opacity-85 not-dark:hidden" src={review.company.imageUrlDark} alt={review.company.name} />
                                            <blockquote className="text-md text-tertiary">{review.quote}</blockquote>
                                        </div>
                                        <AvatarLabelGroup
                                            size="lg"
                                            src={review.author.imageUrl}
                                            alt={review.author.name}
                                            title={
                                                <span className="relative flex items-center gap-1">
                                                    {review.author.name}
                                                    <VerifiedTick size="lg" />
                                                </span>
                                            }
                                            subtitle={review.author.title}
                                        />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

const BottomCTASection = () => {
    return (
        <section className="bg-brand-600 py-16 md:py-24 overflow-hidden">
            <motion.div 
                className="mx-auto max-w-container px-4 md:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                }}
            >
                <div className="mx-auto max-w-3xl text-center">
                    <motion.h2 
                        className="text-display-sm font-semibold text-white md:text-display-md"
                        variants={{ hidden: { opacity: 0, y: 30, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }}
                    >
                        Stop Risking €35 Million Fines
                    </motion.h2>
                    <motion.p 
                        className="mt-4 text-lg text-brand-100 md:mt-5 md:text-xl"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        Start with a free risk assessment. Know exactly where you stand in 10 minutes.
                    </motion.p>

                    <motion.form 
                        className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:mt-10"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="h-12 rounded-lg border border-brand-400 bg-brand-500 px-4 text-white placeholder:text-brand-200 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 sm:w-80 transition-all duration-200"
                        />
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <Button size="xl" color="secondary" className="whitespace-nowrap">
                                Start Free Assessment
                            </Button>
                        </motion.div>
                    </motion.form>

                    <motion.p 
                        className="mt-4 text-sm text-brand-200"
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                    >
                        No credit card required. Free forever for basic assessment.
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
};

const footerNavList = [
    {
        label: "Product",
        items: [
            { label: "Features", href: "/features" },
            { label: "Pricing", href: "/pricing" },
        ],
    },
    {
        label: "Resources",
        items: [
            { label: "EU AI Act Guide", href: "/guide" },
            { label: "Blog", href: "/blog" },
        ],
    },
    {
        label: "Legal",
        items: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Cookie Policy", href: "/cookies" },
            { label: "Terms of Service", href: "/terms" },
            { label: "GDPR Compliance", href: "/gdpr" },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <nav>
                    <ul className="grid grid-cols-2 gap-8 md:grid-cols-3">
                        {footerNavList.map((category) => (
                            <li key={category.label}>
                                <h4 className="text-sm font-semibold text-quaternary">{category.label}</h4>
                                <ul className="mt-4 flex flex-col gap-3">
                                    {category.items.map((item) => (
                                        <li key={item.label}>
                                            <Button color="link-gray" size="md" href={item.href} className="gap-1">
                                                {item.label}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="mt-12 flex flex-col justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row md:items-center">
                    {/* Left - Protectron.ai */}
                    <div className="flex flex-col gap-1">
                        <span className="text-lg font-bold text-primary">Protectron.ai</span>
                        <p className="text-sm text-tertiary">EU AI Act Compliance Platform</p>
                    </div>
                    
                    {/* Center - Built by Nidrosoft */}
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
                    
                    {/* Right - Copyright */}
                    <div className="flex flex-col items-start gap-1 md:items-end">
                        <p className="text-sm text-quaternary">© {new Date().getFullYear()} Protectron.ai</p>
                        <p className="text-sm text-tertiary flex items-center gap-1">
                            <span>🇪🇺</span> Data hosted in EU
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const LandingPage = () => {
    return (
        <div className="bg-primary">
            <HeroSection />

            <SectionDivider />

            <TrustedBySection />

            <ProblemSection />

            <SolutionSection />

            <HowItWorksSection />

            <FeaturesSection />

            <PricingAbstractAngles />

            <WhyProtectronWinsSection />

            <PriceJustificationSection />

            <ReviewsSection />

            <FAQSection />

            <BottomCTASection />

            <Footer />
        </div>
    );
};

export default LandingPage;
