import { useState } from 'react'
import { motion } from 'framer-motion'
import { links } from '../data/content'

export default function Resume() {
  const [showViewer, setShowViewer] = useState(false)

  return (
    <section id="resume" className="relative py-32 md:py-40 px-6 md:px-16 lg:px-24 border-t border-line">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="font-mono text-xs text-signal mb-4"
        >
          04 &nbsp;&mdash;&nbsp; Resume
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl text-paper max-w-xl mb-10"
        >
          The version of this page a PDF actually needs to say.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => setShowViewer((v) => !v)}
            className="inline-flex items-center gap-2 px-6 py-3 border border-paper text-paper font-mono text-xs hover:bg-paper hover:text-ink transition-colors"
          >
            {showViewer ? 'Hide resume' : 'View resume'}
          </button>
          <a
            href={links.resume}
            download
            className="inline-flex items-center gap-2 px-6 py-3 border border-line text-paper-dim font-mono text-xs hover:border-signal hover:text-signal transition-colors"
          >
            Download PDF
            <span aria-hidden>&#8595;</span>
          </a>
        </motion.div>

        {showViewer && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 border border-line overflow-hidden"
          >
            <iframe
              src={links.resume}
              title="Resume"
              className="w-full h-[75vh] bg-paper"
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
