'use client'

import { useEffect, useRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import { ArtDesignItem } from '@/lib/types'

interface ProjectGridProps {
  projects: ArtDesignItem[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [columns, setColumns] = useState(3)
  const containerRef = useRef<HTMLDivElement>(null)

  // 响应式列数计算
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth
      if (width < 640) {
        setColumns(1)
      } else if (width < 1024) {
        setColumns(2)
      } else {
        setColumns(3)
      }
    }

    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  // Masonry 布局：将项目分配到各列
  const columnProjects: ArtDesignItem[][] = Array.from({ length: columns }, () => [])
  projects.forEach((project, index) => {
    columnProjects[index % columns].push(project)
  })

  return (
    <div
      ref={containerRef}
      className="grid gap-6"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {columnProjects.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col gap-6">
          {column.map((project, projectIndex) => (
            <ProjectCard
              key={project.id}
              project={project}
              priority={projectIndex < 2}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
