import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ResponsiveAdBanner } from '@/components/AdBanner'

export const metadata: Metadata = {
    title: '사용법',
    description: '개찰번역기 사용 방법을 알아보세요. 3가지 모드로 당신의 메시지를 완벽하게 변환해 드립니다.',
}

/**
 * 사용법 페이지
 * 서비스 이용 방법을 상세히 설명합니다.
 */
export default function HowToUsePage() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
            <Header />

            {/* 상단 광고 */}
            <div className="w-full py-3 bg-white/50 border-b border-gray-100">
                <ResponsiveAdBanner slot="how-to-header" />
            </div>

            <main className="flex-1 w-full max-w-4xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
                {/* 페이지 타이틀 */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                        📖 사용법
                    </h1>
                    <p className="text-gray-500 lg:text-lg">
                        개찰번역기를 200% 활용하는 방법
                    </p>
                </div>

                {/* 사용 단계 */}
                <div className="space-y-8">
                    {/* Step 1 */}
                    <section className="card">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl font-bold text-primary-600">1</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-800 mb-2">
                                    모드 선택하기
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    상황에 맞는 변환 모드를 선택하세요:
                                </p>
                                <ul className="mt-3 space-y-2 text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="text-xl">💼</span>
                                        <span><strong>사회생활</strong> - 비즈니스 메일, 상사에게 보고, 공식적인 요청</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-xl">💕</span>
                                        <span><strong>연애</strong> - 카톡 메시지, 썸 상대에게, 다정한 표현</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-xl">🕊️</span>
                                        <span><strong>예절</strong> - 정중한 거절, 조심스러운 부탁, 사과</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Step 2 */}
                    <section className="card">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl font-bold text-primary-600">2</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-800 mb-2">
                                    텍스트 입력하기
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    변환하고 싶은 문장을 입력하세요. 거칠거나 직설적인 표현도 OK!
                                    <br />
                                    최대 500자까지 입력할 수 있습니다.
                                </p>
                                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                                    <p className="text-sm text-gray-500 mb-1">예시 입력:</p>
                                    <p className="text-gray-700">&quot;아 진짜 짜증나 다시 해와&quot;</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Step 3 */}
                    <section className="card">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl font-bold text-primary-600">3</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-800 mb-2">
                                    변환 결과 확인하기
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    AI가 선택한 모드에 맞게 문장을 다듬어 드립니다.
                                    <br />
                                    결과가 마음에 들지 않으면 &quot;다시 변환하기&quot;를 눌러보세요!
                                </p>
                                <div className="mt-4 p-4 bg-primary-50 rounded-lg border border-primary-100">
                                    <p className="text-sm text-primary-600 mb-1">💼 사회생활 모드 결과:</p>
                                    <p className="text-gray-700">&quot;죄송합니다만, 해당 부분을 다시 검토해 주시면 감사하겠습니다.&quot;</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Step 4 */}
                    <section className="card">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl font-bold text-primary-600">4</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-800 mb-2">
                                    복사해서 사용하기
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    &quot;복사&quot; 버튼을 클릭하면 결과가 클립보드에 복사됩니다.
                                    <br />
                                    바로 카톡, 메일, 메시지에 붙여넣기 하세요!
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <a
                        href="/"
                        className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
                    >
                        <span>✨</span>
                        <span>지금 바로 사용해보기</span>
                    </a>
                </div>
            </main>

            {/* 하단 광고 */}
            <div className="w-full py-4 bg-white/50 border-t border-gray-100">
                <ResponsiveAdBanner slot="how-to-footer" />
            </div>

            <Footer />
        </div>
    )
}
