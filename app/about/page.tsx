import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ResponsiveAdBanner } from '@/components/AdBanner'
import { Dog, Target, Heart, Zap, ArrowRight, Code, Coffee, Mail } from 'lucide-react'

export const metadata: Metadata = {
    title: '서비스 소개',
    description: '개찰번역기는 개떡같이 말해도 찰떡같이 바꿔주는 AI 텍스트 변환 서비스입니다. 서비스 소개와 만든 이유, 비전을 확인하세요.',
}

/**
 * About 페이지
 * 서비스 소개, 만든 이유, 비전을 설명합니다.
 */
export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
            <Header />

            {/* 상단 광고 */}
            <div className="w-full py-3 bg-white/50 border-b border-gray-100">
                <ResponsiveAdBanner slot="about-header" />
            </div>

            <main className="flex-1 w-full max-w-4xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
                {/* 페이지 타이틀 */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                        <span role="img" aria-label="dog">🐕</span> 개찰번역기 소개
                    </h1>
                    <p className="text-gray-500 lg:text-lg">
                        개떡같이 말해도 찰떡같이 바꿔드립니다
                    </p>
                </div>

                {/* 서비스 소개 */}
                <section className="card mb-8">
                    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                        {/* 아이콘 */}
                        <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center shadow-xl shadow-primary-500/30 flex-shrink-0">
                            <Dog className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
                        </div>

                        {/* 설명 */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                개찰번역기란?
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                <strong>개찰번역기</strong>는 &quot;개떡같이 말해도 찰떡같이 알아듣는다&quot;는 한국 속담에서 영감을 받아 만들어진
                                AI 텍스트 변환 서비스입니다.
                                직설적이거나 거친 표현을 상황에 맞게 정중하고 부드러운 표현으로 바꿔드립니다.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 서비스 특징 */}
                <section className="mb-8">
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6 text-center">
                        <span role="img" aria-label="sparkles">✨</span> 서비스 특징
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="card text-center">
                            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">빠른 변환</h3>
                            <p className="text-sm text-gray-500">
                                GPT-4o-mini 기반으로 몇 초 안에 자연스러운 문장으로 변환됩니다.
                            </p>
                        </div>

                        <div className="card text-center">
                            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Target className="w-7 h-7 text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">3가지 모드</h3>
                            <p className="text-sm text-gray-500">
                                사회생활, 연애, 예절 모드로 상황에 맞는 변환을 제공합니다.
                            </p>
                        </div>

                        <div className="card text-center">
                            <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-7 h-7 text-pink-600" />
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">무료 사용</h3>
                            <p className="text-sm text-gray-500">
                                회원가입 없이 누구나 무료로 사용할 수 있습니다.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 만든 이유 */}
                <section className="card mb-8 bg-gradient-to-br from-primary-50 to-indigo-50 border border-primary-100">
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                        <span role="img" aria-label="lightbulb">💡</span> 왜 만들었나요?
                    </h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                            직장에서, 연인에게, 친구에게 할 말이 있지만 어떻게 표현해야 할지 막막했던 적 있으시죠?
                        </p>
                        <p>
                            &quot;아 진짜 짜증나, 다시 해와&quot;라고 말하고 싶지만, 그대로 보내기엔...
                            관계가 걱정되고, 그렇다고 참자니 속이 부글부글.
                        </p>
                        <p>
                            <strong>개찰번역기</strong>는 이런 고민을 해결하기 위해 탄생했습니다.
                            당신의 속마음은 그대로 전달하되, 표현만 부드럽게 바꿔드립니다.
                        </p>
                        <p className="font-medium text-primary-700">
                            상대방도 기분 나쁘지 않고, 나도 할 말 다 하는 ✨윈윈✨ 소통!
                        </p>
                    </div>
                </section>

                {/* 개발자 소개 */}
                <section className="card mb-8">
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                        <span role="img" aria-label="developer">👨‍💻</span> 만든 사람
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <Code className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800">1인 개발자</h3>
                            <p className="text-sm text-gray-500 mt-1">
                                더 나은 소통을 위한 도구를 만드는 것을 좋아합니다.
                                <br />
                                피드백과 제안은 언제나 환영합니다!
                            </p>
                        </div>
                    </div>
                </section>

                {/* 비전 */}
                <section className="card mb-8">
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                        <span role="img" aria-label="rocket">🚀</span> 우리의 비전
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        개찰번역기는 단순한 텍스트 변환 도구를 넘어,
                        <strong> 사람들 사이의 소통을 더 원활하게 만드는 것</strong>을 목표로 합니다.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>오해를 줄이고 진심을 전달하는 소통</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>관계를 해치지 않으면서 자기 표현하기</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>AI를 활용한 더 나은 커뮤니케이션 문화</span>
                        </li>
                    </ul>
                </section>

                {/* 연락처 */}
                <section className="card text-center">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                        <span role="img" aria-label="mail">📬</span> 연락처
                    </h2>
                    <p className="text-gray-500 mb-4">
                        문의, 피드백, 제안은 언제든 환영합니다!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:contact@gctranslator.site"
                            className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            <span>contact@gctranslator.site</span>
                        </a>
                        <Link
                            href="/support"
                            className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700 transition-colors"
                        >
                            <Coffee className="w-5 h-5" />
                            <span>후원하기</span>
                        </Link>
                    </div>
                </section>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <Link
                        href="/"
                        className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
                    >
                        <span role="img" aria-label="sparkles">✨</span>
                        <span>지금 바로 사용해보기</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </main>

            {/* 하단 광고 */}
            <div className="w-full py-4 bg-white/50 border-t border-gray-100">
                <ResponsiveAdBanner slot="about-footer" />
            </div>

            <Footer />
        </div>
    )
}
