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
        return text
            // Decorators (must be before other replacements)
            .replace(/(@\w+(?:\.\w+)*)/g, '<span class="text-yellow-300">$1</span>')
            // Keywords
            .replace(/\b(from|import|def|class|return|if|else|elif|for|while|try|except|with|as|pass|None|True|False|and|or|not|in|is|async|await)\b/g, '<span class="text-pink-400">$1</span>')
            // Built-in functions
            .replace(/\b(print|len|range|str|int|float|list|dict|set|tuple|type|isinstance|hasattr|getattr|setattr)\b/g, '<span class="text-cyan-400">$1</span>')
            // Triple-quoted strings
            .replace(/("""[\s\S]*?"""|'''[\s\S]*?''')/g, '<span class="text-green-400">$1</span>')
            // Double-quoted strings
            .replace(/("(?:[^"\\]|\\.)*")/g, '<span class="text-green-400">$1</span>')
            // Single-quoted strings  
            .replace(/('(?:[^'\\]|\\.)*')/g, '<span class="text-green-400">$1</span>')
            // Function definitions and calls
            .replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, '<span class="text-blue-400">$1</span>(')
            // Numbers
            .replace(/\b(\d+\.?\d*)\b/g, '<span class="text-orange-400">$1</span>')
            // Self keyword
            .replace(/\b(self)\b/g, '<span class="text-red-400">$1</span>');
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
