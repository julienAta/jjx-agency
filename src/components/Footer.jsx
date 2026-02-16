import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a]">
      {/* CTA Band */}
      <div className="section-padding text-center">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-white/40 mb-4">Ready to build?</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">
          Let's create something<br />
          <span className="text-lime">extraordinary.</span>
        </h2>
        <Link to="/contact" className="btn-primary text-sm">
          Get in Touch →
        </Link>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5 px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-xl font-bold tracking-tighter">
            JJX<span className="text-lime">.</span>
          </div>

          <div className="flex gap-8 text-sm text-white/40">
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex gap-6 text-sm text-white/30">
            <a href="#" className="hover:text-lime transition-colors">Twitter</a>
            <a href="#" className="hover:text-lime transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-lime transition-colors">Dribbble</a>
            <a href="#" className="hover:text-lime transition-colors">GitHub</a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">© 2026 JJX Agency. All rights reserved.</p>
          <p className="text-xs text-white/20">Crafted with obsessive attention to detail.</p>
        </div>
      </div>
    </footer>
  )
}
