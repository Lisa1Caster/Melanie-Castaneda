/**
 * Central Business Configuration
 * Non-technical owners can edit this single file to update all business
 * copy, contact details, services, images, colors, and layout text across the site.
 */

export const business = {
  // Brand identity
  name: "Melanie Castaneda",
  businessType: "Plumber",
  tagline: "Garage Door Repair & Installation",
  city: "London",
  address: {
    line: "C/O Tc Citroen Wells Limited, 5th Floor, 3 Dorset Rise",
    city: "London",
    country: "England",
    postcode: "EC4Y 8EN",
    full: "C/O Tc Citroen Wells Limited, 5th Floor, 3 Dorset Rise, London, England, EC4Y 8EN",
  },

  // Contact channels
  contact: {
    phone: "447985248298",
    phoneDisplay: "+44 7985 248298",
    phoneHref: "tel:447985248298",
    whatsapp: "447985248298",
    whatsappHref: "https://wa.me/447985248298",
    whatsappDisplay: "+44 7985 248298",
    // Empty if not provided
    email: "",
    emailHref: "",
    // Google Maps search query fallback
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=C%2FO+Tc+Citroen+Wells+Limited%2C+5th+Floor%2C+3+Dorset+Rise%2C+London%2C+England%2C+EC4Y+8EN",
    serviceAreaNote: "Serving 3 Dorset Rise, EC4Y, and residences across London",
  },

  // Brand style & design tokens
  theme: {
    brandStyle: "Luxury",
    colors: {
      primary: "#3B4A6B",       // Deep Slate Navy
      secondary: "#B8D8D8",     // Soft Seafoam Mineral
      primaryDark: "#26324A",   // Deeper ink navy for deep contrast
      primaryLight: "#EDF2F7",  // Delicate slate tint
      ink: "#161B26",           // Near-black ink
      inkMuted: "#525D73",      // Slate body muted
      surface: "#FFFFFF",
      canvas: "#F8FAFC",        // Neutral off-white canvas
      border: "rgba(59, 74, 107, 0.12)",
      borderHover: "rgba(59, 74, 107, 0.28)",
      overlay: "rgba(22, 27, 38, 0.72)",
    },
    fonts: {
      heading: "'Fraunces', Georgia, serif",
      body: "'Plus Jakarta Sans', system-ui, sans-serif",
    },
    radii: {
      control: "8px",
      card: "16px",
    },
  },

  // Navigation configuration
  navigation: {
    links: [
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Why Choose Us", href: "#why-choose-us" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    primaryCta: {
      label: "Call Now",
      href: "tel:447985248298",
    },
    secondaryCta: {
      label: "View Services",
      href: "#services",
    },
  },

  // Hero Section
  hero: {
    eyebrow: "London · EC4Y · Dedicated Plumbing Services",
    title: "Precision Plumbing & Installation in London",
    subtitle: "Prompt diagnostics, refined repairs, and dedicated local plumbing craftsmanship for residential properties throughout London.",
    primaryCta: {
      label: "Call Now",
      href: "tel:447985248298",
    },
    secondaryCta: {
      label: "View Services",
      href: "#services",
    },
    trustBadge: "Based at 3 Dorset Rise, London EC4Y 8EN",
    backgroundImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Luxury bathroom with clean architectural plumbing fixtures in London",
  },

  // About Section
  about: {
    eyebrow: "The Practice",
    title: "Local plumbing care handled with precision and discretion.",
    paragraphs: [
      "Operating from 3 Dorset Rise in London, Melanie Castaneda provides dependable, high-standard plumbing repairs and installations for homeowners seeking careful craftsmanship.",
      "Every pipe, valve, and fixture is approached with methodical attention to detail. Whether resolving an unexpected leak or fitting new sanitaryware, the focus is always on lasting solutions and a clean workspace."
    ],
    details: [
      { label: "Location", value: "C/O Tc Citroen Wells Limited, 5th Floor, 3 Dorset Rise, London, EC4Y 8EN" },
      { label: "Direct Line", value: "+44 7985 248298" },
      { label: "Emergency Support", value: "Emergency plumbing available upon request" },
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Architectural modern interior demonstrating clean design and reliable plumbing",
  },

  // Main Services
  services: {
    eyebrow: "Core Services",
    title: "Comprehensive Plumbing & System Care",
    description: "From immediate leak resolution to complete sanitaryware fitting, every project is executed with technical precision.",
    items: [
      {
        id: "plumbing-repair",
        title: "Plumbing Repair",
        description: "Diagnosis and restoration for faulty valves, noisy pipes, and domestic plumbing fixtures.",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "drain-cleaning",
        title: "Drain Cleaning",
        description: "Clearing stubborn obstructions from sinks, baths, and main waste pipes cleanly and swiftly.",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "water-heater-repair",
        title: "Water Heater Repair",
        description: "Troubleshooting hot water loss, pressure imbalances, and thermostat complications.",
        image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "pipe-repair",
        title: "Pipe Repair",
        description: "Mending burst, corroded, or rattling pipework using durable fittings and pressure testing.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "leak-detection",
        title: "Leak Detection",
        description: "Pinpointing hidden moisture, seepage, and pressure drops behind walls or beneath flooring.",
        image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "faucet-repair",
        title: "Faucet Repair",
        description: "Restoring dripping, stiff, or corroded mixer taps and architectural brassware.",
        image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "toilet-repair",
        title: "Toilet Repair",
        description: "Fixing continuously running cisterns, faulty fill valves, and slow flushing mechanisms.",
        image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "sewer-line-repair",
        title: "Sewer Line Repair",
        description: "Careful repair of external foul lines and connections with minimal site disruption.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "emergency-plumbing",
        title: "Emergency Plumbing",
        description: "Urgent response for uncontrolled water ingress, major leaks, and pipe failures in London.",
        image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "water-line-repair",
        title: "Water Line Repair",
        description: "Restoring steady main supply feeds, replacing old lead branches, and securing pressure.",
        image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "garbage-disposal-repair",
        title: "Garbage Disposal Repair",
        description: "Unjamming and repairing under-sink disposal units and food waste systems safely.",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "plumbing-installation",
        title: "Plumbing Installation",
        description: "Complete installation of designer sinks, showers, freestanding baths, and pipe networks.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  },

  // Why Choose Us Section
  whyChooseUs: {
    eyebrow: "Local Standards",
    title: "Why London Residents Turn to Melanie Castaneda",
    subtitle: "Rooted in London EC4Y with direct phone communication, fast local dispatch, and transparent service.",
    points: [
      {
        number: "01",
        title: "Direct Local Contact",
        description: "Speak directly with your plumber on +44 7985 248298 without call centres or automated middlemen.",
      },
      {
        number: "02",
        title: "London-Based Dispatch",
        description: "Operating from 3 Dorset Rise for rapid arrival to EC4, the City, Westminster, and greater London.",
      },
      {
        number: "03",
        title: "End-to-End Craftsmanship",
        description: "From microscopic leak detection to complete new plumbing installations, work is carried out to the highest standard.",
      },
    ],
  },

  // Testimonials / Reviews (Rendered ONLY if testimonials exist and have real entries)
  testimonials: [],

  // FAQ Section (Genuine questions tailored for local London plumbing customers)
  faq: {
    eyebrow: "Answers",
    title: "Frequently Asked Questions",
    subtitle: "Clear answers to common questions about plumbing services and booking in London.",
    items: [
      {
        question: "How quickly can you attend to an emergency in London?",
        answer: "Being situated at 3 Dorset Rise in EC4Y allows for prompt arrival across central and greater London. For pressing leaks or sudden water loss, call +44 7985 248298 immediately for rapid response.",
      },
      {
        question: "Do you offer diagnostic leak detection?",
        answer: "Yes. Advanced visual and pressure diagnostics are used to isolate hidden drips behind plasterboard, tiled bathrooms, and sub-flooring before undertaking any intrusive work.",
      },
      {
        question: "Can I send photos of my issue via WhatsApp?",
        answer: "Yes. You can message photos or short videos of your dripping tap, boiler issue, or pipework to +44 7985 248298 for quick initial advice before a site visit.",
      },
      {
        question: "What areas of London do you cover?",
        answer: "All services operate out of 3 Dorset Rise (EC4Y 8EN), covering central London and surrounding neighborhoods across the City, Westminster, Southwark, Camden, and Greater London.",
      },
    ],
  },

  // Contact Section
  contactSection: {
    eyebrow: "Get in Touch",
    title: "Arrange Your Plumbing Service",
    subtitle: "Reach out directly by phone, WhatsApp message, or use the form below to request an inspection or quote.",
    formLabels: {
      name: "Your Name",
      phone: "Phone Number",
      service: "Service Required",
      message: "Brief Description of the Issue",
      submitButton: "Request Service",
      successMessage: "Thank you. Your enquiry has been received. Melanie Castaneda will contact you shortly.",
    },
    actions: {
      call: "Call +44 7985 248298",
      whatsapp: "Message on WhatsApp",
      directions: "Get Directions (Google Maps)",
    },
  },

  // Footer Section
  footer: {
    copyright: "All rights reserved.",
    locationText: "C/O Tc Citroen Wells Limited, 5th Floor, 3 Dorset Rise, London, England, EC4Y 8EN",
    note: "Professional plumbing repair & domestic installations.",
  },
};
