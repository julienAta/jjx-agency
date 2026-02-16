import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'

const categories = ['All', 'Web Design', 'E-Commerce', 'Web App', 'Branding']

const projects = [
  {
    title: 'Lumina Finance',
    category: 'Web App',
    description: 'A next-gen banking dashboard with real-time analytics and AI-powered insights.',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  },
  {
    title: 'Noire Fashion',
    category: 'E-Commerce',
    description: 'Luxury fashion brand with immersive shopping experience and AR try-on.',
    gradient: 'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
  },
  {
    title: 'Vertex SaaS',
    category: 'Web App',
    description: 'Enterprise project management tool for distributed teams across the globe.',
    gradient: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #c8ff0020 100%)',
  },
  {
    title: 'Bloom Wellness',
    category: 'Web Design',
    description: 'Health & wellness platform with personalized coaching and tracking.',
    gradient: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
  },
  {
    title: 'Cipher Security',
    category: 'Branding',
    description: 'Complete brand identity for a cybersecurity startup disrupting the market.',
    gradient: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
  },
  {
    title: 'Atlas Travel',
    category: 'E-Commerce',
    description: 'Premium travel booking platform with AI-curated luxury experiences.',
    gradient: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
  },
  {
    title: 'Pulse Analytics',
    category: 'Web App',
    description: 'Real-time data visualization dashboard for marketing teams.',
    gradient: 'linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)',
  },
  {
    title: 'Aura Cosmetics',
    category: 'Web Design',
    description: 'Elegant product showcase with 3D interactions and smooth animations.',
    gradient: 'linear-gradient(135deg, #3c1053 0%, #ad5389 100%)',
  },
  {
    title: 'NexGen Studio',
    category: 'Branding',
    description: 'Full rebrand for a creative agency including website, collateral, and guidelines.',
    gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
  },
]

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="font-display text-xs uppercase tracking-[0.3em] text-lime block mb-6 fade-in">Our Work</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8 fade-in fade-in-delay-1">
            Projects that<br />
            <span className="text-lime">speak louder</span><br />
            than words.
          </h1>
          <p className="text-white/40 text-lg md:text-xl max-w-2xl leading-relaxed fade-in fade-in-delay-2">
            A curated selection of our finest work. Each project represents a unique challenge
            solved with creativity, strategy, and technical excellence.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 pb-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-display text-xs uppercase tracking-[0.15em] px-5 py-2.5 border transition-all duration-300 ${
                active === cat
                  ? 'bg-lime text-black border-lime'
                  : 'border-white/10 text-white/40 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/30 font-display text-lg">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-t border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-display text-3xl md:text-4xl font-bold text-lime">150+</div>
            <div className="text-xs text-white/30 uppercase tracking-wider mt-1">Projects</div>
          </div>
          <div>
            <div className="font-display text-3xl md:text-4xl font-bold text-lime">12</div>
            <div className="text-xs text-white/30 uppercase tracking-wider mt-1">Industries</div>
          </div>
          <div>
            <div className="font-display text-3xl md:text-4xl font-bold text-lime">8</div>
            <div className="text-xs text-white/30 uppercase tracking-wider mt-1">Awards</div>
          </div>
          <div>
            <div className="font-display text-3xl md:text-4xl font-bold text-lime">100%</div>
            <div className="text-xs text-white/30 uppercase tracking-wider mt-1">On Time</div>
          </div>
        </div>
      </section>
    </>
  )
}
