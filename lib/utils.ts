import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Tailwind CSS 클래스 병합 유틸리티
 * clsx로 조건부 클래스를 처리하고, tailwind-merge로 중복 클래스를 병합합니다.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/**
 * 클립보드에 텍스트 복사
 * @param text 복사할 텍스트
 * @returns 성공 여부
 */
export async function copyToClipboard(text: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text)
        return true
    } catch (error) {
        console.error('클립보드 복사 실패:', error)
        return false
    }
}

/**
 * 글자 수 카운트 (공백 포함)
 * @param text 입력 텍스트
 * @returns 글자 수
 */
export function countCharacters(text: string): number {
    return text.length
}

/**
 * 로컬 스토리지에 값 저장
 * @param key 저장 키
 * @param value 저장 값
 */
export function saveToLocalStorage(key: string, value: string): void {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, value)
    }
}

/**
 * 로컬 스토리지에서 값 읽기
 * @param key 읽을 키
 * @param defaultValue 기본값
 * @returns 저장된 값 또는 기본값
 */
export function getFromLocalStorage(key: string, defaultValue: string = ''): string {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(key) || defaultValue
    }
    return defaultValue
}
