'use client';

import Image from 'next/image';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function MDViewer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      className="prose max-w-none leading-6 tracking-tight"
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              {...props}
              style={materialOceanic}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        img: image => (
          <Image
            className="w-full h-auto object-cover rounded-md"
            src={image.src || ''}
            alt={image.alt || ''}
            width={500}
            height={350}
          />
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            className="text-sky-500 decoration-transparent"
          >
            {children}
          </a>
        )
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
