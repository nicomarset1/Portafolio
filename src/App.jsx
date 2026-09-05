import { useState } from "react";
import { motion } from "framer-motion";

const profileImage = "/images/nicolas-marset.jpeg";
const nmsoftwareUrl = "https://nmsoftware.com.ar";

const content = {
  es: {
    nav: [
      { label: "Inicio", target: "inicio" },
      { label: "Sobre mí", target: "sobre-mi" },
      { label: "Proyectos", target: "proyectos" },
      { label: "Contacto", target: "contacto" },
    ],
    languageButton: "English",
    languageAria: "Cambiar idioma a inglés",
    profile: {
      career: "Ingeniería Informática (en curso)",
      orientation: "Automatización e integraciones",
      focus: ["Automatización", "Integraciones", "APIs"],
      mindset: "Construyo cosas que se usan de verdad.",
    },
    hero: {
      eyebrow: "STI Global Group · NM Software",
      degree: "Especialista en Automatización e Integraciones",
      cardText:
        "Estudio Ingeniería Informática y trabajo en automatización e integraciones. Además, desarrollo software a medida por mi cuenta.",
      text:
        "Automatizo procesos e integro sistemas en STI Global Group, y por mi cuenta desarrollo software a medida a través de NM Software. Me interesa el software que resuelve problemas reales, no el que solo se ve bien.",
      primaryCta: "Ver proyectos",
      secondaryCta: "NM Software",
      cvCta: "CV",
    },
    about: {
      label: "Sobre mí",
      title: "Automatizo procesos y construyo software a medida.",
      text:
        "Estudio Ingeniería Informática y trabajo full-time en automatización e integraciones. En paralelo, desarrollo software a medida para negocios a través de NM Software.",
      experienceLabel: "Experiencia",
      educationLabel: "Formación",
      experience: [
        {
          title: "STI Global Group",
          role: "Especialista en Automatización e Integraciones",
          text:
            "Automatizo procesos internos y conecto sistemas y herramientas para que la operación dependa de menos trabajo manual.",
        },
        {
          title: "NM Software",
          role: "Proyectos propios",
          text:
            "Desarrollo software a medida, automatizaciones e integraciones para negocios reales.",
          url: nmsoftwareUrl,
          linkLabel: "nmsoftware.com.ar",
        },
      ],
      education: [
        {
          title: "Ingeniería Informática",
          institution: "Formación universitaria en curso",
          description: "Programación, lógica, sistemas y resolución de problemas.",
        },
        {
          title: "Desarrollo Front-End React",
          institution: "Coderhouse · Finalizado",
          description: "React, componentes, lógica frontend y diseño responsive.",
        },
      ],
    },
    projects: {
      label: "Proyectos",
      title: "El trabajo real vive en NM Software.",
      text:
        "Ahí muestro los proyectos que desarrollo para negocios reales: tiendas online, paneles de gestión, automatizaciones e integraciones.",
      cta: "Ver proyectos en NM Software",
    },
    contact: {
      title: "Hablemos.",
      text: "Si tenés un proyecto, una idea o una oportunidad, escribime.",
      linkedin: "LinkedIn",
      email: "Email",
      projects: "NM Software",
      cv: "CV",
    },
    footer: "© 2026 Nicolas Marset.",
  },
  en: {
    nav: [
      { label: "Home", target: "inicio" },
      { label: "About", target: "sobre-mi" },
      { label: "Projects", target: "proyectos" },
      { label: "Contact", target: "contacto" },
    ],
    languageButton: "Español",
    languageAria: "Switch language to Spanish",
    profile: {
      career: "Computer Engineering (in progress)",
      orientation: "Automation and integrations",
      focus: ["Automation", "Integrations", "APIs"],
      mindset: "I build things that actually get used.",
    },
    hero: {
      eyebrow: "STI Global Group · NM Software",
      degree: "Automation & Integration Specialist",
      cardText:
        "I study Computer Engineering and work in automation and integrations. I also build custom software on my own.",
      text:
        "I automate processes and integrate systems at STI Global Group, and on my own I build custom software through NM Software. I care about software that solves real problems, not just software that looks good.",
      primaryCta: "View projects",
      secondaryCta: "NM Software",
      cvCta: "CV",
    },
    about: {
      label: "About Me",
      title: "I automate processes and build custom software.",
      text:
        "I study Computer Engineering and work full-time in automation and integrations. In parallel, I build custom software for businesses through NM Software.",
      experienceLabel: "Experience",
      educationLabel: "Education",
      experience: [
        {
          title: "STI Global Group",
          role: "Automation & Integration Specialist",
          text:
            "I automate internal processes and connect systems and tools so the operation depends on less manual work.",
        },
        {
          title: "NM Software",
          role: "Own projects",
          text: "I build custom software, automations, and integrations for real businesses.",
          url: nmsoftwareUrl,
          linkLabel: "nmsoftware.com.ar",
        },
      ],
      education: [
        {
          title: "Computer Engineering",
          institution: "University studies in progress",
          description: "Programming, logic, systems, and problem solving.",
        },
        {
          title: "Front-End React Development",
          institution: "Coderhouse · Completed",
          description: "React, components, frontend logic, and responsive design.",
        },
      ],
    },
    projects: {
      label: "Projects",
      title: "The real work lives on NM Software.",
      text:
        "That's where I show the projects I build for real businesses: online stores, admin panels, automations, and integrations.",
      cta: "View projects on NM Software",
    },
    contact: {
      title: "Let's talk.",
      text: "If you have a project, an idea, or an opportunity, reach out.",
      linkedin: "LinkedIn",
      email: "Email",
      projects: "NM Software",
      cv: "CV",
    },
    footer: "© 2026 Nicolas Marset.",
  },
};

function SectionTitle({ label, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-10 max-w-4xl"
    >
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-zinc-500">
        {label}
      </p>

      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {text && <p className="mt-4 max-w-3xl leading-7 text-zinc-400">{text}</p>}
    </motion.div>
  );
}

function Button({ children }) {
  return (
    <span className="group inline-flex rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.1]">
      <span className="flex items-center gap-2">{children}</span>
    </span>
  );
}


function LanguageToggle({ language, onToggle, label, ariaLabel }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={ariaLabel}
      className="fixed right-4 top-5 z-[60] rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm font-medium text-white shadow-2xl shadow-black/40 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08] md:right-8"
    >
      <span className="mr-2 text-zinc-500">{language.toUpperCase()}</span>
      {label}
    </button>
  );
}

function CodeWindow({ profile }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative rounded-[2rem] border border-white/10 bg-zinc-950/70 p-6 shadow-2xl shadow-black/50 backdrop-blur-xl"
    >
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-white/[0.04] blur-3xl" />

      <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-zinc-700" />
          <span className="h-3 w-3 rounded-full bg-zinc-600" />
          <span className="h-3 w-3 rounded-full bg-zinc-500" />
        </div>

        <p className="text-xs text-zinc-500">profile.system</p>
      </div>

      <div className="space-y-4 font-mono text-sm">
        <p className="text-zinc-500">const profile = {"{"}</p>

        <p className="pl-5 text-zinc-300">
          name: <span className="text-white">"Nicolas Marset"</span>,
        </p>

        <p className="pl-5 text-zinc-300">
          career: <span className="text-white">"{profile.career}"</span>,
        </p>

        <p className="pl-5 text-zinc-300">
          orientation:{" "}
          <span className="text-white">"{profile.orientation}"</span>,
        </p>

        <p className="pl-5 text-zinc-300">
          focus: [
          {profile.focus.map((item, index) => (
            <span key={item}>
              <span className="text-white">"{item}"</span>
              {index < profile.focus.length - 1 ? ", " : ""}
            </span>
          ))}
          ],
        </p>

        <p className="pl-5 text-zinc-300">
          mindset: <span className="text-white">"{profile.mindset}"</span>
        </p>

        <p className="text-zinc-500">{"};"}</p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.18, 0.85, 0.18] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: i * 0.07,
            }}
            className="h-2 rounded-full bg-zinc-500/50"
          />
        ))}
      </div>
    </motion.div>
  );
}

function ProfileCard({ hero }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.15 }}
      className="relative max-w-2xl overflow-hidden rounded-[1.7rem] border border-white/10 bg-zinc-950/70 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

      <div className="relative flex items-center gap-4">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black md:h-28 md:w-28">
          <img
            src={profileImage}
            alt="Nicolas Marset"
            className="h-full w-full object-cover object-center contrast-105"
          />
        </div>

        <div className="relative min-w-0">
          <p className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Nicolas Marset
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-zinc-500">
            {hero.degree}
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400 md:text-base">
            {hero.cardText}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function App() {
  const [language, setLanguage] = useState("es");
  const t = content[language];
  const cvFile =
    language === "es" ? "/CV-Nicolas-Marset.pdf" : "/CV-Nicolas-Marset-EN.pdf";

  const toggleLanguage = () => {
    setLanguage((current) => (current === "es" ? "en" : "es"));
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-zinc-100">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.16),transparent_35%)]" />

      <LanguageToggle
        language={language}
        onToggle={toggleLanguage}
        label={t.languageButton}
        ariaLabel={t.languageAria}
      />

      <nav className="fixed left-1/2 top-5 z-50 hidden -translate-x-1/2 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-xl md:block">
        <div className="flex gap-1 text-sm text-zinc-400">
          {t.nav.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <section
        id="inicio"
        className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 pb-20 pt-28 md:px-10"
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-400">
              {t.hero.eyebrow}
            </div>

            <ProfileCard hero={t.hero} />

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
              {t.hero.text}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button type="button" onClick={() => scrollToSection("proyectos")}>
                <Button>{t.hero.primaryCta}</Button>
              </button>

              <a href={nmsoftwareUrl} target="_blank" rel="noopener noreferrer">
                <Button>{t.hero.secondaryCta}</Button>
              </a>

              <a href={cvFile} download>
                <Button>{t.hero.cvCta}</Button>
              </a>
            </div>
          </motion.div>

          <CodeWindow profile={t.profile} />
        </div>
      </section>

      <section
        id="sobre-mi"
        className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-10"
      >
        <SectionTitle {...t.about} />

        <div className="grid gap-10">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
              {t.about.experienceLabel}
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              {t.about.experience.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
                >
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {item.role}
                  </p>
                  <p className="mt-4 leading-7 text-zinc-400">{item.text}</p>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-sm text-zinc-300 underline decoration-white/20 underline-offset-4 transition hover:text-white"
                    >
                      {item.linkLabel} →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
              {t.about.educationLabel}
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              {t.about.education.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-zinc-950/70 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-zinc-900/80"
                >
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {item.institution}
                  </p>
                  <p className="mt-4 leading-7 text-zinc-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos" className="relative z-10 overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <img
            src="/projects-bg/taller.png"
            alt=""
            className="absolute -left-16 top-2 w-72 rotate-[-6deg] rounded-3xl object-cover opacity-25 blur-2xl md:w-96"
          />
          <img
            src="/projects-bg/vet.png"
            alt=""
            className="absolute -right-16 top-[-4%] w-72 rotate-[7deg] rounded-3xl object-cover opacity-25 blur-2xl md:w-96"
          />
          <img
            src="/projects-bg/radio.png"
            alt=""
            className="absolute bottom-[-12%] left-1/3 w-64 rotate-[4deg] rounded-3xl object-cover opacity-20 blur-2xl md:w-80"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 md:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 text-center shadow-2xl shadow-black/50 backdrop-blur-xl md:p-14">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-zinc-500">
              {t.projects.label}
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {t.projects.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
              {t.projects.text}
            </p>

            <div className="mt-8 flex justify-center">
              <a href={nmsoftwareUrl} target="_blank" rel="noopener noreferrer">
                <Button>{t.projects.cta} →</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-10"
      >
        <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 text-center shadow-2xl shadow-black/50 backdrop-blur-xl md:p-14">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] font-mono text-zinc-300">
            &gt;_
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {t.contact.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
            {t.contact.text}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/nicolas-marset-67575025a"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.1]"
            >
              <span className="flex items-center gap-2">
                {t.contact.linkedin}
              </span>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nicolasmarsetg@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.1]"
            >
              <span className="flex items-center gap-2">{t.contact.email}</span>
            </a>

            <a
              href={nmsoftwareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.1]"
            >
              <span className="flex items-center gap-2">
                {t.contact.projects}
              </span>
            </a>

            <a
              href={cvFile}
              download
              className="group rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.1]"
            >
              <span className="flex items-center gap-2">{t.contact.cv}</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-600">
        {t.footer}
      </footer>
    </main>
  );
}
