'use client'

import { Copy, RefreshCw, Check } from 'lucide-react'
import { useState } from 'react'
import { copyToClipboard } from '@/lib/utils'

interface ResultCardProps {
    result: string
    onRetry: () => void
    isLoading: boolean
}

/**
 * 결과 카드 컴포넌트
 * AI 변환 결과를 표시하고 복사/재시도 기능을 제공합니다.
 */
export default function ResultCard({ result, onRetry, isLoading }: ResultCardProps) {
    const [copied, setCopied] = useState(false)

    // 복사 버튼 클릭 핸들러
    const handleCopy = async () => {
        const success = await copyToClipboard(result)
        if (success) {
            setCopied(true)
            // 2초 후 복사 상태 초기화
            setTimeout(() => setCopied(false), 2000)
        }
    }

    return (
        <div className="animate-slide-up">
            {/* 결과 헤더 */}
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-700">
                    ✨ 변환 결과
                </h3>

                {/* 복사 버튼 */}
                <button
                    onClick={handleCopy}
                    disabled={!result || isLoading}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium
                   text-primary-600 bg-primary-50 rounded-lg
                   hover:bg-primary-100 transition-all duration-200
                   disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {copied ? (
                        <>
                            <Check className="w-4 h-4" />
                            <span>복사됨!</span>
                        </>
                    ) : (
                        <>
                            <Copy className="w-4 h-4" />
                            <span>복사</span>
                        </>
                    )}
                </button>
            </div>

            {/* 결과 텍스트 영역 */}
            <div className="bg-gradient-to-br from-primary-50 to-indigo-50 
                    rounded-xl p-4 border border-primary-100
                    min-h-[100px] relative">
                <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                    {result}
                </p>
            </div>

            {/* 다시 하기 버튼 */}
            <div className="mt-4 flex justify-center">
                <button
                    onClick={onRetry}
                    disabled={isLoading}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium
                   text-gray-600 hover:text-primary-600
                   transition-colors duration-200
                   disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                    <span>다시 변환하기</span>
                </button>
            </div>
        </div>
    )
}
