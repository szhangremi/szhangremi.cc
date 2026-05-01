import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      maxWidth: {
        'content': '72rem', // 1152px - 最大内容宽度
        'prose': '65ch', // 适合阅读的宽度
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section': '4rem', // 章节间距
        'element': '1.5rem', // 元素间距
      },
      lineHeight: {
        'relaxed': '1.75', // 更舒适的行高
        'loose': '2', // 宽松行高
      },
    },
  },
  plugins: [],
}
export default config
