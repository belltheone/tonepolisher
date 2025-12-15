import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    title: '개인정보처리방침',
    description: '개찰번역기 개인정보처리방침입니다.',
}

/**
 * 개인정보처리방침 페이지
 */
export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
            <Header />

            <main className="flex-1 w-full max-w-4xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
                {/* 페이지 타이틀 */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                        🔒 개인정보처리방침
                    </h1>
                    <p className="text-gray-500">
                        최종 수정일: 2025년 12월 15일
                    </p>
                </div>

                <div className="card prose prose-gray max-w-none">
                    <h2>1. 개인정보의 수집 및 이용</h2>
                    <p>
                        개찰번역기(이하 &quot;서비스&quot;)는 <strong>회원가입 없이 이용 가능한 서비스</strong>로,
                        사용자의 개인정보를 별도로 수집하지 않습니다.
                    </p>

                    <h2>2. 수집하지 않는 정보</h2>
                    <p>본 서비스는 다음 정보를 수집하지 않습니다:</p>
                    <ul>
                        <li>이름, 이메일, 전화번호 등 개인 식별 정보</li>
                        <li>로그인 정보</li>
                        <li>결제 정보</li>
                    </ul>

                    <h2>3. 자동 수집 정보</h2>
                    <p>
                        서비스 이용 시 다음 정보가 자동으로 생성되거나 수집될 수 있습니다:
                    </p>
                    <ul>
                        <li><strong>사용자 입력 텍스트</strong>: AI 변환을 위해 일시적으로 처리되며, 서버에 저장되지 않습니다.</li>
                        <li><strong>브라우저 로컬 스토리지</strong>: 마지막으로 선택한 변환 모드 정보만 사용자의 브라우저에 저장됩니다.</li>
                        <li><strong>Google Analytics</strong>: 서비스 개선을 위해 익명화된 방문 통계를 수집할 수 있습니다.</li>
                    </ul>

                    <h2>4. 제3자 제공</h2>
                    <p>
                        사용자가 입력한 텍스트는 AI 변환을 위해 <strong>OpenAI API</strong>로 전송됩니다.
                        OpenAI의 개인정보처리방침은 {' '}
                        <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">
                            OpenAI Privacy Policy
                        </a>
                        를 참고하시기 바랍니다.
                    </p>

                    <h2>5. 쿠키 및 광고</h2>
                    <p>
                        본 서비스는 Google AdSense를 통해 광고를 제공할 수 있습니다.
                        Google AdSense는 쿠키를 사용하여 관심 기반 광고를 제공합니다.
                    </p>
                    <p>
                        Google의 광고 쿠키 사용에 대한 자세한 내용은 {' '}
                        <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
                            Google 광고 정책
                        </a>
                        을 참고하시기 바랍니다.
                    </p>

                    <h2>6. 데이터 보관</h2>
                    <p>
                        본 서비스는 <strong>Stateless(무상태) 구조</strong>로 운영됩니다.
                    </p>
                    <ul>
                        <li>사용자가 입력한 텍스트는 서버에 저장되지 않습니다.</li>
                        <li>변환 결과는 서버에 저장되지 않습니다.</li>
                        <li>별도의 데이터베이스를 운영하지 않습니다.</li>
                    </ul>

                    <h2>7. 이용자의 권리</h2>
                    <p>
                        본 서비스는 개인정보를 수집하지 않으므로, 별도의 열람, 정정, 삭제 요청
                        절차가 필요하지 않습니다.
                    </p>
                    <p>
                        브라우저에 저장된 로컬 스토리지 데이터는 브라우저 설정에서 직접 삭제할 수 있습니다.
                    </p>

                    <h2>8. 아동의 개인정보</h2>
                    <p>
                        본 서비스는 만 14세 미만의 아동을 대상으로 하지 않습니다.
                    </p>

                    <h2>9. 개인정보처리방침의 변경</h2>
                    <p>
                        본 개인정보처리방침이 변경되는 경우 서비스 내 공지를 통해 안내합니다.
                    </p>

                    <h2>10. 문의처</h2>
                    <p>
                        개인정보 관련 문의는 아래 연락처로 해주시기 바랍니다.
                    </p>
                    <ul>
                        <li>이메일: privacy@gctranslator.site</li>
                    </ul>
                </div>
            </main>

            <Footer />
        </div>
    )
}
