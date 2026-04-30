
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("customer");
  const [rememberDevice, setRememberDevice] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // Store JWT token in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      if (rememberDevice) {
        localStorage.setItem("rememberDevice", "true");
      }

      // Navigate to dashboard based on user type
      if (userType === "customer") {
        navigate("/customer-dashboard");
      } else {
        navigate("/vendor-dashboard");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      

<main className="w-full max-w-[480px] z-10">

<div className="text-center mb-10">
<h1 className="font-h1 text-h1 text-white tracking-tighter mb-2">BazaarLink</h1>
<p className="text-on-primary-container font-body-md uppercase tracking-[0.2em] text-[12px]">Karachi Geospatial Commerce</p>
</div>

<div className="glass-card rounded-xl shadow-[0px_32px_64px_-12px_rgba(0,0,0,0.4)] p-10 flex flex-col">
<div className="flex flex-col items-center mb-8">
<div className="w-16 h-16 bg-gradient-to-br from-secondary to-on-tertiary-container rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-secondary/20">
<span className="material-symbols-outlined text-white text-3xl" data-icon="hub">hub</span>
</div>
<h2 className="font-h2 text-h3 text-primary">Welcome Back</h2>
<p className="text-on-surface-variant font-body-md text-[14px] mt-1">Please enter your details to sign in</p>
</div>

<div className="grid grid-cols-2 gap-2 p-1.5 bg-surface-container rounded-lg mb-8">
<button
  type="button"
  onClick={() => setUserType("customer")}
  className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-md shadow-sm border font-label-sm transition-all hover:translate-y-[-1px] ${
    userType === "customer"
      ? "bg-white text-secondary border-outline-variant/30"
      : "text-on-surface-variant hover:bg-white/50 border-transparent"
  }`}
>
<span className="material-symbols-outlined text-[18px]" data-icon="person">person</span>
                    Customer
                </button>
<button
  type="button"
  onClick={() => setUserType("vendor")}
  className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-md font-label-sm transition-all ${
    userType === "vendor"
      ? "bg-white text-secondary shadow-sm border border-outline-variant/30"
      : "text-on-surface-variant hover:bg-white/50"
  }`}
>
<span className="material-symbols-outlined text-[18px]" data-icon="storefront">storefront</span>
                    Vendor
                </button>
</div>

{error && (
  <div className="mb-6 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-[14px]">
    {error}
  </div>
)}

<form className="space-y-6" onSubmit={handleLogin}>
<div>
<label className="block font-label-sm text-primary mb-2">Email Address</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] group-focus-within:text-secondary transition-colors" data-icon="mail">mail</span>
<input
  className="w-full pl-12 pr-4 py-3.5 bg-surface border border-outline-variant rounded-lg text-body-md focus:outline-none focus:ring-2 focus:ring-on-tertiary-container/20 focus:border-secondary transition-all placeholder:text-outline-variant"
  placeholder="name@example.com"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-2">
<label className="font-label-sm text-primary">Password</label>
<a className="text-[12px] font-semibold text-secondary hover:text-on-secondary-fixed-variant transition-colors" href="#">Forgot Password?</a>
</div>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] group-focus-within:text-secondary transition-colors" data-icon="lock">lock</span>
<input
  className="w-full pl-12 pr-12 py-3.5 bg-surface border border-outline-variant rounded-lg text-body-md focus:outline-none focus:ring-2 focus:ring-on-tertiary-container/20 focus:border-secondary transition-all placeholder:text-outline-variant"
  placeholder="••••••••"
  type={showPassword ? "text" : "password"}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>
<button
  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
  type="button"
  onClick={() => setShowPassword(!showPassword)}
>
<span className="material-symbols-outlined text-[20px]" data-icon={showPassword ? "visibility_off" : "visibility"}>
  {showPassword ? "visibility_off" : "visibility"}
</span>
</button>
</div>
</div>
<div className="flex items-center gap-3">
<input
  className="w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary"
  id="remember"
  type="checkbox"
  checked={rememberDevice}
  onChange={(e) => setRememberDevice(e.target.checked)}
/>
<label className="font-body-md text-[14px] text-on-surface-variant select-none" htmlFor="remember">Remember this device</label>
</div>
<button
  type="submit"
  disabled={loading}
  className="w-full py-4 bg-gradient-to-r from-secondary to-on-tertiary-container text-white font-label-sm text-[14px] rounded-lg shadow-[0px_8px_24px_-4px_rgba(28,79,214,0.3)] hover:shadow-[0px_12px_28px_-4px_rgba(28,79,214,0.4)] hover:translate-y-[-2px] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
>
  {loading ? "Logging in..." : "Login to Dashboard"}
  {!loading && <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>}
</button>
</form>

<div className="mt-10 pt-8 border-t border-surface-variant">
<a className="group flex items-center justify-center gap-2 text-primary hover:text-secondary transition-all" href="/register">
<span className="font-label-sm text-[13px]">New vendor? Register your shop</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" data-icon="trending_flat">trending_flat</span>
</a>
</div>
</div>

<footer className="mt-8 text-center space-y-4">
<p className="text-on-primary-container text-[11px] font-label-sm tracking-widest uppercase opacity-60">
                © 2024 BazaarLink. Bridging Karachi's commerce with precision technology.
            </p>
<div className="flex justify-center gap-6">
<a className="text-on-primary-container text-[12px] font-medium hover:text-white transition-colors" href="#">Support</a>
<a className="text-on-primary-container text-[12px] font-medium hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-on-primary-container text-[12px] font-medium hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</footer>
</main>

<div className="fixed top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-0 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
<div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-on-tertiary-container/10 rounded-full blur-[100px] -z-0 pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
<div className="fixed inset-0 pointer-events-none -z-0 opacity-20">
<div className="absolute top-1/4 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
<div className="absolute top-1/2 right-1/3 w-px h-48 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
<div className="absolute bottom-1/4 right-1/4 w-px h-80 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
</div>

    </div>
  );
}
