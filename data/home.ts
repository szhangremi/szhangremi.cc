// ============================================
// Homepage Personal Information
// ============================================
import { HomeInfo } from '@/lib/types'

export const homeInfo: HomeInfo = {
  name: 'Zhang Shumeng',
  title: 'Researcher & Artist',
  statement: `As an interdisciplinary researcher and creator, I work at the intersection of technology and art. My practice encompasses human-computer interaction, creative coding, and interactive installations, aiming to create meaningful and inspiring experiences through the combination of design and technology.

My research interests include:
- Human-Computer Interaction and User Experience Design
- Creative Coding and Generative Art
- Interactive Installations and Immersive Experiences
- Interdisciplinary Creative Methodologies

I believe that good design should be both academically rigorous and emotionally resonant. In my practice, I constantly seek the balance between conceptual innovation and technical implementation, ensuring that my work carries deep thought while creating connections with a broader audience.`,
  shortBio: 'Interdisciplinary Researcher · Creative Coder · Interactive Artist',
}

// Homepage category links
export const homeCategories = [
  {
    label: 'Research',
    href: '/research',
    description: 'Papers and research projects',
  },
  {
    label: 'Art & Design',
    href: '/art-design',
    description: 'Art and design works',
  },
  {
    label: 'CV',
    href: '/cv',
    description: 'Curriculum vitae and resume',
  },
]
