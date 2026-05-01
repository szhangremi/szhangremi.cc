import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import ProjectGrid from '@/components/ProjectGrid'
import { artDesignData } from '@/data/artDesign'

export const metadata: Metadata = {
  title: 'Art & Design',
  description: 'Art and design works - Interactive installations, digital art, creative coding, and more.',
}

export default function ArtDesignPage() {
  return (
    <Layout>
      <div className="container-main py-12 md:py-16">
        {/* Page Header */}
        <header className="mb-12 md:mb-16">
          <h1 className="page-title mb-4">Art & Design</h1>
          <p className="body-text text-muted-foreground max-w-2xl">
            My art and design works span interactive installations, digital art, creative coding, and more.
            Each project is an exploration of the possibilities at the intersection of technology and creativity.
          </p>
        </header>

        {/* Project Grid */}
        <section>
          <ProjectGrid projects={artDesignData} />
        </section>

        {/* Divider */}
        <hr className="divider" />

        {/* Footer Info */}
        <footer className="text-center">
          <p className="text-sm text-muted-foreground">
            {artDesignData.length} projects
          </p>
        </footer>
      </div>
    </Layout>
  )
}
