import React, { useState } from 'react'
import Reveal from './Reveal'
import { Plus, Minus } from 'lucide-react'

interface FAQsPageProps {
  navigate: (path: string) => void
}

interface FAQItem {
  q: string
  a: React.ReactNode
}

export default function FAQsPage({ navigate }: FAQsPageProps) {
  const brandGold = '#B4914F'
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const faqData: FAQItem[] = [
    {
      q: 'How many guests can the venue accommodate?',
      a: (
        <div>
          <p style={{ marginBottom: '12px' }}>We offer two distinct event spaces:</p>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Kayal Nila</strong> – Our outdoor lawn venue with a covered stage can comfortably accommodate up to 1,000 guests, making it ideal for large weddings and celebrations.</li>
            <li><strong>Kayal Vizhi</strong> – Our air-conditioned indoor hall can accommodate up to 200 guests, providing an elegant and comfortable setting for more intimate gatherings.</li>
          </ul>
        </div>
      )
    },
    {
      q: 'Is there a backup plan or indoor space in case of bad weather?',
      a: (
        <div>
          <p style={{ marginBottom: '12px' }}>Absolutely. We closely monitor weather forecasts beginning 7–10 days before your event and help plan accordingly.</p>
          <p style={{ marginBottom: '12px' }}>For indoor events, Kayal Vizhi, our fully air-conditioned hall, can comfortably accommodate up to 200 guests.</p>
          <p style={{ marginBottom: '12px' }}>For larger celebrations at Kayal Nila, we offer a range of weather-protection solutions through our trusted event partners. Depending on the forecast, guest count, aesthetic preference, and event requirements, we can arrange:</p>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px' }}>
            <li>German Tents</li>
            <li>Ceiling Tents</li>
            <li>Arabian Tents</li>
          </ul>
          <p style={{ marginBottom: '12px' }}>These options are available in various sizes, layouts, and designs, allowing us to provide partial or full coverage of the venue as needed.</p>
          <p style={{ marginBottom: '12px' }}>In addition, Kayal Nila features permanent covered walkways connecting key areas of the venue. Guests can comfortably move between the entrance, stage, dining areas, and other event spaces while remaining protected from the elements.</p>
          <p style={{ marginBottom: '12px' }}>Should additional weather protection be required, tenting solutions can be installed across the open lawn sections to provide complete coverage of the venue.</p>
          <p style={{ marginBottom: '12px' }}>Based on the weather forecast and your specific requirements, we will recommend the most suitable solution to ensure your event remains comfortable, beautiful, and uninterrupted.</p>
          <p style={{ fontWeight: 600, color: brandGold }}>Simply put, if rain is expected, we have you covered.</p>
        </div>
      )
    },
    {
      q: 'Are there different areas for the ceremony and reception?',
      a: (
        <div>
          <p style={{ marginBottom: '12px' }}>Yes. Kayal Nila is a highly versatile event space that can be customized to suit a wide variety of celebrations and event formats.</p>
          <p style={{ marginBottom: '12px' }}>The venue features a large permanent stage, which serves as a stunning focal point for weddings and receptions. However, depending on your vision and event requirements, custom stages can also be created in the centre of the lawn or in other locations within the venue.</p>
          <p style={{ marginBottom: '12px' }}>Over the years, the space has successfully hosted:</p>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '6px', marginBottom: '12px' }}>
            <li>Weddings</li>
            <li>Receptions</li>
            <li>Engagement ceremonies</li>
            <li>Haldi celebrations</li>
            <li>Sangeet functions</li>
            <li>Corporate events</li>
            <li>Birthday parties</li>
            <li>Cultural and private gatherings</li>
          </ul>
          <p style={{ marginBottom: '12px' }}>The venue can be configured to create separate areas for ceremonies, receptions, dining, entertainment, and guest interaction depending on your requirements.</p>
          <p style={{ marginBottom: '12px' }}>Similarly, Kayal Vizhi, our air-conditioned indoor hall, can also be adapted for various ceremonies and events.</p>
          <p>Our in-house event décor team works closely with clients to create layouts, stages, seating arrangements, and event zones that best suit their vision. We also encourage you to browse our gallery to see the many different ways the venue has been transformed for past celebrations.</p>
        </div>
      )
    },
    {
      q: 'Can we visit the venue before booking?',
      a: (
        <div>
          <p style={{ marginBottom: '12px' }}>Absolutely. We encourage prospective clients to visit the venue and experience the space firsthand before making a booking decision.</p>
          <p style={{ marginBottom: '12px' }}>The venue is open for visits from 9:00 AM to 8:30 PM, and our team will be happy to show you around the property, explain the different event spaces, and showcase the existing lighting and infrastructure.</p>
          <p>For couples and families considering a booking, we also offer the opportunity to visit during an ongoing wedding or event (subject to the host’s approval and venue schedule). This allows you to experience the atmosphere firsthand and see how the venue looks when fully decorated, illuminated, and in operation. Seeing a live event often helps clients visualize the possibilities and understand how the space can be transformed for their own celebration.</p>
        </div>
      )
    },
    {
      q: 'Is the venue wheelchair accessible?',
      a: (
        <div>
          <p style={{ marginBottom: '12px' }}>Yes. We are committed to making our venue accessible and comfortable for all guests.</p>
          <p style={{ marginBottom: '12px' }}>The venue has two wheelchairs available on-site for guest use, along with a portable accessibility ramp that can be positioned wherever required to assist movement across different areas of the venue.</p>
          <p>For larger events or if additional mobility assistance is needed, extra wheelchairs can also be arranged upon request. We encourage clients to discuss any specific accessibility requirements with us in advance so that we can make the necessary arrangements and ensure a smooth and comfortable experience for all guests.</p>
        </div>
      )
    },
    {
      q: 'What is included in the venue rental?',
      a: (
        <div>
          <p style={{ marginBottom: '12px' }}>The venue rental fee includes the use of the booked venue spaces along with essential venue services required to host your function comfortably and efficiently.</p>
          <p style={{ marginBottom: '12px' }}>The rental includes:</p>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px' }}>
            <li>Access to the booked venue spaces</li>
            <li>500 guest chairs</li>
            <li>30 round tables</li>
            <li>40 dining tables for traditional leaf-service dining</li>
            <li>Use of the dining hall</li>
            <li>Use of the pantry, dosa counter, and live food counter areas</li>
            <li>Pre-event venue cleaning, post-event cleaning, garbage collection, and waste disposal</li>
            <li>General venue maintenance during the event period</li>
          </ul>
          <p style={{ marginBottom: '12px' }}>The dining hall can comfortably accommodate approximately 120 guests at a time for buffet or traditional dining service.</p>
          <p style={{ marginBottom: '12px' }}>To ensure a smooth handover, a refundable security deposit is collected prior to the event. Following the function, the venue is inspected for any damage, loss of property, or additional cleaning requirements, and the balance amount of the deposit is refunded accordingly.</p>
          <p>Optional weather-protection solutions such as German Tents, Ceiling Tents, or Arabian Tents can be arranged at an additional cost if required.</p>
        </div>
      )
    },
    {
      q: 'Do you have power backup, and how are electricity charges handled?',
      a: (
        <div>
          <p style={{ marginBottom: '12px' }}>Yes. The venue is equipped with a generator backup system featuring automatic changeover.</p>
          <p style={{ marginBottom: '12px' }}>In the event of a power outage, the generator automatically takes over, helping ensure that venue lighting, stage lighting, sound systems, and other essential event facilities continue operating with minimal disruption.</p>
          <p style={{ marginBottom: '12px' }}>Electricity consumption is charged based on actual usage. Meter readings are recorded before and after the event, and charges are calculated according to the prevailing electricity board rate.</p>
          <p>If generator power is used, generator charges are similarly calculated based on actual consumption and billed accordingly. This ensures that clients pay only for the electricity and backup power actually used during their event.</p>
        </div>
      )
    },
    {
      q: 'Are restroom facilities available on-site?',
      a: (
        <div>
          <p style={{ marginBottom: '12px' }}>Yes. The venue features dedicated and spacious restroom facilities for both ladies and gentlemen.</p>
          <p style={{ marginBottom: '12px' }}>Our restroom block has been thoughtfully designed to provide a clean, comfortable, and pleasant experience for guests. The design incorporates natural daylight through overhead glass roofing elements, creating a bright and airy atmosphere during the day while maintaining privacy and comfort.</p>
          <p>In addition to guest facilities, we also provide separate restroom facilities for event staff and service personnel.</p>
        </div>
      )
    },
    {
      q: 'Is there on-site accommodation available for the wedding party or guests?',
      a: (
        <div>
          <p style={{ marginBottom: '12px' }}>Yes. We provide on-site accommodation for up to 24 guests across two dedicated accommodation spaces:</p>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
            <li><strong>Kayal Isai</strong> – Our premium accommodation and preparation space designed for the bride, groom, and their immediate families. The rooms are thoughtfully designed, aesthetically furnished, and ideal for bridal and groom preparation, makeup sessions, pre-wedding photography, family gatherings, and relaxation before the ceremony.</li>
            <li><strong>Kayal Aruvi</strong> – Designed as a comfortable dormitory-style accommodation space for family members and guests.</li>
          </ul>
          <p style={{ marginBottom: '12px' }}>Both accommodation areas are air-conditioned and feature attached bathrooms, offering a comfortable and convenient stay experience for wedding parties and close family members.</p>
          <p>For larger accommodation requirements, we can assist in arranging nearby homestay accommodation within approximately 1 kilometre of the venue, allowing accommodation for up to 100 additional guests, subject to availability.</p>
        </div>
      )
    },
    {
      q: 'Do you have an in-house caterer, or can we bring our own?',
      a: (
        <div>
          <p style={{ marginBottom: '12px' }}>We do not have an in-house catering service, which gives our clients the flexibility to choose a caterer that best suits their preferences, cuisine requirements, and budget.</p>
          <p style={{ marginBottom: '12px' }}>Outside caterers are welcome.</p>
          <p>For clients who would like recommendations, we are happy to provide contact details for several experienced caterers who have successfully catered events at our venue.</p>
        </div>
      )
    },
    {
      q: 'Is there a kitchen or prep area for caterers?',
      a: (
        <div>
          <p style={{ marginBottom: '12px' }}>The venue does not have a kitchen.</p>
          <p style={{ marginBottom: '12px' }}>However, we do provide facilities that support catering service during events, including:</p>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px' }}>
            <li>A pantry area</li>
            <li>Dedicated dosa counter</li>
            <li>Live cooking counters</li>
            <li>Areas for dosa, roti, naan, frying, and similar live food stations</li>
            <li>Coffee and tea service counters</li>
          </ul>
          <p style={{ marginBottom: '12px' }}>Most caterers today operate from their own centralized kitchens and bring the prepared food to the venue. Our facilities are designed to support the final service and live-counter experience rather than large-scale food preparation.</p>
          <p>If your caterer has specific requirements, our team will be happy to discuss the available facilities and help ensure a smooth service experience.</p>
        </div>
      )
    },
    {
      q: 'Are we allowed to bring our own alcohol, and is alcohol consumption permitted at the venue?',
      a: (
        <div>
          <p style={{ marginBottom: '12px' }}>No. Alcohol is strictly prohibited on the premises.</p>
          <p>To maintain the family-friendly atmosphere and values of the venue, the possession, service, or consumption of alcoholic beverages is not permitted anywhere on the campus.</p>
        </div>
      )
    },
    {
      q: 'Do you have a preferred decorator or event design team?',
      a: (
        <div>
          <p style={{ marginBottom: '12px' }}>Yes. We have an in-house event décor and design team that provides complete event solutions, from concept to execution.</p>
          <p style={{ marginBottom: '12px' }}>Our team can assist with:</p>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '6px', marginBottom: '12px' }}>
            <li>Stage design and setup</li>
            <li>Floral décor</li>
            <li>Lighting design</li>
            <li>Entrance and walkway décor</li>
            <li>Seating layouts</li>
            <li>Mandap and ceremony setups</li>
            <li>Reception and themed event décor</li>
            <li>Tenting and weather-protection solutions</li>
            <li>Overall event styling and coordination</li>
          </ul>
          <p>Having an in-house décor team allows for seamless planning and execution, as they are highly familiar with the venue and can recommend designs that best utilize the space.</p>
        </div>
      )
    },
    {
      q: 'What are the venue’s music and sound guidelines?',
      a: (
        <div>
          <p style={{ marginBottom: '12px' }}>We welcome live music, DJs, performances, and entertainment programs as part of your celebration.</p>
          <p style={{ marginBottom: '12px' }}>Amplified music and live performances are permitted until 9:00 PM.</p>
          <p style={{ marginBottom: '12px' }}>After 9:00 PM, we request that the volume be significantly reduced and that only soft background or light music be played.</p>
          <p style={{ marginBottom: '12px' }}>These guidelines are in place because the venue is located near a residential area, and we strive to be considerate of our neighbors while still allowing our guests to enjoy their celebrations.</p>
          <p>Our team will be happy to guide your musicians, DJs, and sound providers regarding the venue’s sound requirements to ensure a smooth and uninterrupted event for everyone.</p>
        </div>
      )
    }
  ]

  return (
    <div style={{ background: '#ffffff', color: '#000000', paddingTop: '80px' }}>
      {/* Subpage Hero */}
      <section style={{
        position: 'relative',
        height: '45vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        background: '#1a1a1a',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('/scrroll.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.45,
        }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '0 20px' }}>
          <Reveal>
            <span style={{
              color: brandGold,
              textTransform: 'uppercase',
              letterSpacing: '4px',
              fontSize: '0.75rem',
              fontFamily: "'Inter', sans-serif",
              display: 'block',
              marginBottom: '16px',
            }}>
              Got Questions?
            </span>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              color: '#ffffff',
              margin: 0,
            }}>
              Frequently Asked Questions
            </h1>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '60px 5% 40px', background: '#ffffff' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {faqData.map((item, idx) => {
              const isExpanded = expandedIndex === idx
              return (
                <Reveal key={idx} delay={idx * 0.04}>
                  <div style={{
                    borderBottom: '1px solid #f0eae4',
                    paddingBottom: '20px',
                  }}>
                    <button
                      onClick={() => handleToggle(idx)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        width: '100%',
                        textAlign: 'left',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        padding: '10px 0',
                      }}
                    >
                      <span style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        lineHeight: 1.4,
                        color: isExpanded ? brandGold : '#000000',
                        transition: 'color 0.3s ease',
                      }}>
                        {item.q}
                      </span>
                      <span style={{
                        color: brandGold,
                        background: '#FDFBF9',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #f6efeb',
                        marginLeft: '20px',
                        flexShrink: 0,
                      }}>
                        {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>

                    <div style={{
                      maxHeight: isExpanded ? '1000px' : '0px',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                      opacity: isExpanded ? 1 : 0,
                    }}>
                      <div style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.92rem',
                        lineHeight: 1.8,
                        color: '#555555',
                        paddingTop: '16px',
                        margin: 0,
                      }}>
                        {item.a}
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
