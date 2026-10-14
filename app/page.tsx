import type { Metadata } from 'next'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { homeInfo } from '@/data/home'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Interdisciplinary researcher and creator - Portfolio and academic showcase',
}

export default function HomePage() {
  return (
    <Layout>
      <div className="container-main py-12 md:py-20">
        {/* Hero Section */}
        <section>
          {/* Bio + Portrait */}
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_24rem]">
            <div>
              {/* Name and Title */}
              <header className="mb-12 md:mb-16">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-2">
                  {homeInfo.name}
                </h1>
                <p className="mb-3 whitespace-pre-wrap text-sm tracking-wide text-muted-foreground md:text-base">
                  {homeInfo.alternateName}
                </p>
                <p className="text-lg md:text-xl text-muted-foreground">
                  {homeInfo.title}
                </p>
              </header>

              {/* Artist Statement */}
              <h2 className="sr-only">Artist Statement</h2>
              <div className="prose prose-lg max-w-none">
                {homeInfo.statement.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(line => line.startsWith('- '))
                    return (
                      <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                        {items.map((item, itemIndex) => (
                          <li key={itemIndex} className="body-text">
                            {item.replace('- ', '')}
                          </li>
                        ))}
                      </ul>
                    )
                  }
                  return (
                    <p key={index} className="body-text mb-4">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </div>

            {/* Portrait spans from the name to the end of the bio on desktop. */}
            <div className="relative hidden min-h-full overflow-hidden rounded-sm bg-muted lg:block">
              <Image
                src="/images/portrait.jpg"
                alt="Portrait of Shumeng Zhang"
                fill
                priority
                className="object-cover object-center"
                sizes="(min-width: 1280px) 384px, (min-width: 1024px) 320px, 0px"
              />
            </div>
          </div>
        </section>

      </div>
    </Layout>
  )
}
