'use client'

import { Dog, Share2, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Toast from './Toast'

/**
 * 헤더 컴포넌트
 * 로고와 네비게이션, 공유하기 버튼을 포함합니다.
 * 웹 퍼스트(Desktop First) 반응형 디자인
 */
export default function Header() {
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // 공유하기 기능
    const handleShare = async () => {
        const shareData = {
            title: '개찰번역기',
            text: '개떡같이 말해도 찰떡같이 바꿔드립니다!',
            url: window.location.href,
        }

        try {
            // Web Share API 지원 여부 확인
            if (navigator.share) {
                await navigator.share(shareData)
            } else {
                // 지원하지 않으면 링크 복사
                await navigator.clipboard.writeText(window.location.href)
                setToastMessage('링크가 복사되었습니다!')
                setShowToast(true)
            }
        } catch (error) {
            // 사용자가 공유를 취소한 경우는 에러가 아님
            if ((error as Error).name !== 'AbortError') {
                console.error('공유 실패:', error)
            }
        }
    }

    return (
        <>
            <header className="w-full px-4 lg:px-8 py-4 lg:py-5 flex items-center justify-between bg-white/80 backdrop-blur-sm border-b border-gray-100">
                {/* 로고 영역 */}
                <Link href="/" className="flex items-center gap-3 lg:gap-4">
                    {/* 강아지 아이콘 */}
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/30">
                        <Dog className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                    </div>
                    {/* 서비스명 */}
                    <div>
                        <h1 className="text-lg lg:text-xl font-bold text-gray-800">
                            개찰번역기
                        </h1>
                        <p className="text-xs lg:text-sm text-gray-500 -mt-0.5">
                            Gae-Chal Translator
                        </p>
                    </div>
                </Link>

                {/* 우측 메뉴 */}
                <div className="flex items-center gap-3 lg:gap-4">
                    {/* 데스크톱 네비게이션 */}
                    <nav className="hidden lg:flex items-center gap-6 mr-4">
                        <Link
                            href="/how-to-use"
                            className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                        >
                            사용법
                        </Link>
                        <Link
                            href="/support"
                            className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                        >
                            후원하기 <span role="img" aria-label="coffee">☕</span>
                        </Link>
                    </nav>

                    {/* 공유하기 버튼 */}
                    <button
                        onClick={handleShare}
                        className="p-2.5 lg:p-3 rounded-xl bg-white border border-gray-200 
                     hover:bg-gray-50 hover:border-gray-300 
                     transition-all duration-200 active:scale-95"
                        aria-label="공유하기"
                    >
                        <Share2 className="w-5 h-5 lg:w-5 lg:h-5 text-gray-600" />
                    </button>

                    {/* 모바일 메뉴 버튼 */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2.5 rounded-xl bg-white border border-gray-200 
                     hover:bg-gray-50 hover:border-gray-300 
                     transition-all duration-200"
                        aria-label="메뉴"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-5 h-5 text-gray-600" />
                        ) : (
                            <Menu className="w-5 h-5 text-gray-600" />
                        )}
                    </button>
                </div>
            </header>

            {/* 모바일 메뉴 드롭다운 */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-b border-gray-100 animate-slide-up">
                    <nav className="px-4 py-4 space-y-2">
                        <Link
                            href="/how-to-use"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                        >
                            <span role="img" aria-label="book">📖</span> 사용법
                        </Link>
                        <Link
                            href="/support"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                        >
                            <span role="img" aria-label="coffee">☕</span> 후원하기
                        </Link>
                        <Link
                            href="/terms"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                        >
                            <span role="img" aria-label="clipboard">📋</span> 이용약관
                        </Link>
                        <Link
                            href="/privacy"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                        >
                            <span role="img" aria-label="lock">🔒</span> 개인정보처리방침
                        </Link>
                    </nav>
                </div>
            )}

            {/* 토스트 알림 */}
            <Toast
                message={toastMessage}
                show={showToast}
                onClose={() => setShowToast(false)}
            />
        </>
    )
}
