import { motion } from 'framer-motion'

const NAME = 'Sohaib Sajid'

export default function Hero() {
  return (
    <section
      id="surface"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-paper) 1px, transparent 1px), linear-gradient(90deg, var(--color-paper) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Giant watermark initials — texture and brand presence, not literal content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        aria-hidden="true"
        className="absolute -right-[4vw] top-1/2 -translate-y-1/2 pointer-events-none select-none"
      >
        <span className="font-display text-[clamp(14rem,38vw,32rem)] leading-none text-paper/[0.035]">
          SS
        </span>
      </motion.div>

      <div className="relative max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs tracking-wide text-signal mb-5"
        >
          Portfolio &nbsp;/&nbsp; Muhammad Sohaib Sajid
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display font-medium text-[clamp(3.2rem,10vw,7.5rem)] leading-[0.95] text-paper tracking-tight"
          >
            {NAME}
          </motion.h1>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          className="font-display font-normal text-[clamp(1.5rem,3.4vw,2.5rem)] leading-tight text-paper-dim mt-4 max-w-2xl"
        >
          AI student who builds the thing underneath the thing.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
          className="mt-8 max-w-xl text-lg text-paper-dim leading-relaxed"
        >
          Third-year AI student at ITU Lahore. I ship full-stack AI and mobile
          products end to end, and I like taking things apart to see how they
          actually work — an SVM from raw NumPy, a memory cache from a
          hand-built B-Tree.
        </motion.p>
      </div>

      <motion.a
        href="#who"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-6 md:left-16 lg:left-24 flex items-center gap-3 text-paper-dim hover:text-paper transition-colors group"
      >
        <span className="font-mono text-xs tracking-wide">Scroll to go deeper</span>
        <span className="block w-px h-8 bg-paper-dim group-hover:bg-signal transition-colors relative overflow-hidden">
          <span className="absolute inset-0 bg-signal animate-[pulse_2s_ease-in-out_infinite]" />
        </span>
      </motion.a>
    </section>
  )
}
