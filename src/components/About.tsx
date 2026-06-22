import React from 'react'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" style={{
      background: '#ffffff',
      padding: '80px 5% 30px',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Reveal delay={0}>
          <span style={{
            color: '#000000', textTransform: 'uppercase',
            letterSpacing: '4px', fontSize: '0.75rem',
            fontFamily: "'Inter', sans-serif",
            display: 'block', marginBottom: '16px',
          }}>
            Our Promise
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            color: '#000000', marginBottom: '30px', lineHeight: 1.2,
          }}>
            A stunning venue for your special day.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ width: '60px', height: '1px', background: '#000000', margin: '0 auto 36px' }} />
        </Reveal>

        <Reveal delay={0.25}>
          <div style={{
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto 50px',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(180, 145, 79, 0.15)',
            background: '#000000',
          }}>
            <video
              src="/video1.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
              }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p style={{
            fontSize: '1.05rem', color: '#333333',
            lineHeight: 1.85,
            fontFamily: "'Inter', sans-serif",
            marginBottom: '24px',
            maxWidth: '800px',
            margin: '0 auto 24px',
          }}>
            Tucked away from urban chaos and situated in a meticulously landscaped two-acre space, Kayal offers an unique ambience for special events of any sort.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <p style={{
            fontSize: '1.05rem', color: '#333333',
            lineHeight: 1.85,
            fontFamily: "'Inter', sans-serif",
            marginBottom: '24px',
            maxWidth: '800px',
            margin: '0 auto 24px',
          }}>
            From simple engagements to elaborate sangeeths and weddings, Kayal can play host to the rituals, colors and ceremonies that is an integral part of the rich tapestry of Indian culture.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <p style={{
            fontSize: '1.05rem', color: '#333333',
            lineHeight: 1.85,
            fontFamily: "'Inter', sans-serif",
            marginBottom: '24px',
            maxWidth: '800px',
            margin: '0 auto 24px',
          }}>
            Celebrations of any kind makes our lives richer and fuller. Be it a milestone birthday, wedding anniversary, baby shower, naming ceremony or even re-affirming your vows, we are continuously inspired in creating your marvelous moments.
          </p>
        </Reveal>

        <Reveal delay={0.45}>
          <p style={{
            fontSize: '1.1rem', color: '#B4914F',
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            marginBottom: '30px',
            letterSpacing: '1px',
          }}>
            Accomodation available for upto 24 guests.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'transparent', color: '#B4914F',
              border: '1px solid #B4914F', padding: '14px 40px',
              borderRadius: '30px', cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.8rem', fontWeight: 500,
              letterSpacing: '2px', textTransform: 'uppercase',
              transition: 'all 0.35s ease',
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
            Contact Us
          </button>
        </Reveal>      </div>
    </section>
  )
}
