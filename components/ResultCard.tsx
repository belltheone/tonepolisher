'use client'

import { Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { copyToClipboard, cn } from '@/lib/utils'
import { TranslateMode } from '@/lib/prompts'

interface ResultCardProps {
    results: string[]  // 3가지 결과 배열
    mode: TranslateMode  // 변환 모드
    onRetry: () => void
    isLoading: boolean
}

/**
 * 모드별 스타일 설정
 */
const MODE_STYLES = {
    Professional: {
        bg: 'bg-gradient-to-br from-slate-50 to-blue-50',
        border: 'border-blue-200',
        badge: 'bg-blue-600',
        text: 'text-blue-600',
        copyBg: 'bg-blue-50/80',
        icon: '💼',
        labels: ['📧 정중한 표현', '🤝 협조적 표현', '✍️ 전문적 표현'],
    },
    Romantic: {
        bg: 'bg-gradient-to-br from-pink-50 to-rose-50',
        border: 'border-pink-200',
        badge: 'bg-pink-500',
        text: 'text-pink-600',
        copyBg: 'bg-pink-50/80',
        icon: '💕',
        labels: ['💌 달콤한 표현', '🥰 다정한 표현', '💗 귀여운 표현'],
    },
    Polite: {
        bg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
        border: 'border-emerald-200',
        badge: 'bg-emerald-600',
        text: 'text-emerald-600',
        copyBg: 'bg-emerald-50/80',
        icon: '🕊️',
        labels: ['🙏 공손한 표현', '🌿 부드러운 표현', '☘️ 배려하는 표현'],
    },
} as const

/**
 * 결과 카드 컴포넌트
 * AI 변환 결과 3가지를 모드별 스타일로 표시하고 복사 기능을 제공합니다.
 */
export default function ResultCard({ results, mode, onRetry, isLoading }: ResultCardProps) {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
    const styles = MODE_STYLES[mode]

    // 복사 버튼 클릭 핸들러
    const handleCopy = async (text: string, index: number) => {
        const success = await copyToClipboard(text)
        if (success) {
            setCopiedIndex(index)
            // 2초 후 복사 상태 초기화
            setTimeout(() => setCopiedIndex(null), 2000)
        }
    }

    return (
        <div className="animate-slide-up space-y-4">
            {/* 결과 헤더 */}
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm lg:text-base font-semibold text-gray-700">
                    <span role="img" aria-label="sparkles">✨</span> 변환 결과 (3가지)
                </h3>
            </div>

            {/* 3가지 결과 표시 - 모드별 스타일 */}
            {results.map((result, index) => (
                <div
                    key={index}
                    className={cn(
                        styles.bg,
                        styles.border,
                        'rounded-xl lg:rounded-2xl p-4 lg:p-5 border',
                        'relative group hover:shadow-md transition-all duration-300'
                    )}
                >
                    {/* 결과 번호 배지 */}
                    <div className={cn(
                        'absolute -top-2 -left-2 w-7 h-7 rounded-full',
                        'flex items-center justify-center text-white text-sm font-bold shadow-md',
                        styles.badge
                    )}>
                        {index + 1}
                    </div>

                    {/* 스타일 라벨 */}
                    <div className={cn('text-xs font-medium mb-2', styles.text)}>
                        {styles.labels[index] || `결과 ${index + 1}`}
                    </div>

                    {/* 복사 버튼 */}
                    <button
                        onClick={() => handleCopy(result, index)}
                        disabled={isLoading}
                        className={cn(
                            'absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5',
                            'text-xs lg:text-sm font-medium rounded-lg',
                            'hover:bg-white transition-all duration-200 shadow-sm',
                            'disabled:opacity-50 disabled:cursor-not-allowed',
                            'opacity-0 group-hover:opacity-100',
                            styles.text,
                            styles.copyBg
                        )}
                    >
                        {copiedIndex === index ? (
                            <>
                                <Check className="w-3.5 h-3.5" />
                                <span>복사됨!</span>
                            </>
                        ) : (
                            <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>복사</span>
                            </>
                        )}
                    </button>

                    {/* 결과 텍스트 */}
                    <p className="text-gray-800 leading-relaxed lg:leading-loose text-base lg:text-lg whitespace-pre-wrap pr-16">
                        {result}
                    </p>
                </div>
            ))}

            {/* 다시 하기 버튼 */}
            <div className="mt-6 flex justify-center">
                <button
                    onClick={onRetry}
                    disabled={isLoading}
                    className="btn-primary flex items-center gap-2 px-6 py-3"
                >
                    <span role="img" aria-label="retry">🔄</span>
                    <span>다시 변환하기</span>
                </button>
            </div>
        </div>
    )
}
