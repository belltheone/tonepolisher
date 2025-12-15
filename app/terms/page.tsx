import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    title: '이용약관',
    description: '개찰번역기 서비스 이용약관입니다.',
}

/**
 * 이용약관 페이지
 */
export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
            <Header />

            <main className="flex-1 w-full max-w-4xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
                {/* 페이지 타이틀 */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                        <span role="img" aria-label="clipboard">📋</span> 이용약관
                    </h1>
                    <p className="text-gray-500">
                        최종 수정일: 2025년 12월 15일
                    </p>
                </div>

                <div className="card prose prose-gray max-w-none">
                    <h2>제1조 (목적)</h2>
                    <p>
                        이 약관은 개찰번역기(이하 &quot;서비스&quot;)가 제공하는 AI 텍스트 변환 서비스의
                        이용 조건 및 절차, 서비스 제공자와 이용자 간의 권리와 의무 등 기본적인 사항을 규정함을 목적으로 합니다.
                    </p>

                    <h2>제2조 (서비스의 내용)</h2>
                    <p>
                        본 서비스는 사용자가 입력한 텍스트를 AI 기술을 활용하여 다양한 문체로 변환해주는 서비스입니다.
                    </p>
                    <ul>
                        <li>사회생활(비즈니스) 모드: 격식 있고 정중한 문체로 변환</li>
                        <li>연애 모드: 다정하고 부드러운 문체로 변환</li>
                        <li>예절 모드: 정중한 거절, 부탁, 사과 문체로 변환</li>
                    </ul>

                    <h2>제3조 (서비스 이용)</h2>
                    <p>
                        본 서비스는 별도의 회원가입 없이 누구나 무료로 이용할 수 있습니다.
                        단, 서비스 제공자는 서비스의 안정적 운영을 위해 이용 횟수 등을 제한할 수 있습니다.
                    </p>

                    <h2>제4조 (면책조항)</h2>
                    <p>
                        <strong>중요:</strong> 본 서비스는 AI(GPT-4o-mini)를 활용한 텍스트 변환 서비스입니다.
                    </p>
                    <ul>
                        <li>AI가 생성한 결과물에 대한 정확성, 적절성을 보장하지 않습니다.</li>
                        <li>변환 결과를 사용함으로써 발생하는 모든 문제에 대해 책임을 지지 않습니다.</li>
                        <li>결과물은 참고용으로만 사용하시기 바랍니다.</li>
                        <li>중요한 업무나 법적 효력이 있는 문서에는 사용을 권장하지 않습니다.</li>
                    </ul>

                    <h2>제5조 (금지 행위)</h2>
                    <p>이용자는 다음 각 호의 행위를 해서는 안 됩니다:</p>
                    <ul>
                        <li>불법적이거나 타인에게 해를 끼치는 목적으로 서비스를 이용하는 행위</li>
                        <li>서비스의 정상적인 운영을 방해하는 행위</li>
                        <li>자동화된 수단을 이용하여 과도한 요청을 보내는 행위</li>
                        <li>타인의 개인정보를 무단으로 수집하거나 처리하는 행위</li>
                    </ul>

                    <h2>제6조 (지적재산권)</h2>
                    <p>
                        서비스의 디자인, 로고, 소프트웨어 등 모든 지적재산권은 서비스 제공자에게 귀속됩니다.
                        사용자가 입력한 텍스트 및 변환 결과물에 대한 권리는 사용자에게 있습니다.
                    </p>

                    <h2>제7조 (약관의 변경)</h2>
                    <p>
                        서비스 제공자는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지를 통해 효력이 발생합니다.
                    </p>

                    <h2>제8조 (문의)</h2>
                    <p>
                        서비스 이용에 관한 문의는 아래 연락처로 해주시기 바랍니다.
                    </p>
                    <ul>
                        <li>이메일: contact@gctranslator.site</li>
                    </ul>
                </div>
            </main>

            <Footer />
        </div>
    )
}
