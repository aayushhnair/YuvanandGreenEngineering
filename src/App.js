import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MechanicalEngineeringPage from './Screens/Home';
import { Phone, Menu, X } from 'lucide-react';
import { AboutPage, FacultyPage, ResearchPage, ContactPage } from './Screens/OtherPages';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className=" bg-gray-100">
        <header className="bg-gradient-to-r from-green-700 to-green-900 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src="https://karpagamarch.in/demo/wp-content/uploads/2023/08/Green-engineering_-Innovations-in-sustainable-technology-solutions-1920x1168.jpg" alt="University Logo" className="h-12 w-12 mr-4 rounded-full shadow-md" />
                <h1 className="text-2xl font-bold text-white">YUVANAND GREEN ENGINEERING</h1>
              </div>
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  <li><Link to="/" className="text-white hover:text-green-200 transition duration-300">Home</Link></li>
                  <li><Link to="/about" className="text-white hover:text-green-200 transition duration-300">Objectives</Link></li>
                  <li><Link to="/faculty" className="text-white hover:text-green-200 transition duration-300">Directors</Link></li>
                  <li><Link to="/research" className="text-white hover:text-green-200 transition duration-300">Office</Link></li>
                  <li><Link to="/contact" className="text-white hover:text-green-200 transition duration-300">Join Us</Link></li>
                </ul>
              </nav>
              <div className="hidden md:block">
                <a href="tel:+919994787526" className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-500 transition duration-300 flex items-center">
                  <Phone className="inline-block mr-2" size={18} />
                  +919994787526
                </a>
              </div>
              <button className="md:hidden text-white" onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden bg-green-800">
              <ul className="flex flex-col space-y-2 p-4">
                <li><Link to="/" className="text-white hover:text-green-200 transition duration-300 block py-2">Home</Link></li>
                <li><Link to="/about" className="text-white hover:text-green-200 transition duration-300 block py-2">Objectives</Link></li>
                <li><Link to="/faculty" className="text-white hover:text-green-200 transition duration-300 block py-2">Directors</Link></li>
                <li><Link to="/research" className="text-white hover:text-green-200 transition duration-300 block py-2">Office</Link></li>
                <li><Link to="/contact" className="text-white hover:text-green-200 transition duration-300 block py-2">Join Us</Link></li>
                <li>
                  <a href="tel:+919994787526" className="text-white hover:text-green-200 transition duration-300 flex items-center py-2">
                    <Phone className="inline-block mr-2" size={18} />
                    +919994787526
                  </a>
                </li>
              </ul>
            </div>
          )}
        </header>
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<MechanicalEngineeringPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <footer className="bg-gradient-to-r from-green-700 to-green-900 text-white py-4 mt-4 pt-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-6">Contact Us</h4>
                <p className="mb-2">Sf No 24A, 5th Main Road, CBI Colony, Perungudi, Chennai- 600096, Tamil Nadu</p>
                <p className="mb-2">Email: <a href="mailto:dyuvarajan2@gmail.com" className="hover:underline">dyuvarajan2@gmail.com</a></p>
                <p>Phone: <a href="tel:+9199994787526" className="hover:underline">+91 99994 78752</a></p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-6">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-gray-300 transition duration-200">Our Services</a></li>
                  <li><a href="#" className="hover:text-gray-300 transition duration-200">Sustainability Initiatives</a></li>
                  <li><a href="#" className="hover:text-gray-300 transition duration-200">Innovation Projects</a></li>
                  <li><a href="#" className="hover:text-gray-300 transition duration-200">Community Engagement</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-6">Follow Us</h4>
                <div className="flex space-x-6">
                  <a href="#" className="text-2xl hover:text-gray-300 transition duration-200">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-2xl hover:text-gray-300 transition duration-200">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-2xl hover:text-gray-300 transition duration-200">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-2xl hover:text-gray-300 transition duration-200">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center border-t border-gray-500 pt-6">
              <p>&copy; 2024 Yuvanand Green Engineering Solutions Private Limited. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;