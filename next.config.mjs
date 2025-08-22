// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.ibb.co",
            },
        ],
        // OR for older Next.js:
        // domains: ["i.ibb.co"],
    },
};

export default nextConfig;
