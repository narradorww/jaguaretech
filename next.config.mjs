import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './src/i18n/request.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/blog", destination: "/portfolio", permanent: true },
      { source: "/en/blog", destination: "/en/portfolio", permanent: true },
      { source: "/es/blog", destination: "/es/portfolio", permanent: true },
      { source: "/fr/blog", destination: "/fr/portfolio", permanent: true },
      { source: "/case-studies", destination: "/portfolio", permanent: true },
      { source: "/en/case-studies", destination: "/en/portfolio", permanent: true },
      { source: "/es/case-studies", destination: "/es/portfolio", permanent: true },
      { source: "/fr/case-studies", destination: "/fr/portfolio", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security headers
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // AI crawler optimization
          {
            key: "X-Robots-Tag",
            value: "all, noai, noimageai, nocolonization",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.(webp|jpg|jpeg|png|gif|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/llms:path(.*\\.txt)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800",
          },
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
