import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

const services = ['Web Design', 'Web Development', 'E-Commerce', 'Branding', 'SEO', 'Product Strategy', 'Other']
const budgets = ['< $5k', '$5k – $15k', '$15k – $50k', '$50k+', 'Not sure yet']

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="font-display text-xs uppercase tracking-[0.3em] text-lime block mb-6 fade-in">Contact</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8 fade-in fade-in-delay-1">
            Let's start<br />
            <span className="text-lime">something great.</span>
          </h1>
          <p className="text-white/40 text-lg md:text-xl max-w-2xl leading-relaxed fade-in fade-in-delay-2">
            Have a project in mind? We'd love to hear about it. Fill out the form below
            and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="border border-[#c8ff00]/30 bg-[#c8ff00]/5 p-12 text-center">
                <div className="text-5xl mb-6">✓</div>
                <h3 className="font-display text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-white/50">
                  Thanks for reaching out. We'll review your project details and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-display text-xs uppercase tracking-wider text-white/40 mb-3">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-white focus:border-[#c8ff00] outline-none transition-colors font-body"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block font-display text-xs uppercase tracking-wider text-white/40 mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-white focus:border-[#c8ff00] outline-none transition-colors font-body"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block font-display text-xs uppercase tracking-wider text-white/40 mb-3">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-white focus:border-[#c8ff00] outline-none transition-colors font-body"
                    placeholder="Your company name"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block font-display text-xs uppercase tracking-wider text-white/40 mb-4">
                    What do you need? *
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {services.map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setFormData({ ...formData, service: s })}
                        className={`font-display text-xs uppercase tracking-wider px-4 py-2.5 border transition-all duration-300 ${
                          formData.service === s
                            ? 'bg-lime text-black border-lime'
                            : 'border-white/10 text-white/40 hover:border-white/30'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block font-display text-xs uppercase tracking-wider text-white/40 mb-4">
                    Budget Range
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {budgets.map(b => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`font-display text-xs uppercase tracking-wider px-4 py-2.5 border transition-all duration-300 ${
                          formData.budget === b
                            ? 'bg-lime text-black border-lime'
                            : 'border-white/10 text-white/40 hover:border-white/30'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-display text-xs uppercase tracking-wider text-white/40 mb-3">
                    Tell us about your project *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border border-white/10 p-4 text-white focus:border-[#c8ff00] outline-none transition-colors font-body resize-none"
                    placeholder="Describe your project, goals, timeline..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-sm">
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Info Sidebar */}
          <div className="lg:col-span-2 space-y-10">
            {/* Contact Info */}
            <div>
              <h3 className="font-display text-sm uppercase tracking-[0.2em] text-white/30 mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="border border-white/5 p-5 hover:border-white/10 transition-colors">
                  <span className="text-xs text-white/30 font-display uppercase tracking-wider">Email</span>
                  <p className="text-lime font-display mt-1">hello@jjx.agency</p>
                </div>
                <div className="border border-white/5 p-5 hover:border-white/10 transition-colors">
                  <span className="text-xs text-white/30 font-display uppercase tracking-wider">Phone</span>
                  <p className="text-white font-display mt-1">+1 (555) 123-4567</p>
                </div>
                <div className="border border-white/5 p-5 hover:border-white/10 transition-colors">
                  <span className="text-xs text-white/30 font-display uppercase tracking-wider">Location</span>
                  <p className="text-white font-display mt-1">San Francisco, CA</p>
                  <p className="text-white/30 text-sm mt-0.5">Remote-first team</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="border border-[#c8ff00]/20 bg-[#c8ff00]/5 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-lime rounded-full" style={{ animation: 'pulse-glow 2s infinite' }} />
                <span className="font-display text-sm font-semibold text-lime">Quick Response</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                We typically respond within 24 hours. For urgent projects,
                mention it in your message and we'll prioritize.
              </p>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-display text-sm uppercase tracking-[0.2em] text-white/30 mb-6">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Twitter', 'LinkedIn', 'Dribbble', 'GitHub'].map(social => (
                  <a
                    key={social}
                    href="#"
                    className="border border-white/5 p-4 text-center font-display text-sm text-white/40 hover:text-lime hover:border-[#c8ff00]/30 transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
