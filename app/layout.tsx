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
    // JSON-LD 구조화 데이터 (WebApplication)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: '개찰번역기',
        alternateName: 'Gae-Chal Translator',
        description: '거친 언어를 상황에 맞는 적절한 문체로 변환해 주는 AI 서비스. 비즈니스 메일, 연애/썸 메시지, 정중한 거절까지!',
        url: 'https://www.gctranslator.site',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web Browser',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'KRW',
        },
        author: {
            '@type': 'Person',
            name: '개찰번역기 개발자',
        },
        inLanguage: 'ko',
        isAccessibleForFree: true,
    }

    // Organization JSON-LD
    const organizationJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '개찰번역기',
        url: 'https://www.gctranslator.site',
        logo: 'https://www.gctranslator.site/og-image.png',
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'contact@gctranslator.site',
            contactType: 'customer support',
            availableLanguage: 'Korean',
        },
        sameAs: [],
    }

    return (
        <html lang="ko">
            <head>
                {/* Google AdSense */}
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5965391983551048"
                    crossOrigin="anonymous"
                />

                {/* Google Analytics (GA4) */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-XXXXXXXXXX');
                        `,
                    }}
                />

                {/* JSON-LD 구조화 데이터 */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />
            </head>
            <body className="antialiased min-h-screen bg-background">
                {children}
            </body>
        </html>
    )
}
