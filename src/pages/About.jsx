import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import Marquee from '../components/Marquee'

const team = [
  {
    name: 'James Jin',
    role: 'Founder & Creative Director',
    bio: 'Former lead designer at a top SaaS company. Obsessed with the intersection of art and technology.',
    initial: 'JJ',
    color: '#c8ff00',
  },
  {
    name: 'Xavier Moreau',
    role: 'Head of Development',
    bio: 'Full-stack architect with 10+ years of experience building products used by millions.',
    initial: 'XM',
    color: '#00d4ff',
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Designer',
    bio: 'Award-winning UI/UX designer. Believes great design is invisible — you just feel it.',
    initial: 'SC',
    color: '#ff6b6b',
  },
  {
    name: 'Marcus Rivera',
    role: 'Senior Developer',
    bio: 'React specialist and open-source contributor. Makes the impossible possible in code.',
    initial: 'MR',
    color: '#a78bfa',
  },
  {
    name: 'Léa Dupont',
    role: 'Brand Strategist',
    bio: 'Helps brands find their voice and stand out in crowded markets. Storytelling is her superpower.',
    initial: 'LD',
    color: '#f59e0b',
  },
  {
    name: 'Alex Park',
    role: 'Project Manager',
    bio: 'Keeps everything on track and everyone aligned. The calm in the creative storm.',
    initial: 'AP',
    color: '#10b981',
  },
]

const values = [
  {
    title: 'Craft Over Speed',
    description: 'We never cut corners. Every detail matters. We\'d rather take an extra day to get it right than ship something mediocre.',
  },
  {
    title: 'Radical Transparency',
    description: 'No hidden fees, no surprises. You see everything — our process, our progress, our challenges. We win together.',
  },
  {
    title: 'Results-Driven',
    description: 'Beautiful design is meaningless without business impact. We measure success in conversions, not just compliments.',
  },
  {
    title: 'Continuous Evolution',
    description: 'The web evolves fast. So do we. We\'re always learning, experimenting, and pushing what\'s possible.',
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="font-display text-xs uppercase tracking-[0.3em] text-lime block mb-6 fade-in">About JJX</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8 fade-in fade-in-delay-1">
            A small team with<br />
            <span className="text-lime">big ambitions.</span>
          </h1>
          <p className="text-white/40 text-lg md:text-xl max-w-2xl leading-relaxed fade-in fade-in-delay-2">
            Founded in 2024, JJX was born from a simple belief: the web deserves better.
            Better design, better code, better experiences.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading
              tag="Our Story"
              title={<>Born from<br /><span className="text-lime">frustration</span></>}
            />
            <div className="space-y-6 text-white/50 leading-relaxed">
              <p>
                We were tired of seeing the same generic websites everywhere. Cookie-cutter templates,
                lazy design, bloated code. The web was becoming a sea of sameness.
              </p>
              <p>
                So we built JJX — a studio that treats every project like a craft. Where designers
                and developers sit side by side. Where "good enough" is never good enough.
              </p>
              <p>
                Today, we work with ambitious brands across the globe, building digital experiences
                that are as unique as the businesses behind them.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-0 border-l border-white/10 ml-4">
            {[
              { year: '2024', event: 'JJX founded by James Jin & Xavier Moreau' },
              { year: '2024', event: 'First 10 clients, 100% retention rate' },
              { year: '2025', event: 'Team grows to 12. First international clients.' },
              { year: '2025', event: 'Awwwards Site of the Day nomination' },
              { year: '2026', event: '150+ projects delivered. Still hungry.' },
            ].map((item, i) => (
              <div key={i} className="relative pl-8 pb-10 last:pb-0">
                <div className="absolute left-0 top-0 w-2 h-2 bg-lime -translate-x-[5px] mt-1.5" />
                <span className="font-display text-xs text-lime tracking-wider">{item.year}</span>
                <p className="text-white/60 mt-1">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tag="Our Values"
            title={<>What we<br /><span className="text-lime">stand for</span></>}
          />

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {values.map((value, i) => (
              <div key={value.title} className="border border-white/5 p-8 hover:border-[#c8ff00]/20 transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <span className="font-display text-3xl font-bold text-white/5 group-hover:text-[#c8ff00]/15 transition-colors shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-lime transition-colors">{value.title}</h3>
                    <p className="text-white/40 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tag="The Team"
            title={<>The people behind<br /><span className="text-lime">the pixels</span></>}
            description="A diverse team of designers, developers, and strategists united by a shared obsession with quality."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {team.map((member) => (
              <div key={member.name} className="group border border-white/5 p-6 hover:border-white/10 transition-all duration-500">
                {/* Avatar */}
                <div
                  className="w-16 h-16 flex items-center justify-center font-display font-bold text-lg mb-6 text-black"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initial}
                </div>

                <h3 className="font-display font-bold text-lg">{member.name}</h3>
                <p className="text-xs font-display uppercase tracking-wider mt-1 mb-4" style={{ color: member.color }}>
                  {member.role}
                </p>
                <p className="text-white/40 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={['PASSIONATE', 'CREATIVE', 'TECHNICAL', 'STRATEGIC', 'RELIABLE', 'AMBITIOUS']} speed={30} />

      {/* Join CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            tag="Join Us"
            title={<>Want to be part of<br /><span className="text-lime">something special?</span></>}
            description="We're always looking for talented people who share our passion for exceptional digital work."
            align="center"
          />
          <Link to="/contact" className="btn-primary">
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  )
}
