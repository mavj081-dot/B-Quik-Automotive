import React from 'react';
import { GridItem } from '../types';

interface BentoGridProps {
  items: GridItem[];
}

export const BentoGrid: React.FC<BentoGridProps> = ({ items }) => {
  return (
    <div id="bento" className="w-full py-24 px-6 bg-brand-dark relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
             <h3 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">Our Capabilities</h3>
             <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Professional <br/> <span className="text-gray-500">Workshop Services</span>
             </h2>
           </div>
           <p className="text-gray-400 max-w-sm mt-4 md:mt-0 text-sm">
             Equipped with the latest diagnostic tools and staffed by certified professionals to keep your engine running like new.
           </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[220px]">
          {/* Main Feature - Large */}
          <div className="md:col-span-2 md:row-span-2 bg-gray-900 rounded-3xl p-8 relative overflow-hidden group border border-gray-800 hover:border-brand-orange/50 transition-all duration-500">
            <div className="absolute inset-0 z-0">
               <img src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop" alt="Workshop" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 ease-out" />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-2 font-display">Engine Diagnostics</h4>
                <p className="text-gray-300">Using advanced OBD-II scanners to pinpoint issues with precision.</p>
              </div>
            </div>
          </div>

          {/* Secondary Feature - Vertical */}
          <div className="md:col-span-1 md:row-span-2 bg-brand-navy rounded-3xl p-6 relative overflow-hidden group hover:bg-brand-orange transition-colors duration-500">
             <div className="absolute top-0 right-0 p-32 bg-white opacity-5 rounded-full transform translate-x-10 -translate-y-10"></div>
             <div className="relative z-10 h-full flex flex-col">
              <div className="mt-auto">
                <h4 className="text-2xl font-bold text-white mb-2 font-display">Routine Service</h4>
                <ul className="space-y-2 text-sm text-white/70 group-hover:text-white/90">
                  <li className="flex items-center gap-2">✓ Oil Change</li>
                  <li className="flex items-center gap-2">✓ Filter Replacement</li>
                  <li className="flex items-center gap-2">✓ Fluid Top-up</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stat Block */}
          <div className="md:col-span-1 md:row-span-1 bg-gray-800 rounded-3xl p-6 flex flex-col justify-center items-center text-center border border-gray-700">
            <h4 className="text-5xl font-bold text-brand-orange mb-1 font-display">100%</h4>
            <span className="text-xs uppercase tracking-widest text-gray-400">Customer Satisfaction</span>
          </div>
          
           {/* Quick Service */}
           <div className="md:col-span-1 md:row-span-1 bg-gray-800 rounded-3xl p-6 flex flex-col justify-center border border-gray-700 hover:border-brand-orange transition-colors">
            <h4 className="text-xl font-bold text-white mb-1 font-display">Quick Repairs</h4>
            <p className="text-xs text-gray-400">Brake pads, batteries, and minor fixes done while you wait.</p>
          </div>

          {/* Wide Feature - Bottom */}
          <div className="md:col-span-2 md:row-span-1 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-6 relative overflow-hidden flex items-center group">
             <img src="https://images.unsplash.com/photo-1578844251758-2f71da64522f?q=80&w=1000&auto=format&fit=crop" className="absolute right-0 top-0 h-full w-2/3 object-cover opacity-20 mask-image-linear" alt="Tires" />
             <div className="relative z-10">
                 <h4 className="text-2xl font-bold text-white font-display">Wheel & Tire Center</h4>
                 <p className="text-brand-orange text-sm">Precision 3D Alignment & Balancing</p>
             </div>
          </div>

           {/* Call to Action Block */}
           <div className="md:col-span-2 md:row-span-1 bg-brand-orange rounded-3xl p-6 relative overflow-hidden flex items-center justify-between text-white group cursor-pointer hover:bg-white hover:text-brand-orange transition-colors">
              <div>
                  <h4 className="text-2xl font-bold uppercase font-display">Emergency?</h4>
                  <p className="text-sm font-bold opacity-90">Get immediate roadside assistance.</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-brand-orange/20 group-hover:text-brand-orange">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};