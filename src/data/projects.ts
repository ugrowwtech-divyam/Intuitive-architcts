export interface Project {
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Interior" | "Cultural";
  image: string;
  gallery: string[];
  description: string;
  client: string;
  year: string;
  location: string;
}

export const projects: Project[] = [
  {
    slug: "villa-nova",
    title: "Villa Nova",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A stunning modern villa nestled in the hills, designed to maximize natural light and offer panoramic views of the surrounding landscape. The use of raw concrete and warm timber creates a striking contrast.",
    client: "Private Client",
    year: "2023",
    location: "Beverly Hills, CA"
  },
  {
    slug: "horizon-tower",
    title: "Horizon Tower",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1572522435728-64c8dcd9ee55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A sustainable 40-story commercial tower featuring a distinctive geometric facade that optimizes energy efficiency. The building incorporates green terraces every five floors.",
    client: "Horizon Enterprises",
    year: "2022",
    location: "New York, NY"
  },
  {
    slug: "serenity-spa",
    title: "Serenity Spa",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An interior renovation of a historic building into a luxury wellness spa. The design language focuses on sensory tranquility, using natural stone, soft lighting, and flowing water features.",
    client: "Serenity Wellness Group",
    year: "2021",
    location: "London, UK"
  },
  {
    slug: "alpine-retreat",
    title: "Alpine Retreat",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A contemporary mountain cabin designed to withstand extreme alpine conditions while providing a warm, minimalist sanctuary for its inhabitants.",
    client: "Private Client",
    year: "2024",
    location: "Aspen, CO"
  },
  {
    slug: "echo-museum",
    title: "Echo Museum",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549479905-195bde9f92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A cultural hub dedicated to contemporary acoustic arts. Its structure acts as a passive amplifier, designed to enhance the auditory experience of the exhibits.",
    client: "City Arts Council",
    year: "2019",
    location: "Seattle, WA"
  },
  {
    slug: "lumiere-boutique",
    title: "Lumiere Boutique",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A flagship retail space for a high-end fashion label, combining minimalist architecture with bold, golden accents to elevate the brand experience.",
    client: "Lumiere Fashion",
    year: "2023",
    location: "Paris, France"
  }
];
