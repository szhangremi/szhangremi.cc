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
          <p className="body-text text-muted-foreground max-w-2xl">
            My research spans human-computer interaction, creative coding, and interactive installations.
            Exploring the intersection of technology and art to create meaningful and inspiring experiences.
          </p>
        </header>

        {/* Papers List */}
        <section>
          <div className="space-y-8">
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
