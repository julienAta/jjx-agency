export default function Marquee({ items, speed = 30 }) {
  return (
    <div className="overflow-hidden border-y border-white/5 py-6">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="font-display text-4xl md:text-6xl font-bold text-white/5 mx-8">
            {item} <span className="text-lime">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
