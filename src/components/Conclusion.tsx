import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Conclusion() {
  return (
    <section className="py-12 px-8 md:px-12 text-center text-primary print:break-inside-avoid print:my-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Together, we build the leaders of tomorrow.
        </h2>
        
        <p className="text-base text-primary/80 mb-10 leading-relaxed">
          The Sudanese Students Union deeply appreciates the continued guidance, support, and vision of the <strong>Department of International Student Affairs at Mansoura University</strong>. We look forward to executing a flawless event that brings honor to our university and value to our peers.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-widest mb-10">
          <div className="px-6 py-3 border border-secondary/30 rounded-full text-secondary flex items-center gap-2"><Mail className="w-4 h-4" /> mu_sudanese@example.com</div>
          <div className="px-6 py-3 border border-secondary/30 rounded-full text-secondary flex items-center gap-2"><Phone className="w-4 h-4" /> +20 10 3467 8519</div>
          <div className="px-6 py-3 border border-secondary/30 rounded-full text-secondary flex items-center gap-2"><Phone className="w-4 h-4" /> +249 123 7288 32</div>
        </div>
        
        <div className="pt-6 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-secondary text-[10px] font-bold tracking-wider uppercase">
          <div>A formal submission from the Sudanese Students Union</div>
          <div>Mansoura University &copy; 2026</div>
        </div>
      </div>
    </section>
  );
}
