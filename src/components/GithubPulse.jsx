import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { otherHighlights } from '../data/content'

const GITHUB_USER = 'SohaibSajid56'

export default function GithubPulse() {
  const [stats, setStats] = useState(null)
  const [status, setStatus] = useState('loading') // loading | ready | error

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USER}`),
          fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`),
        ])
        if (!userRes.ok || !reposRes.ok) throw new Error('bad response')
        const user = await userRes.json()
        const repos = await reposRes.json()

        const langCount = {}
        let stars = 0
        repos.forEach((r) => {
          if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1
          stars += r.stargazers_count || 0
        })
        const topLanguages = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name]) => name)

        if (!cancelled) {
          setStats({
            publicRepos: user.public_repos ?? repos.length,
            followers: user.followers ?? 0,
            stars,
            topLanguages,
          })
          setStatus('ready')
        }
      } catch {
        if (!cancelled) setStatus('error')
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="border-t border-line pt-10 mt-4"
    >
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div>
          <p className="font-mono text-[11px] text-paper-dim/70 mb-1">Beyond these four</p>
          <p className="font-display text-2xl text-paper">
            {status === 'ready' && stats
              ? `${stats.publicRepos} repos, live on GitHub.`
              : '13+ more, live on GitHub.'}
          </p>
        </div>
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-signal hover:text-paper transition-colors inline-flex items-center gap-2"
        >
          See every repo
          <span aria-hidden>&#8599;</span>
        </a>
      </div>

      {status === 'loading' && (
        <div className="flex gap-8 font-mono text-xs text-paper-dim/50 animate-pulse">
          <span>Fetching live stats&hellip;</span>
        </div>
      )}

      {status === 'error' && (
        <p className="font-mono text-xs text-paper-dim/60">
          Live stats unavailable right now — the repos are still all there.{' '}
          <a
            href={`https://github.com/${GITHUB_USER}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-signal hover:text-paper"
          >
            View them directly.
          </a>
        </p>
      )}

      {status === 'ready' && stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value={stats.publicRepos} label="Public repos" />
          <Stat value={stats.stars} label="Stars earned" />
          <Stat value={stats.followers} label="Followers" />
          <div>
            <p className="font-mono text-[11px] text-paper-dim/70 mb-2">Top languages</p>
            <div className="flex flex-wrap gap-1.5">
              {stats.topLanguages.map((lang) => (
                <span
                  key={lang}
                  className="font-mono text-[10px] px-2 py-1 border border-line text-paper-dim rounded-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 pt-8 border-t border-line/60">
        <p className="font-mono text-[11px] text-paper-dim/70 mb-3">A few worth naming</p>
        <div className="flex flex-wrap gap-2">
          {otherHighlights.map((item) => (
            <span
              key={item}
              className="font-mono text-[11px] px-2.5 py-1.5 border border-line text-paper-dim rounded-sm hover:border-signal-dim hover:text-paper transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function Stat({ value, label }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (typeof value !== 'number') return
    let frame
    const duration = 900
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value])

  return (
    <div>
      <p className="font-display text-4xl text-signal tabular-nums">{display}</p>
      <p className="font-mono text-[11px] text-paper-dim/70 mt-1">{label}</p>
    </div>
  )
}
