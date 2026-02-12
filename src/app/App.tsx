import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Players } from './pages/Players';
import { Tournaments } from './pages/Tournaments';
import { Register } from './pages/Register';
import { Facilities } from './pages/Facilities'; // Import the new Facilities page
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-950 text-neutral-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/players" element={<Players />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/register" element={<Register />} />
          <Route path="/facilities" element={<Facilities />} />
        </Routes>
        
        {/* Premium Footer */}
        <footer className="relative bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 border-t border-neutral-800">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-transparent to-accent-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
              {/* Brand Column */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-500/30">
                    SC
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    Sports Club
                  </span>
                </div>
                <p className="text-neutral-400 leading-relaxed mb-6 max-w-xs">
                  Empowering athletes and building champions since 2010. Excellence in every game, passion in every play.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/30">
                    <Facebook className="w-5 h-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/30">
                    <Twitter className="w-5 h-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/30">
                    <Instagram className="w-5 h-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 inline-block hover:translate-x-1">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/facilities" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 inline-block hover:translate-x-1">
                      Facilities
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 inline-block hover:translate-x-1">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/players" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 inline-block hover:translate-x-1">
                      Players
                    </Link>
                  </li>
                  <li>
                    <Link to="/tournaments" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 inline-block hover:translate-x-1">
                      Tournaments
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 inline-block hover:translate-x-1">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    <a href="mailto:crozhollow10@gmail.com" className="text-neutral-400 hover:text-primary-400 transition-colors">
                      crozhollow10@gmail.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    <a href="tel:+918982673169" className="text-neutral-400 hover:text-primary-400 transition-colors">
                      8982673169
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-400">123 Sports Avenue<br />City, State 12345</span>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-lg font-bold mb-6 text-white">Stay Updated</h3>
                <p className="text-neutral-400 mb-4 leading-relaxed">
                  Get the latest news, tournament updates, and exclusive offers delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-neutral-500 text-sm">
                  &copy; {new Date().getFullYear()} Sports Club. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm">
                  <a href="#" className="text-neutral-500 hover:text-primary-400 transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-neutral-500 hover:text-primary-400 transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="text-neutral-500 hover:text-primary-400 transition-colors">
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
