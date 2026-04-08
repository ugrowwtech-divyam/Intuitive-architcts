import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface PageProps {
  params: {
    slug: string;
  };
}

const categoryMap: Record<string, string> = {
  "design-consultancy": "Design Consultancy",
  "construction-turnkey": "Construction (Turnkey)",
  "architecture-interior": "Architecture/Interior",
  "3d-visualisation": "3D Visualisation"
};

const bgMap: Record<string, string> = {
  "design-consultancy": "https://images.unsplash.com/photo-1541888082470-388b1cc9811d?w=1920&q=80",
  "construction-turnkey": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
  "architecture-interior": "https://images.unsplash.com/photo-1552693673-1bf958298935?w=1920&q=80",
  "3d-visualisation": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1920&q=80"
};

// Next.js 15 requires awaiting params
export default async function AccomplishmentCategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  const categoryName = categoryMap[slug];
  const bgImage = bgMap[slug] || "https://images.unsplash.com/photo-1600607687983-05ef8821cbd1?w=1920&q=80";

  if (!categoryName) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-4xl text-white font-serif mb-4">Category Not Found</h1>
          <Link href="/" className="text-gradient-gold tracking-widest uppercase text-sm font-semibold hover:text-white transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const categoryProjects = projects.filter(p => p.category === categoryName);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Category Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt={categoryName}
            fill
            className="object-cover opacity-40 mix-blend-luminosity filter grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 uppercase tracking-widest text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-serif text-white font-bold tracking-tight drop-shadow-lg">
            {categoryName}
          </h1>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mt-8"></div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-4 bg-black flex-1 border-t border-arch-card">
        <div className="max-w-7xl mx-auto">
          {categoryProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProjects.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-arch-card rounded-sm">
              <p className="text-arch-muted text-xl">Projects in this category will be available soon.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
