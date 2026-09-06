import { motion } from 'framer-motion'

const facts = [
  { label: 'Studying', value: 'BS Artificial Intelligence, ITU Lahore' },
  { label: 'Standing', value: '5th semester \u00b7 3.33 GPA \u00b7 Class of 2028' },
  { label: 'Based in', value: 'Lahore, Pakistan' },
  { label: 'Currently', value: 'Building freelance AI & mobile products end to end' },
]

export default function WhoIAm() {
  return (
    <section id="who" className="relative py-32 md:py-40 px-6 md:px-16 lg:px-24 border-t border-line">
      <div className="grid md:grid-cols-12 gap-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5"
        >
          <p className="font-mono text-xs text-signal mb-4">01 &nbsp;&mdash;&nbsp; Who I am</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight text-paper">
            Somewhere between the model and the person who has to explain it.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:col-span-7 md:pt-2"
        >
          <div className="space-y-5 text-paper-dim leading-relaxed max-w-lg mb-10">
            <p>
              I'm an AI student with a habit of building the underlying
              piece myself before trusting a library to do it — a decision
              boundary, a memory cache, a rendering loop. That habit started
              long before machine learning: a GUI chess engine, a Metal
              Slug clone, a working text editor, and HugeInteger/HugeFraction
              libraries for arithmetic beyond native types, all built on a
              foundation of data structures, algorithms, and OOP.
            </p>
            <p>
              On the applied side, I split my time between coursework in
              machine learning and MLOps, and freelance client work — Flutter
              apps with Firebase and REST integrations, full-stack AI
              products — that forces me to defend every technical choice in
              plain, non-technical language.
            </p>
            <p>
              That combination — research instinct, shipping discipline, and
              a preference for understanding a system rather than just
              calling its API — is the thread running through everything
              below.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-lg">
            {facts.map((f) => (
              <div key={f.label} className="border-l border-line pl-4">
                <dt className="font-mono text-[11px] text-paper-dim/70 mb-1">{f.label}</dt>
                <dd className="text-sm text-paper">{f.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
