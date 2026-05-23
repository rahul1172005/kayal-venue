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
      padding: '120px 5%',
      background: '#ffffff', // Clean light mode
      color: '#1a1a1a'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
        <div style={{
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
                      style={{
                        width: '100%', height: '100%', objectFit: 'cover',
                        transition: 'transform 1s cubic-bezier(0.23, 1, 0.32, 1)',
                        transform: hovered === i ? 'scale(1.1)' : 'scale(1.02)',
                      }}
                    />

                    {/* Dynamic Overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: hovered === i 
                        ? 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)'
                        : 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)',
                      transition: 'all 0.6s ease',
                    }} />

                    {/* Lighting/Glow Effect */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: `radial-gradient(circle at 50% 120%, rgba(180, 145, 79, 0.3) 0%, transparent 60%)`,
                      opacity: hovered === i ? 1 : 0,
                      transition: 'opacity 0.8s ease',
                    }} />

                    {/* Content Overlay */}
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, width: '100%',
                      padding: '32px',
                      zIndex: 2,
                    }}>
                      <div style={{
                        transform: hovered === i ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                      }}>
                        <h4 style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          color: '#fff',
                          marginBottom: hovered === i ? '12px' : '0px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          transition: 'all 0.5s ease'
                        }}>
                          {img.title}
                          <span style={{ 
                            width: '6px', height: '6px', borderRadius: '50%', 
                            background: '#B4914F',
                            opacity: hovered === i ? 1 : 0,
                            transform: hovered === i ? 'scale(1)' : 'scale(0)',
                            transition: 'all 0.4s ease'
                          }} />
                        </h4>
                        <p style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.85rem',
                          color: 'rgba(255,255,255,0.8)',
                          lineHeight: 1.6,
                          maxWidth: '280px',
                          opacity: hovered === i ? 1 : 0,
                          transform: hovered === i ? 'translateY(0)' : 'translateY(10px)',
                          margin: 0,
                          height: hovered === i ? 'auto' : '0',
                          overflow: 'hidden',
                          transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                          pointerEvents: 'none'
                        }}>
                          {img.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* Caption */}
        <Reveal delay={0.4}>
          <div style={{
            marginTop: '60px',
            paddingTop: '30px',
            borderTop: '1px solid rgba(0,0,0,0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(0,0,0,0.4)', fontSize: '0.8rem',
              letterSpacing: '1px'
            }}>
              Kayal Venue Gallery
            </p>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic', color: '#B4914F', fontSize: '0.9rem',
            }}>
              Curated with love for your moments
            </p>
          </div>
        </Reveal>
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
          #gallery > div > div:nth-of-type(2) {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 300px !important;
          }
          #gallery > div > div:nth-of-type(2) > div {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
        @media (max-width: 600px) {
          #gallery > div > div:nth-of-type(2) {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 340px !important;
          }
        }
      `}</style>
    </section>
  )
}
