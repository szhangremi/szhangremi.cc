import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Layout from '@/components/Layout'
import MediaRenderer from '@/components/MediaRenderer'
import VideoEmbed from '@/components/VideoEmbed'
import { getProjectBySlug, getAllSlugs } from '@/data/artDesign'

interface PageProps {
  params: { slug: string }
}

// Generate static paths
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    slug,
  }))
}

// Generate page metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.coverImage ? [project.coverImage] : [],
    },
  }
}

export default function ArtDesignDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <Layout>
      <article className="container-main py-12 md:py-16">
        {/* Back Link */}
        <Link
          href="/art-design"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <header className="mb-12 md:mb-16">
          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="page-title mb-4">{project.title}</h1>

          {/* Year */}
          {project.year && (
            <p className="text-lg text-muted-foreground mb-6">{project.year}</p>
          )}

          {/* Description */}
          <p className="body-text max-w-3xl">{project.description}</p>

          {/* External Link */}
          {project.externalUrl && (
            <div className="mt-6">
              <a
                href={project.externalUrl}
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                View Project
              </a>
            </div>
          )}
        </header>

        {/* Project Content */}
        <div className="max-w-4xl">
          {project.content.map((block, index) => (
            <MediaRenderer key={index} block={block} />
          ))}
        </div>

        {/* Project Video */}
        {project.projectVideoUrl && (
          <section className="max-w-4xl mt-12">
            <h2 className="section-title mb-6">Project Video</h2>
            <VideoEmbed videoUrl={project.projectVideoUrl} title={`${project.title} - Project Video`} />
          </section>
        )}

        {/* Credits */}
        {project.credits && (
          <aside className="mt-16 pt-8 border-t border-border">
            <h2 className="sr-only">Credits</h2>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Credits: </span>
              {project.credits}
            </p>
          </aside>
        )}

        {/* Divider */}
        <hr className="divider" />

        {/* Footer Navigation */}
        <footer className="flex justify-between items-center">
          <Link
            href="/art-design"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Projects
          </Link>
        </footer>
      </article>
    </Layout>
  )
}
