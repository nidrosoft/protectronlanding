import Script from "next/script";
import type { BlogPost } from "@/lib/blog";

interface ArticleJsonLdProps {
    post: BlogPost;
    url: string;
}

export function ArticleJsonLd({ post, url }: ArticleJsonLdProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        image: post.image ? `https://protectron.ai${post.image}` : "https://protectron.ai/og-image.png",
        datePublished: new Date(post.date).toISOString(),
        dateModified: new Date(post.date).toISOString(),
        author: {
            "@type": "Organization",
            name: post.author,
            url: "https://protectron.ai",
        },
        publisher: {
            "@type": "Organization",
            name: "Protectron.ai",
            logo: {
                "@type": "ImageObject",
                url: "https://protectron.ai/logo.png",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
        },
        keywords: post.tags.join(", "),
        articleSection: post.category,
        wordCount: post.content.split(/\s+/).length,
        timeRequired: post.readingTime,
    };

    return (
        <Script
            id="article-jsonld"
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

interface BreadcrumbJsonLdProps {
    items: { name: string; url: string }[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <Script
            id="breadcrumb-jsonld"
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

interface BlogListingJsonLdProps {
    posts: { title: string; url: string; date: string }[];
}

export function BlogListingJsonLd({ posts }: BlogListingJsonLdProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Protectron.ai Blog",
        description: "Expert insights on EU AI Act compliance, AI governance, and regulatory updates.",
        url: "https://protectron.ai/blog",
        publisher: {
            "@type": "Organization",
            name: "Protectron.ai",
            logo: {
                "@type": "ImageObject",
                url: "https://protectron.ai/logo.png",
            },
        },
        blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            url: post.url,
            datePublished: new Date(post.date).toISOString(),
        })),
    };

    return (
        <Script
            id="blog-listing-jsonld"
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
