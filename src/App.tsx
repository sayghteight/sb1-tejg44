import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Community from './pages/Community';
import Contact from './pages/Contact';
import Marketplace from './pages/Marketplace';
import Contribute from './pages/Contribute';
import Privacy from './pages/Privacy';
import Affiliate from './pages/Affiliate';
import Bugtracker from './pages/Bugtracker';
import Licensing from './pages/Licensing';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/bugtracker" element={<Bugtracker />} />
            <Route path="/licensing" element={<Licensing />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;