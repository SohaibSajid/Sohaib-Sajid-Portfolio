import { motion } from 'framer-motion'
import { links } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24 border-t border-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        <p className="font-mono text-xs text-signal mb-6">05 &nbsp;&mdash;&nbsp; That&rsquo;s the depth</p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight text-paper mb-10">
          If any of that was useful, say hello.
        </h2>

        <div className="flex flex-wrap gap-x-10 gap-y-4">
          <a
            href={`mailto:${links.email}`}
            className="font-mono text-sm text-paper hover:text-signal transition-colors border-b border-line hover:border-signal pb-1"
          >
            {links.email}
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-paper hover:text-signal transition-colors border-b border-line hover:border-signal pb-1"
          >
            GitHub
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-paper hover:text-signal transition-colors border-b border-line hover:border-signal pb-1"
          >
            LinkedIn
          </a>
        </div>

        <a
          href="#surface"
          className="inline-flex items-center gap-2 mt-20 font-mono text-xs text-paper-dim hover:text-signal transition-colors"
        >
          <span aria-hidden>&#8593;</span>
          Back to the surface
        </a>
      </motion.div>
    </section>
  )
}
