import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { getPostBySlug, getAllSlugs, getRelatedPosts } from "@/lib/blog";
import { generateTableOfContents } from "@/lib/mdx";
import { Header } from "@/components/marketing/header-navigation/header";
import { Footer } from "@/components/shared/footer";
import { mdxComponents } from "@/components/blog/mdx-components";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/blog/article-json-ld";
import { ShareButtons } from "@/components/blog/share-buttons";
import { BlogCard } from "@/components/blog/blog-card";
import { Badge } from "@/components/base/badges/badges";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: "Article Not Found",
        };
    }

    const url = `https://protectron.ai/blog/${slug}`;

    return {
        title: post.title,
        description: post.description,
        authors: [{ name: post.author }],
        keywords: post.tags,
        openGraph: {
            title: post.title,
            description: post.description,
            url,
            type: "article",
            publishedTime: new Date(post.date).toISOString(),
            authors: [post.author],
            tags: post.tags,
            images: post.image
                ? [{ url: `https://protectron.ai${post.image}`, width: 1200, height: 630 }]
                : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: post.image ? [`https://protectron.ai${post.image}`] : undefined,
        },
        alternates: {
            canonical: url,
        },
    };
}

export default async function BlogArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const headings = generateTableOfContents(post.content);
    const relatedPosts = getRelatedPosts(slug, 3);
    const url = `https://protectron.ai/blog/${slug}`;

    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="bg-primary min-h-screen">
            <ArticleJsonLd post={post} url={url} />
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", url: "https://protectron.ai" },
                    { name: "Blog", url: "https://protectron.ai/blog" },
                    { name: post.title, url },
                ]}
            />
            <Header isFloating />

            {/* Article Header */}
            <header className="pt-32 pb-8 md:pt-40 md:pb-12">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="max-w-3xl mx-auto">
                        {/* Back Link */}
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sm text-tertiary hover:text-primary transition-colors mb-6"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Blog
                        </Link>

                        {/* Category & Tags */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <Badge color="brand" size="md">
                                {post.category}
                            </Badge>
                            {post.tags.slice(0, 3).map((tag) => (
                                <Badge key={tag} color="gray" size="sm">
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        {/* Title */}
                        <h1 className="text-display-sm font-semibold text-primary md:text-display-md lg:text-display-lg">
                            {post.title}
                        </h1>

                        {/* Description */}
                        <p className="mt-4 text-lg text-tertiary md:text-xl">
                            {post.description}
                        </p>

                        {/* Meta */}
                        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-tertiary">
                            <span className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                {post.author}
                                {post.authorRole && (
                                    <span className="text-quaternary">• {post.authorRole}</span>
                                )}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {formattedDate}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {post.readingTime}
                            </span>
                        </div>

                        {/* Share */}
                        <div className="mt-6 pt-6 border-t border-secondary">
                            <ShareButtons url={url} title={post.title} />
                        </div>
                    </div>
                </div>
            </header>

            {/* Featured Image */}
            {post.image && (
                <div className="mx-auto max-w-container px-4 md:px-8 mb-12">
                    <div className="max-w-4xl mx-auto">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full rounded-2xl object-cover aspect-[2/1]"
                        />
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="mx-auto max-w-container px-4 md:px-8 pb-16">
                <div className="flex gap-12 max-w-6xl mx-auto">
                    {/* Table of Contents - Sidebar */}
                    {headings.length > 0 && (
                        <aside className="hidden lg:block w-64 flex-shrink-0">
                            <TableOfContents headings={headings} />
                        </aside>
                    )}

                    {/* Article Content */}
                    <article className="flex-1 max-w-3xl prose-custom">
                        <MDXRemote
                            source={post.content}
                            components={mdxComponents}
                            options={{
                                mdxOptions: {
                                    remarkPlugins: [remarkGfm],
                                    rehypePlugins: [
                                        rehypeSlug,
                                        [rehypeAutolinkHeadings, { behavior: "wrap" }],
                                    ],
                                },
                            }}
                        />

                        {/* Article Footer */}
                        <div className="mt-12 pt-8 border-t border-secondary">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <Badge key={tag} color="gray" size="sm">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <ShareButtons url={url} title={post.title} />
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
                <section className="py-16 bg-secondary">
                    <div className="mx-auto max-w-container px-4 md:px-8">
                        <h2 className="text-2xl font-semibold text-primary mb-8">
                            Related Articles
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {relatedPosts.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-semibold text-primary md:text-3xl">
                            Ready to Get Compliant?
                        </h2>
                        <p className="mt-4 text-tertiary">
                            Start your EU AI Act compliance journey today. Get a free risk assessment 
                            and see exactly where you stand.
                        </p>
                        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 font-medium text-white hover:bg-brand-700 transition-colors"
                            >
                                Start Free Assessment
                            </Link>
                            <Link
                                href="/blog"
                                className="inline-flex items-center justify-center rounded-lg border border-secondary bg-primary px-6 py-3 font-medium text-primary hover:bg-secondary transition-colors"
                            >
                                Read More Articles
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
