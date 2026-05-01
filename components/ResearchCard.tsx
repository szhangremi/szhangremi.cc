import Image from 'next/image'
import Link from 'next/link'
import { ResearchItem } from '@/lib/types'

interface ResearchCardProps {
  item: ResearchItem
}

export default function ResearchCard({ item }: ResearchCardProps) {
  return (
    <article className="card group">
      <div className="flex flex-col md:flex-row">
        {/* 左侧：论文预览图 */}
        <div className="md:w-48 lg:w-56 flex-shrink-0 bg-muted">
          <div className="aspect-[4/3] md:aspect-auto md:h-full relative overflow-hidden">
            <Image
              src={item.image}
              alt={`Cover image for ${item.title}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 224px"
            />
          </div>
        </div>

        {/* 右侧：论文信息 */}
        <div className="flex-1 p-5 md:p-6 flex flex-col">
          {/* 标签 */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {item.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* 标题 */}
          <h3 className="card-title mb-2 group-hover:text-foreground/80 transition-colors">
            {item.title}
          </h3>

          {/* 作者 */}
          <p className="text-sm text-muted-foreground mb-2">
            {item.authors.join(', ')}
          </p>

          {/* 发表场所 */}
          <p className="text-sm font-medium text-foreground/80 mb-3">
            {item.venue}
          </p>

          {/* 年份和奖项 */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-muted-foreground">{item.year}</span>
            {item.award && (
              <span className="text-xs font-medium px-2 py-0.5 bg-foreground text-background rounded-sm">
                {item.award}
              </span>
            )}
          </div>

          {/* 摘要（如果存在） */}
          {item.abstract && (
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
              {item.abstract}
            </p>
          )}

          {/* 操作按钮 */}
          <div className="flex flex-wrap items-center gap-3 mt-auto">
            {item.pdfUrl && (
              <a
                href={item.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                PDF
              </a>
            )}
            {item.projectLink && (
              <a
                href={item.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                项目链接
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
