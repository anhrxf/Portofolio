"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDownRight, ArrowUpRight, Code2, Download, ExternalLink, Mail, Palette } from "lucide-react"
import { FaGithub, FaInstagram } from "react-icons/fa"
import { SiGmail, SiWhatsapp } from "react-icons/si"
import { profile, projects, skillEvidence, skills } from "@/lib/data"
import { useSitePreferences } from "@/components/site-preferences"
import SculptureHero from "@/components/ui/liquid-sculpture-hero"

const currentYear = new Date().getFullYear()

function Reveal({
  children,
  className,
  delay = 0,
  stable = false,
}: {
  children: ReactNode
  className?: string
  delay?: number
  stable?: boolean
}) {
  const { systemReducedMotion } = useSitePreferences()

  return (
    <motion.div
      initial={systemReducedMotion ? false : stable ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={systemReducedMotion ? undefined : stable ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: false, margin: stable ? "-68px 0px -80px 0px" : "0px 0px -80px 0px" }}
      transition={{ duration: stable ? 0.45 : 0.62, delay: systemReducedMotion ? 0 : delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <Reveal stable className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-[-0.045em] text-[var(--paper)] sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-md text-sm leading-7 text-[var(--mute)] md:text-right">{description}</p>
      )}
    </Reveal>
  )
}

export function Hero() {
  const { profileMotionEnabled, theme } = useSitePreferences()

  return (
    <section
      id="beranda"
      className="mx-auto grid min-h-[78svh] max-w-6xl scroll-mt-28 items-center gap-12 px-6 pb-20 pt-24 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:px-10 md:pb-20"
    >
      <div className="order-2 md:order-1">
        <Reveal>
          <p className="mb-6 text-sm font-medium text-[var(--mute)]">M. Fadhil Anhar / Designer & Web Developer</p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.96] tracking-[-0.07em] text-[var(--paper)] sm:text-6xl lg:text-7xl">
            Merancang
            <br />
            <span className="font-serif-i font-normal tracking-[-0.04em] text-[var(--accent)]">lebih baik.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg font-medium leading-8 text-[var(--paper)] sm:text-xl">
            Membangun pengalaman digital yang berguna.
          </p>
          <p className="mt-3 max-w-lg text-sm leading-7 text-[var(--mute)] sm:text-base">
            Mahasiswa Sistem Informasi yang tertarik pada pertemuan antara desain dan teknologi, sekaligus mengubah kebutuhan
            pengguna menjadi pengalaman digital yang mudah digunakan.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#proyek"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--paper)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              Lihat proyek <ArrowDownRight size={16} aria-hidden />
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-medium text-[var(--paper)] transition-colors hover:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              Hubungi saya <ArrowUpRight size={16} aria-hidden />
            </a>
          </div>
          <div className="mt-9 flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--mute)]">Terhubung</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Anhar"
              className="text-[var(--mute)] transition-colors hover:text-[var(--paper)]"
            >
              <FaGithub size={18} aria-hidden />
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Anhar"
              className="text-[var(--mute)] transition-colors hover:text-[var(--paper)]"
            >
              <FaInstagram size={18} aria-hidden />
            </a>
            <a
              href={`https://wa.me/62${profile.phone.slice(1)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Anhar"
              className="text-[var(--mute)] transition-colors hover:text-[var(--paper)]"
            >
              <SiWhatsapp size={18} aria-hidden />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Anhar"
              className="text-[var(--mute)] transition-colors hover:text-[var(--paper)]"
            >
              <Mail size={18} aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal className="order-1 mx-auto w-full max-w-[20rem] md:order-2 md:max-w-[22rem]" delay={0.12}>
        <div className="relative aspect-square">
          <div className="absolute inset-[-0.65rem] rounded-full border border-[var(--line)]" />
          <SculptureHero
            src="/foto-anhar.jpg"
            darkSrc="/foto-anhar.jpg"
            mobileSrc="/foto-anhar.jpg"
            mobileDarkSrc="/foto-anhar.jpg"
            imageAlt="Foto M. Fadhil Anhar"
            imageShape="circle"
            showNav={false}
            showCredit={false}
            theme={theme}
            themeToggle={false}
            background="#f1f0e8"
            darkBackground="#111713"
            textColor={theme === "dark" ? "#edf1e7" : "#19231a"}
            accentColor={theme === "dark" ? "#c9ee72" : "#476344"}
            interactive={profileMotionEnabled}
            className="rounded-full"
            height="100%"
            sculptureScale={0.78}
            mobileSculptureScale={0.72}
            preserveImageColors
            strength={1}
            turbulence={1}
            liquid={0.9}
            particleSpread={0.9}
            loadFonts={false}
            eyebrow=""
            headline=""
            body=""
            primaryCta={{ label: "", href: "#" }}
            secondaryCta={{ label: "", href: "#" }}
            hint=""
            hintTouch=""
            backdropText=""
          />
        </div>
        <p className="mt-5 text-center font-mono text-[10px] tracking-[0.2em] text-[var(--mute)]">
          DESIGN × CODE / ANHAR
        </p>
      </Reveal>
    </section>
  )
}

export function About() {
  return (
    <section id="tentang" className="scroll-mt-0 px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="01 / Tentang"
          title="Kenali saya lebih dekat."
          description="Saya suka menggabungkan pemikiran desain dengan kemampuan teknis untuk membuat produk digital yang jelas dan bermanfaat."
        />
        <div className="grid gap-4 md:grid-cols-5">
          <Reveal className="rounded-[1.25rem] border border-[var(--line)] bg-[var(--panel)] p-7 sm:p-9 md:col-span-3">
            <div className="mb-8 grid size-11 place-items-center border border-[var(--line)] text-[var(--accent)]">
              <Palette size={20} aria-hidden />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-[var(--paper)]">Desain yang berangkat dari pengguna</h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--mute)]">
              Saya memulai dari memahami kebutuhan dan alur pengguna, lalu menerjemahkannya menjadi antarmuka yang
              konsisten, mudah dipahami, dan siap diwujudkan sebagai aplikasi web.
            </p>
          </Reveal>
          <Reveal
            className="rounded-[1.25rem] border border-[var(--line)] bg-[var(--panel)] p-7 sm:p-9 md:col-span-2"
            delay={0.08}
          >
            <div className="mb-8 grid size-11 place-items-center border border-[var(--line)] text-[var(--accent)]">
              <Code2 size={20} aria-hidden />
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-[var(--paper)]">Dari ide ke produk</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--mute)]">
              Dalam proyek, saya terbiasa terlibat dari perancangan dan implementasi sampai pengujian serta komunikasi
              hasil kepada tim.
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-4 grid gap-3 border border-[var(--line)] bg-[var(--panel)] p-6 sm:grid-cols-3 sm:p-8">
          {[
            ["Nama", profile.name],
            ["Fokus studi", "Sistem Informasi"],
            ["Bidang", "UI Design · Web Development"],
          ].map(([label, value]) => (
            <div key={label} className="border-b border-[var(--line)] pb-4 last:border-0 last:pb-0 sm:border-b-0 sm:border-r sm:pb-0 sm:last:border-0">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--mute)]">{label}</p>
              <p className="mt-2 text-sm font-medium text-[var(--paper)]">{value}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="keahlian" className="scroll-mt-0 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="02 / Keahlian"
          title="Desain bertemu teknologi."
          description="Dua sisi pekerjaan yang saya nikmati—membentuk pengalaman sekaligus membangunnya."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill, index) => (
            <Reveal
              key={skill.name}
              delay={index * 0.1}
              className="rounded-[1.25rem] border border-[var(--line)] bg-[var(--panel)] p-7 sm:p-9"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[var(--paper)]">{skill.name}</h3>
              <p className="mt-3 max-w-lg text-sm leading-7 text-[var(--mute)]">{skill.desc}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-[var(--line)] px-3 py-1.5 font-mono text-[11px] text-[var(--paper)]/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        {skillEvidence.length > 0 && (
          <div className="mt-16">
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  Pilihan karya
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-[var(--paper)]">
                  Bukti dalam praktik.
                </h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-[var(--mute)]">
                Contoh penerapan keahlian dalam karya dan antarmuka yang saya buat.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {skillEvidence.map((evidence, index) => (
                <Reveal key={evidence.title} delay={index * 0.1}>
                  <article className="group h-full overflow-hidden border border-[var(--line)] bg-[var(--panel)]">
                    <div className="relative aspect-video overflow-hidden border-b border-[var(--line)] bg-[var(--ink)]">
                      <Image
                        src={evidence.image}
                        alt={evidence.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="p-6 sm:p-7">
                      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
                        {evidence.category}
                      </p>
                      <h4 className="mt-3 text-xl font-semibold tracking-tight text-[var(--paper)]">
                        {evidence.title}
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-[var(--mute)]">{evidence.description}</p>
                      {evidence.url && (
                        <a
                          href={evidence.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-[var(--paper)] transition-colors hover:text-[var(--accent)]"
                        >
                          {evidence.urlLabel ?? "Lihat karya"} <ExternalLink size={14} aria-hidden />
                        </a>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export function Projects() {
  const { systemReducedMotion } = useSitePreferences()

  return (
    <section id="proyek" className="scroll-mt-0 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03 / Proyek"
          title="Beberapa karya pilihan."
          description="Proyek yang memberi ruang untuk menerapkan perancangan, pengembangan, dan pengujian."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={systemReducedMotion ? false : { opacity: 0, y: 42, scale: 0.96 }}
              whileInView={systemReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              whileHover={systemReducedMotion ? undefined : { y: -5 }}
              viewport={{ once: false, margin: "0px 0px -70px 0px" }}
              transition={{
                duration: 0.72,
                delay: systemReducedMotion ? 0 : index * 0.13,
                ease: [0.2, 0.7, 0.2, 1],
              }}
              className="group flex min-h-[21rem] flex-col overflow-hidden rounded-[1.25rem] border border-l-2 border-l-[var(--accent)] border-[var(--line)] bg-[var(--panel)]"
            >
              {project.image && (
                <div className="relative aspect-video overflow-hidden border-b border-[var(--line)] bg-[var(--ink)]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? `Preview ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="font-mono text-[10px] font-medium tracking-[0.18em] text-[var(--accent)]">
                  PROJECT {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--mute)]">{project.role}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--paper)]">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--mute)]">{project.desc}</p>

                {[
                  ["Peran & kontribusi", project.contribution],
                  ["Tantangan", project.challenge],
                  ["Hasil", project.outcome],
                ].filter(([, value]) => value).length > 0 && (
                  <dl className="mt-6 space-y-4 border-t border-[var(--line)] pt-5">
                    {[
                      ["Peran & kontribusi", project.contribution],
                      ["Tantangan", project.challenge],
                      ["Hasil", project.outcome],
                    ].map(([label, value]) =>
                      value ? (
                        <div key={label}>
                          <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">{label}</dt>
                          <dd className="mt-1.5 text-sm leading-6 text-[var(--mute)]">{value}</dd>
                        </div>
                      ) : null,
                    )}
                  </dl>
                )}

                <div className="mt-auto pt-7">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-sm border border-[var(--line)] px-3 py-1.5 font-mono text-[10px] text-[var(--paper)]/75">
                        {item}
                      </span>
                    ))}
                  </div>
                  {(project.demoUrl || project.repoUrl) && (
                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-t border-[var(--line)] pt-5">
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-[var(--paper)] transition-colors hover:text-[var(--accent)]">
                          Demo <ExternalLink size={14} aria-hidden />
                        </a>
                      )}
                      {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-[var(--paper)] transition-colors hover:text-[var(--accent)]">
                          <FaGithub size={14} aria-hidden /> Kode sumber <ExternalLink size={14} aria-hidden />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const contactLinks = [
    {
      label: "Gmail",
      detail: profile.email,
      href: `mailto:${profile.email}`,
      icon: <SiGmail size={21} aria-hidden />,
    },
    {
      label: "WhatsApp",
      detail: profile.phone,
      href: `https://wa.me/62${profile.phone.slice(1)}`,
      icon: <SiWhatsapp size={21} aria-hidden />,
      external: true,
    },
    {
      label: "GitHub",
      detail: "anhrxf",
      href: profile.github,
      icon: <FaGithub size={21} aria-hidden />,
      external: true,
    },
    {
      label: "Instagram",
      detail: "@anhrxf_",
      href: profile.instagram,
      icon: <FaInstagram size={21} aria-hidden />,
      external: true,
    },
  ]

  return (
    <section id="kontak" className="scroll-mt-0 px-6 pb-16 pt-20 md:px-10 md:pb-20 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="rounded-[1.25rem] border border-[var(--line)] bg-[var(--panel)] p-7 sm:p-10 md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">04 / Kontak</p>
          <div className="mt-6 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-[-0.06em] text-[var(--paper)] sm:text-5xl">
                Punya ide menarik?
                <br />
                <span className="text-[var(--mute)]">Mari kita wujudkan.</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--mute)]">
                Saya terbuka pada kolaborasi dan kesempatan yang mempertemukan ide, desain, serta teknologi.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--paper)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              >
                Mulai percakapan <ArrowUpRight size={16} aria-hidden />
              </a>
              {profile.cvUrl && (
                <a
                  href={profile.cvUrl}
                  download
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-medium text-[var(--paper)] transition-colors hover:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  Unduh CV <Download size={16} aria-hidden />
                </a>
              )}
            </div>
          </div>
          <div className="mt-10 grid gap-3 border-t border-[var(--line)] pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={`${link.label}: ${link.detail}`}
                className="group flex min-w-0 items-center gap-3 border border-[var(--line)] bg-[var(--ink)]/35 p-4 transition-colors hover:border-[var(--accent)]"
              >
                <span className="grid size-10 shrink-0 place-items-center border border-[var(--line)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-[var(--ink)]">
                  {link.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold text-[var(--paper)]">{link.label}</span>
                  <span className="mt-1 block truncate text-xs text-[var(--mute)]">{link.detail}</span>
                </span>
                <ArrowUpRight size={14} className="ml-auto shrink-0 text-[var(--mute)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </a>
            ))}
          </div>
        </Reveal>
        <footer className="flex flex-col gap-2 px-2 pt-8 text-xs text-[var(--mute)] sm:flex-row sm:items-center sm:justify-between">
          <span>© {currentYear} {profile.name}</span>
          <span>Dibuat dengan perhatian pada detail.</span>
        </footer>
      </div>
    </section>
  )
}
