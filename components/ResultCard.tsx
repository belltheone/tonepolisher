'use client'

import { Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { copyToClipboard } from '@/lib/utils'

interface ResultCardProps {
    results: string[]  // 3가지 결과 배열
    onRetry: () => void
    isLoading: boolean
}

/**
 * 결과 카드 컴포넌트
 * AI 변환 결과 3가지를 표시하고 복사 기능을 제공합니다.
 */
export default function ResultCard({ results, onRetry, isLoading }: ResultCardProps) {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

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
                    ✨ 변환 결과 (3가지)
                </h3>
            </div>

            {/* 3가지 결과 표시 */}
            {results.map((result, index) => (
                <div
                    key={index}
                    className="bg-gradient-to-br from-primary-50 to-indigo-50 
                    rounded-xl lg:rounded-2xl p-4 lg:p-5 border border-primary-100
                    relative group hover:shadow-md transition-shadow"
                >
                    {/* 결과 번호 배지 */}
                    <div className="absolute -top-2 -left-2 w-7 h-7 bg-primary-600 rounded-full 
                        flex items-center justify-center text-white text-sm font-bold shadow-md">
                        {index + 1}
                    </div>

                    {/* 복사 버튼 */}
                    <button
                        onClick={() => handleCopy(result, index)}
                        disabled={isLoading}
                        className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 
                     text-xs lg:text-sm font-medium
                     text-primary-600 bg-white/80 backdrop-blur-sm rounded-lg
                     hover:bg-white transition-all duration-200 shadow-sm
                     disabled:opacity-50 disabled:cursor-not-allowed
                     opacity-0 group-hover:opacity-100"
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
                    <span>🔄</span>
                    <span>다시 변환하기</span>
                </button>
            </div>
        </div>
    )
}
