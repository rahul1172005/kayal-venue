import React from 'react'
import Reveal from './Reveal'
import { Gem, Calendar, Briefcase, Mic, CheckCircle } from 'lucide-react'

interface ServicesPageProps {
  navigate: (path: string) => void
}

export default function ServicesPage({ navigate }: ServicesPageProps) {
  const brandGold = '#B4914F'
  const lightBg = '#FDFBF9'

  const weddingPackages = [
    {
      name: 'Full Moon Package',
      tagline: 'The Ultimate Celebration',
      desc: 'Exclusive, private hire of the entire Kayal estate: Kayal Nila (sprawling lawn), Kayal Vizhi (banquet hall), and Kayal Isai (performance amphitheatre). For grand weddings that require diverse backdrops.',
      includes: [
        'Complete two-acre property access',
        'Lawn capacity for up to 2000 guests',
        'Fully A/C banquet hall access',
        'Amphitheater for rituals/photoshoots',
        '24-guest overnight stay included',
      ],
      popular: true,
    },
    {
      name: 'Half Moon Package',
      tagline: 'The Open Sky Experience',
      desc: 'Hire of Kayal Nila (outdoor lawn) and Kayal Isai (amphitheatre). Tailored specifically for beautiful outdoor receptions, sangeeths, and wedding ceremonies under the stars.',
      includes: [
        'Outdoor lawn & amphitheater access',
        'Lawn seating capacity of 1000',
        'Raised stage & buffet area cover',
        'Bamboo grove lighting details',
        'Optional guest accommodations add-on',
      ],
      popular: false,
    },
    {
      name: 'An Indoor Affair',
      tagline: 'Modern Elegance & Stature',
      desc: 'Hire of Kayal Vizhi (banquet hall) and Kayal Isai (amphitheatre). Perfectly matches elegant receptions and intimate ceremonies with modern comfort and pristine acoustics.',
      includes: [
        'A/C Banquet Hall & water features',
        'Indoor capacity for up to 800 guests',
        'Amphitheater access for pre-events',
        'Crystal chandeliers & bridal suite',
        'Optional guest accommodations add-on',
      ],
      popular: false,
    },
  ]

  const otherServices = [
    {
      category: 'Private Parties',
      icon: <Calendar size={36} strokeWidth={1.5} />,
      items: [
        { title: 'Birthday Parties', desc: 'A perfect ambient background for birthday celebrations. Choose a space configuration based on your guest count.' },
        { title: 'Family Get-Togethers', desc: 'Be it an intimate family gathering, baby shower, naming ceremony, or school reunion, we make it memorable.' },
      ],
    },
    {
      category: 'Corporate Events',
      icon: <Briefcase size={36} strokeWidth={1.5} />,
      items: [
        { title: 'Conferences & Seminars', desc: 'Fully air-conditioned, spacious halls versatile enough to host conferences, offsite workshops, and team buildings.' },
        { title: 'Health & Wellness Retreives', desc: 'Serene, nature-surrounded settings for yoga retreats, meditation programs, and wellness training.' },
      ],
    },
    {
      category: 'Performance Arts',
      icon: <Mic size={36} strokeWidth={1.5} />,
      items: [
        { title: 'Artistic Showcases', desc: 'Hire Kayal Isai for arangetrams, katcheris (classical music), contemporary plays, stand-up comedy, and art galleries.' },
      ],
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
          backgroundImage: `url('/image2.jpg')`,
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
              Crafted With Care
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
              Services & Packages
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Weddings section */}
      <section style={{ padding: '60px 5% 30px', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Reveal>
              <span style={{ color: brandGold, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.75rem', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Weddings & Receptions</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(2rem, 5.5vw, 2.6rem)', marginTop: '12px' }}>Curated Venue Packages</h2>
              <div style={{ width: '50px', height: '1px', background: brandGold, margin: '20px auto 0' }} />
            </Reveal>
          </div>

          <div className="wedding-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            alignItems: 'stretch',
          }}>
            {weddingPackages.map(pkg => (
              <Reveal key={pkg.name}>
                <div style={{
                  background: pkg.popular ? '#1a1715' : '#ffffff',
                  color: pkg.popular ? '#ffffff' : '#000000',
                  borderRadius: '24px',
                  padding: '48px 36px',
                  boxShadow: pkg.popular ? '0 25px 50px rgba(180, 145, 79, 0.25)' : '0 15px 40px rgba(0, 0, 0, 0.05)',
                  border: `1px solid ${pkg.popular ? brandGold : '#f0eae4'}`,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.35s ease',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  {pkg.popular && (
                    <div style={{
                      position: 'absolute',
                      top: '24px',
                      right: '24px',
                      background: brandGold,
                      color: '#ffffff',
                      fontSize: '0.65rem',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      letterSpacing: '1px',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      textTransform: 'uppercase',
                    }}>
                      Highly Recommended
                    </div>
                  )}

                  <span style={{
                    color: brandGold,
                    fontSize: '0.72rem',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    marginBottom: '8px',
                    display: 'block',
                  }}>
                    {pkg.tagline}
                  </span>

                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: 'italic',
                    fontSize: '2rem',
                    marginBottom: '20px',
                  }}>
                    {pkg.name}
                  </h3>

                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.88rem',
                    lineHeight: 1.7,
                    color: pkg.popular ? 'rgba(255, 255, 255, 0.8)' : '#555555',
                    marginBottom: '32px',
                    flexGrow: 1,
                  }}>
                    {pkg.desc}
                  </p>

                  <div style={{
                    borderTop: `1px solid ${pkg.popular ? 'rgba(255, 255, 255, 0.15)' : '#f0eae4'}`,
                    paddingTop: '24px',
                    marginBottom: '36px',
                  }}>
                    <h4 style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: brandGold,
                      marginBottom: '16px',
                    }}>
                      What's Included:
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {pkg.includes.map(inc => (
                        <li key={inc} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '0.84rem',
                          fontFamily: "'Inter', sans-serif",
                          marginBottom: '10px',
                        }}>
                          <CheckCircle size={14} style={{ color: brandGold, flexShrink: 0 }} />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      const contactEl = document.getElementById('contact')
                      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' })
                    }}
                    style={{
                      background: pkg.popular ? brandGold : 'transparent',
                      color: pkg.popular ? '#ffffff' : brandGold,
                      border: `1px solid ${brandGold}`,
                      padding: '14px 24px',
                      borderRadius: '30px',
                      cursor: 'pointer',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      width: '100%',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => {
                      if (pkg.popular) {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = brandGold
                      } else {
                        e.currentTarget.style.background = brandGold
                        e.currentTarget.style.color = '#ffffff'
                      }
                    }}
                    onMouseLeave={e => {
                      if (pkg.popular) {
                        e.currentTarget.style.background = brandGold
                        e.currentTarget.style.color = '#ffffff'
                      } else {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = brandGold
                      }
                    }}
                  >
                    Enquire Packages
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other event categories */}
      <section style={{
        padding: '40px 5%',
        background: lightBg,
        borderTop: '1px solid #f6efeb',
        borderBottom: '1px solid #f6efeb',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Reveal>
              <span style={{ color: brandGold, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.75rem', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Versatility & Scope</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(2rem, 5.5vw, 2.6rem)', marginTop: '12px' }}>Other Custom Events</h2>
              <div style={{ width: '50px', height: '1px', background: brandGold, margin: '20px auto 0' }} />
            </Reveal>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
          }}>
            {otherServices.map((cat, idx) => (
              <Reveal key={cat.category}>
                <div className="category-card" style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '50px',
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.03)',
                  border: '1px solid #f0eae4',
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: '40px',
                  alignItems: 'start',
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '20px',
                    background: '#FDFBF9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: brandGold,
                    border: '1px solid #f6efeb',
                  }}>
                    {cat.icon}
                  </div>

                  <div>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic',
                      fontSize: '1.8rem',
                      marginBottom: '28px',
                    }}>
                      {cat.category}
                    </h3>

                    <div className="other-items-grid" style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '40px',
                    }}>
                      {cat.items.map(item => (
                        <div key={item.title}>
                          <h4 style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: brandGold,
                            marginBottom: '10px',
                          }}>
                            {item.title}
                          </h4>
                          <p style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.88rem',
                            lineHeight: 1.7,
                            color: '#555555',
                          }}>
                            {item.desc}
                          </p>
                        </div>
                      ))}
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
        .category-card {
          grid-template-columns: 1fr !important;
          gap: 20px !important;
          padding: 30px !important;
        }
        .wedding-grid {
          grid-template-columns: 1fr !important;
          gap: 24px !important;
        }
        .other-items-grid {
          grid-template-columns: 1fr !important;
          gap: 24px !important;
        }
      }
    `}</style>
  )
}
