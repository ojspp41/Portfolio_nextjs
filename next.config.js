/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // SWC 압축 활성화로 변경
  images: {
    domains: [
      'www.notion.so',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
      'cdn.example.com', // 추가 도메인 예시
    ],
    formats: ['image/avif', 'image/webp'], // 이미지 포맷 지원 추가
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // 클라이언트 빌드 시 특정 설정 추가 (필요한 경우)
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
};

module.exports = nextConfig;
