import React from 'react'
import { Instagram, Facebook, Youtube, MessageCircle, MapPin, Phone, Mail, Heart } from 'lucide-react'
import Reveal from './Reveal'

interface FooterProps {
  navigate: (path: string) => void
}

export default function Footer({ navigate }: FooterProps) {
  const socialIconStyle = {
    color: '#000000',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    opacity: 0.6
  }

  const handleNavClick = (link: string) => {
    const key = link.toLowerCase()
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
      navigate('/#gallery')
    } else if (key === 'contact') {
      navigate('/#contact')
    }
  }

  return (
    <footer className="footer-container" style={{
      background: '#ffffff',
      color: '#000000',
      padding: '40px 5% 40px',
      borderTop: '1px solid #f0f0f0',
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background glow */}
      <div style={{
        position: 'absolute', bottom: '-10%', left: '50%',
        transform: 'translateX(-50%)',
        width: '600px', height: '400px',
        background: 'radial-gradient(circle, rgba(180, 145, 79, 0.03) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Large Centered Brand Name */}
        <Reveal>
          <div style={{ marginBottom: '40px' }}>
            <h2 className="footer-brand-title" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(4rem, 15vw, 8.5rem)',
              fontWeight: 700,
              letterSpacing: '12px',
              textTransform: 'uppercase',
              margin: 0,
              lineHeight: 1,
              color: '#1a1a1a'
            }}>
              Kayal
            </h2>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              marginTop: '24px'
            }}>
              <div className="brand-divider" style={{ width: '40px', height: '1px', background: 'rgba(0,0,0,0.1)' }} />
              <p className="footer-brand-subtitle" style={{
                fontSize: '0.85rem',
                letterSpacing: '5px',
                textTransform: 'uppercase',
                color: '#B4914F',
                fontWeight: 600,
                margin: 0
              }}>
                CREATING YOUR MARVELOUS MOMENTS
              </p>
              <div className="brand-divider" style={{ width: '40px', height: '1px', background: 'rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </Reveal>

        {/* Detailed Information Grid */}
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '60px',
          marginBottom: '100px',
          textAlign: 'center'
        }}>
          {/* Column 1: Navigation */}
          <Reveal delay={0.1}>
            <div>
              <h4 className="footer-column-heading" style={{ fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '32px', color: '#888888', fontWeight: 600 }}>Explore</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {['Home', 'About', 'Spaces', 'Services', 'Gallery', 'FAQs', 'Contact'].map(link => (
                  <button
                    key={link}
                    onClick={() => handleNavClick(link)}
                    style={{
                      background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                      fontSize: '0.9rem', color: '#1a1a1a', transition: 'color 0.3s',
                      fontFamily: "'Inter', sans-serif"
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#B4914F'}
                    onMouseLeave={e => e.currentTarget.style.color = '#1a1a1a'}
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Column 2: Location */}
          <Reveal delay={0.2}>
            <div>
              <h4 className="footer-column-heading" style={{ fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '32px', color: '#888888', fontWeight: 600 }}>Location</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', maxWidth: '240px' }}>
                  <MapPin size={18} style={{ color: '#B4914F', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#1a1a1a' }}>
                    79, KNG Pudur,<br />
                    GN Mills PO, Coimbatore<br />
                    Tamil Nadu – 641 029
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Column 3: Contact */}
          <Reveal delay={0.3}>
            <div>
              <h4 className="footer-column-heading" style={{ fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '32px', color: '#888888', fontWeight: 600 }}>Connect</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <a href="tel:+919443164565" style={{ color: '#1a1a1a', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#B4914F'} onMouseLeave={e => e.currentTarget.style.color = '#1a1a1a'}>
                  <Phone size={16} style={{ color: '#B4914F' }} /> +91 94431 64565
                </a>
                <a href="mailto:connectwithkayal@gmail.com" style={{ color: '#1a1a1a', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#B4914F'} onMouseLeave={e => e.currentTarget.style.color = '#1a1a1a'}>
                  <Mail size={16} style={{ color: '#B4914F' }} /> connectwithkayal@gmail.com
                </a>
              </div>
            </div>
          </Reveal>

          {/* Column 4: Socials */}
          <Reveal delay={0.4}>
            <div>
              <h4 className="footer-column-heading" style={{ fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '32px', color: '#888888', fontWeight: 600 }}>Follow</h4>
              <div className="social-links-container" style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
                {[
                  { icon: <Instagram size={22} />, url: 'https://instagram.com' },
                  { icon: <Facebook size={22} />, url: 'https://facebook.com' },
                  { icon: <MessageCircle size={22} />, url: 'https://wa.me/919443164565' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={socialIconStyle}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '1', e.currentTarget.style.color = '#B4914F')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '0.6', e.currentTarget.style.color = '#000000')}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Bar */}
        <Reveal delay={0.5}>
          <div className="footer-bottom-bar" style={{
            borderTop: '1px solid #f0f0f0',
            paddingTop: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '30px'
          }}>
            {/* Made by ZAPSTERS in bottom left */}
            <div style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px', color: '#666666' }}>
              Made with <Heart size={14} color="#ff4d4d" fill="#ff4d4d" /> by
              <a
                href="https://zapsters.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#1a1a1a',
                  fontWeight: 700,
                  textDecoration: 'none',
                  letterSpacing: '1px',
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#1a1a1a'
                  e.currentTarget.style.color = '#B4914F'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'
                  e.currentTarget.style.color = '#1a1a1a'
                }}
              >
                ZAPSTERS
              </a>
            </div>

            {/* Copyright in bottom right */}
            <div style={{ fontSize: '0.8rem', color: '#999999', letterSpacing: '0.5px' }}>
              © {new Date().getFullYear()} Kayal The Venue. All rights reserved.
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-container {
            padding: 40px 24px 40px !important;
          }
          .footer-brand-title {
            font-size: clamp(3.5rem, 20vw, 6rem) !important;
            letter-spacing: 4px !important;
            margin-bottom: 12px !important;
          }
          .footer-brand-subtitle {
            font-size: 0.7rem !important;
            letter-spacing: 3px !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            margin-bottom: 80px !important;
          }
          .footer-bottom-bar {
            justify-content: center !important;
            text-align: center !important;
            flex-direction: column-reverse !important;
            gap: 24px !important;
            padding-top: 40px !important;
          }
          .footer-column-heading {
            margin-bottom: 24px !important;
          }
          .social-links-container {
            gap: 32px !important;
          }
          .brand-divider {
            width: 30px !important;
          }
        }

        /* Further refinement for very small devices */
        @media (max-width: 480px) {
          .footer-brand-title {
            font-size: 3.5rem !important;
            letter-spacing: 2px !important;
          }
        }
      `}</style>
    </footer>
  )
}
