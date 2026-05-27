'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BentoCard } from "@/components/BentoCard";
import { NoiseFilter } from "@/components/NoiseFilter";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";
import { translations } from "@/lib/translations";
import {
  Linkedin,
  Github,
  ArrowUpRight,
  Globe,
} from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const t = translations[lang];

  return (
    <main className="relative h-screen lg:h-screen lg:overflow-hidden p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center">
      <NoiseFilter />
      <BackgroundAnimation />

      {/* Language Toggle */}
      <div className="absolute top-4 right-4 md:top-6 lg:top-8 z-50">
        <div className="flex p-1 rounded-full bg-editorial-black/5 dark:bg-editorial-cream/5 border border-editorial-black/5 backdrop-blur-md">
          <button 
            onClick={() => setLang('pt')}
            className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all ${lang === 'pt' ? 'bg-editorial-black text-editorial-cream dark:bg-editorial-cream dark:text-editorial-black shadow-lg' : 'opacity-40 hover:opacity-100'}`}
          >
            PT
          </button>
          <button 
            onClick={() => setLang('en')}
            className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all ${lang === 'en' ? 'bg-editorial-black text-editorial-cream dark:bg-editorial-cream dark:text-editorial-black shadow-lg' : 'opacity-40 hover:opacity-100'}`}
          >
            EN
          </button>
        </div>
      </div>

      <div className="w-full h-full max-w-7xl flex flex-col overflow-hidden">
        <div className="bento-grid flex-1">
          {/* Block 1: Identity */}
          <BentoCard className="col-span-12 lg:col-span-4 lg:row-span-7 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="space-y-1">
                <h1 className="text-4xl font-black tracking-tighter leading-none text-editorial-black dark:text-editorial-cream">
                  ATTrindade
                </h1>
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={lang}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[10px] tracking-[0.2em] uppercase text-brand-blue font-black"
                  >
                    {t.subtitle}
                  </motion.p>
                </AnimatePresence>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={lang}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                >
                  <p className="text-xs font-medium text-editorial-black dark:text-editorial-cream max-w-[220px] leading-relaxed">
                    {t.quote}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-editorial-black/5 dark:border-editorial-cream/5">
              <div className="flex gap-2">
                <a href="https://linkedin.com/in/attrindade" target="_blank" className="p-2 rounded-full hover:bg-brand-blue/10 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://github.com/attrindade" target="_blank" className="p-2 rounded-full hover:bg-brand-blue/10 transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
              <ArrowUpRight className="w-4 h-4 text-brand-blue opacity-30" />
            </div>
          </BentoCard>

          {/* Block 2: Persona */}
          <BentoCard className="col-span-12 lg:col-span-8 lg:row-span-5 flex flex-col justify-end">
            <AnimatePresence mode="wait">
              <motion.div 
                key={lang}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-3"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue">
                  {t.personaLabel}
                </span>
                <h2 className="text-3xl font-bold tracking-tight leading-tight text-editorial-black dark:text-editorial-cream">
                  {t.personaTitle}
                </h2>
                <p className="max-w-2xl text-sm font-medium text-editorial-black/70 dark:text-editorial-cream/70 leading-relaxed">
                  {t.personaBio}
                </p>
              </motion.div>
            </AnimatePresence>
          </BentoCard>

          {/* Block 3: Tool */}
          <BentoCard className="col-span-12 md:col-span-6 lg:col-span-4 lg:row-span-2 group">
            <a href="https://www.attrindade.com/transcricao" target="_blank" className="h-full flex flex-col">
              <div className="flex justify-between items-start mb-auto">
                <div className="px-2 py-0.5 rounded bg-brand-blue/10 text-brand-blue text-[9px] font-black uppercase tracking-wider">Tool</div>
                <ArrowUpRight className="w-4 h-4 opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p className="text-lg font-bold tracking-tight text-editorial-black dark:text-editorial-cream">{t.transcriptionTitle}</p>
                  <p className="text-[10px] uppercase font-black tracking-widest text-editorial-black/40 dark:text-editorial-cream/40">{t.transcriptionLabel}</p>
                </motion.div>
              </AnimatePresence>
            </a>
          </BentoCard>

          {/* Block 4: Clima */}
          <BentoCard className="col-span-12 md:col-span-6 lg:col-span-4 lg:row-span-2 group">
            <a href="https://governaclima.nuvem.ufrgs.br/" target="_blank" className="h-full flex flex-col">
              <div className="flex justify-between items-start mb-auto">
                <div className="px-2 py-0.5 rounded bg-brand-blue/10 text-brand-blue text-[9px] font-black uppercase tracking-wider">Project</div>
                <ArrowUpRight className="w-4 h-4 opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p className="text-lg font-bold tracking-tight text-editorial-black dark:text-editorial-cream">{t.climaTitle}</p>
                  <p className="text-[10px] uppercase font-black tracking-widest text-editorial-black/40 dark:text-editorial-cream/40">{t.climaLabel}</p>
                </motion.div>
              </AnimatePresence>
            </a>
          </BentoCard>

          {/* Block 5: Engineering */}
          <BentoCard className="col-span-12 md:col-span-6 lg:row-span-4">
            <div className="h-full flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div key={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2 mb-auto">
                  <h3 className="text-lg font-bold tracking-tight text-editorial-black dark:text-editorial-cream">{t.engTitle}</h3>
                  <p className="text-sm font-medium text-editorial-black/60 dark:text-editorial-cream/60 leading-relaxed">
                    {t.engBio}
                  </p>
                </motion.div>
              </AnimatePresence>
              <div className="flex flex-wrap gap-2 pt-4">
                {['Python', 'SQL', 'ETL', 'Next.js'].map(tech => (
                  <span key={tech} className="text-[9px] px-2 py-0.5 rounded-md border border-editorial-black/10 dark:border-editorial-cream/10 bg-editorial-black/5 dark:bg-editorial-cream/5 font-black uppercase tracking-wider text-editorial-black/50 dark:text-editorial-cream/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Block 6: Viz */}
          <BentoCard className="col-span-12 md:col-span-6 lg:row-span-4">
            <div className="h-full flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div key={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2 mb-auto">
                  <h3 className="text-lg font-bold tracking-tight text-editorial-black dark:text-editorial-cream">{t.vizTitle}</h3>
                  <p className="text-sm font-medium text-editorial-black/60 dark:text-editorial-cream/60 leading-relaxed">
                    {t.vizBio}
                  </p>
                </motion.div>
              </AnimatePresence>
              <div className="flex flex-wrap gap-2 pt-4">
                {['D3.js', 'Framer', 'UI/UX', 'Stats'].map(tech => (
                  <span key={tech} className="text-[9px] px-2 py-0.5 rounded-md border border-editorial-black/10 dark:border-editorial-cream/10 bg-editorial-black/5 dark:bg-editorial-cream/5 font-black uppercase tracking-wider text-editorial-black/50 dark:text-editorial-cream/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Block 7: Footer */}
          <BentoCard className="col-span-12 lg:row-span-2">
            <div className="h-full flex flex-col md:flex-row md:items-center justify-between gap-6">
              <AnimatePresence mode="wait">
                <motion.div key={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue">{t.hubLabel}</p>
                  <p className="text-xl font-bold tracking-tight text-editorial-black dark:text-editorial-cream">Porto Alegre, BR</p>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-col md:flex-row md:items-center gap-6 lg:gap-12">
                <AnimatePresence mode="wait">
                  <motion.div key={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hidden lg:block text-right">
                    <h3 className="text-lg font-bold tracking-tight text-editorial-black dark:text-editorial-cream">{t.contactTitle}</h3>
                    <p className="text-xs font-medium text-editorial-black/50 dark:text-editorial-cream/50">{t.contactSub}</p>
                  </motion.div>
                </AnimatePresence>
                <motion.a
                  key={lang}
                  href="mailto:attrindade.dados@gmail.com"
                  className="px-8 py-3 rounded-xl bg-editorial-black text-editorial-cream dark:bg-editorial-cream dark:text-editorial-black text-sm font-black flex items-center gap-3 hover:bg-brand-blue hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg border border-white/10"
                >
                  {t.contactButton}
                  <Globe className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </main>
  );
}
