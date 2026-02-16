import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import Marquee from '../components/Marquee'

const services = [
  {
    icon: '◆',
    title: 'Web Design',
    description: 'We design interfaces that are not just beautiful — they convert. Every element is intentional, every interaction is purposeful.',
    tags: ['UI/UX Design', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    icon: '⬡',
    title: 'Web Development',
    description: 'From landing pages to complex web applications. We build fast, scalable, and maintainable code that grows with your business.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'APIs'],
  },
  {
    icon: '△',
    title: 'Branding & Identity',
    description: 'Your brand is more than a logo. We craft complete visual identities that tell your story and make you unforgettable.',
    tags: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Guidelines'],
  },
  {
    icon: '○',
    title: 'E-Commerce',
    description: 'Online stores that sell. We build conversion-optimized shopping experiences with seamless checkout flows.',
    tags: ['Shopify', 'Custom Stores', 'Payment', 'Inventory'],
  },
  {
    icon: '□',
    title: 'SEO & Performance',
    description: 'Being found matters. We optimize your digital presence for search engines and blazing-fast performance.',
    tags: ['Technical SEO', 'Core Web Vitals', 'Analytics', 'Audits'],
  },
  {
    icon: '✦',
    title: 'Product Strategy',
    description: 'Before we build, we think. We help you define the right product, the right audience, and the right approach.',
    tags: ['Research', 'Roadmapping', 'MVP Strategy', 'Growth'],
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We dive deep into your business, audience, and goals. We ask the hard questions so we build the right thing.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'We define the architecture, user flows, and technical approach. Every decision is backed by data and experience.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Pixel-perfect mockups and interactive prototypes. We iterate until every detail is exactly right.',
  },
  {
    step: '04',
    title: 'Development',
    description: 'Clean, performant code. We build with modern technologies and best practices for long-term maintainability.',
  },
  {
    step: '05',
    title: 'Launch & Optimize',
    description: 'Deployment, monitoring, and continuous improvement. We don\'t just launch — we make sure it thrives.',
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="font-display text-xs uppercase tracking-[0.3em] text-lime block mb-6 fade-in">Our Services</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8 fade-in fade-in-delay-1">
            Everything you need<br />
            to <span className="text-lime">dominate</span> online.
          </h1>
          <p className="text-white/40 text-lg md:text-xl max-w-2xl leading-relaxed fade-in fade-in-delay-2">
            From concept to launch and beyond — we offer end-to-end digital services
            that transform your vision into measurable results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tag="Our Process"
            title={<>How we turn ideas into<br /><span className="text-lime">digital reality</span></>}
            description="A battle-tested process refined over hundreds of projects. Transparent, collaborative, and relentlessly focused on results."
          />

          <div className="space-y-0 mt-16">
            {process.map((item, i) => (
              <div
                key={item.step}
                className="group flex gap-8 md:gap-16 py-10 border-b border-white/5 hover:border-[#c8ff00]/20 transition-colors duration-500"
              >
                <span className="font-display text-4xl md:text-6xl font-bold text-white/5 group-hover:text-[#c8ff00]/20 transition-colors duration-500 shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-3 group-hover:text-lime transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed max-w-xl">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <Marquee items={['REACT', 'NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 'TAILWIND', 'FIGMA', 'VERCEL', 'SUPABASE']} speed={35} />

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            tag="Ready?"
            title={<>Let's build something<br /><span className="text-lime">incredible</span> together</>}
            description="Tell us about your project and we'll get back to you within 24 hours."
            align="center"
          />
          <Link to="/contact" className="btn-primary">
            Start Your Project →
          </Link>
        </div>
      </section>
    </>
  )
}
