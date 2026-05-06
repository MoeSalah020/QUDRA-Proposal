import React from 'react';
import { motion } from 'motion/react';

const agenda = [
  {
    day: "Day 01",
    theme: "Foundations & Empowerment",
    events: [
      { time: "09:00", title: "Opening Ceremony", desc: "University Administration, International Affairs, and Sudanese Students Union Speeches." },
      { time: "11:00", title: "Post-Graduate Paths", desc: "Exploring funded masters and academic opportunities." },
      { time: "12:30", title: "Professional Identity", desc: "LinkedIn and Personal Branding Masterclass." },
      { time: "13:30", title: "Leadership & Wellbeing", desc: "Community Building, Public Speaking, and Mental Health sessions." },
      { time: "15:00", title: "Student Activities", desc: "Showcase by student activities and success partners." }
    ]
  },
  {
    day: "Day 02",
    theme: "Clinical Mastery & Technical Intelligence",
    events: [
      { time: "09:00", title: "Emergency & First Aid", desc: "Presented by the Egyptian Red Crescent." },
      { time: "11:00", title: "Mechanical Design (SolidWorks)", desc: "Presented by SWUGN Mansoura." },
      { time: "12:30", title: "Surgical Mastery", desc: "Introduction to surgery, suturing, and wound care." },
      { time: "14:00", title: "Psychological First Aid", desc: "Mental resilience in emergency environments." },
      { time: "15:00", title: "Systems Simulation (MATLAB)", desc: "Presented by MathWorks." },
      { time: "16:00", title: "Advanced Topics", desc: "Toxicology session & Programming/Robotics by IEEE Sudan." }
    ]
  },
  {
    day: "Day 03",
    theme: "Scientific Research & Closing",
    events: [
      { time: "09:00", title: "Systematic Scientific Research", desc: "Presented by Dawood Research Organization." },
      { time: "11:00", title: "Specialized Research Tracks", desc: "Simultaneous sessions for Dentistry, Medicine, and Pharmacy/Chemistry." },
      { time: "14:00", title: "Technical Reports Writing", desc: "Presented by IEEE Sudan." },
      { time: "15:30", title: "Closing Ceremony", desc: "Conclusion, certificates, and networking." }
    ]
  }
];

export default function Agenda() {
  return (
    <section className="py-16 px-8 md:px-12 bg-white rounded-[32px] border border-primary/5 shadow-sm print:break-inside-avoid print:shadow-none print:border-none print:my-4">
      <div className="mb-16">
        <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">Agenda & Timeline</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Summit Schedule</h3>
      </div>

      <div className="space-y-16">
        {agenda.map((dayPlan, i) => (
          <div key={i} className="relative">
            <h4 className="text-3xl font-serif font-bold text-primary mb-2">{dayPlan.day}</h4>
            <p className="text-secondary font-bold tracking-widest uppercase text-xs mb-8">{dayPlan.theme}</p>
            
            <div className="absolute left-[7px] top-[96px] bottom-0 w-px bg-secondary/30 hidden md:block"></div>
            
            <div className="space-y-8 md:pl-12">
              {dayPlan.events.map((event, j) => (
                <motion.div 
                  key={j}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: j * 0.05 }}
                  className="flex flex-col md:flex-row gap-2 md:gap-8 group relative"
                >
                  <div className="absolute -left-[54px] top-1.5 w-3 h-3 rounded-full bg-cream border-2 border-primary hidden md:block group-hover:bg-primary transition-all z-10"></div>
                  <div className="md:w-32 shrink-0">
                    <span className="text-[10px] font-bold text-secondary tracking-widest uppercase">{event.time} AM/PM</span>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-primary mb-1">{event.title}</h5>
                    <p className="text-primary/70 text-sm leading-relaxed">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
