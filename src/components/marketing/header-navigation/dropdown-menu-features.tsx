"use client";

import { ShieldTick, Code1, DocumentText, Chart, Medal, SearchStatus } from "iconsax-react";
import { Button } from "@/components/base/buttons/button";
import { NavMenuItemLink } from "./base-components/nav-menu-item";

const complianceItems = [
    {
        title: "Risk Classification",
        subtitle: "Instant classification based on EU AI Act Annex III.",
        href: "/features/risk-classification",
        Icon: ShieldTick,
    },
    {
        title: "Requirements Tracking",
        subtitle: "Interactive checklist mapped to your risk level.",
        href: "/features/requirement-tracking",
        Icon: Chart,
    },
    {
        title: "Document Generation",
        subtitle: "AI-powered drafts of technical docs and policies.",
        href: "/features/document-generation",
        Icon: DocumentText,
    },
    {
        title: "Evidence Management",
        subtitle: "Upload, organize, and track compliance evidence.",
        href: "/features/evidence-management",
        Icon: SearchStatus,
    },
];

const agentItems = [
    {
        title: "Audit Trail",
        subtitle: "Automatic logging of agent actions and decisions.",
        href: "/features/agent-audit-trail",
        Icon: SearchStatus,
    },
    {
        title: "SDK Integration",
        subtitle: "One decorator for automatic compliance logging.",
        href: "/features/sdk-integration",
        Icon: Code1,
    },
    {
        title: "Certification Badges",
        subtitle: "Verifiable proof of compliance for your site.",
        href: "/features/certification-badges",
        Icon: Medal,
    },
];

export const DropdownMenuFeatures = () => {
    return (
        <div className="px-3 pb-2 md:max-w-[520px] md:p-0">
            <nav className="overflow-hidden rounded-xl bg-secondary shadow-xs ring-1 ring-secondary_alt md:rounded-2xl md:shadow-lg">
                <div className="rounded-xl bg-primary ring-1 ring-secondary md:rounded-t-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {/* Compliance Column */}
                        <div className="p-4 border-b md:border-b-0 md:border-r border-secondary">
                            <h3 className="text-xs font-semibold text-tertiary uppercase tracking-wider mb-3 px-2">Compliance</h3>
                            <ul className="flex flex-col gap-0.5">
                                {complianceItems.map(({ title, subtitle, href, Icon }) => (
                                    <li key={title}>
                                        <a 
                                            href={href}
                                            className="flex items-start gap-3 rounded-lg p-2 hover:bg-primary_hover transition-colors"
                                        >
                                            <Icon size={20} className="text-brand-600 mt-0.5 shrink-0" />
                                            <div>
                                                <p className="text-sm font-medium text-primary">{title}</p>
                                                <p className="text-xs text-tertiary">{subtitle}</p>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* AI Agents Column */}
                        <div className="p-4">
                            <h3 className="text-xs font-semibold text-tertiary uppercase tracking-wider mb-3 px-2">AI Agents</h3>
                            <ul className="flex flex-col gap-0.5">
                                {agentItems.map(({ title, subtitle, href, Icon }) => (
                                    <li key={title}>
                                        <a 
                                            href={href}
                                            className="flex items-start gap-3 rounded-lg p-2 hover:bg-primary_hover transition-colors"
                                        >
                                            <Icon size={20} className="text-brand-600 mt-0.5 shrink-0" />
                                            <div>
                                                <p className="text-sm font-medium text-primary">{title}</p>
                                                <p className="text-xs text-tertiary">{subtitle}</p>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
