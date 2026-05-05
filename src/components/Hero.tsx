import React from 'react'

// ─── Easily adjust the hero background image position & scale here ───
const heroBgStyle: React.CSSProperties = {
  transform: 'scale(3.0) translate(0px, 67px)',
  // Adjust scale (1.0 = normal, 1.1 = zoom in)
  // Adjust translate x (left/right) and y (up/down)
}
// ─────────────────────────────────────────────────────────────────────

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
      {/* ── Background Image ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: `url('/clouddyyy-1.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          transformOrigin: 'center center',
          ...heroBgStyle,          // ← scale / translateX / translateY applied here
          transition: 'transform 0.6s ease',
        }}
      />



      {/* ── Optional Shimmer line (Neutral) ── */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '1px',
          background: 'rgba(0,0,0,0.1)',
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
            color: '#000000',
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
            color: '#000000',
            lineHeight: 1.05,
            marginBottom: '12px',
            animation: 'fadeUp 1s ease 0.4s both',

            // 👉 Add this
            transform: 'scale(1.5) translateX(40px) translateY(-10px)',
            transition: 'transform 0.6s ease',
          }}
        >
          The Kayal Venue
        </h1>




        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            color: '#ffffffff',
            marginBottom: '24px',
            marginTop: '10px', // Move just the subtitle and buttons down
            animation: 'fadeUp 1s ease 0.6s both',

          }}
        >

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
          {/* Explore Spaces */}
          <button
            onClick={() => scrollTo('spaces')}
            style={{
              padding: '16px 44px',
              background: '#8C7462',
              color: '#ffffff',
              border: '1px solid #8C7462',
              borderRadius: '30px',
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.82rem',
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              transition: 'all 0.35s ease',
            }}

            onMouseLeave={e => {
              e.currentTarget.style.background = '#8C7462'
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.borderColor = '#8C7462'
            }}
          >
            Explore Spaces
          </button>

          {/* Book a Visit */}
          <button
            onClick={() => scrollTo('contact')}
            style={{
              padding: '16px 44px',
              background: '#8C7462',
              color: '#ffffff',
              border: '1px solid #8C7462',
              borderRadius: '30px',
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.82rem',
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              transition: 'all 0.35s ease',
            }}

            onMouseLeave={e => {
              e.currentTarget.style.background = '#8C7462'
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.borderColor = '#8C7462'
            }}

          >
            Book a Visit
          </button>
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
      `}</style>
    </section>
  )
}
