import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ResponsiveAdBanner } from '@/components/AdBanner'
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog-data'
import { Calendar, ArrowLeft, ArrowRight, Tag, Share2 } from 'lucide-react'

// 타입 정의
interface BlogPostPageProps {
    params: Promise<{
        slug: string
    }>
}

/**
 * 동적 메타데이터 생성
 */
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params
    const post = getBlogPostBySlug(slug)

    if (!post) {
        return {
            title: '글을 찾을 수 없습니다',
        }
    }

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
        },
    }
}

/**
 * 정적 페이지 생성을 위한 경로 목록
 */
export async function generateStaticParams() {
    const posts = getAllBlogPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

/**
 * 마크다운을 HTML로 변환하는 간단한 함수
 */
function parseMarkdown(content: string): string {
    return content
        // h2
        .replace(/^## (.+)$/gm, '<h2 class="text-xl lg:text-2xl font-bold text-gray-800 mt-8 mb-4">$1</h2>')
        // h3
        .replace(/^### (.+)$/gm, '<h3 class="text-lg lg:text-xl font-semibold text-gray-700 mt-6 mb-3">$1</h3>')
        // bold
        .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-800">$1</strong>')
        // 테이블 처리
        .replace(/\|(.+)\|/g, (match) => {
            const cells = match.split('|').filter(cell => cell.trim())
            if (cells.every(cell => cell.trim().match(/^-+$/))) {
                return '' // 구분선 삭제
            }
            const isHeader = match.includes('개떡같이') || match.includes('상황') || match.includes('피해야')
            const cellTag = isHeader ? 'th' : 'td'
            const cellClass = isHeader
                ? 'px-4 py-2 bg-gray-100 text-left font-medium text-gray-700'
                : 'px-4 py-2 border-t border-gray-100 text-gray-600'
            const cellsHtml = cells.map(cell => `<${cellTag} class="${cellClass}">${cell.trim()}</${cellTag}>`).join('')
            return `<tr>${cellsHtml}</tr>`
        })
        // 테이블 래핑
        .replace(/(<tr>[\s\S]*?<\/tr>[\s\n]*)+/g, (match) => {
            return `<table class="w-full border border-gray-200 rounded-lg overflow-hidden my-4">${match}</table>`
        })
        // 리스트 - 숫자
        .replace(/^(\d+)\. (.+)$/gm, '<li class="text-gray-600 mb-2 ml-4">$2</li>')
        // 리스트 - 불릿
        .replace(/^- (.+)$/gm, '<li class="text-gray-600 mb-2 ml-4">$1</li>')
        // 연속된 li를 ul로 감싸기
        .replace(/(<li[^>]*>[\s\S]*?<\/li>\n?)+/g, '<ul class="list-disc list-inside my-4 space-y-1">$&</ul>')
        // 문단
        .replace(/^(?!<[hl]|<ul|<li|<table|<tr)(.+)$/gm, '<p class="text-gray-600 leading-relaxed mb-4">$1</p>')
        // 빈 줄 정리
        .replace(/<p class="[^"]*"><\/p>/g, '')
}

/**
 * 블로그 상세 페이지
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = getBlogPostBySlug(slug)

    if (!post) {
        notFound()
    }

    const allPosts = getAllBlogPosts()
    const currentIndex = allPosts.findIndex(p => p.slug === slug)
    const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
    const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null

    const contentHtml = parseMarkdown(post.content)

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
            <Header />

            {/* 상단 광고 */}
            <div className="w-full py-3 bg-white/50 border-b border-gray-100">
                <ResponsiveAdBanner slot="blog-post-header" />
            </div>

            <main className="flex-1 w-full max-w-3xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
                {/* 뒤로가기 */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-600 transition-colors mb-6"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>블로그 목록</span>
                </Link>

                {/* 글 헤더 */}
                <header className="mb-8">
                    {/* 카테고리 & 날짜 */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                            {post.emoji} {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-gray-400">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                        </span>
                    </div>

                    {/* 제목 */}
                    <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 leading-tight mb-4">
                        {post.title}
                    </h1>

                    {/* 설명 */}
                    <p className="text-gray-500 text-lg">
                        {post.description}
                    </p>

                    {/* 태그 */}
                    <div className="flex items-center gap-2 flex-wrap mt-4">
                        <Tag className="w-4 h-4 text-gray-400" />
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </header>

                {/* 중간 광고 */}
                <div className="my-6">
                    <ResponsiveAdBanner slot="blog-post-middle" />
                </div>

                {/* 글 본문 */}
                <article className="card">
                    <div
                        className="prose prose-gray max-w-none"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />
                </article>

                {/* CTA */}
                <div className="mt-8 card bg-gradient-to-br from-primary-50 to-indigo-50 border border-primary-100 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                        <span role="img" aria-label="sparkles">✨</span> 직접 변환해보세요!
                    </h3>
                    <p className="text-gray-500 mb-4">
                        개떡같이 말해도 찰떡같이 바꿔드려요
                    </p>
                    <Link
                        href="/"
                        className="btn-primary inline-flex items-center gap-2 px-6 py-3"
                    >
                        <span>개찰번역기 사용하기</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* 이전/다음 글 네비게이션 */}
                <nav className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {prevPost ? (
                        <Link
                            href={`/blog/${prevPost.slug}`}
                            className="card group hover:border-primary-200 transition-colors"
                        >
                            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                                <ArrowLeft className="w-4 h-4" />
                                <span>이전 글</span>
                            </div>
                            <p className="font-medium text-gray-700 group-hover:text-primary-600 transition-colors line-clamp-1">
                                {prevPost.title}
                            </p>
                        </Link>
                    ) : (
                        <div />
                    )}
                    {nextPost && (
                        <Link
                            href={`/blog/${nextPost.slug}`}
                            className="card group hover:border-primary-200 transition-colors text-right"
                        >
                            <div className="flex items-center justify-end gap-2 text-sm text-gray-400 mb-2">
                                <span>다음 글</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                            <p className="font-medium text-gray-700 group-hover:text-primary-600 transition-colors line-clamp-1">
                                {nextPost.title}
                            </p>
                        </Link>
                    )}
                </nav>
            </main>

            {/* 하단 광고 */}
            <div className="w-full py-4 bg-white/50 border-t border-gray-100">
                <ResponsiveAdBanner slot="blog-post-footer" />
            </div>

            <Footer />
        </div>
    )
}
