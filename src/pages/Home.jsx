import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import ServiceCard from '../components/ServiceCard'
import StatCounter from '../components/StatCounter'
import Marquee from '../components/Marquee'

const featuredProjects = [
  {
    title: 'Lumina Finance',
    category: 'Fintech Platform',
    description: 'A next-gen banking dashboard with real-time analytics.',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  },
  {
    title: 'Noire Fashion',
    category: 'E-Commerce',
    description: 'Luxury fashion brand with immersive shopping experience.',
    gradient: 'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
  },
  {
    title: 'Vertex SaaS',
    category: 'Web Application',
    description: 'Enterprise project management tool for distributed teams.',
    gradient: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #c8ff0020 100%)',
  },
]

const services = [
  {
    icon: '◆',
    title: 'Web Design',
    description: 'Pixel-perfect interfaces that captivate users and drive conversions.',
    tags: ['UI/UX', 'Figma', 'Prototyping'],
  },
  {
    icon: '⬡',
    title: 'Development',
    description: 'Scalable, performant applications built with modern technologies.',
    tags: ['React', 'Next.js', 'Node.js'],
  },
  {
    icon: '△',
    title: 'Branding',
    description: 'Strategic brand identities that resonate and differentiate.',
    tags: ['Identity', 'Strategy', 'Guidelines'],
  },
]

const clients = ['STRIPE', 'NOTION', 'VERCEL', 'LINEAR', 'FIGMA', 'SUPABASE', 'RAILWAY', 'PLANETSCALE']

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c8ff00] rounded-full opacity-[0.03] blur-[150px]" />

        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <div className="fade-in">
            <span className="font-display text-xs uppercase tracking-[0.4em] text-white/30 block mb-8">
              Digital Agency — Est. 2024
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter mb-8 fade-in fade-in-delay-1">
            We build<br />
            <span className="text-lime">digital</span><br />
            experiences
          </h1>

          <p className="text-white/40 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed fade-in fade-in-delay-2">
            JJX is a creative web agency crafting bold, high-performance digital products for ambitious brands.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in fade-in-delay-3">
            <Link to="/projects" className="btn-primary">
              View Our Work →
            </Link>
            <Link to="/contact" className="btn-outline">
              Let's Talk
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="mt-24 fade-in fade-in-delay-5">
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-auto" />
            <span className="text-xs text-white/20 font-display uppercase tracking-[0.3em] mt-4 block">Scroll</span>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee items={clients} speed={40} />

      {/* Stats */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <StatCounter number="150" suffix="+" label="Projects Delivered" />
          <StatCounter number="40" suffix="+" label="Happy Clients" />
          <StatCounter number="12" label="Team Members" />
          <StatCounter number="98" suffix="%" label="Client Retention" />
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <SectionHeading
              tag="What We Do"
              title={<>Services that<br /><span className="text-lime">move the needle</span></>}
            />
            <Link to="/services" className="btn-outline text-xs mb-1 self-start md:self-auto">
              All Services →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <SectionHeading
              tag="Selected Work"
              title={<>Projects we're<br /><span className="text-lime">proud of</span></>}
            />
            <Link to="/projects" className="btn-outline text-xs mb-1 self-start md:self-auto">
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why JJX */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              tag="Why JJX"
              title={<>We don't just build<br />websites. We build <span className="text-lime">growth engines.</span></>}
            />
            <div className="space-y-6 text-white/50 leading-relaxed">
              <p>
                Every pixel, every line of code, every interaction is designed with one goal:
                to make your business impossible to ignore.
              </p>
              <p>
                We combine strategic thinking with obsessive craftsmanship to create
                digital experiences that convert visitors into loyal customers.
              </p>
            </div>
            <Link to="/about" className="btn-primary mt-8 inline-flex">
              Learn More →
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-square bg-[#111] border border-white/5 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-3 h-3 bg-lime" />
              <div className="absolute bottom-8 right-8 w-24 h-24 border border-lime/20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[200px] font-bold text-white/[0.02] leading-none select-none">
                JJX
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8ff00]/5 to-transparent" />

              {/* Stats inside the box */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-white/5 p-4 bg-[#0a0a0a]/50 backdrop-blur">
                    <div className="font-display text-2xl font-bold text-lime">5★</div>
                    <div className="text-xs text-white/30 mt-1">Avg. Rating</div>
                  </div>
                  <div className="border border-white/5 p-4 bg-[#0a0a0a]/50 backdrop-blur">
                    <div className="font-display text-2xl font-bold text-lime">2x</div>
                    <div className="text-xs text-white/30 mt-1">Avg. ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee 2 */}
      <Marquee items={['DESIGN', 'DEVELOP', 'DEPLOY', 'ITERATE', 'SCALE', 'OPTIMIZE']} speed={25} />
    </>
  )
}
