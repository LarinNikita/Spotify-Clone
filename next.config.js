/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                // protocol: 'https',
                hostname: 'chppjlizqatqymqtegut.supabase.co',
                pathname: '**'
            }
        ]
    }
}

module.exports = nextConfig
