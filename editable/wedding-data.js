/**
 * wedding-data.js — Customer-facing editable data layer for kerala-sands
 * Edit this file to update couple names, bios, wedding dates, times, venue details, and images.
 */

window.WEDDING_DATA = {
  couple: {
    order: "bride-first",
    groom: {
      name: "Vishnu",
      fullName: "Vishnu",
      line: "",
      note: "Ready for a lifetime of laughter, adventures, and endless love with Teena.",
      photo: "./editable/assets/groom.png",
    },
    bride: {
      name: "Teena",
      fullName: "Teena",
      line: "",
      note: "Ready to walk hand-in-hand into forever, creating a lifetime of memories with Vishnu.",
      photo: "./editable/assets/bride.png",
    },
  },

  wedding: {
    dateISO: "2026-11-05T11:30:00+05:30",
    endISO: "2026-11-05T15:00:00+05:30",
    dateLabel: "Thursday, 5 November 2026",
    dateShort: "05 · 11 · 2026",
    timeLabel: "11:30 AM onwards",
    muhurthamLabel: "Ceremony · 11:30 AM",
    footerDateLocation: "05 · 11 · 2026 · Vadakkekara",
  },

  venue: {
    name: "St. Mary’s Church",
    address: "Vadakkekara, Veroor P.O., Changanassery, Kerala 686104",
    locationShort: "Vadakkekara, Kerala",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=St.+Mary%27s+Church+Vadakkekara",
  },

  music: {
    src: "./editable/assets/the_rose.mp3",
    title: "The Rose (Instrumental)",
  },

  images: {
    coupleHero: "./editable/assets/couple-hero.png",
    mapPreview: "./editable/assets/map-preview.jpg",
  },
};

