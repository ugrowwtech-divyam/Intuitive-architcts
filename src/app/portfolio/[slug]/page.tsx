import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find(p => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-arch-bg pb-24">
      {/* Hero */}
      <div className="relative h-[70vh] w-full">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-arch-bg via-arch-bg/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-arch-gold mb-6 hover:text-arch-white transition-colors uppercase tracking-widest text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Works
          </Link>
          <h1 className="text-5xl md:text-7xl font-serif text-arch-white mb-4">{project.title}</h1>
          <p className="text-arch-gold uppercase tracking-[0.2em] font-semibold">{project.category}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Project Info Sidebar */}
        <div className="col-span-1 space-y-8">
          <div className="p-8 bg-arch-card border border-arch-gray">
            <div className="mb-6">
              <p className="text-arch-muted text-sm uppercase mb-1">Client</p>
              <p className="text-arch-white font-medium">{project.client}</p>
            </div>
            <div className="mb-6">
              <p className="text-arch-muted text-sm uppercase mb-1">Year</p>
              <p className="text-arch-white font-medium">{project.year}</p>
            </div>
            <div className="mb-6">
              <p className="text-arch-muted text-sm uppercase mb-1">Location</p>
              <p className="text-arch-white font-medium">{project.location}</p>
            </div>
            <div>
              <p className="text-arch-muted text-sm uppercase mb-1">Category</p>
              <p className="text-arch-white font-medium">{project.category}</p>
            </div>
          </div>
        </div>

        {/* Description & Gallery */}
        <div className="col-span-1 md:col-span-2">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-serif text-arch-white mb-6">About the project</h2>
            <div className="w-12 h-1 bg-arch-gold mb-8"></div>
            <p className="text-arch-muted text-lg leading-relaxed mb-12">
              {project.description}
            </p>
          </div>

          <div className="space-y-8">
            {project.gallery.map((img, i) => (
              <div key={i} className="relative aspect-[16/9] w-full border border-arch-gray">
                <Image 
                  src={img} 
                  alt={`${project.title} Gallery Image ${i + 1}`} 
                  fill 
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
