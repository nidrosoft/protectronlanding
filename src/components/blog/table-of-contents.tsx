"use client";

import { useEffect, useState } from "react";
import { cx } from "@/utils/cx";

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    headings: TOCItem[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-80px 0px -80% 0px" }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [headings]);

    if (headings.length === 0) return null;

    return (
        <nav className="sticky top-24">
            <h3 className="text-sm font-semibold text-primary mb-4">On this page</h3>
            <ul className="space-y-2 border-l border-secondary">
                {headings.map((heading) => (
                    <li key={heading.id} style={{ paddingLeft: `${(heading.level - 2) * 12 + 16}px` }}>
                        <a
                            href={`#${heading.id}`}
                            className={cx(
                                "block text-sm transition-colors py-1",
                                activeId === heading.id
                                    ? "text-brand-600 font-medium border-l-2 border-brand-600 -ml-[1px] pl-4"
                                    : "text-tertiary hover:text-primary"
                            )}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
