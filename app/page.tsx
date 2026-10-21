"use client"

import { About, Contact, Hero, Projects, Skills } from "@/components/sections"
import {
  SitePreferenceControls,
  SitePreferencesProvider,
  useSitePreferences,
} from "@/components/site-preferences"
import { PortfolioHeader } from "@/components/portfolio-header"

export default function Page() {
  return (
    <SitePreferencesProvider>
      <Portfolio />
    </SitePreferencesProvider>
  )
}

function Portfolio() {
  const { theme } = useSitePreferences()

  return (
    <main data-theme={theme} className="min-h-screen bg-[var(--ink)] text-[var(--paper)]">
      <PortfolioHeader />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <SitePreferenceControls />
    </main>
  )
}
