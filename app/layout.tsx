import type { Metadata } from 'next'
import './globals.css'

// 도메인 설정
const SITE_URL = 'https://www.gctranslator.site'

// SEO 메타데이터 설정
export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: '개찰번역기 | 개떡같이 말해도 찰떡같이 바꿔드립니다',
        template: '%s | 개찰번역기'
    },
    description: '거친 언어를 상황에 맞는 적절한 문체로 변환해 주는 AI 서비스. 비즈니스 메일, 연애/썸 메시지, 정중한 거절까지!',
    keywords: ['번역기', 'AI', '윤문', '비즈니스 메일', '문장 다듬기', '개찰번역기', '톤 변환'],
    authors: [{ name: '개찰번역기 팀' }],
    // Open Graph 메타태그 (SNS 공유 최적화)
    openGraph: {
        title: '개찰번역기 | 개떡같이 말해도 찰떡같이 바꿔드립니다',
        description: '거친 언어를 상황에 맞는 적절한 문체로 변환해 주는 AI 서비스',
        type: 'website',
        locale: 'ko_KR',
        siteName: '개찰번역기',
        url: SITE_URL,
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: '개찰번역기 - AI 문장 다듬기 서비스',
            },
        ],
    },
    // 트위터 카드 설정
    twitter: {
        card: 'summary_large_image',
        title: '개찰번역기 | 개떡같이 말해도 찰떡같이 바꿔드립니다',
        description: '거친 언어를 상황에 맞는 적절한 문체로 변환해 주는 AI 서비스',
        images: ['/og-image.png'],
    },
    // 파비콘
    icons: {
        icon: '/favicon.ico',
    },
    // 로봇 설정
    robots: {
        index: true,
        follow: true,
    },
}

// 뷰포트 설정 (Next.js 14+ 방식)
export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
}

/**
 * 루트 레이아웃 컴포넌트
 * 전체 앱의 공통 레이아웃을 정의합니다.
 */
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko">
            <body className="antialiased min-h-screen bg-background">
                {children}
            </body>
        </html>
    )
}
