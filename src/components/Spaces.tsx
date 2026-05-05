import React, { useState } from 'react'
import Reveal from './Reveal'

const spaces = [
  {
    id: 'nila',
    name: 'Kayal Nila',
    subtitle: 'Outdoor Lawn',
    desc: 'Celebrate under a canopy of stars with fairy-lit trees, sprawling green lawns, and open air grandeur. Perfect for large weddings and reception evenings.',
    img: '/kayal_nila_lawn_1777883954145.png',
    capacity: 'Up to 2000 Guests',
    area: '50,000 sq.ft',
  },
  {
    id: 'vizhi',
    name: 'Kayal Vizhi',
    subtitle: 'Elegant Banquet Hall',
    desc: 'An air-conditioned masterpiece of modern luxury. Crystal chandeliers, ivory draping, and bespoke decor create the perfect stage for your celebrations.',
    img: '/kayal_vizhi_hall_1777884002106.png',
    capacity: 'Up to 800 Guests',
    area: '18,000 sq.ft',
  },
  {
    id: 'isai',
    name: 'Kayal Isai',
    subtitle: 'Performance Space',
    desc: 'An intimate amphitheatre surrounded by bamboo groves and water features. The soul of the venue — designed for music, dance, and artistic expressions.',
    img: '/kayal_isai_space_1777884108080.png',
    capacity: 'Up to 400 Guests',
    area: '8,000 sq.ft',
  },
]

export default function Spaces() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="spaces" style={{
      padding: '120px 5%',
      background: '#fff',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{
              color: '#000000', textTransform: 'uppercase',
              letterSpacing: '4px', fontSize: '0.75rem',
              fontFamily: "'Inter', sans-serif",
              display: 'block', marginBottom: '16px',
            }}>
              Our Spaces
            </span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              color: '#000000',
            }}>
              Three Worlds. One Dream.
            </h2>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
        }}>
          {spaces.map((space, i) => (
            <Reveal key={space.id} delay={i * 0.15}>
              <div
                onMouseEnter={() => setHovered(space.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: 'relative',
                  height: '580px', // Increased height for premium feel
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transform: hovered === space.id ? 'translateY(-12px)' : 'translateY(0)',
                  boxShadow: hovered === space.id
                    ? '0 40px 80px rgba(0,0,0,0.25)'
                    : '0 15px 35px rgba(0,0,0,0.1)',
                  transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                }}
              >
                {/* Image */}
                <img
                  src={space.img}
                  alt={space.name}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    transform: hovered === space.id ? 'scale(1.08)' : 'scale(1)',
                    transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)',
                  }}
                />

                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(20, 15, 10, 0.95) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 100%)',
                  opacity: hovered === space.id ? 1 : 0.85,
                  transition: 'opacity 0.7s ease',
                }} />



                {/* Info */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, width: '100%',
                  padding: '40px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                }}>
                  <div style={{
                    transform: hovered === space.id ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}>
                    <div style={{
                      fontSize: '0.75rem',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      fontFamily: "'Inter', sans-serif",
                      color: 'rgba(255,255,255,0.8)',
                      marginBottom: '8px',
                    }}>
                      {space.subtitle}
                    </div>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic',
                      fontSize: '2.4rem', color: '#fff', marginBottom: hovered === space.id ? '16px' : '0',
                      textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                      transition: 'margin 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                    }}>
                      {space.name}
                    </h3>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateRows: hovered === space.id ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}>
                    <div style={{ 
                      overflow: 'hidden',
                      opacity: hovered === space.id ? 1 : 0,
                      transition: 'opacity 0.4s ease 0.1s',
                    }}>
                      <div style={{ paddingTop: '8px' }}>
                        <p style={{
                          fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)',
                          lineHeight: 1.7, fontFamily: "'Inter', sans-serif",
                          marginBottom: '24px',
                        }}>
                          {space.desc}
                        </p>

                        <div style={{
                          display: 'flex', gap: '30px',
                          borderTop: '1px solid rgba(255,255,255,0.2)',
                          paddingTop: '20px',
                        }}>
                          {[{ label: 'Capacity', val: space.capacity }, { label: 'Area', val: space.area }].map(item => (
                            <div key={item.label}>
                              <div style={{ fontSize: '0.65rem', color: '#8C7462', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", marginBottom: '6px', fontWeight: 600 }}>{item.label}</div>
                              <div style={{ fontSize: '1rem', color: '#fff', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{item.val}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
