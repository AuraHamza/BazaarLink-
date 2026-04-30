
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("merchant");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      // Store JWT token in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Navigate to dashboard based on role
      if (role === "merchant") {
        navigate("/vendor-dashboard");
      } else {
        navigate("/customer-dashboard");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error("Signup error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      

<main className="w-full max-w-[520px] flex flex-col gap-8">

<div className="flex flex-col items-center text-center">
<div className="mb-4 bg-secondary-container p-3 rounded-xl shadow-lg shadow-secondary/20">
<span className="material-symbols-outlined text-4xl text-on-secondary-container" data-icon="hub">hub</span>
</div>
<h1 className="font-h1 text-h3 md:text-h2 text-white mb-2">BazaarLink</h1>
<p className="font-body-md text-on-primary-container max-w-[320px]">Bridging Karachi's commerce with precision technology.</p>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-2xl overflow-hidden border border-outline-variant/30">
<div className="p-8 md:p-12">
<header className="mb-8">
<h2 className="font-h2 text-h3 text-on-surface mb-1">Create Account</h2>
<p className="font-body-md text-on-surface-variant">Join the geospatial marketplace network.</p>
</header>

{error && (
  <div className="mb-6 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-[14px]">
    {error}
  </div>
)}

<form className="flex flex-col gap-6" onSubmit={handleSignup}>

<div className="flex flex-col gap-2">
<label className="font-label-sm text-on-surface-variant uppercase tracking-widest" htmlFor="full_name">Full Name</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl" data-icon="person">person</span>
<input
  className="w-full pl-12 pr-4 py-3 bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-body-md"
  id="full_name"
  placeholder="Enter your legal name"
  type="text"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  required
/>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="font-label-sm text-on-surface-variant uppercase tracking-widest" htmlFor="email">Work Email</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl" data-icon="mail">mail</span>
<input
  className="w-full pl-12 pr-4 py-3 bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-body-md"
  id="email"
  placeholder="name@company.com"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="font-label-sm text-on-surface-variant uppercase tracking-widest">Select Role</label>
<div className="grid grid-cols-2 gap-4">
<label className="cursor-pointer">
<input
  checked={role === "merchant"}
  onChange={() => setRole("merchant")}
  className="peer sr-only"
  name="role"
  type="radio"
/>
<div className="flex flex-col items-center gap-2 p-4 bg-surface border-2 border-outline-variant rounded-xl transition-all peer-checked:border-secondary peer-checked:bg-secondary/5 peer-checked:text-secondary group">
<span className="material-symbols-outlined text-3xl" data-icon="storefront">storefront</span>
<span className="font-body-md font-semibold">Merchant</span>
</div>
</label>
<label className="cursor-pointer">
<input
  checked={role === "logistics"}
  onChange={() => setRole("logistics")}
  className="peer sr-only"
  name="role"
  type="radio"
/>
<div className="flex flex-col items-center gap-2 p-4 bg-surface border-2 border-outline-variant rounded-xl transition-all peer-checked:border-secondary peer-checked:bg-secondary/5 peer-checked:text-secondary group">
<span className="material-symbols-outlined text-3xl" data-icon="local_shipping">local_shipping</span>
<span className="font-body-md font-semibold">Logistics</span>
</div>
</label>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="font-label-sm text-on-surface-variant uppercase tracking-widest" htmlFor="password">Password</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl" data-icon="lock">lock</span>
<input
  className="w-full pl-12 pr-4 py-3 bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-body-md"
  id="password"
  placeholder="••••••••"
  type={showPassword ? "text" : "password"}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-sm text-on-surface-variant uppercase tracking-widest" htmlFor="confirm_password">Confirm</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl" data-icon="shield">shield</span>
<input
  className="w-full pl-12 pr-4 py-3 bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-body-md"
  id="confirm_password"
  placeholder="••••••••"
  type={showPassword ? "text" : "password"}
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  required
/>
</div>
<button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
  className="text-xs text-secondary hover:underline"
>
  {showPassword ? "Hide" : "Show"}
</button>
</div>
</div>

<button
  type="submit"
  disabled={loading}
  className="mt-4 w-full bg-gradient-to-r from-secondary to-on-tertiary-container text-white py-4 px-8 rounded-xl font-h3 text-body-lg shadow-lg shadow-secondary/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-3 disabled:opacity-75 disabled:cursor-not-allowed"
>
<span>{loading ? "Creating Account..." : "Register Account"}</span>
{!loading && <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>}
</button>
<div className="flex items-center gap-4 py-2">
<div className="h-px bg-outline-variant flex-1"></div>
<span className="font-label-sm text-on-surface-variant uppercase tracking-widest">or</span>
<div className="h-px bg-outline-variant flex-1"></div>
</div>
<p className="text-center font-body-md text-on-surface-variant">
                        Already have an account? 
                        <a className="text-secondary font-bold hover:underline underline-offset-4 decoration-2" href="/login">Sign In</a>
</p>
</form>
</div>

<div className="bg-surface-container py-4 px-8 flex justify-center items-center gap-6">
<div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all cursor-default">
<span className="material-symbols-outlined text-lg" data-icon="security">security</span>
<span className="font-label-sm">GDPR COMPLIANT</span>
</div>
<div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all cursor-default">
<span className="material-symbols-outlined text-lg" data-icon="verified_user">verified_user</span>
<span className="font-label-sm">ISO CERTIFIED</span>
</div>
</div>
</div>

<div className="flex items-center justify-center gap-12 opacity-30 px-4">
<img alt="Karachi Logistics Authority Logo" className="h-6 object-contain" data-alt="clean minimalist logo of a regional logistics authority with abstract geometric bird shape in blue" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDKVKh86kPyjrJaBi23Jqss0MUxFjg_ihF8KfLwtohdxhyRRZnD6G8ui0LnTz7l7FYJjCv3C1MIRmAIO2z6BxVyRo4pOky2SLpH4xPLCQs4ljtIVhe0tM9U8GXsUGKm5vLYVW2Hpg3hweaktnQndYNa5qcW4a3kTOVNz6TJ6W04yG2B4p923J-DP3dI5dKOvtHqMFbr049_O-piwuYSGKSfubLT79XI_rjg1ItHaczDbCB7kbMNCtUuFYfo0YHM5HeLEPulAbNi8A"/>
<img alt="FinTech Network Logo" className="h-6 object-contain" data-alt="modern tech company logo with interconnected dots and crisp sans-serif typography in deep navy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiWix9kjxXwCFMcjWgLQi01xst1704ZYuerGOcchMu2k2KzEkrGTMPe3uFaMibQHoU0LBsZjDXgKCMQdkcqf5bpmbmAMLb48x-OoS1J5LHVXahxtG8iZZXKn7DW2YjxZQLrcxGIooSmRav3qiiUuFIICFMabixsJ1VcwQHMKXCqv9bbXGsxKbL4-fQZZKXocSzBXksz9x3lZpRkwU9R3j9-15GUPAL0NOCKefPnhHtPpbz0Qr6IuERu87IhPJbg2_-NnBFL65pIYY"/>
<img alt="Geo-Trust Certification" className="h-6 object-contain" data-alt="circular emblem representing geographic trust and certification with globe motif and tick mark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC39H6b3SWSKJHPUwrECOxS0SWDoL93kFF82jF2NJ7XoM6-6wpLsPH0_HaZ6lpbTF8cs7kp8mjB2M2o50lZ_SMnSf0n_iXMBjA_ZR4D5Q6nBTbWc_hUV5nhGWaydmvL6lHCZjjcy4su_Sdmn4n8Luf34g4rcZ4WhWANS4noTRBuv16tDoiRjqmcfpZ48GAFTM5yNs5I0Jo4L4jJg3M_eb8uEugRrWCswomvDHw99FH_QRk-jlkZt7-0gpxEd_pL6C3tRbnN8WA5nCQ"/>
</div>
</main>

<footer className="w-full mt-12 py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center px-12 gap-4">
<div className="flex flex-col gap-1 items-center md:items-start">
<span className="font-h3 text-white text-lg font-bold">BazaarLink</span>
<p className="font-lexend text-xs uppercase tracking-widest text-on-primary-container text-center md:text-left">
                © 2024 BazaarLink. Bridging Karachi's commerce with precision technology.
            </p>
</div>
<div className="flex gap-8">
<a className="font-lexend text-xs uppercase tracking-widest text-slate-500 hover:text-on-tertiary-container transition-all hover:underline underline-offset-4" href="#">Team Credits</a>
<a className="font-lexend text-xs uppercase tracking-widest text-slate-500 hover:text-on-tertiary-container transition-all hover:underline underline-offset-4" href="#">Tech Stack</a>
<a className="font-lexend text-xs uppercase tracking-widest text-slate-500 hover:text-on-tertiary-container transition-all hover:underline underline-offset-4" href="#">API Documentation</a>
<a className="font-lexend text-xs uppercase tracking-widest text-slate-500 hover:text-on-tertiary-container transition-all hover:underline underline-offset-4" href="#">Support</a>
</div>
</footer>

    </div>
  );
}
