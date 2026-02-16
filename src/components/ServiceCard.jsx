export default function ServiceCard({ service, index }) {
  return (
    <div
      className="group relative border border-white/5 p-8 md:p-10 hover:border-[#c8ff00]/30 transition-all duration-500 bg-[#0f0f0f] hover:bg-[#111]"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Number */}
      <span className="font-display text-6xl font-bold text-white/5 absolute top-4 right-6 group-hover:text-[#c8ff00]/10 transition-colors duration-500">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Icon */}
      <div className="text-3xl mb-6">{service.icon}</div>

      {/* Content */}
      <h3 className="font-display text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-white/40 leading-relaxed mb-6">{service.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map(tag => (
          <span key={tag} className="text-xs font-display uppercase tracking-wider text-white/30 border border-white/10 px-3 py-1">
            {tag}
          </span>
        ))}
      </div>

      {/* Hover line */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-lime group-hover:w-full transition-all duration-700" />
    </div>
  )
}
