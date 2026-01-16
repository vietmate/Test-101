import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation: React.FC = () => {
  return (
    <div className="bg-[#f8fcfb] dark:bg-[#121c18] font-display text-slate-800 dark:text-slate-100 min-h-screen flex flex-col antialiased">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#e6f4f0] dark:border-white/10 bg-white/80 dark:bg-[#121c18]/80 backdrop-blur-md px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
           <div className="size-8 text-[#00c281]">
             <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
             </svg>
           </div>
           <h2 className="text-xl font-bold">Vietmate</h2>
        </Link>
      </header>

      <main className="flex-grow w-full max-w-5xl mx-auto px-4 py-12">
         <div className="flex flex-col items-center justify-center text-center mb-10">
            <div className="relative mb-6">
               <div className="absolute inset-0 bg-[#00c281]/20 blur-xl rounded-full scale-150"></div>
               <div className="relative bg-white dark:bg-[#1a2622] p-4 rounded-full shadow-lg">
                  <span className="material-symbols-outlined text-[#00c281] text-6xl filled">check_circle</span>
               </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">You're going to Vietnam!</h1>
            <p className="text-slate-500 text-lg font-medium">Thank you for booking with Vietmate.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-10">
            <div className="md:col-span-8 bg-white dark:bg-[#1a2622] rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#00c281]/5 rounded-bl-full -mr-4 -mt-4"></div>
               <div className="relative z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider mb-4 inline-block">Confirmed</span>
                  <h3 className="text-2xl font-bold mb-6">Hanoi Street Food Walking Tour</h3>
                  <div className="space-y-4">
                     <div className="flex items-start gap-4">
                        <div className="p-2 bg-[#00c281]/10 rounded-lg text-[#00c281]"><span className="material-symbols-outlined filled">calendar_month</span></div>
                        <div><p className="text-xs text-slate-400 uppercase font-bold">Date</p><p className="font-semibold">Tuesday, Nov 12, 2024</p></div>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="md:col-span-4 bg-white dark:bg-[#1a2622] rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Entry Ticket</p>
                <h4 className="text-lg font-bold mb-4">Scan at meeting point</h4>
                <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                   <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbmyBcOo3CX95gW2GQ1f0vx0vmarxcseB7Sj093QxF2MIFbFhk8ZykQe0wtap26YYegDIgE1Rlaz6gGkjsQio2LDaiD_A9rxOiia6KR-RzIbYXEzUhfyQosmcgIxJlVr-YwWpo8Rrq6yqLVMXog2PUVEWSdE17ghV7ZDWFaEf4_eG_FyWxjBB47yBbzxczUDMfSYFx5a6ODzsoRHVwG6sxyXxogGoWk7jmgbpvfvK29J_pqkWQeoWCGx8Z1lV4xp_jTHHbjf_iPtc" alt="QR" className="w-32 h-32 object-contain" />
                </div>
            </div>
         </div>

         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard" className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#00c281] hover:bg-[#00a06b] text-white shadow-lg font-bold text-sm transition-all flex items-center justify-center gap-2">Back to Home</Link>
         </div>
      </main>
    </div>
  );
};

export default Confirmation;