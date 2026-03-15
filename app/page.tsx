"use client";

import { useState } from 'react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');
  const [lang, setLang] = useState<'en' | 'es'>('en');

  const t = {
    en: {
      available: "Available for new projects",
      name: "Felipe Stevenson",
      title: "Backend & AI Developer",
      subtitle: "Backend Developer specialized in AI agents. I build systems that automate business processes, integrate with CRMs, and operate 24/7 in the cloud.",
      viewProjects: "View projects",
      aboutMe: "About me",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      aboutTitle: "From the kitchen to",
      aboutHighlight: "code",
      aboutP1: "My journey began in the kitchen. I studied gastronomy at the French Culinary School and worked for years in the industry, where I learned discipline, working under pressure, and obsessive attention to detail.",
      aboutP2: "In 2024, I decided to reinvent myself and follow my passion for programming. I trained as a Full Stack Developer at Henry Bootcamp — 800 hours of intensive training where I built real projects with JavaScript, TypeScript, React, Node.js, NestJS, and databases.",
      aboutP3: "Today I specialize in Backend and AI agents. During my internship at SpicyTool, I built conversational agents in production: systems that qualify leads, integrate with CRMs, and serve customers 24/7 via WhatsApp.",
      quote: "AI agents are not magic. They are architecture.",
      spanish: "Spanish",
      english: "English",
      native: "Native",
      upperIntermediate: "B2 Upper Intermediate",
      techStack: "Tech Stack",
      education: "Education",
      hours: "800 hours theoretical-practical",
      henryTechs: "JavaScript, TypeScript, React, Node.js, NestJS, PostgreSQL, MongoDB, Git, agile methodologies",
      culinaryTechs: "Discipline, working under pressure, attention to detail, team leadership",
      whereWorked: "Where I've",
      worked: "worked",
      internship: "Professional Internship",
      remote: "Remote",
      expDescription: "SaaS platform that automates sales funnels with AI: CRM, landing pages, workflows, and conversational agents integrated with WhatsApp.",
      highlights: "Key achievements",
      highlight1: "Design and deployment of AI agents that qualify leads using BANT methodology",
      highlight2: "Implementation of the complete flow: WhatsApp → webhook → callbacks → LLM → response",
      highlight3: "Development of assistants using Google enterprise tools, deployed 24/7",
      highlight4: "Management of memory, context, and agent capabilities in production",
      stackUsed: "Stack used",
      whatBuilt: "What I've",
      built: "built",
      all: "All",
      aiAgents: "AI Agents",
      fullStack: "Full Stack",
      frontend: "Frontend",
      viewCode: "View code",
      viewDemo: "View demo",
      mainFeatures: "Main features",
      projectInMind: "Have a project in",
      mind: "mind",
      contactSubtitle: "I'm available for freelance projects, collaborations, or full-time remote positions.",
      sendEmail: "Send email",
      remoteWork: "Remote work",
      builtWith: "Built with React + Tailwind.",
      // Project 1 - AI Nexus Manager
      project1Title: "AI Nexus Manager",
      project1Subtitle: "AI-powered client management system",
      project1Desc: "Comprehensive AI agent system with LangChain, RAG (ChromaDB), and full observability. The agent qualifies leads using BANT, queries a vector knowledge base for real pricing, and persists everything in real-time with complete tracing.",
      project1Context: "AI Bootcamp - Capstone Project",
      project1F1: "LangChain agent with Groq (Llama 3.3 70B)",
      project1F2: "RAG with ChromaDB Cloud for semantic search",
      project1F3: "Full observability with Langfuse tracing",
      project1F4: "REST + GraphQL API (Apollo Server v5)",
      project1F5: "Azure + Cloudflare Workers + CI/CD",
      // Project 2 - Inbound Agent Core
      project2Title: "Inbound Agent Core",
      project2Subtitle: "AI agent for lead qualification",
      project2Desc: "Conversational agent system that automatically qualifies leads using BANT methodology (Budget, Authority, Need, Timeline). Integrated with WhatsApp via Twilio, persists sessions in the cloud, and operates 24/7 without human intervention.",
      project2Context: "SpicyTool - Professional Internship",
      project2F1: "Automatic qualification with BANT methodology",
      project2F2: "Bidirectional WhatsApp integration",
      project2F3: "Session persistence in Supabase",
      project2F4: "Deployed on Google Cloud Run 24/7",
      project2F5: "Callback system for CRM queries",
      // Project 3 - Dashboard Analytics
      project3Title: "Dashboard Analytics",
      project3Subtitle: "Control panel for AI agents",
      project3Desc: "Interactive dashboard to visualize metrics of conversational agents: contacts, active sessions, conversation history, and real-time performance statistics.",
      project3Context: "SpicyTool - Professional Internship",
      project3F1: "Contact and lead visualization",
      project3F2: "Complete conversation history",
      project3F3: "Real-time metrics and statistics",
      project3F4: "Advanced filters by date and status",
      project3F5: "Responsive and modern design",
      // Project 4 - AgroTrack
      project4Title: "AgroTrack",
      project4Subtitle: "Agricultural crop monitoring and optimization",
      project4Desc: "Full stack application for agricultural crop tracking with reminder system, personalized recommendations, and application plans. Scalable backend architecture with secure authentication.",
      project4Context: "Henry Bootcamp - Final Project",
      project4F1: "Entity-relationship system for crop management",
      project4F2: "Automated reminders and application plans",
      project4F3: "User validation with nodemailer",
      project4F4: "Secure authentication with Auth0",
      project4F5: "Scalable and modular backend architecture",
      // Project 5 - AI Agent Node
      project5Title: "AI Agent Node",
      project5Subtitle: "REST API for AI conversational agents",
      project5Desc: "Backend API built with Node.js and TypeScript for AI conversational agents. Professional architecture with Express, Groq/Llama integration, and automated deployment to Azure with CI/CD via GitHub Actions.",
      project5Context: "Personal Project - Meta Preparation",
      project5F1: "Professional REST API architecture (controllers, services, routes)",
      project5F2: "Integration with AI models (Groq/Llama)",
      project5F3: "Conversational session management system",
      project5F4: "Automated CI/CD deployment with GitHub Actions",
      project5F5: "Secure environment variables and secrets configuration",
      // Education
      eduTitle1: "Full Stack Web Developer",
      eduInst1: "Henry Bootcamp",
      eduPeriod1: "Jan 2025 - Aug 2025",
      eduTitle2: "Culinary Arts Technician",
      eduInst2: "French Culinary School Ecole",
      eduPeriod2: "Feb 2012 - Jun 2015",
    },
    es: {
      available: "Disponible para nuevos proyectos",
      name: "Felipe Stevenson",
      title: "Backend & AI Developer",
      subtitle: "Desarrollador Backend especializado en agentes de IA. Construyo sistemas que automatizan procesos de negocio, se integran con CRMs y operan 24/7 en la nube.",
      viewProjects: "Ver proyectos",
      aboutMe: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      aboutTitle: "De la cocina al",
      aboutHighlight: "código",
      aboutP1: "Mi camino comenzó en las cocinas. Estudié gastronomía en la Escuela Culinaria Francesa y trabajé años en el rubro, donde aprendí disciplina, trabajo bajo presión y atención obsesiva al detalle.",
      aboutP2: "En 2024 decidí reinventarme y seguir mi pasión por la programación. Me formé como Full Stack Developer en Henry Bootcamp — 800 horas de formación intensiva donde construí proyectos reales con JavaScript, TypeScript, React, Node.js, NestJS y bases de datos.",
      aboutP3: "Hoy me especializo en Backend y agentes de IA. Durante mi práctica en SpicyTool construí agentes conversacionales en producción: sistemas que califican leads, se integran con CRMs y atienden clientes 24/7 vía WhatsApp.",
      quote: "Los agentes de IA no son magia. Son arquitectura.",
      spanish: "Español",
      english: "Inglés",
      native: "Nativo",
      upperIntermediate: "B2 Upper Intermediate",
      techStack: "Stack Tecnológico",
      education: "Formación",
      hours: "800 horas teórico-prácticas",
      henryTechs: "JavaScript, TypeScript, React, Node.js, NestJS, PostgreSQL, MongoDB, Git, metodologías ágiles",
      culinaryTechs: "Disciplina, trabajo bajo presión, atención al detalle, liderazgo de equipos",
      whereWorked: "Donde he",
      worked: "trabajado",
      internship: "Práctica Profesional",
      remote: "Remoto",
      expDescription: "Plataforma SaaS que automatiza embudos de ventas con IA: CRM, landing pages, workflows y agentes conversacionales integrados con WhatsApp.",
      highlights: "Logros principales",
      highlight1: "Diseño y despliegue de agentes de IA que califican leads con metodología BANT",
      highlight2: "Implementación del flujo completo: WhatsApp → webhook → callbacks → LLM → respuesta",
      highlight3: "Desarrollo de asistentes con herramientas enterprise de Google, desplegados 24/7",
      highlight4: "Gestión de memoria, contexto y capacidades de agentes en producción",
      stackUsed: "Stack utilizado",
      whatBuilt: "Lo que he",
      built: "construido",
      all: "Todos",
      aiAgents: "AI Agents",
      fullStack: "Full Stack",
      frontend: "Frontend",
      viewCode: "Ver código",
      viewDemo: "Ver demo",
      mainFeatures: "Características principales",
      projectInMind: "¿Tienes un proyecto en",
      mind: "mente",
      contactSubtitle: "Estoy disponible para proyectos freelance, colaboraciones o posiciones full-time remotas.",
      sendEmail: "Enviar email",
      remoteWork: "Trabajo remoto",
      builtWith: "Construido con React + Tailwind.",
      // Project 1 - AI Nexus Manager
      project1Title: "AI Nexus Manager",
      project1Subtitle: "Sistema de gestión de clientes con IA",
      project1Desc: "Sistema completo de agente IA con LangChain, RAG (ChromaDB) y observabilidad total. El agente califica leads usando BANT, consulta una base vectorial para precios reales, y persiste todo en tiempo real con trazabilidad completa.",
      project1Context: "AI Bootcamp - Proyecto Final",
      project1F1: "Agente LangChain con Groq (Llama 3.3 70B)",
      project1F2: "RAG con ChromaDB Cloud para búsqueda semántica",
      project1F3: "Observabilidad completa con Langfuse",
      project1F4: "API REST + GraphQL (Apollo Server v5)",
      project1F5: "Azure + Cloudflare Workers + CI/CD",
      // Project 2 - Inbound Agent Core
      project2Title: "Inbound Agent Core",
      project2Subtitle: "Agente de IA para calificación de leads",
      project2Desc: "Sistema de agente conversacional que califica leads automáticamente usando metodología BANT (Budget, Authority, Need, Timeline). Integrado con WhatsApp vía Twilio, persiste sesiones en la nube y opera 24/7 sin intervención humana.",
      project2Context: "SpicyTool - Práctica Profesional",
      project2F1: "Calificación automática con metodología BANT",
      project2F2: "Integración bidireccional con WhatsApp",
      project2F3: "Persistencia de sesiones en Supabase",
      project2F4: "Desplegado en Google Cloud Run 24/7",
      project2F5: "Sistema de callbacks para consultas a CRM",
      // Project 3 - Dashboard Analytics
      project3Title: "Dashboard Analytics",
      project3Subtitle: "Panel de control para agentes de IA",
      project3Desc: "Dashboard interactivo para visualizar métricas de agentes conversacionales: contactos, sesiones activas, historial de conversaciones y estadísticas de rendimiento en tiempo real.",
      project3Context: "SpicyTool - Práctica Profesional",
      project3F1: "Visualización de contactos y leads",
      project3F2: "Historial completo de conversaciones",
      project3F3: "Métricas y estadísticas en tiempo real",
      project3F4: "Filtros avanzados por fecha y status",
      project3F5: "Diseño responsive y moderno",
      // Project 4 - AgroTrack
      project4Title: "AgroTrack",
      project4Subtitle: "Monitoreo y optimización de cultivos agrícolas",
      project4Desc: "Aplicación full stack para el seguimiento de cultivos agrícolas con sistema de recordatorios, recomendaciones personalizadas y planes de aplicación. Arquitectura backend escalable con autenticación segura.",
      project4Context: "Henry Bootcamp - Proyecto Final",
      project4F1: "Sistema de entidad-relación para gestión de cultivos",
      project4F2: "Recordatorios y planes de aplicación automatizados",
      project4F3: "Validación de usuarios con nodemailer",
      project4F4: "Autenticación segura con Auth0",
      project4F5: "Arquitectura backend escalable y modular",
      // Project 5 - AI Agent Node
      project5Title: "AI Agent Node",
      project5Subtitle: "API REST para agentes conversacionales de IA",
      project5Desc: "API backend construida con Node.js y TypeScript para agentes conversacionales de IA. Arquitectura profesional con Express, integración con Groq/Llama, y deploy automatizado en Azure con CI/CD via GitHub Actions.",
      project5Context: "Proyecto Personal - Preparación Meta",
      project5F1: "Arquitectura REST API profesional (controllers, services, routes)",
      project5F2: "Integración con modelos de IA (Groq/Llama)",
      project5F3: "Sistema de gestión de sesiones conversacionales",
      project5F4: "Deploy automatizado CI/CD con GitHub Actions",
      project5F5: "Configuración segura de variables de entorno y secrets",
      // Education
      eduTitle1: "Full Stack Web Developer",
      eduInst1: "Henry Bootcamp",
      eduPeriod1: "Ene 2025 - Ago 2025",
      eduTitle2: "Técnico en Gastronomía",
      eduInst2: "Escuela Culinaria Francesa Ecole",
      eduPeriod2: "Feb 2012 - Jun 2015",
    }
  };

  const txt = t[lang];

  const projects = [
    {
      id: 1,
      title: txt.project1Title,
      subtitle: txt.project1Subtitle,
      description: txt.project1Desc,
      tech: ["Node.js", "TypeScript", "LangChain", "Groq", "ChromaDB", "Supabase", "GraphQL", "Azure", "Langfuse"],
      features: [txt.project1F1, txt.project1F2, txt.project1F3, txt.project1F4, txt.project1F5],
      category: "ai",
      context: txt.project1Context,
      github: "https://github.com/FStevenson91/ai-nexus-manager",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      title: txt.project2Title,
      subtitle: txt.project2Subtitle,
      description: txt.project2Desc,
      tech: ["Python", "FastAPI", "Google ADK", "Gemini", "Supabase", "Twilio", "Cloud Run"],
      features: [txt.project2F1, txt.project2F2, txt.project2F3, txt.project2F4, txt.project2F5],
      category: "ai",
      context: txt.project2Context,
      github: "https://github.com/FStevenson91/inbound-agent-core",
      gradient: "from-emerald-500 to-cyan-500"
    },
    {
      id: 3,
      title: txt.project3Title,
      subtitle: txt.project3Subtitle,
      description: txt.project3Desc,
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
      features: [txt.project3F1, txt.project3F2, txt.project3F3, txt.project3F4, txt.project3F5],
      category: "frontend",
      context: txt.project3Context,
      github: "https://github.com/FStevenson91/dashboard-analytics",
      demo: "https://dashboard-analytics-fawn.vercel.app/",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      id: 4,
      title: txt.project4Title,
      subtitle: txt.project4Subtitle,
      description: txt.project4Desc,
      tech: ["NestJS", "TypeORM", "PostgreSQL", "Docker", "Auth0", "React", "Next.js", "Tailwind CSS"],
      features: [txt.project4F1, txt.project4F2, txt.project4F3, txt.project4F4, txt.project4F5],
      category: "fullstack",
      context: txt.project4Context,
      github: "https://github.com/AgroTrackP/AgroTrack",
      gradient: "from-lime-500 to-green-500"
    }
  ];

  const skills = {
    "Backend & APIs": ["Python", "FastAPI", "NestJS", "Node.js", "TypeScript", "GraphQL"],
    "AI & Agents": ["Google ADK", "LangChain", "Groq", "Llama", "Gemini", "RAG", "Langfuse"],
    "Databases": ["PostgreSQL", "Supabase", "MongoDB", "ChromaDB", "TypeORM"],
    "Cloud & DevOps": ["GCP", "Azure", "Cloudflare Workers", "Cloud Run", "Docker", "CI/CD"],
    "Frontend": ["React", "Next.js", "Tailwind CSS"]
  };

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-medium tracking-tight">
            <span className="text-emerald-400">{"<"}</span>FS<span className="text-emerald-400">{"/>"}</span>
          </span>
          <div className="flex items-center gap-4 md:gap-8">
            <a href="#about" className="text-xs md:text-sm text-zinc-400 hover:text-zinc-100 transition-colors">{txt.aboutMe}</a>
            <a href="#experience" className="text-xs md:text-sm text-zinc-400 hover:text-zinc-100 transition-colors">{txt.experience}</a>
            <a href="#projects" className="text-xs md:text-sm text-zinc-400 hover:text-zinc-100 transition-colors">{txt.projects}</a>
            <a href="#contact" className="text-xs md:text-sm text-zinc-400 hover:text-zinc-100 transition-colors">{txt.contact}</a>
            <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} className="px-3 py-1.5 text-xs font-medium rounded-md bg-zinc-800 border border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:text-zinc-100 transition-colors">
              {lang === 'en' ? '🇪🇸 ES' : '🇺🇸 EN'}
            </button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-zinc-400">{txt.available}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="block text-zinc-100">{txt.name}</span>
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">{txt.title}</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">{txt.subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-medium text-zinc-950 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
              {txt.viewProjects}<span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="https://www.linkedin.com/in/felipe-stevenson91/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-zinc-700 rounded-lg font-medium text-zinc-300 hover:bg-zinc-900 hover:border-zinc-600 transition-all duration-300">LinkedIn</a>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-zinc-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-emerald-400 text-sm font-mono mb-4 block">{`// ${txt.aboutMe}`}</span>
              <h2 className="text-4xl font-bold mb-6">{txt.aboutTitle} <span className="text-emerald-400">{txt.aboutHighlight}</span></h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>{txt.aboutP1}</p>
                <p>{txt.aboutP2}</p>
                <p>{txt.aboutP3}</p>
                <p className="text-zinc-300 italic border-l-2 border-emerald-500 pl-4">&quot;{txt.quote}&quot;</p>
              </div>
              <div className="mt-8 flex gap-4">
                <div className="px-4 py-2 bg-zinc-900 rounded-lg border border-zinc-800">
                  <span className="text-xs text-zinc-500">{txt.spanish}</span>
                  <p className="text-zinc-300 font-medium">{txt.native}</p>
                </div>
                <div className="px-4 py-2 bg-zinc-900 rounded-lg border border-zinc-800">
                  <span className="text-xs text-zinc-500">{txt.english}</span>
                  <p className="text-zinc-300 font-medium">{txt.upperIntermediate}</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-lg font-semibold mb-6 text-zinc-200">{txt.techStack}</h3>
                <div className="space-y-5">
                  {Object.entries(skills).map(([category, techs]) => (
                    <div key={category}>
                      <span className="text-xs text-zinc-500 uppercase tracking-wider">{category}</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {techs.map(tech => (
                          <span key={tech} className="px-3 py-1.5 bg-zinc-800 text-zinc-300 text-sm rounded-md border border-zinc-700/50 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors">{tech}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-lg font-semibold mb-6 text-zinc-200">{txt.education}</h3>
                <div className="space-y-6">
                  <div className="relative pl-4 border-l-2 border-zinc-700 hover:border-emerald-500 transition-colors">
                    <h4 className="font-medium text-zinc-200">{txt.eduTitle1}</h4>
                    <p className="text-sm text-emerald-400">{txt.eduInst1}</p>
                    <p className="text-xs text-zinc-500 mt-1">{txt.eduPeriod1} · {txt.hours}</p>
                    <p className="text-xs text-zinc-400 mt-2">{txt.henryTechs}</p>
                  </div>
                  <div className="relative pl-4 border-l-2 border-zinc-700 hover:border-emerald-500 transition-colors">
                    <h4 className="font-medium text-zinc-200">{txt.eduTitle2}</h4>
                    <p className="text-sm text-emerald-400">{txt.eduInst2}</p>
                    <p className="text-xs text-zinc-500 mt-1">{txt.eduPeriod2}</p>
                    <p className="text-xs text-zinc-400 mt-2">{txt.culinaryTechs}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative py-32 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-mono mb-4 block">{`// ${txt.experience}`}</span>
            <h2 className="text-4xl font-bold">{txt.whereWorked} <span className="text-emerald-400">{txt.worked}</span></h2>
          </div>
          <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500" />
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-zinc-100">AI Agent Developer</h3>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">{txt.internship}</span>
                  </div>
                  <p className="text-lg text-zinc-400">SpicyTool <span className="text-zinc-600">·</span> {txt.remote}</p>
                </div>
                <span className="text-sm text-zinc-500 font-mono">Nov 2025 - Feb 2026</span>
              </div>
              <p className="text-zinc-400 mb-6 leading-relaxed">{txt.expDescription}</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-medium text-zinc-300 mb-4">{txt.highlights}</h4>
                  <ul className="space-y-3">
                    {[txt.highlight1, txt.highlight2, txt.highlight3, txt.highlight4].map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />{highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-zinc-800/30 rounded-xl p-6 border border-zinc-800/50">
                  <h4 className="text-sm font-medium text-zinc-300 mb-4">{txt.stackUsed}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">Python, Google ADK, Vertex AI, FastAPI, Gemini, Supabase, Cloud Run, Docker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-400 text-sm font-mono mb-4 block">{`// ${txt.projects}`}</span>
            <h2 className="text-4xl font-bold mb-8">{txt.whatBuilt} <span className="text-emerald-400">{txt.built}</span></h2>
            <div className="inline-flex items-center gap-1 p-1 bg-zinc-900 rounded-lg border border-zinc-800">
              {[{ id: 'all', label: txt.all }, { id: 'ai', label: txt.aiAgents }, { id: 'fullstack', label: txt.fullStack }, { id: 'frontend', label: txt.frontend }].map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-4 py-2 text-sm rounded-md transition-all ${activeTab === tab.id ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'}`}>{tab.label}</button>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-500">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} text-zinc-950`}>
                          {project.category === 'ai' ? 'AI Agent' : project.category === 'fullstack' ? 'Full Stack' : 'Frontend'}
                        </span>
                        <span className="text-xs text-zinc-500 border border-zinc-700 px-2 py-1 rounded">{project.context}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-zinc-400 mb-4">{project.subtitle}</p>
                      <p className="text-zinc-500 leading-relaxed mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map(t => (<span key={t} className="px-2 py-1 text-xs bg-zinc-800 text-zinc-400 rounded border border-zinc-700/50">{t}</span>))}
                      </div>
                      <div className="flex gap-4">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-400 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                          {txt.viewCode}
                        </a>
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-400 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            {txt.viewDemo}
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="bg-zinc-800/30 rounded-xl p-6 border border-zinc-800/50">
                      <h4 className="text-sm font-medium text-zinc-300 mb-4">{txt.mainFeatures}</h4>
                      <ul className="space-y-3">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                            <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} flex-shrink-0`} />{feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-emerald-400 text-sm font-mono mb-4 block">{`// ${txt.contact}`}</span>
          <h2 className="text-4xl font-bold mb-6">{txt.projectInMind} <span className="text-emerald-400">{txt.mind}</span>?</h2>
          <p className="text-zinc-400 mb-12 text-lg">{txt.contactSubtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:felipe.stevenson77@gmail.com" className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-medium text-zinc-950 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
              {txt.sendEmail}<span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="https://www.linkedin.com/in/felipe-stevenson91/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-zinc-700 rounded-lg font-medium text-zinc-300 hover:bg-zinc-900 hover:border-zinc-600 transition-all duration-300">LinkedIn</a>
            <a href="https://github.com/FStevenson91" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-zinc-700 rounded-lg font-medium text-zinc-300 hover:bg-zinc-900 hover:border-zinc-600 transition-all duration-300">GitHub</a>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-zinc-500 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Pichilemu - Santiago
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +56 9 9094 9514
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              {txt.remoteWork}
            </span>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800/50 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-zinc-600 text-sm">© 2025 Felipe Stevenson. {txt.builtWith}</span>
          <div className="flex items-center gap-6">
            <a href="https://github.com/FStevenson91" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/felipe-stevenson91/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-400 transition-colors">LinkedIn</a>
            <a href="mailto:felipe.stevenson77@gmail.com" className="text-zinc-600 hover:text-zinc-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
