import Image from 'next/image'
import Link from 'next/link'
import { ArtDesignItem } from '@/lib/types'

interface ProjectCardProps {
  project: ArtDesignItem
  priority?: boolean
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const frameCount = project.galleryImages?.length

  return (
    <Link
      href={`/art-design/${project.slug}`}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4"
    >
      <article className="overflow-hidden rounded-sm bg-white transition-transform duration-500 ease-out group-hover:-translate-y-1 group-focus-visible:-translate-y-1">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
          {frameCount && (
            <span className="absolute bottom-4 right-4 translate-y-2 text-xs font-medium tracking-[0.12em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
              {frameCount} FRAMES&nbsp; →
            </span>
          )}
        </div>

        {/* Project Info */}
        <div className="p-4">
          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="text-base font-medium text-foreground mb-2 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>

          {/* Year */}
          {project.year && (
            <p className="text-xs text-muted-foreground/70 mt-3">
              {project.year}
            </p>
          )}
        </div>
      </article>
    </Link>
  )
}
