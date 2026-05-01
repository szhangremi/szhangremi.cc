import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import CVSection from '@/components/CVSection'
import { cvData, personalInfo, cvPdfUrl } from '@/data/cv'

export const metadata: Metadata = {
  title: 'CV',
  description: 'Curriculum Vitae - Education, Experience, Publications, Awards',
}

export default function CVPage() {
  return (
    <Layout>
      <div className="container-main py-12 md:py-16">
        {/* Page Header */}
        <header className="mb-12 md:mb-16">
          <h1 className="page-title mb-4">{personalInfo.name}</h1>
          <div className="space-y-1 text-muted-foreground">
            <p className="text-lg font-medium text-foreground">{personalInfo.title}</p>
            <p className="text-sm">{personalInfo.affiliation}</p>
            <p className="text-sm">{personalInfo.address}</p>
            <p className="text-sm">
              {personalInfo.phone} · {personalInfo.email}
            </p>
          </div>

          {/* Download PDF Button */}
          <div className="mt-6">
            <a
              href={cvPdfUrl}
              download
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download PDF
            </a>
          </div>
        </header>

        {/* CV Content */}
        <div className="max-w-3xl">
          {cvData.map((section) => (
            <CVSection key={section.title} section={section} />
          ))}
        </div>

        {/* Divider */}
        <hr className="divider" />

        {/* Footer */}
        <footer className="text-center">
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </footer>
      </div>
    </Layout>
  )
}
