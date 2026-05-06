import React from 'react';
import { motion } from 'motion/react';
import { HeartPulse, Wrench, Globe2, Stethoscope, Cpu, Tent } from 'lucide-react';
import ssuLogo from './Sudanese Students Union.png';
import ercLogo from './Egyptian Red Crescent.png';
import engineeringLogo from './Faculty of Engineering.png';
import isaLogo from './Intl. Student Affairs.png';
import swugnLogo from './Mansoura SWUGN.png';
import ieeeLogo from './IEEE Student Branch.webp';
import mathworksLogo from './Mathworks.png';

export default function Partnerships() {
  const partners = [
    { name: "Egyptian Red Crescent", img: ercLogo, icon: HeartPulse },
    { name: "Faculty of Engineering", img: engineeringLogo, icon: Wrench },
    { name: "Intl. Student Affairs", img: isaLogo, icon: Globe2 },
    { name: "Mansoura SWUGN", img: swugnLogo, icon: Stethoscope },
    { name: "IEEE Student Branch", img: ieeeLogo, icon: Cpu },
    { name: "Mathworks", img: mathworksLogo, icon: Tent },
  ];

  return (
    <section className="py-16 px-8 md:px-12 bg-primary text-white rounded-[32px] shadow-sm print:break-inside-avoid print:shadow-none print:border-none print:my-4 print:bg-primary print:text-white" style={{"WebkitPrintColorAdjust": "exact", "printColorAdjust": "exact"}}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Strategic Collaborations</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Partners in Success</h3>
        <p className="text-lg text-cream/80">
          We maintain direct channels with academic deans and industry professionals to facilitate high-impact workshops and collaborations.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {/* Main Organizer (SSU.MU) prominently displayed */}
        <div className="flex justify-center mb-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center p-8 bg-white text-primary rounded-[32px] shadow-lg max-w-sm w-full border-b-4 border-secondary group relative overflow-hidden"
          >
            {/* Real Logo Container */}
            <div className="relative mb-6 text-primary flex justify-center group-hover:scale-105 transition-transform duration-500 w-32 h-32">
              <img 
                src={ssuLogo} 
                alt="SSU.MU Logo" 
                className="w-full h-full object-contain relative z-10"
              />
            </div>
            
            <h4 className="text-lg font-bold text-center tracking-wide uppercase">Sudanese Students Union</h4>
            <p className="text-xs text-primary/60 uppercase tracking-widest mt-1 font-semibold">Mansoura University</p>
            <div className="mt-4 px-4 py-1 text-[10px] bg-secondary/10 text-secondary font-bold rounded-full uppercase tracking-widest border border-secondary/20">
              Main Organizer
            </div>
          </motion.div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {partners.map((partner, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 rounded-[24px] border border-white/10 p-6 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors group relative overflow-hidden"
            >
              {/* Partner Logo Container */}
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 text-primary relative overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-300 p-2">
                <partner.icon className="w-8 h-8 opacity-10 absolute" strokeWidth={1.5} />
                <img 
                  src={partner.img} 
                  alt={partner.name} 
                  className="w-full h-full object-contain relative z-10 transition-opacity duration-300"
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                />
              </div>
              <h4 className="font-bold text-sm text-cream max-w-[150px]">{partner.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
