import { Feed } from "feed";
import { getAllPosts } from "@/lib/blog";

export async function GET() {
    const baseUrl = "https://protectron.ai";
    const posts = getAllPosts();

    const feed = new Feed({
        title: "Protectron.ai Blog",
        description: "Expert insights on EU AI Act compliance, AI governance, and regulatory updates.",
        id: baseUrl,
        link: baseUrl,
        language: "en",
        image: `${baseUrl}/logo.png`,
        favicon: `${baseUrl}/favicon.ico`,
        copyright: `All rights reserved ${new Date().getFullYear()}, Protectron.ai`,
        updated: posts.length > 0 ? new Date(posts[0].date) : new Date(),
        feedLinks: {
            rss2: `${baseUrl}/blog/rss.xml`,
            json: `${baseUrl}/blog/feed.json`,
            atom: `${baseUrl}/blog/atom.xml`,
        },
        author: {
            name: "Protectron Team",
            email: "hello@protectron.ai",
            link: baseUrl,
        },
    });

    posts.forEach((post) => {
        feed.addItem({
            title: post.title,
            id: `${baseUrl}/blog/${post.slug}`,
            link: `${baseUrl}/blog/${post.slug}`,
            description: post.description,
            author: [
                {
                    name: post.author,
                    link: baseUrl,
                },
            ],
            date: new Date(post.date),
            category: post.tags.map((tag) => ({ name: tag })),
        });
    });

    return new Response(feed.rss2(), {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "s-maxage=3600, stale-while-revalidate",
        },
    });
}
