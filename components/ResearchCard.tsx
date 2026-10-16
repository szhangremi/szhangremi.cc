import Image from 'next/image'
import { ResearchItem } from '@/lib/types'

interface ResearchCardProps {
  item: ResearchItem
}

export default function ResearchCard({ item }: ResearchCardProps) {
  return (
    <article className="card group lg:h-64">
      <div className="flex flex-col lg:h-full lg:flex-row">
        {/* Reserved preview area; replace the fallback in publication data later. */}
        <div className="relative aspect-[4/3] w-full flex-shrink-0 overflow-hidden bg-muted lg:h-full lg:w-auto">
          <Image
            src={item.image || '/images/research-placeholder.svg'}
            alt={`Preview image for ${item.title}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 1023px) 100vw, 342px"
          />
        </div>

        {/* 右侧：论文信息 */}
        <div className="flex min-w-0 flex-1 flex-col p-4 md:p-5">
          {/* 标签 */}
          {item.tags && item.tags.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {item.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* 标题 */}
          <h3 className="card-title mb-2 transition-colors group-hover:text-foreground/80">
            {item.title}
          </h3>

          {/* 作者 */}
          <p className="mb-2 text-sm text-muted-foreground">
            {item.authors.join(', ')}
          </p>

          {/* 发表场所 */}
          <p className="mb-3 text-sm font-medium text-foreground/80">
            {item.venue}
            {item.pages && `, pp. ${item.pages}`}
          </p>

          {/* 年份和奖项 */}
          <div className="mb-4 flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{item.year}</span>
            {item.award && (
              <span className="rounded-sm bg-foreground px-2 py-0.5 text-xs font-medium text-background">
                {item.award}
              </span>
            )}
            {item.status && (
              <span className="rounded-sm bg-muted px-2 py-0.5 text-xs font-medium text-foreground">
                {item.status}
              </span>
            )}
            {item.rank && (
              <span className="rounded-sm border border-border px-2 py-0.5 text-xs font-medium text-foreground">
                {item.rank}
              </span>
            )}
          </div>

          {/* 摘要（如果存在） */}
          {item.abstract && (
            <p className="mb-3 line-clamp-2 flex-1 text-sm text-muted-foreground">
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
