export default function SectionHeading({ tag, title, description, align = 'left' }) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      {tag && (
        <span className="font-display text-xs uppercase tracking-[0.3em] text-lime block mb-4">
          {tag}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-white/50 text-lg max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  )
}
