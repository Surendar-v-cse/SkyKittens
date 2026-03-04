import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plane, Heart, Shield, Wind, PawPrint, ChevronRight, X, Zap, Target, Navigation, ArrowLeft } from 'lucide-react';
import { JETS, FighterJet } from './data';

// Meow sound URL
const MEOW_SOUND_URL = "https://www.soundjay.com/animal/sounds/cat-meow-1.mp3";

const MeowDar = () => {
  return (
    <div className="relative w-48 h-48 rounded-full border-2 border-night-vision/30 flex items-center justify-center overflow-hidden bg-black/20">
      <div className="absolute inset-0 border border-night-vision/10 rounded-full scale-75" />
      <div className="absolute inset-0 border border-night-vision/10 rounded-full scale-50" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 origin-center"
      >
        <div className="w-1/2 h-full radar-line opacity-50" />
      </motion.div>
      <div className="relative z-10 flex flex-col items-center">
        <Target size={24} className="text-night-vision animate-pulse" />
        <span className="text-[8px] font-mono text-night-vision mt-1 uppercase tracking-widest">Meow-dar Active</span>
      </div>
      {/* Blips */}
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        className="absolute top-10 left-12 w-2 h-2 bg-night-vision rounded-full shadow-[0_0_8px_var(--color-night-vision)]"
      />
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
        className="absolute bottom-14 right-10 w-2 h-2 bg-pink-400 rounded-full shadow-[0_0_8px_#ff007f]"
      />
    </div>
  );
};

const JetCard = ({ jet, onClick, onMeow }: { jet: FighterJet; onClick: () => void; onMeow: () => void; key?: string }) => {
  return (
    <motion.div
      layoutId={jet.id}
      whileHover={{ scale: 1.01 }}
      className="glass-card w-full rounded-[3rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col lg:flex-row h-auto lg:h-[500px]"
      onClick={() => { onMeow(); onClick(); }}
    >
      <div className="relative w-full lg:w-3/5 h-80 lg:h-full overflow-hidden">
        <img
          src={jet.imageUrl}
          alt={jet.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-8 left-8 bg-white/90 px-4 py-1.5 rounded-full text-[10px] font-black flex items-center gap-1.5 uppercase tracking-tighter shadow-sm">
          <PawPrint size={14} className="text-pink-500" />
          {jet.origin}
        </div>
      </div>
      <div className="p-10 lg:p-14 flex-1 flex flex-col justify-center">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Zap key={i} size={20} className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
            ))}
          </div>
          <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Mach {jet.maxSpeed.split(' ')[1]}</span>
        </div>
        <h3 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight leading-none">{jet.name}</h3>
        <p className="text-lg text-gray-500 mb-8 leading-relaxed line-clamp-3">
          {jet.description}
        </p>
        <div className="mt-auto">
          <button className="inline-flex items-center gap-2 text-pink-500 font-black text-lg uppercase tracking-widest hover:gap-4 transition-all">
            View Flight Specs <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const JetModal = ({ jet, onClose }: { jet: FighterJet; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
      <motion.div
        layoutId={jet.id}
        className="bg-white dark:bg-night-bg rounded-[3rem] max-w-4xl w-full overflow-hidden shadow-2xl relative border border-white/20"
      >
        <button
          onClick={onClose}
          className="absolute top-8 left-8 z-10 p-3 bg-white/80 dark:bg-night-bg/80 rounded-full hover:bg-pink-50 dark:hover:bg-night-accent/20 transition-colors shadow-lg flex items-center gap-2 pr-5"
        >
          <ArrowLeft size={24} />
          <span className="text-sm font-black uppercase tracking-widest">Back</span>
        </button>

        <div className="grid lg:grid-cols-2 h-full">
          <div className="h-80 lg:h-full relative">
            <img
              src={jet.imageUrl}
              alt={jet.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          </div>
          <div className="p-10 lg:p-14 overflow-y-auto max-h-[80vh] lg:max-h-none">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-sky-blue text-blue-600 dark:bg-blue-900/40 dark:text-blue-300 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                {jet.origin}
              </span>
              <span className="bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-300 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                Stealth Class
              </span>
            </div>
            <h2 className="text-4xl font-black mb-6 tracking-tight leading-none">{jet.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-lg">
              {jet.description}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="p-5 rounded-3xl bg-sky-blue/30 dark:bg-blue-900/20 border border-sky-blue/50">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-300 uppercase tracking-widest mb-2">
                  <Zap size={14} /> Max Speed
                </div>
                <div className="text-xl font-black">{jet.maxSpeed}</div>
              </div>
              <div className="p-5 rounded-3xl bg-pink-100/30 dark:bg-pink-900/20 border border-pink-100/50">
                <div className="flex items-center gap-2 text-xs font-bold text-pink-600 dark:text-pink-300 uppercase tracking-widest mb-2">
                  <Navigation size={14} /> Range
                </div>
                <div className="text-xl font-black">{jet.range}</div>
              </div>
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest">
                  <Wind size={18} className="text-blue-400" /> Meow-Power
                </div>
                <div className="w-48 h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${jet.meowPower}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-pink-400 to-pink-600"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest">
                  <Shield size={18} className="text-green-400" /> Fluffiness
                </div>
                <span className="text-sm font-black text-gray-900 dark:text-white">{jet.fluffiness}</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-light-yellow/30 dark:bg-yellow-900/10 border border-light-yellow/50 mb-10">
              <div className="text-xs font-bold text-yellow-600 dark:text-yellow-300 uppercase tracking-widest mb-3">Armament Systems</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 italic">"{jet.armament}"</div>
            </div>

            <button className="w-full py-5 bg-pink-500 text-white rounded-[1.5rem] font-black text-lg hover:bg-pink-600 transition-all shadow-xl shadow-pink-200 dark:shadow-none flex items-center justify-center gap-3 active:scale-95">
              <Plane size={24} /> Deploy for Cuddles
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [selectedJet, setSelectedJet] = useState<FighterJet | null>(null);
  const [isNightMission, setIsNightMission] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(MEOW_SOUND_URL);
  }, []);

  const playMeow = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log("Audio play failed", e));
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ${isNightMission ? 'night-mission' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-8 py-6 flex justify-between items-center backdrop-blur-md bg-white/10">
        <div className="flex items-center gap-2 font-black text-xl tracking-tighter">
          <PawPrint className="text-pink-500" /> SKYKITTENS
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 bg-pink-100 dark:bg-night-accent/20 px-5 py-2 rounded-full text-pink-600 dark:text-night-accent font-black text-xs mb-8 uppercase tracking-widest"
          >
            <Zap size={14} /> Global Feline Defense
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
            The <span className="text-pink-500">Meow-litary</span> <br />
            <span className="text-blue-400">Air Force</span>
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-xl mb-10 leading-relaxed">
            Where supersonic speed meets extreme fluffiness. Explore the world's premier kitten-ified aircraft, now with real-world specs and custom cat-ears.
          </p>
        </div>
        <div className="flex-shrink-0">
          <MeowDar />
        </div>
      </section>

      {/* Vertical Fleet List */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-black tracking-tight mb-4 uppercase">Active Fleet</h2>
          <p className="text-gray-400 text-xl font-medium">Vertical inspection of the world's premier aircraft</p>
        </div>
        
        <div className="flex flex-col gap-12">
          {JETS.map((jet) => (
            <JetCard 
              key={jet.id} 
              jet={jet} 
              onClick={() => setSelectedJet(jet)} 
              onMeow={playMeow}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedJet && (
          <JetModal jet={selectedJet} onClose={() => setSelectedJet(null)} />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-20 border-t border-gray-100 dark:border-gray-800 text-center">
        <div className="flex justify-center gap-8 mb-8 opacity-30 grayscale">
          <Plane size={32} />
          <PawPrint size={32} />
          <Shield size={32} />
        </div>
        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">
          © 2024 SkyKittens Global Defense. Purr-fectly secure.
        </p>
      </footer>
    </div>
  );
}
