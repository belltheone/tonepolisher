'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ModeSelector from '@/components/ModeSelector'
import Toast from '@/components/Toast'
import AdBanner, { ResponsiveAdBanner } from '@/components/AdBanner'
import { TranslateMode, MODE_CONFIG } from '@/lib/prompts'
import { cn, saveToLocalStorage, getFromLocalStorage, countCharacters } from '@/lib/utils'
import { Sparkles } from 'lucide-react'

// 최대 글자 수 제한
const MAX_CHARACTERS = 500
const STORAGE_KEY_MODE = 'tonepolisher_mode'

/**
 * 메인 페이지 컴포넌트
 * 개찰번역기의 핵심 UI를 담당합니다.
 * 변환 버튼 클릭 시 결과 페이지로 이동하여 광고 새로고침
 */
export default function HomePage() {
    const router = useRouter()

    // 상태 관리
    const [inputText, setInputText] = useState('')
    const [selectedMode, setSelectedMode] = useState<TranslateMode>('Professional')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const [toastType, setToastType] = useState<'success' | 'error' | 'info'>('success')

    // 글자 수 계산
    const charCount = countCharacters(inputText)
    const isOverLimit = charCount > MAX_CHARACTERS
    const canSubmit = charCount >= 1 && !isOverLimit && !isSubmitting

    // 로컬 스토리지에서 마지막 선택 모드 불러오기
    useEffect(() => {
        const savedMode = getFromLocalStorage(STORAGE_KEY_MODE, 'Professional') as TranslateMode
        if (['Professional', 'Romantic', 'Polite'].includes(savedMode)) {
            setSelectedMode(savedMode)
        }
    }, [])

    // 모드 변경 핸들러
    const handleModeChange = (mode: TranslateMode) => {
        setSelectedMode(mode)
        saveToLocalStorage(STORAGE_KEY_MODE, mode)
    }

    // 입력 텍스트 변경 핸들러
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.target.value)
    }

    // 변환 요청 핸들러 - 결과 페이지로 이동
    const handleTranslate = () => {
        if (!canSubmit) return

        setIsSubmitting(true)

        // 결과 페이지로 이동 (광고 새로고침)
        const params = new URLSearchParams({
            text: inputText,
            mode: selectedMode,
        })

        router.push(`/result?${params.toString()}`)
    }

    // 현재 선택된 모드 정보
    const currentModeConfig = MODE_CONFIG[selectedMode]

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
            {/* 헤더 */}
            <Header />

            {/* 상단 광고 배너 (헤더 아래) */}
            <div className="w-full py-3 bg-white/50 border-b border-gray-100">
                <ResponsiveAdBanner slot="header-banner" />
            </div>

            {/* 메인 컨텐츠 - 웹 퍼스트 레이아웃 */}
            <main className="flex-1 w-full max-w-6xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
                {/* 데스크톱: 3단 레이아웃 (좌측 광고 + 중앙 콘텐츠 + 우측 광고) */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

                    {/* 좌측 사이드바 광고 (데스크톱만) */}
                    <aside className="hidden lg:block w-[160px] flex-shrink-0">
                        <div className="sticky top-8">
                            <AdBanner slot="sidebar-left" size="skyscraper" />
                        </div>
                    </aside>

                    {/* 중앙 메인 콘텐츠 */}
                    <div className="flex-1 max-w-2xl mx-auto lg:mx-0 w-full">
                        {/* Hero Section */}
                        <section className="text-center mb-8 lg:mb-10">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                                당신의 속마음,
                                <br className="sm:hidden" />
                                <span className="gradient-text"> 들키지 않게 포장해 드립니다</span>
                            </h2>
                            <p className="text-gray-500 text-sm lg:text-base">
                                개떡같이 말해도 찰떡같이 바꿔드려요 <span role="img" aria-label="sparkles">✨</span>
                            </p>
                        </section>

                        {/* Input Card */}
                        <div className="card mb-6">
                            {/* 모드 선택 */}
                            <div className="mb-5">
                                <ModeSelector
                                    selectedMode={selectedMode}
                                    onModeChange={handleModeChange}
                                />
                                {/* 모드 설명 */}
                                <p className="text-xs lg:text-sm text-gray-400 mt-2 text-center">
                                    <span className="text-base">{currentModeConfig.icon}</span> {currentModeConfig.description}
                                </p>
                            </div>

                            {/* 텍스트 입력 영역 */}
                            <div className="relative">
                                <textarea
                                    value={inputText}
                                    onChange={handleInputChange}
                                    placeholder="아 진짜 짜증 나네 다시 해와"
                                    className={cn(
                                        'input-textarea min-h-[160px] lg:min-h-[200px] text-base lg:text-lg',
                                        isOverLimit && 'border-red-400 focus:border-red-400 focus:ring-red-400/20'
                                    )}
                                    disabled={isSubmitting}
                                />

                                {/* 글자 수 표시 */}
                                <div className="absolute bottom-3 right-3">
                                    <span
                                        className={cn(
                                            'text-xs lg:text-sm font-medium',
                                            isOverLimit ? 'text-red-500' : 'text-gray-400'
                                        )}
                                    >
                                        {charCount}/{MAX_CHARACTERS}
                                    </span>
                                </div>
                            </div>

                            {/* 변환 버튼 */}
                            <button
                                onClick={handleTranslate}
                                disabled={!canSubmit}
                                className="btn-primary w-full mt-5 flex items-center justify-center gap-2 text-base lg:text-lg py-4"
                            >
                                <Sparkles className="w-5 h-5 lg:w-6 lg:h-6" />
                                <span>찰떡으로 변환하기</span>
                            </button>
                        </div>

                        {/* 중간 광고 배너 */}
                        <div className="my-6 flex justify-center">
                            <ResponsiveAdBanner slot="content-middle" />
                        </div>

                        {/* 사용 안내 */}
                        <div className="card bg-gradient-to-br from-primary-50 to-indigo-50 border border-primary-100">
                            <h3 className="font-bold text-gray-800 mb-3">💡 이렇게 사용하세요</h3>
                            <ol className="space-y-2 text-gray-600 text-sm">
                                <li className="flex gap-2">
                                    <span className="font-bold text-primary-600">1.</span>
                                    <span>상황에 맞는 모드를 선택하세요 (<span role="img" aria-label="briefcase">💼</span>사회생활 / <span role="img" aria-label="heart">💕</span>연애 / <span role="img" aria-label="dove">🕊️</span>예절)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-bold text-primary-600">2.</span>
                                    <span>변환하고 싶은 문장을 입력하세요</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-bold text-primary-600">3.</span>
                                    <span>&quot;찰떡으로 변환하기&quot; 버튼을 누르면 3가지 버전의 결과가 나와요!</span>
                                </li>
                            </ol>
                        </div>
                    </div>

                    {/* 우측 사이드바 광고 (데스크톱만) */}
                    <aside className="hidden lg:block w-[160px] flex-shrink-0">
                        <div className="sticky top-8">
                            <AdBanner slot="sidebar-right" size="skyscraper" />
                        </div>
                    </aside>
                </div>
            </main>

            {/* 하단 광고 배너 (푸터 위) */}
            <div className="w-full py-4 bg-white/50 border-t border-gray-100">
                <ResponsiveAdBanner slot="footer-banner" />
            </div>

            {/* 푸터 */}
            <Footer />

            {/* 토스트 알림 */}
            <Toast
                message={toastMessage}
                show={showToast}
                onClose={() => setShowToast(false)}
                type={toastType}
            />
        </div>
    )
}
