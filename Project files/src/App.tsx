import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import FeaturedProducts from './components/FeaturedProducts';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import { Product } from './types';

type ViewType = 'home' | 'products' | 'product-detail';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
  };

  const handleBackToProducts = () => {
    setCurrentView('products');
    setSelectedProduct(null);
  };

  const handleShowHome = () => {
    setCurrentView('home');
    setSelectedProduct(null);
  };

  const handleShowProducts = () => {
    setCurrentView('products');
    setSelectedProduct(null);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'products':
        return <ProductGrid onViewProduct={handleViewProduct} />;
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetail product={selectedProduct} onBack={handleBackToProducts} />
        ) : null;
      default:
        return (
          <>
            <Hero onShopNow={handleShowProducts} />
            <CategorySection onCategoryClick={handleShowProducts} />
            <FeaturedProducts onViewProduct={handleViewProduct} onViewAll={handleShowProducts} />
            <Newsletter />
          </>
        );
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Header onShowProducts={handleShowProducts} onShowHome={handleShowHome} />
          <main className="min-h-screen">
            {renderCurrentView()}
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;