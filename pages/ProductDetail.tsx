import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  return (
    <div className="bg-[#fcfcfc] dark:bg-[#1a1a1a] text-[#0f1a17] dark:text-gray-100 font-sans antialiased min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full bg-[#fcfcfc]/95 backdrop-blur-md border-b border-[#e8f2f0] dark:bg-[#1a1a1a]/95 dark:border-gray-800">
         <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
               <Link to="/" className="flex items-center gap-2">
                  <div className="text-[#0f4d3f]"><span className="material-symbols-outlined text-3xl">sailing</span></div>
                  <h2 className="text-[#0f4d3f] text-xl font-display font-bold tracking-tight">Vietmate</h2>
               </Link>
               <nav className="hidden md:flex items-center gap-8">
                  <a className="text-[#0f1a17] hover:text-[#0f4d3f] text-sm font-medium transition-colors" href="#">Destinations</a>
                  <a className="text-[#0f1a17] hover:text-[#0f4d3f] text-sm font-medium transition-colors" href="#">Tours</a>
               </nav>
               <button className="bg-[#0f4d3f] hover:bg-[#0a362c] text-white px-5 py-2 rounded-lg text-sm font-bold shadow-sm transition-all">Sign In</button>
            </div>
         </div>
      </header>

      <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
         <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="flex-1">
               <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#0f4d3f]/10 text-[#0f4d3f] uppercase tracking-wide">Best Seller</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                     <span className="material-symbols-outlined text-[14px]">star</span> 4.9 (128 reviews)
                  </span>
               </div>
               <h1 className="text-4xl md:text-5xl font-display font-black text-[#0f1a17] dark:text-white tracking-tight leading-tight">Ha Long Bay Luxury Cruise</h1>
               <p className="mt-2 text-lg text-[#5e6d69] font-display italic">2 Days, 1 Night • Luxury Class • Lan Ha Bay Route</p>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-3 h-[400px] md:h-[500px] mb-12 rounded-2xl overflow-hidden">
            <div className="md:col-span-3 h-full relative group">
               <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDi-OY6B5J8y2h-XEul2XBoByqyx2yDh1rcinD03tIKid1jNqwAlsUxj6iGYh8HXOTyI-_z0vNtcxJE-UYgeoaqSLZso99JuWL9uUfKsR2A8ue1MpWqNP3Fbgezpk8Rkwu-v-K6CVQEgFawk8zTwUmCI0_0EzfddIAXuup45nxeSyE2yPlB8JFooutfmHxbG7JbxObuCkWJ_Zdvu_45vot1dmnMjf4saYVmTKqmLe2nfVJFuoqEbULqP042x5U3CbqMwuWPgUAkPd0')" }}></div>
            </div>
            <div className="hidden md:flex flex-col gap-3 h-full">
               <div className="flex-1 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB648cPVltPidQTMey42ZvTYoB-WMXDkw4Xn2vRDlOR3z15PZKyBGJOhScai1ylqg0ZZvteNEUpduv9NVCxobUyCyqs9e9L9f0uBRGZMQp9kZgHYjGFSHxK39Vl3jcsVMrIXTkGUte-hTOtw6Veiv-6eHXFhYNOaUNslArA6OC0_fRs_EToL40NR4nXDfGVPSas8DYgq6PJymvumlA0y3UhPy706o54jB3pCrA3rbBSAx9LdYbETFsBV5Hi7KnpgC8VuE9_IogXtII')" }}></div>
               </div>
               <div className="flex-1 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGNaz0U-n3F_uZAkzyVqYsz-QQ7Ebnfj28n4KGD89qtamPwKWHCNPHUQXDwYafVu35YMFJTyOGW0WoFsskveRT20pSo2wIlVfe6kapNtUzu2M1KcjozsNpdJR3uTpCTKrGmeHqeV3diru7xYQRoPd9nFmfJKUwS43jWH3NruGVAdMw7DZHQvsHLYci0GCdR8YcCA-47YeZ6MX8u7ucLkQpkZj9mn9KYgTdfMlyza05hx-evbt0cjOCMz7vZpS7F-ILIPr067bxNiI')" }}></div>
               </div>
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            <div className="lg:col-span-2 flex flex-col gap-12">
               <section>
                  <h3 className="text-2xl font-display font-bold text-[#0f1a17] dark:text-white mb-4">Experience the Legend</h3>
                  <div className="prose prose-lg text-[#5e6d69] font-light leading-relaxed max-w-none">
                     <p className="mb-4">Immerse yourself in the ethereal beauty of Ha Long Bay aboard our premier luxury cruise. Designed for travelers who seek serenity and style, this journey takes you off the beaten path into the pristine waters of Lan Ha Bay.</p>
                  </div>
               </section>
            </div>

            <div className="lg:col-span-1 relative">
               <div className="sticky top-24 z-30">
                  <div className="bg-white dark:bg-[#262626] rounded-2xl shadow-lg border border-[#e8f2f0] overflow-hidden">
                     <div className="bg-[#0f4d3f] p-6 text-white relative overflow-hidden">
                        <p className="text-sm opacity-90 font-medium">Starting from</p>
                        <div className="flex items-end gap-1 mt-1"><span className="text-3xl font-display font-bold">$199</span><span className="mb-1 text-sm opacity-80">/ person</span></div>
                     </div>
                     <div className="p-6 space-y-6">
                        <Link to="/checkout" className="w-full bg-[#0f4d3f] hover:bg-[#0a362c] text-white font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                           <span>Book Now</span>
                           <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </main>
    </div>
  );
};

export default ProductDetail;