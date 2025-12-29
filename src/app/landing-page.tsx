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
import { ShieldTick, Play, Clock, MoneyRemove, Timer1, MessageQuestion, DocumentText, TaskSquare, Chart, TickCircle, SearchStatus, DocumentText1, Activity, Code1, Medal } from "iconsax-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { Avatar } from "@/components/base/avatar/avatar";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { VerifiedTick } from "@/components/base/avatar/base-components";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Badge, type BadgeColor } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Header } from "@/components/marketing/header-navigation/header";
import { Footer } from "@/components/shared/footer";
import { PricingAbstractAngles } from "@/components/marketing/pricing-sections/pricing-abstract-angles";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { cx } from "@/utils/cx";
import { CodeSnippet } from "@/components/shared-assets/code-snippet";
import { Pricing } from "@/components/ui/pricing-table";
import { BorderBeam } from "@/components/ui/border-beam";

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
                        {/* Animated Badge with Beam Effect */}
                        <motion.div 
                            className="relative rounded-full p-[1px] overflow-hidden"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                        >
                            {/* Rotating beam border */}
                            <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: "conic-gradient(from 0deg, transparent, transparent 270deg, #7c3aed 270deg, #7c3aed 360deg)",
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                            <div className="relative rounded-full bg-primary">
                                <motion.div
                                    animate={{ scale: [1, 1.02, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <BadgeGroup className="hidden md:flex" size="lg" addonText="Enforcement Active" theme="modern" color="brand">
                                        €35M fines are now in effect
                                    </BadgeGroup>
                                    <BadgeGroup className="md:hidden" size="md" addonText="Enforcement Active" theme="modern" color="brand">
                                        €35M fines are now in effect
                                    </BadgeGroup>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Animated Headline */}
                        <motion.h1 
                            className="mt-4 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                        >
                            EU AI Act Compliance{" "}
                            <br className="hidden md:block" />
                            for{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10">AI Systems</span>
                                <motion.span 
                                    className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-brand-200 md:bottom-1.5 md:h-3.5 lg:bottom-2 lg:h-4"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                                    style={{ originX: 0 }}
                                />
                            </span>
                            {" "}and{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10">Agents</span>
                                <motion.span 
                                    className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-brand-200 md:bottom-1.5 md:h-3.5 lg:bottom-2 lg:h-4"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.5, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                                    style={{ originX: 0 }}
                                />
                            </span>
                        </motion.h1>

                        {/* Animated Subtitle */}
                        <motion.p 
                            className="mt-4 max-w-3xl text-lg text-balance text-tertiary md:mt-6 md:text-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                        >
                            Automated risk classification, audit trails, and documentation. The only platform built for both AI models and autonomous agents.
                        </motion.p>

                        {/* Animated Buttons */}
                        <motion.div 
                            className="mt-8 flex w-full flex-col-reverse items-center justify-center gap-3 sm:w-auto sm:flex-row md:mt-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                        >
                            {/* Hidden for now - may add later */}
                            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                <Button color="secondary" size="xl">
                                    <span className="flex items-center gap-2">
                                        <Play size="20" color="currentColor" variant="Bold" />
                                        See Agent Demo
                                    </span>
                                </Button>
                            </motion.div> */}
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
                                <Button size="xl" href="https://app.protectron.ai">
                                    <span className="flex items-center gap-2">
                                        <ShieldTick size="20" color="currentColor" variant="Bold" />
                                        Free Risk Assessment
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
                                "No credit card",
                                "10-minute setup", 
                                "SDK for agents"
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
                    className="mx-auto mt-16 h-90 w-full max-w-container overflow-hidden px-4 pt-3 md:h-124 md:px-8 md:pt-4"
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
                                    {/* Desktop: Light mode image */}
                                    <img
                                        alt="Protectron.ai Dashboard"
                                        src="/images/hero-light.png"
                                        className="hidden size-full object-cover md:block dark:hidden"
                                    />
                                    {/* Desktop: Dark mode image */}
                                    <img
                                        alt="Protectron.ai Dashboard"
                                        src="/images/hero-dark.png"
                                        className="hidden size-full object-cover not-dark:hidden md:block"
                                    />

                                    {/* Mobile: Light mode image (same image, optimized display) */}
                                    <img
                                        alt="Protectron.ai Dashboard"
                                        src="/images/hero-light.png"
                                        className="size-full object-cover object-top md:hidden dark:hidden"
                                    />
                                    {/* Mobile: Dark mode image (same image, optimized display) */}
                                    <img
                                        alt="Protectron.ai Dashboard"
                                        src="/images/hero-dark.png"
                                        className="size-full object-cover object-top not-dark:hidden md:hidden"
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

const OpenAIIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
    </svg>
);

const AnthropicIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M17.304 3.541h-3.672l6.696 16.918h3.672zm-10.608 0L0 20.459h3.744l1.37-3.553h7.005l1.369 3.553h3.744L10.536 3.541zm-.371 10.478L8.996 7.82l2.672 6.199z"/>
    </svg>
);

const LangChainIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4a9.6 9.6 0 1 1 0 19.2 9.6 9.6 0 0 1 0-19.2zm-1.2 4.8v9.6h2.4V7.2zm-3.6 2.4v4.8h2.4v-4.8zm7.2 0v4.8h2.4v-4.8z"/>
    </svg>
);

const VercelIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M24 22.525H0l12-21.05z"/>
    </svg>
);

const MicrosoftIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623z"/>
    </svg>
);

const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053z"/>
    </svg>
);

const TrustedBySection = () => {
    const companyLogos = [
        { name: "OpenAI", icon: OpenAIIcon },
        { name: "Anthropic", icon: AnthropicIcon },
        { name: "LangChain", icon: LangChainIcon },
        { name: "Vercel", icon: VercelIcon },
        { name: "Microsoft", icon: MicrosoftIcon },
        { name: "Google", icon: GoogleIcon },
    ];

    return (
        <section 
            className="py-16 md:py-20" 
            style={{ 
                background: 'linear-gradient(135deg, #3D2A7D 0%, #2C1C5F 50%, #1E1340 100%)' 
            }}
        >
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
                        className="text-center text-md font-medium text-white/70"
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        Trusted by teams building with
                    </motion.p>
                    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14 xl:gap-x-16">
                        {companyLogos.map((company, index) => (
                            <motion.div 
                                key={company.name}
                                className="flex items-center gap-2.5 text-white opacity-80 hover:opacity-100 transition-all duration-300"
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.8, y: 0, transition: { delay: index * 0.05 } } }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <company.icon />
                                <span className="text-lg font-semibold">{company.name}</span>
                            </motion.div>
                        ))}
                    </div>
                    <motion.p 
                        className="text-center text-sm text-white/60"
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        Used by startups and enterprises deploying AI in Europe
                    </motion.p>
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
            stat: "€50K",
            statSuffix: "+",
            description: "Credo AI and Holistic AI charge €50K-200K/year. Consultants bill €400+/hr. Most teams can't afford it.",
        },
        {
            icon: Timer1,
            rightIcon: TimerStopIcon,
            label: "THE TIME SINK",
            stat: "3–6",
            statSuffix: " Months",
            description: "Manual documentation, endless spreadsheets, consultant meetings. Your team doesn't have time for this.",
        },
        {
            icon: MessageQuestion,
            rightIcon: CloudOffIcon,
            label: "NO AGENT SUPPORT",
            stat: "Zero",
            statSuffix: " Tools",
            description: "LangSmith and AgentOps track actions but don't help with compliance. You need both observability AND compliance.",
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
                        AI Compliance is Broken
                    </motion.h2>
                    <motion.p 
                        className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        Whether you're deploying ML models or AI agents, the challenges are the same.
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
            subtitle: "Answer a simple questionnaire about your AI systems — including agents. Our platform automatically maps each system to the correct EU AI Act risk category and generates a personalized compliance roadmap.",
        },
        {
            icon: SearchStatus,
            title: "SDK & Agent Audit Trails",
            subtitle: "For AI agents, install our SDK to automatically capture every action, decision, and human override. Full Article 12 compliance with zero manual logging. Works with LangChain, CrewAI, and AutoGen.",
        },
    ];

    const rightFeatures = [
        {
            icon: TaskSquare,
            title: "Compliance Checklist & Tracking",
            subtitle: "Get a dynamic checklist of every requirement for your specific risk level. Upload evidence, assign tasks to team members, and track completion status in real-time — with auto-generated evidence for SDK-connected agents.",
        },
        {
            icon: Chart,
            title: "Certification & Reports",
            subtitle: "Generate comprehensive compliance reports with one click. Earn the Protectron Certified badge to prove compliance to customers, investors, and regulators. Embed your badge on your website.",
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
                        We built the compliance platform we wished existed — affordable, self-service, and designed to get you from "where do I start?" to "fully compliant" in weeks, not months. Now with built-in support for AI agents.
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
                            src="/images/phone-light.svg"
                            alt="Protectron.ai Dashboard"
                            className="absolute top-0 z-10 w-71 drop-shadow-2xl md:top-[auto] md:w-78.5 dark:hidden"
                        />
                        <img 
                            src="/images/phone-dark.svg"
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

                {/* CTA Buttons */}
                <motion.div 
                    className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                        <Button size="xl" href="https://app.protectron.ai">
                            <span className="flex items-center gap-2">
                                <ShieldTick size="20" color="currentColor" variant="Bold" />
                                Start Free Assessment
                            </span>
                        </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                        <Button color="secondary" size="xl" href="/features/sdk-integration">
                            <span className="flex items-center gap-2">
                                Explore SDK
                                <ArrowRight className="h-4 w-4" />
                            </span>
                        </Button>
                    </motion.div>
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
            subtitle: "Take our 10-minute questionnaire. We'll classify each AI system by risk level and generate your personalized compliance roadmap.",
            bullets: [
                "Add your AI systems and agents",
                "Answer capability questions",
                "Get instant risk classification",
                "See exactly what's required",
            ],
            badge: "Free",
        },
        {
            title: "Connect Your Agents",
            subtitle: "For AI agents, install our SDK to automatically capture audit trails. No manual evidence collection.",
            bullets: [
                "One-line SDK integration",
                "Automatic action logging",
                "Decision audit trails",
                "Human override tracking",
            ],
            badge: "Optional",
        },
        {
            title: "Certify & Prove Compliance",
            subtitle: "Complete requirements, attach evidence, and earn your Protectron Certified badge. Prove compliance to customers, investors, and regulators.",
            bullets: [
                "Track progress across all systems",
                "Auto-generated compliance evidence",
                "Audit-ready reports in one click",
                "Embed certification badge on your site",
            ],
            badge: null,
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
                        Get Compliant in 3 Steps
                    </motion.h2>
                    <motion.p 
                        className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        Whether you have 1 AI system or 100 agents, the process is the same.
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
                                        {item.badge && (
                                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                                item.badge === "Free" 
                                                    ? "border border-success-200 bg-success-50 text-success-700 dark:border-success-800 dark:bg-success-900/30 dark:text-success-400"
                                                    : "border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                            }`}>
                                                {item.badge}
                                            </span>
                                        )}
                                    </div>
                                    <p className="mt-2 pl-11 text-md text-tertiary">
                                        {item.subtitle}
                                    </p>
                                    {/* Bullet points - only show when this step is active */}
                                    <motion.ul 
                                        className="mt-3 space-y-2 pl-11 overflow-hidden"
                                        initial={false}
                                        animate={{ 
                                            height: activeStep === index ? "auto" : 0,
                                            opacity: activeStep === index ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        {item.bullets.map((bullet, bulletIndex) => (
                                            <li key={bulletIndex} className="flex items-start gap-2 text-sm text-tertiary">
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                                                {bullet}
                                            </li>
                                        ))}
                                    </motion.ul>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="relative -ml-4 w-screen md:w-full lg:h-140">
                        <div className="-mx-4 flex items-center justify-center lg:absolute lg:mr-9.5 lg:-ml-0 lg:h-140 lg:w-[50vw] lg:justify-start">
                            <img
                                alt="Protectron.ai Dashboard"
                                src="/images/howitworks-light.png"
                                className="h-full object-contain lg:max-w-none dark:hidden"
                            />
                            <img
                                alt="Protectron.ai Dashboard"
                                src="/images/howitworks-dark.png"
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
        { feature: "EU AI Act Focus", protectron: true, credoai: true, vanta: "Add-on", langsmith: false, diy: false },
        { feature: "Agent Audit SDK", protectron: true, credoai: false, vanta: false, langsmith: true, diy: "?" },
        { feature: "Self-Service", protectron: true, credoai: false, vanta: true, langsmith: true, diy: true },
        { feature: "Certification Badge", protectron: true, credoai: false, vanta: false, langsmith: false, diy: false },
        { feature: "Starting Price", protectron: "€99/mo", credoai: "€50K/yr", vanta: "€10K/yr", langsmith: "Free", diy: "Free" },
        { feature: "Time to Compliance", protectron: "Weeks", credoai: "Months", vanta: "Months", langsmith: "N/A", diy: "6+ months" },
        { feature: "Best For", protectron: "SMB + Agents", credoai: "Enterprise", vanta: "Multi-FW", langsmith: "Debug", diy: "Budgets" },
    ];

    const renderCell = (value: boolean | string, isProtectron: boolean = false) => {
        if (typeof value === "boolean") {
            if (value) {
                return (
                    <span className={`inline-flex items-center justify-center ${isProtectron ? "text-success-600 dark:text-success-400" : "text-success-500"}`}>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </span>
                );
            }
            return (
                <span className="inline-flex items-center justify-center text-error-400">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                </span>
            );
        }
        if (value === "Add-on" || value === "?") {
            return <span className="text-warning-600 dark:text-warning-400 text-sm">{value}</span>;
        }
        if (isProtectron) {
            return <span className="font-semibold text-success-600 dark:text-success-400 text-sm">{value}</span>;
        }
        return <span className="text-tertiary text-sm">{value}</span>;
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
                            Comparison
                        </span>
                    </motion.div>
                    <motion.h2 
                        className="mt-3 text-display-sm font-semibold text-primary md:text-display-md"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        Why Teams Choose Protectron
                    </motion.h2>
                    <motion.p 
                        className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        Purpose-built for EU AI Act compliance with agent audit capabilities that enterprise tools can't match.
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
                                <th className="px-4 py-4 text-left text-sm font-semibold text-tertiary"></th>
                                <th className="px-4 py-4 text-center text-sm font-semibold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 rounded-t-lg">Protectron</th>
                                <th className="px-4 py-4 text-center text-sm font-semibold text-tertiary">Credo AI</th>
                                <th className="px-4 py-4 text-center text-sm font-semibold text-tertiary">Vanta</th>
                                <th className="px-4 py-4 text-center text-sm font-semibold text-tertiary">LangSmith</th>
                                <th className="px-4 py-4 text-center text-sm font-semibold text-tertiary">DIY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((row) => (
                                <tr key={row.feature} className="border-b border-secondary transition-colors hover:bg-secondary/50">
                                    <td className="px-4 py-4 text-sm font-medium text-primary">{row.feature}</td>
                                    <td className="px-4 py-4 text-center bg-brand-50/50 dark:bg-brand-900/10">{renderCell(row.protectron, true)}</td>
                                    <td className="px-4 py-4 text-center">{renderCell(row.credoai)}</td>
                                    <td className="px-4 py-4 text-center">{renderCell(row.vanta)}</td>
                                    <td className="px-4 py-4 text-center">{renderCell(row.langsmith)}</td>
                                    <td className="px-4 py-4 text-center">{renderCell(row.diy)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                <motion.div 
                    className="mt-8 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <a href="/compare" className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 font-medium">
                        See full comparison
                        <ArrowRight className="h-4 w-4" />
                    </a>
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
    bgColor,
    iconColor
}: { 
    icon: React.ElementType; 
    title: string; 
    subtitle: string; 
    bgColor: string;
    iconColor: string;
}) => (
    <div className="flex max-w-sm flex-col items-center gap-4 text-center">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${bgColor} md:h-14 md:w-14`}>
            <Icon size="24" color="currentColor" variant="Bold" className={iconColor} />
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
            subtitle: "Instantly determine if your AI systems are high-risk, limited-risk, or minimal-risk. Answer a few questions and know exactly which requirements apply to you — including AI agents.",
            icon: SearchStatus,
            bgColor: "bg-brand-100 dark:bg-brand-900/30",
            iconColor: "text-brand-600",
        },
        {
            title: "Document Generation",
            subtitle: "Generate technical documentation, risk assessments, data governance policies, and model cards in minutes — not weeks. AI-powered drafts customized to your systems.",
            icon: DocumentText1,
            bgColor: "bg-success-100 dark:bg-success-900/30",
            iconColor: "text-success-600",
        },
        {
            title: "Requirements Tracking",
            subtitle: "Interactive checklists for each AI system based on its risk level. Track progress, assign owners, and never miss a requirement.",
            icon: TaskSquare,
            bgColor: "bg-warning-100 dark:bg-warning-900/30",
            iconColor: "text-warning-600",
        },
        {
            title: "Agent Audit Trails",
            subtitle: "Automatic logging for AI agents via our SDK. Capture every action, decision, tool call, and human override. Full Article 12 compliance with zero manual work.",
            icon: Code1,
            bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
            iconColor: "text-indigo-600",
        },
        {
            title: "Compliance Dashboard",
            subtitle: "See your organization's compliance status at a glance. Track progress across all AI systems and agents with clear metrics, deadlines, and real-time alerts.",
            icon: Chart,
            bgColor: "bg-blue-100 dark:bg-blue-900/30",
            iconColor: "text-blue-600",
        },
        {
            title: "Certification & Reports",
            subtitle: "Generate comprehensive compliance reports with one click. Earn the Protectron Certified badge to prove compliance to customers, investors, and regulators.",
            icon: Medal,
            bgColor: "bg-pink-100 dark:bg-pink-900/30",
            iconColor: "text-pink-600",
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
                        From risk classification to agent audit trails, Protectron.ai automates the entire compliance journey so you can focus on building great AI products.
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
                                    bgColor={item.bgColor}
                                    iconColor={item.iconColor}
                                />
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

const agentCode = `from protectron import AgentLogger

# Initialize the logger with your API key
logger = AgentLogger(api_key="pk_live_...")

@logger.trace
def my_agent(user_query: str):
    """Your AI agent with automatic compliance logging"""
    
    # Tool calls are automatically captured
    result = search_database(user_query)
    
    # Decisions are logged with full context
    if result.confidence > 0.8:
        response = generate_response(result)
    else:
        # Human override tracking built-in
        response = request_human_review(result)
    
    return response

# That's it! Full Article 12 compliance.`;

const BuiltForAgentsSection = () => {
    const features = [
        {
            icon: Code1,
            title: "SDK Integration",
            subtitle: "One decorator. Automatic compliance logging. Works with LangChain, CrewAI, AutoGen, and custom agents.",
            footer: "pip install protectron-agent",
            bgColor: "bg-brand-100 dark:bg-brand-900/30",
            iconColor: "text-brand-600",
        },
        {
            icon: SearchStatus,
            title: "Audit Trail",
            subtitle: "Every decision, tool call, and human override captured and stored for 6+ months (Article 12).",
            footer: "Real-time dashboard with full searchability",
            bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
            iconColor: "text-indigo-600",
        },
        {
            icon: Medal,
            title: "Certified",
            subtitle: "Verifiable badge that proves your agents are compliant. Build trust with customers and regulators.",
            footer: "Embed on your site",
            bgColor: "bg-success-100 dark:bg-success-900/30",
            iconColor: "text-success-600",
        },
    ];

    const developerBenefits = [
        "One decorator integration",
        "Auto-captures tool calls",
        "Decision reasoning logged",
        "Human overrides tracked",
        "6+ month log retention",
        "PII auto-redaction",
        "OpenTelemetry compatible",
    ];

    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                {/* Header Row */}
                <motion.div 
                    className="mb-12 flex flex-col items-start md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-400">
                        For AI Agents
                    </span>
                    <h2 className="mt-4 text-display-sm font-semibold text-primary md:text-display-md">Built for AI Agents</h2>
                    <p className="mt-4 max-w-2xl text-lg text-tertiary">
                        The EU AI Act classifies autonomous AI agents as high-risk. We make compliance automatic.
                    </p>
                </motion.div>

                {/* Two Column Layout: Code on left, Features on right */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Left: Code Snippet */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <CodeSnippet code={agentCode} language="python" />
                        
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <span className="text-sm text-tertiary">Works with:</span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-tertiary px-3 py-1.5 text-sm font-medium text-secondary">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4a9.6 9.6 0 1 1 0 19.2 9.6 9.6 0 0 1 0-19.2zm-1.2 4.8v9.6h2.4V7.2zm-3.6 2.4v4.8h2.4v-4.8zm7.2 0v4.8h2.4v-4.8z"/>
                                </svg>
                                LangChain
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-tertiary px-3 py-1.5 text-sm font-medium text-secondary">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <circle cx="6" cy="6" r="4"/><circle cx="18" cy="6" r="4"/><circle cx="12" cy="18" r="4"/>
                                    <line x1="6" y1="10" x2="12" y2="14" stroke="currentColor" strokeWidth="2"/>
                                    <line x1="18" y1="10" x2="12" y2="14" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                                CrewAI
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-tertiary px-3 py-1.5 text-sm font-medium text-secondary">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623z"/>
                                </svg>
                                AutoGen
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-tertiary px-3 py-1.5 text-sm font-medium text-secondary">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
                                </svg>
                                OpenAI
                            </span>
                        </div>
                    </motion.div>

                    {/* Right: Feature Cards + Why Developers Love It */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {features.map((item) => (
                                <li key={item.title} className="flex flex-col gap-3">
                                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.bgColor}`}>
                                        <item.icon size="20" color="currentColor" variant="Bold" className={item.iconColor} />
                                    </div>
                                    <div>
                                        <h3 className="text-md font-semibold text-primary">{item.title}</h3>
                                        <p className="mt-1 text-sm text-tertiary">{item.subtitle}</p>
                                    </div>
                                    <span className="text-sm font-medium text-brand-600 dark:text-brand-400">
                                        {item.footer}
                                    </span>
                                </li>
                            ))}
                            
                            {/* Developer Friendly - 4th feature matching the others */}
                            <li className="flex flex-col gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100 dark:bg-pink-900/30">
                                    <Heart className="h-5 w-5 text-pink-600" />
                                </div>
                                <div>
                                    <h3 className="text-md font-semibold text-primary">Developer Friendly</h3>
                                    <p className="mt-1 text-sm text-tertiary">One decorator integration with auto-capture for tool calls, decisions, and human overrides. OpenTelemetry compatible.</p>
                                </div>
                                <span className="text-sm font-medium text-brand-600 dark:text-brand-400">
                                    6+ month log retention with PII auto-redaction
                                </span>
                            </li>
                        </ul>
                        
                        {/* View SDK Button - right aligned */}
                        <div className="mt-8 flex justify-end">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                <Button size="lg" href="/features/sdk-integration">
                                    <span className="flex items-center gap-2">
                                        View SDK Docs
                                        <ArrowRight className="h-4 w-4" />
                                    </span>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const CertificationBadgeSection = () => {
    const steps = [
        { number: "1", label: "Complete all requirements", color: "bg-brand-500" },
        { number: "2", label: "Connect SDK", color: "bg-indigo-500" },
        { number: "3", label: "30 days logging", color: "bg-success-500" },
    ];

    return (
        <section 
            className="py-16 md:py-24" 
            style={{ 
                background: 'linear-gradient(135deg, #3D2A7D 0%, #2C1C5F 50%, #1E1340 100%)' 
            }}
        >
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center rounded-full border border-brand-400/30 bg-brand-500/20 px-3 py-1 text-sm font-semibold text-brand-300">
                            Certification
                        </span>
                        <h2 className="mt-4 text-display-sm font-semibold text-white md:text-display-md">
                            Prove Your Compliance
                        </h2>
                        <p className="mt-4 text-lg text-white/70">
                            Earn the Protectron Certified badge and show customers your AI is compliant.
                        </p>

                        {/* How it works steps */}
                        <div className="mt-8">
                            <p className="text-sm font-semibold text-white/80 mb-4">How it works:</p>
                            <div className="flex flex-wrap items-center gap-3">
                                {steps.map((step, index) => (
                                    <div key={step.number} className="flex items-center gap-3">
                                        <div className="flex items-center gap-2">
                                            <span className={`flex h-7 w-7 items-center justify-center rounded-full ${step.color} text-sm font-bold text-white shadow-lg`}>
                                                {step.number}
                                            </span>
                                            <span className="text-sm text-white/80">{step.label}</span>
                                        </div>
                                        {index < steps.length - 1 && (
                                            <ArrowRight className="h-4 w-4 text-white/40" />
                                        )}
                                    </div>
                                ))}
                            </div>
                            <p className="mt-4 text-sm font-medium text-brand-300">
                                → Earn your badge & embed on your site
                            </p>
                        </div>

                        {/* Testimonial */}
                        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
                            <p className="text-md text-white/90 italic">
                                "The badge increased enterprise deal close rates by 23%."
                            </p>
                            <p className="mt-3 text-sm text-white/60">
                                — Head of Sales, AI Solutions Inc.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Badge Preview */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative">
                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-400/40 to-success-400/40 blur-3xl" />
                            
                            {/* Badge Card */}
                            <div className="relative rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                                <div className="flex flex-col items-center text-center">
                                    {/* Shield Icon */}
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-600 shadow-lg">
                                        <ShieldTick size="32" color="white" variant="Bold" />
                                    </div>
                                    
                                    <h3 className="mt-4 text-xl font-bold text-gray-900">PROTECTRON CERTIFIED</h3>
                                    
                                    <div className="mt-4 space-y-1">
                                        <p className="text-md font-medium text-gray-700">Customer Support Agent</p>
                                        <p className="text-sm text-success-600">EU AI Act Compliant</p>
                                    </div>
                                    
                                    <div className="mt-4 h-px w-full bg-gray-200" />
                                    
                                    <p className="mt-4 text-sm text-gray-500">
                                        Verified: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </p>
                                    
                                    <button className="mt-4 flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700">
                                        Click to verify
                                        <ArrowRight className="h-3 w-3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const PricingSection = () => {
    const pricingTiers = [
        {
            name: "Starter",
            description: "For small teams getting started",
            price: 99,
            annualPrice: 82,
            buttonText: "Start Free Assessment",
            buttonHref: "https://app.protectron.ai",
            featuresTitle: "What's included:",
            features: [
                { text: "3 AI systems" },
                { text: "1 agent (no SDK)" },
                { text: "Risk assessment" },
                { text: "Requirements tracking" },
                { text: "Doc generation" },
                { text: "Evidence management" },
                { text: "Email support" },
            ],
        },
        {
            name: "Growth",
            description: "For growing teams with agents",
            price: 299,
            annualPrice: 249,
            buttonText: "Start Free Assessment",
            buttonHref: "https://app.protectron.ai",
            isPrimary: true,
            featuresTitle: "Everything in Starter, plus:",
            features: [
                { text: "10 AI systems" },
                { text: "3 agents + SDK" },
                { text: "Audit trails" },
                { text: "Auto evidence collection" },
                { text: "Chat support" },
                { text: "100K events/mo" },
            ],
        },
        {
            name: "Scale",
            description: "For scaling teams with many systems",
            price: 599,
            annualPrice: 499,
            buttonText: "Start Free Assessment",
            buttonHref: "https://app.protectron.ai",
            featuresTitle: "Everything in Growth, plus:",
            features: [
                { text: "25 AI systems" },
                { text: "10 agents + SDK" },
                { text: "Certification badges" },
                { text: "500K events/mo" },
                { text: "Priority support" },
                { text: "12 month retention" },
            ],
        },
        {
            name: "Enterprise",
            description: "For large orgs with custom needs",
            priceLabel: "Custom pricing",
            buttonText: "Contact Sales",
            featuresTitle: "Everything in Scale, plus:",
            features: [
                { text: "Unlimited AI systems" },
                { text: "Unlimited agents" },
                { text: "Custom setup & SLA" },
                { text: "SSO/SAML" },
                { text: "Dedicated CSM" },
                { text: "Custom integrations" },
                { text: "EU data residency" },
                { text: "On-call support" },
            ],
        },
    ];

    return (
        <section id="pricing" className="bg-secondary scroll-mt-20">
            <Pricing
                title="Pricing That Makes Sense"
                subtitle="10x cheaper than enterprise tools. Built for teams of all sizes."
                tiers={pricingTiers}
            />
            
            {/* Add-ons Section */}
            <div className="max-w-7xl mx-auto px-4 pb-16 md:pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-center text-lg font-semibold text-secondary mb-6">Need more? Add on anytime:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        <div className="rounded-xl border border-secondary bg-primary p-5 text-center">
                            <p className="text-brand-600 dark:text-brand-400 font-bold text-lg">+€49/mo</p>
                            <p className="text-primary font-semibold mt-1">Additional Agent</p>
                            <p className="text-sm text-tertiary mt-1">Includes SDK access</p>
                        </div>
                        <div className="rounded-xl border border-secondary bg-primary p-5 text-center">
                            <p className="text-brand-600 dark:text-brand-400 font-bold text-lg">+€29/mo</p>
                            <p className="text-primary font-semibold mt-1">Extended Retention</p>
                            <p className="text-sm text-tertiary mt-1">24 months (vs 6)</p>
                        </div>
                        <div className="rounded-xl border border-secondary bg-primary p-5 text-center">
                            <p className="text-brand-600 dark:text-brand-400 font-bold text-lg">+€99/mo</p>
                            <p className="text-primary font-semibold mt-1">EU Data Residency</p>
                            <p className="text-sm text-tertiary mt-1">All data in EU</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "We were using spreadsheets to track compliance. Protectron automated 80% of our documentation and the SDK made audit trails effortless.",
            name: "Sarah Chen",
            role: "Head of Legal",
            company: "AI Startup, Series B",
            country: "Germany",
            avatar: "https://ui-avatars.com/api/?name=Sarah+Chen&background=7c3aed&color=fff",
        },
        {
            quote: "The agent audit trail is a game-changer. Our enterprise customers now trust our AI because we can prove exactly what it did.",
            name: "Marcus Kim",
            role: "CTO",
            company: "B2B SaaS, 200 employees",
            country: "USA",
            avatar: "https://ui-avatars.com/api/?name=Marcus+Kim&background=6366f1&color=fff",
        },
        {
            quote: "We evaluated Credo AI but couldn't justify €50K. Protectron gave us everything we needed at 1/10th the cost.",
            name: "Elena Müller",
            role: "Compliance Officer",
            company: "FinTech, 500 employees",
            country: "Germany",
            avatar: "https://ui-avatars.com/api/?name=Elena+Muller&background=10b981&color=fff",
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
        answer: "If you deploy AI systems that serve EU users or customers, yes. The law is already in effect, with full enforcement by August 2026. Non-compliance can result in fines up to €35 million or 7% of global revenue.",
        icon: Heart,
    },
    {
        question: "How does the Agent Audit SDK work?",
        answer: "Our SDK integrates with one decorator. It automatically captures tool calls, decision reasoning, and human overrides. All data is stored for 6+ months with PII auto-redaction. Works with LangChain, CrewAI, AutoGen, and custom agents.",
        icon: Code1,
    },
    {
        question: "What is the Protectron Certified badge?",
        answer: "It's a verifiable badge you can embed on your website proving your AI is EU AI Act compliant. After completing requirements and 30 days of SDK logging, you earn the badge. Enterprise customers report 23% higher deal close rates with it.",
        icon: Medal,
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
        question: "Why is Protectron cheaper than Credo AI?",
        answer: "Enterprise platforms like Credo AI charge €50,000+ per year because they're built for Fortune 500 companies. We've automated the heavy lifting so startups and SMBs can achieve the same compliance at 1/10th the cost — starting at just €99/month.",
        icon: SwitchHorizontal01,
    },
    {
        question: "Is my data secure?",
        answer: "Yes. We're SOC 2 compliant and use enterprise-grade encryption. Your compliance data is hosted in EU servers, ensuring full GDPR compliance. EU data residency add-on available for €99/month.",
        icon: Heart,
    },
    {
        question: "Can I use this if I'm not technical?",
        answer: "Absolutely. Our platform is designed for legal, compliance, and business teams, not just engineers. The questionnaire uses plain language, and our AI generates documentation that's easy to review and customize.",
        icon: SlashCircle01,
    },
    {
        question: "How do I know what risk category my AI falls into?",
        answer: "Our free risk assessment quiz walks you through a simple questionnaire about your AI system's purpose, data usage, and deployment context. In about 10 minutes, you'll know exactly which risk category applies.",
        icon: SlashCircle01,
    },
    {
        question: "Do you support AI agents specifically?",
        answer: "Yes! We're built for AI agents. Our SDK captures audit trails automatically, tracking every tool call, decision, and human override. This is essential for Article 12 compliance which requires detailed logging.",
        icon: Code1,
    },
];

const FAQItem = ({ faq, isOpen, onToggle }: { faq: typeof faqsExtended[0]; isOpen: boolean; onToggle: () => void }) => (
    <div className="border-b border-secondary pb-6">
        <h3>
            <motion.button
                onClick={onToggle}
                className="flex w-full cursor-pointer items-start justify-between gap-2 rounded-md text-left outline-focus-ring select-none focus-visible:outline-2 focus-visible:outline-offset-2 md:gap-6 group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
            >
                <span className="text-md font-semibold text-primary group-hover:text-brand-600 transition-colors duration-200">{faq.question}</span>

                <span 
                    aria-hidden="true" 
                    className="flex size-6 shrink-0 items-center text-fg-quaternary"
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
                        {!isOpen && <line x1="12" y1="8" x2="12" y2="16"></line>}
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                </span>
            </motion.button>
        </h3>

        <motion.div
            className="overflow-hidden"
            initial={false}
            animate={{ 
                height: isOpen ? "auto" : 0, 
                opacity: isOpen ? 1 : 0 
            }}
            transition={{ 
                height: { type: "spring", damping: 30, stiffness: 300 },
                opacity: { duration: 0.2 }
            }}
        >
            <motion.div 
                className="pt-2 pr-8 md:pr-12"
                initial={{ y: -10 }}
                animate={{ y: isOpen ? 0 : -10 }}
                transition={{ duration: 0.2 }}
            >
                <p className="text-md text-tertiary">{faq.answer}</p>
            </motion.div>
        </motion.div>
    </div>
);

const FAQColumn = ({ faqs }: { faqs: typeof faqsExtended }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col gap-6">
            {faqs.map((faq, index) => (
                <motion.div 
                    key={faq.question}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                    }}
                >
                    <FAQItem 
                        faq={faq} 
                        isOpen={openIndex === index} 
                        onToggle={() => handleToggle(index)} 
                    />
                </motion.div>
            ))}
        </div>
    );
};

const FAQSection = () => {
    const leftColumnFaqs = faqsExtended.filter((_, index) => index % 2 === 0);
    const rightColumnFaqs = faqsExtended.filter((_, index) => index % 2 === 1);

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
                    className="mx-auto mt-12 max-w-6xl md:mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
                    }}
                >
                    <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2 md:items-start">
                        <FAQColumn faqs={leftColumnFaqs} />
                        <FAQColumn faqs={rightColumnFaqs} />
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
                        <Button size="xl" href="/contact">Get in touch</Button>
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
        <div className="flex flex-col items-center gap-16 bg-primary pt-16 pb-16 lg:pt-24 lg:pb-24">
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
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-semibold text-violet-700 dark:border-violet-800 dark:bg-violet-900/30 dark:text-violet-400">
                        Testimonials
                    </span>
                </motion.div>
                <motion.h1 
                    className="mt-2 text-display-sm font-semibold text-primary lg:text-display-md"
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
                                            <span className="text-lg font-bold text-primary">{review.company.name}</span>
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

const CountdownTimer = () => {
    const targetDate = new Date('2026-08-02T00:00:00');
    const now = new Date();
    const diffTime = targetDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Determine urgency color based on days remaining
    const getUrgencyColor = () => {
        if (diffDays > 365) return "text-brand-200";
        if (diffDays > 180) return "text-yellow-300";
        if (diffDays > 90) return "text-orange-400";
        return "text-red-400";
    };

    return (
        <div className="flex items-center justify-center gap-2 mt-6">
            <Clock size={20} className={getUrgencyColor()} />
            <span className={`text-lg font-semibold ${getUrgencyColor()}`}>
                {diffDays} days until August 2, 2026 deadline
            </span>
        </div>
    );
};

const BottomCTASection = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes('@')) return;

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                window.location.href = 'https://app.protectron.ai';
            }
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section 
            className="py-16 md:py-24 overflow-hidden" 
            style={{ 
                background: 'linear-gradient(135deg, #3D2A7D 0%, #2C1C5F 50%, #1E1340 100%)' 
            }}
        >
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
                        Get Compliant Before the Deadline
                    </motion.h2>
                    
                    <CountdownTimer />
                    
                    <motion.p 
                        className="mt-4 text-lg text-white/70 md:mt-5 md:text-xl"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        Start your free assessment today. Know exactly where you stand in 10 minutes.
                    </motion.p>

                    <motion.form 
                        className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:mt-10"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="email"
                            placeholder="Enter your work email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="h-12 rounded-lg border border-white/20 bg-white/10 px-4 text-white placeholder:text-white/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 sm:w-80 transition-all duration-200 backdrop-blur-sm"
                        />
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <Button size="xl" color="secondary" className="whitespace-nowrap" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Start Free Assessment'}
                            </Button>
                        </motion.div>
                    </motion.form>

                    <motion.p 
                        className="mt-4 text-sm text-white/60"
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                    >
                        ✓ No credit card required  ✓ Full access  ✓ Cancel anytime
                    </motion.p>
                    
                    <motion.div 
                        className="mt-6 flex items-center justify-center gap-4"
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                    >
                        <a href="/contact" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                            Book a Demo →
                        </a>
                        <span className="text-white/30">|</span>
                        <a href="/contact" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                            Talk to Sales →
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};


const AnnouncementBanner = () => {
    const [isVisible, setIsVisible] = useState(true);
    
    if (!isVisible) return null;
    
    return (
        <div className="bg-brand-600 text-white py-2.5 px-4 relative">
            <div className="max-w-container mx-auto flex items-center justify-center gap-2 text-sm">
                <span className="text-brand-200">🚀</span>
                <span className="font-medium">NEW: AI Agent Audit SDK now available for LangChain & CrewAI</span>
                <a href="/docs/sdk" className="ml-2 inline-flex items-center gap-1 font-semibold text-white hover:text-brand-100 transition-colors underline underline-offset-2">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <button 
                    onClick={() => setIsVisible(false)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-200 hover:text-white transition-colors p-1"
                    aria-label="Dismiss announcement"
                >
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const LandingPage = () => {
    return (
        <div className="bg-primary">
            <AnnouncementBanner />
            <HeroSection />

            <SectionDivider />

            <TrustedBySection />

            <ProblemSection />

            <SolutionSection />

            <HowItWorksSection />

            <FeaturesSection />

            <BuiltForAgentsSection />

            <CertificationBadgeSection />

            <PricingSection />

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
