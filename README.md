# 🐕 개찰번역기 (Tone Polisher)

> "개떡같이 말해도 찰떡같이 바꿔드립니다"

거친 언어나 비격식 텍스트를 상황에 맞는 적절한 문체로 변환해 주는 AI 웹 서비스입니다.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ 주요 기능

- **3가지 변환 모드**
  - 💼 **사회생활**: 정중하고 격식 있는 비즈니스 문체
  - 💕 **연애**: 다정하고 부드러운 연인 간 문체
  - 🕊️ **예절**: 정중한 거절, 부탁, 사과 문체

- **편의 기능**
  - 클립보드 복사 (원클릭)
  - 재시도 기능
  - 위트 있는 로딩 애니메이션
  - 반응형 디자인 (Mobile First)

## 🛠️ 기술 스택

| 구분 | 스택 |
|------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| AI Model | OpenAI GPT-4o-mini |
| Deploy | Vercel |

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.example` 파일을 복사하여 `.env.local` 파일을 생성하고, OpenAI API 키를 입력하세요.

```bash
cp .env.example .env.local
```

```env
OPENAI_API_KEY=your_openai_api_key_here
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열어 확인하세요.

## 📁 프로젝트 구조

```
/app
  ├── layout.tsx          # 전역 레이아웃 (메타태그, 폰트)
  ├── page.tsx            # 메인 페이지
  ├── globals.css         # 글로벌 스타일
  └── api/
      └── translate/
          └── route.ts    # AI 변환 API

/components
  ├── Header.tsx          # 헤더 (로고, 공유)
  ├── ModeSelector.tsx    # 모드 선택 탭
  ├── ResultCard.tsx      # 결과 표시
  ├── Footer.tsx          # 푸터
  ├── LoadingSpinner.tsx  # 로딩 애니메이션
  └── Toast.tsx           # 토스트 알림

/lib
  ├── utils.ts            # 유틸리티 함수
  ├── prompts.ts          # AI 프롬프트 정의
  └── openai.ts           # OpenAI 클라이언트
```

## 📝 라이선스

MIT License

## 📧 문의

- Email: contact@example.com
