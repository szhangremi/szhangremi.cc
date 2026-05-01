// ============================================
// 研究论文数据
// ============================================
import { ResearchItem } from '@/lib/types'

export const researchData: ResearchItem[] = [
  {
    id: 'paper-001',
    title: 'Interactive Music Visualization: A Multimodal Approach to Sound Art',
    authors: ['Zhang Shumeng', 'Wei Chen', 'Lin Hua'],
    venue: 'ACM CHI Conference on Human Factors in Computing Systems',
    year: 2024,
    image: '/images/research-placeholder.svg',
    pdfUrl: '/files/sample-paper.pdf',
    abstract: 'This paper presents a novel approach to interactive music visualization that combines audio analysis with real-time graphics rendering. We introduce a framework that enables artists to create dynamic visual representations of music without extensive programming knowledge.',
    tags: ['Music Visualization', 'Creative Coding', 'Human-Computer Interaction'],
    award: 'Best Paper Honorable Mention',
  },
  {
    id: 'paper-002',
    title: 'Embodied Interaction in Immersive Art Installations',
    authors: ['Zhang Shumeng', 'Maria Garcia'],
    venue: 'Leonardo - The Journal of the International Society for Arts, Sciences and Technology',
    year: 2024,
    image: '/images/research-placeholder.svg',
    abstract: 'We explore how embodied interaction design principles can enhance viewer engagement in immersive art installations. Through case studies and user research, we identify key factors that contribute to meaningful embodied experiences.',
    tags: ['Immersive Art', 'Embodied Cognition', 'Installation Art'],
  },
  {
    id: 'paper-003',
    title: 'Generative Art Systems: Balancing Control and Autonomy',
    authors: ['Zhang Shumeng'],
    venue: 'International Conference on Computational Creativity',
    year: 2023,
    image: '/images/research-placeholder.svg',
    pdfUrl: '/files/sample-paper.pdf',
    abstract: 'This research examines the relationship between artist control and system autonomy in generative art creation. We propose a framework for designing generative systems that maintain artist intent while allowing for emergent outcomes.',
    tags: ['Generative Art', 'Creative AI', 'Computational Creativity'],
  },
  {
    id: 'paper-004',
    title: 'Tangible Interfaces for Musical Expression: Design Guidelines',
    authors: ['Zhang Shumeng', 'Jun Li', 'Sarah Kim'],
    venue: 'ACM Transactions on Computer-Human Interaction',
    year: 2023,
    image: '/images/research-placeholder.svg',
    projectLink: 'https://example.com/tangible-music',
    abstract: 'We present a set of design guidelines for creating tangible interfaces that support natural musical expression. Based on a systematic review of existing systems and expert interviews, our guidelines address physical form, interaction modalities, and feedback mechanisms.',
    tags: ['Tangible Interaction', 'Musical Instruments', 'Physical Computing'],
  },
  {
    id: 'paper-005',
    title: 'Data-Driven Storytelling in Interactive Exhibits',
    authors: ['Zhang Shumeng', 'Chen Wei'],
    venue: 'Museums and the Web Conference',
    year: 2022,
    image: '/images/research-placeholder.svg',
    abstract: 'This paper investigates how data visualization techniques can enhance storytelling in museum exhibits. We present case studies from three major science museums and discuss the challenges and opportunities of data-driven narrative design.',
    tags: ['Data Visualization', 'Museums', 'Narrative Design'],
  },
  {
    id: 'paper-006',
    title: 'Accessibility in Digital Art: A Framework for Inclusive Design',
    authors: ['Zhang Shumeng'],
    venue: 'ACM SIGACCESS Computing and Accessibility',
    year: 2022,
    image: '/images/research-placeholder.svg',
    abstract: 'We propose a comprehensive framework for making digital art accessible to people with diverse abilities. Our framework addresses sensory, cognitive, and physical accessibility while maintaining artistic integrity.',
    tags: ['Accessibility', 'Inclusive Design', 'Digital Art'],
  },
  {
    id: 'paper-007',
    title: 'The Role of Sound in Augmented Reality Experiences',
    authors: ['Zhang Shumeng', 'Liu Yang', 'Emily Brown'],
    venue: 'IEEE Symposium on Mixed and Augmented Reality',
    year: 2021,
    image: '/images/research-placeholder.svg',
    abstract: 'This research investigates the role of spatial audio in creating compelling augmented reality experiences. Through user studies, we demonstrate how carefully designed soundscapes can significantly enhance presence and engagement.',
    tags: ['Augmented Reality', 'Spatial Audio', 'Immersive Experience'],
  },
  {
    id: 'paper-008',
    title: 'Prototyping Tools for Physical Computing: A Comparative Study',
    authors: ['Zhang Shumeng', 'David Lee'],
    venue: 'ACM DIS Conference on Designing Interactive Systems',
    year: 2021,
    image: '/images/research-placeholder.svg',
    abstract: 'We conduct a comparative study of popular prototyping tools for physical computing projects. Our analysis covers tool capabilities, learning curves, and suitability for different project types and user skill levels.',
    tags: ['Physical Computing', 'Prototyping', 'Tools for Design'],
  },
]

// 按年份分组
export const researchByYear = researchData.reduce((acc, item) => {
  const year = item.year.toString()
  if (!acc[year]) {
    acc[year] = []
  }
  acc[year].push(item)
  return acc
}, {} as Record<string, ResearchItem[]>)

// 获取所有年份（降序）
export const years = Object.keys(researchByYear).sort((a, b) => Number(b) - Number(a))
