import React, { useState } from 'react'
import Reveal from './Reveal'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: 'A dream venue brought to life beautifully. Every corner of Kayal whispered luxury. Our wedding here was beyond what we ever imagined.',
    author: 'Priya & Arvind',
    event: 'Wedding Reception',
    stars: 5,
  },
  {
    quote: 'The Kayal Nila lawn under a night sky with a thousand lights — it felt like we were celebrating in a fairy tale. Truly unforgettable.',
    author: 'Meera & Suresh',
    event: 'Grand Wedding',
    stars: 5,
  },
  {
    quote: 'Our corporate event was executed flawlessly. The team at Kayal understood our vision and delivered something extraordinary.',
    author: 'Rajesh Kumar',
    event: 'Corporate Gala',
    stars: 5,
  },
  {
    quote: 'Kayal Isai was the perfect stage for our daughter\'s Bharatanatyam Arangetram. The ambiance was magical and deeply moving.',
    author: 'Sundaram Family',
    event: 'Classical Performance',
    stars: 5,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

  const t = testimonials[active]

  return (
    <section id="testimonials" style={{
      padding: '120px 5%',
      background: '#ffffff',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Reveal>
          <span style={{
            color: '#000000', textTransform: 'uppercase',
            letterSpacing: '4px', fontSize: '0.75rem',
            fontFamily: "'Inter', sans-serif",
            display: 'block', marginBottom: '16px',
          }}>
            Stories of Joy
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#000000', marginBottom: '60px',
          }}>
            What Our Families Say
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ position: 'relative', minHeight: '260px' }}>
            {/* Quote mark */}
            <div style={{
              fontSize: '6rem', lineHeight: 1,
              color: '#000000', opacity: 0.1,
              fontFamily: "'Playfair Display', serif",
              marginBottom: '-20px',
            }}>❝</div>

            {/* Stars */}
            <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center', gap: '4px' }}>
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} size={18} fill="#8C7462" color="#8C7462" />
              ))}
            </div>

            {/* Quote */}
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)',
              fontStyle: 'italic',
              color: '#000000',
              lineHeight: 1.8,
              marginBottom: '36px',
              transition: 'opacity 0.4s ease',
            }}>
              "{t.quote}"
            </p>

            {/* Author */}
            <div>
              <div style={{
                width: '40px', height: '1px',
                background: '#000000', margin: '0 auto 16px',
              }} />
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600, color: '#000000',
                letterSpacing: '1px', marginBottom: '6px',
              }}>{t.author}</div>
              <div style={{
                fontSize: '0.75rem', color: '#666666',
                letterSpacing: '2px', textTransform: 'uppercase',
                fontFamily: "'Inter', sans-serif",
              }}>{t.event}</div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '50px' }}>
            <button onClick={prev} style={{
              width: '44px', height: '44px', borderRadius: '50%',
              border: '1px solid #8C7462',
              background: 'transparent', color: '#8C7462',
              fontSize: '1.1rem', cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#8C7462'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8C7462' }}>
              <ChevronLeft size={20} />
            </button>
            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} style={{
                  width: i === active ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === active ? '#8C7462' : '#dddddd',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  padding: 0,
                }} />
              ))}
            </div>
            <button onClick={next} style={{
              width: '44px', height: '44px', borderRadius: '50%',
              border: '1px solid #8C7462',
              background: 'transparent', color: '#8C7462',
              fontSize: '1.1rem', cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#8C7462'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8C7462' }}>
              <ChevronRight size={20} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
