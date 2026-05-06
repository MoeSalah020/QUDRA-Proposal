import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Sparkles, GraduationCap } from 'lucide-react';

export default function Outcomes() {
  return (
    <section className="py-16 px-8 md:px-12 bg-secondary/10 rounded-[32px] border border-secondary/20 print:break-inside-avoid print:shadow-none print:border-none print:my-4 print:bg-secondary/10" style={{"WebkitPrintColorAdjust": "exact", "printColorAdjust": "exact"}}>
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2">
          <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">ROI for the University</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Expectations & Outcomes</h3>
          <p className="text-lg text-primary/80 mb-8 leading-relaxed">
            By hosting the QUDRA summit, Mansoura University reinforces its position as a beacon of international education, collaborative development, and cross-cultural empowerment.
          </p>
          <ul className="space-y-6">
            {[
              { text: "Equips 300+ students with certified technical and clinical skills." },
              { text: "Establishes QUDRA as the premier student-led interdisciplinary summit in Egypt." },
              { text: "Strengthens the voice of Sudanese and international students at Mansoura University." }
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-secondary shrink-0" />
                <span className="text-primary/90 font-medium leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="md:w-1/2 w-full grid grid-cols-1 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white p-8 rounded-[24px] shadow-sm"
          >
            <TrendingUp className="w-10 h-10 text-cream mb-4" />
            <h4 className="text-xl font-bold mb-3 text-cream">Elevated Reputation</h4>
            <p className="text-white/80 leading-relaxed text-sm">
              Showcases the university's commitment to nurturing proactive student unions, directly improving the perception of Mansoura University among current and prospective international students.
            </p>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-white text-primary p-8 rounded-[24px] shadow-sm border border-primary/5"
          >
            <GraduationCap className="w-10 h-10 text-secondary mb-4" />
            <h4 className="text-xl font-bold mb-3 text-primary">Academic Prestige</h4>
            <p className="text-primary/80 leading-relaxed text-sm">
              Fosters academic excellence by aligning student-led initiatives with faculty goals, highlighting the synergy between medical and engineering disciplines.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
