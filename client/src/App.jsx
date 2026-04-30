import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Airlines from './pages/Airlines';
import RealEstate from './pages/RealEstate';
import Tea from './pages/Tea';
import Travel from './pages/Travel';
import Shipping from './pages/Shipping';
import Contact from './pages/Contact';
import About from './pages/About';
import Career from './pages/Career';
import Admin from './pages/Admin'; 

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/airlines" element={<Airlines />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/tea" element={<Tea />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;