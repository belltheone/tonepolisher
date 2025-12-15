'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

// Google AdSense Publisher ID
const ADSENSE_CLIENT = 'ca-pub-5965391983551048'

interface AdBannerProps {
    slot: string // 광고 슬롯 ID
    size?: 'banner' | 'rectangle' | 'leaderboard' | 'skyscraper'
    className?: string
}

/**
 * 광고 크기 매핑
 * Google AdSense 표준 광고 크기
 */
const AD_SIZES = {
    banner: { width: 468, height: 60 },           // 배너 (468x60)
    rectangle: { width: 300, height: 250 },       // 중형 직사각형 (300x250)
    leaderboard: { width: 728, height: 90 },      // 리더보드 (728x90)
    skyscraper: { width: 160, height: 600 },      // 와이드 스카이스크래퍼 (160x600)
} as const

/**
 * 광고 배너 컴포넌트
 * Google AdSense 광고를 표시합니다.
 */
export default function AdBanner({ slot, size = 'leaderboard', className }: AdBannerProps) {
    const adRef = useRef<HTMLModElement>(null)
    const dimensions = AD_SIZES[size]

    useEffect(() => {
        // AdSense 스크립트가 로드된 후 광고 초기화
        try {
            if (typeof window !== 'undefined' && adRef.current) {
                // @ts-expect-error - adsbygoogle는 글로벌 객체
                (window.adsbygoogle = window.adsbygoogle || []).push({})
            }
        } catch (error) {
            console.error('AdSense 초기화 오류:', error)
        }
    }, [])

    return (
        <div
            className={cn(
                'flex items-center justify-center overflow-hidden',
                className
            )}
            style={{
                width: '100%',
                maxWidth: dimensions.width,
                minHeight: dimensions.height,
            }}
        >
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={{
                    display: 'block',
                    width: dimensions.width,
                    height: dimensions.height,
                }}
                data-ad-client={ADSENSE_CLIENT}
                data-ad-slot={slot}
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </div>
    )
}

/**
 * 반응형 광고 배너 컴포넌트
 * 화면 크기에 따라 다른 광고 크기를 표시합니다.
 */
export function ResponsiveAdBanner({ slot, className }: { slot: string; className?: string }) {
    const adRef = useRef<HTMLModElement>(null)

    useEffect(() => {
        // AdSense 스크립트가 로드된 후 광고 초기화
        try {
            if (typeof window !== 'undefined' && adRef.current) {
                // @ts-expect-error - adsbygoogle는 글로벌 객체
                (window.adsbygoogle = window.adsbygoogle || []).push({})
            }
        } catch (error) {
            console.error('AdSense 초기화 오류:', error)
        }
    }, [])

    return (
        <div className={cn('w-full flex justify-center', className)}>
            <ins
                ref={adRef}
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client={ADSENSE_CLIENT}
                data-ad-slot={slot}
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </div>
    )
}
