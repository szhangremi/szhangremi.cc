'use client'

interface VideoEmbedProps {
  videoUrl?: string
  videoId?: string
  title?: string
}

// Extract YouTube video ID from various URL formats
function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }
  return null
}

export default function VideoEmbed({ videoUrl, videoId, title = 'Video' }: VideoEmbedProps) {
  // Get video ID from URL or use provided ID directly
  let embedId = videoId

  if (!embedId && videoUrl) {
    const extractedId = extractYouTubeId(videoUrl)
    embedId = extractedId ?? undefined
  }

  if (!embedId) {
    return (
      <div className="w-full aspect-video bg-muted rounded-sm flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Video not available</p>
      </div>
    )
  }

  const embedUrl = `https://www.youtube.com/embed/${embedId}`

  return (
    <div className="w-full">
      <div className="relative w-full aspect-video bg-black rounded-sm overflow-hidden">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  )
}
