import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="bg-[#f5f8f7] dark:bg-[#0f231c] text-slate-800 dark:text-slate-100 font-jakarta antialiased h-screen flex overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-72 flex-shrink-0 flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#162e25] transition-colors duration-300">
        <div className="p-8 pb-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00c281] to-emerald-300 flex items-center justify-center text-white shadow-lg shadow-[#00c281]/20">
              <span className="material-symbols-outlined text-[28px]">travel_explore</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Vietmate</span>
          </Link>
        </div>
        <div className="px-6 py-4 mx-4 mb-2 rounded-2xl bg-[#f5f8f7] dark:bg-[#0f231c] border border-slate-100 dark:border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="bg-center bg-no-repeat bg-cover rounded-full size-12 shadow-sm border-2 border-white dark:border-slate-600" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRcVRE6GxLLgxaCiymHuLOh7TbueZLydI5YgdoVcAQMkbhRCZGXQNecz0SGKC0ARfnlVn3YoIEoLyMQiYDPJ-4kh6ZBNKdHOLYWkcPx6Hfox2lLKE8Vv7sOqdNnZg-r1MIS-EpLxQZ0DyT5XbRggnY2gTNRf9gMYXeI0gT5TDtb7Iqm8ze42_zmZJCGg5I8NR8bTaspjPmMRc3QIA3THR1szHWnEbWZohp-1RNL1zskHwvOuH9apGOauWUoPZE92NjyQjJ4ABXON0')" }}></div>
              <div className="absolute bottom-0 right-0 size-3 bg-[#00c281] rounded-full border-2 border-white dark:border-slate-800"></div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">Alex Nguyen</h2>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full w-fit">Explorer Tier</span>
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#00c281]/10 text-[#00a06b] dark:text-[#00c281] group transition-all duration-200">
            <span className="material-symbols-outlined filled">dashboard</span>
            <span className="font-semibold text-sm">Dashboard</span>
          </Link>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5 transition-all duration-200 group">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">account_circle</span>
            <span className="font-medium text-sm">Profile Settings</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5 transition-all duration-200 group">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">credit_card</span>
            <span className="font-medium text-sm">Payment Methods</span>
          </a>
          <Link to="/wishlist" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5 transition-all duration-200 group">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">favorite</span>
            <span className="font-medium text-sm">Saved Wishlist</span>
            <span className="ml-auto bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded-full">3</span>
          </Link>
          <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5 transition-all duration-200 group">
              <span className="material-symbols-outlined">help</span>
              <span className="font-medium text-sm">Help Center</span>
            </a>
          </div>
        </nav>
        <div className="p-4">
          <Link to="/" className="flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-semibold text-slate-500 transition-colors rounded-xl hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            Log Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative z-0">
        <div className="max-w-6xl mx-auto px-8 py-10 lg:px-12 lg:py-12">
          {/* Welcome Section */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div className="lg:col-span-2 flex flex-col justify-center">
              <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">Xin chào, Alex! <span className="text-4xl">👋</span></h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg mb-6 max-w-lg">Ready for your next adventure? Your journey to Gold Status is just around the corner.</p>
              <div className="bg-white dark:bg-[#162e25] rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700/50 max-w-xl">
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Progress to Gold Status</p>
                    <p className="text-xs text-slate-500 mt-1">400 miles to go</p>
                  </div>
                  <span className="text-xl font-bold text-[#00c281]">85%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-[#00c281] h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
            {/* Stats */}
            <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-[#162e25] dark:to-[#0f231c] rounded-2xl p-6 border border-emerald-100 dark:border-slate-700 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-[#00c281] rotate-12">flight_takeoff</span>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-4">
                  <span className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-[#00c281]">
                    <span className="material-symbols-outlined">loyalty</span>
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">Vietmate Miles</span>
                </div>
                <div>
                  <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">2,600</span>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Available to redeem</p>
                </div>
                <button className="mt-6 w-full py-2.5 px-4 bg-white dark:bg-slate-800 border border-emerald-200 dark:border-slate-600 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-[#00c281] hover:border-[#00c281] dark:hover:border-[#00c281] transition-all">
                  Redeem Rewards
                </button>
              </div>
            </div>
          </section>

          {/* Tabs */}
          <div className="border-b border-slate-200 dark:border-slate-700 mb-8 sticky top-0 bg-[#f5f8f7] dark:bg-[#0f231c] z-20 pt-2">
            <div className="flex gap-8">
              <a href="#" className="relative pb-4 text-sm font-bold text-slate-900 dark:text-white">
                Upcoming Trips
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#00c281] rounded-t-full"></span>
              </a>
              <a href="#" className="group relative pb-4 text-sm font-bold text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors">
                Past Memories
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-slate-200 dark:group-hover:bg-slate-700 rounded-t-full transition-colors"></span>
              </a>
            </div>
          </div>

          {/* Trips */}
          <div className="space-y-6 mb-12">
            {/* Main Trip */}
            <article className="bg-white dark:bg-[#162e25] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group border border-slate-100 dark:border-slate-700/50">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCi7y_1-9KZYyQAmierqOfqH3ZwfIntHxMzgAKAKW-BjUvpS68dDy3Bc5q6aLoq512I_6XLHgEINnt-Fjqi8WRTE1ZxL69V7qyxZiX7xKTdV0l_btuMznAM_WNchyIMOWVOU1zYbtO_RmxPhhNnwHYDWkKzpcXBjymbGeSG2moybk7mC6H5KuLTWODH77d2o7uNKZbhbyaqcg8gXLrFKU4_Gb9tqRIWAoeQlu7HQiIlGxsOiN4773QLgye75zNuifYREMZ44jSDiVc')" }}></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-lg text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1 shadow-sm">
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                      Confirmed
                    </span>
                  </div>
                </div>
                <div className="md:w-3/5 p-6 lg:p-8 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Hanoi Street Food Tour</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[20px]">calendar_month</span> Mar 15, 2024</div>
                        <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[20px]">schedule</span> 18:00 - 21:00</div>
                        <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[20px]">group</span> 2 Adults</div>
                      </div>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-400 px-4 py-2 rounded-xl text-center min-w-[80px]">
                      <p className="text-xs font-semibold uppercase opacity-70">Starts in</p>
                      <p className="text-xl font-black leading-none mt-1">3 <span className="text-sm font-medium">days</span></p>
                    </div>
                  </div>
                  <hr className="border-slate-100 dark:border-slate-700 my-4 border-dashed" />
                  <div className="flex-1">
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-2">Experience the vibrant flavors of Hanoi's Old Quarter. Your guide, Minh, will take you to 5 secret spots known only to locals.</p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link to="/confirmation" className="flex-1 bg-[#00c281] hover:bg-[#00a06b] text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-[#00c281]/30 flex justify-center items-center gap-2">
                      <span className="material-symbols-outlined text-[20px]">map</span>
                      View Itinerary
                    </Link>
                    <button className="bg-white dark:bg-transparent border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                      Manage Booking
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Secondary Trip */}
            <article className="bg-white dark:bg-[#162e25] rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700/50 flex items-center gap-5 opacity-75 hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCSQedYh8J10gQU0GUTMikepG1E3CchVBeaZjYC0SZdZfrAvYWedMQNpRv6UKjx8EeK4tv2y5nHgsj1hCIovUGq-DvDo2WmeVU_hPo2-ee7wUp7r7gQqZAnYveLlJx3fcUcO-KMqdmp1WXh1uS5dqggGOfOAfTM67to9XZGtVmIKtnFmoGsx0Fea69K6v4KA44V3n1ntrXpuD1Zlki_kmHwjWVuoTC4_kk_POjW3dVa_n2vO9p_rFmZT4mCvUEL0MdPehYRHEKcJck')" }}></div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 dark:text-white">Sapa Trekking Adventure</h4>
                <p className="text-sm text-slate-500">Aug 24 - Aug 26, 2024</p>
              </div>
              <div className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs font-bold text-slate-500">Pending Confirmation</div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;