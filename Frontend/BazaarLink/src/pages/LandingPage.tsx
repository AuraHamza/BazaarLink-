
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      

<nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10 shadow-xl flex justify-between items-center px-8 h-16 font-lexend">
<div className="flex items-center gap-8">
<span className="text-2xl font-black tracking-tighter text-white">BazaarLink</span>
<div className="hidden md:flex gap-6">
<a className="text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1" href="#">Map</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#">Markets</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#">Shops</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#">Categories</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-slate-300 hover:text-white transition-colors px-4 py-2 font-medium">Sign In</button>
<button className="bg-secondary text-white px-6 py-2 rounded-lg font-bold hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-secondary/20">Get Started</button>
</div>
</nav>
<main>

<section className="pt-32 pb-20 bg-primary relative overflow-hidden">
<div className="absolute inset-0 hero-gradient"></div>
<div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="space-y-8">
<h1 className="font-lexend text-5xl md:text-6xl font-bold text-white leading-tight">
                    Shop Local Markets <br/>
<span className="bg-gradient-to-r from-on-tertiary-container to-cyan-400 bg-clip-text text-transparent">From Anywhere</span>
</h1>
<p className="text-lg text-slate-300 max-w-xl">
                    Karachi's first geospatial commerce platform bridging the gap between traditional bazaars and modern logistics. Discover authentic shops with precision navigation.
                </p>
<div className="flex flex-wrap gap-4">
<button className="bg-gradient-to-br from-secondary to-on-tertiary-container text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:shadow-xl transition-all">
                        Explore Markets <span className="material-symbols-outlined">explore</span>
</button>
<button className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                        For Vendors
                    </button>
</div>
<div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
<div>
<p className="text-3xl font-bold text-white">12+</p>
<p className="text-slate-400 text-xs uppercase tracking-widest">Markets</p>
</div>
<div>
<p className="text-3xl font-bold text-white">400+</p>
<p className="text-slate-400 text-xs uppercase tracking-widest">Shops</p>
</div>
<div>
<p className="text-3xl font-bold text-white">5K+</p>
<p className="text-slate-400 text-xs uppercase tracking-widest">Products</p>
</div>
</div>
</div>

<div className="relative bg-[#0d1b37] rounded-3xl p-4 border border-white/10 shadow-2xl overflow-hidden aspect-square">
<div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'url("https', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'invert(1) hue-rotate(180deg) brightness(0.8)' }}></div>

<div className="absolute top-1/4 left-1/3 group cursor-pointer">
<div className="absolute -inset-3 bg-cyan-400/30 rounded-full animate-ping"></div>
<div className="relative bg-cyan-400 p-2 rounded-full shadow-lg"><span className="material-symbols-outlined text-white text-[16px]">location_on</span></div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap">Saddar Bazaar</div>
</div>

<div className="absolute top-1/2 left-1/4 group cursor-pointer">
<div className="absolute -inset-3 bg-secondary/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
<div className="relative bg-secondary p-2 rounded-full shadow-lg"><span className="material-symbols-outlined text-white text-[16px]">storefront</span></div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap">Bohri Bazaar</div>
</div>

<div className="absolute top-1/3 right-1/3 group cursor-pointer">
<div className="absolute -inset-3 bg-purple-500/30 rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>
<div className="relative bg-purple-500 p-2 rounded-full shadow-lg"><span className="material-symbols-outlined text-white text-[16px]">devices</span></div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap">Hafeez Centre</div>
</div>

<div className="absolute bottom-1/3 right-1/4 group cursor-pointer">
<div className="absolute -inset-3 bg-orange-500/30 rounded-full animate-ping" style={{ animationDelay: '1.2s' }}></div>
<div className="relative bg-orange-500 p-2 rounded-full shadow-lg"><span className="material-symbols-outlined text-white text-[16px]">restaurant</span></div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap">Burns Road</div>
</div>

<div className="absolute bottom-1/4 left-1/2 group cursor-pointer">
<div className="absolute -inset-3 bg-green-500/30 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
<div className="relative bg-green-500 p-2 rounded-full shadow-lg"><span className="material-symbols-outlined text-white text-[16px]">inventory_2</span></div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap">Jodia Bazaar</div>
</div>
<div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-cyan-400/20 flex items-center justify-center text-cyan-400">
<span className="material-symbols-outlined">my_location</span>
</div>
<div>
<p className="text-white text-sm font-bold">Live Scanning</p>
<p className="text-slate-400 text-xs">District South, Karachi</p>
</div>
</div>
<div className="h-2 w-24 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-cyan-400 rounded-full w-2/3"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface">
<div className="max-w-[1280px] mx-auto px-8">
<div className="text-center mb-16">
<span className="text-secondary font-bold uppercase tracking-widest text-sm">Our Process</span>
<h2 className="font-lexend text-4xl text-primary mt-4 font-bold">How It Works</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="bg-white p-8 rounded-2xl border border-outline-variant hover:shadow-2xl transition-all group">
<div className="w-16 h-16 bg-blue-50 text-blue-600 flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl">map</span>
</div>
<h3 className="text-2xl font-bold text-primary mb-4">1. Find Market</h3>
<p className="text-on-surface-variant leading-relaxed">Use our interactive map to discover historic and specialty markets across Karachi with precision geolocation.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-outline-variant hover:shadow-2xl transition-all group">
<div className="w-16 h-16 bg-cyan-50 text-cyan-600 flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl">grid_view</span>
</div>
<h3 className="text-2xl font-bold text-primary mb-4">2. Browse Shops</h3>
<p className="text-on-surface-variant leading-relaxed">Enter virtual storefronts of real physical shops. Explore live inventories and compare prices across the bazaar.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-outline-variant hover:shadow-2xl transition-all group">
<div className="w-16 h-16 bg-green-50 text-green-600 flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl">shopping_cart_checkout</span>
</div>
<h3 className="text-2xl font-bold text-primary mb-4">3. Place Order</h3>
<p className="text-on-surface-variant leading-relaxed">Consolidate items from multiple shops in one order and have them delivered to your doorstep within hours.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface-container-low">
<div className="max-w-[1280px] mx-auto px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="font-lexend text-4xl font-bold text-primary">Browse Markets</h2>
<p className="text-on-surface-variant mt-2 text-lg">Karachi's commercial hubs at your fingertips</p>
</div>
<div className="flex gap-2 p-1 bg-surface-container-highest rounded-xl overflow-x-auto">
<button className="px-6 py-2 bg-white rounded-lg shadow-sm font-bold text-secondary">All Areas</button>
<button className="px-6 py-2 text-on-surface-variant hover:bg-white/50 rounded-lg transition-all font-medium">South</button>
<button className="px-6 py-2 text-on-surface-variant hover:bg-white/50 rounded-lg transition-all font-medium">East</button>
<button className="px-6 py-2 text-on-surface-variant hover:bg-white/50 rounded-lg transition-all font-medium">Central</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl overflow-hidden border border-outline-variant hover:border-secondary transition-all group">
<div className="h-56 overflow-hidden relative">
<img alt="Saddar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbQemGcwJh8jzTP8IEuYGVtfGv3n3fxb_pnkYEQ126b2hiL5y4tKyhzOMxMZFCdDQs0DMezATC_WWayd3POGShdze-Z7kNKiTExesTnb_sAPZUYyM1pkYZwPwIdNZRXRl7Z2OHGK9CS6DVREGCx7VGB-SnpcymjmCHsYkMaoUZ8d6wSQkmQH1_aleIApEvwvbdT-7eA9s9sTBiEYlYJLfZF6AoCgaYBr2WpRWO6tQmA2blhDmBPbwl-Vz7WCTUByYo0TeelJpza0U"/>
<div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-lg">
<span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> OPEN NOW
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h4 className="text-xl font-bold text-primary">Saddar Bazaar</h4>
<div className="flex items-center gap-1 bg-orange-50 text-orange-600 px-2 py-0.5 rounded text-xs font-bold">
<span className="material-symbols-outlined text-sm">star</span> 4.8
                            </div>
</div>
<p className="text-on-surface-variant text-sm mb-4">District South • Apparel &amp; Electronics</p>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant">
<span className="text-xs font-bold text-slate-400">120+ ACTIVE SHOPS</span>
<button className="text-secondary font-bold text-sm flex items-center gap-1 hover:underline">Explore <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
</div>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden border border-outline-variant hover:border-secondary transition-all group">
<div className="h-56 overflow-hidden relative">
<img alt="Bohri" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtJwWR0r3PAK3rXUT2uf08YQW__W1fflctNBPE3jEH7z1Br8f86N3Zpb2zL5-5tGpHWL0Gm3rW6Bya4llNURBbJnU14l2qJPhno-C50QnPKb1qhw3SNWX62Ta4RJIKhvVd_ER34OxuwBE2lEPSxlyf_VNBK2Dmj6jczl5n7TnJBvDpjJyEQvs8i56PlttGXBkYBK3ETrbwsSA19-tnK1qgYbiJpkvcstDAVoLRXaJ-Ryq7-e4CzyvR2X9Rv0VoNoPssv5JMV6MvMo"/>
<div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-lg">
<span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> OPEN NOW
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h4 className="text-xl font-bold text-primary">Bohri Bazaar</h4>
<div className="flex items-center gap-1 bg-orange-50 text-orange-600 px-2 py-0.5 rounded text-xs font-bold">
<span className="material-symbols-outlined text-sm">star</span> 4.9
                            </div>
</div>
<p className="text-on-surface-variant text-sm mb-4">Empress Market • Handicrafts &amp; Home</p>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant">
<span className="text-xs font-bold text-slate-400">85+ ACTIVE SHOPS</span>
<button className="text-secondary font-bold text-sm flex items-center gap-1 hover:underline">Explore <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
</div>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden border border-outline-variant hover:border-secondary transition-all group">
<div className="h-56 overflow-hidden relative">
<img alt="Jackson" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPnm28B-5u6Y5KmRBbW2yr6sXsbnGyeEkLV7_ZuZWAK_49iEru4loEfCDY97QoitSPdmz-2DJ1qxpBb39REfcCHnOzT9OR6bqm4j-rr9EEowdU4wh1y3I_iv--Dq2QIS_t37KSDX870_-09G5d7uPh3CiLqFFqCMqb2RnAWSEu3tbjsk-IyObAQUKncHuwuO7ZqpeE-6STyQdZemXTKNOTjGDv8Ot_tXilgNVMazLuHWkcF5MUXYbuaoXAIJJs6nIiLnUW4MquFZ4"/>
<div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-lg">
<span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> OPEN NOW
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h4 className="text-xl font-bold text-primary">Jackson Market</h4>
<div className="flex items-center gap-1 bg-orange-50 text-orange-600 px-2 py-0.5 rounded text-xs font-bold">
<span className="material-symbols-outlined text-sm">star</span> 4.6
                            </div>
</div>
<p className="text-on-surface-variant text-sm mb-4">Keamari • Electronics &amp; Tech</p>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant">
<span className="text-xs font-bold text-slate-400">60+ ACTIVE SHOPS</span>
<button className="text-secondary font-bold text-sm flex items-center gap-1 hover:underline">Explore <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
</div>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden border border-outline-variant hover:border-secondary transition-all group">
<div className="h-56 overflow-hidden relative">
<img alt="Zainab" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1j3wOwh2jJLb-53lskGb4an0tLSb4COIoMfgEQZv-GR5YBSN_CHcpEzEhG_ZhRZQkVOcgtUDMBDs6OlKnKu2ZrSrhoOX6oK_oEYpwzxtbO1U3gaJ2pL7qZInDP_otZHxtTVbcDSNnevHmRuXHKMtB8cQq-EJd5uYIChgT1H4rJ6Uc2ubjGCMkpjThayA-fPNOmLFz0QcAwLsdKq09vVz8hdXBzCG24VdWwI1g1Um1gocxxJ1g9Ly4rQeM1w3Au7fUeiXDaqcayIg"/>
<div className="absolute top-4 right-4 bg-slate-400 text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-lg">
                            CLOSED
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h4 className="text-xl font-bold text-primary">Zainab Market</h4>
<div className="flex items-center gap-1 bg-orange-50 text-orange-600 px-2 py-0.5 rounded text-xs font-bold">
<span className="material-symbols-outlined text-sm">star</span> 4.7
                            </div>
</div>
<p className="text-on-surface-variant text-sm mb-4">M.A Jinnah Road • Export Quality Apparel</p>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant">
<span className="text-xs font-bold text-slate-400">150+ ACTIVE SHOPS</span>
<button className="text-secondary font-bold text-sm flex items-center gap-1 hover:underline">Explore <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
</div>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden border border-outline-variant hover:border-secondary transition-all group">
<div className="h-56 overflow-hidden relative">
<div className="w-full h-full bg-slate-200 flex items-center justify-center">
<span className="material-symbols-outlined text-6xl text-slate-400">computer</span>
</div>
<div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-lg">
<span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> OPEN NOW
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h4 className="text-xl font-bold text-primary">Hafeez Centre</h4>
<div className="flex items-center gap-1 bg-orange-50 text-orange-600 px-2 py-0.5 rounded text-xs font-bold">
<span className="material-symbols-outlined text-sm">star</span> 4.5
                            </div>
</div>
<p className="text-on-surface-variant text-sm mb-4">Gulberg Area • IT &amp; Smartphones</p>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant">
<span className="text-xs font-bold text-slate-400">300+ ACTIVE SHOPS</span>
<button className="text-secondary font-bold text-sm flex items-center gap-1 hover:underline">Explore <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
</div>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden border border-outline-variant hover:border-secondary transition-all group">
<div className="h-56 overflow-hidden relative">
<div className="w-full h-full bg-slate-200 flex items-center justify-center">
<span className="material-symbols-outlined text-6xl text-slate-400">restaurant</span>
</div>
<div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-lg">
<span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> OPEN NOW
                        </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h4 className="text-xl font-bold text-primary">Burns Road</h4>
<div className="flex items-center gap-1 bg-orange-50 text-orange-600 px-2 py-0.5 rounded text-xs font-bold">
<span className="material-symbols-outlined text-sm">star</span> 4.9
                            </div>
</div>
<p className="text-on-surface-variant text-sm mb-4">Saddar • Historic Food Street</p>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant">
<span className="text-xs font-bold text-slate-400">45+ ACTIVE SHOPS</span>
<button className="text-secondary font-bold text-sm flex items-center gap-1 hover:underline">Explore <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16">
<div className="max-w-[1280px] mx-auto px-8">
<div className="bg-primary rounded-3xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
<div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
<div className="relative z-10 text-center md:text-left">
<h2 className="text-3xl font-bold text-white mb-4">List Your Shop</h2>
<p className="text-slate-300 text-lg max-w-md">Reach thousands of customers across Karachi and digitalize your physical inventory in minutes.</p>
</div>
<div className="relative z-10">
<button className="bg-gradient-to-r from-secondary to-on-tertiary-container text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all whitespace-nowrap">
                        Join as Vendor
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface">
<div className="max-w-[1280px] mx-auto px-8">
<div className="text-center mb-16">
<h2 className="font-lexend text-4xl font-bold text-primary">An Integrated Ecosystem</h2>
<p className="text-on-surface-variant mt-4 max-w-2xl mx-auto text-lg">One platform, four specialized experiences tailored for urban commerce.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 hover:shadow-xl transition-all">
<div className="w-14 h-14 bg-blue-600 text-white flex items-center justify-center rounded-2xl mb-6">
<span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
</div>
<h3 className="text-xl font-bold text-blue-900 mb-3">Platform Admin</h3>
<p className="text-blue-700/70 text-sm leading-relaxed mb-6">High-level oversight of all city markets, merchant verifications, and global logistical data.</p>
<button className="text-blue-600 font-bold text-sm hover:underline">Launch Dashboard</button>
</div>

<div className="bg-green-50/50 p-8 rounded-3xl border border-green-100 hover:shadow-xl transition-all">
<div className="w-14 h-14 bg-green-600 text-white flex items-center justify-center rounded-2xl mb-6">
<span className="material-symbols-outlined text-3xl">domain</span>
</div>
<h3 className="text-xl font-bold text-green-900 mb-3">Market Admin</h3>
<p className="text-green-700/70 text-sm leading-relaxed mb-6">Manage a specific market area, coordinate with shop owners, and optimize pedestrian flow maps.</p>
<button className="text-green-600 font-bold text-sm hover:underline">Manage District</button>
</div>

<div className="bg-purple-50/50 p-8 rounded-3xl border border-purple-100 hover:shadow-xl transition-all">
<div className="w-14 h-14 bg-purple-600 text-white flex items-center justify-center rounded-2xl mb-6">
<span className="material-symbols-outlined text-3xl">storefront</span>
</div>
<h3 className="text-xl font-bold text-purple-900 mb-3">Shop Admin</h3>
<p className="text-purple-700/70 text-sm leading-relaxed mb-6">Digitalize your physical inventory, manage orders, and connect with customers city-wide.</p>
<button className="text-purple-600 font-bold text-sm hover:underline">Vendor Portal</button>
</div>

<div className="bg-orange-50/50 p-8 rounded-3xl border border-orange-100 hover:shadow-xl transition-all">
<div className="w-14 h-14 bg-orange-600 text-white flex items-center justify-center rounded-2xl mb-6">
<span className="material-symbols-outlined text-3xl">person</span>
</div>
<h3 className="text-xl font-bold text-orange-900 mb-3">Customer</h3>
<p className="text-orange-700/70 text-sm leading-relaxed mb-6">Seamless shopping experience with integrated map navigation and authentic local product discovery.</p>
<button className="text-orange-600 font-bold text-sm hover:underline">Start Shopping</button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-900 text-white px-12 py-12 font-lexend">
<div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="flex flex-col gap-4">
<span className="text-2xl font-black tracking-tighter">BazaarLink</span>
<p className="text-slate-400 max-w-sm normal-case text-sm leading-relaxed">
                Bridging Karachi's traditional commerce with precision technology for a seamless urban shopping experience.
            </p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white/5 text-slate-400 rounded text-[10px] border border-white/10 uppercase tracking-widest">React</span>
<span className="px-2 py-1 bg-white/5 text-slate-400 rounded text-[10px] border border-white/10 uppercase tracking-widest">Leaflet JS</span>
<span className="px-2 py-1 bg-white/5 text-slate-400 rounded text-[10px] border border-white/10 uppercase tracking-widest">Node.js</span>
<span className="px-2 py-1 bg-white/5 text-slate-400 rounded text-[10px] border border-white/10 uppercase tracking-widest">PostgreSQL</span>
</div>
</div>
<div className="flex flex-col md:items-end gap-6">
<div className="flex flex-wrap gap-6 text-sm">
<a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#">Team Credits</a>
<a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#">Tech Stack</a>
<a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#">API Docs</a>
<a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#">Support</a>
</div>
<div className="text-[11px] text-slate-500 uppercase tracking-widest flex flex-wrap gap-x-4 gap-y-2 md:justify-end">
<span>Abdul Rafay Ansari</span>
<span className="hidden md:inline">•</span>
<span>Hamza Salahuddin</span>
<span className="hidden md:inline">•</span>
<span>M. Shahzain Khan</span>
</div>
<p className="text-slate-600 text-xs mt-4">© 2024 BazaarLink. All rights reserved.</p>
</div>
</div>
</footer>

    </div>
  );
}
