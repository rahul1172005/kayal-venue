import React from 'react'
import Reveal from './Reveal'

interface AboutPageProps {
  navigate: (path: string) => void
}

export default function AboutPage({ navigate }: AboutPageProps) {
  const brandGold = '#B4914F'

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
          backgroundImage: `url('/_TAR0361.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.45,
        }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '0 20px' }}>
          <Reveal>
            <span style={{
              color: brandGold,
              textTransform: 'uppercase',
              letterSpacing: '4px',
              fontSize: '0.75rem',
              fontFamily: "'Inter', sans-serif",
              display: 'block',
              marginBottom: '16px',
            }}>
              Discover Our Story
            </span>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              color: '#ffffff',
              margin: 0,
            }}>
              About Us
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Narrative Section */}
      <section style={{ padding: '60px 5% 30px', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="about-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}>
            <Reveal>
              <div>
                <span style={{
                  color: brandGold,
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  fontSize: '0.72rem',
                  fontFamily: "'Inter', sans-serif",
                  display: 'block',
                  marginBottom: '12px',
                }}>
                  The Sanctuary
                </span>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  marginBottom: '28px',
                  lineHeight: 1.25,
                }}>
                  A stunning venue for private events
                </h2>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.98rem',
                  lineHeight: 1.85,
                  color: '#444444',
                  marginBottom: '24px',
                }}>
                  Tucked away from urban chaos and situated in a meticulously landscaped two-acre space, Kayal offers a unique ambience for special events of any sort.
                </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.98rem',
                  lineHeight: 1.85,
                  color: '#444444',
                  marginBottom: '32px',
                }}>
                  From simple engagements to elaborate sangeeths and weddings, Kayal can play host to the rituals, colors, and ceremonies that are an integral part of the rich tapestry of Indian culture.
                </p>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => navigate('/spaces')}
                    style={{
                      background: brandGold,
                      color: '#ffffff',
                      border: `1px solid ${brandGold}`,
                      padding: '14px 32px',
                      borderRadius: '30px',
                      cursor: 'pointer',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      transition: 'all 0.35s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = brandGold
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = brandGold
                      e.currentTarget.style.color = '#ffffff'
                    }}
                  >
                    Explore Our Spaces
                  </button>

                  <button
                    onClick={() => navigate('/#contact')}
                    style={{
                      background: 'transparent',
                      color: brandGold,
                      border: `1px solid ${brandGold}`,
                      padding: '14px 32px',
                      borderRadius: '30px',
                      cursor: 'pointer',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      transition: 'all 0.35s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = brandGold
                      e.currentTarget.style.color = '#ffffff'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = brandGold
                    }}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(180, 145, 79, 0.12)',
              }}>
                <img
                  src="/_TAR0360.jpg"
                  alt="Kayal Banquet Hall Setup"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '500px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Video Presentation Section */}
      <section style={{
        padding: '40px 5%',
        background: '#FDFBF9',
        textAlign: 'center',
        borderTop: '1px solid #f6efeb',
        borderBottom: '1px solid #f6efeb',
      }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <Reveal>
            <span style={{
              color: brandGold,
              textTransform: 'uppercase',
              letterSpacing: '4px',
              fontSize: '0.72rem',
              fontFamily: "'Inter', sans-serif",
              display: 'block',
              marginBottom: '16px',
            }}>
              Visual Experience
            </span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              marginBottom: '36px',
              lineHeight: 1.25,
            }}>
              A Glimpse of Serenity
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <div style={{
              width: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.12)',
              background: '#000000',
            }}>
              <video
                src="/video1.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Detailed Philosophy & Stays */}
      <section style={{ padding: '40px 5%', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="about-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}>
            <Reveal>
              <div style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(180, 145, 79, 0.12)',
              }}>
                <img
                  src="/image2.jpg"
                  alt="Kayal Landscape"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '500px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <span style={{
                  color: brandGold,
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  fontSize: '0.72rem',
                  fontFamily: "'Inter', sans-serif",
                  display: 'block',
                  marginBottom: '12px',
                }}>
                  Occasions & Comfort
                </span>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  marginBottom: '28px',
                  lineHeight: 1.25,
                }}>
                  Creating Marvelous Moments
                </h2>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.98rem',
                  lineHeight: 1.85,
                  color: '#444444',
                  marginBottom: '24px',
                }}>
                  Celebrations of any kind make our lives richer and fuller. Be it a milestone birthday, wedding anniversary, baby shower, naming ceremony, or even re-affirming your vows, we are continuously inspired to create your marvelous moments.
                </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.98rem',
                  lineHeight: 1.85,
                  color: '#444444',
                  marginBottom: '32px',
                }}>
                  To ensure a relaxed experience, we provide luxury accommodations directly on the property for up to 24 guests, split between the majestic Kayal Isai Villa and the peaceful Kayal Aruvi.
                </p>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <button
                    onClick={() => navigate('/services')}
                    style={{
                      background: 'transparent',
                      color: brandGold,
                      border: `1px solid ${brandGold}`,
                      padding: '14px 32px',
                      borderRadius: '30px',
                      cursor: 'pointer',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      transition: 'all 0.35s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = brandGold
                      e.currentTarget.style.color = '#ffffff'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = brandGold
                    }}
                  >
                    View Services
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 40px 20px !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </div>
  )
}
