import ProjectCard from "@/components/ui/ProjectCard";
import { ArrowRight, Building2, Compass, PencilRuler, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ChatWidget from "@/components/ui/ChatWidget";

import { projects } from "@/data/projects";

const featuredProjects = projects;

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687983-05ef8821cbd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Hero Architectural Image"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-arch-black/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <h1 className="text-5xl md:text-8xl font-serif text-arch-white font-bold mb-6 tracking-tight">
            Design Beyond <span className="text-arch-gold italic">Boundaries</span>.
          </h1>
          <p className="text-xl md:text-2xl text-arch-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            We are Intuit Architects, shaping environments where human experience and nature converge in perfect harmony.
          </p>
          <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 bg-arch-gold text-arch-black font-semibold tracking-wide uppercase text-sm hover:bg-white transition-colors duration-300">
            Explore Our Work <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4 bg-arch-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-serif text-arch-white mb-4">Selected Works</h2>
              <div className="w-20 h-1 bg-arch-gold"></div>
            </div>
            <Link href="/portfolio" className="hidden md:flex items-center gap-2 text-arch-gold hover:text-arch-white transition-colors uppercase tracking-widest text-sm font-semibold">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-arch-gold uppercase tracking-widest text-sm font-semibold">
              View All Works <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4 bg-arch-gray border-y border-arch-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-arch-white mb-4">Our Expertise</h2>
            <div className="w-20 h-1 bg-arch-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Building2, title: "Architecture", desc: "Comprehensive architectural design tailored to cultural, commercial, and residential contexts." },
              { icon: PencilRuler, title: "Interior Design", desc: "Crafting immersive interior details that breathe life and character into every space." },
              { icon: Compass, title: "Master Planning", desc: "Strategic urban and site planning blending infrastructure, community, and ecology." },
            ].map((service, i) => (
              <div key={i} className="bg-arch-card p-10 border border-arch-black hover:border-arch-gold transition-colors duration-300">
                <service.icon className="w-12 h-12 text-arch-gold mb-6" />
                <h3 className="text-2xl font-serif text-arch-white mb-4">{service.title}</h3>
                <p className="text-arch-muted leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-arch-bg">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative aspect-[4/3] lg:aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1481253127861-534498168948?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Intuit Architects Team"
              fill
              className="object-cover"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-arch-gold hidden md:block z-0" />
          </div>
          <div className="w-full lg:w-1/2 relative z-10">
            <h2 className="text-4xl font-serif text-arch-white mb-6">Built on Vision and Precision</h2>
            <p className="text-arch-muted text-lg leading-relaxed mb-6">
              Founded in 2012, Intuit Architects brings together visionary architects, innovative designers, and engineering experts. We believe that architecture goes beyond structure—it is about composing spatial poetry that resonates with its inhabitants.
            </p>
            <p className="text-arch-muted text-lg leading-relaxed mb-10">
              Our minimalist aesthetic emphasizes natural light, sustainable materials, and uncluttered elegance, creating environments that stand the test of time.
            </p>
            <Link href="/about" className="inline-block border-b-2 border-arch-gold text-arch-white hover:text-arch-gold transition-colors pb-1 uppercase tracking-widest text-sm font-semibold">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-arch-gray">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 text-arch-gold mx-auto mb-8 opacity-50" />
          <p className="text-2xl md:text-3xl font-serif text-arch-white leading-relaxed mb-10 italic">
            "Working with Intuit Architects was a revelation. They transformed our abstract concepts into a physical space that is not only functional but deeply inspiring. Their attention to detail and golden touches make all the difference."
          </p>
          <div>
            <h4 className="text-arch-gold font-bold uppercase tracking-wider text-sm mb-1">Eleanor Vance</h4>
            <p className="text-arch-muted text-sm">CEO, Horizon Enterprises</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-4 bg-arch-bg border-t border-arch-card text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-serif text-arch-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-arch-muted mb-12">
            Let's discuss how we can bring your architectural vision to life.
          </p>
          <Link href="/contact" className="inline-block px-10 py-5 bg-arch-gold text-arch-black font-semibold text-lg hover:bg-arch-white transition-colors duration-300">
            Contact Us Today
          </Link>
        </div>
      </section>
    <ChatWidget />
    </div>
  );
}
