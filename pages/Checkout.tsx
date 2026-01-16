import React from 'react';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  return (
    <div className="bg-[#f6f7f8] dark:bg-[#131d1f] font-manrope text-[#101819] dark:text-white antialiased min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-[#1c2a2d] border-b border-[#e9f0f1] dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <div className="size-8 text-[#1f6b7a]">
                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
                  <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight font-serif">Vietmate</span>
            </Link>
            <div className="flex items-center gap-2 text-[#1f6b7a] bg-[#1f6b7a]/10 px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-[18px]">lock</span>
              <span className="text-sm font-semibold">Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-8">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-serif font-bold">Checkout</h1>
              {/* Stepper */}
              <div className="bg-white dark:bg-[#1c2a2d] p-1 rounded-xl shadow-sm border border-[#e9f0f1] dark:border-slate-700 inline-flex w-full">
                <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-[#1f6b7a]/10 rounded-lg border border-[#1f6b7a]/20">
                  <span className="flex items-center justify-center size-6 rounded-full bg-[#1f6b7a] text-white text-xs font-bold">1</span>
                  <span className="text-sm font-bold text-[#1f6b7a]">Traveler Details</span>
                </div>
                <div className="flex items-center justify-center px-2">
                  <span className="material-symbols-outlined text-gray-400 text-sm">arrow_forward_ios</span>
                </div>
                <div className="flex-1 flex items-center gap-3 px-4 py-3 opacity-60">
                  <span className="flex items-center justify-center size-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 text-xs font-bold">2</span>
                  <span className="text-sm font-medium">Payment</span>
                </div>
                <div className="hidden sm:flex items-center justify-center px-2">
                  <span className="material-symbols-outlined text-gray-400 text-sm">arrow_forward_ios</span>
                </div>
                <div className="hidden sm:flex flex-1 items-center gap-3 px-4 py-3 opacity-40">
                  <span className="flex items-center justify-center size-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 text-xs font-bold">3</span>
                  <span className="text-sm font-medium">Confirmation</span>
                </div>
              </div>
            </div>

            {/* Forms */}
            <section className="bg-white dark:bg-[#1c2a2d] rounded-2xl shadow-sm border border-[#e9f0f1] dark:border-slate-700 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1f6b7a]">person</span>
                  Contact Information
                </h2>
                <span className="text-sm text-gray-500">Step 1 of 2</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">First Name</label>
                  <input className="w-full h-12 px-4 bg-[#f6f7f8] dark:bg-[#131d1f] border border-[#e9f0f1] dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#1f6b7a]/20 focus:border-[#1f6b7a] outline-none" placeholder="e.g. Sarah" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">Last Name</label>
                  <input className="w-full h-12 px-4 bg-[#f6f7f8] dark:bg-[#131d1f] border border-[#e9f0f1] dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#1f6b7a]/20 focus:border-[#1f6b7a] outline-none" placeholder="e.g. Nguyen" type="text" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-semibold">Email Address</label>
                  <input className="w-full h-12 px-4 bg-[#f6f7f8] dark:bg-[#131d1f] border border-[#e9f0f1] dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-[#1f6b7a]/20 focus:border-[#1f6b7a] outline-none" placeholder="sarah@example.com" type="email" />
                </div>
              </div>
            </section>

            <section className="bg-white dark:bg-[#1c2a2d] rounded-2xl shadow-sm border border-[#e9f0f1] dark:border-slate-700 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1f6b7a]">payments</span>
                  Payment Method
                </h2>
                <span className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                  <span className="material-symbols-outlined text-[14px]">encrypted</span>
                  SSL Encrypted
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                {/* Simplified Payment Options for Demo */}
                <div className="p-4 rounded-xl border border-[#1f6b7a] bg-[#1f6b7a]/5 text-center flex flex-col gap-2 items-center cursor-pointer">
                  <span className="material-symbols-outlined text-3xl text-[#1f6b7a]">credit_card</span>
                  <span className="text-sm font-bold">Credit Card</span>
                </div>
                <div className="p-4 rounded-xl border border-[#e9f0f1] dark:border-slate-700 bg-[#f6f7f8] dark:bg-[#131d1f] text-center flex flex-col gap-2 items-center cursor-pointer hover:border-[#1f6b7a]/50">
                  <span className="font-serif font-bold italic text-blue-800 text-xl">PayPal</span>
                  <span className="text-sm font-bold">PayPal</span>
                </div>
                <div className="p-4 rounded-xl border border-[#e9f0f1] dark:border-slate-700 bg-[#f6f7f8] dark:bg-[#131d1f] text-center flex flex-col gap-2 items-center cursor-pointer hover:border-[#1f6b7a]/50">
                  <span className="material-symbols-outlined text-3xl text-gray-500">account_balance</span>
                  <span className="text-sm font-bold">Bank Transfer</span>
                </div>
              </div>
              {/* Card Form */}
              <div className="space-y-5 bg-[#f6f7f8]/50 dark:bg-black/20 p-6 rounded-xl border border-[#e9f0f1] dark:border-slate-700">
                 <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">Card Number</label>
                  <input className="w-full h-12 px-4 bg-white dark:bg-[#1c2a2d] border border-[#e9f0f1] dark:border-slate-700 rounded-lg outline-none" placeholder="0000 0000 0000 0000" type="text" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                   <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">Expiry Date</label>
                    <input className="w-full h-12 px-4 bg-white dark:bg-[#1c2a2d] border border-[#e9f0f1] dark:border-slate-700 rounded-lg outline-none" placeholder="MM/YY" type="text" />
                  </div>
                   <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">CVC</label>
                    <input className="w-full h-12 px-4 bg-white dark:bg-[#1c2a2d] border border-[#e9f0f1] dark:border-slate-700 rounded-lg outline-none" placeholder="123" type="text" />
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[#e9f0f1] dark:border-slate-700">
                <Link to="/confirmation" className="w-full h-14 bg-[#1f6b7a] hover:bg-[#165561] text-white rounded-xl text-lg font-bold shadow-lg shadow-[#1f6b7a]/20 transition-all flex items-center justify-center gap-3 group">
                  <span>Pay Securely</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded text-sm font-semibold">$384.50</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </section>
          </div>

          <div className="lg:col-span-5 xl:col-span-4 mt-8 lg:mt-0 relative">
            <div className="sticky top-24 space-y-4">
               <div className="bg-white dark:bg-[#1c2a2d] rounded-2xl shadow-sm border border-[#e9f0f1] dark:border-slate-700 overflow-hidden">
                  <div className="relative h-48">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsysoTtZq9wEE7DjyPrUC7T-0p5J1UcfLPII1v8D7GD4PRwBHri89WaKwb3q_Hv8z3_i90g7jZ6pPVr90v08dhU0XSacfO6r0DxkBeImWEM4pM_KVzC9sx6odzLZpI5FJEMPsDaeKXLDgbKrkBj6vLfssCD_-onJLnboeEdoKPTs_XZSRYSMSQWSD_oVTebruplH4zX_APfplfajpNbtoGVopMQfyWN89AQ04j2btVFCLPS7QX5TqrY7kPCKFRXpLFw1Ew33xoJF0" className="w-full h-full object-cover" alt="Cruise" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                        <div className="bg-[#1f6b7a]/90 text-xs font-bold px-2 py-1 rounded mb-2 inline-block backdrop-blur-sm">Premium Cruise</div>
                        <h3 className="font-serif text-lg font-bold leading-tight">Majestic Ha Long Bay Luxury Cruise</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4 pb-6 border-b border-[#e9f0f1] dark:border-slate-700 border-dashed">
                       <div className="flex justify-between">
                         <span className="text-gray-500 text-sm">Date</span>
                         <span className="font-medium">Oct 24, 2023</span>
                       </div>
                       <div className="flex justify-between">
                         <span className="text-gray-500 text-sm">Guests</span>
                         <span className="font-medium">2 Adults</span>
                       </div>
                    </div>
                    <div className="pt-6 space-y-3">
                         <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Total</span>
                            <span className="font-bold text-xl font-serif">$384.50</span>
                         </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;