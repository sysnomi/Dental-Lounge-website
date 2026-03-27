import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLayoutEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactBooking from './pages/ContactBooking';
import PageTransition from './components/layout/PageTransition';

function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutUs /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactBooking /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
