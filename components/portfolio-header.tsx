"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeSwitch } from "@/components/site-preferences"

const links = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Proyek", href: "#proyek" },
  { label: "Kontak", href: "#kontak" },
]

export function PortfolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--ink)_18%,transparent)] px-0 backdrop-blur-2xl">
      <nav
        aria-label="Navigasi utama"
        className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10"
      >
        <a
          href="#beranda"
          className="font-mono text-xs font-bold tracking-[0.12em] text-[var(--paper)] sm:text-sm"
          onClick={() => setMenuOpen(false)}
        >
          ANHAR<span className="mx-2 text-[var(--mute)]">/</span>PORTFOLIO
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-wide text-[var(--mute)] transition-colors hover:text-[var(--paper)]"
            >
              {link.label}
            </a>
          ))}
          <ThemeSwitch />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeSwitch />
          <button
            type="button"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            className="grid size-8 place-items-center rounded-full text-[var(--paper)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} aria-hidden /> : <Menu size={19} aria-hidden />}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute inset-x-4 top-[calc(100%+0.4rem)] overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--paper)_24%,transparent)] bg-[color-mix(in_srgb,var(--ink)_92%,transparent)] p-2 shadow-[inset_0_1px_0_color-mix(in_srgb,var(--paper)_24%,transparent),0_18px_48px_color-mix(in_srgb,var(--ink)_40%,transparent)] backdrop-blur-2xl backdrop-saturate-150 md:hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_srgb,var(--paper)_8%,transparent),transparent_58%),linear-gradient(145deg,color-mix(in_srgb,var(--paper)_4%,transparent),transparent_55%)]"
            />
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative block border-b border-[var(--line)] px-4 py-3 text-xs font-medium tracking-wide text-[var(--mute)] last:border-0 hover:text-[var(--paper)]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
