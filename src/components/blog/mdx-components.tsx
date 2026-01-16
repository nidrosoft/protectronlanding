import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";

const CustomLink = ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href?.startsWith("/") || href?.startsWith("#");

    if (isInternal) {
        return (
            <Link href={href || "#"} {...props} className="text-brand-600 hover:text-brand-700 underline underline-offset-2">
                {children}
            </Link>
        );
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 underline underline-offset-2" {...props}>
            {children}
        </a>
    );
};

const Callout = ({ type = "info", children }: { type?: "info" | "warning" | "success" | "error"; children: React.ReactNode }) => {
    const styles = {
        info: {
            bg: "bg-blue-50 dark:bg-blue-950/50",
            border: "border-blue-200 dark:border-blue-800",
            icon: <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
        },
        warning: {
            bg: "bg-warning-50 dark:bg-warning-950/50",
            border: "border-warning-200 dark:border-warning-800",
            icon: <AlertTriangle className="h-5 w-5 text-warning-600 dark:text-warning-400" />,
        },
        success: {
            bg: "bg-success-50 dark:bg-success-950/50",
            border: "border-success-200 dark:border-success-800",
            icon: <CheckCircle className="h-5 w-5 text-success-600 dark:text-success-400" />,
        },
        error: {
            bg: "bg-error-50 dark:bg-error-950/50",
            border: "border-error-200 dark:border-error-800",
            icon: <XCircle className="h-5 w-5 text-error-600 dark:text-error-400" />,
        },
    };

    const style = styles[type];

    return (
        <div className={`my-6 flex gap-3 rounded-lg border p-4 ${style.bg} ${style.border}`}>
            <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
            <div className="text-sm text-tertiary [&>p]:m-0">{children}</div>
        </div>
    );
};

export const mdxComponents: MDXComponents = {
    h1: ({ children, ...props }) => (
        <h1 className="mt-12 mb-4 text-display-xs font-semibold text-primary md:text-display-sm scroll-mt-24" {...props}>
            {children}
        </h1>
    ),
    h2: ({ children, id, ...props }) => (
        <h2 id={id} className="mt-10 mb-4 text-xl font-semibold text-primary md:text-2xl scroll-mt-24 border-b border-secondary pb-2" {...props}>
            {children}
        </h2>
    ),
    h3: ({ children, id, ...props }) => (
        <h3 id={id} className="mt-8 mb-3 text-lg font-semibold text-primary md:text-xl scroll-mt-24" {...props}>
            {children}
        </h3>
    ),
    h4: ({ children, ...props }) => (
        <h4 className="mt-6 mb-2 text-base font-semibold text-primary md:text-lg scroll-mt-24" {...props}>
            {children}
        </h4>
    ),
    p: ({ children, ...props }) => (
        <p className="mb-4 text-md leading-relaxed text-tertiary" {...props}>
            {children}
        </p>
    ),
    a: CustomLink,
    ul: ({ children, ...props }) => (
        <ul className="mb-4 ml-6 list-disc space-y-2 text-tertiary" {...props}>
            {children}
        </ul>
    ),
    ol: ({ children, ...props }) => (
        <ol className="mb-4 ml-6 list-decimal space-y-2 text-tertiary" {...props}>
            {children}
        </ol>
    ),
    li: ({ children, ...props }) => (
        <li className="text-md leading-relaxed" {...props}>
            {children}
        </li>
    ),
    blockquote: ({ children, ...props }) => (
        <blockquote className="my-6 border-l-4 border-brand-500 bg-secondary pl-4 py-3 italic text-tertiary" {...props}>
            {children}
        </blockquote>
    ),
    code: ({ children, className, ...props }) => {
        const isInline = !className;
        if (isInline) {
            return (
                <code className="rounded bg-secondary px-1.5 py-0.5 text-sm font-mono text-brand-600 dark:text-brand-400" {...props}>
                    {children}
                </code>
            );
        }
        return (
            <code className={className} {...props}>
                {children}
            </code>
        );
    },
    pre: ({ children, ...props }) => (
        <pre className="my-6 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm" {...props}>
            {children}
        </pre>
    ),
    table: ({ children, ...props }) => (
        <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm" {...props}>
                {children}
            </table>
        </div>
    ),
    thead: ({ children, ...props }) => (
        <thead className="bg-secondary" {...props}>
            {children}
        </thead>
    ),
    th: ({ children, ...props }) => (
        <th className="border border-secondary px-4 py-3 text-left font-semibold text-primary" {...props}>
            {children}
        </th>
    ),
    td: ({ children, ...props }) => (
        <td className="border border-secondary px-4 py-3 text-tertiary" {...props}>
            {children}
        </td>
    ),
    hr: () => <hr className="my-8 border-secondary" />,
    img: ({ src, alt, ...props }) => (
        <figure className="my-6">
            <img src={src} alt={alt} className="rounded-lg w-full" {...props} />
            {alt && <figcaption className="mt-2 text-center text-sm text-quaternary">{alt}</figcaption>}
        </figure>
    ),
    strong: ({ children, ...props }) => (
        <strong className="font-semibold text-primary" {...props}>
            {children}
        </strong>
    ),
    Callout,
};
