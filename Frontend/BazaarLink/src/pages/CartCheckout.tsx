
export default function CartCheckout() {
  return (
    <div className="min-h-screen bg-gray-50">
      

<header className="bg-slate-900/90 backdrop-blur-md font-lexend antialiased fixed top-0 w-full z-50 border-b border-white/10 shadow-xl">
<div className="flex justify-between items-center px-8 h-16 w-full">
<div className="text-2xl font-black tracking-tighter text-white">BazaarLink</div>
<nav className="hidden md:flex gap-8 items-center">
<a className="text-slate-300 hover:text-white transition-colors" href="#">Map</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#">Markets</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#">Shops</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#">Categories</a>
</nav>
<div className="flex items-center gap-4">
<button className="text-slate-300 hover:text-white transition-colors font-medium">Sign In</button>
<button className="geo-gradient text-white px-6 py-2 rounded-lg font-bold shadow-lg hover:opacity-90 active:scale-95 transition-all">Get Started</button>
</div>
</div>
</header>
<main className="mt-24 mb-section-gap flex-grow container mx-auto max-w-[1280px] px-margin-desktop">

<div className="mb-8 flex items-center gap-4">
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<div>
<h1 className="font-h1 text-h2 text-primary">Your Marketplace Cart</h1>
<p className="font-body-md text-on-surface-variant">Review your local bazaar items before confirming your order.</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

<div className="lg:col-span-8 space-y-gutter">

<div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm">
<div className="bg-surface-container-low px-6 py-3 border-b border-outline-variant flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>storefront</span>
<span className="font-h3 text-body-lg text-primary">Zainab Market Apparel</span>
</div>
<span className="font-label-sm text-secondary bg-secondary-fixed px-3 py-1 rounded-full uppercase">Saddar, Karachi</span>
</div>
<div className="divide-y divide-outline-variant">

<div className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
<div className="w-24 h-24 rounded-lg bg-surface-container border border-outline-variant flex-shrink-0">
<img className="w-full h-full object-cover rounded-lg" data-alt="Traditional hand-embroidered cotton kurti in vibrant blue with intricate patterns on a neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQp0BY0eo5Fomys5LVTlUtexoj7uBQl1ibRnPzNrhgiq0xKPS84EldNsHEMhH7hp3Dn_0bak6vqg5lZh4IzlNCtNq8K7Mcywk5l9sCoY4M7wevBfGakwGa4UhoowObEa-IkRvrbQpjdDR0xYAs2aH-7aZyzW2HzKQgdUgwh8CnOIiiVY_YbPkRktiCTnmxNrvYPi48tn43TJYE-9KpefQl3RXG4ezi9_AsNiRISBhNoz1sw4G8s-0GODnkQ_wpSIdxpEyRZajqDg0"/>
</div>
<div className="flex-grow">
<h4 className="font-h3 text-body-lg text-on-surface">Cotton Embroidered Kurti</h4>
<p className="text-on-surface-variant font-body-md">Size: Medium | Color: Indigo Blue</p>
<div className="mt-4 flex items-center gap-6">
<div className="flex items-center border border-outline-variant rounded-lg overflow-hidden">
<button className="px-3 py-1 hover:bg-surface-container text-on-surface-variant transition-colors">-</button>
<span className="px-4 py-1 font-bold text-primary border-x border-outline-variant">01</span>
<button className="px-3 py-1 hover:bg-surface-container text-on-surface-variant transition-colors">+</button>
</div>
<button className="text-error flex items-center gap-1 font-label-sm hover:underline">
<span className="material-symbols-outlined text-[18px]">delete</span> Remove
                                    </button>
</div>
</div>
<div className="text-right">
<span className="block font-h2 text-h3 text-primary">Rs. 2,450</span>
<span className="text-on-surface-variant font-label-sm">Local Price Unit</span>
</div>
</div>

<div className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
<div className="w-24 h-24 rounded-lg bg-surface-container border border-outline-variant flex-shrink-0">
<img className="w-full h-full object-cover rounded-lg" data-alt="Pair of traditional leather Peshawari chappals with handcrafted detailing on a wooden surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW-EYiWc3lOdADRPE-0xfzDL-kTm44XEP3bIIUmuRUvgjz_Gi2F67rhO7YK0pX_raAtK7c4gV2GQQxDQ4lUQCqoXluGs0Hc0Zzgtc6q_MOun0zC6KSrp-A_qzyvHo_eJ3-skl-w26S-rWNVEg4HKO8wks909JhWQ1QGy-m4RNxwpnHbxsWoiDXlUn-B4LFmwkUvO7qE0LdIgOCXDxZ_0y6q_dYf54ZvNmsK085CvgdbmzQ28VdbpTzQy-5arZKYj2GBc6mQnhUNrE"/>
</div>
<div className="flex-grow">
<h4 className="font-h3 text-body-lg text-on-surface">Premium Peshawari Chappal</h4>
<p className="text-on-surface-variant font-body-md">Material: Genuine Leather | Size: 10</p>
<div className="mt-4 flex items-center gap-6">
<div className="flex items-center border border-outline-variant rounded-lg overflow-hidden">
<button className="px-3 py-1 hover:bg-surface-container text-on-surface-variant transition-colors">-</button>
<span className="px-4 py-1 font-bold text-primary border-x border-outline-variant">02</span>
<button className="px-3 py-1 hover:bg-surface-container text-on-surface-variant transition-colors">+</button>
</div>
<button className="text-error flex items-center gap-1 font-label-sm hover:underline">
<span className="material-symbols-outlined text-[18px]">delete</span> Remove
                                    </button>
</div>
</div>
<div className="text-right">
<span className="block font-h2 text-h3 text-primary">Rs. 6,400</span>
<span className="text-on-surface-variant font-label-sm">Rs. 3,200 x 2</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm">
<div className="bg-surface-container-low px-6 py-3 border-b border-outline-variant flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>storefront</span>
<span className="font-h3 text-body-lg text-primary">Tariq Road Spices</span>
</div>
<span className="font-label-sm text-secondary bg-secondary-fixed px-3 py-1 rounded-full uppercase">PECHS, Karachi</span>
</div>
<div className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
<div className="w-24 h-24 rounded-lg bg-surface-container border border-outline-variant flex-shrink-0">
<img className="w-full h-full object-cover rounded-lg" data-alt="Glass jar of vibrant red organic chili powder with professional labeling on a dark kitchen counter" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw3zvf0jvf98uOEn67onsGozPH0FF_jxQ4nmBA_SLz-ygIuNDS92q60MVwJqw5nsgPF_ZwEseqML2oNS-VAt9n2LKdJ_fg06jxEsW3FY_zV3UsWZnqS0ReAARirP5Vn-Oj_coG3MWjZGILTZRUWJqql5AvsBO6x-7keZJYQsmtK4vrmHhhVGHm4vspxJ3tneSGevlJmE02Y-mcs7DYFcZ854KBLeHMrDvHXOtpIAhcVsIJgvdwDCmF5QQE3FtZi8vdg8piNsKRdmM"/>
</div>
<div className="flex-grow">
<h4 className="font-h3 text-body-lg text-on-surface">Organic Red Chili Powder</h4>
<p className="text-on-surface-variant font-body-md">Weight: 500g | Grade: A+</p>
<div className="mt-4 flex items-center gap-6">
<div className="flex items-center border border-outline-variant rounded-lg overflow-hidden">
<button className="px-3 py-1 hover:bg-surface-container text-on-surface-variant transition-colors">-</button>
<span className="px-4 py-1 font-bold text-primary border-x border-outline-variant">01</span>
<button className="px-3 py-1 hover:bg-surface-container text-on-surface-variant transition-colors">+</button>
</div>
<button className="text-error flex items-center gap-1 font-label-sm hover:underline">
<span className="material-symbols-outlined text-[18px]">delete</span> Remove
                                </button>
</div>
</div>
<div className="text-right">
<span className="block font-h2 text-h3 text-primary">Rs. 850</span>
<span className="text-on-surface-variant font-label-sm">Market Rate</span>
</div>
</div>
</div>

<div className="bg-secondary-container/10 border border-secondary-container/20 p-6 rounded-xl flex gap-4 items-start">
<span className="material-symbols-outlined text-secondary text-3xl">info</span>
<div>
<h5 className="font-h3 text-body-md text-primary mb-1">Direct Market Transaction</h5>
<p className="text-on-surface-variant font-body-md">To ensure maximum precision and trust within the Karachi logistics ecosystem, BazaarLink facilitates connections but does not process digital payments. **Payment is required via Cash on Delivery (COD) or Cash on Pickup** directly at the merchant location.</p>
</div>
</div>
</div>

<div className="lg:col-span-4">
<div className="sticky top-24 space-y-6">
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-8 shadow-sm">
<h2 className="font-h3 text-h3 text-primary mb-6">Order Summary</h2>
<div className="space-y-4 font-body-md border-b border-outline-variant pb-6">
<div className="flex justify-between">
<span className="text-on-surface-variant">Subtotal (3 Shops)</span>
<span className="font-semibold text-primary">Rs. 9,700</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Delivery Fee (Estimated)</span>
<span className="font-semibold text-primary">Rs. 350</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Tech Fee</span>
<span className="font-semibold text-primary">Rs. 150</span>
</div>
</div>
<div className="py-6 flex justify-between items-baseline">
<span className="font-h3 text-body-lg text-primary">Total Payable</span>
<span className="font-h1 text-h2 text-secondary">Rs. 10,200</span>
</div>
<div className="space-y-4">
<button className="w-full geo-gradient text-white py-4 rounded-xl font-h3 text-body-lg shadow-xl hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-2">
<span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                                Place Order
                            </button>
<p className="text-center font-label-sm text-on-surface-variant px-4">
                                By placing an order, you agree to coordinate the final exchange with individual merchants.
                            </p>
</div>
</div>

<div className="bg-primary-container text-white p-6 rounded-xl relative overflow-hidden h-40">
<div className="relative z-10">
<p className="font-label-sm text-on-tertiary-container uppercase mb-2">Live Logistics View</p>
<h5 className="font-h3 text-body-lg mb-1">Optimizing Your Route</h5>
<p className="text-on-primary-container text-sm">Our geospatial engine has mapped these 3 locations for a single-trip fulfillment window between 2 PM - 6 PM today.</p>
</div>
<div className="absolute inset-0 opacity-20 pointer-events-none">
<img className="w-full h-full object-cover" data-alt="Abstract blue digital map of Karachi city grid with glowing connection points and tech-inspired linework" data-location="Karachi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmfXourWpF_FoxvZfGomWJoQRt2nbrTfS4EJgnumM7fWwPFGAeP5e_XjuCVUGV4SbFpF2tbBcj1dTod1YEOIYEn4S-OYx6QUZ4J4ONUzSD8xSdasAk1EiebyFtqsoLDwnau5L159GAIDBs_COJPRhvJY4GE-H24PlbDSnUH-EZWVTAhnF8Mnunr2AjkBo-7xpuEGjtnhS3s-zAGkRiHh_OwGC5339XTDpQGJcJjVt-Dsr-PdP4ubB4d2UDaP_GxIraNxMvICXK9fs"/>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-slate-900 dark:bg-black w-full mt-auto border-t border-slate-800">
<div className="flex flex-col md:flex-row justify-between items-center px-12 py-8 gap-4">
<div className="text-lg font-bold text-white">BazaarLink</div>
<p className="font-lex hospitals-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 text-center">
                © 2024 BazaarLink. Bridging Karachi's commerce with precision technology.
            </p>
<div className="flex gap-6">
<a className="font-lexend text-xs uppercase tracking-widest text-slate-500 hover:text-cyan-400 hover:underline underline-offset-4 transition-opacity duration-300" href="#">Team Credits</a>
<a className="font-lexend text-xs uppercase tracking-widest text-slate-500 hover:text-cyan-400 hover:underline underline-offset-4 transition-opacity duration-300" href="#">Tech Stack</a>
<a className="font-lexend text-xs uppercase tracking-widest text-slate-500 hover:text-cyan-400 hover:underline underline-offset-4 transition-opacity duration-300" href="#">Support</a>
</div>
</div>
</footer>

    </div>
  );
}
