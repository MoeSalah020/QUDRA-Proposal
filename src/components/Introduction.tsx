import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, BookOpen, Globe } from 'lucide-react';

const pillars = [
  { icon: Target, title: "Skill Development", desc: "Equipping participants with practical, real-world skills that bridge the gap between academia and the modern workplace." },
  { icon: Users, title: "Student Empowerment", desc: "Empowering tomorrow's leaders to take initiative, manage projects, and solve complex problems with resilience." },
  { icon: Globe, title: "Cultural Integration", desc: "Fostering deeply rooted connections between international students and the local academic community." },
  { icon: BookOpen, title: "Academic Excellence", desc: "Highlighting interdisciplinary research, medical advancements, and robust engineering methodologies." },
];

export default function Introduction() {
  return (
    <section className="py-16 px-8 md:px-12 bg-ivory rounded-[32px] border border-primary/10 text-primary print:break-inside-avoid print:shadow-none print:border-none print:my-4 print:bg-ivory" style={{"WebkitPrintColorAdjust": "exact", "printColorAdjust": "exact"}}>
      <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
        <div className="md:w-1/2">
          <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">The Core Motive</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            Why <span className="text-secondary italic">QUDRA</span>?
          </h3>
          <p className="text-lg text-primary/80 mb-6 leading-relaxed">
            QUDRA — an acronym for the Quorum of Unified Development, Research, and Action — is a groundbreaking three-day summit that marks a historic shift at Mansoura University.
          </p>
          <p className="text-lg text-primary/80 leading-relaxed">
            We are no longer just tearing down the walls between fields; we are building a new foundation for the modern professional. QUDRA exists to instill a leadership mindset and technical authority, driving student empowerment and strengthening the invaluable bond between international students and the university.
          </p>
        </div>
        
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-[24px] shadow-sm border border-primary/5"
            >
              <pillar.icon className="w-8 h-8 text-secondary mb-4" />
              <h4 className="font-bold text-lg mb-2">{pillar.title}</h4>
              <p className="text-sm text-primary/70 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
