import { ArtDesignItem } from '@/lib/types'

export const artDesignData: ArtDesignItem[] = [
  {
    id: 'project-suhaeng',
    slug: 'suhaeng',
    title: '수행，修行(Suhaeng, XiuXing)',
    description: 'An evolving multi-channel video work in which ceramic practice becomes a record of repetition, duration, and transformation.',
    cardDescription: 'Clay, gesture, and repetition unfold across multiple moving images.',
    coverImage: '/images/project-placeholder.svg',
    tags: ['Multi-Channel Video', 'Ceramic Practice'],
    progress: 30,
    credits: 'Concept and practice: Shumeng Zhang',
    galleryImages: [
      '/images/suhaeng/Xiuxing1.jpg',
      '/images/suhaeng/Xiuxing2-updated.jpg',
    ],
    content: [
      {
        type: 'text',
        content: '수행 (Suhaeng) is an evolving multi-channel video work grounded in ceramic practice. Repeated gestures of shaping, waiting, breaking, and beginning again become both material process and moving image.',
      },
      {
        type: 'text',
        content: 'Currently 30% complete, the project approaches practice as a form of duration: a quiet accumulation of touch, attention, failure, and change across multiple screens.',
      },
    ],
  },
  {
    id: 'project-finhertip',
    slug: 'finhertip',
    title: 'FinHERtip / BeadBand',
    description: 'From tactile beadwork to accessible music creation: a connected body of work on performance, education, and human–AI co-creation with blind and low-vision communities.',
    cardDescription: 'Accessible music interfaces shaped through inclusive co-design.',
    coverImage: '/images/artdesign-covers/finhertip-beadband.jpg',
    year: 2025,
    progress: 80,
    tags: ['Interactive Art', 'HCI', 'Accessible Music Interface', 'Co-Design', 'Human–AI Co-Creation'],
    cardTagLimit: 3,
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
    title: 'BeadBand V2.0',
    description: 'A digital music interface designed by Shumeng Zhang and presented as an invited performance at the HKUST(GZ) Interactive Music Concert.',
    cardDescription: 'A digital music interface created for interactive performance.',
    coverImage: '/images/artdesign-covers/beadband-v2.jpg',
    year: 2025,
    tags: ['Digital Music Interface', 'Performance', 'Interaction Design'],
    credits: 'Design and performance: Shumeng Zhang',
    galleryImages: Array.from(
      { length: 5 },
      (_, index) => `/images/abacus/BBPerform0${index + 1}.jpg`
    ),
    content: [
      {
        type: 'text',
        content: 'BeadBand V2.0 is a digital music interface designed by Shumeng Zhang for interactive musical performance.',
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
    cardDescription: 'A human–AI performance shaped by bodies and everyday objects.',
    coverImage: '/images/artdesign-covers/to-perform-to-live.jpg',
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
    cardDescription: 'Translating calligraphic micro-actions across expressive modalities.',
    coverImage: '/images/artdesign-covers/brushu.jpg',
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
    cardDescription: 'Collective storytelling through calligraphy, sound, and tangible interaction.',
    coverImage: '/images/artdesign-covers/narrastone.jpg',
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
    cardDescription: 'Data-driven choreography for bodies in an entangled system.',
    coverImage: '/images/artdesign-covers/entangled-ballet.jpg',
    year: 2026,
    tags: ['Data-Driven Choreography', 'Embodied Interaction', 'Performance'],
    credits: 'Shumeng Zhang, W. Mao, H. Lin, Z. Wu, and P. Hui',
    galleryImages: Array.from(
      { length: 4 },
      (_, index) => `/images/entangled-ballet/Web${index + 29}.jpg`
    ),
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
    id: 'project-nostalgia',
    slug: 'nostalgia',
    title: 'nostalgia',
    description: 'An augmented-reality encounter that lets worn objects disclose the memories, gestures, and absences they have quietly carried.',
    cardDescription: 'Old objects awaken as portals between memory and the present.',
    coverImage: '/images/project-placeholder.svg',
    tags: ['AR Development', 'Old Objects', 'Interactive Experience'],
    credits: 'Concept and development: Shumeng Zhang',
    content: [
      {
        type: 'text',
        content: 'nostalgia is an augmented-reality experience that treats old objects as quiet containers of memory. Digital traces gather around their worn surfaces, allowing the familiar to feel briefly strange, intimate, and alive.',
      },
      {
        type: 'text',
        content: 'The work explores how interaction can turn looking into remembering—inviting people to encounter the distance between an object as it exists now and the life it once held.',
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
