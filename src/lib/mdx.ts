export function extractHeadings(content: string): { id: string; text: string; level: number }[] {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const headings: { id: string; text: string; level: number }[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = text
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");

        headings.push({ id, text, level });
    }

    return headings;
}

export function generateTableOfContents(content: string): { id: string; text: string; level: number }[] {
    return extractHeadings(content).filter((h) => h.level >= 2 && h.level <= 3);
}
