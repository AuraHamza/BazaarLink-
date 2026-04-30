
export default function ShopDetail() {
  return (
    <div className="min-h-screen bg-gray-50">
      

<header className="fixed top-0 w-full z-50 bg-slate-900/90 dark:bg-slate-950/95 backdrop-blur-md border-b border-white/10 shadow-xl font-lexend antialiased">
<div className="flex justify-between items-center px-8 h-16 w-full">
<div className="text-2xl font-black tracking-tighter text-white">BazaarLink</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-slate-300 hover:text-white transition-colors" href="#">Map</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#">Markets</a>
<a className="text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1" href="#">Shops</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#">Categories</a>
</nav>
<div className="flex items-center gap-4">
<button className="text-slate-300 hover:text-white font-medium text-sm">Sign In</button>
<button className="bg-gradient-to-r from-secondary to-tertiary-fixed-dim text-white px-5 py-2 rounded-lg font-bold text-sm shadow-lg hover:opacity-90 active:scale-95 transition-all">
                    Get Started
                </button>
</div>
</div>
</header>
<main className="pt-24 pb-20 max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">

<nav className="flex items-center gap-2 mb-8 text-label-sm text-on-surface-variant font-label-sm uppercase">
<a className="hover:text-secondary" href="#">Home</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<a className="hover:text-secondary" href="#">Market</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-bold">Heritage Spices &amp; Co.</span>
</nav>

<section className="bg-surface-container-lowest rounded-xl p-8 mb-12 border border-outline-variant flex flex-col md:flex-row gap-8 items-start md:items-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32"></div>
<div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-outline-variant flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="close-up of vibrant traditional Pakistani spice market stall with colorful mounds of turmeric and chili powder" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt1aNMkADbBrm-fMyeBwg9aAnEigdVY3b7y0ShomPKRpV4fd4NV2d7cA48SctP-1Mr8rJ5sGvkYEUHUpT_ybaPzvILnyp3ruyl4obk7GVaYyhW1j7q8WaN0JeF8X36804J2rO0qSuwkpIqOrjgGwsYHsXt9GfFBnDFR1fg6svHHI4t9DZIj_aOZRc71AnnCOQzgfpC2C8eotnI1B16OTH_Ml4YzbrQkQJZXLsaZLrEb-Hf9g-XUBCzdbhNjJ1SabuIAZrhGEyAnBc"/>
</div>
<div className="flex-grow">
<div className="flex items-center gap-3 mb-2">
<h1 className="font-h1 text-h2 text-primary">Heritage Spices &amp; Co.</h1>
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-label-sm font-label-sm uppercase tracking-wider">Gourmet Food</span>
</div>
<div className="flex items-center gap-6 text-on-surface-variant">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-amber-500" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="font-bold text-on-surface">4.9</span>
<span className="text-label-sm">(1,240 Reviews)</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">location_on</span>
<span className="text-body-md">Empress Market, Karachi</span>
</div>
</div>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-6 py-3 border-2 border-tertiary-fixed-dim text-on-tertiary-container font-bold rounded-lg hover:bg-tertiary-fixed/10 transition-colors">
<span className="material-symbols-outlined">favorite</span>
                    Add to Favourites
                </button>
<button className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-bold rounded-lg hover:opacity-90 transition-all">
<span className="material-symbols-outlined">share</span>
                    Share
                </button>
</div>
</section>
<div className="flex flex-col lg:flex-row gap-gutter">

<aside className="w-full lg:w-72 flex-shrink-0">
<div className="sticky top-24 bg-surface-container-low border border-outline-variant rounded-xl p-6">
<h3 className="font-h3 text-h3 text-primary mb-6">Filters</h3>
<div className="mb-8">
<label className="block font-label-sm text-on-surface-variant mb-3 uppercase tracking-widest">Category</label>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked={true} className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox"/>
<span className="text-body-md group-hover:text-primary transition-colors">Whole Spices</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox"/>
<span className="text-body-md group-hover:text-primary transition-colors">Ground Powders</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox"/>
<span className="text-body-md group-hover:text-primary transition-colors">Gift Sets</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox"/>
<span className="text-body-md group-hover:text-primary transition-colors">Oils &amp; Infusions</span>
</label>
</div>
</div>
<div className="mb-8">
<label className="block font-label-sm text-on-surface-variant mb-3 uppercase tracking-widest">Price Range (PKR)</label>
<input className="w-full h-2 bg-outline-variant rounded-lg appearance-none cursor-pointer accent-secondary" max="10000" min="100" type="range"/>
<div className="flex justify-between mt-2 text-label-sm font-label-sm text-on-surface-variant">
<span>100</span>
<span>10,000+</span>
</div>
</div>
<div className="mb-8">
<label className="block font-label-sm text-on-surface-variant mb-3 uppercase tracking-widest">Sort By</label>
<select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-2 text-body-md outline-none focus:border-secondary">
<option>Popularity</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
<option>Newest Arrival</option>
</select>
</div>
<button className="w-full py-3 bg-surface-container-highest text-primary font-bold rounded-lg border border-outline-variant hover:bg-outline-variant/20 transition-colors">
                        Reset All
                    </button>
</div>
</aside>

<div className="flex-grow">
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden product-card-shadow group">
<div className="relative h-56 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="overhead shot of premium whole black peppercorns in a wooden bowl with sharp focus and cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9wY_L1g79U-_53T2vGILNprcFmOVqwWZguIbIsZMpAz_6kkdyHhRnQ4Q-zZPdr72uk60FPgth3Yf2-U1-kgcB555UtCC-qldalGUBNhJpPQ63GSjrD8pTXKgIqleVAIwsjR148KtdKHWdj9PsVdjY9j4nfRcQ4Rdvq2BX7UDAIG5eoOO8w2prR87UUylajojndltbaswxH6h4p1vdvmVBt0fF0HZtuUDefrgLXRDUTRY3jVPcIN1WaNMaPxNWB3xQU8BEplHuifU"/>
<div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">Bestseller</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h4 className="font-h3 text-body-lg text-primary">Malabar Black Peppercorns</h4>
<span className="font-h2 text-h3 text-secondary">Rs. 850</span>
</div>
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-label-sm text-emerald-600 uppercase font-bold tracking-widest">In Stock</span>
</div>
<button className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-secondary to-primary-container text-white font-bold rounded-lg hover:opacity-90 transition-all">
<span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                                Add to Cart
                            </button>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden product-card-shadow group">
<div className="relative h-56 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="hand-picked organic saffron threads in a small glass jar with bright natural lighting on a clean background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApwHbNWSle9pBbpL4Tlc7usP5_itFVNElDVlyt0IbcnSsNL04Ay-Hxb6iXhSOQsuah1K31-QlSFHBUlUBCETvoUInqjIdITQKy1Uv6hVaV21rYHqTSNJq9BYSKi0bez6sRaIC8Ak1sMrVmSzFqStVzSC37EhDieP-UbAMDXxcEdumh7K_UH6utSVRANKWN6ypP11MmN2zBGkmFnGYMdb8P7KhPOegwnP9BwywrRgg6dqnCCsmCjxcJlLrbs8b0icSFOBlHPtZc1HU"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h4 className="font-h3 text-body-lg text-primary">Organic Kashmiri Saffron</h4>
<span className="font-h2 text-h3 text-secondary">Rs. 2,400</span>
</div>
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-label-sm text-emerald-600 uppercase font-bold tracking-widest">In Stock</span>
</div>
<button className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-secondary to-primary-container text-white font-bold rounded-lg hover:opacity-90 transition-all">
<span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                                Add to Cart
                            </button>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden product-card-shadow group opacity-80">
<div className="relative h-56 overflow-hidden grayscale">
<img className="w-full h-full object-cover" data-alt="powdered star anise and cinnamon sticks on a rustic dark surface with moody atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Otjpz87sNEZZECflyzmipqA4v_24Q5XidWXdVnpXLstCWNe-WqxtRkFpRZcLYWZglzBYdxaw871G3XyHgaiRrFDQqpecFen9FE2No5RToNBMGOjfP94qi5bih6d5NZd5o31sR10uXt_EwKmWnXoUccf5AM6uSm8sylWVII-kScekmNpDxEGnBLq0BgMRxPNZy8b3nxplMc0Ac5qRoIHJZzMzpmAGMlRd0fkPZdozpPTpnuNgJFCtkbveQd4JT3DyIvof9HZUrkE"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
<span className="text-white font-bold uppercase tracking-[0.2em] text-label-sm border border-white px-4 py-2">Out of Stock</span>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h4 className="font-h3 text-body-lg text-on-surface-variant">Heritage Garam Masala</h4>
<span className="font-h2 text-h3 text-on-surface-variant">Rs. 450</span>
</div>
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-error"></span>
<span className="text-label-sm text-error uppercase font-bold tracking-widest">Sold Out</span>
</div>
<button className="w-full py-3 bg-surface-variant text-on-surface-variant font-bold rounded-lg cursor-not-allowed" disabled={true}>
                                Notify Me
                            </button>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden product-card-shadow group">
<div className="relative h-56 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="vibrant green cardamom pods spilling out of a woven pouch with soft shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKeSjGLdc9mTXqBMXIAibPAdaOkOuxodDefJ554K6cgKM2T-4H8ARRvvftKDqy7uaEp0_U1WT0JH_97CQMOCvEua952f26597Vhz_m05SNTi-uzzpXsC4H5JOwcffyGpIWmpau30HD__ihb5TjYnOejxxMVDIJb3MM2LfsV30_vYFbu3NL044s7_5of-S_kk6P4D4K3E__sKOimyvdBzJ7rb4OE1APiSWs4P0jL6iH4Qsrh_DwhCgJUUK29C2wDqh7SZpPeIP9OF0"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h4 className="font-h3 text-body-lg text-primary">Green Cardamom Pods</h4>
<span className="font-h2 text-h3 text-secondary">Rs. 1,200</span>
</div>
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-label-sm text-emerald-600 uppercase font-bold tracking-widest">In Stock</span>
</div>
<button className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-secondary to-primary-container text-white font-bold rounded-lg hover:opacity-90 transition-all">
<span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                                Add to Cart
                            </button>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden product-card-shadow group">
<div className="relative h-56 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="fine bright yellow turmeric powder in a ceramic bowl with professional studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9TM5NRWSMMb2V32ZtiUoeW2WNMNtj74iVfIHHrHmPOMjmptNYF-tfyp-pTh9EhKWlJio4XYSCltxPkrxI3boB4VJHukAKg6psxGqy-Xos6ZFOfM3GcXMxgc4SSDz1n6da0DZ780Pf1h4VJu_euBxbsfKmUSgL-WNjYj6muTl8daZaIOiRgDYI14gB6C4CPyutrAIVxOy5WfGWRWlJmXHG4HEiN6DKg0XSrmmiVHnGFdxD8Gc9UA7dFYCFfozHYc2OsIzPFlRXvzw"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h4 className="font-h3 text-body-lg text-primary">Pure Lakadong Turmeric</h4>
<span className="font-h2 text-h3 text-secondary">Rs. 600</span>
</div>
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-label-sm text-emerald-600 uppercase font-bold tracking-widest">In Stock</span>
</div>
<button className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-secondary to-primary-container text-white font-bold rounded-lg hover:opacity-90 transition-all">
<span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                                Add to Cart
                            </button>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden product-card-shadow group">
<div className="relative h-56 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="aromatic whole cloves in a vintage metal dish with dark moody lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFjA_g7GN_YqcvQ2d_ljtBYN48v7EnrrOggnGtE3oqkO17olSv9SlM-M4RBB-kGjPNh9b81ZlwD4BEAgrrPzXSRRKK9MhnBJjhNbvGSI5b3Uh82v7VcQ5qfy0IigT-gZ7tQ-72FtMqdjwmxUjZdwEiw4MOm_5cNoLXcTTFpv97FFInwfHJbgTzbrlmFZQZKgxLFUIGQqz26vxEv4Sva9qmf78i0KaPhtS4JEVZB56vrMFaBNLwICZaieU8qJzYMicFfvjItVLcIgc"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h4 className="font-h3 text-body-lg text-primary">Premium Whole Cloves</h4>
<span className="font-h2 text-h3 text-secondary">Rs. 580</span>
</div>
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-label-sm text-emerald-600 uppercase font-bold tracking-widest">In Stock</span>
</div>
<button className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-secondary to-primary-container text-white font-bold rounded-lg hover:opacity-90 transition-all">
<span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                                Add to Cart
                            </button>
</div>
</div>
</div>
</div>
</div>

<section className="mt-section-gap">
<div className="flex items-center justify-between mb-10">
<h2 className="font-h2 text-h2 text-primary">Customer Reviews</h2>
<button className="text-secondary font-bold hover:underline">Write a Review</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

<div className="bg-primary text-on-primary rounded-xl p-8 flex flex-col items-center justify-center text-center">
<span className="text-[64px] font-black tracking-tighter mb-2">4.9</span>
<div className="flex items-center gap-1 mb-4">
<span className="material-symbols-outlined text-amber-400 text-[32px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-amber-400 text-[32px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-amber-400 text-[32px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-amber-400 text-[32px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-amber-400 text-[32px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
</div>
<p className="text-body-lg text-primary-fixed-dim">Based on 1,240 verified purchases from the Karachi area.</p>
</div>

<div className="lg:col-span-2 space-y-8">

<div className="border-b border-outline-variant pb-8">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold">AK</div>
<div>
<h4 className="font-h3 text-body-lg text-primary">Ahmed Khan</h4>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="text-label-sm text-on-surface-variant ml-2">2 days ago</span>
</div>
</div>
</div>
</div>
<p className="text-body-md text-on-surface-variant leading-relaxed">The quality of the Malabar peppercorns is exceptional. You can immediately smell the difference compared to supermarket brands. Fast delivery to Gulshan area too!</p>
</div>

<div className="border-b border-outline-variant pb-8">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container font-bold">SM</div>
<div>
<h4 className="font-h3 text-body-lg text-primary">Sara Malik</h4>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
<span className="text-label-sm text-on-surface-variant ml-2">1 week ago</span>
</div>
</div>
</div>
</div>
<p className="text-body-md text-on-surface-variant leading-relaxed">Heritage Spices never disappoints. Their saffron is the real deal—deep color and amazing aroma. This is my go-to shop on BazaarLink for all my gourmet cooking needs.</p>
</div>
<button className="w-full py-4 text-secondary font-bold flex items-center justify-center gap-2 hover:bg-secondary/5 rounded-lg transition-colors">
                        View All 1,240 Reviews
                        <span className="material-symbols-outlined">expand_more</span>
</button>
</div>
</div>
</section>
</main>

<footer className="w-full mt-auto bg-slate-900 dark:bg-black border-t border-slate-800 font-lexend text-xs uppercase tracking-widest transition-opacity duration-300">
<div className="flex flex-col md:flex-row justify-between items-center px-12 py-8 gap-4">
<div className="text-lg font-bold text-white">BazaarLink</div>
<div className="flex gap-8 text-slate-500">
<a className="hover:text-cyan-400 hover:underline underline-offset-4" href="#">Team Credits</a>
<a className="hover:text-cyan-400 hover:underline underline-offset-4" href="#">Tech Stack</a>
<a className="hover:text-cyan-400 hover:underline underline-offset-4" href="#">API Documentation</a>
<a className="hover:text-cyan-400 hover:underline underline-offset-4" href="#">Support</a>
</div>
<p className="text-slate-400 text-center md:text-right normal-case tracking-normal max-w-xs">
                © 2024 BazaarLink. Bridging Karachi's commerce with precision technology.
            </p>
</div>
</footer>

    </div>
  );
}
