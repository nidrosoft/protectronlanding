import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Protectron.ai — EU AI Act Compliance in Weeks, Not Months",
    description: "Automated EU AI Act compliance for AI companies. Risk classification, documentation generation, and compliance tracking. 10-50x cheaper than consultants. Start free.",
    keywords: ["EU AI Act", "AI compliance", "AI regulation", "compliance automation", "risk assessment", "AI documentation", "GDPR", "AI governance"],
    authors: [{ name: "Protectron.ai" }],
    creator: "Protectron.ai",
    publisher: "Protectron.ai",
    robots: "index, follow",
    openGraph: {
        type: "website",
        locale: "en_EU",
        url: "https://protectron.ai",
        siteName: "Protectron.ai",
        title: "Protectron.ai — EU AI Act Compliance in Weeks, Not Months",
        description: "Automated EU AI Act compliance for AI companies. Risk classification, documentation generation, and compliance tracking. Start your free risk assessment today.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Protectron.ai - EU AI Act Compliance Platform",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Protectron.ai — EU AI Act Compliance in Weeks",
        description: "Automated EU AI Act compliance. 10-50x cheaper than consultants. Start free.",
        images: ["/og-image.png"],
        creator: "@protectronai",
    },
};

export const viewport: Viewport = {
    themeColor: "#7f56d9",
    colorScheme: "light dark",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cx(inter.variable, "bg-primary antialiased")}>
                <RouteProvider>
                    <Theme>{children}</Theme>
                </RouteProvider>
            </body>
        </html>
    );
}
