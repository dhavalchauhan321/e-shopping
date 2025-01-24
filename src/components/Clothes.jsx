import React from 'react';
import { ShoppingBag, Heart, Search, Menu, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Classic White Tee',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    category: "Men's"
  },
  {
    id: 2,
    name: 'Denim Jacket',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=800',
    category: "Women's"
  },
  {
    id: 3,
    name: 'Summer Dress',
    price: '$59.99',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800',
    category: "Women's"
  },
  {
    id: 4,
    name: 'Slim Fit Jeans',
    price: '$69.99',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800',
    category: "Men's"
  },
];

const categories = ["Women's", "Men's", "Accessories", "New Arrivals", "Sale"];

function Clothes() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
     

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2000"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Summer Collection 2024
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Discover our latest collection featuring breathable fabrics and timeless designs perfect for the summer season.
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
            >
              Shop Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover object-center w-full h-[400px] group-hover:opacity-75 transition-opacity"
                />
                <button
                  className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
                </button>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(0, 3).map((category) => (
              <div key={category} className="relative group">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={`https://images.unsplash.com/photo-${category === "Women's" ? '1483985988355-763728e1935b' : category === "Men's" ? '1516257984-b1b4d707412e' : '1523779917675-b6ed3a42f3f3'}?auto=format&fit=crop&q=80&w=800`}
                    alt={category}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    {category}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">Shop now</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clothes;