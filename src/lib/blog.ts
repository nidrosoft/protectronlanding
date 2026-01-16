import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    authorRole?: string;
    tags: string[];
    category: string;
    image?: string;
    featured?: boolean;
    readingTime: string;
    content: string;
}

export interface BlogPostMeta {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    authorRole?: string;
    tags: string[];
    category: string;
    image?: string;
    featured?: boolean;
    readingTime: string;
}

function ensureBlogDir() {
    if (!fs.existsSync(BLOG_DIR)) {
        fs.mkdirSync(BLOG_DIR, { recursive: true });
    }
}

export function getAllPosts(): BlogPostMeta[] {
    ensureBlogDir();
    
    const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));

    const posts = files
        .map((file) => {
            const filePath = path.join(BLOG_DIR, file);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const { data, content } = matter(fileContent);
            const stats = readingTime(content);

            return {
                slug: file.replace(".mdx", ""),
                title: data.title || "Untitled",
                description: data.description || "",
                date: data.date || new Date().toISOString(),
                author: data.author || "Protectron Team",
                authorRole: data.authorRole,
                tags: data.tags || [],
                category: data.category || "General",
                image: data.image,
                featured: data.featured || false,
                readingTime: data.readingTime || stats.text,
            } as BlogPostMeta;
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
    ensureBlogDir();
    
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const stats = readingTime(content);

    return {
        slug,
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        author: data.author || "Protectron Team",
        authorRole: data.authorRole,
        tags: data.tags || [],
        category: data.category || "General",
        image: data.image,
        featured: data.featured || false,
        readingTime: data.readingTime || stats.text,
        content,
    };
}

export function getAllSlugs(): string[] {
    ensureBlogDir();
    
    const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));
    return files.map((file) => file.replace(".mdx", ""));
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
    const posts = getAllPosts();
    return posts.filter((post) => post.tags.includes(tag));
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
    const posts = getAllPosts();
    return posts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
}

export function getFeaturedPosts(): BlogPostMeta[] {
    const posts = getAllPosts();
    return posts.filter((post) => post.featured);
}

export function getAllTags(): string[] {
    const posts = getAllPosts();
    const tags = new Set<string>();
    posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
}

export function getAllCategories(): string[] {
    const posts = getAllPosts();
    const categories = new Set<string>();
    posts.forEach((post) => categories.add(post.category));
    return Array.from(categories).sort();
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPostMeta[] {
    const currentPost = getPostBySlug(currentSlug);
    if (!currentPost) return [];

    const allPosts = getAllPosts().filter((post) => post.slug !== currentSlug);

    const scored = allPosts.map((post) => {
        let score = 0;
        if (post.category === currentPost.category) score += 3;
        const sharedTags = post.tags.filter((tag) => currentPost.tags.includes(tag));
        score += sharedTags.length * 2;
        return { post, score };
    });

    return scored
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map((item) => item.post);
}
