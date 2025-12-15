'use client'

import { cn } from '@/lib/utils'

interface AdBannerProps {
    slot: string // 광고 슬롯 ID (예: "header", "footer", "sidebar")
    size?: 'banner' | 'rectangle' | 'leaderboard' | 'skyscraper'
    className?: string
}

/**
 * 광고 크기 매핑
 * Google AdSense 표준 광고 크기를 사용합니다.
 */
const AD_SIZES = {
    banner: { width: 468, height: 60 },           // 배너 (468x60)
    rectangle: { width: 300, height: 250 },       // 중형 직사각형 (300x250)
    leaderboard: { width: 728, height: 90 },      // 리더보드 (728x90)
    skyscraper: { width: 160, height: 600 },      // 와이드 스카이스크래퍼 (160x600)
} as const

/**
 * 광고 배너 컴포넌트
 * Google AdSense 또는 다른 광고 네트워크를 위한 플레이스홀더입니다.
 * 실제 배포 시 AdSense 스크립트로 교체해야 합니다.
 */
export default function AdBanner({ slot, size = 'leaderboard', className }: AdBannerProps) {
    const dimensions = AD_SIZES[size]

    return (
        <div
            className={cn(
                'flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200',
                'border border-gray-300 border-dashed rounded-lg overflow-hidden',
                'transition-all duration-200 hover:border-gray-400',
                className
            )}
            style={{
                width: '100%',
                maxWidth: dimensions.width,
                height: dimensions.height,
            }}
            data-ad-slot={slot}
        >
            {/* 광고 플레이스홀더 - 실제 배포 시 AdSense 코드로 교체 */}
            <div className="text-center p-4">
                <p className="text-gray-400 text-sm font-medium">
                    📢 광고 영역
                </p>
                <p className="text-gray-300 text-xs mt-1">
                    {size} ({dimensions.width}x{dimensions.height})
                </p>
                {/* 
          실제 AdSense 코드 예시:
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-pub-XXXXXXXX"
               data-ad-slot={slot}
               data-ad-format="auto"
               data-full-width-responsive="true" />
        */}
            </div>
        </div>
    )
}

/**
 * 반응형 광고 배너 컴포넌트
 * 화면 크기에 따라 다른 광고 크기를 표시합니다.
 */
export function ResponsiveAdBanner({ slot, className }: { slot: string; className?: string }) {
    return (
        <div className={cn('w-full flex justify-center', className)}>
            {/* 모바일: 배너 */}
            <div className="block md:hidden w-full max-w-[320px]">
                <AdBanner slot={`${slot}-mobile`} size="banner" className="mx-auto" />
            </div>
            {/* 태블릿: 중형 직사각형 */}
            <div className="hidden md:block lg:hidden">
                <AdBanner slot={`${slot}-tablet`} size="banner" />
            </div>
            {/* 데스크톱: 리더보드 */}
            <div className="hidden lg:block">
                <AdBanner slot={`${slot}-desktop`} size="leaderboard" />
            </div>
        </div>
    )
}
