import React from 'react'
import { Star, ShoppingCart, StarHalf } from 'lucide-react';


function ProductCard({ product, onAddToCart }) {

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    // Half star
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 text-yellow-400" />);
    }

    // Empty stars
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        <div className="p-4">
          <span className="text-gray-500 text-sm">{product.brand}</span>
          <h5 className="font-semibold mt-1">{product.name}</h5>
          <div className="flex items-center mt-2">
            {renderStars(product.rating)}
          </div>
          <div className="flex items-center justify-between mt-3">
            <h4 className="font-bold text-lg">{product.price} EGP</h4>
            <button
              onClick={() => onAddToCart(product)}
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
