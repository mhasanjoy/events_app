/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/photo-**',
            },
            {
                protocol: 'https',
                hostname: 'hydeparkwinterwonderland.com',
                port: '',
                pathname: '/static/**',
            },
            {
                protocol: 'https',
                hostname: 'wembleypark.com',
                port: '',
                pathname: '/media/images/**',
            },
        ],
    },
};

module.exports = nextConfig;
