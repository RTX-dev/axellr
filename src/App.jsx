import { useEffect } from 'react'
import WindowManager from './windowManager'
import Desktop from './components/Desktop'
import ParticlesBg from './components/ParticlesBg'
import Window from './components/Window'
import AboutWindow from './components/windows/AboutWindow'
import ProjectsWindow from './components/windows/ProjectsWindow'
import SkillsWindow from './components/windows/SkillsWindow'
import ExperienceWindow from './components/windows/ExperienceWindow'
import ContactWindow from './components/windows/ContactWindow'
import E5Window from './components/windows/E5Window'
import DiscordCmdsWindow from './components/windows/DiscordCmdsWindow'
import CertificationsWindow from './components/windows/CertificationsWindow'
import E5ProofWindow from './components/windows/E5ProofWindow'
import LegalWindow from './components/windows/LegalWindow'

export default function App() {
  useEffect(() => {
    new WindowManager()
  }, [])

  return (
    <>
      <ParticlesBg />
      <div className="cursor-glow" />
      <Desktop />

      <Window id="about" title="about.txt" width="780px" height="680px">
        <AboutWindow />
      </Window>

      <Window id="projects" title="projects/" width="780px" height="620px">
        <ProjectsWindow />
      </Window>

      <Window id="skills" title="skills.json" width="600px" height="780px">
        <SkillsWindow />
      </Window>

      <Window id="xp" title="xp.log" width="680px" height="600px">
        <ExperienceWindow />
      </Window>

      <Window id="contact" title="contact.sh" width="560px" height="680px">
        <ContactWindow />
      </Window>

      <Window id="e5" title="E5.pdf — Épreuve BTS SIO" width="740px" height="820px">
        <E5Window />
      </Window>

      <Window id="certifications" title="certifs/" width="660px" height="620px">
        <CertificationsWindow />
      </Window>

      <Window id="discord-cmds" title="bot-discord/commands/" width="840px" height="660px">
        <DiscordCmdsWindow />
      </Window>

      <Window id="legal" title="legal.md" width="640px" height="620px">
        <LegalWindow />
      </Window>

      <E5ProofWindow id="e5-c1" />
      <E5ProofWindow id="e5-c2" />
      <E5ProofWindow id="e5-c3" />
      <E5ProofWindow id="e5-c4" />
      <E5ProofWindow id="e5-c5" />
      <E5ProofWindow id="e5-c6" />
    </>
  )
}
