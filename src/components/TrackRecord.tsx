import React from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase, Star, CheckCircle } from 'lucide-react';

export default function TrackRecord() {
  return (
    <section className="py-16 px-8 md:px-12 bg-white rounded-[32px] border border-primary/5 shadow-sm text-primary print:break-inside-avoid print:shadow-none print:border-none print:my-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Our Journey</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">A Track Record of Excellence</h3>
        <p className="text-lg text-primary/80 leading-relaxed">
          The Sudanese Students Union has a history defined by precision, reliability, and an unwavering commitment to excellence. 
          Our intense preparation and hard work translate into high-impact events for our community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { icon: Star, title: "Great Partnerships", desc: "Collaborating with top-tier university departments and international organizations." },
          { icon: CheckCircle, title: "High-Quality Organizers", desc: "A dedicated team of student leaders consistently delivering professional-grade events." },
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-10 bg-cream rounded-[24px] shadow-sm border border-primary/10 text-center"
          >
            <item.icon className="w-12 h-12 text-secondary mb-5" />
            <h4 className="text-2xl font-serif font-bold text-primary mb-3">{item.title}</h4>
            <p className="text-sm text-primary/70 leading-relaxed max-w-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
