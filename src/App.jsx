import { useDepth } from './useDepth'
import StrataRail from './components/StrataRail'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import WhoIAm from './components/WhoIAm'
import Projects from './components/Projects'
import DepthLayer from './components/DepthLayer'
import Resume from './components/Resume'
import Contact from './components/Contact'

const SECTION_IDS = ['surface', 'who', 'built', 'depth', 'resume', 'contact']

export default function App() {
  const active = useDepth(SECTION_IDS)

  return (
    <div className="relative">
      <ScrollProgress />
      <StrataRail active={active} />
      <main>
        <Hero />
        <WhoIAm />
        <Projects />
        <DepthLayer />
        <Resume />
        <Contact />
      </main>
    </div>
  )
}
