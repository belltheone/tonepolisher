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
 */
export default function ModeSelector({ selectedMode, onModeChange }: ModeSelectorProps) {
    const modes: TranslateMode[] = ['Professional', 'Romantic', 'Polite']

    return (
        <div className="flex gap-2 p-1 bg-gray-100 rounded-xl">
            {modes.map((mode) => {
                const config = MODE_CONFIG[mode]
                const isSelected = selectedMode === mode

                return (
                    <button
                        key={mode}
                        onClick={() => onModeChange(mode)}
                        className={cn(
                            'flex-1 py-2.5 px-3 rounded-lg font-medium text-sm',
                            'transition-all duration-200 ease-in-out',
                            'flex items-center justify-center gap-1.5',
                            isSelected
                                ? 'bg-white text-primary-600 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                        )}
                        aria-pressed={isSelected}
                    >
                        <span className="text-base" role="img" aria-label={config.label}>
                            {config.icon}
                        </span>
                        <span className="hidden sm:inline">{config.label}</span>
                    </button>
                )
            })}
        </div>
    )
}
