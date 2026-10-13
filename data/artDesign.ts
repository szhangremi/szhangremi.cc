import { ArtDesignItem } from '@/lib/types'

const placeholderCover = '/images/project-placeholder.svg'

export const artDesignData: ArtDesignItem[] = [
  {
    id: 'project-finhertip',
    slug: 'finhertip',
    title: 'FinHERtip / BeadBand',
    description: 'From tactile beadwork to accessible music creation: a connected body of work on performance, education, and human–AI co-creation with blind and low-vision communities.',
    coverImage: '/images/finhertip-beadband/Web2.jpg',
    year: 2025,
    tags: ['Accessible Music', 'Co-Design', 'Human–AI Co-Creation'],
    credits: 'Shumeng Zhang and collaborators across the FinHERtip and BeadBand studies',
    galleryImages: Array.from(
      { length: 11 },
      (_, index) => `/images/finhertip-beadband/Web${index + 1}.jpg`
    ),
    content: [
      {
        type: 'text',
        content: 'FinHERtip and BeadBand form a continuous exploration of beadwork as an accessible musical interface: from embodied performance and human–AI co-creation to music learning in schools and cross-cultural studies.',
      },
      {
        type: 'text',
        content: 'The work was developed through co-design with blind and low-vision performers, students, teachers, and community partners in China and Italy.',
      },
    ],
  },
  {
    id: 'project-abacus',
    slug: 'abacus',
    title: 'Abacus',
    description: 'A digital music interface designed by Shumeng Zhang and presented as an invited performance at the HKUST(GZ) Interactive Music Concert.',
    coverImage: placeholderCover,
    year: 2025,
    tags: ['Digital Music Interface', 'Performance', 'Interaction Design'],
    credits: 'Design and performance: Shumeng Zhang',
    content: [
      {
        type: 'text',
        content: 'Abacus is a digital music interface designed by Shumeng Zhang for interactive musical performance.',
      },
      {
        type: 'text',
        content: 'The project was presented as an invited performance at the Interactive Music Concert sponsored by HKUST(GZ) in May 2025.',
      },
    ],
  },
  {
    id: 'project-to-perform-to-live',
    slug: 'to-perform-to-live',
    title: 'To Perform / To Live',
    description: 'A human–AI co-created embodied performance project connecting digital musical instruments, everyday objects, feminism, and decolonization.',
    coverImage: '/images/to-perform-to-live/Web12.jpg',
    year: 2026,
    tags: ['Digital Music Instruments', 'Feminism', 'Human–AI Co-Creation'],
    credits: 'Shumeng Zhang, S. Lin, T. Liu, M. Fan, and R. Masu',
    galleryImages: Array.from(
      { length: 8 },
      (_, index) => `/images/to-perform-to-live/Web${index + 12}.jpg`
    ),
    content: [
      {
        type: 'text',
        content: 'To Perform / To Live examines digital musical instruments through feminism and decolonization, using human–AI co-created embodied experiences of daily objects as a basis for musical expression and performance.',
      },
      {
        type: 'text',
        content: 'The work was published in Proceedings of the ACM on Computer Graphics and Interactive Techniques and presented at SIGGRAPH 2026.',
      },
    ],
  },
  {
    id: 'project-brushu',
    slug: 'brushu',
    title: 'BruSHŪ',
    description: 'A cross-modal interaction project translating implicit micro-actions in Chinese calligraphy into another expressive modality.',
    coverImage: '/images/brushu/Web20.jpg',
    year: 2026,
    tags: ['Chinese Calligraphy', 'Cross-Modal Interaction', 'Embodied Interaction'],
    credits: 'T. Liu, Shumeng Zhang, and N. Merendino',
    galleryImages: Array.from(
      { length: 5 },
      (_, index) => `/images/brushu/Web${index + 20}.jpg`
    ),
    content: [
      {
        type: 'text',
        content: 'BruSHŪ investigates the cross-modal translation of implicit micro-actions embedded in the embodied practice of Chinese calligraphy.',
      },
      {
        type: 'text',
        content: 'The work was published in Proceedings of the ACM on Computer Graphics and Interactive Techniques and presented at SIGGRAPH 2026.',
      },
    ],
  },
  {
    id: 'project-narrastone',
    slug: 'narrastone',
    title: 'Narrastone',
    description: 'An interactive installation that reimagines stone inscription as a living interface for collective storytelling through generative calligraphy, sound, and tangible interaction.',
    coverImage: '/images/narrastone/Web25.jpg',
    tags: ['Sonic Art', 'Tangible Music Interface', 'Cultural Heritage'],
    galleryImages: Array.from(
      { length: 4 },
      (_, index) => `/images/narrastone/Web${index + 25}.jpg`
    ),
    content: [
      {
        type: 'text',
        content: 'Narrastone uses a twistable cube inspired by Chinese inscription culture to generate characters, shared narratives, projected calligraphic traces, and responsive sound.',
      },
    ],
  },
  {
    id: 'project-entangled-ballet',
    slug: 'entangled-ballet',
    title: 'Entangled Ballet',
    description: 'A data-driven choreography project exploring embodied entanglement through performance and visual communication.',
    coverImage: placeholderCover,
    year: 2026,
    tags: ['Data-Driven Choreography', 'Embodied Interaction', 'Performance'],
    credits: 'Shumeng Zhang, W. Mao, H. Lin, Z. Wu, and P. Hui',
    content: [
      {
        type: 'text',
        content: 'Entangled Ballet is a data-driven choreography of embodied entanglement, bringing bodily performance and data into a shared expressive system.',
      },
      {
        type: 'text',
        content: 'The corresponding paper is to appear in the Proceedings of the 19th International Symposium on Visual Information Communication and Interaction in 2026.',
      },
    ],
  },
  {
    id: 'project-interecon',
    slug: 'interecon',
    title: 'InteRecon',
    description: 'A mixed-reality research project that reconstructs the interactivity of personally memorable objects.',
    coverImage: placeholderCover,
    year: 2025,
    tags: ['Mixed Reality', 'Personal Objects', 'Interaction Reconstruction'],
    externalUrl: 'https://news.mit.edu/2025/interecon-brings-personal-items-to-mixed-reality-0407',
    credits: 'Z. Li, J. Li, Z. Xiong, Shumeng Zhang, F. Faruqi, S. Mueller, C. Liang, X. Ma, and M. Fan',
    content: [
      {
        type: 'text',
        content: 'InteRecon explores how the interactivity of personal memorable items can be reconstructed in mixed reality.',
      },
      {
        type: 'text',
        content: 'The work was published at CHI 2025 and was featured by MIT News in April 2025.',
      },
    ],
  },
  {
    id: 'project-odorv-art',
    slug: 'odorv-art',
    title: 'OdorV-Art',
    description: 'An initial exploration of olfactory intervention for communicating and appreciating artwork style information in a virtual museum.',
    coverImage: placeholderCover,
    year: 2023,
    tags: ['Olfactory Interaction', 'Virtual Museum', 'Art Appreciation'],
    credits: 'Shumeng Zhang, Z. Wang, Y. Zhou, H. Cui, S. Fu, Z. Wang, and M. Fan',
    content: [
      {
        type: 'text',
        content: 'OdorV-Art explores the use of olfactory intervention to support the appreciation of style information in artworks presented in a virtual museum.',
      },
      {
        type: 'text',
        content: 'The work was published in the Proceedings of the 16th International Symposium on Visual Information Communication and Interaction in 2023.',
      },
    ],
  },
  {
    id: 'project-write-on-downtown',
    slug: 'write-on-downtown',
    title: 'Write On Downtown, Vol. 13',
    description: 'Cover design, illustration, and editorial layout for a magazine published by Arizona State University and Changing Hands Bookstore.',
    coverImage: placeholderCover,
    year: 2019,
    tags: ['Editorial Design', 'Illustration', 'Graphic Design'],
    externalUrl: 'https://news.asu.edu/20190423-arizona-impact-keep-writing-downtown-phoenix',
    credits: 'Graphic design: Shumeng Zhang',
    content: [
      {
        type: 'text',
        content: 'For Write On Downtown, Vol. 13, Shumeng Zhang was responsible for the cover design, illustration, and layout. The magazine was published by Arizona State University and Changing Hands Bookstore.',
      },
      {
        type: 'text',
        content: 'The project was featured by ASU News in April 2019.',
      },
    ],
  },
  {
    id: 'project-arizona-billboard',
    slug: 'arizona-billboard-public-service-campaign',
    title: 'Arizona Billboard Public Service Campaign',
    description: 'A public-service graphic design campaign sponsored by Clear Channel Outdoor, Inc.',
    coverImage: placeholderCover,
    year: 2018,
    tags: ['Graphic Design', 'Public Service', 'Leadership'],
    credits: 'Graphic design team led by Shumeng Zhang',
    content: [
      {
        type: 'text',
        content: 'Shumeng Zhang led a graphic design team for an Arizona public-service billboard campaign sponsored by Clear Channel Outdoor, Inc. in December 2018.',
      },
    ],
  },
]

export function getProjectBySlug(slug: string): ArtDesignItem | undefined {
  return artDesignData.find((project) => project.slug === slug)
}

export function getAllSlugs(): string[] {
  return artDesignData.map((project) => project.slug)
}
