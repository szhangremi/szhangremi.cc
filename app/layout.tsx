import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Zhang Shumeng | Personal Portfolio',
    template: '%s | Zhang Shumeng',
  },
  description: '个人作品与学术展示网站 - 研究论文、艺术设计项目、简历',
  keywords: ['个人作品集', '学术论文', '艺术设计', '作品展示'],
  authors: [{ name: 'Zhang Shumeng' }],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: 'Zhang Shumeng Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
