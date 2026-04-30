import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CustomerDashboard from './pages/CustomerDashboard';
import ExploreMap from './pages/ExploreMap';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopDetail from './pages/ShopDetail';
import CartCheckout from './pages/CartCheckout';

function NavBar() {
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/register') {
    return null; // No navbar on auth pages
  }

  return (
    <nav className="bg-primary-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold font-lexend">BazaarLink</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-primary-300">Home</Link>
          <Link to="/map" className="hover:text-primary-300">Map</Link>
          <Link to="/dashboard" className="hover:text-primary-300">Dashboard</Link>
          <Link to="/shop" className="hover:text-primary-300">Shop Example</Link>
          <Link to="/cart" className="hover:text-primary-300">Cart</Link>
          <Link to="/login" className="bg-primary-600 px-4 py-2 rounded hover:bg-primary-500 transition-colors">Login</Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<CustomerDashboard />} />
          <Route path="/map" element={<ExploreMap />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/shop" element={<ShopDetail />} />
          <Route path="/cart" element={<CartCheckout />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
