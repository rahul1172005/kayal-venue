import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Spaces from './components/Spaces'
import Services from './components/Services'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Import Subpages
import AboutPage from './components/AboutPage'
import SpacesPage from './components/SpacesPage'
import ServicesPage from './components/ServicesPage'
import FAQsPage from './components/FAQsPage'
import ThankYouPage from './components/ThankYouPage'
import GalleryPage from './components/GalleryPage'

// WhatsApp floating button
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Kayal%20The%20Venue."
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      style={{
        position: 'fixed', bottom: '32px', right: '32px',
        width: '60px', height: '60px', borderRadius: '50%',
        background: 'linear-gradient(135deg, #25d366, #128C7E)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 6px 24px rgba(37,211,102,0.45)',
        zIndex: 999, color: '#fff', fontSize: '28px',
        textDecoration: 'none',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        animation: 'waPulse 3s ease-in-out infinite',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.12)'
        e.currentTarget.style.boxShadow = '0 10px 32px rgba(37,211,102,0.6)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,211,102,0.45)'
      }}
    >
      💬
      <style>{`
        @keyframes waPulse {
          0%, 100% { box-shadow: 0 6px 24px rgba(37,211,102,0.45); }
          50% { box-shadow: 0 6px 40px rgba(37,211,102,0.7); }
        }
      `}</style>
    </a>
  )
}

// CTA Banner between testimonials and contact
function CTABanner() {
  return (
    <section style={{
      position: 'relative',
      height: '55vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('/scrroll.jpg')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.6)',
      }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', padding: '0 20px' }}>
        <span style={{
          display: 'block', color: '#fff',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.75rem', letterSpacing: '4px',
          textTransform: 'uppercase', marginBottom: '20px',
        }}>
          Begin Your Journey
        </span>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          color: '#fff', marginBottom: '32px', lineHeight: 1.25,
        }}>
          Plan Your Dream Event Today
        </h2>
        <a href="#contact"
          onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          style={{
            display: 'inline-block',
            padding: '16px 48px',
            background: '#8C7462', color: '#ffffff',
            border: '1px solid #8C7462',
            borderRadius: '30px',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.82rem', fontWeight: 500,
            letterSpacing: '2px', textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'all 0.35s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#8C7462'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#8C7462'
            e.currentTarget.style.color = '#ffffff'
          }}
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (path: string) => {
    const [pathname, hash] = path.split('#')
    if (window.location.pathname !== pathname) {
      window.history.pushState(null, '', path)
      setCurrentPath(pathname)
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      if (hash) {
        const el = document.getElementById(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  // Render proper subpage or homepage components
  const renderContent = () => {
    switch (currentPath) {
      case '/copy-of-home':
        return <AboutPage navigate={navigate} />
      case '/spaces':
        return <SpacesPage navigate={navigate} />
      case '/services':
        return <ServicesPage navigate={navigate} />
      case '/faqs':
        return <FAQsPage navigate={navigate} />
      case '/gallery':
        return <GalleryPage navigate={navigate} />
      case '/thank-you':
        return <ThankYouPage navigate={navigate} />
      case '/':
      default:
        return (
          <>
            <Hero />
            <About />
            <Services />
            <Experience />
            <Gallery />
            <Spaces />
            <Testimonials />
          </>
        )
    }
  }

  return (
    <>
      <Navbar currentPath={currentPath} navigate={navigate} />
      <main>
        {renderContent()}
        {currentPath !== '/thank-you' && <CTABanner />}
        {currentPath !== '/thank-you' && <Contact navigate={navigate} />}
      </main>
      <Footer navigate={navigate} />
    </>
  )
}
