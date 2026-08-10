import React, { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoSrc, setVideoSrc] = useState<string | null>(null)

  useEffect(() => {
    // Serve the smaller, mobile-optimized file on small screens so
    // iPhones over cellular/Low Data Mode actually buffer and autoplay it.
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    setVideoSrc(isMobile ? '/herovideo-mobile.mp4' : '/herovideo.mp4')
  }, [])

  useEffect(() => {
    if (videoRef.current && videoSrc) {
      videoRef.current.muted = true
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }, [videoSrc])

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
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/preload.png"
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
        {videoSrc && <source src={videoSrc} type="video/mp4" />}
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
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(3.5rem, 10vw, 6.5rem)',
            color: '#B4914F',
            lineHeight: 1.05,
            marginBottom: '16px',
            animation: 'fadeUp 1s ease 0.2s both',
            fontWeight: 700,
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
          }}
        >
          Kayal
        </h1>

        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: '#ffffff',
            marginBottom: '0px',
            marginTop: '10px',
            animation: 'fadeUp 1s ease 0.4s both',
            letterSpacing: '0.5px',
          }}
        >
          Your dream wedding deserves a dreamy setting.
        </p>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          #home h1 {
            font-size: clamp(3rem, 12vw, 4.5rem) !important;
          }
        }
      `}</style>
    </section>
  )
}
