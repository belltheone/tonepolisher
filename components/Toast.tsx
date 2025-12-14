'use client'

import { useEffect } from 'react'
import { X, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ToastProps {
    message: string
    show: boolean
    onClose: () => void
    duration?: number
    type?: 'success' | 'error' | 'info'
}

/**
 * 토스트 알림 컴포넌트
 * 짧은 알림 메시지를 화면 하단에 표시합니다.
 */
export default function Toast({
    message,
    show,
    onClose,
    duration = 3000,
    type = 'success'
}: ToastProps) {
    // 자동 닫기
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose()
            }, duration)
            return () => clearTimeout(timer)
        }
    }, [show, duration, onClose])

    if (!show) return null

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
            <div
                className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg',
                    'backdrop-blur-sm border',
                    type === 'success' && 'bg-green-50/90 border-green-200 text-green-800',
                    type === 'error' && 'bg-red-50/90 border-red-200 text-red-800',
                    type === 'info' && 'bg-primary-50/90 border-primary-200 text-primary-800'
                )}
            >
                {/* 아이콘 */}
                <CheckCircle className="w-5 h-5 flex-shrink-0" />

                {/* 메시지 */}
                <p className="text-sm font-medium">{message}</p>

                {/* 닫기 버튼 */}
                <button
                    onClick={onClose}
                    className="ml-2 p-1 rounded-lg hover:bg-black/5 transition-colors"
                    aria-label="닫기"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}
