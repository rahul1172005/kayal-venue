import React, { useState } from 'react'
import Reveal from './Reveal'
import { Check, Info, Users, Maximize, ShieldAlert, Award } from 'lucide-react'

interface SpacesPageProps {
  navigate: (path: string) => void
}

export default function SpacesPage({ navigate }: SpacesPageProps) {
  const brandGold = '#B4914F'
  const lightBg = '#FDFBF9'

  const spaces = [
    {
      id: 'nila',
      name: 'Kayal Nila',
      subtitle: 'Outdoor Sprawling Lawn',
      desc: 'Celebrate under a canopy of stars with fairy-lit trees, betel nut palms, and lush green lawns. Bordered by vines, featuring a raised stage and a dedicated, covered space for buffet setups. Perfect for grand weddings, receptions, and open-air sangeeths.',
      capacity: '1,000 Seating / 2,000 Guests Total',
      area: '50,000 sq.ft',
      features: ['Betel nut tree borders', 'Raised built-in stage', 'Covered buffet space', 'Bridal walkway access'],
      img: '/nila.jpg',
    },
    {
      id: 'vizhi',
      name: 'Kayal Vizhi',
      subtitle: 'Elegant Air-Conditioned Banquet Hall',
      desc: "A captivating space inspired by a bride's eye & accentuated by a water feature. Kayal Vizhi is an intimate air-conditioned space that can be hired for pre-wedding rituals, birthday celebrations, baby showers, naming ceremonies, wellness and corporate events, to name a few.",
      capacity: 'Up to 200 Guests',
      area: '18,000 sq.ft',
      features: ['Fully Air-Conditioned', 'Indoor water feature', 'Crystal chandeliers', 'Custom mood lighting'],
      img: '/vizhi.jpg',
    },
    {
      id: 'isai',
      name: 'Kayal Isai',
      subtitle: 'Three-Bedroom Family House',
      desc: 'Kayal Isai is a three bedroom house that can be used by the bride, groom and their families. Kayal Isai can accommodate 16 guests.\n\nIn addition, Kayal Aruvi can accommodate 8 guests. All rooms are air conditioned with attached bathrooms.',
      capacity: 'Up to 24 Guests (Total)',
      area: '8,000 sq.ft',
      features: ['Three AC Bedrooms', 'Attached bathrooms', 'Kayal Aruvi Guest House', 'Accommodates up to 24 guests'],
      img: '/isai.jpg',
    },
  ]

  const accommodations = [
    {
      name: 'Kayal Isai',
      type: 'Three-Bedroom Family House',
      desc: 'A spacious and luxurious three-bedroom estate designed specifically for the bridal couple, groom, and their immediate families. Offers private chambers for prep, relaxation, and intimate family gatherings.',
      capacity: 'Accommodates up to 16 guests',
      facilities: ['Three massive AC Bedrooms', 'Attached luxury bathrooms', 'Lounge and makeup areas', 'Private garden view'],
      img: '/isai.jpg', // Reusing premium image path
    },
    {
      name: 'Kayal Aruvi',
      type: 'Executive Guest House',
      desc: 'A quiet, modern guest lodge offering exceptional comfort for out-of-town guests and close family members. It has two bedrooms with four single beds in each.',
      capacity: 'Accommodates up to 8 guests',
      facilities: ['Fully Air-conditioned rooms', 'Attached modern bathrooms', 'High-end linens and amenities', 'Close proximity to lawn'],
      img: '/Kayal Aruvi.jpeg',
    },
  ]

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
          backgroundImage: `url('/_TAR0360.jpg')`,
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
              Behold the Beauty
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
              Spaces & Accommodations
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Intro section */}
      <section style={{ padding: '60px 5% 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Reveal>
            <span style={{ color: brandGold, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.75rem', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>The Estate</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(1.9rem, 5vw, 2.5rem)', marginTop: '12px', marginBottom: '24px' }}>Where Nature & Luxury Harmonize</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', lineHeight: 1.8, color: '#555555' }}>
              Spanning across two meticulously curated acres, Kayal features a diverse mix of outdoor lawn spaces, a high-end indoor banquet hall, and high-capacity accommodations to host and house your guests comfortably.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Event Spaces Section */}
      <section style={{ padding: '30px 5%', background: '#ffffff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {spaces.map((space, index) => (
            <div key={space.id} style={{ marginBottom: '80px' }}>
              <div className="spaces-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '60px',
                alignItems: 'center',
                direction: index % 2 === 1 ? 'rtl' : 'ltr',
              }}>
                {/* Image panel */}
                <Reveal>
                  <div style={{
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 45px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                  }}>
                    <img
                      src={space.img}
                      alt={space.name}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '460px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </Reveal>

                {/* Text description panel */}
                <Reveal delay={0.15}>
                  <div style={{ direction: 'ltr', textAlign: 'left' }}>
                    <span style={{
                      color: brandGold,
                      textTransform: 'uppercase',
                      letterSpacing: '3px',
                      fontSize: '0.72rem',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                    }}>
                      {space.subtitle}
                    </span>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic',
                      fontSize: 'clamp(1.8rem, 5vw, 2.4rem)',
                      marginTop: '8px',
                      marginBottom: '20px',
                    }}>
                      {space.name}
                    </h3>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.96rem',
                      lineHeight: 1.8,
                      color: '#444444',
                      marginBottom: '28px',
                    }}>
                      {space.desc}
                    </p>

                    <div style={{
                      display: 'flex',
                      gap: '40px',
                      borderBottom: '1px solid #f0eae4',
                      paddingBottom: '20px',
                      marginBottom: '24px',
                    }}>
                      <div>
                        <div style={{ fontSize: '0.68rem', color: brandGold, textTransform: 'uppercase', letterSpacing: '2px', fontFamily: "'Inter', sans-serif", marginBottom: '4px', fontWeight: 600 }}>Capacity</div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>{space.capacity}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.68rem', color: brandGold, textTransform: 'uppercase', letterSpacing: '2px', fontFamily: "'Inter', sans-serif", marginBottom: '4px', fontWeight: 600 }}>Dimension</div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>{space.area}</div>
                      </div>
                    </div>

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '12px',
                    }}>
                      {space.features.map(feat => (
                        <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', fontFamily: "'Inter', sans-serif", color: '#444444' }}>
                          <Check size={14} style={{ color: brandGold }} />
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stays Section */}
      <section style={{
        padding: '40px 5%',
        background: lightBg,
        borderTop: '1px solid #f6efeb',
        borderBottom: '1px solid #f6efeb',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
                Overnight Comfort
              </span>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(2rem, 5.5vw, 2.8rem)',
                margin: 0,
              }}>
                Stay at Kayal
              </h2>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.96rem',
                color: '#666666',
                marginTop: '16px',
                maxWidth: '600px',
                marginRight: 'auto',
                marginLeft: 'auto',
              }}>
                We provide fully-furnished, air-conditioned accommodation with attached bathrooms for up to 24 guests directly within the estate.
              </p>
            </Reveal>
          </div>

          <div className="accom-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '50px',
          }}>
            {accommodations.map(acc => (
              <Reveal key={acc.name}>
                <div style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 40px rgba(180, 145, 79, 0.08)',
                  border: '1px solid #f0eae4',
                  transition: 'all 0.35s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <img
                    src={acc.img}
                    alt={acc.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '280px',
                      objectFit: 'cover',
                    }}
                  />
                  <div style={{ padding: '40px 30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <span style={{
                      color: brandGold,
                      fontSize: '0.72rem',
                      fontFamily: "'Inter', sans-serif",
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      display: 'block',
                      marginBottom: '8px',
                    }}>
                      {acc.type}
                    </span>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic',
                      fontSize: '1.8rem',
                      marginBottom: '16px',
                    }}>
                      {acc.name}
                    </h3>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9rem',
                      lineHeight: 1.7,
                      color: '#555555',
                      marginBottom: '24px',
                      flexGrow: 1,
                    }}>
                      {acc.desc}
                    </p>

                    <div style={{
                      background: '#FDFBF9',
                      borderRadius: '16px',
                      padding: '20px',
                      border: '1px solid #f6f0ea',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 600, fontFamily: "'Inter', sans-serif", color: brandGold, marginBottom: '12px' }}>
                        <Users size={16} />
                        {acc.capacity}
                      </div>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '10px',
                      }}>
                        {acc.facilities.map(fac => (
                          <div key={fac} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#666666', fontFamily: "'Inter', sans-serif" }}>
                            <Check size={12} style={{ color: brandGold }} />
                            {fac}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {styleElement()}
    </div>
  )
}

function styleElement() {
  return (
    <style>{`
      @media (max-width: 768px) {
        section {
          padding: 40px 20px !important;
        }
        .spaces-grid, .accom-grid {
          grid-template-columns: 1fr !important;
          gap: 30px !important;
        }
      }
    `}</style>
  )
}
