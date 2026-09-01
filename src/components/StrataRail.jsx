const LAYERS = [
  { id: 'surface', label: 'Surface' },
  { id: 'who', label: 'Who I am' },
  { id: 'built', label: 'What I\u2019ve built' },
  { id: 'depth', label: 'How I think' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export default function StrataRail({ active }) {
  const activeIndex = LAYERS.findIndex((l) => l.id === active)

  return (
    <nav
      aria-label="Page depth"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-0"
    >
      {LAYERS.map((layer, i) => {
        const isActive = i === activeIndex
        const isPassed = i < activeIndex
        return (
          <a
            key={layer.id}
            href={`#${layer.id}`}
            className="group relative flex items-center gap-3 py-2.5"
          >
            <span
              className={`font-mono text-[11px] tracking-wide transition-all duration-300 ${
                isActive
                  ? 'opacity-100 text-paper translate-x-0'
                  : 'opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0'
              }`}
            >
              {layer.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-2.5 h-2.5 bg-signal'
                  : isPassed
                  ? 'w-1.5 h-1.5 bg-signal-dim'
                  : 'w-1.5 h-1.5 bg-line group-hover:bg-paper-dim'
              }`}
            />
          </a>
        )
      })}
    </nav>
  )
}
