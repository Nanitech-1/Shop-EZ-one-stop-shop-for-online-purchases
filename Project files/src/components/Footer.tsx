import React from 'react';
import { ShoppingBag, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-blue-400 mr-2" />
              <h3 className="text-2xl font-bold">ShopEZ</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your one-stop destination for amazing products at unbeatable prices. 
              Shop smart, shop easy with ShopEZ.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="bg-blue-400 hover:bg-blue-500 p-2 rounded-lg transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="bg-pink-600 hover:bg-pink-700 p-2 rounded-lg transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="bg-red-600 hover:bg-red-700 p-2 rounded-lg transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service', 'FAQ', 'Shipping Info'].map((link) => (
                <button key={link} className="block text-gray-300 hover:text-white transition-colors duration-200">
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categories</h4>
            <div className="space-y-2">
              {['Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Books', 'Toys'].map((category) => (
                <button key={category} className="block text-gray-300 hover:text-white transition-colors duration-200">
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">123 Shopping St, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">support@shopez.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              © 2025 ShopEZ. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button className="text-gray-300 hover:text-white transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-300 hover:text-white transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-gray-300 hover:text-white transition-colors duration-200">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;