import React from 'react';
import { motion } from 'motion/react';

export default function CoverPage() {
  return (
    <section className="min-h-[70vh] bg-white rounded-[32px] border border-primary/5 shadow-sm relative flex flex-col justify-center p-8 md:p-16 overflow-hidden print:min-h-[90vh] print:break-after-page print:border-none print:shadow-none print:rounded-none">
      {/* Decorative large text */}
      <div className="absolute -top-10 -right-10 opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[20rem] font-serif font-bold text-primary whitespace-nowrap">QUDRA</h1>
      </div>
      
      <div className="relative z-10 max-w-3xl border-l-[6px] border-primary pl-8 py-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-secondary font-medium tracking-[0.2em] uppercase mb-4 text-xs"
        >
          Event Proposal &bull; Mansoura University
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-7xl md:text-8xl font-serif text-primary font-bold mb-6 tracking-tight leading-none"
        >
          QUDRA
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl text-secondary font-serif italic mb-12"
        >
          Empowering the next generation of global leaders
        </motion.p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-16 text-primary">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-secondary text-xs font-bold tracking-widest uppercase mb-2">Presented By</h3>
            <p className="font-bold text-lg">Sudanese Students Union</p>
            <p className="text-sm text-primary/70">Mansoura University</p>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
          >
            <h3 className="text-secondary text-xs font-bold tracking-widest uppercase mb-2">Presented To</h3>
            <p className="font-bold text-lg">Intl. Student Affairs</p>
            <p className="text-sm text-primary/70">Mansoura University</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
