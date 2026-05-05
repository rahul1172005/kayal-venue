import React, { useState, useEffect } from 'react'
import { Menu, X, Diamond, MessageCircle, Phone } from 'lucide-react'

const navLinks = ['Home', 'About', 'Spaces', 'Services', 'Gallery', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
        padding: scrolled ? '14px 5%' : '22px 5%',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: scrolled ? '#ffffff' : 'transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.4s ease',
      }}>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.6rem',
          fontWeight: 700,
          color: '#000000',
          letterSpacing: '1px',
          transition: 'color 0.4s',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }} onClick={() => scrollTo('home')}>
          KAYAL VENUE
        </div>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '32px', listStyle: 'none' }} className="nav-desktop">
          {navLinks.map(link => (
            <li key={link}>
              <button onClick={() => scrollTo(link)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.82rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                color: '#000000',
                transition: 'color 0.3s',
                padding: '4px 0',
                position: 'relative',
              }}
                onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}>
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button onClick={() => scrollTo('contact')} style={{
          background: '#8C7462', color: '#ffffff',
          border: '1px solid #8C7462', padding: '10px 26px',
          borderRadius: '30px', cursor: 'pointer',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.8rem', fontWeight: 500,
          letterSpacing: '1px', textTransform: 'uppercase',
          transition: 'all 0.3s',
        }}
          className="nav-cta"
          onMouseEnter={e => {
            e.currentTarget.style.background = '#ffffff'
            e.currentTarget.style.color = '#8C7462'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#8C7462'
            e.currentTarget.style.color = '#ffffff'
          }}>
          Book a Visit
        </button>

        {/* Mobile hamburger and Quick Contact icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div className="nav-quick-contacts" style={{ display: 'flex', gap: '25px', marginRight: '15px', alignItems: 'center' }}>
            <a href="tel:+919876543210" style={{ transition: 'all 0.3s', display: 'flex', alignItems: 'center' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
              <img
                src="/call.png"
                alt="Call"
                style={{
                  width: '28px',
                  height: '28px',
                  objectFit: 'contain',
                  transform: 'translate(-20px, -2px) scale(2.70)'
                }}
              />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={{ transition: 'all 0.3s', display: 'flex', alignItems: 'center' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
              <img
                src="/whatsapp.png"
                alt="WhatsApp"
                style={{
                  width: '30px',
                  height: '30px',
                  objectFit: 'contain',
                  transform: 'translate(0px, 0px) scale(3.2)'
                }}
              />
            </a>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="nav-hamburger" style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer',
            color: '#000000', padding: '4px',
          }}>
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
          background: '#ffffff', zIndex: 999,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: '30px',
        }}>
          {navLinks.map(link => (
            <button key={link} onClick={() => scrollTo(link)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Playfair Display', serif",
              fontSize: '2rem', color: '#000000',
              transition: 'color 0.3s',
            }}
              onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}>
              {link}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-hamburger { display: block !important; }
          .nav-quick-contacts { margin-right: 0 !important; }
        }
      `}</style>
    </>
  )
}
