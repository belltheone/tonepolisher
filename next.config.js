/** @type {import('next').NextConfig} */
const nextConfig = {
    // 성능 최적화
    reactStrictMode: true,

    // 이미지 최적화 설정
    images: {
        formats: ['image/avif', 'image/webp'],
    },
}

module.exports = nextConfig
