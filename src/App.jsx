import { motion } from "framer-motion";

const profileImage = "/images/nicolas-marset.jpeg";

const technicalFoundation = [
  {
    name: "Software Architecture",
    detail:
      "Diseño de estructuras, módulos y flujos lógicos para aplicaciones mantenibles.",
    tag: "System Design",
  },
  {
    name: "Systems Thinking",
    detail:
      "Comprensión de procesos, relaciones entre datos y comportamiento del producto.",
    tag: "Engineering Mindset",
  },
  {
    name: "Frontend Engineering",
    detail:
      "Construcción de interfaces funcionales, claras y orientadas a la experiencia de usuario.",
    tag: "User Interface",
  },
  {
    name: "Data & Persistence",
    detail:
      "Organización, almacenamiento y recuperación de información dentro de aplicaciones reales.",
    tag: "Data Logic",
  },
  {
    name: "Cloud Deployment",
    detail:
      "Publicación, configuración y evolución de productos digitales en entornos web.",
    tag: "Web Delivery",
  },
  {
    name: "Product Engineering",
    detail:
      "Desarrollo de soluciones pensando en usuario, negocio, operación y escalabilidad.",
    tag: "Product Logic",
  },
];

const selectedWork = [
  {
    title: "Sistema de Gestión",
    status: "Case Study",
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
    status: "Digital Identity",
    description:
      "Sitio personal diseñado para presentar perfil técnico, criterio visual, enfoque profesional y evolución como futuro ingeniero informático.",
    highlights: [
      "Interfaz avanzada",
      "Animaciones fluidas",
      "Diseño responsive",
      "Marca personal",
    ],
  },
];

const engineeringApproach = [
  {
    number: "01",
    title: "Problem Analysis",
    text: "Identificación del problema, contexto, usuarios, procesos y restricciones principales.",
  },
  {
    number: "02",
    title: "System Design",
    text: "Definición de entidades, módulos, flujos de información y estructura general de la solución.",
  },
  {
    number: "03",
    title: "Implementation",
    text: "Construcción progresiva de interfaces, lógica funcional, persistencia y comportamiento del producto.",
  },
  {
    number: "04",
    title: "Optimization",
    text: "Mejora de claridad, rendimiento, mantenibilidad, experiencia de usuario y escalabilidad.",
  },
];

const education = [
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
];

const currentFocus = [
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
];

const capabilities = [
  "Análisis y resolución de problemas",
  "Diseño de sistemas orientados a usuarios",
  "Pensamiento lógico aplicado a software",
  "Organización de procesos y datos",
  "Criterio visual y experiencia de usuario",
  "Adaptabilidad técnica y aprendizaje rápido",
];

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
    <button className="group rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.1]">
      <span className="flex items-center gap-2">{children}</span>
    </button>
  );
}

function CodeWindow() {
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
          career:{" "}
          <span className="text-white">
            "Ingeniería Informática en progreso"
          </span>
          ,
        </p>

        <p className="pl-5 text-zinc-300">
          orientation:{" "}
          <span className="text-white">
            "Software Engineering & Digital Systems"
          </span>
          ,
        </p>

        <p className="pl-5 text-zinc-300">
          focus: [
          <span className="text-white">"System Design"</span>,{" "}
          <span className="text-white">"Product Logic"</span>,{" "}
          <span className="text-white">"Scalable Interfaces"</span>],
        </p>

        <p className="pl-5 text-zinc-300">
          mindset:{" "}
          <span className="text-white">"Analyze. Build. Optimize."</span>
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

function ProfileCard() {
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
            Ingeniería Informática
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400 md:text-base">
            Perfil orientado a software, sistemas digitales y construcción de soluciones reales.
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
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-zinc-100">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.16),transparent_35%)]" />

      <nav className="fixed left-1/2 top-5 z-50 hidden -translate-x-1/2 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-xl md:block">
        <div className="flex gap-1 text-sm text-zinc-400">
          {[
  { label: "Inicio", target: "inicio" },
  { label: "Sobre mí", target: "sobre-mí" },
  { label: "Approach", target: "approach" },
  { label: "Perfil técnico", target: "perfil-técnico" },
  { label: "Proyectos", target: "proyectos" },
  { label: "Contacto", target: "contacto" },
].map((item) => (
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
              Ingeniería Informática · Software · Sistemas Digitales
            </div>

            <ProfileCard />

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
              Perfil orientado a la ingeniería de software, el análisis de
              sistemas y la construcción de soluciones digitales funcionales,
              escalables y pensadas para resolver problemas reales.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
  <button type="button" onClick={() => scrollToSection("proyectos")}>
    <Button>Ver proyectos →</Button>
  </button>

  <button type="button" onClick={() => scrollToSection("contacto")}>
    <Button>Contactarme →</Button>
  </button>

  <a href="/CV-Nicolas-Marset.pdf" download>
    <Button>Descargar CV ↓</Button>
  </a>
</div>
          </motion.div>

          <CodeWindow />
        </div>
      </section>

      <section
        id="sobre-mí"
        className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-10"
      >
        <SectionTitle
          label="Sobre mí"
          title="Perfil técnico con visión de ingeniería."
          text="Me estoy formando en Ingeniería Informática con una mentalidad enfocada en entender problemas, diseñar soluciones y construir sistemas que combinen lógica, estructura, usabilidad y criterio técnico."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: "01",
              title: "Análisis de sistemas",
              text: "Capacidad para descomponer problemas, identificar procesos clave y transformar necesidades en soluciones digitales concretas.",
            },
            {
              icon: "02",
              title: "Diseño de soluciones",
              text: "Enfoque en construir productos claros, mantenibles y orientados a usuarios, con estructura técnica y propósito funcional.",
            },
            {
              icon: "03",
              title: "Criterio técnico",
              text: "Mentalidad de mejora continua, aprendizaje rápido y adaptación a tecnologías, metodologías y estándares profesionales.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] font-mono text-sm text-zinc-300">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="approach"
        className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-10"
      >
        <SectionTitle
          label="Engineering Approach"
          title="De problema a sistema."
          text="Mi enfoque combina análisis, estructura, implementación y mejora continua. No se trata solamente de hacer una interfaz: se trata de entender cómo debería funcionar una solución digital completa."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {engineeringApproach.map((item) => (
            <div
              key={item.number}
              className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-zinc-900/80"
            >
              <div className="mb-8 font-mono text-sm text-zinc-500">
                {item.number}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="perfil-técnico"
        className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-10"
      >
        <SectionTitle
          label="Technical Foundation"
          title="Áreas de desarrollo profesional."
          text="Base técnica orientada a crear sistemas digitales, interpretar necesidades, estructurar soluciones y evolucionar hacia entornos de desarrollo profesional."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {technicalFoundation.map((tech) => (
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
          label="Selected Work"
          title="Soluciones digitales aplicadas."
          text="Proyectos orientados a demostrar criterio, organización, lógica de producto y capacidad para transformar una necesidad en una herramienta funcional."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {selectedWork.map((project) => (
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
                  Ver proyecto
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
          label="Case Study"
          title="Sistema de Gestión."
          text="Un proyecto en evolución diseñado para resolver una necesidad concreta: centralizar información operativa y mejorar el seguimiento administrativo de negocios."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-7 backdrop-blur-xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
              Problema
            </p>

            <h3 className="text-2xl font-semibold text-white">
              Información dispersa, procesos manuales y poco control operativo.
            </h3>

            <p className="mt-5 leading-7 text-zinc-400">
              Muchos negocios administran clientes, trabajos, pagos y
              seguimiento comercial en lugares separados, lo que dificulta
              mantener orden, control y claridad sobre el estado real del
              negocio.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
              Solución
            </p>

            <h3 className="text-2xl font-semibold text-white">
              Una aplicación web para organizar el flujo administrativo completo.
            </h3>

            <p className="mt-5 leading-7 text-zinc-400">
              Estoy desarrollando una herramienta para registrar clientes, administrar
              órdenes, controlar estados de pago, visualizar resúmenes mensuales
              y centralizar información clave en una única interfaz. El proyecto se encuentra en evolución, con foco actual en mejorar la experiencia visual, la organización interna y la claridad operativa.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
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
          ].map((item) => (
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
          label="Education"
          title="Formación académica."
          text="Mi perfil técnico se construye sobre una base universitaria en Ingeniería Informática, combinando teoría, lógica, análisis y construcción práctica de soluciones digitales."
        />

        <div className="grid gap-6">
  <div className="grid gap-6 lg:grid-cols-2">
    {education.map((item) => (
      <div
        key={item.title}
        className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-zinc-900/80"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
          {item.title === "Ingeniería Informática"
            ? "Formación principal"
            : "Formación complementaria"}
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
              Áreas académicas
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Programación",
                "Lógica computacional",
                "Análisis de sistemas",
                "Matemática aplicada",
                "Tecnologías informáticas",
                "Resolución de problemas",
              ].map((area) => (
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
          label="Currently Building"
          title="Construcción activa de producto."
          text="Además de formarme académicamente, desarrollo proyectos propios para aplicar lógica, diseño de sistemas, gestión de datos y pensamiento de producto en escenarios reales."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {currentFocus.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-zinc-900/80"
            >
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
                Proyecto activo
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
              Dirección técnica
            </p>

            <h3 className="text-2xl font-semibold text-white">
              De práctica a producto.
            </h3>

            <p className="mt-5 leading-7 text-zinc-400">
              El objetivo no es presentar una versión artificial del producto, sino desarrollar una solución real con estructura, uso práctico, mejora continua y criterio profesional.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Mejorar arquitectura interna",
                "Escalar funcionalidades",
                "Refinar experiencia de usuario",
                "Documentar avances y decisiones del proyecto",
              ].map((step) => (
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
          label="Competencias"
          title="Capacidades que aportan valor real."
          text="Más allá de herramientas puntuales, mi enfoque está en desarrollar habilidades transferibles que una empresa necesita: análisis, adaptación, resolución de problemas y construcción de soluciones."
        />

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
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
            Abierto a oportunidades y nuevos desafíos.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
            Busco seguir creciendo en entornos donde pueda aprender, aportar,
            resolver problemas reales y desarrollarme como futuro ingeniero
            informático.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
  <a
    href="https://www.linkedin.com/in/nicolas-marset-67575025a

"
    target="_blank"
    rel="noopener noreferrer"
    className="group rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.1]"
  >
    <span className="flex items-center gap-2">LinkedIn →</span>
  </a>

  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=nicolasmarsetg@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="group rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.1]"
>
  <span className="flex items-center gap-2">Email →</span>
</a>

  <a
    href="/CV-Nicolas-Marset.pdf"
    download
    className="group rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.1]"
  >
    <span className="flex items-center gap-2">Descargar CV ↓</span>
  </a>
</div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-600">
        © 2026 Nicolas Marset. Portfolio profesional construido con enfoque,
        criterio técnico y visión de ingeniería.
      </footer>
    </main>
  );
}
