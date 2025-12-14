"use client";

import { useState, useEffect, useRef } from "react";
import { LayersThree01, LayersTwo01, Zap, Rocket01, Building07 } from "@untitledui/icons";
import { motion, useInView, useSpring, useTransform } from "motion/react";
import { Badge } from "@/components/base/badges/badges";
import { Toggle } from "@/components/base/toggle/toggle";
import { BackgroundStripes } from "@/components/marketing/header-section/base-components/background-stripes";
import { PricingTierCardIcon } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";

// Animated counter component
const AnimatedPrice = ({ value, prefix = "€", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    useEffect(() => {
        const unsubscribe = display.on("change", (latest) => {
            setDisplayValue(latest);
        });
        return unsubscribe;
    }, [display]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}{displayValue}{suffix}
        </span>
    );
};

export const PricingAbstractAngles = () => {
    const [selectedPlan, setSelectedPlan] = useState("monthly");

    const plans = [
        {
            title: "Free",
            subtitle: "€0/month",
            description: "Get started with no commitment",
            features: [
                "Risk assessment quiz",
                "Basic compliance roadmap",
                "Email course on EU AI Act",
                "Community access",
            ],
            icon: Zap,
            buttonText: "Start Free",
        },
        {
            title: "Starter",
            subtitle: selectedPlan === "monthly" ? "€99/month" : "€79/month",
            description: selectedPlan === "monthly" ? "Billed monthly" : "Billed annually (save 20%)",
            features: [
                "Everything in Free",
                "1-3 AI systems",
                "Documentation generator",
                "Compliance checklists",
                "Evidence upload",
                "Email support",
            ],
            icon: LayersTwo01,
            buttonText: "Start Free Trial",
        },
        {
            title: "Growth",
            subtitle: selectedPlan === "monthly" ? "€299/month" : "€239/month",
            description: selectedPlan === "monthly" ? "Billed monthly" : "Billed annually (save 20%)",
            badge: "Most Popular",
            features: [
                "Everything in Starter",
                "4-10 AI systems",
                "Gap analysis",
                "Priority support",
                "Team access (5 users)",
                "Audit reports",
                "API access",
            ],
            icon: Rocket01,
            buttonText: "Start Free Trial",
        },
    ];

    const enterprisePlans = [
        {
            title: "Scale",
            subtitle: selectedPlan === "monthly" ? "€999/month" : "€799/month",
            description: selectedPlan === "monthly" ? "Billed monthly" : "Billed annually (save 20%)",
            features: [
                "Everything in Growth",
                "11-50 AI systems",
                "Dedicated CSM",
                "Custom templates",
                "Compliance badges",
                "Regulatory alerts",
            ],
            icon: LayersThree01,
            buttonText: "Start Free Trial",
        },
        {
            title: "Enterprise",
            subtitle: "Custom",
            description: "For large organizations",
            features: [
                "Everything in Scale",
                "Unlimited AI systems",
                "Custom integrations",
                "On-premise deployment",
                "Dedicated support",
                "SLA guarantees",
            ],
            icon: Building07,
            buttonText: "Contact Sales",
        },
    ];

    return (
        <section className="bg-primary">
            <div className="bg-utility-brand-50_alt pt-16 md:pt-24">
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
                            <Badge size="lg" type="pill-color" color="brand" className="hidden bg-transparent md:flex">
                                Pricing
                            </Badge>
                            <Badge size="md" type="pill-color" color="brand" className="bg-transparent md:hidden">
                                Pricing
                            </Badge>
                        </motion.div>

                        <motion.h2 
                            className="mt-4 text-display-md font-semibold text-brand-primary md:text-display-lg"
                            variants={{ hidden: { opacity: 0, y: 20, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }}
                        >
                            Pricing That Makes Sense
                        </motion.h2>
                        <motion.p 
                            className="mt-4 text-lg text-brand-secondary md:mt-6 md:text-xl"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        >
                            10x cheaper than enterprise tools. No consultants needed. All paid plans include 14-day free trial.
                        </motion.p>
                        <motion.div 
                            className="mt-8 flex md:mt-12"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        >
                            <div className="relative z-10 inline-flex gap-3">
                                <Toggle
                                    id="annual-pricing"
                                    size="md"
                                    isSelected={selectedPlan === "annually"}
                                    onChange={(value) => setSelectedPlan(value ? "annually" : "monthly")}
                                />

                                <label htmlFor="annual-pricing" className="text-md font-medium text-brand-primary select-none">
                                    Annual pricing <span className="text-brand-secondary">(save 20%)</span>
                                </label>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="relative py-16 md:py-24">
                <BackgroundStripes />
                <div className="relative mx-auto max-w-container px-4 md:px-8">
                    {/* Main pricing tiers */}
                    <motion.div 
                        className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                        }}
                    >
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.title}
                                variants={{
                                    hidden: { opacity: 0, y: 50, scale: 0.95 },
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
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <PricingTierCardIcon {...plan} iconTheme="modern" iconColor="gray" />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Enterprise tiers */}
                    <motion.div 
                        className="mt-8 grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
                        }}
                    >
                        {enterprisePlans.map((plan) => (
                            <motion.div
                                key={plan.title}
                                variants={{
                                    hidden: { opacity: 0, y: 50, scale: 0.95 },
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
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <PricingTierCardIcon {...plan} iconTheme="modern" iconColor="gray" />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Trust note */}
                    <p className="mt-8 text-center text-sm text-tertiary">
                        All paid plans include 14-day free trial. No credit card required.
                    </p>
                </div>
            </div>
        </section>
    );
};
