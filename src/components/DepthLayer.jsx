import { motion } from 'framer-motion'
import { experience, skillGroups } from '../data/content'

export default function DepthLayer() {
  return (
    <section id="depth" className="relative py-32 md:py-40 px-6 md:px-16 lg:px-24 bg-ink-soft border-t border-line">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-paper) 1px, transparent 1px), linear-gradient(90deg, var(--color-paper) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="font-mono text-xs text-signal mb-4"
        >
          03 &nbsp;&mdash;&nbsp; How I think
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl text-paper max-w-2xl mb-16"
        >
          The floor of a tobacco factory taught me more about deploying
          models than any course did.
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-16 max-w-6xl">
          <div className="lg:col-span-7 space-y-14">
            {experience.map((e, i) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="flex items-baseline justify-between flex-wrap gap-2 mb-1">
                  <h3 className="font-display text-xl text-paper">{e.role}</h3>
                  <span className="font-mono text-[11px] text-paper-dim">{e.time}</span>
                </div>
                <p className="font-mono text-xs text-signal mb-4">{e.org}</p>
                <ul className="space-y-2.5">
                  {e.points.map((pt, j) => (
                    <li key={j} className="text-sm text-paper-dim leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-paper-dim" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
              }}
              className="grid grid-cols-2 gap-x-8 gap-y-10"
            >
              {skillGroups.map((g) => (
                <motion.div
                  key={g.label}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <h4 className="font-mono text-[11px] text-signal mb-3">{g.label}</h4>
                  <ul className="space-y-1.5">
                    {g.items.map((item) => (
                      <li key={item} className="text-sm text-paper-dim leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
