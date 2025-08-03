import React, { useState } from 'react';
import { ArrowLeft, Star, ShoppingCart, Heart, Truck, Shield, RotateCcw } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Products</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index
                      ? 'border-blue-500 ring-2 ring-blue-200'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                {product.category}
              </span>
              {discountPercentage > 0 && (
                <span className="text-sm text-red-600 font-medium bg-red-50 px-3 py-1 rounded-full">
                  -{discountPercentage}% OFF
                </span>
              )}
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <span className="text-4xl font-bold text-gray-900">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
          </div>

          {/* Features */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-semibold text-lg mb-3">Key Features</h3>
            <div className="grid grid-cols-2 gap-2">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="border-t border-gray-200 pt-6 space-y-4">
            <div className="flex items-center space-x-4">
              <label className="font-medium text-gray-700">Quantity:</label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-100 transition-colors duration-200"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-gray-100 transition-colors duration-200"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
              </button>
              
              <button className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-red-500 hover:text-red-500 transition-colors duration-200">
                <Heart className="h-5 w-5" />
              </button>
            </div>

            <div className={`text-center font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? '✓ In Stock - Ready to Ship' : '✗ Currently Out of Stock'}
            </div>
          </div>

          {/* Shipping Info */}
          <div className="border-t border-gray-200 pt-6 space-y-4">
            <div className="flex items-center space-x-3">
              <Truck className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-medium text-gray-800">Free Shipping</p>
                <p className="text-sm text-gray-600">On orders over ₹4,000</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-medium text-gray-800">Secure Payment</p>
                <p className="text-sm text-gray-600">SSL encrypted checkout</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <RotateCcw className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-medium text-gray-800">Easy Returns</p>
                <p className="text-sm text-gray-600">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;