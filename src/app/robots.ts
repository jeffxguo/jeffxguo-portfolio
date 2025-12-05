import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        // sitemap: 'https://jeffxguo.me/sitemap.xml', // Uncomment when sitemap is added
    }
}
