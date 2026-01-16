import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";
import { Badge } from "@/components/base/badges/badges";

interface BlogCardProps {
    post: BlogPostMeta;
    featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    if (featured) {
        return (
            <Link href={`/blog/${post.slug}`} className="group block">
                <article className="relative overflow-hidden rounded-2xl border border-secondary bg-secondary/50 transition-all hover:border-brand-200 hover:shadow-lg dark:hover:border-brand-800">
                    {post.image && (
                        <div className="aspect-[2/1] overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    )}
                    <div className="p-6 md:p-8">
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <Badge color="brand" size="sm">
                                {post.category}
                            </Badge>
                            {post.featured && (
                                <Badge color="success" size="sm">
                                    Featured
                                </Badge>
                            )}
                        </div>
                        <h2 className="text-xl font-semibold text-primary md:text-2xl group-hover:text-brand-600 transition-colors">
                            {post.title}
                        </h2>
                        <p className="mt-3 text-md text-tertiary line-clamp-2">{post.description}</p>
                        <div className="mt-4 flex items-center gap-4 text-sm text-quaternary">
                            <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {formattedDate}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {post.readingTime}
                            </span>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-brand-600 font-medium text-sm group-hover:gap-3 transition-all">
                            Read article
                            <ArrowRight className="h-4 w-4" />
                        </div>
                    </div>
                </article>
            </Link>
        );
    }

    return (
        <Link href={`/blog/${post.slug}`} className="group block">
            <article className="h-full rounded-xl border border-secondary bg-primary p-6 transition-all hover:border-brand-200 hover:shadow-md dark:hover:border-brand-800">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge color="gray" size="sm">
                        {post.category}
                    </Badge>
                </div>
                <h3 className="text-lg font-semibold text-primary group-hover:text-brand-600 transition-colors line-clamp-2">
                    {post.title}
                </h3>
                <p className="mt-2 text-sm text-tertiary line-clamp-2">{post.description}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-quaternary">
                    <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {formattedDate}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readingTime}
                    </span>
                </div>
            </article>
        </Link>
    );
}
