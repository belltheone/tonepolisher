import { NextRequest, NextResponse } from 'next/server'
import { getOpenAIClient } from '@/lib/openai'
import { getSystemPrompt, TranslateMode } from '@/lib/prompts'

// 입력 요청 타입 정의
interface TranslateRequest {
    text: string
    mode: TranslateMode
}

// 최대 글자 수 제한
const MAX_CHARACTERS = 500
const MIN_CHARACTERS = 1

/**
 * POST /api/translate
 * 사용자 입력 텍스트를 선택된 모드에 맞게 변환합니다.
 */
export async function POST(request: NextRequest) {
    try {
        // 요청 본문 파싱
        const body: TranslateRequest = await request.json()
        const { text, mode } = body

        // 입력값 검증: 텍스트 존재 여부
        if (!text || typeof text !== 'string') {
            return NextResponse.json(
                { error: '변환할 텍스트를 입력해 주세요.' },
                { status: 400 }
            )
        }

        // 입력값 검증: 글자 수 제한
        const trimmedText = text.trim()
        if (trimmedText.length < MIN_CHARACTERS) {
            return NextResponse.json(
                { error: '최소 1자 이상 입력해 주세요.' },
                { status: 400 }
            )
        }

        if (trimmedText.length > MAX_CHARACTERS) {
            return NextResponse.json(
                { error: `최대 ${MAX_CHARACTERS}자까지 입력 가능합니다.` },
                { status: 400 }
            )
        }

        // 입력값 검증: 모드 유효성
        const validModes: TranslateMode[] = ['Professional', 'Romantic', 'Polite']
        if (!mode || !validModes.includes(mode)) {
            return NextResponse.json(
                { error: '유효하지 않은 변환 모드입니다.' },
                { status: 400 }
            )
        }

        // API 키 확인
        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json(
                { error: 'API 설정 오류가 발생했습니다. 관리자에게 문의해 주세요.' },
                { status: 500 }
            )
        }

        // OpenAI API 호출
        const systemPrompt = getSystemPrompt(mode)
        const openai = getOpenAIClient()

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: trimmedText }
            ],
            max_tokens: 1000,
            temperature: 0.7, // 약간의 창의성 허용
        })

        // 응답 추출
        const result = completion.choices[0]?.message?.content?.trim()

        if (!result) {
            return NextResponse.json(
                { error: '변환 결과를 생성하지 못했습니다. 다시 시도해 주세요.' },
                { status: 500 }
            )
        }

        // 성공 응답
        return NextResponse.json({ result })

    } catch (error: unknown) {
        console.error('Translate API Error:', error)

        // OpenAI API 에러 처리
        if (error instanceof Error) {
            // 콘텐츠 필터링 에러
            if (error.message.includes('content_policy') || error.message.includes('content_filter')) {
                return NextResponse.json(
                    { error: '부적절한 내용이 포함되어 변환할 수 없습니다.' },
                    { status: 400 }
                )
            }

            // Rate Limit 에러
            if (error.message.includes('rate_limit') || error.message.includes('429')) {
                return NextResponse.json(
                    { error: '요청이 너무 많습니다. 잠시 후 다시 시도해 주세요.' },
                    { status: 429 }
                )
            }
        }

        // 기타 에러
        return NextResponse.json(
            { error: '서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' },
            { status: 500 }
        )
    }
}
