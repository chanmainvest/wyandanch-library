import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const basePath = '/wyandanch-library';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  images: { unoptimized: true },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

export default withMDX(nextConfig);
