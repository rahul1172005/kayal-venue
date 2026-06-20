import React, { useState } from 'react'
import Reveal from './Reveal'
import { X } from 'lucide-react'

const galleryImages = [
  {
    src: '/_TAR0360.jpg',
    title: 'The Nila Lawn',
    desc: 'Sprawling greenery under a starlit canopy.',
    colSpan: 'span 2',
    rowSpan: 'span 2'
  },
  {
    src: '/_TAR0369.jpg',
    title: 'Cinematic Vista',
    desc: 'A breathtaking aerial perspective of our oasis.',
    colSpan: 'span 2',
    rowSpan: 'span 1'
  },
  {
    src: '/image2.jpg',
    title: 'The Vizhi Hall',
    desc: 'Modern luxury meets timeless tradition.',
    colSpan: 'span 1',
    rowSpan: 'span 1'
  },
  {
    src: '/image3.jpg',
    title: 'Artful Details',
    desc: 'Every corner crafted with meticulous precision.',
    colSpan: 'span 1',
    rowSpan: 'span 1'
  },
  {
    src: '/_TAR0361.jpg',
    title: 'Ethereal Skies',
    desc: 'Dramatic clouds framing your perfect moments.',
    colSpan: 'span 2',
    rowSpan: 'span 1'
  },
  {
    src: '/_TAR0363.jpg',
    title: 'The Isai Space',
    desc: 'Where melodies echo through the soul.',
    colSpan: 'span 2',
    rowSpan: 'span 1'
  },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="gallery" style={{
      padding: '40px 5% 0px',
      background: '#ffffff', // Clean light mode
      color: '#1a1a1a'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{
              color: '#B4914F', textTransform: 'uppercase',
              letterSpacing: '4px', fontSize: '0.7rem',
              fontFamily: "'Inter', sans-serif",
              display: 'block', marginBottom: '12px',
              fontWeight: 600
            }}>
              The Collection
            </span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#1a1a1a',
              marginBottom: '20px'
            }}>
              A Glimpse Into <span style={{ fontStyle: 'italic' }}>Kayal</span>
            </h2>
          </div>
        </Reveal>

        {/* Huly-style Bento Grid */}
        <div className="bento-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: '320px',
          gap: '24px',
        }}>
          {galleryImages.map((img, i) => {
            return (
              <div key={i} style={{ 
                gridColumn: img.colSpan,
                gridRow: img.rowSpan
              }}>
                <Reveal delay={i * 0.1} style={{ height: '100%' }}>
                  <div
                    onClick={() => setLightbox(img.src)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className="bento-card"
                    style={{
                      width: '100%', height: '100%',
                      overflow: 'hidden', borderRadius: '32px',
                      cursor: 'pointer', position: 'relative',
                      background: '#fff',
                      border: '1px solid rgba(0,0,0,0.05)',
                      transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                    }}
                  >
                    {/* Background Image with Scale */}
                    <img
                      src={img.src}
                      alt={img.title}
                      loading="lazy"
                      style={{
                        width: '100%', height: '100%', objectFit: 'cover',
                        transition: 'transform 1s cubic-bezier(0.23, 1, 0.32, 1)',
                        transform: hovered === i ? 'scale(1.1)' : 'scale(1.02)',
                      }}
                    />
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* Caption Removed */}
      </div>

      {/* Lightbox */}
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
          <img
            src={lightbox}
            alt="Enlarged view"
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '95vw', maxHeight: '90vh',
              objectFit: 'contain', borderRadius: '12px',
              boxShadow: '0 0 100px rgba(180, 145, 79, 0.2)',
              cursor: 'default',
            }}
          />
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', top: '32px', right: '40px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#ffffff',
              width: '50px', height: '50px',
              borderRadius: '50%', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#B4914F'
              e.currentTarget.style.transform = 'rotate(90deg)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.transform = 'rotate(0deg)'
            }}
          >
            <X size={24} />
          </button>
        </div>
      )}

      <style>{`
        .bento-card:hover {
          border-color: rgba(180, 145, 79, 0.4) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 300px !important;
          }
          .bento-grid > div {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
        @media (max-width: 600px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 340px !important;
          }
        }
      `}</style>
    </section>
  )
}
