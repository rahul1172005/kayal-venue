import React from 'react'


export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* ── Background Video ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          transform: 'scale(1.15)',
          transformOrigin: 'center bottom',
        }}
      >
        <source src="/herovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ── Dark Overlay for Contrast ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.6))',
          zIndex: 1,
        }}
      />

      {/* ── Optional Shimmer line (Neutral) ── */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '1px',
          background: 'rgba(255,255,255,0.1)',
          zIndex: 2,
        }}
      />

      {/* ── Hero Content ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '860px',
          padding: '0 20px',
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.78rem',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '6px',
            color: '#ffffff',
            marginBottom: '4px',
            animation: 'fadeUp 1s ease 0.2s both',
          }}
        >
          Welcome to
        </p>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            color: '#ffffff',
            lineHeight: 1.05,
            marginBottom: '12px',
            animation: 'fadeUp 1s ease 0.4s both',
            transform: 'scale(1.5) translateX(40px) translateY(-10px)',
            transition: 'transform 0.6s ease',
          }}
        >
          Kayal
        </h1>

        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            color: '#ffffff',
            marginBottom: '24px',
            marginTop: '10px', // Move just the subtitle and buttons down
            animation: 'fadeUp 1s ease 0.6s both',
          }}
        >
          Your dream wedding deserves a dreamy setting.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeUp 1s ease 0.8s both',
          }}
        >
          <a
            href="tel:+919443164565"
            style={{
              display: 'inline-block',
              padding: '16px 48px',
              background: '#B4914F',
              color: '#ffffff',
              border: '1px solid #B4914F',
              borderRadius: '30px',
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.82rem',
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.35s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#ffffff'
              e.currentTarget.style.color = '#B4914F'
              e.currentTarget.style.borderColor = '#ffffff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#B4914F'
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.borderColor = '#B4914F'
            }}
          >
            Call Now
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(-9px); }
        }
        @media (max-width: 768px) {
          #home h1 {
            transform: scale(1.0) translateX(0px) translateY(0px) !important;
          }
        }
      `}</style>
    </section>
  )
}
