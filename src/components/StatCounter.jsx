export default function StatCounter({ number, label, suffix = '' }) {
  return (
    <div className="text-center">
      <div className="font-display text-5xl md:text-7xl font-bold text-lime">
        {number}<span className="text-3xl md:text-5xl">{suffix}</span>
      </div>
      <p className="font-display text-sm uppercase tracking-[0.2em] text-white/40 mt-2">{label}</p>
    </div>
  )
}
