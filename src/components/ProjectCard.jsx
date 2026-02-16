import { useState } from 'react'

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
        <div
          className="w-full h-full transition-transform duration-700 ease-out"
          style={{
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            background: project.gradient,
          }}
        />
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 bg-black/60 flex flex-col justify-end p-6 transition-opacity duration-500 ${
        hovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <span className="font-display text-xs uppercase tracking-[0.2em] text-lime mb-2">{project.category}</span>
        <h3 className="font-display text-xl font-bold mb-1">{project.title}</h3>
        <p className="text-white/60 text-sm">{project.description}</p>
      </div>

      {/* Bottom info (always visible) */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="font-display font-semibold">{project.title}</h3>
          <p className="text-white/40 text-sm">{project.category}</p>
        </div>
        <span className="text-lime font-display text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          View →
        </span>
      </div>
    </div>
  )
}
