
export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      

<aside className="h-screen w-64 fixed left-0 top-0 bg-[#020617] text-slate-400 flex flex-col py-8 z-50 overflow-y-auto custom-scrollbar">
<div className="px-8 mb-10">
<h1 className="text-2xl font-bold text-white tracking-tight">BazaarLink</h1>
<p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mt-1 font-bold">Karachi Hub</p>
</div>
<nav className="flex flex-col gap-1 px-4">
<a className="flex items-center gap-3 bg-slate-800/50 text-white rounded-xl px-4 py-3.5 transition-all group" href="#">
<span className="material-symbols-outlined text-secondary" data-icon="grid_view">grid_view</span>
<span className="font-semibold text-sm">Overview</span>
</a>
<a className="flex items-center gap-3 px-4 py-3.5 hover:bg-slate-800/30 hover:text-slate-200 rounded-xl transition-all group" href="#">
<span className="material-symbols-outlined group-hover:text-secondary transition-colors" data-icon="shopping_bag">shopping_bag</span>
<span className="font-medium text-sm">My Orders</span>
</a>
<a className="flex items-center gap-3 px-4 py-3.5 hover:bg-slate-800/30 hover:text-slate-200 rounded-xl transition-all group" href="#">
<span className="material-symbols-outlined group-hover:text-secondary transition-colors" data-icon="favorite">favorite</span>
<span className="font-medium text-sm">Saved Shops</span>
</a>
<a className="flex items-center gap-3 px-4 py-3.5 hover:bg-slate-800/30 hover:text-slate-200 rounded-xl transition-all group" href="#">
<span className="material-symbols-outlined group-hover:text-secondary transition-colors" data-icon="person">person</span>
<span className="font-medium text-sm">Profile</span>
</a>
<a className="flex items-center gap-3 px-4 py-3.5 hover:bg-slate-800/30 hover:text-slate-200 rounded-xl transition-all group" href="#">
<span className="material-symbols-outlined group-hover:text-secondary transition-colors" data-icon="settings">settings</span>
<span className="font-medium text-sm">Settings</span>
</a>
</nav>
<div className="mt-auto px-6 mb-4">
<div className="p-5 bg-slate-800/40 rounded-2xl border border-slate-700/50">
<p className="text-xs text-slate-400 mb-3 leading-relaxed">Need help with an order?</p>
<button className="w-full py-2.5 bg-secondary text-white rounded-xl text-xs font-bold hover:bg-blue-600 transition-colors">
                Support Center
            </button>
</div>
</div>
</aside>

<main className="ml-64 flex-1 p-10 max-w-[1400px]">

<header className="flex justify-between items-center mb-10">
<div>
<h2 className="text-3xl font-bold text-slate-900 tracking-tight">Overview</h2>
<p className="text-slate-500 mt-1">Welcome back to your Karachi commerce dashboard.</p>
</div>
<div className="flex items-center gap-5">
<button className="relative p-2.5 text-slate-400 hover:bg-white hover:text-slate-900 rounded-full transition-all border border-transparent hover:border-slate-200">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
</button>
<div className="flex items-center gap-3 pl-5 border-l border-slate-200">
<div className="text-right">
<p className="text-sm font-bold text-slate-900 leading-none">Ahmed Khan</p>
<p className="text-[11px] text-slate-500 mt-1 font-medium">Gold Member</p>
</div>
<img alt="User" className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATY7PU4GpWYBZvcQw23mbZ0L2u_n3VeV4FDSFRNmoZvK9_U5RcVY-2dfRhX3nX25PkyQ6d0JbgHApRw4BHiChQK-RBwpO6BbllUc3ZJPpNx3jvQf4j8cXCGloUyhWNAkZykf23UFRYIpxsL0wnDdiqv_o1eUtRtGHwZaxAvKsNYvnCmo7e6wws7GxOeJdUJnpGRSmYM7BWJE6ZlXie2bWAUBqu2aEEc0VEgfXjgog-aNgvWOy8WZpZuVSUY81aYX31ytlyIzvXOgw"/>
</div>
</div>
</header>

<div className="grid grid-cols-12 gap-6 mb-10">

<div className="col-span-12 lg:col-span-8 relative overflow-hidden rounded-[2rem] bg-primary p-10 text-white min-h-[280px] shadow-2xl shadow-slate-200 flex flex-col justify-center">
<div className="relative z-10 max-w-lg">
<span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest border border-blue-500/30">Flash Sale</span>
<h1 className="text-4xl font-bold mt-4 tracking-tight">Welcome back, Ahmed!</h1>
<p className="text-slate-400 mt-3 text-lg leading-relaxed">Your favorite shops at <span className="text-white font-semibold">Empress Market</span> are offering <span className="text-blue-400">20% off</span> today. Don't miss out!</p>
<div className="flex gap-4 mt-8">
<button className="px-8 py-3.5 bg-secondary text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all">
                        Shop Now
                    </button>
<button className="px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all">
                        View Saved
                    </button>
</div>
</div>

<div className="absolute right-[-5%] bottom-[-10%] opacity-10 rotate-12">
<span className="material-symbols-outlined text-[320px]" data-icon="shopping_bag">shopping_bag</span>
</div>
</div>

<div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
<div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-3xl" data-icon="local_shipping">local_shipping</span>
</div>
<div>
<p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Active Orders</p>
<p className="text-3xl font-bold text-slate-900 mt-0.5">04</p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
<div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
<span className="material-symbols-outlined text-3xl" data-icon="payments">payments</span>
</div>
<div>
<p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Total Spent (PKR)</p>
<p className="text-3xl font-bold text-slate-900 mt-0.5">128,450</p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
<div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500">
<span className="material-symbols-outlined text-3xl" data-icon="stars" style={{ fontVariationSettings: '"FILL" 1' }}>stars</span>
</div>
<div>
<p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Reviews Given</p>
<p className="text-3xl font-bold text-slate-900 mt-0.5">24</p>
</div>
</div>
</div>
</div>

<div className="mb-10">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-bold text-slate-900 tracking-tight">Saved Shops</h3>
<a className="text-sm font-bold text-secondary hover:underline" href="#">View All</a>
</div>
<div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
<div className="flex-shrink-0 w-64 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:border-secondary/30 transition-all cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
<span className="material-symbols-outlined" data-icon="store">store</span>
</div>
<div>
<p className="font-bold text-slate-900">Empress Gourmet</p>
<p className="text-xs text-slate-500">Organic &amp; Premium</p>
</div>
</div>
</div>
<div className="flex-shrink-0 w-64 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:border-secondary/30 transition-all cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
<span className="material-symbols-outlined" data-icon="restaurant">restaurant</span>
</div>
<div>
<p className="font-bold text-slate-900">Karachi Street Eats</p>
<p className="text-xs text-slate-500">Best Biryani Hub</p>
</div>
</div>
</div>
<div className="flex-shrink-0 w-64 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:border-secondary/30 transition-all cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
<span className="material-symbols-outlined" data-icon="coffee">coffee</span>
</div>
<div>
<p className="font-bold text-slate-900">Saddar Spices</p>
<p className="text-xs text-slate-500">Authentic Blends</p>
</div>
</div>
</div>
<div className="flex-shrink-0 w-64 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:border-secondary/30 transition-all cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
<span className="material-symbols-outlined" data-icon="devices">devices</span>
</div>
<div>
<p className="font-bold text-slate-900">Techno Karachi</p>
<p className="text-xs text-slate-500">Mobile Accessories</p>
</div>
</div>
</div>
</div>
</div>

<section className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
<div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
<h3 className="text-xl font-bold text-slate-900 tracking-tight">Recent Orders</h3>
<div className="flex gap-3">
<div className="relative">
<input className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all w-64" placeholder="Search orders..." type="text"/>
<span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-sm" data-icon="search">search</span>
</div>
<button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                    Filter
                </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="text-[11px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">
<th className="px-8 py-5">Order ID</th>
<th className="px-8 py-5">Shop</th>
<th className="px-8 py-5">Date</th>
<th className="px-8 py-5">Total (PKR)</th>
<th className="px-8 py-5">Status</th>
<th className="px-8 py-5"></th>
</tr>
</thead>
<tbody className="divide-y divide-slate-50">
<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-8 py-5 font-mono text-xs font-bold text-slate-900">#BZ-99210</td>
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<span className="text-sm font-bold text-slate-700">Empress Gourmet</span>
</div>
</td>
<td className="px-8 py-5 text-sm text-slate-500 font-medium">Oct 12, 2024</td>
<td className="px-8 py-5 text-sm font-bold text-slate-900">PKR 9,750</td>
<td className="px-8 py-5">
<span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-100">Delivered</span>
</td>
<td className="px-8 py-5 text-right">
<button className="p-1.5 text-slate-300 hover:text-secondary hover:bg-white rounded-lg transition-all border border-transparent hover:border-slate-100">
<span className="material-symbols-outlined text-lg" data-icon="arrow_forward">arrow_forward</span>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-8 py-5 font-mono text-xs font-bold text-slate-900">#BZ-99215</td>
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<span className="text-sm font-bold text-slate-700">Zainab Market Spices</span>
</div>
</td>
<td className="px-8 py-5 text-sm text-slate-500 font-medium">Oct 14, 2024</td>
<td className="px-8 py-5 text-sm font-bold text-slate-900">PKR 4,200</td>
<td className="px-8 py-5">
<span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-100">Processing</span>
</td>
<td className="px-8 py-5 text-right">
<button className="p-1.5 text-slate-300 hover:text-secondary hover:bg-white rounded-lg transition-all border border-transparent hover:border-slate-100">
<span className="material-symbols-outlined text-lg" data-icon="arrow_forward">arrow_forward</span>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-8 py-5 font-mono text-xs font-bold text-slate-900">#BZ-99222</td>
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<span className="text-sm font-bold text-slate-700">Karachi Street Eats</span>
</div>
</td>
<td className="px-8 py-5 text-sm text-slate-500 font-medium">Oct 15, 2024</td>
<td className="px-8 py-5 text-sm font-bold text-slate-900">PKR 2,450</td>
<td className="px-8 py-5">
<span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-100">Pending</span>
</td>
<td className="px-8 py-5 text-right">
<button className="p-1.5 text-slate-300 hover:text-secondary hover:bg-white rounded-lg transition-all border border-transparent hover:border-slate-100">
<span className="material-symbols-outlined text-lg" data-icon="arrow_forward">arrow_forward</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-8 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/30">
<span className="text-xs font-bold text-slate-400">Showing 3 of 42 orders</span>
<button className="text-xs font-bold text-secondary hover:underline">View All Orders</button>
</div>
</section>

<footer className="mt-20 border-t border-slate-200 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col gap-1">
<p className="text-xl font-bold text-primary tracking-tight">BazaarLink</p>
<p className="text-[11px] text-slate-400 font-medium">© 2024 BazaarLink. Built for the future of Karachi's commerce.</p>
</div>
<div className="flex gap-8">
<a className="text-[11px] font-bold text-slate-400 hover:text-secondary transition-colors uppercase tracking-widest" href="#">Help</a>
<a className="text-[11px] font-bold text-slate-400 hover:text-secondary transition-colors uppercase tracking-widest" href="#">Terms</a>
<a className="text-[11px] font-bold text-slate-400 hover:text-secondary transition-colors uppercase tracking-widest" href="#">Privacy</a>
<a className="text-[11px] font-bold text-slate-400 hover:text-secondary transition-colors uppercase tracking-widest" href="#">API</a>
</div>
</footer>
</main>

<button className="fixed bottom-10 right-10 w-16 h-16 bg-secondary text-white rounded-2xl shadow-2xl shadow-blue-500/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
<span className="material-symbols-outlined text-3xl" data-icon="add_shopping_cart">add_shopping_cart</span>
</button>

    </div>
  );
}
