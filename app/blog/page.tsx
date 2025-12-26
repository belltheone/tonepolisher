import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ResponsiveAdBanner } from '@/components/AdBanner'
import { getAllBlogPosts } from '@/lib/blog-data'
import { Calendar, ArrowRight, Tag } from 'lucide-react'

export const metadata: Metadata = {
    title: '블로그',
    description: '커뮤니케이션, 직장생활, 연애 등 일상 소통에 도움이 되는 팁과 가이드를 제공합니다.',
}

/**
 * 블로그 목록 페이지
 * 모든 블로그 글을 카드 형태로 나열합니다.
 */
export default function BlogPage() {
    const posts = getAllBlogPosts()

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
            <Header />

            {/* 상단 광고 */}
            <div className="w-full py-3 bg-white/50 border-b border-gray-100">
                <ResponsiveAdBanner slot="blog-header" />
            </div>

            <main className="flex-1 w-full max-w-4xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
                {/* 페이지 타이틀 */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                        <span role="img" aria-label="pencil">✍️</span> 블로그
                    </h1>
                    <p className="text-gray-500 lg:text-lg">
                        일상 소통에 도움이 되는 팁과 가이드
                    </p>
                </div>

                {/* 블로그 글 목록 */}
                <div className="grid gap-6">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="card group hover:shadow-lg hover:border-primary-200 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                {/* 이모지 아이콘 */}
                                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                                    <span className="text-2xl">{post.emoji}</span>
                                </div>

                                {/* 콘텐츠 */}
                                <div className="flex-1 min-w-0">
                                    {/* 카테고리 & 날짜 */}
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                                            {post.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-400">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </span>
                                    </div>

                                    {/* 제목 */}
                                    <h2 className="text-lg lg:text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>

                                    {/* 설명 */}
                                    <p className="text-gray-500 text-sm lg:text-base line-clamp-2 mb-3">
                                        {post.description}
                                    </p>

                                    {/* 태그 */}
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <Tag className="w-3 h-3 text-gray-400" />
                                        {post.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs text-gray-400"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* 화살표 */}
                                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 group-hover:bg-primary-50 transition-colors">
                                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <div className="card bg-gradient-to-br from-primary-50 to-indigo-50 border border-primary-100">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            <span role="img" aria-label="sparkles">✨</span> 지금 바로 변환해보세요!
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
                </div>
            </main>

            {/* 하단 광고 */}
            <div className="w-full py-4 bg-white/50 border-t border-gray-100">
                <ResponsiveAdBanner slot="blog-footer" />
            </div>

            <Footer />
        </div>
    )
}
