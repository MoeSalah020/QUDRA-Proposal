import React from 'react';
import { motion } from 'motion/react';
import { MapPin, CheckCircle2 } from 'lucide-react';

export default function Logistics() {
  return (
    <section className="py-16 px-8 md:px-12 bg-white rounded-[32px] border border-primary/5 shadow-sm print:break-inside-avoid print:shadow-none print:border-none print:my-4">
      <div className="mb-16">
        <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Event Logistics</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Venues & Facilities</h3>
        <p className="text-lg text-primary/80 max-w-2xl leading-relaxed">
          The QUDRA summit requires premium, highly-equipped academic spaces to accommodate intensive workshops, technical labs, and keynote addresses. We have mapped out a scalable venue plan.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary rounded" />
          <div className="pl-8">
            <h4 className="text-2xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
              <span className="bg-primary text-cream text-xs px-2 py-1 tracking-widest font-sans rounded-sm">DAY 1</span>
              Plenary & Foundational Sessions
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-ivory p-6 rounded-[24px] flex flex-col sm:flex-row items-start gap-4 border border-primary/10 relative shadow-sm"
              >
                <div className="absolute -top-3 -right-3 bg-primary text-white text-[9px] font-bold px-3 py-1 uppercase rounded-full shadow-sm tracking-wider">Selected</div>
                <MapPin className="text-secondary w-8 h-8 shrink-0 bg-cream p-1.5 rounded-full" />
                <div>
                  <h5 className="font-bold text-primary text-lg mb-1">Abo El-Naga Hall</h5>
                  <p className="text-xs text-secondary font-semibold uppercase tracking-wider mb-3">Faculty of Medicine</p>
                  <div className="flex items-center gap-2 mt-auto pt-3 border-t border-secondary/10 text-xs text-primary/80 leading-relaxed">
                    For groups of <strong>&lt; 280</strong> attendees
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-[24px] flex flex-col sm:flex-row items-start gap-4 border border-secondary/20 shadow-sm relative"
              >
                <MapPin className="text-secondary w-8 h-8 shrink-0 bg-cream p-1.5 rounded-full" />
                <div>
                  <h5 className="font-bold text-primary text-lg mb-1">Magdy Abo El-Rayan</h5>
                  <p className="text-xs text-secondary font-semibold uppercase tracking-wider mb-3">Faculty of Engineering</p>
                  <div className="flex items-center gap-2 mt-auto pt-3 border-t border-secondary/10 text-xs text-primary/80 leading-relaxed">
                    For groups <strong>up to 450</strong> attendees
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-[24px] flex flex-col sm:flex-row items-start gap-4 border border-secondary/20 shadow-sm relative"
              >
                <MapPin className="text-secondary w-8 h-8 shrink-0 bg-cream p-1.5 rounded-full" />
                <div>
                  <h5 className="font-bold text-primary text-lg mb-1">Mohie El-Din Awad</h5>
                  <p className="text-xs text-secondary font-semibold uppercase tracking-wider mb-3">Faculty of Commerce</p>
                  <div className="flex items-center gap-2 mt-auto pt-3 border-t border-secondary/10 text-xs text-primary/80 leading-relaxed">
                    Contingency for <strong>&gt; 450</strong> attendees
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="relative">
           <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded" />
           <div className="pl-8">
            <h4 className="text-2xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
               <span className="bg-primary text-cream text-xs px-2 py-1 tracking-widest font-sans rounded-sm">DAY 2</span>
               Clinical & Technical Workshops
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-[24px] flex flex-col sm:flex-row items-start gap-4 border border-secondary/20 shadow-sm relative"
              >
                <MapPin className="text-secondary w-8 h-8 shrink-0 bg-cream p-1.5 rounded-full" />
                <div>
                  <h5 className="font-bold text-primary text-lg mb-1">Manchester Program Halls</h5>
                  <p className="text-xs text-secondary font-semibold uppercase tracking-wider mb-3">Faculty of Medicine</p>
                  <div className="flex items-center gap-2 mt-auto pt-4 border-t border-secondary/10 text-xs font-semibold uppercase tracking-wider text-primary/70">
                    <CheckCircle2 className="w-4 h-4 text-secondary" /> Setup for clinical mastery
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-[24px] flex flex-col sm:flex-row items-start gap-4 border border-secondary/20 shadow-sm relative"
              >
                <MapPin className="text-secondary w-8 h-8 shrink-0 bg-cream p-1.5 rounded-full" />
                <div>
                  <h5 className="font-bold text-primary text-lg mb-1">Community Medicine Halls</h5>
                  <p className="text-xs text-secondary font-semibold uppercase tracking-wider mb-3">Faculty of Medicine</p>
                  <div className="flex items-center gap-2 mt-auto pt-4 border-t border-secondary/10 text-xs font-semibold uppercase tracking-wider text-primary/70">
                    <CheckCircle2 className="w-4 h-4 text-secondary" /> Optimized for interactive learning
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
