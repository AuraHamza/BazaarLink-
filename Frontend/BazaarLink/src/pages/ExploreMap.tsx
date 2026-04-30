
export default function ExploreMap() {
  return (
    <div className="min-h-screen bg-gray-50">
      

<header className="bg-slate-900 backdrop-blur-md font-lexend antialiased fixed top-0 w-full z-50 border-b border-white/10 shadow-xl flex justify-between items-center px-8 h-16">
<div className="flex items-center gap-8">
<span className="text-2xl font-black tracking-tighter text-white">BazaarLink</span>
<nav className="hidden md:flex items-center gap-6">
<a className="text-slate-300 hover:text-white transition-colors" href="#">Map</a>
<a className="text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1" href="#">Markets</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#">Shops</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#">Categories</a>
</nav>
</div>
<div className="flex items-center gap-6">

<div className="flex bg-slate-800 rounded-lg p-1 mr-4">
<button className="flex items-center gap-2 px-3 py-1 bg-slate-700 text-white rounded-md text-sm font-medium">
<span className="material-symbols-outlined text-[18px]">map</span> Map
                </button>
<button className="flex items-center gap-2 px-3 py-1 text-slate-400 hover:text-white rounded-md text-sm font-medium">
<span className="material-symbols-outlined text-[18px]">grid_view</span> Grid
                </button>
</div>
<div className="flex items-center gap-4">
<button className="text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-white/5">Sign In</button>
<button className="bg-gradient-to-br from-secondary to-tertiary-fixed-dim text-white font-bold px-6 py-2 rounded-lg transition-all active:opacity-80 active:scale-95 shadow-lg shadow-secondary/20">Get Started</button>
</div>
</div>
</header>

<main className="pt-16 h-screen flex">

<aside className="w-[320px] flex-shrink-0 bg-white border-r border-outline-variant flex flex-col z-40 shadow-2xl">

<div className="p-5 border-b border-surface-variant space-y-4">
<h1 className="font-h3 text-h3 text-primary">Explore Karachi</h1>

<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all text-sm" placeholder="Search markets or areas..." type="text"/>
</div>

<div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white rounded-full text-[11px] font-bold whitespace-nowrap">
<span className="material-symbols-outlined text-[14px]">tune</span> Filters
                    </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-high text-on-surface rounded-full text-[11px] font-medium whitespace-nowrap border border-outline-variant">
                        Electronics <span className="material-symbols-outlined text-[14px] leading-none">close</span>
</button>
</div>

<div className="relative">
<select className="w-full appearance-none bg-white border border-outline-variant rounded-lg px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-secondary outline-none pr-10">
<option>All Categories</option>
<option>Textiles &amp; Apparel</option>
<option>Electronics &amp; Gadgets</option>
<option>Wholesale Spice</option>
<option>Jewelry</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
</div>

<div className="space-y-2">
<label className="text-[11px] uppercase tracking-wider font-bold text-outline">Popular Areas</label>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 bg-secondary/10 text-secondary rounded-md text-[11px] font-bold border border-secondary/20 cursor-pointer hover:bg-secondary/20">Saddar</span>
<span className="px-2.5 py-1 bg-surface-container-high text-on-surface-variant rounded-md text-[11px] font-medium border border-outline-variant cursor-pointer hover:bg-surface-variant">Liaquatabad</span>
<span className="px-2.5 py-1 bg-surface-container-high text-on-surface-variant rounded-md text-[11px] font-medium border border-outline-variant cursor-pointer hover:bg-surface-variant">DHA</span>
<span className="px-2.5 py-1 bg-surface-container-high text-on-surface-variant rounded-md text-[11px] font-medium border border-outline-variant cursor-pointer hover:bg-surface-variant">Clifton</span>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-surface-container-lowest">
<div className="text-[11px] text-outline px-1 uppercase tracking-widest font-bold">32 Markets Found</div>

<div className="group p-3 bg-white border border-outline-variant rounded-xl hover:border-secondary hover:shadow-md transition-all cursor-pointer">
<div className="flex gap-3">
<div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="bustling street market in Karachi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn0AeNsA_9vGIvINnbqyMm5HGRdyI4vjaoNxPffw0--oI4kWlASQ016hdbknAldva27Brx92sQmaVdpqLu8ceCtx1zjHQtm28ZHUfTFDFbxfLEZN_8CbycQ2bKWpMYC1Wzp3LbKbyBd2uWt9Ky42DRIQkHQx958WdbwcFmluEO6mzVTnS35mDkULhqZwdIp3dWr6Bx6wWSlwsRadKG_2rABFR6UCRZhZfgVMut4WyQfYO60o-D6l3a-__5DHSUbDuGgnoZMvnVKTw"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start">
<h4 className="font-bold text-primary truncate text-sm">Zainab Market</h4>
<span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase">Open</span>
</div>
<p className="text-[11px] text-on-surface-variant truncate">Saddar Town, Karachi</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-[10px] font-medium text-secondary flex items-center gap-0.5"><span className="material-symbols-outlined text-[14px]">storefront</span> 450 Shops</span>
<span className="text-[10px] font-medium text-on-tertiary-container flex items-center gap-0.5"><span className="material-symbols-outlined text-[14px]">star</span> 4.8</span>
</div>
</div>
</div>
</div>

<div className="group p-3 bg-white border border-outline-variant rounded-xl hover:border-secondary hover:shadow-md transition-all cursor-pointer">
<div className="flex gap-3">
<div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="overhead view of a textile market" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkpi8yn-7Hh-biTKeSNL-DEAz7ACgFVN6loAc6pJDPPiyazj_Jzpr8y2uYPy5AVcO1lCVjJU2Gjj2S35vOLf4KepH_ObbcqE-wcD-CBKYDz2zZtPodo3DFvpl6aDHIM99Yscbg4W09VeuQox-UIy-TIDalUhSaIf__P0lPFoCmjbhVhloZiZD1CCVwi38nfwyAV4opWMlYHZs20IztQAHCU8HFHm9EF-Ni57uA8843FpmVWllgN09MgL1RYWfRviKk39_jS-91FIk"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start">
<h4 className="font-bold text-primary truncate text-sm">Super Market</h4>
<span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase">Open</span>
</div>
<p className="text-[11px] text-on-surface-variant truncate">Liaquatabad, Karachi</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-[10px] font-medium text-secondary flex items-center gap-0.5"><span className="material-symbols-outlined text-[14px]">storefront</span> 1.2k Shops</span>
<span className="text-[10px] font-medium text-on-tertiary-container flex items-center gap-0.5"><span className="material-symbols-outlined text-[14px]">star</span> 4.5</span>
</div>
</div>
</div>
</div>

<div className="group p-3 bg-white border border-outline-variant rounded-xl hover:border-secondary hover:shadow-md transition-all cursor-pointer">
<div className="flex gap-3">
<div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="modern electronics market" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNBi0sC9s13ROYkVhbhAPwwgkMg4ecD-aFohwaixC6n84485CRiifATnzWlgxlnEkopiMzrxkeP64kZaS9mB_QWaeFHgRaQlW0CfEJslF57r4w-PQyjO9gp_1bKznUT_G1NpuEYgigKUsp8vXJiU1YQC4qYFEPYa0pO9E3Z_0wASI8CvrhS8wajNHaJBLjqAkEyxON6jrP2swEb1zBJMZYRd5zpuAFkz3LlUsRIWyWpv6r2iGseoT4owVVDkyzawlxVOo4FdD6LPc"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start">
<h4 className="font-bold text-primary truncate text-sm">Empress Market</h4>
<span className="bg-error-container text-error px-1.5 py-0.5 rounded text-[9px] font-bold uppercase">Closing</span>
</div>
<p className="text-[11px] text-on-surface-variant truncate">Saddar, Karachi</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-[10px] font-medium text-secondary flex items-center gap-0.5"><span className="material-symbols-outlined text-[14px]">storefront</span> 320 Shops</span>
<span className="text-[10px] font-medium text-on-tertiary-container flex items-center gap-0.5"><span className="material-symbols-outlined text-[14px]">star</span> 4.2</span>
</div>
</div>
</div>
</div>
</div>
</aside>

<section className="flex-1 relative bg-slate-900">

<div className="absolute top-6 left-6 z-30 flex items-center gap-2 bg-slate-800/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-2xl border border-white/10 font-medium text-xs text-white">
<a className="text-slate-400 hover:text-white" href="#">Karachi</a>
<span className="material-symbols-outlined text-[14px] text-slate-600">chevron_right</span>
<span className="text-cyan-400 font-bold">All Markets</span>
</div>

<div className="absolute inset-0 z-0 overflow-hidden bg-[#1a1c22]">
<img className="w-full h-full object-cover opacity-30 grayscale invert" data-alt="dark monochromatic stylized map of Karachi" data-location="Karachi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALnn8IDHpl7O1VITxOjXaULvpm0H9Zk2Gz--FwcManEN_epcBUHRz96J-HG4zGS3WAx3ZX6IihEUuym3d7sEoIKRLwhMhTdybtFObdDFzCaSXLrjjGLVO9eYOYvbqydCS-IU2HMtSexsH0fBjiVRbaWN4QqxCp1hfZznqyjVELLvWeNhAtdqovkQU1-hqQnq2TOJIH7Vn7L9hlbaamzHvEVzwr5P-vwJiZPEBVOD07KB082duK2wxnU03N0BWP7hrl5Fy-tjnCqTI"/>
<div className="absolute inset-0 map-gradient-overlay pointer-events-none"></div>
</div>


<div className="absolute top-[35%] left-[28%] z-10 group cursor-pointer">
<div className="relative">
<div className="absolute -top-1.5 -left-1.5 w-9 h-9 bg-cyan-500/30 rounded-full market-pulse"></div>
<span className="material-symbols-outlined text-cyan-400 text-4xl leading-none drop-shadow-lg" data-weight="fill">location_on</span>
</div>

<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 opacity-0 group-hover:opacity-100 transition-all scale-95 group-hover:scale-100 origin-bottom pointer-events-none group-hover:pointer-events-auto">
<div className="bg-white p-4 rounded-xl shadow-2xl border border-outline-variant overflow-hidden">
<div className="flex justify-between items-center mb-3">
<div>
<h5 className="text-sm font-bold text-primary">Zainab Market</h5>
<p className="text-[11px] text-on-surface-variant">Saddar, Fashion Hub</p>
</div>
<span className="w-2.5 h-2.5 bg-green-500 rounded-full ring-4 ring-green-100"></span>
</div>
<div className="flex gap-4 mb-4">
<div className="text-center flex-1 py-2 bg-surface-container-low rounded-lg">
<span className="block text-xs font-bold text-primary">450</span>
<span className="text-[10px] text-on-surface-variant">Shops</span>
</div>
<div className="text-center flex-1 py-2 bg-surface-container-low rounded-lg">
<span className="block text-xs font-bold text-primary">4.8</span>
<span className="text-[10px] text-on-surface-variant">Rating</span>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 text-xs bg-secondary text-white py-2.5 rounded-lg font-bold hover:bg-secondary/90 transition-colors">
                            View Market <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
</div>
</div>
</div>

<div className="absolute top-[62%] left-[45%] z-20 cursor-pointer">
<div className="relative">
<div className="absolute -top-2 -left-2 w-11 h-11 bg-cyan-400/40 rounded-full market-pulse"></div>
<span className="material-symbols-outlined text-cyan-400 text-5xl leading-none" data-weight="fill">location_on</span>
</div>

<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 opacity-100 scale-100 origin-bottom">
<div className="bg-white p-4 rounded-xl shadow-2xl border-2 border-cyan-400 overflow-hidden">
<div className="flex justify-between items-center mb-3">
<div>
<h5 className="text-sm font-bold text-primary">Empress Market</h5>
<p className="text-[11px] text-on-surface-variant">Saddar, Historic Landmark</p>
</div>
<span className="w-2.5 h-2.5 bg-error rounded-full ring-4 ring-error-container"></span>
</div>
<div className="flex gap-4 mb-4">
<div className="text-center flex-1 py-2 bg-surface-container-low rounded-lg">
<span className="block text-xs font-bold text-primary">320</span>
<span className="text-[10px] text-on-surface-variant">Shops</span>
</div>
<div className="text-center flex-1 py-2 bg-surface-container-low rounded-lg">
<span className="block text-xs font-bold text-primary">4.2</span>
<span className="text-[10px] text-on-surface-variant">Rating</span>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 text-xs bg-cyan-500 text-white py-2.5 rounded-lg font-bold hover:bg-cyan-600 transition-colors">
                            View Market <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-cyan-400"></div>
</div>
</div>
</div>

<div className="absolute bottom-10 right-8 z-30 flex flex-col gap-3">
<div className="bg-slate-800/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/10 flex flex-col overflow-hidden">
<button className="p-3.5 border-b border-white/5 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
<span className="material-symbols-outlined">add</span>
</button>
<button className="p-3.5 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
<span className="material-symbols-outlined">remove</span>
</button>
</div>
<button className="p-3.5 bg-slate-800/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/10 text-slate-300 hover:text-white hover:bg-slate-700 transition-all">
<span className="material-symbols-outlined">my_location</span>
</button>
<button className="p-3.5 bg-cyan-500 text-white rounded-xl shadow-2xl hover:bg-cyan-400 transition-all shadow-cyan-500/30">
<span className="material-symbols-outlined">layers</span>
</button>
</div>
</section>
</main>

    </div>
  );
}
