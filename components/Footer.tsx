'use client'

/**
 * 푸터 컴포넌트
 * 면책 조항 및 연락처 정보를 표시합니다.
 */
export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full px-4 py-6 mt-auto">
            <div className="max-w-md mx-auto text-center space-y-3">
                {/* 면책 조항 */}
                <p className="text-xs text-gray-400 leading-relaxed">
                    본 서비스는 AI(GPT-4o-mini)를 활용한 텍스트 변환 서비스입니다.
                    <br />
                    AI의 결과에 대해 책임을 지지 않으며, 결과물은 참고용으로만 사용해 주세요.
                </p>

                {/* 저작권 */}
                <p className="text-xs text-gray-400">
                    © {currentYear} 개찰번역기. All rights reserved.
                </p>

                {/* 문의 링크 */}
                <div className="flex items-center justify-center gap-4 text-xs">
                    <a
                        href="mailto:contact@example.com"
                        className="text-gray-400 hover:text-primary-600 transition-colors"
                    >
                        Contact
                    </a>
                    <span className="text-gray-300">|</span>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-primary-600 transition-colors"
                    >
                        이용약관
                    </a>
                </div>
            </div>
        </footer>
    )
}
