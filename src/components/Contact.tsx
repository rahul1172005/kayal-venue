import React, { useState } from 'react'
import Reveal from './Reveal'
import { MapPin, Phone, Mail, Clock, CheckCircle, Send } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  date: string
  eventType: string
  guests: string
  message: string
}

const eventTypes = ['Wedding', 'Reception', 'Engagement', 'Corporate Event', 'Private Party', 'Performance / Concert', 'Other']

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', date: '', eventType: '', guests: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // WhatsApp message
    const msg = `*Kayal Venue Enquiry*%0A%0A*Name:* ${form.name}%0A*Email:* ${form.email}%0A*Phone:* ${form.phone}%0A*Event Date:* ${form.date}%0A*Event Type:* ${form.eventType}%0A*Guests:* ${form.guests}%0A*Message:* ${form.message}`
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    padding: '16px 20px',
    background: '#ffffff',
    border: `1px solid ${focused === field ? '#000000' : '#e2e2e2'}`,
    borderRadius: '8px',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.95rem',
    color: '#1a1a1a',
    outline: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxSizing: 'border-box',
    boxShadow: focused === field ? '0 4px 12px rgba(0,0,0,0.05)' : 'none',
  })

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.7rem',
    fontWeight: 600,
    color: '#666666',
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
    marginBottom: '8px',
  }

  return (
    <section id="contact" className="contact-section" style={{
      padding: '140px 5%',
      background: '#fcfcfc',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background element */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(180, 145, 79, 0.03) 0%, transparent 70%)',
        zIndex: 0
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{
              color: '#B4914F', textTransform: 'uppercase',
              letterSpacing: '4px', fontSize: '0.75rem',
              fontFamily: "'Inter', sans-serif",
              display: 'block', marginBottom: '16px',
              fontWeight: 600
            }}>
              Reservation
            </span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              color: '#1a1a1a', marginBottom: '24px',
              fontWeight: 400
            }}>
              Let’s Craft Your <span style={{ fontStyle: 'italic' }}>Legend</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: '#B4914F', margin: '0 auto 24px' }} />
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.1rem', color: '#444444',
              maxWidth: '600px', margin: '0 auto'
            }}>
              Our dedicated team is here to transform your vision into an unforgettable reality.
            </p>
          </div>
        </Reveal>

        <div className="contact-main-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1.8fr',
          gap: '80px',
          alignItems: 'start',
        }}>
          {/* Contact Info */}
          <Reveal delay={0.1}>
            <div style={{ padding: '20px 0' }}>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2rem', color: '#1a1a1a', marginBottom: '40px',
                fontWeight: 400
              }}>
                Contact Information
              </h3>
              {[
                { icon: <MapPin size={20} />, label: 'Location', val: 'Kayal The Venue, Avinashi Road, Coimbatore, Tamil Nadu – 641 014' },
                { icon: <Phone size={20} />, label: 'Inquiries', val: '+91 98765 43210' },
                { icon: <Mail size={20} />, label: 'Email', val: 'hello@kayalvenue.com' },
                { icon: <Clock size={20} />, label: 'Availability', val: 'Daily: 9:00 AM – 8:00 PM' },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', gap: '24px', marginBottom: '32px',
                  alignItems: 'flex-start',
                }}>
                  <div style={{ 
                    color: '#B4914F', 
                    background: 'rgba(180, 145, 79, 0.08)',
                    padding: '12px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase',
                      color: '#888888', fontFamily: "'Inter', sans-serif", marginBottom: '6px',
                      fontWeight: 600
                    }}>{item.label}</div>
                    <div style={{
                      fontSize: '1rem', color: '#1a1a1a',
                      fontFamily: "'Inter', sans-serif", lineHeight: 1.5,
                      fontWeight: 400
                    }}>{item.val}</div>
                  </div>
                </div>
              ))}

              {/* Google Maps Refined */}
              <div style={{
                marginTop: '40px', borderRadius: '24px',
                overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                border: '1px solid rgba(0,0,0,0.03)'
              }}>
                <iframe
                  title="Kayal Venue Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2653!2d76.9975!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjQiTiA3NsKwNTknNTEuMCJF!5e0!3m2!1sen!2sin!4v1683000000000"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          {/* Booking Form Refined */}
          <Reveal delay={0.2}>
            {submitted ? (
              <div style={{
                textAlign: 'center', padding: '100px 40px',
                background: '#fff', borderRadius: '32px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.05)',
                border: '1px solid rgba(0,0,0,0.03)'
              }}>
                <div style={{ 
                  width: '80px', height: '80px', 
                  background: 'rgba(76, 175, 80, 0.1)', 
                  borderRadius: '50%', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 32px',
                  color: '#4CAF50'
                }}>
                  <CheckCircle size={40} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#1a1a1a', marginBottom: '16px' }}>
                  Enquiry Received
                </h3>
                <p style={{ color: '#666666', fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', lineHeight: 1.6 }}>
                  Our concierge team has been notified via WhatsApp.<br />
                  Expect a response within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" style={{
                background: '#fff', borderRadius: '32px',
                padding: '60px 50px',
                boxShadow: '0 30px 70px rgba(0,0,0,0.06)',
                border: '1px solid rgba(0,0,0,0.02)'
              }}>
                <div className="form-row-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input required name="name" value={form.name} onChange={handleChange}
                      placeholder="e.g. John Doe"
                      onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                      style={inputStyle('name')} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input required name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+91 00000 00000"
                      onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                      style={inputStyle('phone')} />
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={labelStyle}>Email Address</label>
                  <input name="email" value={form.email} onChange={handleChange}
                    placeholder="john@example.com"
                    onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                    style={inputStyle('email')} />
                </div>

                <div className="form-row-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                  <div>
                    <label style={labelStyle}>Preferred Date</label>
                    <input required type="date" name="date" value={form.date} onChange={handleChange}
                      onFocus={() => setFocused('date')} onBlur={() => setFocused(null)}
                      style={inputStyle('date')} />
                  </div>
                  <div>
                    <label style={labelStyle}>Guest Count</label>
                    <input name="guests" value={form.guests} onChange={handleChange}
                      placeholder="e.g. 500+"
                      onFocus={() => setFocused('guests')} onBlur={() => setFocused(null)}
                      style={inputStyle('guests')} />
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={labelStyle}>Event Category</label>
                  <select required name="eventType" value={form.eventType} onChange={handleChange}
                    onFocus={() => setFocused('eventType')} onBlur={() => setFocused(null)}
                    style={{ ...inputStyle('eventType'), appearance: 'none', cursor: 'pointer' }}>
                    <option value="">Select Category</option>
                    {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <label style={labelStyle}>Additional Details</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Share your requirements with us..."
                    rows={4}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                    style={{ ...inputStyle('message'), resize: 'none', minHeight: '120px' }} />
                </div>

                <button type="submit" style={{
                  width: '100%',
                  padding: '20px',
                  background: '#1a1a1a',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={e => { 
                  e.currentTarget.style.background = '#B4914F'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(180, 145, 79, 0.25)'
                }}
                onMouseLeave={e => { 
                  e.currentTarget.style.background = '#1a1a1a'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)'
                }}>
                  Initiate Enquiry <Send size={18} />
                </button>

                <p style={{
                  textAlign: 'center', marginTop: '20px',
                  fontSize: '0.75rem', color: '#888888',
                  fontFamily: "'Inter', sans-serif",
                }}>
                  Secure submission via WhatsApp Business
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .contact-main-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          .contact-section {
            padding: 80px 24px !important;
          }
        }
        @media (max-width: 640px) {
          .contact-form {
            padding: 40px 24px !important;
            border-radius: 24px !important;
          }
          .form-row-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .contact-section h2 {
            font-size: 2.5rem !important;
          }
          .contact-section p {
            font-size: 1rem !important;
          }
        }
        @media (max-width: 480px) {
          .contact-form {
            padding: 32px 20px !important;
          }
          .contact-section h2 {
            font-size: 2.2rem !important;
          }
        }
      `}</style>
    </section>
  )
}
