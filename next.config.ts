/** @type {import('next').NextConfig} */
const nextConfig = {
  // تیک‌های آزمایشی که کد شاپ‌فای لازم داره:
  experimental: {
    dynamicIO: true,
    cacheComponents: true,
    useCache: true,
    inlineCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
    ],
  },
};

export default nextConfig;
