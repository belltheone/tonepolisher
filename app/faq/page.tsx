'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ResponsiveAdBanner } from '@/components/AdBanner'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// FAQ 데이터 타입
interface FAQItem {
    question: string
    answer: string
    category: string
}

// FAQ 데이터
const faqData: FAQItem[] = [
    // 서비스 이용
    {
        category: '서비스 이용',
        question: '개찰번역기는 무료인가요?',
        answer: '네, 개찰번역기는 완전 무료입니다! 회원가입 없이 누구나 바로 사용할 수 있습니다. 서비스 운영 비용은 광고와 후원으로 충당하고 있습니다.'
    },
    {
        category: '서비스 이용',
        question: '하루에 몇 번까지 사용할 수 있나요?',
        answer: '현재는 별도의 사용 횟수 제한이 없습니다. 다만, 서버 부하 상황에 따라 일시적으로 제한이 생길 수 있습니다. 정상적인 사용에서는 문제없이 이용하실 수 있습니다.'
    },
    {
        category: '서비스 이용',
        question: '모바일에서도 사용할 수 있나요?',
        answer: '물론입니다! 개찰번역기는 반응형 웹으로 제작되어 PC, 태블릿, 스마트폰 등 모든 기기에서 편리하게 사용할 수 있습니다.'
    },
    {
        category: '서비스 이용',
        question: '앱으로도 출시되나요?',
        answer: '현재는 웹 서비스로만 제공되고 있습니다. 추후 사용자 요청이 많으면 앱 출시도 고려하고 있습니다. 지금은 모바일 브라우저에서 홈 화면에 추가하여 앱처럼 사용하실 수 있습니다.'
    },

    // 변환 기능
    {
        category: '변환 기능',
        question: '3가지 모드의 차이가 뭔가요?',
        answer: '💼 사회생활 모드: 비즈니스 이메일, 상사에게 보고, 공식적인 요청에 적합한 격식 있는 문체로 변환합니다.\n💕 연애 모드: 카톡 메시지, 썸 상대에게 보내는 다정하고 부드러운 문체로 변환합니다.\n🕊️ 예절 모드: 정중한 거절, 조심스러운 부탁, 사과에 적합한 공손한 문체로 변환합니다.'
    },
    {
        category: '변환 기능',
        question: '변환 결과가 마음에 들지 않으면 어떻게 하나요?',
        answer: '"다시 변환하기" 버튼을 누르면 같은 입력으로 다른 결과를 받을 수 있습니다. AI는 매번 조금씩 다른 표현을 생성하므로, 여러 번 시도하여 가장 마음에 드는 결과를 선택하세요!'
    },
    {
        category: '변환 기능',
        question: '최대 몇 글자까지 입력할 수 있나요?',
        answer: '한 번에 최대 500자까지 입력할 수 있습니다. 긴 문장은 나눠서 변환하시면 더 좋은 결과를 얻을 수 있습니다.'
    },
    {
        category: '변환 기능',
        question: '영어도 변환되나요?',
        answer: '개찰번역기는 한국어에 최적화되어 있습니다. 영어 입력 시에도 변환은 되지만, 한국어만큼 자연스러운 결과를 보장하기 어렵습니다. 한국어 문장 변환에 사용해 주세요!'
    },

    // 개인정보 / 보안
    {
        category: '개인정보',
        question: '입력한 내용이 저장되나요?',
        answer: '아니요, 개찰번역기는 Stateless(무상태) 구조로 운영됩니다. 입력한 텍스트와 변환 결과는 서버에 저장되지 않으며, 별도의 데이터베이스도 운영하지 않습니다.'
    },
    {
        category: '개인정보',
        question: '입력 내용을 AI 학습에 사용하나요?',
        answer: '개찰번역기는 OpenAI API를 사용하며, API를 통해 전송된 데이터는 OpenAI의 정책에 따라 모델 학습에 사용되지 않습니다. 자세한 내용은 OpenAI 개인정보처리방침을 참고해 주세요.'
    },
    {
        category: '개인정보',
        question: '회원가입이 필요한가요?',
        answer: '아니요, 회원가입 없이 바로 사용할 수 있습니다! 이메일, 전화번호 등 어떤 개인정보도 수집하지 않습니다.'
    },

    // 기술 / 기타
    {
        category: '기술',
        question: '어떤 AI를 사용하나요?',
        answer: 'OpenAI의 GPT-4o-mini 모델을 사용합니다. 빠른 응답 속도와 자연스러운 한국어 생성 능력을 제공합니다.'
    },
    {
        category: '기술',
        question: '오류가 발생하면 어떻게 하나요?',
        answer: '잠시 후 다시 시도해 주세요. 문제가 지속되면 contact@gctranslator.site로 문의해 주시면 빠르게 해결해 드리겠습니다.'
    },
    {
        category: '기술',
        question: '서비스 개선 제안은 어디로 하나요?',
        answer: 'contact@gctranslator.site로 이메일을 보내주세요! 모든 피드백과 제안을 소중히 검토하고 있습니다. 여러분의 의견이 서비스를 더 좋게 만듭니다.'
    }
]

// FAQ 아코디언 아이템 컴포넌트
function FAQAccordionItem({ item, isOpen, onToggle }: {
    item: FAQItem
    isOpen: boolean
    onToggle: () => void
}) {
    return (
        <div className="border-b border-gray-100 last:border-b-0">
            <button
                onClick={onToggle}
                className="w-full py-4 px-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
                <span className="font-medium text-gray-800 pr-4">{item.question}</span>
                <ChevronDown
                    className={cn(
                        'w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200',
                        isOpen && 'rotate-180'
                    )}
                />
            </button>
            <div
                className={cn(
                    'overflow-hidden transition-all duration-200',
                    isOpen ? 'max-h-96 pb-4' : 'max-h-0'
                )}
            >
                <p className="px-4 text-gray-600 whitespace-pre-line leading-relaxed">
                    {item.answer}
                </p>
            </div>
        </div>
    )
}

/**
 * FAQ 페이지
 * 자주 묻는 질문과 답변을 제공합니다.
 */
export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    // 카테고리별로 그룹화
    const categories = [...new Set(faqData.map(item => item.category))]

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    let globalIndex = 0

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
            <Header />

            {/* 상단 광고 */}
            <div className="w-full py-3 bg-white/50 border-b border-gray-100">
                <ResponsiveAdBanner slot="faq-header" />
            </div>

            <main className="flex-1 w-full max-w-4xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
                {/* 페이지 타이틀 */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                        <span role="img" aria-label="question">❓</span> 자주 묻는 질문
                    </h1>
                    <p className="text-gray-500 lg:text-lg">
                        개찰번역기에 대해 궁금한 점을 확인하세요
                    </p>
                </div>

                {/* FAQ 목록 */}
                <div className="space-y-6">
                    {categories.map((category) => {
                        const categoryItems = faqData.filter(item => item.category === category)

                        return (
                            <section key={category} className="card">
                                <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    {category === '서비스 이용' && <span>🎯</span>}
                                    {category === '변환 기능' && <span>⚡</span>}
                                    {category === '개인정보' && <span>🔒</span>}
                                    {category === '기술' && <span>🔧</span>}
                                    {category}
                                </h2>
                                <div className="border border-gray-100 rounded-xl overflow-hidden">
                                    {categoryItems.map((item) => {
                                        const currentIndex = globalIndex++
                                        return (
                                            <FAQAccordionItem
                                                key={currentIndex}
                                                item={item}
                                                isOpen={openIndex === currentIndex}
                                                onToggle={() => handleToggle(currentIndex)}
                                            />
                                        )
                                    })}
                                </div>
                            </section>
                        )
                    })}
                </div>

                {/* 추가 문의 */}
                <div className="mt-12 card bg-gradient-to-br from-primary-50 to-indigo-50 border border-primary-100 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                        <span role="img" aria-label="mail">📬</span> 찾는 답변이 없으신가요?
                    </h3>
                    <p className="text-gray-500 mb-4">
                        궁금한 점이 있으시면 언제든 문의해 주세요!
                    </p>
                    <a
                        href="mailto:contact@gctranslator.site"
                        className="btn-primary inline-flex items-center gap-2 px-6 py-3"
                    >
                        <span>문의하기</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                    >
                        <span role="img" aria-label="sparkles">✨</span>
                        <span>개찰번역기 사용해보기</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </main>

            {/* 하단 광고 */}
            <div className="w-full py-4 bg-white/50 border-t border-gray-100">
                <ResponsiveAdBanner slot="faq-footer" />
            </div>

            <Footer />
        </div>
    )
}
