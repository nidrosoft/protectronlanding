"use client";

import { type FC } from "react";

interface CodeSnippetProps {
    code: string;
    language?: string;
    filename?: string;
}

export const CodeSnippet: FC<CodeSnippetProps> = ({ code, language = "python", filename = "agent.py" }) => {
    const lines = code.split('\n');
    
    const highlightPython = (line: string) => {
        // Process in order to avoid conflicts
        let result = line;
        
        // First, escape any HTML
        result = result.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        
        // Comments (do this first to avoid highlighting inside comments)
        if (result.includes('#')) {
            const commentIndex = result.indexOf('#');
            const beforeComment = result.substring(0, commentIndex);
            const comment = result.substring(commentIndex);
            result = highlightCode(beforeComment) + `<span class="text-gray-500">${comment}</span>`;
            return result;
        }
        
        return highlightCode(result);
    };
    
    const highlightCode = (text: string) => {
        // Use a token-based approach to avoid overlapping replacements
        const tokens: { start: number; end: number; className: string; text: string }[] = [];
        
        // Helper to add token if no overlap
        const addToken = (match: RegExpExecArray, className: string) => {
            const start = match.index;
            const end = start + match[0].length;
            // Check for overlap with existing tokens
            const hasOverlap = tokens.some(t => 
                (start >= t.start && start < t.end) || (end > t.start && end <= t.end)
            );
            if (!hasOverlap) {
                tokens.push({ start, end, className, text: match[0] });
            }
        };
        
        // Order matters: strings first (to avoid highlighting inside strings)
        // Double-quoted strings
        let match;
        const doubleStringRegex = /"(?:[^"\\]|\\.)*"/g;
        while ((match = doubleStringRegex.exec(text)) !== null) {
            addToken(match, 'text-green-400');
        }
        
        // Single-quoted strings
        const singleStringRegex = /'(?:[^'\\]|\\.)*'/g;
        while ((match = singleStringRegex.exec(text)) !== null) {
            addToken(match, 'text-green-400');
        }
        
        // Decorators
        const decoratorRegex = /@\w+(?:\.\w+)*/g;
        while ((match = decoratorRegex.exec(text)) !== null) {
            addToken(match, 'text-yellow-300');
        }
        
        // Keywords
        const keywordRegex = /\b(from|import|def|class|return|if|else|elif|for|while|try|except|with|as|pass|None|True|False|and|or|not|in|is|async|await)\b/g;
        while ((match = keywordRegex.exec(text)) !== null) {
            addToken(match, 'text-pink-400');
        }
        
        // Built-in functions
        const builtinRegex = /\b(print|len|range|str|int|float|list|dict|set|tuple|type|isinstance|hasattr|getattr|setattr)\b/g;
        while ((match = builtinRegex.exec(text)) !== null) {
            addToken(match, 'text-cyan-400');
        }
        
        // Function calls (capture just the name, not the paren)
        const funcRegex = /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g;
        while ((match = funcRegex.exec(text)) !== null) {
            const funcMatch = { ...match, index: match.index, 0: match[1] } as RegExpExecArray;
            funcMatch[0] = match[1];
            addToken(funcMatch, 'text-blue-400');
        }
        
        // Numbers (but not inside already-tokenized strings)
        const numberRegex = /\b(\d+\.?\d*)\b/g;
        while ((match = numberRegex.exec(text)) !== null) {
            addToken(match, 'text-orange-400');
        }
        
        // Self keyword
        const selfRegex = /\b(self)\b/g;
        while ((match = selfRegex.exec(text)) !== null) {
            addToken(match, 'text-red-400');
        }
        
        // Sort tokens by start position
        tokens.sort((a, b) => a.start - b.start);
        
        // Build result string
        let result = '';
        let lastEnd = 0;
        for (const token of tokens) {
            result += text.slice(lastEnd, token.start);
            result += `<span class="${token.className}">${token.text}</span>`;
            lastEnd = token.end;
        }
        result += text.slice(lastEnd);
        
        return result;
    };

    return (
        <div className="overflow-hidden rounded-xl border border-gray-700 bg-gray-900 shadow-2xl">
            {/* Mac-style header with colored dots */}
            <div className="flex items-center gap-2 border-b border-gray-700 bg-gray-800 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-3 text-sm text-gray-400">{filename}</span>
            </div>
            
            {/* Code content */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm font-mono">
                    <tbody>
                        {lines.map((line, index) => (
                            <tr key={index} className="hover:bg-gray-800/50">
                                <td className="select-none border-r border-gray-700/50 px-4 py-0.5 text-right text-gray-600">
                                    {index + 1}
                                </td>
                                <td className="px-4 py-0.5">
                                    <pre className="font-mono">
                                        <code 
                                            className="text-gray-300"
                                            dangerouslySetInnerHTML={{ __html: highlightPython(line) || '&nbsp;' }}
                                        />
                                    </pre>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
