import React from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  return (
    <div className="bg-[#f6f8f7] dark:bg-[#131f19] text-[#101914] dark:text-[#e9f1ed] antialiased min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-[#f6f8f7]/95 dark:bg-[#131f19]/95 backdrop-blur-sm">
         <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
               <Link to="/" className="flex items-center gap-2">
                   <div className="size-8 text-[#1f7a4d]">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
                        <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
                      </svg>
                   </div>
                   <span className="font-serif font-bold text-xl tracking-tight">Vietmate</span>
               </Link>
               <div className="flex items-center gap-4">
                   <button className="bg-[#1f7a4d] hover:bg-[#1f7a4d]/90 text-white font-serif font-bold text-sm px-6 py-2.5 rounded transition-colors shadow-sm">Book Now</button>
               </div>
            </div>
         </div>
      </header>

      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden group">
         <div className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASQAIce0EE6CIUiM8HaodhJFWl7D17xmQ9pU43ZKhes6Y7sPHsaoOiGlMaoWpk2L9NZPVfW-gQP7yx0WrImjCtOoJ4NjzTDwcAOasHmZOpFygfJo0T2c5lfY55bufkFFDX9wIIE0pp77Hh80PvFpthhSbKUoS2AiIzG_yPSvsEOS3JMk1890WjQGCEkfZdkg2vcMW2VyxSdBs70o-fmV1jcm2wNlwDzcKVqftfq4bywR5uKhrq5gIeXnOAghNsMm1xj88CsXefKvA')" }}></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10"></div>
         <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-20">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
               <div className="max-w-3xl">
                  <span className="inline-block py-1 px-3 mb-4 bg-[#1f7a4d]/90 backdrop-blur-sm text-white text-xs font-sans font-bold uppercase tracking-wider rounded">Featured Journey</span>
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-sm">The Secret Alleys of Hanoi's Old Quarter</h1>
                  <p className="font-serif text-lg md:text-xl text-gray-200 mb-8 max-w-xl font-light leading-relaxed">Discovering the soul of the city, one hidden coffee shop at a time. A guide to the unseen capital.</p>
               </div>
            </div>
         </div>
      </div>

      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           <div className="lg:col-span-8 flex flex-col gap-12">
              <section>
                 <div className="flex items-center gap-2 mb-6">
                    <span className="material-symbols-outlined text-[#1f7a4d]">star</span>
                    <h2 className="font-serif font-bold text-xl uppercase tracking-wider">Editor's Choice</h2>
                 </div>
                 <div className="group relative flex flex-col md:flex-row overflow-hidden rounded-lg bg-white dark:bg-[#1a2c24] shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800">
                    <div className="md:w-3/5 relative h-64 md:h-auto overflow-hidden">
                       <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9sr56raJVTpnpZ7vY1x5L6coDuI9kVUnItzLSIeRjhXaoAcfwWKO0l7_g_q-9BApQhgIXLV0S7TiaX6RdOKFMfeNp0sitvZVctam-dzdPDWxy0x7yclQq3ab1yKX3I7_zyl7-bUMoeXqV_Etf7S_eJhKGIWjS-COSKhn7wAoNKrOLf0VoaCDE3x2kWZ-yjsRVJSWpcNYgbZKtIUfOowpHxVQ-tlwWTnX5nMIKjDCB_EuaBUklp11uBX50BaVq5VXZ7PEU4vZpaSA')" }}></div>
                       <div className="absolute top-4 left-4">
                          <span className="bg-white/90 backdrop-blur text-[#1f7a4d] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">Must Read</span>
                       </div>
                    </div>
                    <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-center">
                       <h3 className="font-serif font-bold text-2xl leading-tight mb-3 group-hover:text-[#1f7a4d] transition-colors">Why September is the Best Month to Visit Northern Vietnam</h3>
                       <p className="font-serif text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed line-clamp-3">Avoid the summer crowds and embrace the golden harvest season in the mountains. A photographer's dream guide.</p>
                       <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center gap-3">
                           <div className="size-8 rounded-full bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAU-gte3JTXynVGHmoWXY9f296w1_AWzRU8_NKP1zj9Siba-h1qQvM72GO5sDIZApwhS3xOj8ETzqIcO0mGAz4RhFGD2BDPAWWzEFCpMwhe9Yo_SzKUKKpmTDb-RgPpfyRLcJCqq4oGwyUzd8I9wREDxprcqB0EYuNjI9lttU43u2LNEHSY4TfDy6fh7fuQwwomeDdOMpCvYMbl3wUhEuxtXOVf6qVimductmqJjI8Yid-WJHf0ePfzmOmrz7Yl-gj_59f68yu8dN4')" }}></div>
                           <span className="font-serif text-sm font-medium">Linh Nguyen</span>
                       </div>
                    </div>
                 </div>
              </section>

              <section>
                 <div className="flex items-center justify-between mb-6">
                    <h2 className="font-serif font-bold text-xl uppercase tracking-wider">Latest Stories</h2>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
                    <article className="group flex flex-col h-full">
                       <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                          <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPRQ25YHE00AAPsfblsSUSIN6raSfXKFagOlww42c7hNF3mK-hFAfsBbB_3u4nxcDL4nlRS5XAhwUgv1APqNT6XZSbAREjL6pNLCI1-3pCx2BI1BolCQ5AFPtYgQ76TaMwtZvs4PqnFl68TqujsxRmw2RC_Ye5pyv__Ocz6CZB373FYJ7fxpl6xa9wXSNnFgS5jYbpcZ2IZj_T4mQhr7LvnhWrjC18Ee3IxZuJ6NQTyZm_miijM7gIp8zXL1SpAIWLwKpFM4cJI3A')" }}></div>
                          <span className="absolute top-3 left-3 bg-white/90 text-[#1f7a4d] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Food & Drink</span>
                       </div>
                       <h3 className="font-serif font-bold text-lg leading-snug mb-2 group-hover:text-[#1f7a4d] transition-colors">5 Best Banh Mi Spots in Saigon: Street Food Edition</h3>
                    </article>
                    <article className="group flex flex-col h-full">
                       <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                          <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1MxRgyC81AegYCa8jDMAfg22PGbrUHLZaxUK9S3X4PxcwtoWIDNj-K5PmhnOuOp7_OMjqy4jD4Bt5gFn8WqNfjv1TVnG8NvopY2kbaYSRkJSQDSR5u4MbHKKa_UK1ElRi_-Z5wa9iBop3ELy6B_WsGU3NDtK5dn-3CnKrfyIgWmwUfWflHlBrvUZQqqovfHCbqKLTMLhJDBMgauskr9AjfKYZg4VNMFY3yL_s2iLd_pxvezI4BImI2qfO6ikm3jKtk5v7KcdGmQjdd4NE_nI')" }}></div>
                          <span className="absolute top-3 left-3 bg-white/90 text-[#1f7a4d] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">History</span>
                       </div>
                       <h3 className="font-serif font-bold text-lg leading-snug mb-2 group-hover:text-[#1f7a4d] transition-colors">A Guide to the Hue Imperial Citadel</h3>
                    </article>
                 </div>
              </section>
           </div>
           
           <aside className="lg:col-span-4 flex flex-col gap-10">
              <div className="bg-[#1f7a4d]/5 border border-[#1f7a4d]/20 p-6 rounded-lg relative overflow-hidden">
                 <h3 className="font-serif font-bold text-xl text-[#1f7a4d] mb-2 relative z-10">Unlock Vietnam</h3>
                 <p className="font-serif text-sm text-gray-600 dark:text-gray-300 mb-6 relative z-10">Get <span className="font-bold text-[#1f7a4d]">10% off</span> your first tour when you join our travel circle.</p>
                 <button className="w-full bg-[#1f7a4d] hover:bg-[#1f7a4d]/90 text-white font-sans font-bold text-sm py-3 rounded transition-colors shadow-sm">Subscribe & Save</button>
              </div>
           </aside>
        </div>
      </main>
    </div>
  );
};

export default Blog;