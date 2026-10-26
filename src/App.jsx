import { useEffect } from 'react'
import WindowManager from './windowManager'
import Desktop from './components/Desktop'
import PixelSkyBg from './components/PixelSkyBg'
import Window from './components/Window'
import AboutWindow from './components/windows/AboutWindow'
import ProjectsWindow from './components/windows/ProjectsWindow'
import SkillsWindow from './components/windows/SkillsWindow'
import ExperienceWindow from './components/windows/ExperienceWindow'
import ContactWindow from './components/windows/ContactWindow'
import DiscordCmdsWindow from './components/windows/DiscordCmdsWindow'
import CertificationsWindow from './components/windows/CertificationsWindow'
import LegalWindow from './components/windows/LegalWindow'

export default function App() {
  useEffect(() => {
    new WindowManager()
  }, [])

  return (
    <>
      <PixelSkyBg />
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

      <Window id="certifications" title="certifs/" width="660px" height="620px">
        <CertificationsWindow />
      </Window>

      <Window id="discord-cmds" title="bot-discord/commands/" width="840px" height="660px">
        <DiscordCmdsWindow />
      </Window>

      <Window id="legal" title="legal.md" width="640px" height="620px">
        <LegalWindow />
      </Window>

    </>
  )
}
