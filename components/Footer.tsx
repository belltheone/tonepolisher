'use client'

import Link from 'next/link'

/**
 * 푸터 컴포넌트
 * 면책 조항 및 링크를 표시합니다.
 * 웹 퍼스트(Desktop First) 반응형 디자인
 */
export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full px-4 lg:px-8 py-6 lg:py-8 mt-auto bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto">
                {/* 데스크톱: 3단 레이아웃 */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8">
                    {/* 좌측: 로고/브랜드 */}
                    <div className="text-center lg:text-left">
                        <Link href="/" className="text-sm font-semibold text-gray-600 hover:text-primary-600 transition-colors">
                            <span role="img" aria-label="dog">🐕</span> 개찰번역기
                        </Link>
                        <p className="text-xs text-gray-400 mt-0.5">
                            www.gctranslator.site
                        </p>
                    </div>

                    {/* 중앙: 면책 조항 */}
                    <div className="text-center flex-1">
                        <p className="text-xs lg:text-sm text-gray-400 leading-relaxed">
                            본 서비스는 AI(GPT-4o-mini)를 활용한 텍스트 변환 서비스입니다.
                            <br className="hidden lg:block" />
                            <span className="lg:hidden"> </span>
                            AI의 결과에 대해 책임을 지지 않으며, 결과물은 참고용으로만 사용해 주세요.
                        </p>
                    </div>

                    {/* 우측: 링크 */}
                    <div className="text-center lg:text-right">
                        <div className="flex items-center justify-center lg:justify-end gap-3 text-xs lg:text-sm flex-wrap">
                            <Link
                                href="/blog"
                                className="text-gray-400 hover:text-primary-600 transition-colors"
                            >
                                블로그
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link
                                href="/about"
                                className="text-gray-400 hover:text-primary-600 transition-colors"
                            >
                                소개
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link
                                href="/faq"
                                className="text-gray-400 hover:text-primary-600 transition-colors"
                            >
                                FAQ
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link
                                href="/contact"
                                className="text-gray-400 hover:text-primary-600 transition-colors"
                            >
                                문의
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link
                                href="/terms"
                                className="text-gray-400 hover:text-primary-600 transition-colors"
                            >
                                이용약관
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link
                                href="/privacy"
                                className="text-gray-400 hover:text-primary-600 transition-colors"
                            >
                                개인정보
                            </Link>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                            © {currentYear} 개찰번역기. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
