'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ResultCard from '@/components/ResultCard'
import LoadingSpinner from '@/components/LoadingSpinner'
import { ResponsiveAdBanner } from '@/components/AdBanner'
import AdBanner from '@/components/AdBanner'
import { MODE_CONFIG, TranslateMode } from '@/lib/prompts'

/**
 * 결과 페이지 내용 컴포넌트
 */
function ResultContent() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const [results, setResults] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [originalText, setOriginalText] = useState('')
    const [mode, setMode] = useState<TranslateMode>('Professional')

    useEffect(() => {
        const text = searchParams.get('text')
        const modeParam = searchParams.get('mode') as TranslateMode

        if (!text) {
            router.push('/')
            return
        }

        setOriginalText(text)
        if (modeParam && ['Professional', 'Romantic', 'Polite'].includes(modeParam)) {
            setMode(modeParam)
        }

        // API 호출
        const fetchResult = async () => {
            try {
                const response = await fetch('/api/translate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        text: text,
                        mode: modeParam || 'Professional',
                    }),
                })

                const data = await response.json()

                if (!response.ok) {
                    throw new Error(data.error || '변환에 실패했습니다.')
                }

                // 결과 파싱 (1. 2. 3. 형식으로 분리)
                const resultText = data.result as string
                const parsedResults = parseResults(resultText)
                setResults(parsedResults)

            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.'
                setError(errorMessage)
            } finally {
                setIsLoading(false)
            }
        }

        fetchResult()
    }, [searchParams, router])

    // 결과 파싱 함수 (1. 2. 3. 형식)
    const parseResults = (text: string): string[] => {
        // 숫자. 패턴으로 분리
        const lines = text.split(/\n/).filter(line => line.trim())
        const results: string[] = []

        for (const line of lines) {
            // "1." "2." "3." 으로 시작하는 줄 찾기
            const match = line.match(/^(\d+)\.\s*(.+)/)
            if (match) {
                results.push(match[2].trim())
            }
        }

        // 파싱 실패 시 전체 텍스트를 하나의 결과로
        if (results.length === 0) {
            return [text]
        }

        return results.slice(0, 3) // 최대 3개
    }

    // 다시 시도 (페이지 새로고침)
    const handleRetry = () => {
        window.location.reload()
    }

    // 새로 시작
    const handleNewStart = () => {
        router.push('/')
    }

    const modeConfig = MODE_CONFIG[mode]

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
            <Header />

            {/* 상단 광고 배너 */}
            <div className="w-full py-3 bg-white/50 border-b border-gray-100">
                <ResponsiveAdBanner slot="result-header" />
            </div>

            <main className="flex-1 w-full max-w-6xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

                    {/* 좌측 사이드바 광고 */}
                    <aside className="hidden lg:block w-[160px] flex-shrink-0">
                        <div className="sticky top-8">
                            <AdBanner slot="result-sidebar-left" size="skyscraper" />
                        </div>
                    </aside>

                    {/* 중앙 콘텐츠 */}
                    <div className="flex-1 max-w-2xl mx-auto lg:mx-0 w-full">
                        {/* 헤더 */}
                        <div className="text-center mb-8">
                            <p className="text-sm text-gray-500 mb-2">
                                <span className="text-lg">{modeConfig.icon}</span> {modeConfig.label} 모드
                            </p>
                            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
                                변환 결과 <span role="img" aria-label="sparkles">✨</span>
                            </h1>
                        </div>

                        {/* 원본 텍스트 */}
                        <div className="card mb-6 bg-gray-50">
                            <p className="text-xs text-gray-400 mb-2">원본 텍스트</p>
                            <p className="text-gray-600">{originalText}</p>
                        </div>

                        {/* 중간 광고 */}
                        <div className="my-6 flex justify-center">
                            <ResponsiveAdBanner slot="result-middle" />
                        </div>

                        {/* 로딩 */}
                        {isLoading && (
                            <div className="card">
                                <LoadingSpinner />
                            </div>
                        )}

                        {/* 에러 */}
                        {error && !isLoading && (
                            <div className="card text-center">
                                <p className="text-red-500 mb-4">⚠️ {error}</p>
                                <button onClick={handleRetry} className="btn-primary">
                                    다시 시도
                                </button>
                            </div>
                        )}

                        {/* 결과 */}
                        {results.length > 0 && !isLoading && !error && (
                            <div className="card">
                                <ResultCard
                                    results={results}
                                    mode={mode}
                                    onRetry={handleRetry}
                                    isLoading={isLoading}
                                />
                            </div>
                        )}

                        {/* 하단 광고 */}
                        <div className="mt-6 flex justify-center">
                            <ResponsiveAdBanner slot="result-bottom" />
                        </div>

                        {/* 새로 시작 버튼 */}
                        <div className="mt-8 text-center">
                            <button
                                onClick={handleNewStart}
                                className="btn-secondary px-8 py-3"
                            >
                                🏠 처음으로 돌아가기
                            </button>
                        </div>
                    </div>

                    {/* 우측 사이드바 광고 */}
                    <aside className="hidden lg:block w-[160px] flex-shrink-0">
                        <div className="sticky top-8">
                            <AdBanner slot="result-sidebar-right" size="skyscraper" />
                        </div>
                    </aside>
                </div>
            </main>

            {/* 하단 광고 */}
            <div className="w-full py-4 bg-white/50 border-t border-gray-100">
                <ResponsiveAdBanner slot="result-footer" />
            </div>

            <Footer />
        </div>
    )
}

/**
 * 결과 페이지
 * 변환 결과를 표시하며, 페이지 이동으로 광고가 새로 로드됩니다.
 */
export default function ResultPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <LoadingSpinner />
            </div>
        }>
            <ResultContent />
        </Suspense>
    )
}
