'use client'

import { cn } from '@/lib/utils'
import { MODE_CONFIG, TranslateMode } from '@/lib/prompts'

interface ModeSelectorProps {
    selectedMode: TranslateMode
    onModeChange: (mode: TranslateMode) => void
}

/**
 * 모드 선택 컴포넌트
 * 3가지 변환 모드(사회생활, 연애, 예절)를 탭 형식으로 표시합니다.
 * 웹 퍼스트(Desktop First) 반응형 디자인
 */
export default function ModeSelector({ selectedMode, onModeChange }: ModeSelectorProps) {
    const modes: TranslateMode[] = ['Professional', 'Romantic', 'Polite']

    return (
        <div className="flex gap-2 lg:gap-3 p-1.5 lg:p-2 bg-gray-100 rounded-xl lg:rounded-2xl">
            {modes.map((mode) => {
                const config = MODE_CONFIG[mode]
                const isSelected = selectedMode === mode

                return (
                    <button
                        key={mode}
                        onClick={() => onModeChange(mode)}
                        className={cn(
                            'flex-1 py-2.5 lg:py-3 px-3 lg:px-4 rounded-lg lg:rounded-xl',
                            'font-medium text-sm lg:text-base',
                            'transition-all duration-200 ease-in-out',
                            'flex items-center justify-center gap-1.5 lg:gap-2',
                            isSelected
                                ? 'bg-white text-primary-600 shadow-md'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                        )}
                        aria-pressed={isSelected}
                    >
                        <span className="text-base lg:text-lg" role="img" aria-label={config.label}>
                            {config.icon}
                        </span>
                        {/* 데스크톱(기본): 라벨 표시, 모바일: 숨김 */}
                        <span className="hidden sm:inline">{config.label}</span>
                    </button>
                )
            })}
        </div>
    )
}
