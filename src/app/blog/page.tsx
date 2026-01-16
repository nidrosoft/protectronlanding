import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { Header } from "@/components/marketing/header-navigation/header";
import { Footer } from "@/components/shared/footer";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogListingJsonLd, BreadcrumbJsonLd } from "@/components/blog/article-json-ld";
import { Badge } from "@/components/base/badges/badges";

export const metadata: Metadata = {
    title: "Blog - EU AI Act Insights & Compliance Guides",
    description: "Expert insights on EU AI Act compliance, AI governance, risk classification, and regulatory updates. Stay informed with the latest AI regulation news.",
    openGraph: {
        title: "Protectron.ai Blog - EU AI Act Insights",
        description: "Expert insights on EU AI Act compliance and AI governance.",
        url: "https://protectron.ai/blog",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Protectron.ai Blog - EU AI Act Insights",
        description: "Expert insights on EU AI Act compliance and AI governance.",
    },
    alternates: {
        canonical: "https://protectron.ai/blog",
        types: {
            "application/rss+xml": "https://protectron.ai/blog/rss.xml",
        },
    },
};

export default function BlogListingPage() {
    const posts = getAllPosts();
    const featuredPosts = posts.filter((post) => post.featured);
    const regularPosts = posts.filter((post) => !post.featured);
    const allTags = [...new Set(posts.flatMap((post) => post.tags))];

    return (
        <div className="bg-primary min-h-screen">
            <BlogListingJsonLd
                posts={posts.map((post) => ({
                    title: post.title,
                    url: `https://protectron.ai/blog/${post.slug}`,
                    date: post.date,
                }))}
            />
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", url: "https://protectron.ai" },
                    { name: "Blog", url: "https://protectron.ai/blog" },
                ]}
            />
            <Header isFloating />

            {/* Hero Section */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-display-md font-semibold text-primary md:text-display-lg">
                            Blog
                        </h1>
                        <p className="mt-4 text-lg text-tertiary md:text-xl">
                            Expert insights on EU AI Act compliance, AI governance, and regulatory updates. 
                            Stay ahead of AI regulation with actionable guides and analysis.
                        </p>
                    </div>

                    {/* Tags */}
                    {allTags.length > 0 && (
                        <div className="mt-8 flex flex-wrap gap-2">
                            {allTags.slice(0, 8).map((tag) => (
                                <Badge key={tag} color="gray" size="md">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
                <section className="py-8 md:py-12">
                    <div className="mx-auto max-w-container px-4 md:px-8">
                        <h2 className="text-xl font-semibold text-primary mb-6">Featured Articles</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {featuredPosts.map((post) => (
                                <BlogCard key={post.slug} post={post} featured />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* All Posts */}
            <section className="py-8 md:py-12">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <h2 className="text-xl font-semibold text-primary mb-6">
                        {featuredPosts.length > 0 ? "Latest Articles" : "All Articles"}
                    </h2>
                    {posts.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-tertiary">No articles yet. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {(featuredPosts.length > 0 ? regularPosts : posts).map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-8 md:p-12 text-center">
                        <h2 className="text-2xl font-semibold text-white md:text-3xl">
                            Stay Updated on EU AI Act
                        </h2>
                        <p className="mt-3 text-brand-100 max-w-2xl mx-auto">
                            Get weekly insights on AI compliance, regulatory updates, and practical guides 
                            delivered to your inbox.
                        </p>
                        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 rounded-lg border-0 bg-white/10 px-4 py-3 text-white placeholder:text-brand-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                            />
                            <button className="rounded-lg bg-white px-6 py-3 font-medium text-brand-700 hover:bg-brand-50 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
