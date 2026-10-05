# Customer Editing Guide — kerala-sands

This template is an emerald-and-gold themed Kerala coastal wedding invitation featuring an animated curtain seal intro, watercolour couple hero portrait, countdown timer, event highlights, and venue map preview.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///Users/amnas/Desktop/h2track/kerala-sands/editable/wedding-data.js)

### Couple Profiles (Groom & Bride)
Edit `couple.groom` and `couple.bride` in `editable/wedding-data.js`:
- `name`: Short first name (e.g. `"Aarav"`, `"Diya"`)
- `fullName`: Full legal/ceremonial name
- `line`: Parentage line (e.g. `"Son of..."`, `"Daughter of..."`)
- `note`: Personal blurb/bio
- `photo`: Path to portrait photo (defaults to `./editable/assets/groom.png` and `./editable/assets/bride.png`)

### Wedding Date & Times
Edit `wedding` block in `editable/wedding-data.js`:
- `dateISO`: Start time in ISO 8601 (`"2026-12-10T18:30:00+05:30"`) — drives countdown timer and calendar export
- `endISO`: End time in ISO 8601
- `dateLabel`: Formatted date (e.g. `"Thursday, 10 December 2026"`)
- `dateShort`: Short date (e.g. `"10 · 12 · 2026"`)
- `timeLabel`: e.g. `"6:30 PM onwards"`
- `muhurthamLabel`: e.g. `"Muhurtham · 7:15 PM"`
- `footerDateLocation`: Bottom signoff (e.g. `"10 · 12 · 2026 · Kochi"`)

### Venue & Maps
Edit `venue` block in `editable/wedding-data.js`:
- `name`: Venue display name (e.g. `"Taj Malabar Resort & Spa"`)
- `address`: Full postal address
- `locationShort`: City/State for hero section (e.g. `"Kochi, Kerala"`)
- `mapsUrl`: Google Maps link for directions button

### Images & Gallery
Replace files directly in `editable/assets/` or update paths in `editable/wedding-data.js`:
- Couple watercolour hero illustration: `editable/assets/couple-hero.png`
- Groom photo: `editable/assets/groom.png` (or `editable/assets/groom-traditional.jpg`)
- Bride photo: `editable/assets/bride.png` (or `editable/assets/bride-festive.jpg`)
- Gallery photos: configured in `gallery` array in `editable/wedding-data.js`:
  - `editable/assets/groom-traditional.jpg`
  - `editable/assets/bride-festive.jpg`
  - `editable/assets/groom-purple.jpg`
  - `editable/assets/bride-pink-wall.jpg`
  - `editable/assets/groom-casual.jpg`
  - `editable/assets/bride-blue.jpg`
- Map preview image: `editable/assets/map-preview.jpg`

### Background Music
- Background song: "The Rose (Instrumental)" by Anirudh Ravichander
- Configured in `editable/wedding-data.js` and loaded via `index.html`

---

## Special Sections & Features

- **Split Curtain Seal Opener**: Opens with smooth slide animation upon tapping "Open the invitation".
- **Floating Garland & Petals**: Background floral garland parallax in the hero section.
- **Live Countdown**: Animated countdown with days, hours, minutes, seconds.
- **iCal / Google Calendar**: Automatically generates `.ics` event from `dateISO` and `venue`.

---

## Rules for Future Agents

1. Make edits in `editable/wedding-data.js` and swap files in `editable/assets/`.
2. Do not modify bundled code in `assets/` unless structural changes are explicitly requested.
3. Verify syntax with `node --check editable/wedding-data.js` after making edits.
