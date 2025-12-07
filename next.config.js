/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'api.metalab.az',
                port: '',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
            }
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.html$/,
            loader: 'html-loader',
        });
        return config
    },

}

module.exports = nextConfig
