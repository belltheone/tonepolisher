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
 * 웹 퍼스트(Desktop First) 반응형 디자인
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
            <div className="flex items-center justify-between mb-3 lg:mb-4">
                <h3 className="text-sm lg:text-base font-semibold text-gray-700">
                    ✨ 변환 결과
                </h3>

                {/* 복사 버튼 */}
                <button
                    onClick={handleCopy}
                    disabled={!result || isLoading}
                    className="flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 
                   text-sm lg:text-base font-medium
                   text-primary-600 bg-primary-50 rounded-lg lg:rounded-xl
                   hover:bg-primary-100 transition-all duration-200
                   disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {copied ? (
                        <>
                            <Check className="w-4 h-4 lg:w-5 lg:h-5" />
                            <span>복사됨!</span>
                        </>
                    ) : (
                        <>
                            <Copy className="w-4 h-4 lg:w-5 lg:h-5" />
                            <span>복사</span>
                        </>
                    )}
                </button>
            </div>

            {/* 결과 텍스트 영역 */}
            <div className="bg-gradient-to-br from-primary-50 to-indigo-50 
                    rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-primary-100
                    min-h-[120px] lg:min-h-[150px] relative">
                <p className="text-gray-800 leading-relaxed lg:leading-loose text-base lg:text-lg whitespace-pre-wrap">
                    {result}
                </p>
            </div>

            {/* 다시 하기 버튼 */}
            <div className="mt-4 lg:mt-5 flex justify-center">
                <button
                    onClick={onRetry}
                    disabled={isLoading}
                    className="flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 
                   text-sm lg:text-base font-medium
                   text-gray-600 hover:text-primary-600
                   transition-colors duration-200
                   disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <RefreshCw className={`w-4 h-4 lg:w-5 lg:h-5 ${isLoading ? 'animate-spin' : ''}`} />
                    <span>다시 변환하기</span>
                </button>
            </div>
        </div>
    )
}
