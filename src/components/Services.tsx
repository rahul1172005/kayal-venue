import React, { useState } from 'react'
import Reveal from './Reveal'
import { Gem, PartyPopper, Briefcase, Music } from 'lucide-react'

const services = [
  {
    icon: <Gem size={48} strokeWidth={1} />,
    title: 'Weddings',
    desc: 'From traditional ceremonies to contemporary celebrations, we craft weddings that reflect your unique love story in every detail.',
  },
  {
    icon: <PartyPopper size={48} strokeWidth={1} />,
    title: 'Private Parties',
    desc: 'Birthdays, anniversaries, and milestone moments — celebrated in style with curated decor, cuisine, and entertainment.',
  },
  {
    icon: <Briefcase size={48} strokeWidth={1} />,
    title: 'Corporate Events',
    desc: 'Conferences, product launches, and team retreats — executed with precision in an environment that inspires excellence.',
  },
  {
    icon: <Music size={48} strokeWidth={1} />,
    title: 'Performance Arts',
    desc: 'A dedicated stage for music concerts, classical performances, and artistic showcases in a naturally acoustic outdoor setting.',
  },
]

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null)
  
  const littleBrown = '#8C7462'
  const lightBrown = '#FDFBF9'

  return (
    <section id="services" style={{
      padding: '120px 5%',
      background: '#ffffff',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span style={{
              color: littleBrown, textTransform: 'uppercase',
              letterSpacing: '4px', fontSize: '0.75rem',
              fontFamily: "'Inter', sans-serif",
              display: 'block', marginBottom: '16px',
            }}>
              What We Offer
            </span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              color: '#000000',
            }}>
              Services Crafted with Care
            </h2>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '28px',
        }}>
          {services.map((svc, i) => (
            <Reveal key={svc.title} delay={i * 0.12}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: hovered === i ? littleBrown : lightBrown,
                  borderRadius: '20px',
                  padding: '50px 36px',
                  textAlign: 'center',
                  transition: 'all 0.4s ease',
                  boxShadow: hovered === i
                    ? '0 30px 60px rgba(140,116,98,0.2)'
                    : '0 8px 30px rgba(0,0,0,0.03)',
                  transform: hovered === i ? 'translateY(-10px)' : 'translateY(0)',
                  cursor: 'default',
                  border: `1px solid ${hovered === i ? littleBrown : '#F0EBE6'}`,
                }}
              >
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '24px', 
                  color: hovered === i ? '#ffffff' : littleBrown,
                  transition: 'color 0.4s'
                }}>
                  {svc.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontSize: '1.5rem',
                  color: hovered === i ? '#ffffff' : '#000000',
                  marginBottom: '16px',
                  transition: 'color 0.4s',
                }}>
                  {svc.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.8,
                  color: hovered === i ? 'rgba(255,255,255,0.9)' : '#555555',
                  fontFamily: "'Inter', sans-serif",
                  transition: 'color 0.4s',
                }}>
                  {svc.desc}
                </p>
                <div style={{
                  width: '40px', height: '1px',
                  background: hovered === i ? '#ffffff' : littleBrown,
                  margin: '28px auto 0',
                  transition: 'background 0.4s',
                }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
