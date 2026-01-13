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
    metadataBase: new URL("https://protectron.ai"),
    title: {
        default: "Protectron.ai — EU AI Act Compliance in Weeks, Not Months",
        template: "%s | Protectron.ai",
    },
    description: "Automated EU AI Act compliance for AI companies. Risk classification, documentation generation, and compliance tracking. 10x cheaper than consultants. Start your free assessment today.",
    keywords: [
        "EU AI Act",
        "AI compliance",
        "AI regulation",
        "compliance automation",
        "risk assessment",
        "AI documentation",
        "GDPR",
        "AI governance",
        "AI Act compliance software",
        "EU AI regulation",
        "AI risk classification",
        "compliance platform",
    ],
    authors: [{ name: "Protectron.ai", url: "https://protectron.ai" }],
    creator: "Protectron.ai",
    publisher: "Protectron.ai",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/icon.svg", type: "image/svg+xml" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180" },
        ],
    },
    manifest: "/site.webmanifest",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://protectron.ai",
        siteName: "Protectron.ai",
        title: "Protectron.ai — EU AI Act Compliance in Weeks, Not Months",
        description: "Automated EU AI Act compliance for AI companies. Risk classification, documentation generation, and compliance tracking. Start your free risk assessment today.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Protectron.ai — EU AI Act Compliance in Weeks",
        description: "Automated EU AI Act compliance. 10x cheaper than consultants. Start your free assessment.",
        site: "@protectronai",
        creator: "@protectronai",
    },
    alternates: {
        canonical: "https://protectron.ai",
    },
    category: "technology",
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
    ],
    colorScheme: "light dark",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    type="text/javascript"
                    src="https://embeds.iubenda.com/widgets/c2f30d44-92e7-433e-8185-71f5d0cbd681.js"
                    async
                />
            </head>
            <body className={cx(inter.variable, "bg-primary antialiased")}>
                <RouteProvider>
                    <Theme>{children}</Theme>
                </RouteProvider>
            </body>
        </html>
    );
}
