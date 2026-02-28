import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X, Play, ChevronRight } from 'lucide-react';
import { PROJECTS, Project } from './constants';

const Navbar = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-studio-bg/80 backdrop-blur-md border-b border-studio-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-display font-bold tracking-tighter text-xl">
          HECTIC LABS
        </div>
        
        <div className="hidden md:flex items-center gap-12">
          {['Work', 'Studio', 'Process', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-widest text-studio-ink/60 hover:text-studio-ink transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button 
          onClick={onContactClick}
          className="px-6 py-2.5 border border-studio-ink text-xs font-bold uppercase tracking-widest hover:bg-studio-ink hover:text-studio-bg transition-all duration-300"
        >
          LET'S TALK
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 px-6 max-w-7xl mx-auto border-x border-studio-border">
      
      {/* Decorative Grid Lines */}
      <div className="absolute top-0 left-[60%] w-px h-full bg-studio-border hidden lg:block" />
      <div className="absolute top-0 left-0 w-full h-px bg-studio-border" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center relative">
        
        {/* LEFT SIDE */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-studio-accent" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-studio-accent">
              Available for Projects
            </p>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight leading-[0.95] mb-10 text-balance">
            I build{" "}
            <span className="underline decoration-2 underline-offset-8">
              cinematic
            </span>{" "}
            <br />
            films.
          </h1>
          
          <div className="max-w-md">
            <p className="text-lg md:text-xl text-studio-ink/60 leading-relaxed mb-12">
              I’m Afrin, a Video Editor and Creative Technologist. Founder of Hectic Labs — a studio focused on strategic visual storytelling.
            </p>
            
            <div className="flex items-center gap-8">
              <button className="group relative flex items-center gap-3 px-0 py-2 text-sm font-bold uppercase tracking-widest overflow-hidden">
                <span className="relative z-10">View Work</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-studio-ink origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-studio-ink origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </button>
              
              <div className="h-px w-12 bg-studio-border" />
              
              <p className="text-[10px] font-bold uppercase tracking-widest text-studio-ink/30">
                Based in Trivadrum ~ Kerala / Remote
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE — FIXED ALIGNMENT */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] overflow-hidden border border-studio-border">
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <p className="text-[20vw] font-display font-bold tracking-tighter text-studio-ink/5 leading-none select-none">
                AFRIN
              </p>
            </div>

            <img 
              src="/assets/hero/hero-image.png" 
              alt="Featured Project" 
              className="w-full h-full object-cover relative z-10"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const ToolsStrip = () => {
  const tools = ["DAVINCI RESOLVE", "COLOR GRADING", "SOUND DESIGN", "BRAND FILMS", "MOTION SYSTEMS"];
  return (
    <div className="border-y border-studio-border py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-8 md:gap-4">
        {tools.map((tool, i) => (
          <React.Fragment key={tool}>
            <span className="text-[10px] font-bold tracking-[0.2em] text-studio-ink/100 uppercase">
              {tool}
            </span>
            {i < tools.length - 1 && (
              <div className="hidden md:block w-px h-4 bg-studio-border self-center" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const AboutMe = () => {
  return (
    <section id="studio" className="py-32 px-6 max-w-7xl mx-auto border-x border-studio-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-t border-studio-border">
        
        <div className="lg:col-span-1 p-12 border-r border-studio-border hidden lg:flex items-start justify-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-studio-ink/20 vertical-text rotate-180">
            ABOUT THE EDITOR
          </p>
        </div>
        
        <div className="lg:col-span-11 grid grid-cols-1 lg:grid-cols-2 gap-0">
          
          {/* LEFT CONTENT */}
          <div className="p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-studio-border">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-studio-accent mb-12 flex items-center gap-3">
              <span className="w-2 h-2 bg-studio-accent" />
              Studio Profile
            </h2>

            <p className="text-4xl md:text-5xl font-display font-medium leading-[1.1] mb-12 text-balance">
              I specialize in cinematic editing, working primarily in DaVinci Resolve to bring a high-end post-production feel to every project.
            </p>

            <div className="space-y-8 text-lg text-studio-ink/70 leading-relaxed">
              <p>
                My focus is on storytelling and precision. I believe that the best edits are those that feel intentional, where every frame serves a purpose in the larger narrative arc.
              </p>
              <p>
                Currently, I’m building Hectic Labs as a structured creative studio — a space where I can scale my approach to cinematic brand storytelling and post-production systems.
              </p>
            </div>
          </div>
          
          {/* RIGHT VIDEO COLUMN */}
          <div className="p-12 lg:p-20 bg-studio-ink/[0.02] flex flex-col justify-between">
            
            <div className="aspect-[3/4] overflow-hidden border border-studio-border mb-12">
              <video
                src="/assets/second/prev.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] font-bold text-studio-ink/40 uppercase tracking-widest mb-2">
                  Specialization
                </p>
                <p className="text-sm font-medium">Cinematic Brand Films</p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-studio-ink/40 uppercase tracking-widest mb-2">
                  Location
                </p>
                <p className="text-sm font-medium">Kerala ~ India / Global</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const WhatIDo = () => {
  const services = [
    { title: "Brand Films", desc: "I craft cinematic brand films that combine emotion and structure to define your visual identity.", icon: "🎬" },
    { title: "Product Promos", desc: "I design high-energy showcases focused on movement and technical precision.", icon: "💎" },
    { title: "Color Grading", desc: "I provide professional node-based grading to ensure a consistent, cinematic look.", icon: "🎨" },
    { title: "Post-Production Systems", desc: "I build custom workflows and motion systems for scalable, high-end content.", icon: "⚙️" },
  ];

  return (
    <section id="process" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <h2 className="text-4xl font-display font-bold mb-6">What I Do</h2>
          <p className="text-lg text-studio-ink/70 leading-relaxed max-w-md">
            I don't just edit video; I craft narratives. My approach combines technical precision with artistic intuition to deliver films that resonate.
          </p>
          
          <div className="mt-24 relative">
            <div className="flex items-start gap-10">
              <div className="hidden sm:block pt-4">
                <div className="w-16 h-px bg-studio-accent" />
              </div>
              <div className="relative">
                <div className="absolute -top-12 -left-4 text-[10vw] font-display font-bold text-studio-ink/[0.02] pointer-events-none select-none">
                  2026
                </div>
                
                <p className="text-[10px] font-bold text-studio-accent uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-studio-accent animate-pulse" />
                  Founder of Hectic Labs
                </p>
                
                <h3 className="text-6xl md:text-7xl font-display font-bold tracking-tighter leading-[0.9] mb-10">
                  Launching <br />
                  <span className="italic font-normal serif text-studio-ink/10">Soon</span>
                </h3>
                
                <p className="text-xl text-studio-ink/60 leading-relaxed max-w-sm border-l-2 border-studio-accent/20 pl-8">
                  Hectic Labs is my upcoming creative studio focused on cinematic brand storytelling and structured post-production systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-studio-border border border-studio-border rounded-xl overflow-hidden">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="bg-studio-bg p-10 hover:bg-studio-ink/[0.02] transition-colors group"
            >
              <div className="text-2xl mb-6 grayscale group-hover:grayscale-0 transition-all">{service.icon}</div>
              <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-studio-ink/60 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedWork = ({ onProjectClick }: { onProjectClick: (p: Project) => void }) => {
  const mainProject = PROJECTS[0];
  const otherProjects = PROJECTS.slice(1);

  return (
    <section id="work" className="py-32 px-6 max-w-7xl mx-auto border-x border-studio-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-t border-studio-border">
        <div className="lg:col-span-4 p-12 border-r border-studio-border">
          <h2 className="text-5xl font-display font-bold mb-6">Featured Work</h2>
          <p className="text-lg text-studio-ink/70 leading-relaxed mb-10">
            Selected case studies exploring cinematic editing and workflow precision.
          </p>
          <button className="text-xs font-bold uppercase tracking-widest border-b border-studio-ink pb-2 hover:opacity-60 transition-opacity">
            See All Work
          </button>
        </div>

        <div className="lg:col-span-8">
          {/* Main Featured */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            className="group cursor-pointer p-12 border-b border-studio-border"
            onClick={() => onProjectClick(mainProject)}
          >
            <div className="aspect-video overflow-hidden mb-8 border border-studio-border">
              <img 
                src={mainProject.thumbnail} 
                alt={mainProject.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-studio-ink/40 uppercase mb-2">{mainProject.category}</p>
                <h3 className="text-3xl font-display font-bold">{mainProject.title}</h3>
              </div>
              <p className="text-sm font-medium text-studio-ink/40">{mainProject.year}</p>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {otherProjects.map((project, idx) => (
              <motion.div 
                key={project.id}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                viewport={{ once: true }}
                className={`group cursor-pointer p-12 border-b border-studio-border ${idx % 2 === 0 ? 'md:border-r' : ''}`}
                onClick={() => onProjectClick(project)}
              >
                <div className="aspect-video overflow-hidden mb-8 border border-studio-border">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-studio-ink/40 uppercase mb-2">{project.category}</p>
                    <h3 className="text-xl font-display font-bold">{project.title}</h3>
                  </div>
                  <p className="text-sm font-medium text-studio-ink/40">{project.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudy = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-studio-bg overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <button 
          onClick={onClose}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-12 hover:opacity-60 transition-opacity"
        >
          <X className="w-4 h-4" />
          Close Project
        </button>

        <div className="aspect-video overflow-hidden bg-black mb-12 shadow-2xl border border-studio-border">
          <iframe 
            src={project.videoUrl} 
            className="w-full h-full"
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </div>

        <div className="mb-24">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-12">{project.title}</h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-studio-border">
            <div>
              <p className="text-[10px] font-bold text-studio-ink/40 uppercase tracking-widest mb-2">Role</p>
              <p className="text-sm font-medium">{project.role}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-studio-ink/40 uppercase tracking-widest mb-2">Duration</p>
              <p className="text-sm font-medium">{project.duration}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-studio-ink/40 uppercase tracking-widest mb-2">Format</p>
              <p className="text-sm font-medium">{project.format}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-studio-ink/40 uppercase tracking-widest mb-2">Software</p>
              <p className="text-sm font-medium">{project.software}</p>
            </div>
          </div>
        </div>

        {/* Section 1: Overview */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-studio-ink/40">01 — Overview</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-2xl md:text-3xl font-display leading-snug text-balance">
              {project.overview}
            </p>
          </div>
        </section>

        {/* Section 2: Creative Direction */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-studio-ink/40">02 — Creative Direction</h2>
            <div className="mt-12 space-y-6">
              <div>
                <p className="text-[10px] font-bold text-studio-ink/40 uppercase tracking-widest mb-1">Mood</p>
                <p className="text-sm">{project.creativeDirection.mood}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-studio-ink/40 uppercase tracking-widest mb-1">Pacing</p>
                <p className="text-sm">{project.creativeDirection.pacing}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-studio-ink/40 uppercase tracking-widest mb-1">Color System</p>
                <p className="text-sm">{project.creativeDirection.colorSystem}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-studio-ink/40 uppercase tracking-widest mb-1">Music Selection</p>
                <p className="text-sm">{project.creativeDirection.musicSelection}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-studio-ink/70 leading-relaxed">
              {project.creativeDirection.description}
            </p>
          </div>
        </section>

        {/* Section 3: Workflow */}
        <section className="mb-32">
          <div className="mb-12">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-studio-ink/40 mb-6">03 — Workflow & Timeline</h2>
            <h3 className="text-4xl font-display font-bold">Technical Execution</h3>
          </div>
          
          <div className="border border-studio-border overflow-hidden mb-12 bg-white p-4">
            <img 
              src={project.workflow.timelineImage} 
              alt="Timeline Screenshot" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-lg text-studio-ink/70 leading-relaxed mb-12 max-w-3xl">
            This project was structured and edited entirely by me using a layered DaVinci Resolve workflow. I maintain a strict organizational system to ensure technical precision and creative flexibility.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.workflow.layers.map((layer) => (
              <div key={layer.label} className="p-6 border border-studio-border">
                <p className="text-xs font-bold text-studio-accent mb-2">{layer.label}</p>
                <p className="text-sm font-medium">{layer.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-studio-ink text-studio-bg">
            <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Technical Notes</p>
            <p className="text-lg leading-relaxed">{project.workflow.technicalNotes}</p>
          </div>
        </section>

        {/* Section 4: Outcome */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-studio-ink/40">04 — Outcome</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-2xl font-display leading-relaxed">
              {project.outcome}
            </p>
            <button 
              onClick={onClose}
              className="mt-12 px-8 py-4 bg-studio-accent text-white text-sm font-bold uppercase tracking-widest hover:bg-studio-accent/90 transition-all"
            >
              Back to Studio
            </button>
          </div>
        </section>
      </div>
    </motion.div>
  );
};
const Footer = () => {
  return (
    <footer id="contact" className="relative pt-40 pb-12 px-6 bg-studio-ink text-studio-bg overflow-hidden">
      
      {/* Oversized Background Text */}
      <div className="absolute -bottom-12 left-0 w-full pointer-events-none select-none overflow-hidden">
        <h2 className="text-[25vw] font-display font-bold leading-none text-white/[0.02] tracking-tighter whitespace-nowrap">
          HECTIC LABS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
          
          {/* LEFT SIDE (Now Full Width on Large Screens) */}
          <div className="lg:col-span-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-studio-accent" />
              <p className="text-[10px] font-bold text-studio-accent uppercase tracking-[0.3em]">
                Get in Touch
              </p>
            </div>

            <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-16 text-balance leading-[0.95]">
              Let's build something{" "}
              <span className="italic font-normal serif opacity-60">
                cinematic
              </span>.
            </h2>

            <div className="flex flex-col sm:flex-row gap-12 items-start sm:items-center">
              <a 
                href="mailto:hello@hecticlabs.com" 
                className="group relative text-3xl md:text-4xl font-display font-medium"
              >
                afrinz2004@gmail.com
                <span className="absolute -bottom-2 left-0 w-full h-px bg-studio-accent origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-500" />
                <span className="absolute -bottom-2 left-0 w-full h-px bg-studio-accent origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </a>

              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-6 py-3 border border-white/20 hover:bg-white hover:text-studio-ink transition-all duration-500"
              >
                Back to Top <ArrowUpRight className="w-3 h-3 -rotate-45" />
              </button>
            </div>
          </div>

        </div>
        
        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pt-12 gap-8">
          
          <div className="space-y-3">
            <div className="font-display font-bold tracking-tighter text-3xl">
              HECTIC LABS
            </div>
            <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">
              Founder
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
              © 2026 — ALL RIGHTS RESERVED
            </p>
            <p className="text-[10px] font-bold text-white/100 uppercase tracking-[0.1em]">
              Designed & Built by Afrin
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen selection:bg-studio-accent selection:text-white">
      <Navbar onContactClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
      
      <main>
        <Hero />
        <ToolsStrip />
        <AboutMe />
        <WhatIDo />
        <FeaturedWork onProjectClick={setSelectedProject} />
      </main>

      <Footer />

      <AnimatePresence>
        {selectedProject && (
          <CaseStudy 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
