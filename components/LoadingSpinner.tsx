'use client'

import { useEffect, useState } from 'react'

/**
 * 로딩 중 표시할 위트 있는 문구 목록
 */
const LOADING_MESSAGES = [
    'AI가 뇌를 굴리는 중... 🧠',
    '부장님 빙의 중... 💼',
    '문장을 다듬는 중... ✨',
    '찰떡으로 포장하는 중... 🍡',
    '매너 모드 ON... 🎩',
    '존대말 주입 중... 💉',
    '화법 변환 중... 🔄',
    '센스를 더하는 중... 💅',
    '말투를 다듬는 중... ✏️',
    '예의 바른 척 하는 중... 😇',
]

/**
 * 로딩 스피너 컴포넌트
 * 위트 있는 로딩 문구를 랜덤으로 표시합니다.
 */
export default function LoadingSpinner() {
    const [message, setMessage] = useState('')

    useEffect(() => {
        // 컴포넌트 마운트 시 랜덤 메시지 선택
        const randomIndex = Math.floor(Math.random() * LOADING_MESSAGES.length)
        setMessage(LOADING_MESSAGES[randomIndex])
    }, [])

    return (
        <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
            {/* 로딩 스피너 */}
            <div className="relative w-16 h-16 mb-4">
                {/* 외부 원 */}
                <div className="absolute inset-0 border-4 border-primary-200 rounded-full" />
                {/* 회전하는 부분 */}
                <div className="absolute inset-0 border-4 border-transparent border-t-primary-600 rounded-full animate-spin" />
                {/* 내부 아이콘 */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl animate-bounce-slow">🐕</span>
                </div>
            </div>

            {/* 로딩 메시지 */}
            <p className="text-gray-600 font-medium loading-pulse">
                {message}
            </p>
        </div>
    )
}
