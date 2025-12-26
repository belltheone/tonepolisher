import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ResponsiveAdBanner } from '@/components/AdBanner'
import { Mail, MessageCircle, Clock, HelpCircle } from 'lucide-react'
import Link from 'next/link'

// SEO 메타데이터
export const metadata: Metadata = {
    title: '문의하기',
    description: '개찰번역기 서비스 관련 문의, 제안, 피드백을 보내주세요. 더 나은 서비스를 위해 여러분의 의견을 기다립니다.',
    openGraph: {
        title: '문의하기 | 개찰번역기',
        description: '개찰번역기 서비스 관련 문의, 제안, 피드백을 보내주세요.',
    },
}

/**
 * Contact 페이지
 * 사용자 문의를 위한 연락처 정보를 제공합니다.
 */
export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
            <Header />

            {/* 상단 광고 */}
            <ResponsiveAdBanner slot="contact-header" className="mt-4" />

            <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 lg:py-12">
                {/* 페이지 헤더 */}
                <div className="text-center mb-12">
                    <span className="text-5xl mb-4 block">📬</span>
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        문의하기
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        개찰번역기를 이용해 주셔서 감사합니다!<br />
                        궁금한 점, 제안, 피드백이 있으시면 언제든 연락해 주세요.
                    </p>
                </div>

                {/* 연락 방법 카드 */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {/* 이메일 문의 */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                                <Mail className="w-6 h-6 text-primary-600" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">이메일 문의</h2>
                                <p className="text-sm text-gray-500">가장 빠른 답변을 받으실 수 있어요</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4">
                            서비스 이용 관련 문의, 기능 제안, 버그 신고 등 모든 문의를 환영합니다.
                        </p>
                        <a
                            href="mailto:contact@gctranslator.site"
                            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                        >
                            <Mail className="w-4 h-4" />
                            contact@gctranslator.site
                        </a>
                    </div>

                    {/* 응답 시간 */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                                <Clock className="w-6 h-6 text-amber-600" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">응답 시간</h2>
                                <p className="text-sm text-gray-500">최대한 빠르게 답변드려요</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4">
                            평일 기준 <strong>24시간 이내</strong>에 답변 드리고 있습니다. 주말이나 공휴일에는 답변이 다소 늦어질 수 있습니다.
                        </p>
                        <p className="text-sm text-gray-500">
                            * 운영 시간: 평일 10:00 - 18:00
                        </p>
                    </div>
                </div>

                {/* FAQ 안내 */}
                <div className="bg-gradient-to-r from-primary-50 to-violet-50 rounded-2xl p-6 lg:p-8 mb-12">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                            <HelpCircle className="w-6 h-6 text-primary-600" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl font-bold text-gray-900 mb-2">
                                자주 묻는 질문
                            </h2>
                            <p className="text-gray-600 mb-4">
                                많은 분들이 궁금해하시는 질문들을 모아두었습니다. 문의하시기 전에 먼저 확인해 보세요!
                            </p>
                            <Link
                                href="/faq"
                                className="inline-flex items-center gap-2 bg-white text-primary-600 px-4 py-2 rounded-xl font-medium hover:bg-primary-50 transition-colors shadow-sm"
                            >
                                <MessageCircle className="w-4 h-4" />
                                FAQ 바로가기
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 문의 시 참고사항 */}
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                        📝 문의 시 참고해 주세요
                    </h2>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-3">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>
                                <strong>버그 신고</strong> 시에는 사용하신 브라우저, 기기 종류, 발생 상황을 함께 알려주시면 더 빠른 해결이 가능합니다.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>
                                <strong>기능 제안</strong>은 언제든 환영합니다! 실제로 많은 기능이 사용자분들의 제안으로 추가되었습니다.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>
                                <strong>협업/제휴 문의</strong>도 이메일로 보내주시면 검토 후 답변 드리겠습니다.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>
                                서비스 이용 관련 <strong>개인정보 처리</strong>에 대해서는 <Link href="/privacy" className="text-primary-600 hover:underline">개인정보처리방침</Link>을 참고해 주세요.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* 감사 메시지 */}
                <div className="text-center mt-12 text-gray-500">
                    <p>
                        여러분의 피드백이 개찰번역기를 더 좋은 서비스로 만듭니다. 감사합니다! 🙏
                    </p>
                </div>
            </main>

            {/* 하단 광고 */}
            <ResponsiveAdBanner slot="contact-footer" className="mb-4" />

            <Footer />
        </div>
    )
}
