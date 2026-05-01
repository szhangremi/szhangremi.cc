# Personal Portfolio Website

一个简洁、专业的个人作品与学术展示网站。

## 技术栈

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**

## 开始使用

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start
```

## 项目结构

```
├── app/                      # Next.js App Router 页面
│   ├── layout.tsx           # 根布局
│   ├── page.tsx             # 首页
│   ├── globals.css          # 全局样式
│   ├── research/            # 研究页面
│   ├── art-design/          # 艺术设计页面
│   │   └── [slug]/          # 项目详情页
│   └── cv/                  # 简历页面
├── components/              # React 组件
│   ├── Navbar.tsx           # 导航栏
│   ├── Footer.tsx           # 页脚
│   ├── ResearchCard.tsx      # 研究论文卡片
│   ├── ProjectCard.tsx       # 项目卡片
│   ├── ProjectGrid.tsx       # 瀑布流网格
│   ├── MediaRenderer.tsx     # 媒体渲染器
│   └── CVSection.tsx         # 简历区块
├── data/                    # 数据文件
│   ├── research.ts          # 研究数据
│   ├── artDesign.ts         # 艺术设计数据
│   ├── socialLinks.ts       # 社交链接
│   └── cv.ts                # 简历数据
├── lib/                     # 工具库
│   └── types.ts             # TypeScript 类型定义
└── public/                  # 静态资源
    ├── images/              # 图片
    └── files/               # 文件 (PDF 等)
```

## 添加内容

### 添加研究论文

编辑 `data/research.ts`，添加新的论文条目：

```typescript
export const researchData: ResearchItem = {
  id: 'new-paper',
  title: '论文标题',
  authors: ['作者1', '作者2'],
  venue: '发表场所',
  year: 2024,
  image: '/images/research-paper.jpg',
  pdfUrl: '/files/paper.pdf',
  abstract: '摘要内容...',
  tags: ['标签1', '标签2'],
}
```

### 添加艺术设计项目

1. 编辑 `data/artDesign.ts`，添加新项目：

```typescript
{
  id: 'new-project',
  slug: 'new-project',
  title: '项目标题',
  description: '简短描述',
  coverImage: '/images/project-cover.jpg',
  year: 2024,
  tags: ['标签1', '标签2'],
  content: [
    {
      type: 'image',
      src: '/images/project-1.jpg',
      alt: '描述',
    },
  ],
}
```

2. 在 `app/art-design/page.tsx` 中引入新项目

### 添加社交媒体链接

编辑 `data/socialLinks.ts`，添加新的社交平台。

### 更新简历

编辑 `data/cv.ts` 或直接在 `app/cv/page.tsx` 中修改内容。

## 页面说明

- **/** - 首页，展示 Artist Statement
- **/research** - 研究论文列表
- **/art-design** - 艺术设计项目列表
- **/art-design/[slug]** - 项目详情页
- **/cv** - 个人简历

## 设计规范

- 最大内容宽度: 72rem (1152px)
- 响应式断点: 移动端 < 640px, 平板 640px-1024px, 桌面 > 1024px
- 字体: 衬线字体用于标题，无衬线字体用于正文
- 风格: 简洁、现代、克制、偏 portfolio + academic

## License

MIT
