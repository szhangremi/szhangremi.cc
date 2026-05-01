import { CVSection as CVSectionType, CVItem } from '@/lib/types'

interface CVSectionProps {
  section: CVSectionType
}

function ObjectiveItem({ item }: { item: CVItem }) {
  return (
    <div className="text-sm text-muted-foreground leading-relaxed">
      {item.title}
    </div>
  )
}

function SimpleItem({ item }: { item: CVItem }) {
  return (
    <div className="text-sm text-muted-foreground">
      {item.title}
    </div>
  )
}

function CVItemComponent({ item, type }: { item: CVItem; type: string }) {
  // Special handling for Objective section
  if (type === 'objective') {
    return <ObjectiveItem item={item} />
  }

  // Special handling for News section (simple format)
  if (type === 'news') {
    return (
      <div className="mb-4 last:mb-0">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-4">
          <div className="flex-1">
            <h4 className="font-medium text-foreground">
              {item.title}
            </h4>
            {item.organization && (
              <p className="text-sm text-muted-foreground">
                {item.organization}
              </p>
            )}
            {item.description && (
              <p className="mt-1 text-sm text-muted-foreground">
                {item.description}
              </p>
            )}
          </div>
          <div className="flex-shrink-0 text-sm text-muted-foreground text-left md:text-right">
            {item.startDate}
          </div>
        </div>
      </div>
    )
  }

  // Special handling for Hobbies section (simple list)
  if (type === 'hobbies') {
    return <SimpleItem item={item} />
  }

  // Default CV item layout
  return (
    <div className="group mb-8 last:mb-0">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-4">
        {/* Left: Title and Description */}
        <div className="flex-1">
          <h4 className="font-medium text-foreground">
            {item.title}
          </h4>

          {item.subtitle && (
            <p className="text-sm text-foreground/80">{item.subtitle}</p>
          )}

          {(item.organization || item.location) && (
            <p className="text-sm text-muted-foreground">
              {[item.organization, item.location].filter(Boolean).join(' · ')}
            </p>
          )}

          {item.description && (
            <p className="mt-1 text-sm text-muted-foreground">
              {item.description}
            </p>
          )}

          {item.details && item.details.length > 0 && (
            <ul className="mt-2 space-y-1">
              {item.details.map((detail, index) => (
                <li key={index} className="text-sm text-muted-foreground pl-3 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-muted-foreground before:rounded-full">
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right: Date */}
        <div className="flex-shrink-0 text-sm text-muted-foreground text-left md:text-right whitespace-nowrap">
          {item.startDate && item.endDate && (
            <span>
              {item.startDate} – {item.endDate}
            </span>
          )}
          {item.startDate && !item.endDate && (
            <span>{item.startDate}</span>
          )}
        </div>
      </div>

      {/* Link */}
      {item.link && (
        <a
          href={item.link}
          className="inline-block mt-2 text-sm text-foreground/70 hover:text-foreground underline underline-offset-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Paper →
        </a>
      )}
    </div>
  )
}

export default function CVSection({ section }: CVSectionProps) {
  // Don't show section title for special sections
  if (section.type === 'objective' || section.type === 'hobbies') {
    return (
      <section className="mb-10 last:mb-0">
        <h3 className="section-title mb-4 pb-2">
          {section.title}
        </h3>
        <div>
          {section.items.map((item) => (
            <CVItemComponent key={item.id} item={item} type={section.type} />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="mb-10 last:mb-0">
      {/* Section Title */}
      <h3 className="section-title mb-6 pb-3 border-b border-border">
        {section.title}
      </h3>

      {/* Items List */}
      <div className="space-y-0">
        {section.items.map((item) => (
          <CVItemComponent key={item.id} item={item} type={section.type} />
        ))}
      </div>
    </section>
  )
}
