import React from 'react'
import Reveal from './Reveal'
import { CheckCircle } from 'lucide-react'

interface ThankYouPageProps {
  navigate: (path: string) => void
}

export default function ThankYouPage({ navigate }: ThankYouPageProps) {
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
              letterSpacing: '4px',
              fontSize: '0.75rem',
              fontFamily: "'Inter', sans-serif",
              display: 'block',
              marginBottom: '16px',
            }}>
              Success
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
              Thank You
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Thank You Message Body */}
      <section style={{ padding: '60px 5% 40px', background: '#ffffff', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ 
              width: '80px', height: '80px', 
              background: 'rgba(180, 145, 79, 0.1)', 
              borderRadius: '50%', 
              display: 'flex', alignItems: 'center', justify: 'center',
              alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 28px',
              color: brandGold
            }}>
              <CheckCircle size={40} />
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: '2.5rem',
              color: '#1a1a1a',
              marginBottom: '16px',
              fontWeight: 400
            }}>
              Thank You
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#444444',
              marginBottom: '40px'
            }}>
              We will contact you within 24 hours.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <button
              onClick={() => navigate('/')}
              style={{
                background: brandGold,
                color: '#ffffff',
                border: `1px solid ${brandGold}`,
                padding: '14px 40px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.82rem',
                fontWeight: 500,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                transition: 'all 0.35s ease',
                boxShadow: '0 10px 20px rgba(180, 145, 79, 0.15)'
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
              Back to Home
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
