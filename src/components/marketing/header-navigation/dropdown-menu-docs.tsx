"use client";

import { Book1, Code1, People } from "iconsax-react";
import { Button } from "@/components/base/buttons/button";

const docsItems = [
    {
        title: "Quick Start",
        subtitle: "Get started in 5 minutes with our SDK.",
        href: "/docs/quickstart",
        Icon: Book1,
    },
    {
        title: "LangChain Guide",
        subtitle: "Integration guide for LangChain applications.",
        href: "/docs/langchain",
        Icon: Code1,
    },
    {
        title: "CrewAI Guide",
        subtitle: "Multi-agent compliance for CrewAI crews.",
        href: "/docs/crewai",
        Icon: People,
    },
];

export const DropdownMenuDocs = () => {
    return (
        <div className="px-3 pb-2 md:max-w-[320px] md:p-0">
            <nav className="overflow-hidden rounded-xl bg-secondary shadow-xs ring-1 ring-secondary_alt md:rounded-2xl md:shadow-lg">
                <div className="rounded-xl bg-primary ring-1 ring-secondary md:rounded-t-2xl">
                    <div className="p-4">
                        <h3 className="text-xs font-semibold text-tertiary uppercase tracking-wider mb-3 px-2">Documentation</h3>
                        <ul className="flex flex-col gap-0.5">
                            {docsItems.map(({ title, subtitle, href, Icon }) => (
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
            </nav>
        </div>
    );
};
