"use client";

import { ShieldTick } from "iconsax-react";

const footerNavList = [
    {
        label: "Product",
        items: [
            { label: "Features", href: "/#features" },
            { label: "Pricing", href: "/#pricing" },
            { label: "For Agents", href: "/for-agents" },
            { label: "For Compliance", href: "/for-compliance" },
            { label: "Integrations", href: "/integrations" },
        ],
    },
    {
        label: "For Developers",
        items: [
            { label: "SDK Overview", href: "/docs/sdk" },
            { label: "Quick Start Guide", href: "/docs/quickstart" },
            { label: "LangChain Guide", href: "/docs/langchain" },
            { label: "CrewAI Guide", href: "/docs/crewai" },
            { label: "API Reference", href: "/docs/api" },
            { label: "Changelog", href: "/changelog" },
        ],
    },
    {
        label: "Resources",
        items: [
            { label: "Blog", href: "/blog" },
            { label: "EU AI Act Guide", href: "/guide" },
            { label: "Compliance Checklist", href: "/resources/eu-ai-act-checklist" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Article 12 Guide", href: "/guide/article-12" },
            { label: "GPAI Requirements", href: "/guide/gpai" },
            { label: "High-Risk AI Guide", href: "/guide/high-risk" },
        ],
    },
    {
        label: "Company",
        items: [
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Security", href: "/security" },
        ],
    },
    {
        label: "Legal",
        items: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Cookie Policy", href: "/cookies" },
            { label: "DPA", href: "/legal/dpa" },
        ],
    },
];

export const Footer = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                {/* Top section with logo and description */}
                <div className="mb-12 flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <ShieldTick size="24" color="currentColor" variant="Bold" className="text-brand-600" />
                        <span className="text-xl font-bold text-primary">Protectron</span>
                    </div>
                    <p className="text-sm text-tertiary max-w-xs">
                        EU AI Act compliance for AI systems and agents.
                    </p>
                </div>

                {/* Navigation grid */}
                <nav>
                    <ul className="grid grid-cols-2 gap-8 md:grid-cols-5">
                        {footerNavList.map((category) => (
                            <li key={category.label}>
                                <h4 className="text-sm font-semibold text-primary">{category.label}</h4>
                                <ul className="mt-4 flex flex-col gap-3">
                                    {category.items.map((item) => (
                                        <li key={item.label}>
                                            <a 
                                                href={item.href} 
                                                className="text-sm text-tertiary hover:text-primary transition-colors flex items-center gap-1"
                                            >
                                                {item.label}
                                                {(item as { isNew?: boolean }).isNew && (
                                                    <span className="text-xs bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400 px-1.5 py-0.5 rounded font-medium">NEW</span>
                                                )}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Bottom section */}
                <div className="mt-12 flex flex-col gap-6 border-t border-secondary pt-8 md:mt-16">
                    {/* Row 1: Copyright, Trust badges, Social links */}
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                        {/* Left - Copyright */}
                        <p className="text-sm text-quaternary">© {new Date().getFullYear()} Protectron. All rights reserved.</p>
                        
                        {/* Center - Trust badges */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-tertiary">
                            <span className="flex items-center gap-1">
                                <span>🇪🇺</span> Data hosted in EU
                            </span>
                            <span>SOC 2 Type II</span>
                            <span>GDPR Compliant</span>
                        </div>
                        
                        {/* Right - Social links */}
                        <div className="flex items-center gap-4">
                            <a href="https://linkedin.com/company/protectron" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-primary transition-colors">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            </a>
                            <a href="https://twitter.com/protectronai" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-primary transition-colors">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </a>
                            <a href="https://github.com/protectron" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-primary transition-colors">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Row 2: Built by Nidrosoft */}
                    <div className="text-center">
                        <p className="text-sm text-tertiary flex items-center justify-center gap-1">
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
                    </div>
                </div>
            </div>
        </footer>
    );
};
