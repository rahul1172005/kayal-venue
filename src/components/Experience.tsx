import React from 'react'

export default function Experience() {
  return (
    <section id="experience" style={{
      height: '60vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      overflow: 'hidden',
    }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('/kayal_gallery_collage_1777884529832.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }} />

      {/* Light overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(255,255,255,0.7)',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '0 20px' }}>


        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.8rem', letterSpacing: '4px',
          color: '#000000', textTransform: 'uppercase',
        }}>
          The Kayal Promise
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
          color: '#000000', fontStyle: 'italic',
          lineHeight: 1.3, marginBottom: '20px',
        }}>
          "Every moment here is crafted<br />with perfection"
        </h2>


      </div>
    </section>
  )
}
