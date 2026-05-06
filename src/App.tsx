import React from 'react';
import CoverPage from './components/CoverPage';
import Introduction from './components/Introduction';
import TrackRecord from './components/TrackRecord';
import Partnerships from './components/Partnerships';
import Logistics from './components/Logistics';
import Agenda from './components/Agenda';
import Outcomes from './components/Outcomes';
import Conclusion from './components/Conclusion';
import { Download } from 'lucide-react';

export default function App() {
  return (
    <main className="min-h-screen bg-cream w-full overflow-hidden flex flex-col items-center p-4 md:p-12 py-12 print:p-0 print:bg-white relative">
      <div className="absolute top-4 right-4 z-50 print:hidden">
        <button 
          onClick={() => window.print()} 
          className="bg-primary text-white px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg hover:bg-primary/90 flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
        >
          <Download size={16} /> Export PDF
        </button>
      </div>

      <div className="max-w-5xl w-full flex flex-col gap-6 relative print:gap-0 print:max-w-none">
        <CoverPage />
        <Introduction />
        <TrackRecord />
        <Partnerships />
        <Logistics />
        <Agenda />
        <Outcomes />
        <Conclusion />
      </div>
    </main>
  );
}
