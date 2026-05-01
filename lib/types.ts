// ============================================
// Personal Portfolio Website - TypeScript Type Definitions
// ============================================

// --------------------------------------------
// Research Related Types
// --------------------------------------------
export interface ResearchItem {
  id: string;
  slug?: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  image: string;
  pdfUrl?: string;
  abstract?: string;
  tags?: string[];
  award?: string;
  projectLink?: string;
}

// --------------------------------------------
// Art Design Related Types
// --------------------------------------------
export interface ContentBlock {
  type: 'image' | 'video' | 'audio' | 'text' | 'quote';
  src?: string;
  alt?: string;
  caption?: string;
  content?: string;
  author?: string;
  // Video fields
  videoUrl?: string; // Full YouTube URL
  videoId?: string; // YouTube video ID (e.g., "dQw4w9WgXcQ")
}

export interface ArtDesignItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  tags?: string[];
  year?: number;
  externalUrl?: string;
  content: ContentBlock[];
  credits?: string;
  // Project video
  projectVideoUrl?: string; // YouTube URL for project showcase video
}

// --------------------------------------------
// Social Media Related Types
// --------------------------------------------
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username?: string;
}

// --------------------------------------------
// Homepage Related Types
// --------------------------------------------
export interface HomeInfo {
  name: string;
  title: string;
  statement: string;
  shortBio?: string;
}

// --------------------------------------------
// CV Related Types
// --------------------------------------------
export interface CVSection {
  type: 'education' | 'experience' | 'publication' | 'award' | 'skill' | 'custom' | 'objective' | 'hobbies' | 'news';
  title: string;
  items: CVItem[];
}

export interface CVItem {
  id: string;
  title: string;
  subtitle?: string;
  organization?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  details?: string[];
  link?: string;
}

// --------------------------------------------
// Navigation Related Types
// --------------------------------------------
export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'Art & Design', href: '/art-design' },
  { label: 'CV', href: '/cv' },
];
