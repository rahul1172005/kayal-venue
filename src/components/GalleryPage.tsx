import React, { useState, useRef } from 'react'
import Reveal from './Reveal'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryPageProps {
  navigate: (path: string) => void
}

interface GalleryItem {
  type: 'image' | 'video'
  src: string
}

const vizhiItems: GalleryItem[] = [
  { type: 'image', src: '/Kayal Vizhi ( Hall )/WhatsApp Image 2026-06-10 at 4.28.33 PM (1).jpeg' },
  { type: 'image', src: '/Kayal Vizhi ( Hall )/WhatsApp Image 2026-06-10 at 4.28.33 PM (2).jpeg' },
  { type: 'image', src: '/Kayal Vizhi ( Hall )/WhatsApp Image 2026-06-10 at 4.28.33 PM.jpeg' },
  { type: 'image', src: '/Kayal Vizhi ( Hall )/WhatsApp Image 2026-06-10 at 4.28.34 PM (1).jpeg' },
  { type: 'image', src: '/Kayal Vizhi ( Hall )/WhatsApp Image 2026-06-10 at 4.28.34 PM (2).jpeg' },
  { type: 'image', src: '/Kayal Vizhi ( Hall )/WhatsApp Image 2026-06-10 at 4.28.34 PM.jpeg' },
  { type: 'image', src: '/Kayal Vizhi ( Hall )/WhatsApp Image 2026-06-10 at 4.28.35 PM (1).jpeg' },
  { type: 'image', src: '/Kayal Vizhi ( Hall )/WhatsApp Image 2026-06-10 at 4.28.35 PM.jpeg' },
]

const birthdayItems: GalleryItem[] = [
  { type: 'image', src: '/Birthday/WhatsApp Image 2026-06-10 at 4.29.23 PM (1).jpeg' },
  { type: 'image', src: '/Birthday/WhatsApp Image 2026-06-10 at 4.29.23 PM.jpeg' },
  { type: 'image', src: '/Birthday/WhatsApp Image 2026-06-10 at 4.29.24 PM (1).jpeg' },
  { type: 'image', src: '/Birthday/WhatsApp Image 2026-06-10 at 4.29.24 PM.jpeg' },
  { type: 'image', src: '/Birthday/WhatsApp Image 2026-06-10 at 4.29.25 PM.jpeg' },
  { type: 'image', src: '/Birthday/WhatsApp Image 2026-06-10 at 4.29.26 PM (1).jpeg' },
  { type: 'image', src: '/Birthday/WhatsApp Image 2026-06-10 at 4.29.26 PM.jpeg' },
  { type: 'image', src: '/Birthday/WhatsApp Image 2026-06-10 at 4.29.27 PM (1).jpeg' },
  { type: 'image', src: '/Birthday/WhatsApp Image 2026-06-10 at 4.29.27 PM.jpeg' },
  { type: 'image', src: '/Birthday/WhatsApp Image 2026-06-10 at 4.29.28 PM (1).jpeg' },
  { type: 'image', src: '/Birthday/WhatsApp Image 2026-06-10 at 4.29.28 PM.jpeg' },
  { type: 'image', src: '/Birthday/WhatsApp Image 2026-06-10 at 4.29.29 PM (1).jpeg' },
  { type: 'image', src: '/Birthday/WhatsApp Image 2026-06-10 at 4.29.29 PM (2).jpeg' },
  { type: 'image', src: '/Birthday/WhatsApp Image 2026-06-10 at 4.29.29 PM.jpeg' },
  { type: 'image', src: '/Birthday/WhatsApp Image 2026-06-10 at 4.29.30 PM.jpeg' },
  { type: 'image', src: '/Birthday/WhatsApp Image 2026-06-10 at 4.29.31 PM.jpeg' },
  { type: 'video', src: '/Birthday/WhatsApp Video 2026-06-10 at 4.29.31 PM.mp4' },
  { type: 'video', src: '/Birthday/WhatsApp Video 2026-06-10 at 4.29.32 PM.mp4' },
]

const nilaItems: GalleryItem[] = [
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.00 PM.jpeg' },
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.01 PM (1).jpeg' },
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.01 PM (2).jpeg' },
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.01 PM (3).jpeg' },
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.01 PM (4).jpeg' },
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.01 PM (5).jpeg' },
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.01 PM (6).jpeg' },
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.01 PM (7).jpeg' },
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.01 PM (8).jpeg' },
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.01 PM (9).jpeg' },
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.01 PM (10).jpeg' },
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.01 PM (11).jpeg' },
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.01 PM (12).jpeg' },
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.01 PM (13).jpeg' },
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.01 PM (14).jpeg' },
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.01 PM (15).jpeg' },
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.01 PM (16).jpeg' },
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.01 PM (17).jpeg' },
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.01 PM (18).jpeg' },
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.01 PM (19).jpeg' },
  { type: 'image', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Image 2026-06-10 at 1.58.01 PM.jpeg' },
  { type: 'video', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Video 2026-06-10 at 1.58.00 PM.mp4' },
  { type: 'video', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Video 2026-06-10 at 1.58.01 PM (1).mp4' },
  { type: 'video', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Video 2026-06-10 at 1.58.01 PM (2).mp4' },
  { type: 'video', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Video 2026-06-10 at 1.58.01 PM (3).mp4' },
  { type: 'video', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Video 2026-06-10 at 1.58.01 PM (4).mp4' },
  { type: 'video', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Video 2026-06-10 at 1.58.01 PM (5).mp4' },
  { type: 'video', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Video 2026-06-10 at 1.58.01 PM (6).mp4' },
  { type: 'video', src: '/Kayal Nila ( Lawn - Open space )/WhatsApp Video 2026-06-10 at 1.58.01 PM.mp4' },
]

interface SliderProps {
  title: string
  items: GalleryItem[]
  onItemClick: (item: GalleryItem) => void
}

function GallerySlider({ title, items, onItemClick }: SliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current
      const offset = direction === 'left' ? -clientWidth * 0.8 : clientWidth * 0.8
      containerRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div style={{ marginBottom: '50px', position: 'relative' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
        padding: '0 10px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
            fontStyle: 'italic',
            color: '#1a1a1a',
            fontWeight: 400,
            margin: 0,
            lineHeight: 1.2
          }}>
            {title}
          </h3>
          <div style={{ width: '55px', height: '2px', background: '#B4914F', marginTop: '4px' }} />
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={() => scroll('left')}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '1px solid #B4914F',
              background: 'transparent',
              color: '#B4914F',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              outline: 'none'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#B4914F'
              e.currentTarget.style.color = '#ffffff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#B4914F'
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '1px solid #B4914F',
              background: 'transparent',
              color: '#B4914F',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              outline: 'none'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#B4914F'
              e.currentTarget.style.color = '#ffffff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#B4914F'
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          paddingBottom: '20px',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        className="gallery-scroll-container"
      >
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => onItemClick(item)}
            className="gallery-slide-card"
            style={{
              flex: '0 0 auto',
              width: '400px',
              height: '280px',
              borderRadius: '24px',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.02)',
              transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={`${title} slide ${index}`}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            ) : (
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <video
                  src={item.src}
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#B4914F',
                    fontSize: '1.2rem',
                    paddingLeft: '4px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }}>
                    ▶
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function GalleryPage({ navigate }: GalleryPageProps) {
  const brandGold = '#B4914F'
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)

  return (
    <div style={{ background: '#ffffff', color: '#000000', paddingTop: '80px' }}>
      {/* Subpage Hero */}
      <section style={{
        position: 'relative',
        height: '45vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        background: '#1a1a1a',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('/scrroll.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.45,
        }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '0 20px' }}>
          <Reveal>
            <span style={{
              color: brandGold,
              textTransform: 'uppercase',
              letterSpacing: '6px',
              fontSize: '0.85rem',
              fontFamily: "'Inter', sans-serif",
              display: 'block',
              marginBottom: '20px',
            }}>
              The Collection
            </span>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(3rem, 7vw, 5rem)',
              color: '#ffffff',
              margin: '0 0 24px',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '1px',
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
            }}>
              A Glimpse Into Kayal
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <div style={{ width: '80px', height: '2px', background: brandGold, margin: '0 auto' }} />
          </Reveal>
        </div>
      </section>

      {/* Categories Sliders Section */}
      <section style={{ padding: '60px 5% 40px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <Reveal delay={0.1}>
            <GallerySlider 
              title="Kayal Vizhi (indoor space)" 
              items={vizhiItems} 
              onItemClick={(item) => setLightbox(item)} 
            />
          </Reveal>

          <Reveal delay={0.2}>
            <GallerySlider 
              title="Birthday events" 
              items={birthdayItems} 
              onItemClick={(item) => setLightbox(item)} 
            />
          </Reveal>

          <Reveal delay={0.3}>
            <GallerySlider 
              title="Kayal Nila (open door space)" 
              items={nilaItems} 
              onItemClick={(item) => setLightbox(item)} 
            />
          </Reveal>

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 3000,
            background: 'rgba(0,0,0,0.95)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '40px', cursor: 'zoom-out',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div onClick={e => e.stopPropagation()} style={{ position: 'relative' }}>
            {lightbox.type === 'image' ? (
              <img
                src={lightbox.src}
                alt="Enlarged view"
                style={{
                  maxWidth: '95vw', maxHeight: '90vh',
                  objectFit: 'contain', borderRadius: '12px',
                  boxShadow: '0 0 100px rgba(180, 145, 79, 0.2)',
                  cursor: 'default',
                }}
              />
            ) : (
              <video
                src={lightbox.src}
                controls
                autoPlay
                style={{
                  maxWidth: '95vw', maxHeight: '90vh',
                  borderRadius: '12px',
                  boxShadow: '0 0 100px rgba(180, 145, 79, 0.2)',
                  background: '#000000'
                }}
              />
            )}
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute', top: '-60px', right: '0px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#ffffff',
                width: '44px', height: '44px',
                borderRadius: '50%', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = brandGold
                e.currentTarget.style.transform = 'rotate(90deg)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.transform = 'rotate(0deg)'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Scrollbar hiding and mobile card styles */}
      <style>{`
        .gallery-scroll-container::-webkit-scrollbar {
          display: none !important;
        }
        @media (max-width: 600px) {
          .gallery-slide-card {
            width: 290px !important;
            height: 200px !important;
          }
        }
      `}</style>
    </div>
  )
}
