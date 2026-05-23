import React from 'react'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" style={{
      background: '#ffffff',
      padding: '120px 5%',
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
            Our Story
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            color: '#000000', marginBottom: '30px', lineHeight: 1.2,
          }}>
            Coimbatore’s most beautiful<br />outdoor wedding venue.
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
            fontSize: '1.1rem', color: '#000000',
            fontStyle: 'italic', lineHeight: 1.9,
            fontFamily: "'Playfair Display', serif",
            marginBottom: '24px',
          }}>
            "Nestled away from the chaos of the world, Kayal is where nature and luxury
            meet in perfect harmony. Every corner of our venue is crafted to hold the weight
            of your most precious memories."
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <p style={{
            fontSize: '1rem', color: '#000000', lineHeight: 1.8,
            fontFamily: "'Inter', sans-serif",
            marginBottom: '44px', maxWidth: '700px', margin: '0 auto 44px',
          }}>
            From grand weddings under the open sky to intimate corporate gatherings in our
            elegant halls, Kayal The Venue in Coimbatore offers a timeless backdrop where
            every celebration becomes a story worth telling.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <button
            onClick={() => document.getElementById('spaces')?.scrollIntoView({ behavior: 'smooth' })}
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
            Discover More
          </button>
        </Reveal>

        {/* Stats Row */}
        <Reveal delay={0.3}>
          <div style={{
            display: 'flex', justifyContent: 'center', gap: '60px',
            marginTop: '80px', flexWrap: 'wrap',
          }}>
              {[
                { num: '500+', label: 'Events Hosted' },
                { num: '12', label: 'Years of Excellence' },
                { num: '3', label: 'Iconic Spaces' },
                { num: '98%', label: 'Happy Families' },
              ].map(stat => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '2.4rem', fontWeight: 600,
                    color: '#000000', marginBottom: '6px',
                  }}>{stat.num}</div>
                  <div style={{
                    fontSize: '0.75rem', textTransform: 'uppercase',
                    letterSpacing: '2px', color: '#000000',
                    fontFamily: "'Inter', sans-serif",
                  }}>{stat.label}</div>
                </div>
              ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
