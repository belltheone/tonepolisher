import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Coffee } from 'lucide-react'

export const metadata: Metadata = {
    title: '후원하기',
    description: '개찰번역기를 후원해 주세요! 여러분의 후원이 서비스 운영에 큰 힘이 됩니다.',
}

/**
 * 후원하기 페이지
 * Buy Me a Coffee 연동
 */
export default function SupportPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
            <Header />

            <main className="flex-1 w-full max-w-4xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
                {/* 페이지 타이틀 */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                        <span role="img" aria-label="coffee">☕</span> 후원하기
                    </h1>
                    <p className="text-gray-500 lg:text-lg">
                        개찰번역기를 응원해 주세요!
                    </p>
                </div>

                {/* 소개 */}
                <div className="card text-center mb-8">
                    <div className="text-6xl mb-4"><span role="img" aria-label="dog">🐕</span></div>
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                        개찰번역기는 무료 서비스입니다
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
                        개찰번역기는 누구나 무료로 사용할 수 있는 서비스입니다.
                        <br />
                        하지만 서비스 운영에는 서버 비용, AI API 비용 등이 발생합니다.
                        <br />
                        여러분의 작은 후원이 서비스를 유지하는 데 큰 힘이 됩니다! 💪
                    </p>

                    {/* Buy Me a Coffee 버튼 */}
                    <div className="flex justify-center">
                        <a
                            href="https://www.buymeacoffee.com/gctranslator"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#FFDD00] text-black px-6 py-3 rounded-xl font-bold 
                       flex items-center gap-3 text-lg
                       hover:bg-[#ffcc00] hover:shadow-lg hover:shadow-yellow-500/30
                       transition-all duration-200 active:scale-[0.98]"
                        >
                            <Coffee className="w-6 h-6" />
                            <span>Buy me a coffee</span>
                        </a>
                    </div>
                </div>

                {/* 후원금 사용처 */}
                <div className="card">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                        <span role="img" aria-label="money">💰</span> 후원금은 이렇게 사용됩니다
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-600">
                            <span className="text-2xl" role="img" aria-label="robot">🤖</span>
                            <span>OpenAI API 비용 (AI 변환 기능)</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                            <span className="text-2xl" role="img" aria-label="computer">🖥️</span>
                            <span>서버 호스팅 비용</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                            <span className="text-2xl" role="img" aria-label="globe">🌐</span>
                            <span>도메인 유지 비용</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                            <span className="text-2xl" role="img" aria-label="sparkles">✨</span>
                            <span>새로운 기능 개발</span>
                        </div>
                    </div>
                </div>

                {/* 감사 메시지 */}
                <div className="mt-8 text-center">
                    <p className="text-gray-500">
                        후원해 주신 모든 분들께 진심으로 감사드립니다! 🙏
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    )
}
