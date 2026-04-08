import ProjectCard from "@/components/ui/ProjectCard";
import { ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ChatWidget from "@/components/ui/ChatWidget";

import { projects } from "@/data/projects";

const featuredProjects = projects.slice(0, 3); // showing first 3 for selection

const accomplishments = [
  {
    title: "Design Consultancy",
    slug: "design-consultancy",
    image: "https://images.unsplash.com/photo-1541888082470-388b1cc9811d?w=1920&q=80",
    spanCss: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto"
  },
  {
    title: "Construction (Turnkey)",
    slug: "construction-turnkey",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    spanCss: "md:col-span-1 md:row-span-1 aspect-square"
  },
  {
    title: "Architecture/Interior",
    slug: "architecture-interior",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=1920&q=80",
    spanCss: "md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto"
  },
  {
    title: "3D Visualisation",
    slug: "3d-visualisation",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1920&q=80",
    spanCss: "md:col-span-2 md:row-span-1 aspect-[2/1]"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687983-05ef8821cbd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Hero Architectural Image"
            fill
            className="object-cover opacity-50 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <h1 className="text-5xl md:text-8xl font-serif text-white font-bold mb-6 tracking-tight drop-shadow-lg">
            Design Beyond <span className="text-gradient-gold italic">Boundaries</span>.
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            We are Intuitive Architects, shaping environments where human experience and nature converge in perfect harmony.
          </p>
          <Link href="/portfolio" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-black font-semibold tracking-widest uppercase text-sm hover:scale-105 transition-transform duration-500 rounded-sm">
            Explore Our Work <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Accomplishments Section - Masonry Grid */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Accomplishments</h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto"></div>
            <p className="text-arch-muted mt-6 max-w-2xl mx-auto leading-relaxed text-lg">
              Explore the distinct facets of our practice. Hover to discover, click to explore the legacy we’ve built in each domain.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[800px]">
            {accomplishments.map((item, idx) => (
              <Link 
                key={idx} 
                href={`/accomplishments/${item.slug}`}
                className={`group relative block overflow-hidden border border-arch-card hover:border-arch-gold transition-colors duration-500 ${item.spanCss} bg-arch-gray`}
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-90 mix-blend-luminosity group-hover:mix-blend-normal"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-70" />
                </div>
                <div className="absolute bottom-0 left-0 p-8 z-10 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl md:text-3xl font-serif text-white group-hover:text-gradient-gold transition-all duration-300">
                      {item.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4 bg-arch-gray border-y border-arch-card">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-serif text-white mb-4">Selected Works</h2>
              <div className="w-20 h-1 bg-gradient-gold"></div>
            </div>
            <Link href="/portfolio" className="hidden md:flex items-center gap-2 text-white hover:text-arch-gold transition-colors uppercase tracking-widest text-sm font-semibold">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-gradient-gold uppercase tracking-widest text-sm font-semibold">
              View All Works <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative aspect-[4/3] lg:aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1481253127861-534498168948?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Intuitive Architects Team"
              fill
              className="object-cover mix-blend-luminosity filter grayscale"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-gold hidden md:block z-0 opacity-80" />
            <div className="absolute inset-0 block md:hidden bg-gradient-gold mix-blend-overlay opacity-20" />
          </div>
          <div className="w-full lg:w-1/2 relative z-10">
            <h2 className="text-4xl font-serif text-white mb-6">Built on Vision and Precision</h2>
            <p className="text-arch-muted text-lg leading-relaxed mb-6">
              Founded in 2012, Intuitive Architects brings together visionary architects, innovative designers, and engineering experts. We believe that architecture goes beyond structure—it is about composing spatial poetry that resonates with its inhabitants.
            </p>
            <p className="text-arch-muted text-lg leading-relaxed mb-10">
              Our minimalist aesthetic emphasizes natural light, sustainable materials, and uncluttered elegance, creating environments that stand the test of time.
            </p>
            <Link href="/about" className="inline-block border-b border-[#d4af37]/50 text-white hover:text-gradient-gold transition-all pb-1 uppercase tracking-widest text-sm font-semibold hover:border-[#d4af37]">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-arch-gray relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-[800px] h-[800px] -right-[200px] -top-[400px] rounded-full bg-gradient-gold blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Quote className="w-16 h-16 text-[#BBA03E] mx-auto mb-8 opacity-50" />
          <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed mb-10 italic">
            "Working with Intuitive Architects was a revelation. They transformed our abstract concepts into a physical space that is not only functional but deeply inspiring. Their attention to detail and golden touches make all the difference."
          </p>
          <div>
            <h4 className="text-gradient-gold font-bold uppercase tracking-wider text-sm mb-1">Eleanor Vance</h4>
            <p className="text-arch-muted text-sm">CEO, Horizon Enterprises</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-4 bg-black border-t border-arch-card text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-arch-muted mb-12">
            Let's discuss how we can bring your architectural vision to life.
          </p>
          <Link href="/contact" className="inline-block px-10 py-5 bg-gradient-gold text-black font-semibold text-lg hover:scale-105 transition-transform duration-300 rounded-sm">
            Contact Us Today
          </Link>
        </div>
      </section>
    <ChatWidget />
    </div>
  );
}
