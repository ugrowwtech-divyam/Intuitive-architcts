export interface Project {
  slug: string;
  title: string;
  category: "Design Consultancy" | "Construction (Turnkey)" | "Architecture/Interior" | "3D Visualisation";
  image: string;
  gallery: string[];
  description: string;
  client: string;
  year: string;
  location: string;
}

export const projects: Project[] = [
  // Design Consultancy
  {
    slug: "design-consultancy-urban",
    title: "Eco-Urban Integration",
    category: "Design Consultancy",
    image: "https://images.unsplash.com/photo-1541888082470-388b1cc9811d?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?w=1920&q=80"
    ],
    description: "Providing high-end conceptual consulting for a metropolitan green-tech hub.",
    client: "Metro Tech Innovations",
    year: "2024",
    location: "Tokyo, Japan"
  },
  {
    slug: "design-consultancy-heritage",
    title: "Heritage Restoration Strategy",
    category: "Design Consultancy",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549479905-195bde9f92ce?w=1920&q=80"
    ],
    description: "Expert consultancy for regenerating an 18th-century structure with modern luxurious elements.",
    client: "National Heritage Trust",
    year: "2023",
    location: "London, UK"
  },

  // Construction (Turnkey)
  {
    slug: "turnkey-skyscraper",
    title: "The Vertex Tower",
    category: "Construction (Turnkey)",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1572522435728-64c8dcd9ee55?w=1920&q=80"
    ],
    description: "End-to-end turnkey construction of a 40-story luxury commercial skyscraper.",
    client: "Vertex Holdings",
    year: "2025",
    location: "New York, NY"
  },
  {
    slug: "turnkey-villa",
    title: "Oasis Residency",
    category: "Construction (Turnkey)",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
    ],
    description: "A complete turnkey residential project delivering unparalleled luxury and state-of-the-art smart home integration.",
    client: "Private Client",
    year: "2022",
    location: "Dubai, UAE"
  },

  // Architecture/Interior
  {
    slug: "arch-interior-boutique",
    title: "Lumiere Boutique",
    category: "Architecture/Interior",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
    ],
    description: "A flagship retail space for a high-end fashion label, combining minimalist architecture with bold, golden accents to elevate the brand experience.",
    client: "Lumiere Fashion",
    year: "2023",
    location: "Paris, France"
  },
  {
    slug: "arch-interior-spa",
    title: "Serenity Spa",
    category: "Architecture/Interior",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?w=1920&q=80"
    ],
    description: "An interior renovation of a luxury wellness spa focusing on sensory tranquility, natural stone, and soft lighting.",
    client: "Serenity Wellness Group",
    year: "2021",
    location: "Bali, Indonesia"
  },

  // 3D Visualisation
  {
    slug: "3d-vis-cyber-city",
    title: "Neon Metropolis 2050",
    category: "3D Visualisation",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?w=1920&q=80"
    ],
    description: "High-fidelity, photorealistic 3D rendering and VR visualization for a futuristic smart city concept.",
    client: "Global Urban Planning Corp",
    year: "2024",
    location: "Singapore"
  },
  {
    slug: "3d-vis-resort",
    title: "Azure Coast Resort",
    category: "3D Visualisation",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687983-05ef8821cbd1?w=1920&q=80"
    ],
    description: "Breathtaking architectural visualization capturing natural light dynamics for an upcoming coastal resort.",
    client: "Azure Luxury Hospitality",
    year: "2025",
    location: "Malibu, CA"
  }
];

