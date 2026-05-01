import Image from 'next/image'
import Link from 'next/link'
import { ArtDesignItem } from '@/lib/types'

interface ProjectCardProps {
  project: ArtDesignItem
  priority?: boolean
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Link
      href={`/art-design/${project.slug}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-sm bg-white">
        {/* Cover Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
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
          <h3 className="text-base font-medium text-foreground mb-2">
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
