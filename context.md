# Kayal Venue - Technical Context & Implementation Log

## Technical Stack
- **Framework / Core**: React 18 with TypeScript (`React.useState`, `React.useEffect`, `React.useRef`)
- **Build Tool & Bundler**: Vite 4 (ESM modules)
- **Styling**: Vanilla CSS with inline dynamic React styles & CSS-in-JS style blocks; responsive media queries
- **Animation & Motion**: `framer-motion` (v10.16.4), CSS `@keyframes`, smooth scroll transitions
- **Icons**: `lucide-react` (v0.284.0)
- **Deployment & Hosting**: Vercel / Netlify (`vercel.json`, `public/_redirects`)
- **Asset Processing**: `sharp` (for image optimization scripts)

---

## Architecture & Component Mapping

| Component File | Location | Primary Purpose / Section |
| :--- | :--- | :--- |
| [`App.tsx`](file:///c:/kayal/kayal-venue/src/App.tsx) | `src/App.tsx` | Main Router / Shell, state management (`currentPath`), WhatsApp float, CTA banner |
| [`Navbar.tsx`](file:///c:/kayal/kayal-venue/src/components/Navbar.tsx) | `src/components/` | Top Navigation Header, scroll state monitoring, mobile drawer menu |
| [`Hero.tsx`](file:///c:/kayal/kayal-venue/src/components/Hero.tsx) | `src/components/` | Landing fold with background video & primary tagline |
| [`About.tsx`](file:///c:/kayal/kayal-venue/src/components/About.tsx) | `src/components/` | "A Stunning Venue for Your Special Day" section + drone video (`/video1.mp4`) |
| [`Services.tsx`](file:///c:/kayal/kayal-venue/src/components/Services.tsx) | `src/components/` | Homepage Services Cards (Weddings, Private Parties, Corporate, Performance) |
| [`ServicesPage.tsx`](file:///c:/kayal/kayal-venue/src/components/ServicesPage.tsx) | `src/components/` | Full `/services` subpage with packages and custom events |
| [`Experience.tsx`](file:///c:/kayal/kayal-venue/src/components/Experience.tsx) | `src/components/` | "The Kayal Promise" section with parallax background |
| [`Spaces.tsx`](file:///c:/kayal/kayal-venue/src/components/Spaces.tsx) | `src/components/` | Homepage Spaces preview cards (Nila, Vizhi, Isai) & video slider |
| [`SpacesPage.tsx`](file:///c:/kayal/kayal-venue/src/components/SpacesPage.tsx) | `src/components/` | Full `/spaces` subpage with detailed specs & accommodation details |
| [`Gallery.tsx`](file:///c:/kayal/kayal-venue/src/components/Gallery.tsx) | `src/components/` | "Glimpses into Kayal" homepage bento grid section |
| [`GalleryPage.tsx`](file:///c:/kayal/kayal-venue/src/components/GalleryPage.tsx) | `src/components/` | Full `/gallery` subpage with categorical horizontal photo/video sliders |
| [`FAQsPage.tsx`](file:///c:/kayal/kayal-venue/src/components/FAQsPage.tsx) | `src/components/` | Full `/faqs` subpage with accordion items |
| [`Contact.tsx`](file:///c:/kayal/kayal-venue/src/components/Contact.tsx) | `src/components/` | Contact details, Inquiry form, Map embed |
| [`Footer.tsx`](file:///c:/kayal/kayal-venue/src/components/Footer.tsx) | `src/components/` | Footer branding, quick links, location, contact, copyright |

---

## Architectural Decisions & Implemented Enhancements

1. **Top-Fold Clean Design (Item 1 & Item 16)**:
   - On the homepage (`/` route at scroll position 0), the Navbar (logo, navigation links, call button, hamburger) is kept hidden (`opacity: 0, pointerEvents: 'none'`). It reveals smoothly when scrolling down (`window.scrollY > 60`) or on subpages.
   - Removed "Welcome to" and Call Now button from `Hero.tsx`. The hero contains only: "Kayal" (in golden color `#B4914F` and bold serif typography) and "Your dream wedding deserves a dreamy setting.".
2. **iOS & Apple Safari Video Compatibility (Item 15 & Item 2)**:
   - Configured all `<video>` tags with explicit `autoPlay`, `muted`, `loop`, `playsInline`, `preload="auto"`, and programmatic `useEffect` hook (`videoRef.current.muted = true; videoRef.current.play()`).
   - Enhanced drone video in `About.tsx` with CSS filter vibrancy (`saturate(1.25) hue-rotate(-5deg) contrast(1.05)`) so lawn greenery is vivid.
3. **Private Events Listing (Item 3)**:
   - Updated Private Parties copy across `Services.tsx` and `ServicesPage.tsx` to list: *"Birthdays, anniversaries, baby shower, seer function, ear piercing ceremony, and puberty celebration — all events in style with curated decor, cuisine, and entertainment."*
4. **Kayal Promise Typography & Background (Item 4 & Item 5)**:
   - Added space between "crafted" and "with" in `Experience.tsx` ("crafted with perfection").
   - Replaced background with an authentic high-resolution Kayal venue photo (`/_TAR0360.jpg`).
5. **Space Specifications & Descriptions (Item 6 & Item 8)**:
   - Updated dimensions across `Spaces.tsx` and `SpacesPage.tsx`:
     - Kayal Nila: `10,000 sq. ft.`
     - Kayal Vizhi: `4,500 sq. ft.`
     - Kayal Isai: `Around 2,500–3,000 sq. ft.`
   - Updated Kayal Isai description in `SpacesPage.tsx` to: *"Kayal Isai is a three bedroom house that can be used by the bride, groom and their families. One of the rooms has a mezzanine floor, providing two sleeping areas within the same room. Kayal Isai can accommodate 16 guests. In addition, Kayal Aruvi can accommodate 8 guests. All rooms are air conditioned with attached bathrooms."*
6. **Gallery Reorganization & Image Curation (Items 7, 10, 11, 14)**:
   - Reordered sliders in `GalleryPage.tsx`: 1. Kayal Nila – Open Space, 2. Kayal Vizhi – Indoor Space, 3. Birthday Event gallery.
   - Removed 4 out-of-place photos from `nilaItems` and moved indoor photos to `vizhiItems`.
   - Promoted transparent canopy tent and floral mandap photos to positions 2-5 of `nilaItems`.
   - Updated homepage "Glimpses into Kayal" (`Gallery.tsx`) to showcase full stage and transparent canopy tent stage photos.
7. **FAQ Billing Paragraph Removal (Item 9)**:
   - Removed electricity consumption board rate and generator billing paragraphs from `FAQsPage.tsx`.
8. **Inquiries, Timings & Contact Story (Items 12, 13, 17)**:
   - Added secondary contact number `+91 90039 27793` below `+91 94431 64565` in `Contact.tsx` and `Footer.tsx`.
   - Updated Availability in `Contact.tsx`:
     - Venue visiting hours: 9:00 AM – 9:00 PM
     - Office hours: 9:00 AM – 1:00 PM & 3:00 PM – 6:00 PM
   - Changed headline in `Contact.tsx`: *"Let’s Craft Your Story"*.

---

## Status
All 17 items fully implemented and verified via TypeScript production build (`npm run build`).
