"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "motion/react";

// Animation variants for reuse across components
export const fadeInUp: Variants = {
    hidden: { 
        opacity: 0, 
        y: 30,
        filter: "blur(10px)"
    },
    visible: { 
        opacity: 1, 
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1]
        }
    }
};

export const fadeInDown: Variants = {
    hidden: { 
        opacity: 0, 
        y: -20 
    },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1]
        }
    }
};

export const fadeIn: Variants = {
    hidden: { 
        opacity: 0 
    },
    visible: { 
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export const scaleIn: Variants = {
    hidden: { 
        opacity: 0, 
        scale: 0.95 
    },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1]
        }
    }
};

export const slideInLeft: Variants = {
    hidden: { 
        opacity: 0, 
        x: -50 
    },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1]
        }
    }
};

export const slideInRight: Variants = {
    hidden: { 
        opacity: 0, 
        x: 50 
    },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1]
        }
    }
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

export const staggerContainerFast: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.05
        }
    }
};

// Floating animation for hero elements
export const floatingAnimation: Variants = {
    initial: { y: 0 },
    animate: {
        y: [-5, 5, -5],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

// Pulse animation for badges/highlights
export const pulseAnimation: Variants = {
    initial: { scale: 1 },
    animate: {
        scale: [1, 1.02, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

// Reusable animated section wrapper with scroll trigger
interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    variant?: "fadeInUp" | "fadeIn" | "scaleIn" | "slideInLeft" | "slideInRight";
}

const variantMap = {
    fadeInUp,
    fadeIn,
    scaleIn,
    slideInLeft,
    slideInRight
};

export const AnimatedSection = ({ 
    children, 
    className = "", 
    delay = 0,
    variant = "fadeInUp" 
}: AnimatedSectionProps) => {
    const selectedVariant = variantMap[variant];
    
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                hidden: selectedVariant.hidden,
                visible: {
                    ...selectedVariant.visible,
                    transition: {
                        ...(selectedVariant.visible as any).transition,
                        delay
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Animated container for staggered children
interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    fast?: boolean;
}

export const StaggerContainer = ({ 
    children, 
    className = "",
    fast = false 
}: StaggerContainerProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fast ? staggerContainerFast : staggerContainer}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Animated item for use inside StaggerContainer
interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}

export const StaggerItem = ({ children, className = "" }: StaggerItemProps) => {
    return (
        <motion.div variants={fadeInUp} className={className}>
            {children}
        </motion.div>
    );
};

// Hover card effect
interface HoverCardProps {
    children: ReactNode;
    className?: string;
}

export const HoverCard = ({ children, className = "" }: HoverCardProps) => {
    return (
        <motion.div
            whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Animated button wrapper
interface AnimatedButtonProps {
    children: ReactNode;
    className?: string;
}

export const AnimatedButton = ({ children, className = "" }: AnimatedButtonProps) => {
    return (
        <motion.div
            whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Counter animation for numbers
interface AnimatedCounterProps {
    value: number;
    prefix?: string;
    suffix?: string;
    className?: string;
    duration?: number;
}

export const AnimatedCounter = ({ 
    value, 
    prefix = "", 
    suffix = "", 
    className = "",
    duration = 2
}: AnimatedCounterProps) => {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={className}
        >
            <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                {prefix}
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {value}
                </motion.span>
                {suffix}
            </motion.span>
        </motion.span>
    );
};
