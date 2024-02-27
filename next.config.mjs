/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // remotePatterns: ['i.ibb.co']
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                port: '',
            }
        ]
    }
}

export default nextConfig;
