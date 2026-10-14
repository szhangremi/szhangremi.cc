import Image from 'next/image'
import Link from 'next/link'
import { ArtDesignItem } from '@/lib/types'

interface ProjectCardProps {
  project: ArtDesignItem
  priority?: boolean
  compactGlass?: boolean
}

export default function ProjectCard({ project, priority = false, compactGlass = false }: ProjectCardProps) {
  const frameCount = project.galleryImages?.length
  const cardDescription = project.cardDescription ?? project.description

  return (
    <Link
      href={`/art-design/${project.slug}`}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4"
    >
      <article className={`overflow-hidden transition-transform duration-500 ease-out group-hover:-translate-y-1 group-focus-visible:-translate-y-1 ${
        compactGlass
          ? 'rounded-xl border border-white/80 bg-white/45 shadow-[0_12px_40px_rgba(31,38,48,0.10)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5'
          : 'rounded-sm bg-white'
      }`}>
        {/* Cover Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] group-focus-visible:scale-[1.025]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
          <div className={`absolute inset-0 transition-opacity duration-500 ${
            compactGlass
              ? 'bg-black/25 group-hover:bg-black/35 group-focus-visible:bg-black/35'
              : 'bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100'
          }`} />
          {compactGlass && (
            <h3 className="absolute inset-0 flex items-center justify-center px-6 text-center font-serif text-2xl font-medium leading-tight tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] lg:text-[1.7rem]">
              {project.title}
            </h3>
          )}
          {frameCount && (
            <span className="absolute bottom-4 right-4 translate-y-2 text-xs font-medium tracking-[0.12em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
              {frameCount} FRAMES&nbsp; →
            </span>
          )}
        </div>

        {/* Project Info */}
        <div className={compactGlass ? 'p-3.5' : 'p-4'}>
          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className={`flex flex-wrap gap-1.5 ${compactGlass ? 'mb-2' : 'mb-3'}`}>
              {project.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          {!compactGlass && (
            <h3 className="text-base font-medium text-foreground mb-2 transition-colors">
              {project.title}
            </h3>
          )}

          {/* Description */}
          <p className={`${compactGlass ? 'line-clamp-1 text-xs leading-5' : 'line-clamp-2 text-sm'} text-muted-foreground`}>
            {cardDescription}
          </p>

          {/* Reusable work-in-progress indicator */}
          {typeof project.progress === 'number' && (
            <div
              className="mt-3 grid grid-cols-[auto_minmax(2.5rem,1fr)_auto] items-center gap-2"
              aria-label={`In progress, ${project.progress}% complete`}
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-foreground/60">
                In progress
              </span>
              <span
                className="h-1 overflow-hidden rounded-full bg-black/10 dark:bg-white/15"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={project.progress}
              >
                <span
                  className="block h-full rounded-full bg-foreground/60"
                  style={{ width: `${project.progress}%` }}
                />
              </span>
              <span className="text-[10px] font-medium tabular-nums text-foreground/60">
                {project.progress}%
              </span>
            </div>
          )}

          {/* Year */}
          {!compactGlass && project.year && (
            <p className="text-xs text-muted-foreground/70 mt-3">
              {project.year}
            </p>
          )}
        </div>
      </article>
    </Link>
  )
}
