import OpenAI from 'openai'

/**
 * OpenAI 클라이언트 인스턴스 (Lazy Initialization)
 * API 호출 시점에만 클라이언트를 생성하여 빌드 시 오류를 방지합니다.
 */
let openaiClient: OpenAI | null = null

/**
 * OpenAI 클라이언트를 가져옵니다.
 * 처음 호출 시에만 클라이언트를 생성합니다.
 */
export function getOpenAIClient(): OpenAI {
    if (!openaiClient) {
        openaiClient = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        })
    }
    return openaiClient
}
