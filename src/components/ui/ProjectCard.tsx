import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  slug: string;
}

export default function ProjectCard({ title, category, image, slug }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${slug}`} className="group block relative overflow-hidden bg-arch-card">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-20 pointer-events-none" />
        
        {/* Golden border on hover */}
        <div className="absolute inset-4 border border-arch-gold/0 transition-colors duration-500 group-hover:border-arch-gold/100 pointer-events-none z-10" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-arch-black/90 via-arch-black/60 to-transparent">
        <h3 className="text-2xl font-serif text-arch-white mb-2 group-hover:text-arch-gold transition-colors">{title}</h3>
        <p className="text-arch-muted text-xs tracking-[0.2em] uppercase font-semibold">{category}</p>
        
        <div className="absolute bottom-8 right-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div className="w-10 h-10 rounded-full bg-arch-gold flex items-center justify-center text-arch-black">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
