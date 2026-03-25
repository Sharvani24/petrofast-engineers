import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Features from './components/Features';
import Gallery from './components/Gallery';

// Pages
import Hero from './pages/Home';
import About from './pages/About';
import QualityCert from './pages/QualityCert';
import ProductPage from './pages/ProductPage';
import HexNutsPage from './pages/HexNutsPage';
import WashersPage from './pages/WashersPage';
import StudsPage from './pages/StudsPage';
import ThreadedRodsPage from './pages/ThreadedRodsPage';
import RoundedBarsPage from './pages/RoundedBarsPage';
import ClampsPage from './pages/ClampsPage';
import LiftingProductsPage from './pages/LiftingProductsPage';
import CivilConstructionPage from './pages/CivilConstructionPage';
import PetrochemicalPage from './pages/PetrochemicalPage';
import RoadCrashBarrierPage from './pages/RoadCrashBarrierPage';
import TradingProductsPage from './pages/TradingProductsPage';
import Enquiry from './pages/Enquiry';
import Contact from './pages/Contact';

// Helper: Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Container wraps everything to ensure background consistency and overflow control */}
      <div className="flex flex-col min-h-screen bg-white text-gray-900 w-full overflow-x-hidden">
        
        <Navbar />

        {/* Main section expands to push footer down */}
        <main className="flex-grow w-full">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={
                <>
                  <Hero />
                  <Features />
                  <Gallery />
                </>
            }/>
            
            {/* Standard Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/quality" element={<QualityCert />} /> 
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/contact" element={<Contact />} />

            {/* Product Routes */}
            <Route path="/products/nuts" element={<HexNutsPage />} />
            <Route path="/products/washers" element={<WashersPage />} />
            <Route path="/products/studs" element={<StudsPage />} />
            <Route path="/products/threaded-rods-bolts" element={<ThreadedRodsPage />} />
            <Route path="/products/rounded-bars-rods" element={<RoundedBarsPage />} />
            <Route path="/products/clamps" element={<ClampsPage />} />
            <Route path="/products/lifting-products" element={<LiftingProductsPage />} />
            <Route path="/products/civil-constructions-fasteners" element={<CivilConstructionPage />} />
            <Route path="/products/petrochemical-pipelines" element={<PetrochemicalPage />} />
            <Route path="/products/road-crash-barrier-fasteners" element={<RoadCrashBarrierPage />} />
            <Route path="/products/trading-products" element={<TradingProductsPage />} />
            
            {/* Dynamic Catch-all for Bolts/Foundation */}
            <Route path="/products/:category" element={<ProductPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;