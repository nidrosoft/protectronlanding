import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Compare EU AI Act Compliance Solutions",
    description: "Compare Protectron.ai vs Credo AI vs Holistic AI vs Vanta vs Consultants. Find the best EU AI Act compliance solution for your company. Pricing, features, and implementation time compared.",
    keywords: [
        "EU AI Act comparison",
        "Credo AI alternative",
        "Holistic AI alternative",
        "Vanta EU AI Act",
        "AI compliance comparison",
        "EU AI Act consultants",
        "compliance platform comparison",
    ],
    openGraph: {
        title: "Compare EU AI Act Compliance Solutions | Protectron.ai",
        description: "Protectron.ai vs Credo AI vs Holistic AI vs Vanta vs Consultants. Find the best solution for your EU AI Act compliance needs.",
        url: "https://protectron.ai/compare",
    },
    twitter: {
        title: "Compare EU AI Act Compliance Solutions",
        description: "Protectron.ai vs enterprise platforms vs consultants. Which is right for you?",
    },
    alternates: {
        canonical: "https://protectron.ai/compare",
    },
};

export default function CompareLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
