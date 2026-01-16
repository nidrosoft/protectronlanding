"use client";

import { Twitter, Linkedin, Link2, Check } from "lucide-react";
import { useState } from "react";

interface ShareButtonsProps {
    url: string;
    title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div className="flex items-center gap-2">
            <span className="text-sm text-quaternary mr-2">Share:</span>
            <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-secondary bg-primary text-tertiary transition-colors hover:bg-secondary hover:text-primary"
                aria-label="Share on Twitter"
            >
                <Twitter className="h-4 w-4" />
            </a>
            <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-secondary bg-primary text-tertiary transition-colors hover:bg-secondary hover:text-primary"
                aria-label="Share on LinkedIn"
            >
                <Linkedin className="h-4 w-4" />
            </a>
            <button
                onClick={copyToClipboard}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-secondary bg-primary text-tertiary transition-colors hover:bg-secondary hover:text-primary"
                aria-label="Copy link"
            >
                {copied ? <Check className="h-4 w-4 text-success-500" /> : <Link2 className="h-4 w-4" />}
            </button>
        </div>
    );
}
