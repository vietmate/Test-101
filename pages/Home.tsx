import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-[#f6f8f8] dark:bg-[#12201d] font-manrope text-slate-900 dark:text-white transition-colors duration-200 min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-[#f6f8f8]/95 dark:bg-[#12201d]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="size-8 text-[#1a7a6a]">
                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <span className="font-epilogue font-bold text-xl tracking-tight text-slate-900 dark:text-white">VietMate</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-[#1a7a6a] font-bold text-sm">Explore</Link>
              <Link to="/collection" className="text-slate-600 dark:text-slate-300 hover:text-[#1a7a6a] dark:hover:text-[#1a7a6a] transition-colors text-sm font-medium">Destinations</Link>
              <Link to="/dashboard" className="text-slate-600 dark:text-slate-300 hover:text-[#1a7a6a] dark:hover:text-[#1a7a6a] transition-colors text-sm font-medium">Bookings</Link>
            </div>
            <div className="flex items-center gap-4">
              <button className="md:hidden text-slate-900 dark:text-white">
                <span className="material-symbols-outlined">menu</span>
              </button>
              <Link to="/dashboard" className="hidden md:block size-10 rounded-full bg-cover bg-center border-2 border-white dark:border-slate-700 shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAsQ2nyqKMI4vuiSRZkUlLFcwNjMFnSfD85EyN1BXDADAOGgjL1-Qb680uFMCrizM_IlfAendppfBwt7dMEDjLhqCw4q6QHITp3VmXpj9LD8SPXa0-oD7erGZ0qIeOvPgEg4kzjcuoIu77kbr-tVY4Zu-ZjeKJ2ZjBKyxl5A_xa8H1YHGQQIAaf98qoH61ZIbfjao-TNOsJtLNKUZKdEfCltX-SsC7isffpwbbNe35zS-mljiMcqk-OTf11Lp2Hv7u6FZxtjUQhrn4')" }}></Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full h-[640px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#f6f8f8] dark:to-[#12201d] z-10"></div>
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNEpimIQ946zNH4bDLCzEUvVPXUbelmH3oEnyghcCPA6cr_x5FZA16iV013QsqLhHDNA6VSVIJJRwVG76kLfpoYTEIfoeEuoxbd4QlQEb6E5SfcsZ4sO0ANiyENMAYnde1_L_-ZWS3fEEkrOYbzB_rztrrYILlFfdqRGJ9JgTUydwXi30ujX2V9KOruW4ZankuzCM6uHlf1gL1ZjqxqmJPSAmS1wa_C3Ok2Aw_RPGOMZ4dooVn5wTQy9hJxTCVCvPBCVFmtoBK0mc')" }}></div>
        </div>
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-10">
          <h1 className="font-epilogue font-black text-5xl md:text-7xl text-white tracking-tight mb-4 drop-shadow-lg">
            Uncover the Soul of Vietnam
          </h1>
          <p className="font-manrope text-lg md:text-xl text-white/90 max-w-2xl font-medium drop-shadow-md mb-10">
            From the limestone pillars of Ha Long to the lantern-lit streets of Hoi An.
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-4xl bg-white dark:bg-[#1a2c28] rounded-xl shadow-2xl p-2 md:p-3 transform transition-transform hover:scale-[1.01]">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-700">
              <div className="flex-1 w-full px-4 py-3 hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg transition-colors group cursor-pointer">
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Where to?</label>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1a7a6a] text-[20px]">location_on</span>
                  <input className="w-full bg-transparent border-none p-0 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0 text-base font-semibold truncate" placeholder="Search destinations" type="text" />
                </div>
              </div>
              <div className="flex-1 w-full px-4 py-3 hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg transition-colors group cursor-pointer">
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">When?</label>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1a7a6a] text-[20px]">calendar_month</span>
                  <input className="w-full bg-transparent border-none p-0 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0 text-base font-semibold truncate" placeholder="Add dates" type="text" />
                </div>
              </div>
              <div className="flex-1 w-full px-4 py-3 hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg transition-colors group cursor-pointer">
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Who?</label>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1a7a6a] text-[20px]">group</span>
                  <input className="w-full bg-transparent border-none p-0 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0 text-base font-semibold truncate" placeholder="Add guests" type="text" />
                </div>
              </div>
              <div className="p-2 w-full md:w-auto">
                <Link to="/tailor-made" className="w-full md:w-auto h-14 md:h-16 aspect-square bg-[#1a7a6a] hover:bg-[#1a7a6a]/90 text-white rounded-lg flex items-center justify-center shadow-lg transition-all duration-300">
                  <span className="material-symbols-outlined text-[28px]">search</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* Trending Destinations */}
        <section>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-epilogue text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Trending Destinations</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">Popular spots travelers are loving right now.</p>
            </div>
            <Link to="/collection" className="hidden md:flex items-center gap-1 text-[#1a7a6a] font-bold hover:underline">
              View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/collection" className="group relative block h-[480px] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBby-Z6oGTODfy-EEEBCiEXN9yPdR45M2XJoamUCg_zn0a-1TQjVuwxKmEyxOC7EQ2_VotOprDazExl6PH8tewyhtcS4g5aXvJ3zlfA2zetUBl085ZYKwQsnQzkgFWMaLchT0wLrs-IYnQpFkfqzN0Oo-AaFdoFB44DkUJ5tRd6JqdGXntsXJwumYAi7lwr8YBQzr_KIt0vMzuRVvqoPjyvvA-K3o9LU0vwlTdn0Y0p2ti7Ap1AkcWyt7pl8uCzaBE-HuQKSOQdNI')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-white bg-[#FF7F66]/90 rounded-full">Top Choice</span>
                <h3 className="font-epilogue text-3xl font-bold text-white mb-1">Da Nang</h3>
                <p className="text-white/80 font-medium">The City of Bridges</p>
              </div>
            </Link>
            <Link to="/blog" className="group relative block h-[480px] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuANpTW-gAjiPP1T1oSrK2gyVgreg-ELsuEY-moUdcM_Ov_Cdunz7zFiGEox5UWtDmqc3TWufJE5QlQSBs7RparMgQFYucheYT6TRGB5WzvCN9jaDttmogufqTEPdcYmR7Z0wH9YOj37pKce22NZBiZqaei2m-JrNX-34PgpHyXfqaEamHeY_ZfxORK9t2N76sPzavkIsy4C1n2w1dfz2lWlnOH_Yg1oVP35G868RbpqzOrPO_DteLE7cNoW6HjKkk242tGLucnN7zI')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="font-epilogue text-3xl font-bold text-white mb-1">Hoi An</h3>
                <p className="text-white/80 font-medium">Ancient Town Charm</p>
              </div>
            </Link>
            <Link to="/tailor-made" className="group relative block h-[480px] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBey03x0IQY5JHEwFFcPz8pjuq7LKi9-AJzFZllR0SyGGFyB9CtdgCPew6r2h13BjtNcUg73d9WNmvob-E-SSbqyb7sBeBo2l3hObScYk7YUP1PgO579JsriWX4JZfrEVDozs8qzfyDy68recVFKdnu9CWJRmzPxVrEXTKbIL_8gHwACcW1VdGmIBk__vxM73GJohH3bmZ2p5kJo0jKE_5EzLgjpJprx_NlEAG8NzRllfxBa_sxkq_9qjjC0n_HgDnhIQ-XQwuteSM')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-slate-900 bg-white/90 rounded-full">Adventure</span>
                <h3 className="font-epilogue text-3xl font-bold text-white mb-1">Sapa</h3>
                <p className="text-white/80 font-medium">The Roof of Indochina</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Curated Experiences */}
        <section>
          <div className="mb-8">
            <h2 className="font-epilogue text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Curated Experiences</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">Immerse yourself in the authentic culture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group bg-white dark:bg-[#1a2c28] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-800">
              <div className="aspect-[4/3] overflow-hidden">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4kgfKHb2NNrQvnNPhMD5UKmbPs_aVdCQJKuNA7BeKvUi4PM3aQLcasRJ26VISEua0N3An9d6zWYODvXKDbeAOyAmbJZvYutSlo3nLi3ETVPVmo7Q-EAKEwDpGnQQAnKiTrhsQ4GC-MhswX3bO6-ZFkPQTy12MaIBgzmIWew-sNpiDho3Hv83crI2Gq3D4m6j10ZUs4PVuyWHJIqJpTATUFDXZhhlYgbk0tDt7HzQAwNYHNNJhsxcNpGZwVoO_ZZ90KScRbryVyE0')" }}></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-[#1a7a6a]">
                  <span className="material-symbols-outlined text-[20px]">restaurant</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Culinary</span>
                </div>
                <h3 className="font-epilogue text-xl font-bold text-slate-900 dark:text-white mb-2">Street Food Tours</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">Taste the best Banh Mi and Pho in hidden alleys guided by locals.</p>
                <Link to="/wishlist" className="text-sm font-bold text-slate-900 dark:text-white underline decoration-2 decoration-[#1a7a6a]/50 hover:decoration-[#1a7a6a] transition-colors">Explore 12 Tours</Link>
              </div>
            </div>
            <div className="group bg-white dark:bg-[#1a2c28] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-800">
              <div className="aspect-[4/3] overflow-hidden">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9BHmJYHRPLzZgE13KKyrvUVvE4tcLZcA0XfnoCg_JyDYrhYayvYTURpuzXTtOV9rQ5khCdUEq--EdrgGy5ZxG-5nTBEwZ5ZYmgd93pasqWVFXw-Z77EqUgLtRUUu5rKUrPZuVNZLa7njjXM7zzNsVKTi0gCo5fPnOzmfEXmv2EZxyiRi8mCX4LM7kvNZlDsW15Ja5CUT4fYkEfrRe9io_1ARRh-rfs465wpMGnxg0Zv1R0e4iWSQg2zWqgGwk8vzul1W1q-NTE3A')" }}></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-[#1a7a6a]">
                  <span className="material-symbols-outlined text-[20px]">hiking</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Nature</span>
                </div>
                <h3 className="font-epilogue text-xl font-bold text-slate-900 dark:text-white mb-2">Nature & Trekking</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">Discover breathtaking waterfalls, caves, and jungle trails off the beaten path.</p>
                <Link to="/tailor-made" className="text-sm font-bold text-slate-900 dark:text-white underline decoration-2 decoration-[#1a7a6a]/50 hover:decoration-[#1a7a6a] transition-colors">Explore 8 Adventures</Link>
              </div>
            </div>
            <div className="group bg-white dark:bg-[#1a2c28] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-800">
              <div className="aspect-[4/3] overflow-hidden">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxCLQj1RWSYKV9PJU7S3nY6UQIQPUx_v3-8qIhYsZ96itJqSOlpFCzLfIb0cOLTjD09A_Zo8ZYU7rd__pr3HXuAySrh6iLBIZMhAMFFHpo2iR9ENDuBaYecUx-7Fr2Wt1RqcfYs2N3Gw3Y7gPc8yNi4CltUND9yMEmafZmL30GZf12PEQlub5CT7jM_vYez3fWOPggnKCnQAHSEafNNa9BpjBTjVkWqJRUlM2WZishyDOqWTG0RxGm6ZV8u6M-QIh0HTtVmVqoUD8')" }}></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-[#1a7a6a]">
                  <span className="material-symbols-outlined text-[20px]">sailing</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Relaxation</span>
                </div>
                <h3 className="font-epilogue text-xl font-bold text-slate-900 dark:text-white mb-2">Luxury Cruises</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">Overnight stays on 5-star cruises exploring the wonders of the bay.</p>
                <Link to="/product" className="text-sm font-bold text-slate-900 dark:text-white underline decoration-2 decoration-[#1a7a6a]/50 hover:decoration-[#1a7a6a] transition-colors">Explore 5 Cruises</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-[#1a2c28] border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="size-6 text-[#1a7a6a]">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                </div>
                <span className="font-epilogue font-bold text-xl text-slate-900 dark:text-white">VietMate</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Your trusted companion for discovering the hidden gems and vibrant culture of Vietnam.
              </p>
            </div>
            <div>
              <h4 className="font-epilogue font-bold text-slate-900 dark:text-white mb-4">Discover</h4>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li><Link to="/collection" className="hover:text-[#1a7a6a] transition-colors">Destinations</Link></li>
                <li><Link to="/wishlist" className="hover:text-[#1a7a6a] transition-colors">Tours & Activities</Link></li>
                <li><Link to="/blog" className="hover:text-[#1a7a6a] transition-colors">Travel Guides</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-epilogue font-bold text-slate-900 dark:text-white mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-[#1a7a6a] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#1a7a6a] transition-colors">Booking Policy</a></li>
                <li><a href="#" className="hover:text-[#1a7a6a] transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-epilogue font-bold text-slate-900 dark:text-white mb-4">Join our Newsletter</h4>
              <div className="flex gap-2">
                <input type="email" placeholder="Your email" className="flex-1 bg-[#f6f8f8] dark:bg-[#12201d] border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-[#1a7a6a] focus:border-[#1a7a6a] outline-none" />
                <button className="bg-[#1a7a6a] hover:bg-[#1a7a6a]/90 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2024 VietMate. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#1a7a6a]">Privacy Policy</a>
              <a href="#" className="hover:text-[#1a7a6a]">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;