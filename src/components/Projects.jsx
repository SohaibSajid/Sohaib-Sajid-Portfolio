import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/content'
import GithubPulse from './GithubPulse'

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="border-t border-line py-8"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-6 text-left group"
        aria-expanded={open}
      >
        <div className="flex-1">
          <div className="flex items-baseline gap-4 flex-wrap">
            <h3 className="font-display text-2xl md:text-3xl text-paper group-hover:text-signal transition-colors">
              {project.name}
            </h3>
            <span className="font-mono text-xs text-paper-dim">{project.tagline}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[11px] px-2 py-1 border border-line text-paper-dim rounded-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <span
          className={`font-mono text-xl text-signal mt-1 shrink-0 transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-6 pl-0 md:pl-4 max-w-2xl border-l-0 md:border-l border-signal-dim/40 md:ml-1">
              <ul className="space-y-3">
                {project.depth.map((line, i) => (
                  <li key={i} className="text-sm text-paper-dim leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-signal" />
                    {line}
                  </li>
                ))}
              </ul>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 font-mono text-xs text-signal hover:text-paper transition-colors"
                >
                  {project.linkLabel}
                  <span aria-hidden>&#8599;</span>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="built" className="relative py-32 md:py-40 px-6 md:px-16 lg:px-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="font-mono text-xs text-signal mb-4"
      >
        02 &nbsp;&mdash;&nbsp; What I&rsquo;ve built
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display text-3xl md:text-4xl text-paper max-w-xl mb-6"
      >
        Four things, open each to see what&rsquo;s underneath.
      </motion.h2>

      <div className="max-w-4xl mt-12">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      <div className="max-w-4xl">
        <GithubPulse />
      </div>
    </section>
  )
}
