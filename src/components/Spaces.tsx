import React, { useState } from 'react'
import Reveal from './Reveal'
import { Play, ChevronLeft, ChevronRight, X } from 'lucide-react'

const videoTestimonials = [
  {
    id: 1,
    url: 'https://assets.mixkit.co/videos/preview/mixkit-loving-couple-during-their-outdoor-wedding-43285-large.mp4',
    title: 'Nila Lawn Reception',
    couple: 'Ananya & Gautham',
  },
  {
    id: 2,
    url: 'https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-walking-in-a-garden-39908-large.mp4',
    title: 'Garden Vows',
    couple: 'Priyanka & Rahul',
  },
  {
    id: 3,
    url: 'https://assets.mixkit.co/videos/preview/mixkit-newlyweds-walk-holding-hands-in-a-park-39905-large.mp4',
    title: 'Sunset Portraits',
    couple: 'Meera & Siddharth',
  },
  {
    id: 4,
    url: 'https://assets.mixkit.co/videos/preview/mixkit-romantic-newlywed-couple-in-the-field-39906-large.mp4',
    title: 'Amphitheatre Entrance',
    couple: 'Shalini & Vikram',
  },
  {
    id: 5,
    url: 'https://assets.mixkit.co/videos/preview/mixkit-bride-holding-flowers-and-walking-in-nature-43283-large.mp4',
    title: 'Bridal Walkway',
    couple: 'Deepika & Rohit',
  }
]

const tripledVideos = [...videoTestimonials, ...videoTestimonials, ...videoTestimonials]

const spaces = [
  {
    id: 'nila',
    name: 'Kayal Nila',
    subtitle: 'Outdoor Lawn',
    desc: 'Celebrate under a canopy of stars with fairy-lit trees, sprawling green lawns, and open air grandeur. Perfect for large weddings and reception evenings.',
    img: '/_TAR0361.jpg',
    capacity: 'Up to 2000 Guests',
    area: '50,000 sq.ft',
  },
  {
    id: 'vizhi',
    name: 'Kayal Vizhi',
    subtitle: 'Elegant Banquet Hall',
    desc: 'An air-conditioned masterpiece of modern luxury. Crystal chandeliers, ivory draping, and bespoke decor create the perfect stage for your celebrations.',
    img: '/_TAR0360.jpg',
    capacity: 'Up to 800 Guests',
    area: '18,000 sq.ft',
  },
  {
    id: 'isai',
    name: 'Kayal Isai',
    subtitle: 'Performance Space',
    desc: 'An intimate amphitheatre surrounded by bamboo groves and water features. The soul of the venue — designed for music, dance, and artistic expressions.',
    img: '/image2.jpg',
    capacity: 'Up to 400 Guests',
    area: '8,000 sq.ft',
  },
]

export default function Spaces() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const scroll = (direction: 'left' | 'right') => {
    const el = document.getElementById('video-scroll-track')
    if (el) {
      const cardWidth = 304 // 280px card + 24px gap
      if (direction === 'right') {
        el.scrollBy({ left: cardWidth, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: -cardWidth, behavior: 'smooth' })
      }
    }
  }

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const setWidth = 5 * 304 // 1520px
    const currentScroll = el.scrollLeft

    if (currentScroll >= setWidth * 2) {
      el.scrollLeft = currentScroll - setWidth
    } else if (currentScroll < setWidth) {
      el.scrollLeft = currentScroll + setWidth
    }
  }

  React.useEffect(() => {
    const el = document.getElementById('video-scroll-track')
    if (el) {
      el.scrollLeft = 5 * 304 // Start at the beginning of the second set (1520px)
    }

    const interval = setInterval(() => {
      scroll('right')
    }, 4500)
    return () => clearInterval(interval)
  }, [])

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
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#000000',
              lineHeight: 1.3,
            }}>
              Kayal offers a luxurious open-air<br />wedding experience like no other.
            </h2>
          </div>
        </Reveal>

        {/* Video Testimonial Scroll Slider (eleatcereal.com style) */}
        <div style={{ position: 'relative', marginTop: '40px', marginBottom: '80px', textAlign: 'center' }}>
          <div
            id="video-scroll-track"
            onScroll={handleScroll}
            style={{
              display: 'flex',
              gap: '24px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              padding: '20px 10px 40px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {tripledVideos.map((video, idx) => (
              <div
                key={`${video.id}-${idx}`}
                onClick={() => setActiveVideo(video.url)}
                style={{
                  flex: '0 0 280px',
                  height: '460px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  scrollSnapAlign: 'start',
                  boxShadow: '0 12px 36px rgba(0,0,0,0.12)',
                  transform: 'scale(0.97)',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.02) translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 20px 48px rgba(180, 145, 79, 0.25)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(0.97)'
                  e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.12)'
                }}
              >
                <video
                  src={video.url}
                  loop
                  muted
                  playsInline
                  autoPlay
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                    zIndex: 1,
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#B4914F',
                    color: '#ffffff',
                    padding: '8px 20px',
                    borderRadius: '20px',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    zIndex: 2,
                    boxShadow: '0 4px 15px rgba(180,145,79,0.3)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#ffffff'
                    e.currentTarget.style.color = '#B4914F'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#B4914F'
                    e.currentTarget.style.color = '#ffffff'
                  }}
                >
                  <Play size={10} fill="currentColor" /> Play
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '72px',
                    left: '20px',
                    right: '20px',
                    zIndex: 2,
                    textAlign: 'left',
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic',
                      fontSize: '1.25rem',
                      color: '#ffffff',
                      marginBottom: '4px',
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                    }}
                  >
                    {video.couple}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.72rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '10px' }}>
            <button
              onClick={() => scroll('left')}
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                border: '1px solid #B4914F',
                background: 'transparent',
                color: '#B4914F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
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
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                border: '1px solid #B4914F',
                background: 'transparent',
                color: '#B4914F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
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

          <style>{`
            #video-scroll-track::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

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
                              <div style={{ fontSize: '0.65rem', color: '#B4914F', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", marginBottom: '6px', fontWeight: 600 }}>{item.label}</div>
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

      {/* Lightbox Video Player */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 4000,
            background: 'rgba(0,0,0,0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(15px)',
            cursor: 'pointer',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: '90%',
              maxWidth: '400px',
              height: '80vh',
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 80px rgba(180, 145, 79, 0.35)',
              background: '#000',
            }}
          >
            <video
              src={activeVideo}
              autoPlay
              controls
              loop
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <button
              onClick={() => setActiveVideo(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: '#ffffff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s',
                zIndex: 10,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#B4914F'
                e.currentTarget.style.transform = 'rotate(90deg)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
                e.currentTarget.style.transform = 'rotate(0deg)'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
