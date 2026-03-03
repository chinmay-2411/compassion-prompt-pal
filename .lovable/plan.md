

# Website Design & Layout Improvement Plan

## Overview
A comprehensive visual and UX upgrade across all pages to make the website feel more polished, modern, and professional while maintaining the earthy, compassionate NGO brand identity.

---

## 1. Header Enhancement
- Add a subtle shadow on scroll for depth
- Smooth mobile menu animation (slide down instead of instant appear)
- Make the logo slightly larger on desktop for brand presence

## 2. Homepage (Index) Improvements
- **Hero section**: Add a subtle dark gradient overlay on the background image for better text contrast and readability
- **CTA buttons**: Reduce from 4 buttons to a cleaner 2-row layout with better spacing
- **Services cards**: Add a subtle left border accent color and hover lift effect
- **Testimonials**: Add quotation marks styling and a subtle card border for definition
- **Donation section**: Better visual hierarchy with cleaner card separation

## 3. About Page Polish
- Add subtle decorative divider elements between sections
- Founder cards: add a subtle gradient overlay on photos for depth
- Mission/Vision/Values cards: add top colored border for visual interest

## 4. Our Work Page
- Add a subtle colored tag/badge above each service title
- Improve spacing between image and text content
- Add hover effect on service images (subtle zoom)

## 5. Impact Page
- **Gallery section**: Add rounded corners with consistent aspect ratios and subtle hover overlay with the image caption
- **Rescue Stories cards**: Add a small icon or emoji for each story type and a left accent border
- Improve stat counter section with individual stat cards instead of plain text

## 6. Get Involved & Contact Pages
- Better form styling with focus states and floating labels feel
- Add subtle card backgrounds behind form sections
- Improve spacing and visual separation

## 7. Footer Refinement
- Add a subtle wave or curved divider at the top of the footer
- Better column alignment and spacing on mobile

## 8. Global Improvements
- **Section transitions**: Add subtle background pattern or texture to alternating sections for visual rhythm
- **Cards**: Consistent subtle border + shadow across all pages (currently some have `border-none` which looks flat)
- **Buttons**: More consistent hover states with smooth transitions
- **Typography**: Slightly increase line-height on body text for readability
- **Spacing**: Normalize section padding across pages for consistency

---

## Technical Details

### Files to modify:
1. **`src/components/Header.tsx`** - Scroll shadow, mobile menu animation
2. **`src/pages/Index.tsx`** - Hero overlay, card styles, button layout, testimonial styling
3. **`src/pages/About.tsx`** - Card borders, section dividers
4. **`src/pages/OurWork.tsx`** - Image hover, tags, spacing
5. **`src/pages/Impact.tsx`** - Gallery hover overlays, stat cards, story card accents
6. **`src/pages/GetInvolved.tsx`** - Form styling, card backgrounds
7. **`src/pages/Contact.tsx`** - Form styling, card spacing
8. **`src/components/Footer.tsx`** - Top divider, mobile spacing
9. **`src/index.css`** - Global typography and spacing improvements

### No new dependencies needed -- all improvements use existing Tailwind classes and Framer Motion.

