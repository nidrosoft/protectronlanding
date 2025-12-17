"use client";

import { useState } from "react";
import { motion } from "motion/react";

interface FAQ {
    question: string;
    answer: string;
}

const FAQItem = ({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) => (
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

interface FAQSectionProps {
    faqs: FAQ[];
    title?: string;
    subtitle?: string;
}

export const FAQSection = ({ faqs, title = "Frequently Asked Questions", subtitle }: FAQSectionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
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
                    <motion.h2 
                        className="text-display-sm font-semibold text-primary md:text-display-md"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        {title}
                    </motion.h2>
                    {subtitle && (
                        <motion.p 
                            className="mt-4 text-lg text-tertiary"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </motion.div>
                
                <motion.div 
                    className="mx-auto mt-12 max-w-3xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                >
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
                </motion.div>
            </div>
        </section>
    );
};
