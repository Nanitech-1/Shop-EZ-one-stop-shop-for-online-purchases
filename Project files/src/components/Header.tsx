import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Cart from './Cart';
import AuthModal from './AuthModal';

interface HeaderProps {
  onShowProducts: () => void;
  onShowHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowProducts, onShowHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const { totalItems } = useCart();
  const { user, logout } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onShowProducts();
    }
  };

  const handleAuthAction = () => {
    if (user) {
      logout();
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={onShowHome}>
              <ShoppingBag className="h-8 w-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">ShopEZ</h1>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                </div>
              </form>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={onShowHome}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button
                onClick={onShowProducts}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Products
              </button>
              <button className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <Heart className="h-6 w-6" />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={handleAuthAction}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {user ? (
                  <>
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="font-medium">{user.name}</span>
                  </>
                ) : (
                  <>
                    <User className="h-6 w-6" />
                    <span className="font-medium">Sign In</span>
                  </>
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden py-3 border-t border-gray-200">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              <button
                onClick={() => {
                  onShowHome();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => {
                  onShowProducts();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                Products
              </button>
              <button
                onClick={() => {
                  handleAuthAction();
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                {user ? (
                  <>
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-6 w-6 rounded-full object-cover"
                    />
                    <span>{user.name}</span>
                  </>
                ) : (
                  <>
                    <User className="h-5 w-5" />
                    <span>Sign In</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Cart Sidebar */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default Header;