import React, { useEffect, useState, useCallback } from 'react';
import { Hero3D } from './components/Hero3D';
import { BentoGrid } from './components/BentoGrid';
import { ContactSection } from './components/ContactSection';
import { fetchBusinessDetails } from './services/geminiService';
import { BusinessData, LoadingState } from './types';

const App: React.FC = () => {
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const loadData = useCallback(async () => {
    setStatus(LoadingState.LOADING);
    try {
      const data = await fetchBusinessDetails();
      setBusinessData(data);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      console.error("Failed to load business info", error);
      setStatus(LoadingState.ERROR);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-accent selection:text-black">
      {/* Navigation (Simple Overlay) */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference">
        <div className="font-display text-2xl font-bold tracking-tighter italic">B-QUIK</div>
        <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest">
           <a href="#" className="hover:text-brand-accent transition-colors">Home</a>
           <a href="#bento" className="hover:text-brand-accent transition-colors">Services</a>
           <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero3D />

      {/* Bento Grid Section */}
      <BentoGrid items={[]} />

      {/* Contact & Map Data Section */}
      <div id="contact">
        <ContactSection 
          data={businessData} 
          status={status} 
          onRefresh={loadData} 
        />
      </div>

      {/* API Key Warning (Development Helper) */}
      {!process.env.API_KEY && (
        <div className="fixed bottom-4 right-4 bg-red-900/80 p-4 rounded-lg text-xs max-w-sm z-[100] border border-red-500">
          <strong>System Alert:</strong> API_KEY is missing. 
          The Gemini functionality (Maps data) will fail. 
          Please ensure process.env.API_KEY is available.
        </div>
      )}
    </div>
  );
};

export default App;