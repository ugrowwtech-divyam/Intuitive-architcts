import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-arch-gray border-t border-arch-card py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1 border-l-2 border-arch-gold pl-4">
          <Link href="/" className="inline-block mb-4">
            <span className="text-arch-gold font-serif text-2xl font-bold">Intuit Architects</span>
          </Link>
          <p className="text-arch-muted leading-relaxed text-sm">
            Crafting premium architectural experiences that blend form, function, and nature. Elevating design standards since 2012.
          </p>
        </div>
        <div>
          <h4 className="text-arch-white font-serif text-lg mb-4">Studios</h4>
          <ul className="text-arch-muted space-y-2 text-sm">
            <li>New York, NY</li>
            <li>Los Angeles, CA</li>
            <li>London, UK</li>
          </ul>
        </div>
        <div>
          <h4 className="text-arch-white font-serif text-lg mb-4">Contact</h4>
          <ul className="text-arch-muted space-y-2 text-sm">
            <li><a href="mailto:hello@intuitarchitects.com" className="hover:text-arch-gold transition-colors">hello@intuitarchitects.com</a></li>
            <li>+1 (555) 123-4567</li>
            <li>Press: <a href="mailto:press@intuitarchitects.com" className="hover:text-arch-white transition-colors">press@intuitarchitects.com</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-arch-white font-serif text-lg mb-4">Socials</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-arch-bg flex items-center justify-center text-arch-muted hover:text-arch-gold hover:border-arch-gold border border-transparent transition-all">
              IG
            </a>
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-arch-bg flex items-center justify-center text-arch-muted hover:text-arch-gold hover:border-arch-gold border border-transparent transition-all">
              IN
            </a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-arch-bg flex items-center justify-center text-arch-muted hover:text-arch-gold hover:border-arch-gold border border-transparent transition-all">
              X
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-arch-card text-center text-arch-muted text-sm">
        <p>&copy; {new Date().getFullYear()} Intuit Architects. All rights reserved.</p>
      </div>
    </footer>
  );
}

