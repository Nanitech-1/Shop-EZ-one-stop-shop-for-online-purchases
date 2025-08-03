import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface FeaturedProductsProps {
  onViewProduct: (product: Product) => void;
  onViewAll: () => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onViewProduct, onViewAll }) => {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Discover our most popular items</p>
          </div>
          <button
            onClick={onViewAll}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;