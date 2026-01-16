import React from 'react';
import { Link } from 'react-router-dom';

const TailorMade: React.FC = () => {
  return (
    <div className="bg-[#f5f8f7] dark:bg-[#10221c] min-h-screen flex flex-col font-display text-[#0d1c17] dark:text-gray-100 overflow-x-hidden">
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#1a332d]/90 backdrop-blur-md border-b border-[#e7f4ef] dark:border-gray-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
               <Link to="/" className="flex items-center gap-3">
                  <div className="size-8 text-[#09aa74] bg-[#09aa74]/10 rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-[24px]">travel_explore</span></div>
                  <h2 className="text-xl font-extrabold tracking-tight">Vietmate</h2>
               </Link>
            </div>
         </div>
      </header>
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 flex flex-col gap-10">
               <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-[#0d1c17] dark:text-white leading-[1.1] tracking-tight">Design your perfect <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#09aa74] to-emerald-600">Vietnam Experience</span></h1>
               </div>
               
               <div className="bg-white dark:bg-[#1a332d] rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-800 relative group transition-all">
                  <div className="absolute -left-3 top-8 hidden xl:flex items-center justify-center w-10 h-10 rounded-full bg-[#09aa74] text-white font-bold shadow-lg z-10">1</div>
                  <div className="flex flex-col gap-6">
                     <h3 className="text-xl font-bold">Where do you want to go?</h3>
                     <div className="grid md:grid-cols-2 gap-6 h-full min-h-[400px]">
                        <div className="flex flex-col gap-3">
                           <label className="cursor-pointer group/card">
                              <input type="checkbox" className="peer sr-only" defaultChecked />
                              <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-transparent bg-[#f5f8f7] dark:bg-[#10221c] peer-checked:border-[#09aa74]/50 peer-checked:bg-[#09aa74]/5 transition-all">
                                 <div className="w-16 h-16 rounded-lg bg-gray-200 overflow-hidden flex-shrink-0"><img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUH6UXJGNvENqc6ydivgxcZWeby993pQvGumPyuRZ8I2_Z5juyE8k0ptuF6bbLdxaShIhwPEYVSZwCWX7sal79ZZFX4Yo_AIizi0O_JbIaiVdyyOcRiARtyXpSTVarOSnPUKCU4C0MWhV9GfkRzj1oVSBPQVV6l8rKCH4vaA7TzGU5VBPb8ZLpUT_o_BLNewXpMRZURD1fmyFTEmh5hY0ZaaSpUO2yaPNA1hJZcxMZrt01eZK8mQXyYYDORwUa6CgA-IOPOBibnGw" alt="North" /></div>
                                 <div className="flex-1"><span className="font-bold">Northern Vietnam</span></div>
                              </div>
                           </label>
                           <label className="cursor-pointer group/card">
                              <input type="checkbox" className="peer sr-only" />
                              <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-transparent bg-[#f5f8f7] dark:bg-[#10221c] peer-checked:border-[#09aa74]/50 peer-checked:bg-[#09aa74]/5 transition-all">
                                 <div className="w-16 h-16 rounded-lg bg-gray-200 overflow-hidden flex-shrink-0"><img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXRYVnpanEZaWOiI-kbejB2NVbNA2rLtyYA8206u8g2upqcB3DmYkYS1k_l35548W3zZto8q8lLxJ2H_ug7P5LjNA4OlRotxiCEFl6VhsRhO1d4eHMu0xOfa2XuhgE-WgIGv0VBJxN9ISyu6xJ6RE-KF_hA4YMM2EP9wyNfcOkHHxkIgcPtRcDRo71nevqBxH4kF7LH2qoQQ6c3ExFv67-K1CAlzuYX4Xvw4wlOr-5eIp-Cnxspqrr8B9A7VcaUgrHEe6wdYfxnI8" alt="Central" /></div>
                                 <div className="flex-1"><span className="font-bold">Central Vietnam</span></div>
                              </div>
                           </label>
                           <label className="cursor-pointer group/card">
                              <input type="checkbox" className="peer sr-only" />
                              <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-transparent bg-[#f5f8f7] dark:bg-[#10221c] peer-checked:border-[#09aa74]/50 peer-checked:bg-[#09aa74]/5 transition-all">
                                 <div className="w-16 h-16 rounded-lg bg-gray-200 overflow-hidden flex-shrink-0"><img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcuPDncM2ftf609MWrdhrDe0Li7-DyEzM1pEBNTBp_2sV92sR2g0dVUddsvWueittqHUALLN-OPtIO57NrKgkFYpNXVL4Q-J8-SYP2wn9YOM7Z-zm7abHGcLDHJcrDniOgiWyCXHGiQYWcReQ2SZG-fKOT14-917S6m5JdXZkZ4eL1OcePpkTCGoFmed6PzBAHRVh80pOBGuYgcT7w5Qrv7CO_FH_FJ1mYVka0j6uBb-wIfFdp6ZF780VAj2dr1dROFkfuEf3dYjU" alt="South" /></div>
                                 <div className="flex-1"><span className="font-bold">Southern Vietnam</span></div>
                              </div>
                           </label>
                        </div>
                        <div className="relative bg-blue-50/50 dark:bg-blue-900/10 rounded-xl overflow-hidden border border-blue-100 dark:border-blue-900/30 flex items-center justify-center p-4">
                           <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#09aa74_1px,transparent_1px)] [background-size:16px_16px]"></div>
                           <img className="h-full w-auto object-contain opacity-40 mix-blend-multiply dark:mix-blend-overlay filter grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAODIDuhPfsRwZCbw8hLnPxg2IivkpggfDLtlhiRTF0qtuT9c984V1N36Ff2oSfqBMG94I6RzfWqm-tsDu0M_OBxsFsL4DB2Yn1uiFACNuI-9nBILA9xJG6du7F-paOa1i0_HisLyx1wGMhfH2-Xr6QWec9V2DmUAUD2UMD-PN-Ey8iyZv70npxTYT47PXSC_6zzoz_8FokSCvF1utWwNUFx_elShWYKM0VnaKJVMlRuAp-1jM-OsqAQXSSQG9ZsezR0Tb5dhvYm5w" alt="Map" />
                           <div className="absolute top-[20%] left-[45%]"><div className="w-4 h-4 bg-[#09aa74] rounded-full shadow-[0_0_0_4px_rgba(9,170,116,0.2)] animate-pulse"></div></div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="flex items-center justify-between pt-4 pb-12">
                  <button className="px-8 py-3 rounded-lg bg-[#09aa74] hover:bg-[#078a5e] text-white font-bold shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center gap-2">
                     <span>Send Request</span>
                     <span className="material-symbols-outlined text-[20px]">send</span>
                  </button>
               </div>
            </div>
            
            <div className="lg:col-span-4 space-y-8 sticky top-28">
               <div className="bg-white dark:bg-[#1a332d] p-6 rounded-2xl shadow-sm border border-white/50 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="bg-[#09aa74]/10 p-2 rounded-lg text-[#09aa74]"><span className="material-symbols-outlined">diamond</span></div>
                     <h4 className="font-bold text-lg">Why go Tailor-Made?</h4>
                  </div>
                  <ul className="space-y-4">
                     <li className="flex gap-3"><span className="material-symbols-outlined text-[#09aa74] text-[20px] mt-0.5">verified_user</span><div><h5 className="font-bold text-sm">Local Experts</h5><p className="text-xs text-[#6b7c76] mt-1">Itineraries crafted by locals who know the hidden gems.</p></div></li>
                  </ul>
               </div>
            </div>
         </div>
      </main>
    </div>
  );
};

export default TailorMade;