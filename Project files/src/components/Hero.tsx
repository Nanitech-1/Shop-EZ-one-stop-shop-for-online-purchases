import React from 'react';
import { ArrowRight, Truck, Shield, Headphones, Star } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNow }) => {
  return (
    <>
      {/* Main Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Shop Smart,
                  <span className="block text-emerald-400">Shop Easy</span>
                </h1>
                <p className="text-xl sm:text-2xl text-blue-100 mt-6 leading-relaxed">
                  Discover amazing products at unbeatable prices. Your one-stop destination for everything you need.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onShopNow}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Learn More
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-6">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-blue-100">
                  <span className="font-semibold text-white">4.9/5</span> from 10,000+ reviews
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Shopping Experience"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Secure Shopping</p>
                      <p className="text-sm text-gray-500">100% Protected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free delivery on orders over ₹4,000. Fast and reliable shipping across India.</p>
            </div>

            <div className="text-center group">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Payment</h3>
              <p className="text-gray-600">Your payment information is processed securely with bank-level encryption.</p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                <Headphones className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Get help whenever you need it. Our support team is available round the clock.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;