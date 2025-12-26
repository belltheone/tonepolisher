import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ResponsiveAdBanner } from '@/components/AdBanner'
import { ArrowRight, Briefcase, Heart, Bird } from 'lucide-react'

export const metadata: Metadata = {
    title: '변환 예시',
    description: '개찰번역기의 실제 변환 예시를 확인하세요. 사회생활, 연애, 예절 모드별 Before/After 샘플을 제공합니다.',
}

// 예시 데이터 타입
interface TransformExample {
    before: string
    after: string
    situation: string
}

interface ModeExamples {
    mode: string
    icon: React.ReactNode
    emoji: string
    description: string
    color: string
    examples: TransformExample[]
}

// 변환 예시 데이터
const examplesData: ModeExamples[] = [
    {
        mode: '사회생활',
        icon: <Briefcase className="w-6 h-6" />,
        emoji: '💼',
        description: '비즈니스 상황에서 전문적이고 정중한 표현으로',
        color: 'blue',
        examples: [
            {
                situation: '업무 재요청',
                before: '아 진짜 짜증나네 다시 해와',
                after: '해당 부분 재검토 부탁드립니다. 수정이 필요한 사항을 표시해 두었으니 확인 후 보완해 주시면 감사하겠습니다.'
            },
            {
                situation: '회의 시간 변경 요청',
                before: '오늘 회의 못해 다른 날로 해',
                after: '죄송합니다만, 오늘 회의 참석이 어려울 것 같습니다. 다른 일정으로 조율이 가능하시다면 말씀 부탁드립니다.'
            },
            {
                situation: '추가 업무 거절',
                before: '그건 내 일 아닌데요',
                after: '말씀해 주신 업무는 제 담당 범위를 벗어나는 것 같습니다. 담당자분께 전달해 드릴까요?'
            },
            {
                situation: '마감 연장 요청',
                before: '이거 내일까지 못해요 시간 더 주세요',
                after: '현재 진행 상황상 내일까지 완료가 어려울 것 같습니다. 이틀 정도 기한 연장이 가능할지 검토 부탁드립니다.'
            }
        ]
    },
    {
        mode: '연애',
        icon: <Heart className="w-6 h-6" />,
        emoji: '💕',
        description: '연인이나 썸 상대에게 다정하고 부드럽게',
        color: 'pink',
        examples: [
            {
                situation: '사과하기',
                before: '미안 내가 잘못했어 화 풀어',
                after: '정말 미안해... 내가 생각이 짧았어. 네가 얼마나 속상했을지 이제야 느껴져. 다시는 그러지 않을게. 용서해줄 수 있어?'
            },
            {
                situation: '데이트 제안',
                before: '이번 주 시간 돼? 밥이나 먹자',
                after: '이번 주말에 시간 괜찮아? 요즘 가고 싶었던 맛집이 있는데, 같이 가면 좋을 것 같아서! 어때? 😊'
            },
            {
                situation: '그리움 표현',
                before: '보고싶다',
                after: '오늘 하루 종일 네 생각만 났어. 빨리 보고 싶다... 다음에 만나면 꼭 안아줄 거야 💕'
            },
            {
                situation: '약속 미루기',
                before: '오늘 피곤해서 못 만나겠어',
                after: '오늘 컨디션이 별로라서 만나면 재미없을 것 같아 ㅠㅠ 다음에 더 좋은 컨디션으로 만나고 싶어! 괜찮아?'
            }
        ]
    },
    {
        mode: '예절',
        icon: <Bird className="w-6 h-6" />,
        emoji: '🕊️',
        description: '정중한 거절, 부탁, 사과가 필요할 때',
        color: 'emerald',
        examples: [
            {
                situation: '정중한 거절',
                before: '싫어요 안 할 거예요',
                after: '좋은 제안 감사드립니다만, 현재 상황에서는 어려울 것 같습니다. 양해 부탁드립니다.'
            },
            {
                situation: '부탁하기',
                before: '이것 좀 해주세요',
                after: '바쁘신 중에 죄송합니다만, 이 부분에 대해 도움을 청해도 될까요? 시간 되실 때 검토해 주시면 정말 감사하겠습니다.'
            },
            {
                situation: '사과하기',
                before: '제가 잘못했어요 죄송해요',
                after: '이번 일로 불편을 드려 진심으로 사과드립니다. 깊이 반성하고 있으며, 같은 일이 반복되지 않도록 각별히 주의하겠습니다.'
            },
            {
                situation: '양해 구하기',
                before: '좀 늦을 것 같아요',
                after: '예정보다 도착이 늦어질 것 같아 미리 양해 말씀드립니다. 약 15분 정도 지연될 예정이니 너그러이 이해해 주시면 감사하겠습니다.'
            }
        ]
    }
]

/**
 * 변환 예시 페이지
 * 각 모드별 실제 변환 예시를 Before/After 형태로 보여줍니다.
 */
export default function ExamplesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
            <Header />

            {/* 상단 광고 */}
            <div className="w-full py-3 bg-white/50 border-b border-gray-100">
                <ResponsiveAdBanner slot="examples-header" />
            </div>

            <main className="flex-1 w-full max-w-4xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
                {/* 페이지 타이틀 */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                        <span role="img" aria-label="magic">🪄</span> 변환 예시
                    </h1>
                    <p className="text-gray-500 lg:text-lg">
                        개떡같이 → 찰떡같이, 실제 변환 결과를 확인하세요
                    </p>
                </div>

                {/* 모드별 예시 */}
                <div className="space-y-10">
                    {examplesData.map((modeData) => (
                        <section key={modeData.mode}>
                            {/* 모드 헤더 */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${modeData.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                                    modeData.color === 'pink' ? 'bg-pink-100 text-pink-600' :
                                        'bg-emerald-100 text-emerald-600'
                                    }`}>
                                    {modeData.icon}
                                </div>
                                <div>
                                    <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
                                        {modeData.emoji} {modeData.mode} 모드
                                    </h2>
                                    <p className="text-sm text-gray-500">{modeData.description}</p>
                                </div>
                            </div>

                            {/* 예시 카드들 */}
                            <div className="space-y-4">
                                {modeData.examples.map((example, index) => (
                                    <div key={index} className="card">
                                        {/* 상황 태그 */}
                                        <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-3 ${modeData.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                                            modeData.color === 'pink' ? 'bg-pink-50 text-pink-600' :
                                                'bg-emerald-50 text-emerald-600'
                                            }`}>
                                            {example.situation}
                                        </span>

                                        {/* Before / After */}
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {/* Before */}
                                            <div className="bg-gray-50 rounded-xl p-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-xs font-medium text-gray-400 uppercase">Before</span>
                                                    <span className="text-xs text-gray-300">개떡같이 🐕</span>
                                                </div>
                                                <p className="text-gray-700">{example.before}</p>
                                            </div>

                                            {/* After */}
                                            <div className={`rounded-xl p-4 ${modeData.color === 'blue' ? 'bg-blue-50' :
                                                modeData.color === 'pink' ? 'bg-pink-50' :
                                                    'bg-emerald-50'
                                                }`}>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className={`text-xs font-medium uppercase ${modeData.color === 'blue' ? 'text-blue-500' :
                                                        modeData.color === 'pink' ? 'text-pink-500' :
                                                            'text-emerald-500'
                                                        }`}>After</span>
                                                    <span className={`text-xs ${modeData.color === 'blue' ? 'text-blue-400' :
                                                        modeData.color === 'pink' ? 'text-pink-400' :
                                                            'text-emerald-400'
                                                        }`}>찰떡같이 ✨</span>
                                                </div>
                                                <p className={`${modeData.color === 'blue' ? 'text-blue-800' :
                                                    modeData.color === 'pink' ? 'text-pink-800' :
                                                        'text-emerald-800'
                                                    }`}>{example.after}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 card bg-gradient-to-br from-primary-50 to-indigo-50 border border-primary-100 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                        <span role="img" aria-label="sparkles">✨</span> 직접 해보세요!
                    </h3>
                    <p className="text-gray-500 mb-4">
                        당신만의 개떡같은 문장을 찰떡같이 바꿔보세요
                    </p>
                    <Link
                        href="/"
                        className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
                    >
                        <span>지금 바로 변환하기</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </main>

            {/* 하단 광고 */}
            <div className="w-full py-4 bg-white/50 border-t border-gray-100">
                <ResponsiveAdBanner slot="examples-footer" />
            </div>

            <Footer />
        </div>
    )
}
