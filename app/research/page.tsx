import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import ResearchCard from '@/components/ResearchCard'
import { researchData } from '@/data/research'

export const metadata: Metadata = {
  title: 'Research',
  description: 'Research papers and academic projects - Exploring human-computer interaction, creative coding, interactive art, and more.',
}

export default function ResearchPage() {
  return (
    <Layout>
      <div className="container-main py-12 md:py-16">
        {/* Page Header */}
        <header className="mb-12 md:mb-16">
          <h1 className="page-title mb-4">Research</h1>
          <p className="body-text w-full text-muted-foreground">
            Publications spanning embodied interaction, mixed reality, accessible computing,
            human–computer interaction, and music technology.
          </p>
        </header>

        {/* Papers List */}
        <section>
          <p className="text-sm text-muted-foreground mb-6">
            * Authors share the same contribution.
          </p>
          <div className="space-y-6">
            {researchData.map((item) => (
              <ResearchCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Divider */}
        <hr className="divider" />

        {/* Footer Info */}
        <footer className="text-center">
          <p className="text-sm text-muted-foreground">
            {researchData.length} publications
          </p>
        </footer>
      </div>
    </Layout>
  )
}
