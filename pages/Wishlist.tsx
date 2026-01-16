import React from 'react';
import { Link } from 'react-router-dom';

const Wishlist: React.FC = () => {
  return (
    <div className="bg-[#fdfdfc] dark:bg-[#22252a] text-[#0c1d17] dark:text-gray-100 flex flex-col min-h-screen font-jakarta transition-colors duration-300">
       <header className="sticky top-0 z-50 bg-[#fdfdfc]/95 dark:bg-[#22252a]/95 backdrop-blur-sm border-b border-[#e6f4f0] dark:border-gray-800 px-4 md:px-10 py-3">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 text-[#0c1d17] dark:text-white">
                 <div className="size-8 text-[#00c281]">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
                    <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                 </div>
                 <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Vietmate</h2>
            </Link>
            <div className="flex items-center gap-4">
               <Link to="/dashboard" className="px-4 py-2 text-sm font-medium hover:text-[#00c281]">Dashboard</Link>
               <div className="flex items-center justify-center overflow-hidden rounded-xl h-10 w-10 bg-[#e6f4f0] dark:bg-gray-800 text-[#0c1d17] dark:text-white relative">
                  <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
               </div>
            </div>
        </div>
       </header>

       <div className="flex-1 max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row">
          <aside className="hidden lg:block w-72 shrink-0 sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto border-r border-[#e6f4f0] dark:border-gray-800 bg-[#f8fcfb] dark:bg-[#1c1f24] p-6">
             <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                   <h3 className="text-sm font-bold uppercase tracking-wider">My Folders</h3>
                   <div className="flex flex-col gap-2">
                      <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#00c281] text-[#0c1d17] shadow-sm font-bold text-sm" href="#">
                         <span className="material-symbols-outlined text-xl">folder_open</span>
                         <span>All Saved Items</span>
                         <span className="ml-auto bg-white/30 px-2 py-0.5 rounded-md text-xs">12</span>
                      </a>
                      <a className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#e6f4f0] dark:hover:bg-gray-800 transition-colors" href="#">
                         <span className="material-symbols-outlined text-xl text-[#00c281]">folder</span>
                         <span className="font-medium text-sm">Summer 2024</span>
                         <span className="ml-auto text-[#45a182] text-xs">4</span>
                      </a>
                   </div>
                </div>
             </div>
          </aside>
          
          <main className="flex-1 p-6 md:p-10">
             <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div className="flex flex-col gap-2">
                   <h1 className="text-3xl md:text-4xl font-black tracking-tight">My Saved Adventures</h1>
                   <p className="text-[#45a182]">Manage and organize your favorite Vietnam experiences.</p>
                </div>
             </div>

             <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
                <div className="break-inside-avoid relative group bg-white dark:bg-[#2a2d33] rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-transparent dark:border-gray-800">
                   <div className="relative h-56 overflow-hidden">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaTK_BD8EoAVfEZnQhoDZ3ij7yr_48NyTv0UHQhL1kpu9BGrlW1qf7r75FEn88yx47HcSX5TN0xsV1tlG5Ytvq2pGqW4K7r130XsijyfDieLGhGmdO5Ncfekl3qer72WvZ-tqJcwo6-cCScOqYtWlewT-INvN0WG9tsN1OsAfuCeYSNuHyv97a7X0vnIdd0484j9vvlswfqohyXe-e5EJ1teoDJMjqxxeGJheUmFXzgyoDLxzjTCL7-GvyA4UyGn-YSWFR0gV1ZP0" alt="Hanoi Food" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute bottom-3 left-3">
                         <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0c1d17] flex items-center gap-1 shadow-sm">
                            <span className="material-symbols-outlined text-[14px] text-yellow-500 filled">star</span> 4.9 (128)
                         </span>
                      </div>
                   </div>
                   <div className="p-5 flex flex-col gap-4">
                      <div>
                         <div className="flex justify-between items-start gap-2 mb-1">
                            <h3 className="text-lg font-bold leading-tight group-hover:text-[#00c281] transition-colors">Hanoi Street Food & Egg Coffee Tour</h3>
                            <span className="shrink-0 font-bold text-[#00c281] text-lg">$45</span>
                         </div>
                      </div>
                      <div className="bg-[#fff9e6] dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-100 dark:border-yellow-900/30 flex gap-3 items-start">
                         <span className="material-symbols-outlined text-yellow-600 text-[18px] mt-0.5">edit_note</span>
                         <p className="text-sm text-gray-700 dark:text-yellow-100/80 italic font-medium leading-relaxed">"Must try the egg coffee at Giang Cafe!"</p>
                      </div>
                      <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                         <button className="w-full bg-[#00c281] hover:bg-[#00c281]/90 text-[#0c1d17] font-bold py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                            Move to Cart
                         </button>
                      </div>
                   </div>
                </div>

                <div className="break-inside-avoid relative group bg-white dark:bg-[#2a2d33] rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-transparent dark:border-gray-800">
                   <div className="relative h-64 overflow-hidden">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb7Lyawh7J0HcjQv5EDw6RuOrj_7f_hMWddN79etY2Sdwk5Lcs62QQmzHQNQWxPPB8Y1-qD_1f_RVs23_8Oatd4ln99CEgRne9hrwefnig9xBY9oa9UZngF2vRyelRgJTeU4m1K_dhA7fyp8Ak6kBxYC0Ht82cOF2Y-A6BJniVuQT47zFAx5Nm3G6yIZ-HMN2F0Y-gCLLVGD1J31Wd1dB5PDx9BJ0yyxKNs3yTgxJAV0ej3cWtG1Tu-IQONwdbdkEph6k5l9eXrFQ" alt="Ha Long" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-3 left-3">
                         <span className="bg-[#00c281]/90 text-[#0c1d17] backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm">Bestseller</span>
                      </div>
                   </div>
                   <div className="p-5 flex flex-col gap-4">
                      <div>
                         <div className="flex justify-between items-start gap-2 mb-1">
                            <h3 className="text-lg font-bold leading-tight group-hover:text-[#00c281] transition-colors">Luxury Ha Long Bay Overnight Cruise</h3>
                            <span className="shrink-0 font-bold text-[#00c281] text-lg">$150</span>
                         </div>
                      </div>
                       <div className="bg-[#fff9e6] dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-100 dark:border-yellow-900/30 flex gap-3 items-start">
                         <span className="material-symbols-outlined text-yellow-600 text-[18px] mt-0.5">edit_note</span>
                         <p className="text-sm text-gray-700 dark:text-yellow-100/80 italic font-medium leading-relaxed">"Check weather forecast for clear skies."</p>
                      </div>
                       <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                         <button className="w-full bg-[#00c281] hover:bg-[#00c281]/90 text-[#0c1d17] font-bold py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                            Move to Cart
                         </button>
                      </div>
                   </div>
                </div>
             </div>
          </main>
       </div>
    </div>
  );
};

export default Wishlist;