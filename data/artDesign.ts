// ============================================
// Art & Design Projects Data
// ============================================
import { ArtDesignItem } from '@/lib/types'

export const artDesignData: ArtDesignItem[] = [
  {
    id: 'project-001',
    slug: 'echoes-of-light',
    title: 'Echoes of Light',
    description: 'An interactive installation exploring the relationship between light and sound. Participants influence the projection of light and shadow through their body movements, triggering generative soundscapes to create a unique audiovisual experience.',
    coverImage: '/images/project-001-cover.svg',
    year: 2024,
    tags: ['Interactive Installation', 'Sound Art', 'Generative Art'],
    credits: 'Concept & Implementation: Zhang Shumeng | Technical Support: Tech Innovation Center',
    projectVideoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1',
    content: [
      {
        type: 'text',
        content: 'Echoes of Light is an interactive installation exploring the boundaries of perception. As visitors enter the space, their silhouettes are captured in real-time and transformed into light and shadow elements, dynamically linked with pre-recorded ambient sounds.',
      },
      {
        type: 'image',
        src: '/images/project-001-1.svg',
        alt: 'Installation overview',
        caption: 'Exhibition space overview',
      },
      {
        type: 'text',
        content: 'The installation uses depth cameras to detect visitor positions and movements. These data points are then mapped to parameters of generative sound algorithms, creating a continuous feedback loop between visual presence and auditory response.',
      },
      {
        type: 'image',
        src: '/images/project-001-2.svg',
        alt: 'Audience interaction scene',
        caption: 'Audience interacting with the installation',
      },
      {
        type: 'text',
        content: 'The work is inspired by reflection on "perceptual delay"—the subtle gap between what we see and what we hear shapes our understanding of the world. Through this piece, I hope to make audiences aware of the constructive nature of perception.',
      },
      {
        type: 'quote',
        content: 'Art is not a reproduction of reality, but an exploration of perception itself.',
        author: 'Zhang Shumeng',
      },
      {
        type: 'text',
        content: 'Technical implementation involves Max/MSP for sound synthesis, Processing for visual generation, and a custom middleware that bridges the two systems. The installation has been exhibited at multiple venues including digital art festivals and museum spaces.',
      },
    ],
  },
  {
    id: 'project-002',
    slug: 'digital-botanica',
    title: 'Digital Botanica',
    description: 'A digital art project visualizing plant growth data. By collecting real plant growth data through sensors and transforming it into abstract visual forms, it explores the boundary between nature and the digital.',
    coverImage: '/images/project-002-cover.svg',
    year: 2023,
    tags: ['Data Art', 'Bio Art', 'Visualization'],
    projectVideoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2',
    content: [
      {
        type: 'text',
        content: 'Digital Botanica is an ongoing digital art research project exploring the intersection of biological systems and computational aesthetics. Collaborating with botanists, I deployed a series of sensors in a greenhouse to continuously collect plant growth data—including light intensity, temperature fluctuations, humidity levels, growth rates, and circadian rhythms.',
      },
      {
        type: 'image',
        src: '/images/project-002-1.svg',
        alt: 'Data visualization interface',
        caption: 'Real-time data visualization interface',
      },
      {
        type: 'text',
        content: 'This data is transformed into continuously evolving visual forms through custom algorithms. Each plant has its unique "digital counterpart" that grows and breathes in virtual space, maintaining a mysterious synchronization with its real-world counterpart.',
      },
      {
        type: 'text',
        content: 'The project raises questions about authenticity in the age of digital reproduction: Is a perfectly synchronized digital copy still "nature"? What do we gain and lose when we translate organic processes into data?',
      },
      {
        type: 'image',
        src: '/images/project-002-2.svg',
        alt: 'Plant sensor array',
        caption: 'Custom sensor array monitoring plant biometrics',
      },
      {
        type: 'text',
        content: 'The visualization system was built using Three.js for real-time 3D rendering and WebSocket connections for live data streaming. Viewers can observe the digital plants responding to real-time environmental changes—drooping when the soil moisture drops, brightening when sunlight increases.',
      },
    ],
  },
  {
    id: 'project-003',
    slug: 'urban-memories',
    title: 'Urban Memories',
    description: 'A photography and interactive narrative project about urban memory. Through collecting personal stories and old photographs from urban residents, it constructs a multi-dimensional archive of city memories.',
    coverImage: '/images/project-003-cover.svg',
    year: 2023,
    tags: ['Photography', 'Narrative Design', 'Community Art'],
    projectVideoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_3',
    content: [
      {
        type: 'text',
        content: 'Urban Memories originated from my observations and reflections on urban change. Every city has countless forgotten stories that gradually disappear as old buildings are demolished and residents relocate. This project attempts to preserve these precious memories in a digital form.',
      },
      {
        type: 'image',
        src: '/images/project-003-1.svg',
        alt: 'Urban street scene',
        caption: 'Street scene photographed in 2022',
      },
      {
        type: 'text',
        content: 'During the project, I visited multiple old communities in the city, interviewed dozens of long-term residents, and collected hundreds of precious old photographs. These materials were integrated into an interactive website where users can browse, search, and even contribute their own memories.',
      },
      {
        type: 'image',
        src: '/images/project-003-2.svg',
        alt: 'Resident interviews',
        caption: 'Interview process with community residents',
      },
      {
        type: 'text',
        content: 'The archive features over 200 stories from residents spanning three generations, accompanied by photographs ranging from the 1950s to the present day. Each story is geotagged and connected to specific locations, creating a layered map of collective memory.',
      },
      {
        type: 'text',
        content: 'The interactive platform was designed to encourage participation: visitors can add their own memories, respond to others stories, and explore the neighborhood through a timeline-based navigation system.',
      },
      {
        type: 'quote',
        content: 'These walls remember what we have forgotten.',
        author: 'A participant from the project',
      },
    ],
  },
  {
    id: 'project-004',
    slug: 'rhythm-fields',
    title: 'Rhythm Fields',
    description: 'A generative music visualization project. Real-time analysis of rhythmic elements in music transforms them into flowing geometric forms, creating an immersive audiovisual experience.',
    coverImage: '/images/project-004-cover.svg',
    year: 2022,
    tags: ['Music Visualization', 'Generative Art', 'Real-time Rendering'],
    projectVideoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_4',
    content: [
      {
        type: 'text',
        content: 'Rhythm Fields represents my deep exploration of music visualization. Unlike traditional audio spectrograms, I focus on the structure of rhythm—beats, grooves, and breath—and map them to changes in geometric forms. The result is a visual language that speaks directly to the body.',
      },
      {
        type: 'image',
        src: '/images/project-004-1.svg',
        alt: 'Visualization interface',
        caption: 'Real-time visualization during a live performance',
      },
      {
        type: 'text',
        content: 'The system uses onset detection algorithms to identify rhythmic events in real-time audio streams. Each beat triggers geometric transformations—triangles rotate, circles expand, lines shift direction—creating a visual polyrhythm that mirrors the audio complexity.',
      },
      {
        type: 'text',
        content: 'The visual vocabulary was developed through extensive experimentation with different musical genres, from jazz to electronic dance music. Each genre produces distinct visual signatures while maintaining a coherent aesthetic language.',
      },
      {
        type: 'image',
        src: '/images/project-004-2.svg',
        alt: 'Performance setup',
        caption: 'Projection mapping during a live concert',
      },
      {
        type: 'text',
        content: 'The work has been performed at multiple music festivals and art exhibitions, including electronic music events and contemporary art spaces. Each performance is unique, as the live musicians performance engages in real-time dialogue with the visual system, producing irreproducible moments.',
      },
    ],
  },
  {
    id: 'project-005',
    slug: 'silent-conversations',
    title: 'Silent Conversations',
    description: 'An interactive installation exploring the possibilities of non-verbal communication. Two participants engage in "dialogue" through light and touch, with no language—only silent signal transmission.',
    coverImage: '/images/project-005-cover.svg',
    year: 2022,
    tags: ['Interactive Installation', 'Installation Art', 'Haptic Design'],
    projectVideoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_5',
    content: [
      {
        type: 'text',
        content: 'Silent Conversations invites two participants into a specially designed space. They are separated but can sense each others presence through subtle environmental cues. By adjusting light brightness and temperature, participants can send "signals" to the person across.',
      },
      {
        type: 'image',
        src: '/images/project-005-1.svg',
        alt: 'Inside the installation',
        caption: 'Interior view of the communication pods',
      },
      {
        type: 'text',
        content: 'The installation consists of two identical pods connected through a network of sensors and actuators. When one participant adjusts their light or touches a surface, the corresponding element changes for the other. This creates a private channel of expression without words.',
      },
      {
        type: 'image',
        src: '/images/project-005-2.svg',
        alt: 'Participant experience',
        caption: 'Participants experiencing the installation',
      },
      {
        type: 'text',
        content: 'The project was inspired by reflection on modern communication methods—we increasingly rely on language and text while ignoring more primitive, more direct forms of communication. Here, silence is no longer an obstacle but becomes a medium of communication.',
      },
      {
        type: 'quote',
        content: 'Sometimes the most profound connections happen without a single word.',
        author: 'Zhang Shumeng',
      },
      {
        type: 'text',
        content: 'Technical implementation includes custom hardware for light and haptic feedback, Arduino-based control systems, and Max/MSP for the communication protocol. The installation has been shown at design exhibitions and art festivals.',
      },
    ],
  },
]

// Get single project by slug
export function getProjectBySlug(slug: string): ArtDesignItem | undefined {
  return artDesignData.find((project) => project.slug === slug)
}

// Get all slugs (for static path generation)
export function getAllSlugs(): string[] {
  return artDesignData.map((project) => project.slug)
}
