import { useState } from "react";
import { motion } from "framer-motion";

const profileImage = "/images/nicolas-marset.jpeg";
const projectUrl = "https://gestionmarseeeet.netlify.app/";
const githubUrl = "https://github.com/nicomarset1";

const content = {
  es: {
    nav: [
      { label: "Inicio", target: "inicio" },
      { label: "Sobre mí", target: "sobre-mi" },
      { label: "Enfoque", target: "enfoque" },
      { label: "Perfil técnico", target: "perfil-tecnico" },
      { label: "Proyectos", target: "proyectos" },
      { label: "Contacto", target: "contacto" },
    ],
    languageButton: "English",
    languageAria: "Cambiar idioma a inglés",
    profile: {
      career: "Ingeniería Informática en progreso",
      orientation: "Ingeniería de Software y Sistemas Digitales",
      focus: ["Diseño de Sistemas", "Lógica de Producto", "Interfaces Escalables"],
      mindset: "Analizar. Construir. Optimizar.",
    },
    hero: {
      eyebrow: "Ingeniería Informática · Software · Sistemas Digitales",
      degree: "Ingeniería Informática",
      cardText:
        "Perfil orientado a software, sistemas digitales y construcción de soluciones reales.",
      text:
        "Perfil orientado a la ingeniería de software, el análisis de sistemas y la construcción de soluciones digitales funcionales, escalables y pensadas para resolver problemas reales.",
      primaryCta: "Ver proyectos →",
      secondaryCta: "Contactarme →",
      cvCta: "Descargar CV ↓",
    },
    about: {
      label: "Sobre mí",
      title: "Perfil técnico con visión de ingeniería.",
      text:
        "Me estoy formando en Ingeniería Informática con una mentalidad enfocada en entender problemas, diseñar soluciones y construir sistemas que combinen lógica, estructura, usabilidad y criterio técnico.",
      cards: [
        {
          icon: "01",
          title: "Análisis de sistemas",
          text:
            "Capacidad para descomponer problemas, identificar procesos clave y transformar necesidades en soluciones digitales concretas.",
        },
        {
          icon: "02",
          title: "Diseño de soluciones",
          text:
            "Enfoque en construir productos claros, mantenibles y orientados a usuarios, con estructura técnica y propósito funcional.",
        },
        {
          icon: "03",
          title: "Criterio técnico",
          text:
            "Mentalidad de mejora continua, aprendizaje rápido y adaptación a tecnologías, metodologías y estándares profesionales.",
        },
      ],
    },
    approach: {
      label: "Enfoque de ingeniería",
      title: "De problema a sistema.",
      text:
        "Mi enfoque combina análisis, estructura, implementación y mejora continua. No se trata solamente de hacer una interfaz: se trata de entender cómo debería funcionar una solución digital completa.",
      items: [
        {
          number: "01",
          title: "Análisis del problema",
          text: "Identificación del problema, contexto, usuarios, procesos y restricciones principales.",
        },
        {
          number: "02",
          title: "Diseño del sistema",
          text: "Definición de entidades, módulos, flujos de información y estructura general de la solución.",
        },
        {
          number: "03",
          title: "Implementación",
          text: "Construcción progresiva de interfaces, lógica funcional, persistencia y comportamiento del producto.",
        },
        {
          number: "04",
          title: "Optimización",
          text: "Mejora de claridad, rendimiento, mantenibilidad, experiencia de usuario y escalabilidad.",
        },
      ],
    },
    foundation: {
      label: "Base técnica",
      title: "Áreas de desarrollo profesional.",
      text:
        "Base técnica orientada a crear sistemas digitales, interpretar necesidades, estructurar soluciones y evolucionar hacia entornos de desarrollo profesional.",
      items: [
        {
          name: "Arquitectura de software",
          detail:
            "Diseño de estructuras, módulos y flujos lógicos para aplicaciones mantenibles.",
          tag: "Diseño de sistemas",
        },
        {
          name: "Pensamiento sistémico",
          detail:
            "Comprensión de procesos, relaciones entre datos y comportamiento del producto.",
          tag: "Mentalidad de ingeniería",
        },
        {
          name: "Desarrollo frontend",
          detail:
            "Construcción de interfaces funcionales, claras y orientadas a la experiencia de usuario.",
          tag: "Interfaz de usuario",
        },
        {
          name: "Datos y persistencia",
          detail:
            "Organización, almacenamiento y recuperación de información dentro de aplicaciones reales.",
          tag: "Lógica de datos",
        },
        {
          name: "Despliegue en la nube",
          detail:
            "Publicación, configuración y evolución de productos digitales en entornos web.",
          tag: "Entrega web",
        },
        {
          name: "Ingeniería de producto",
          detail:
            "Desarrollo de soluciones pensando en usuario, negocio, operación y escalabilidad.",
          tag: "Lógica de producto",
        },
      ],
    },
    projects: {
      label: "Trabajo seleccionado",
      title: "Soluciones digitales aplicadas.",
      text:
        "Proyectos orientados a demostrar criterio, organización, lógica de producto y capacidad para transformar una necesidad en una herramienta funcional.",
      viewProject: "Ver proyecto",
      items: [
        {
          title: "Sistema de Gestión",
          status: "Caso de estudio",
          description:
            "Aplicación web en evolución orientada a centralizar procesos operativos de negocios: clientes, órdenes, pagos, seguimiento comercial y análisis mensual. Actualmente trabajando en mejoras de interfaz, estructura de datos y experiencia de usuario.",
          highlights: [
            "Gestión operativa",
            "Flujo de datos",
            "Panel administrativo",
            "Producto funcional",
          ],
        },
        {
          title: "Portfolio Profesional",
          status: "Identidad digital",
          description:
            "Sitio personal diseñado para presentar perfil técnico, criterio visual, enfoque profesional y evolución como futuro ingeniero informático.",
          highlights: [
            "Interfaz avanzada",
            "Animaciones fluidas",
            "Diseño responsive",
            "Marca personal",
          ],
        },
      ],
    },
    caseStudy: {
      label: "Caso de estudio",
      title: "Sistema de Gestión.",
      text:
        "Un proyecto en evolución diseñado para resolver una necesidad concreta: centralizar información operativa y mejorar el seguimiento administrativo de negocios.",
      problemLabel: "Problema",
      problemTitle:
        "Información dispersa, procesos manuales y poco control operativo.",
      problemText:
        "Muchos negocios administran clientes, trabajos, pagos y seguimiento comercial en lugares separados, lo que dificulta mantener orden, control y claridad sobre el estado real del negocio.",
      solutionLabel: "Solución",
      solutionTitle:
        "Una aplicación web para organizar el flujo administrativo completo.",
      solutionText:
        "Estoy desarrollando una herramienta para registrar clientes, administrar órdenes, controlar estados de pago, visualizar resúmenes mensuales y centralizar información clave en una única interfaz. El proyecto se encuentra en evolución, con foco actual en mejorar la experiencia visual, la organización interna y la claridad operativa.",
      productionCta: "Ver sistema en producción →",
      cards: [
        {
          title: "Entidades principales",
          text: "Clientes, órdenes, pagos y resumen mensual.",
        },
        {
          title: "Decisión técnica",
          text: "Persistencia de datos para evitar pérdida de información.",
        },
        {
          title: "Diseño funcional",
          text: "Interfaz clara para uso operativo cotidiano.",
        },
        {
          title: "Evolución",
          text: "Base en evolución para futuras mejoras, nuevas funciones y una interfaz más profesional.",
        },
      ],
    },
    education: {
      label: "Educación",
      title: "Formación académica.",
      text:
        "Mi perfil técnico se construye sobre una base universitaria en Ingeniería Informática, combinando teoría, lógica, análisis y construcción práctica de soluciones digitales.",
      primaryLabel: "Formación principal",
      complementaryLabel: "Formación complementaria",
      academicAreas: "Áreas académicas",
      items: [
        {
          title: "Ingeniería Informática",
          institution: "Formación universitaria en curso",
          description:
            "Base académica orientada a programación, lógica, matemática, sistemas, tecnologías informáticas y resolución estructurada de problemas.",
        },
        {
          title: "Carrera de Desarrollo Front-End React",
          institution: "Coderhouse · Finalizado",
          description:
            "Formación complementaria orientada al desarrollo de interfaces web modernas, componentes reutilizables, lógica frontend, diseño responsive y construcción de aplicaciones con React.",
        },
      ],
      areas: [
        "Programación",
        "Lógica computacional",
        "Análisis de sistemas",
        "Matemática aplicada",
        "Tecnologías informáticas",
        "Resolución de problemas",
      ],
    },
    current: {
      label: "Construcción actual",
      title: "Construcción activa de producto.",
      text:
        "Además de formarme académicamente, desarrollo proyectos propios para aplicar lógica, diseño de sistemas, gestión de datos y pensamiento de producto en escenarios reales.",
      activeProject: "Proyecto activo",
      technicalDirection: "Dirección técnica",
      directionTitle: "De práctica a producto.",
      directionText:
        "El objetivo no es presentar una versión artificial del producto, sino desarrollar una solución real con estructura, uso práctico, mejora continua y criterio profesional.",
      steps: [
        "Mejorar arquitectura interna",
        "Escalar funcionalidades",
        "Refinar experiencia de usuario",
        "Documentar avances y decisiones del proyecto",
      ],
      items: [
        {
          title: "Sistema de Gestión",
          description:
            "Producto web en evolución enfocado en administración de clientes, seguimiento de órdenes, estados de pago y análisis operativo para negocios. Actualmente trabajando en una mejora visual y funcional para acercarlo a una experiencia más profesional.",
          points: [
            "Lógica de negocio",
            "Persistencia de datos",
            "Flujo administrativo",
            "Evolución del producto",
          ],
        },
      ],
    },
    capabilities: {
      label: "Competencias",
      title: "Capacidades que aportan valor real.",
      text:
        "Más allá de herramientas puntuales, mi enfoque está en desarrollar habilidades transferibles que una empresa necesita: análisis, adaptación, resolución de problemas y construcción de soluciones.",
      items: [
        "Análisis y resolución de problemas",
        "Diseño de sistemas orientados a usuarios",
        "Pensamiento lógico aplicado a software",
        "Organización de procesos y datos",
        "Criterio visual y experiencia de usuario",
        "Adaptabilidad técnica y aprendizaje rápido",
      ],
    },
    contact: {
      title: "Abierto a oportunidades y nuevos desafíos.",
      text:
        "Busco seguir creciendo en entornos donde pueda aprender, aportar, resolver problemas reales y desarrollarme como futuro ingeniero informático.",
      linkedin: "LinkedIn →",
      email: "Email →",
      cv: "Descargar CV ↓",
    },
    footer:
      "© 2026 Nicolas Marset. Portfolio profesional construido con enfoque, criterio técnico y visión de ingeniería.",
  },
  en: {
    nav: [
      { label: "Home", target: "inicio" },
      { label: "About", target: "sobre-mi" },
      { label: "Approach", target: "enfoque" },
      { label: "Technical Profile", target: "perfil-tecnico" },
      { label: "Projects", target: "proyectos" },
      { label: "Contact", target: "contacto" },
    ],
    languageButton: "Español",
    languageAria: "Switch language to Spanish",
    profile: {
      career: "Computer Engineering in progress",
      orientation: "Software Engineering and Digital Systems",
      focus: ["System Design", "Product Logic", "Scalable Interfaces"],
      mindset: "Analyze. Build. Optimize.",
    },
    hero: {
      eyebrow: "Computer Engineering · Software · Digital Systems",
      degree: "Computer Engineering",
      cardText:
        "Profile focused on software, digital systems, and building real solutions.",
      text:
        "Profile focused on software engineering, systems analysis, and building functional, scalable digital solutions designed to solve real problems.",
      primaryCta: "View projects →",
      secondaryCta: "Contact me →",
      cvCta: "Download CV ↓",
    },
    about: {
      label: "About Me",
      title: "Technical profile with an engineering mindset.",
      text:
        "I am studying Computer Engineering with a mindset focused on understanding problems, designing solutions, and building systems that combine logic, structure, usability, and technical judgment.",
      cards: [
        {
          icon: "01",
          title: "Systems analysis",
          text:
            "Ability to break down problems, identify key processes, and turn needs into concrete digital solutions.",
        },
        {
          icon: "02",
          title: "Solution design",
          text:
            "Focused on building clear, maintainable, user-oriented products with technical structure and functional purpose.",
        },
        {
          icon: "03",
          title: "Technical judgment",
          text:
            "Continuous improvement mindset, fast learning, and adaptation to technologies, methodologies, and professional standards.",
        },
      ],
    },
    approach: {
      label: "Engineering Approach",
      title: "From problem to system.",
      text:
        "My approach combines analysis, structure, implementation, and continuous improvement. It is not only about building an interface: it is about understanding how a complete digital solution should work.",
      items: [
        {
          number: "01",
          title: "Problem Analysis",
          text: "Identifying the problem, context, users, processes, and main constraints.",
        },
        {
          number: "02",
          title: "System Design",
          text: "Defining entities, modules, information flows, and the general structure of the solution.",
        },
        {
          number: "03",
          title: "Implementation",
          text: "Progressive construction of interfaces, functional logic, persistence, and product behavior.",
        },
        {
          number: "04",
          title: "Optimization",
          text: "Improving clarity, performance, maintainability, user experience, and scalability.",
        },
      ],
    },
    foundation: {
      label: "Technical Foundation",
      title: "Professional development areas.",
      text:
        "Technical foundation focused on creating digital systems, interpreting needs, structuring solutions, and growing toward professional development environments.",
      items: [
        {
          name: "Software Architecture",
          detail:
            "Design of structures, modules, and logical flows for maintainable applications.",
          tag: "System Design",
        },
        {
          name: "Systems Thinking",
          detail:
            "Understanding processes, relationships between data, and product behavior.",
          tag: "Engineering Mindset",
        },
        {
          name: "Frontend Engineering",
          detail:
            "Building functional, clear interfaces focused on user experience.",
          tag: "User Interface",
        },
        {
          name: "Data & Persistence",
          detail:
            "Organization, storage, and retrieval of information inside real applications.",
          tag: "Data Logic",
        },
        {
          name: "Cloud Deployment",
          detail:
            "Publishing, configuring, and evolving digital products in web environments.",
          tag: "Web Delivery",
        },
        {
          name: "Product Engineering",
          detail:
            "Developing solutions with the user, business, operations, and scalability in mind.",
          tag: "Product Logic",
        },
      ],
    },
    projects: {
      label: "Selected Work",
      title: "Applied digital solutions.",
      text:
        "Projects aimed at showing judgment, organization, product logic, and the ability to turn a need into a functional tool.",
      viewProject: "View project",
      items: [
        {
          title: "Management System",
          status: "Case Study",
          description:
            "An evolving web application focused on centralizing business operations: clients, orders, payments, commercial follow-up, and monthly analysis. Currently improving the interface, data structure, and user experience.",
          highlights: [
            "Operational management",
            "Data flow",
            "Admin dashboard",
            "Functional product",
          ],
        },
        {
          title: "Professional Portfolio",
          status: "Digital Identity",
          description:
            "Personal site designed to present technical profile, visual judgment, professional focus, and evolution as a future computer engineer.",
          highlights: [
            "Advanced interface",
            "Fluid animations",
            "Responsive design",
            "Personal brand",
          ],
        },
      ],
    },
    caseStudy: {
      label: "Case Study",
      title: "Management System.",
      text:
        "An evolving project designed to solve a concrete need: centralizing operational information and improving administrative tracking for businesses.",
      problemLabel: "Problem",
      problemTitle:
        "Scattered information, manual processes, and limited operational control.",
      problemText:
        "Many businesses manage clients, jobs, payments, and commercial follow-up in separate places, making it harder to maintain order, control, and clarity over the real state of the business.",
      solutionLabel: "Solution",
      solutionTitle:
        "A web application to organize the full administrative flow.",
      solutionText:
        "I am developing a tool to register clients, manage orders, control payment statuses, view monthly summaries, and centralize key information in a single interface. The project is evolving, with the current focus on improving the visual experience, internal organization, and operational clarity.",
      productionCta: "View live system →",
      cards: [
        {
          title: "Main entities",
          text: "Clients, orders, payments, and monthly summary.",
        },
        {
          title: "Technical decision",
          text: "Data persistence to avoid information loss.",
        },
        {
          title: "Functional design",
          text: "Clear interface for everyday operational use.",
        },
        {
          title: "Evolution",
          text: "An evolving base for future improvements, new features, and a more professional interface.",
        },
      ],
    },
    education: {
      label: "Education",
      title: "Academic background.",
      text:
        "My technical profile is built on a university foundation in Computer Engineering, combining theory, logic, analysis, and practical construction of digital solutions.",
      primaryLabel: "Main education",
      complementaryLabel: "Complementary education",
      academicAreas: "Academic areas",
      items: [
        {
          title: "Computer Engineering",
          institution: "University studies in progress",
          description:
            "Academic foundation focused on programming, logic, mathematics, systems, information technologies, and structured problem solving.",
        },
        {
          title: "Front-End React Development Program",
          institution: "Coderhouse · Completed",
          description:
            "Complementary education focused on modern web interfaces, reusable components, frontend logic, responsive design, and building applications with React.",
        },
      ],
      areas: [
        "Programming",
        "Computational logic",
        "Systems analysis",
        "Applied mathematics",
        "Information technologies",
        "Problem solving",
      ],
    },
    current: {
      label: "Currently Building",
      title: "Active product development.",
      text:
        "In addition to my academic training, I build personal projects to apply logic, system design, data management, and product thinking in real scenarios.",
      activeProject: "Active project",
      technicalDirection: "Technical direction",
      directionTitle: "From practice to product.",
      directionText:
        "The goal is not to present an artificial version of the product, but to develop a real solution with structure, practical use, continuous improvement, and professional judgment.",
      steps: [
        "Improve internal architecture",
        "Scale functionality",
        "Refine user experience",
        "Document progress and project decisions",
      ],
      items: [
        {
          title: "Management System",
          description:
            "An evolving web product focused on client administration, order tracking, payment statuses, and operational analysis for businesses. Currently working on visual and functional improvements to move it closer to a more professional experience.",
          points: [
            "Business logic",
            "Data persistence",
            "Administrative flow",
            "Product evolution",
          ],
        },
      ],
    },
    capabilities: {
      label: "Capabilities",
      title: "Skills that create real value.",
      text:
        "Beyond specific tools, my focus is on developing transferable skills companies need: analysis, adaptability, problem solving, and solution building.",
      items: [
        "Problem analysis and solving",
        "User-oriented system design",
        "Logical thinking applied to software",
        "Process and data organization",
        "Visual judgment and user experience",
        "Technical adaptability and fast learning",
      ],
    },
    contact: {
      title: "Open to opportunities and new challenges.",
      text:
        "I want to keep growing in environments where I can learn, contribute, solve real problems, and develop as a future computer engineer.",
      linkedin: "LinkedIn →",
      email: "Email →",
      cv: "Download CV ↓",
    },
    footer:
      "© 2026 Nicolas Marset. Professional portfolio built with focus, technical judgment, and an engineering vision.",
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

function GithubLogo() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.35.95.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a10.8 10.8 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.18c0 .31.21.68.79.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
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
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Button>
                  <GithubLogo />
                  GitHub →
                </Button>
              </a>

              <button type="button" onClick={() => scrollToSection("proyectos")}>
                <Button>{t.hero.primaryCta}</Button>
              </button>

              <button type="button" onClick={() => scrollToSection("contacto")}>
                <Button>{t.hero.secondaryCta}</Button>
              </button>

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

        <div className="grid gap-5 md:grid-cols-3">
          {t.about.cards.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] font-mono text-sm text-zinc-300">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-white">{item.title}</h3>

              <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="enfoque"
        className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-10"
      >
        <SectionTitle
          label={t.approach.label}
          title={t.approach.title}
          text={t.approach.text}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.approach.items.map((item) => (
            <div
              key={item.number}
              className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-zinc-900/80"
            >
              <div className="mb-8 font-mono text-sm text-zinc-500">
                {item.number}
              </div>

              <h3 className="text-xl font-semibold text-white">{item.title}</h3>

              <p className="mt-4 leading-7 text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="perfil-tecnico"
        className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-10"
      >
        <SectionTitle
          label={t.foundation.label}
          title={t.foundation.title}
          text={t.foundation.text}
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.foundation.items.map((tech) => (
            <div
              key={tech.name}
              className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-zinc-900/80"
            >
              <div className="mb-5 flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {tech.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {tech.detail}
                  </p>
                </div>

                <span className="font-mono text-xs text-zinc-600">SYS</span>
              </div>

              <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-zinc-400">
                {tech.tag}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="proyectos"
        className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-10"
      >
        <SectionTitle
          label={t.projects.label}
          title={t.projects.title}
          text={t.projects.text}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {t.projects.items.map((project) => (
            <article
              key={project.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="mb-4 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                {project.status}
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {project.title}
              </h3>

              <p className="mt-5 leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {project.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={() => scrollToSection("case-study")}
                  className="rounded-xl border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-white/30 hover:text-white"
                >
                  {t.projects.viewProject}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="case-study"
        className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-10"
      >
        <SectionTitle
          label={t.caseStudy.label}
          title={t.caseStudy.title}
          text={t.caseStudy.text}
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-7 backdrop-blur-xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
              {t.caseStudy.problemLabel}
            </p>

            <h3 className="text-2xl font-semibold text-white">
              {t.caseStudy.problemTitle}
            </h3>

            <p className="mt-5 leading-7 text-zinc-400">
              {t.caseStudy.problemText}
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
              {t.caseStudy.solutionLabel}
            </p>

            <h3 className="text-2xl font-semibold text-white">
              {t.caseStudy.solutionTitle}
            </h3>

            <p className="mt-5 leading-7 text-zinc-400">
              {t.caseStudy.solutionText}
            </p>
            <div className="mt-7">
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.1]"
              >
                {t.caseStudy.productionCta}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {t.caseStudy.cards.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
            >
              <h4 className="font-semibold text-white">{item.title}</h4>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-10">
        <SectionTitle
          label={t.education.label}
          title={t.education.title}
          text={t.education.text}
        />

        <div className="grid gap-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {t.education.items.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-zinc-900/80"
              >
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
                  {index === 0
                    ? t.education.primaryLabel
                    : t.education.complementaryLabel}
                </p>

                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
                  {item.institution}
                </p>

                <p className="mt-5 leading-7 text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
              {t.education.academicAreas}
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {t.education.areas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-zinc-300"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-10">
        <SectionTitle
          label={t.current.label}
          title={t.current.title}
          text={t.current.text}
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {t.current.items.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-zinc-900/80"
            >
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
                {t.current.activeProject}
              </p>

              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                {item.title}
              </h3>

              <p className="mt-5 leading-7 text-zinc-400">
                {item.description}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {item.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-zinc-300"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </article>
          ))}

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
              {t.current.technicalDirection}
            </p>

            <h3 className="text-2xl font-semibold text-white">
              {t.current.directionTitle}
            </h3>

            <p className="mt-5 leading-7 text-zinc-400">
              {t.current.directionText}
            </p>

            <div className="mt-7 space-y-3">
              {t.current.steps.map((step) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-zinc-300"
                >
                  <span className="text-zinc-500">→</span>
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-10">
        <SectionTitle
          label={t.capabilities.label}
          title={t.capabilities.title}
          text={t.capabilities.text}
        />

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {t.capabilities.items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-zinc-300 transition hover:bg-white/[0.06]"
            >
              <span className="text-zinc-500">✦</span>
              {item}
            </div>
          ))}
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
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.1]"
            >
              <span className="flex items-center gap-2">
                <GithubLogo />
                GitHub →
              </span>
            </a>

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
