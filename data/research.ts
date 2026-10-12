import { ResearchItem } from '@/lib/types'
import { publications } from '@/data/publications'

export const researchData: ResearchItem[] = publications

export const researchByYear = researchData.reduce((acc, item) => {
  const year = item.year.toString()
  if (!acc[year]) {
    acc[year] = []
  }
  acc[year].push(item)
  return acc
}, {} as Record<string, ResearchItem[]>)

export const years = Object.keys(researchByYear).sort((a, b) => Number(b) - Number(a))
