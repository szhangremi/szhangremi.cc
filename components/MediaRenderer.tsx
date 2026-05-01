import Image from 'next/image'
import { ContentBlock } from '@/lib/types'

interface MediaRendererProps {
  block: ContentBlock
}

export default function MediaRenderer({ block }: MediaRendererProps) {
  switch (block.type) {
    case 'image':
      return (
        <figure className="my-8 -mx-4 md:-mx-8 lg:-mx-12 xl:-mx-16">
          <div className="relative w-full overflow-hidden rounded-sm bg-muted">
            <Image
              src={block.src || ''}
              alt={block.alt || ''}
              width={1920}
              height={1080}
              className="w-full h-auto"
              sizes="100vw"
              priority={false}
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-sm text-muted-foreground text-center px-4 md:px-8 lg:px-12 xl:px-16">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )

    case 'video':
      return (
        <figure className="my-8">
          <div className="relative w-full overflow-hidden rounded-sm bg-black aspect-video">
            <video
              src={block.src}
              controls
              className="w-full h-full object-contain"
              preload="metadata"
            >
              您的浏览器不支持视频播放。
            </video>
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-sm text-muted-foreground text-center">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )

    case 'audio':
      return (
        <figure className="my-8">
          <div className="w-full p-6 bg-muted rounded-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-foreground rounded-full">
                <svg
                  className="w-6 h-6 text-background"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  {block.caption || '音频文件'}
                </p>
              </div>
            </div>
            <audio
              src={block.src}
              controls
              className="w-full mt-4"
              preload="metadata"
            >
              您的浏览器不支持音频播放。
            </audio>
          </div>
        </figure>
      )

    case 'text':
      return (
        <div className="my-6 body-text">
          <p className="whitespace-pre-wrap">{block.content}</p>
        </div>
      )

    case 'quote':
      return (
        <blockquote className="my-8 pl-6 border-l-2 border-foreground/20">
          <p className="text-lg md:text-xl font-serif italic text-foreground/90">
            {block.content}
          </p>
          {block.author && (
            <cite className="block mt-3 text-sm text-muted-foreground not-italic">
              — {block.author}
            </cite>
          )}
        </blockquote>
      )

    default:
      return null
  }
}
