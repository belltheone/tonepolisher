import { MetadataRoute } from 'next'

/**
 * robots.txt 생성
 * 검색엔진 크롤러에게 사이트 크롤링 규칙을 알려줍니다.
 */
export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.gctranslator.site'

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/result'],  // API와 결과 페이지는 크롤링 제외
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
