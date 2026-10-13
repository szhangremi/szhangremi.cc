'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ArtDesignItem } from '@/lib/types'

interface HorizontalProjectGalleryProps {
  project: ArtDesignItem
}

export default function HorizontalProjectGallery({ project }: HorizontalProjectGalleryProps) {
  const images = project.galleryImages ?? []
  const railRef = useRef<HTMLDivElement>(null)
  const frameRefs = useRef<Array<HTMLElement | null>>([])
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 })
  const [activeIndex, setActiveIndex] = useState(0)

  const updatePosition = useCallback(() => {
    const rail = railRef.current
    if (!rail) return

    const center = rail.scrollLeft + rail.clientWidth / 2
    let closestIndex = 0
    let closestDistance = Number.POSITIVE_INFINITY

    frameRefs.current.forEach((frame, index) => {
      if (!frame) return
      const frameCenter = frame.offsetLeft + frame.offsetWidth / 2
      const distance = Math.abs(center - frameCenter)
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    setActiveIndex(closestIndex)
  }, [])

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return

    let animationFrame = 0
    const onScroll = () => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(updatePosition)
    }
    const onWheel = (event: WheelEvent) => {
      const movement = Math.abs(event.deltaY) > Math.abs(event.deltaX)
        ? event.deltaY
        : event.deltaX
      if (movement === 0) return
      event.preventDefault()
      rail.scrollLeft += movement
    }

    rail.addEventListener('scroll', onScroll, { passive: true })
    rail.addEventListener('wheel', onWheel, { passive: false })
    updatePosition()

    return () => {
      cancelAnimationFrame(animationFrame)
      rail.removeEventListener('scroll', onScroll)
      rail.removeEventListener('wheel', onWheel)
    }
  }, [updatePosition])

  const goToFrame = useCallback((index: number) => {
    const boundedIndex = Math.max(0, Math.min(images.length - 1, index))
    frameRefs.current[boundedIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }, [images.length])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') goToFrame(activeIndex + 1)
      if (event.key === 'ArrowLeft') goToFrame(activeIndex - 1)
      if (event.key === 'Home') goToFrame(0)
      if (event.key === 'End') goToFrame(images.length - 1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex, goToFrame, images.length])

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') return
    const rail = railRef.current
    if (!rail) return
    dragRef.current = { active: true, startX: event.clientX, scrollLeft: rail.scrollLeft }
    rail.setPointerCapture(event.pointerId)
    rail.classList.add('is-dragging')
  }

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rail = railRef.current
    if (!rail || !dragRef.current.active) return
    rail.scrollLeft = dragRef.current.scrollLeft - (event.clientX - dragRef.current.startX)
  }

  const stopDragging = (event: React.PointerEvent<HTMLDivElement>) => {
    const rail = railRef.current
    if (!rail || !dragRef.current.active) return
    dragRef.current.active = false
    if (rail.hasPointerCapture(event.pointerId)) rail.releasePointerCapture(event.pointerId)
    rail.classList.remove('is-dragging')
  }

  return (
    <section className="project-gallery" aria-label={`${project.title} project gallery`}>
      <header className="project-gallery__header">
        <Link href="/art-design" className="project-gallery__back" aria-label="Back to Art and Design">
          <span aria-hidden="true">←</span>
          <span>Art &amp; Design</span>
        </Link>

        <div className="project-gallery__identity">
          <h1>{project.title}</h1>
        </div>

        <div className="project-gallery__counter" aria-live="polite">
          <span>{String(activeIndex + 1).padStart(2, '0')}</span>
          <span className="project-gallery__counter-divider">/</span>
          <span>{String(images.length).padStart(2, '0')}</span>
        </div>
      </header>

      <div
        ref={railRef}
        className="project-gallery__rail hide-scrollbar"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
      >
        {images.map((src, index) => (
          <figure
            key={src}
            ref={(element) => { frameRefs.current[index] = element }}
            className="project-gallery__frame"
          >
            <div className="project-gallery__image-wrap">
              <Image
                src={src}
                alt={`${project.title}, frame ${index + 1} of ${images.length}`}
                width={index === 0 ? 3795 : 1920}
                height={index === 0 ? 1191 : 1080}
                className="project-gallery__image"
                sizes="(max-width: 768px) 92vw, 86vw"
                priority={index < 2}
                draggable={false}
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  )
}
