import React from 'react';
import "./css/Service.css";

import { ShoppingCart, Search, Heart, Menu, ChevronRight, Star, Package, RefreshCw, Truck } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      
      {/* Hero Section */}
      <div className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Welcome to E-shopping</span>
              <span className="block text-indigo-600">Your One-Stop Shop</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Discover the latest trends in fashion, electronics, and home decor. Shop with confidence with our secure payment system and fast delivery.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center">
                <Truck className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="mt-2 text-lg font-medium">Free Shipping</h3>
              <p className="mt-1 text-gray-500">On orders over $100</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <RefreshCw className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="mt-2 text-lg font-medium">Easy Returns</h3>
              <p className="mt-1 text-gray-500">30-day return policy</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Package className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="mt-2 text-lg font-medium">Secure Packaging</h3>
              <p className="mt-1 text-gray-500">Safe delivery guaranteed</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Star className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="mt-2 text-lg font-medium">Quality Products</h3>
              <p className="mt-1 text-gray-500">Certified products</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Featured Products</h2>
          </div>
          {/* <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative bg-white rounded-lg shadow-sm p-4">
                <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-lg overflow-hidden">
                  <img src="" alt="" />
                  <div className="flex items-end p-4">
                    <button className="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
                      Quick view
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-900">Product Name</h3>
                  <p className="mt-1 text-sm text-gray-500">Category</p>
                  <p className="mt-1 text-sm font-medium text-gray-900">$99.99</p>
                </div>
              </div>
            ))}
          </div> */}
           <section class="featured-product">
    <img src="https://blog.pricekart.com/2017/06/01-tips-for-online-shopping-of-electronic-gadgets.jpg" alt="Featured Product"/>
    <div class="featured-product-content">
      <h2>Awesome Product Name</h2>
      <p>Experience the ultimate in quality and performance with our exclusive product. Designed with precision and care, it delivers unmatched reliability and style.</p>
      <a href="#" class="btn">Buy Now</a>
    </div>
  </section>

          
          
          <div className="mt-12 text-center">
            <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
              View all products
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
     
    </div>
  );
}

export default App;