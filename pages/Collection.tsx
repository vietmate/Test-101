import React from 'react';
import { Link } from 'react-router-dom';

const Collection: React.FC = () => {
  return (
    <div className="text-[#1f473a] antialiased bg-[#FBF9F5] font-sans">
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#FBF9F5]/90 border-b border-[#eaf0ee]/50 transition-all duration-300">
         <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 text-[#1f473a] cursor-pointer hover:opacity-80 transition-opacity">
               <span className="material-symbols-outlined text-2xl">temple_buddhist</span>
               <h2 className="text-2xl font-bold tracking-tight font-display">Vietmate</h2>
            </Link>
            <nav className="hidden md:flex items-center gap-10">
               <a className="text-[#1f473a] text-sm font-medium tracking-wide hover:text-[#CC9933] transition-colors uppercase" href="#">Destinations</a>
               <a className="text-[#1f473a] text-sm font-medium tracking-wide hover:text-[#CC9933] transition-colors uppercase" href="#">Collections</a>
            </nav>
            <button className="hidden md:flex items-center justify-center rounded-lg h-10 px-6 bg-[#1f473a] text-[#f9fbfa] text-sm font-bold tracking-wide hover:bg-[#1f473a]/90 transition-colors shadow-sm">Book Consultation</button>
         </div>
      </header>

      <main className="flex flex-col w-full">
         <section className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0al6--zCVUw3r_yM4MYWEgO07eVewhky1kPY2jGi61m3Tq0VgTIQoWn_12S-c19qy6fEEVOZEAszgkk1_Q8aIOQm--LgfEiN5Wc_3xFo3g35cjW212YBb5ystM7XQSSfjwr86tRGDYVqKQ5TfQ-Q9C79V7RsPrrxL0bbZFO6NYFyukLmfnsJmlZMPksSl-ZfXmL1VYVbUQ9659dSmzOHiKPAuOoTGm_8wQs7DEADaNhLMnnFaA4CibV21OvFCdb4UprzJAmqozV0" className="w-full h-full object-cover" alt="Hero" />
               <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#FBF9F5]"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto space-y-6">
               <span className="text-white/90 text-sm md:text-base font-medium tracking-[0.2em] uppercase border-b border-white/30 pb-2">Est. 2024</span>
               <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-tight tracking-tight shadow-sm">The Vietmate <br/><i className="font-serif italic text-white/90">Collection</i></h1>
               <p className="text-white/90 text-lg md:text-xl max-w-2xl font-light leading-relaxed font-display">Artfully crafted journeys. Discover a side of Vietnam reserved for the few, where luxury meets the whispers of history.</p>
               <div className="pt-8">
                  <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white/10 backdrop-blur-sm border border-white/40 px-8 py-4 transition-all hover:bg-white hover:text-[#1f473a]">
                     <span className="text-sm font-bold tracking-widest uppercase text-white group-hover:text-[#1f473a] transition-colors">Begin Exploration</span>
                  </button>
               </div>
            </div>
         </section>

         <section className="flex flex-col w-full py-20 lg:py-32">
            <div className="w-full px-6 lg:px-12 mb-16 relative">
               <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden group shadow-xl">
                     <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl2rSPu-YASaXvFQXjOGLFbh8YdF6PaFUjrRiemcmAarPyr2HUnwEzVoxzQL8lQE5qe7YzRMnfiUZk_vGcUNPCO3J8y3VKoTrwzxZlVzkua60CCRbDDC-VrXTx_BxXdloVk-KSlqiWJqtNfKlGNSYwAXzQC7rD2ktizjDcjryucHNGzDFts768dfuF3XtpsORiqJjFODpwTBKwccRHAiNxUDZxfbLYBUxHp-pqvveabAEk9-Z6XSay6BDaEktnsanZVFtGe8p8hN8" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" alt="Hue" />
                  </div>
                  <div className="flex flex-col justify-center space-y-6 lg:pl-12">
                     <div className="flex items-center gap-4"><span className="h-[1px] w-12 bg-[#CC9933]"></span><span className="text-[#CC9933] uppercase tracking-widest text-sm font-bold">Chapter I</span></div>
                     <h2 className="text-5xl md:text-6xl text-[#1f473a] font-display font-medium leading-[1.1]">Ancestral <br/>Heritage</h2>
                     <p className="text-[#1f473a]/70 text-lg leading-relaxed font-body max-w-md">Walk the paths of emperors and listen to the whispers of the past. From the citadel of Hue to the hidden temples of the north.</p>
                  </div>
               </div>
            </div>
         </section>
      </main>
      
      <footer className="bg-[#1f473a] pt-16 pb-8 border-t border-[#f9fbfa]/10 text-white">
         <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
             <p>© 2024 Vietmate Travel. All rights reserved.</p>
         </div>
      </footer>
    </div>
  );
};

export default Collection;