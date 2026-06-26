import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Spaces', 'Services', 'Gallery', 'FAQs', 'Contact']

interface NavbarProps {
  currentPath: string
  navigate: (path: string) => void
}

export default function Navbar({ currentPath, navigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = (link: string) => {
    const key = link.toLowerCase()
    setMobileOpen(false)

    if (key === 'home') {
      navigate('/')
    } else if (key === 'about') {
      navigate('/copy-of-home')
    } else if (key === 'spaces') {
      navigate('/spaces')
    } else if (key === 'services') {
      navigate('/services')
    } else if (key === 'faqs') {
      navigate('/faqs')
    } else if (key === 'gallery') {
      navigate('/gallery')
    } else if (key === 'contact') {
      navigate('/#contact')
    }
  }

  const isLinkActive = (link: string) => {
    const key = link.toLowerCase()
    if (key === 'home' && currentPath === '/') return true
    if (key === 'about' && currentPath === '/copy-of-home') return true
    if (key === 'spaces' && currentPath === '/spaces') return true
    if (key === 'services' && currentPath === '/services') return true
    if (key === 'faqs' && currentPath === '/faqs') return true
    if (key === 'gallery' && currentPath === '/gallery') return true
    return false
  }

  // When the mobile menu is open the overlay is white, so force dark text
  // for the logo and the close (X) icon so they stay visible.
  const isWhiteBgNavbar = scrolled || currentPath !== '/' || mobileOpen
  const navTextColor = isWhiteBgNavbar ? '#000000' : '#ffffff'

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
          color: navTextColor,
          letterSpacing: '1px',
          transition: 'color 0.4s',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }} onClick={() => navigate('/')}>
          KAYAL VENUE
        </div>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '32px', listStyle: 'none' }} className="nav-desktop">
          {navLinks.map(link => {
            const active = isLinkActive(link)
            return (
              <li key={link}>
                <button onClick={() => handleNavClick(link)} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.82rem',
                  fontWeight: active ? 600 : 500,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  color: active ? '#B4914F' : navTextColor,
                  transition: 'color 0.3s',
                  padding: '4px 0',
                  position: 'relative',
                }}
                  onMouseEnter={e => {
                    if (!active) e.currentTarget.style.color = '#B4914F'
                  }}
                  onMouseLeave={e => {
                    if (!active) e.currentTarget.style.color = navTextColor
                  }}>
                  {link}
                  {active && (
                    <div style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '0',
                      width: '100%',
                      height: '2px',
                      background: '#B4914F',
                    }} />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <a href="tel:+919443164565" style={{
          background: '#B4914F', color: '#ffffff',
          border: '1px solid #B4914F', padding: '10px 26px',
          borderRadius: '30px', cursor: 'pointer',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.8rem', fontWeight: 500,
          letterSpacing: '1px', textTransform: 'uppercase',
          textDecoration: 'none',
          display: 'inline-block',
          transition: 'all 0.3s',
        }}
          className="nav-cta"
          onMouseEnter={e => {
            e.currentTarget.style.background = '#ffffff'
            e.currentTarget.style.color = '#B4914F'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#B4914F'
            e.currentTarget.style.color = '#ffffff'
          }}>
          Call Now
        </a>

        {/* Mobile hamburger and Quick Contact icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div className="nav-quick-contacts" style={{ gap: '25px', marginRight: '15px', alignItems: 'center' }}>
            <a href="tel:+919443164565" style={{ transition: 'all 0.3s', display: 'flex', alignItems: 'center' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
              <img
                src="/call.png"
                alt="Call"
                className="nav-call-img"
                style={{
                  width: '28px',
                  height: '28px',
                  objectFit: 'contain',
                  transform: 'translate(-20px, -2px) scale(2.70)',
                  filter: 'none',
                }}
              />
            </a>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="nav-hamburger" style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer',
            color: navTextColor, padding: '4px',
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
          {navLinks.map(link => {
            const active = isLinkActive(link)
            return (
              <button key={link} onClick={() => handleNavClick(link)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Playfair Display', serif",
                fontSize: '2rem',
                color: active ? '#B4914F' : '#000000',
                transition: 'color 0.3s',
              }}
                onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}>
                {link}
              </button>
            )
          })}
        </div>
      )}

      <style>{`
        .nav-quick-contacts {
          display: none !important;
        }
        @media (max-width: 992px) {
          .nav-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-hamburger { display: block !important; }
          .nav-quick-contacts {
            display: flex !important;
            margin-right: 0 !important;
          }
          .nav-call-img {
            transform: translate(0, 0) scale(1.6) !important;
          }
        }
      `}</style>
    </>
  )
}
