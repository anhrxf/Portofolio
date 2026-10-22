"use client"

import { createContext, useContext, useState, useSyncExternalStore, type ReactNode } from "react"
import { Moon, Sun } from "lucide-react"

type Theme = "dark" | "light"

type SitePreferences = {
  theme: Theme
  setTheme: (theme: Theme) => void
  profileAnimationEnabled: boolean
  setProfileAnimationEnabled: (enabled: boolean) => void
  profileMotionEnabled: boolean
  systemReducedMotion: boolean
}

const PreferencesContext = createContext<SitePreferences | null>(null)
const themeListeners = new Set<() => void>()
let currentTheme: Theme | undefined

function subscribeToTheme(onChange: () => void) {
  themeListeners.add(onChange)
  return () => {
    themeListeners.delete(onChange)
  }
}

function getThemeSnapshot(): Theme {
  if (currentTheme) return currentTheme

  try {
    currentTheme = window.localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark"
  } catch (error) {
    console.error("Gagal memuat preferensi tema.", error)
    currentTheme = "dark"
  }

  return currentTheme
}

function updateTheme(theme: Theme) {
  currentTheme = theme
  document.documentElement.dataset.theme = theme

  try {
    window.localStorage.setItem("portfolio-theme", theme)
  } catch (error) {
    console.error("Gagal menyimpan preferensi tema.", error)
  }

  themeListeners.forEach((onChange) => onChange())
}

function subscribeToMotionPreference(onChange: () => void) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
  preference.addEventListener("change", onChange)
  return () => preference.removeEventListener("change", onChange)
}

function getMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function SitePreferencesProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore<Theme>(subscribeToTheme, getThemeSnapshot, () => "dark")
  const [profileAnimationEnabled, setProfileAnimationEnabled] = useState(true)
  const systemReducedMotion = useSyncExternalStore(subscribeToMotionPreference, getMotionPreference, () => true)
  const profileMotionEnabled = profileAnimationEnabled && !systemReducedMotion

  return (
    <PreferencesContext.Provider
      value={{
        theme,
        setTheme: updateTheme,
        profileAnimationEnabled,
        setProfileAnimationEnabled,
        profileMotionEnabled,
        systemReducedMotion,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  )
}

export function useSitePreferences() {
  const preferences = useContext(PreferencesContext)
  if (!preferences) throw new Error("useSitePreferences must be used within SitePreferencesProvider.")
  return preferences
}

export function ThemeSwitch() {
  const { theme, setTheme } = useSitePreferences()

  return (
    <button
      type="button"
      role="switch"
      className="inline-flex h-8 w-[3.25rem] items-center rounded-full border border-white/25 bg-white/15 p-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_4px_16px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sh-fg)]"
      aria-label="Tema terang atau gelap"
      aria-checked={theme === "light"}
      title={`Tema ${theme === "dark" ? "gelap" : "terang"}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-sm transition-transform duration-200 ${
          theme === "light" ? "translate-x-5" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? <Moon size={13} aria-hidden /> : <Sun size={13} aria-hidden />}
      </span>
    </button>
  )
}

export function SitePreferenceControls() {
  const {
    profileAnimationEnabled,
    setProfileAnimationEnabled,
    systemReducedMotion,
  } = useSitePreferences()

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-full border border-white/20 bg-white/10 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-2xl">
      <button
        type="button"
        className="rounded-full px-3 py-2 text-xs text-[var(--paper)] transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-60"
        role="switch"
        aria-label="Animasi foto profil"
        aria-checked={profileAnimationEnabled && !systemReducedMotion}
        disabled={systemReducedMotion}
        title={systemReducedMotion ? "Animasi dimatikan oleh preferensi reduced motion perangkat." : "Aktifkan atau matikan animasi foto profil"}
        onClick={() => setProfileAnimationEnabled(!profileAnimationEnabled)}
      >
        Profil: {systemReducedMotion ? "Mati (perangkat)" : profileAnimationEnabled ? "Aktif" : "Mati"}
      </button>
    </div>
  )
}
