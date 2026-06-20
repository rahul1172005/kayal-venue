import React, { useState } from 'react'
import Reveal from './Reveal'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: "We had our wedding at Kayal Wedding Spaces, Coimbatore, and it felt just right for us. The outdoor setting with its earthy, natural vibe created such a warm and beautiful atmosphere - exactly what we had in mind.",
    author: "Sruthi Baskaran",
    event: "Wedding",
    stars: 5,
  },
  {
    quote: "A perfect place for a Wedding. Simply awesome and very spacious. The grass lawn is well maintained and it can accommodate over 1000 plus seat. The dinning area is a covered area, it has a good car parking space. Located away from the hassles of the city.",
    author: "Immanuel Rajaiah",
    event: "Wedding Celebration",
    stars: 5,
  },
  {
    quote: "Attended one of my relative family wedding at this place. Very beautiful place. Open area with lots of greeneries and peaceful location.",
    author: "Sampathraj MP",
    event: "Wedding Guest",
    stars: 5,
  },
  {
    quote: "A spacious open garden venue for events like marriage, parties, get togethers. Also has a mini hall that can accommodate up to 100 pax for smaller gatherings. Also has 2 spacious villas for the bride and groom family and 2-3 rooms for guests. A lot of greenery and palm trees giving you a feeling of being in a farm",
    author: "Karthik RK",
    event: "Event Host",
    stars: 5,
  },
  {
    quote: "Excellent venue for events. Staff and owner very accommodating to all requests. Groom and bride family stay very clean and posh ,staff catering well to all room service requests as well. Don’t need to think twice before considering",
    author: "Arjun Subramanian",
    event: "Wedding Stay & Event",
    stars: 5,
  },
  {
    quote: "We stumbled upon Kayal through a Google search while hunting for wedding venues. \"Oh, how cute!\" we thought, and decided to visit. The moment we set foot there – a full year before our wedding – we knew we’d found the perfect place. With distant hills, a gentle breeze, palm trees swaying, a vibrant wall of hibiscus flowers, and a pond scattered with lotus leaves, we could instantly envision the beauty of our celebration.",
    author: "Saradha Senthil Velu",
    event: "Wedding Ceremony",
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
      padding: '40px 5% 40px',
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
            color: '#000000', marginBottom: '40px',
          }}>
            What Our Families Say
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ position: 'relative', minHeight: '340px' }}>
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
                <Star key={i} size={18} fill="#B4914F" color="#B4914F" />
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
              border: '1px solid #B4914F',
              background: 'transparent', color: '#B4914F',
              fontSize: '1.1rem', cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#B4914F'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#B4914F' }}>
              <ChevronLeft size={20} />
            </button>
            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} style={{
                  width: i === active ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === active ? '#B4914F' : '#dddddd',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  padding: 0,
                }} />
              ))}
            </div>
            <button onClick={next} style={{
              width: '44px', height: '44px', borderRadius: '50%',
              border: '1px solid #B4914F',
              background: 'transparent', color: '#B4914F',
              fontSize: '1.1rem', cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#B4914F'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#B4914F' }}>
              <ChevronRight size={20} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
