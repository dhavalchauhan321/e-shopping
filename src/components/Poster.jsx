import React, { useState } from 'react';
import { ShoppingCart as CartIcon } from 'lucide-react';
import ProductCard from './ProductCard';
import Cart from './Cart';

const featuredProducts = [
  {
    id: 1,
    name: "ABSTRACT PRINT SHIRT",
    brand: "Zara",
    price: 400,
    rating: 4.5,
    image: "https://alin00r.github.io/E-Shop-Website/img/products/f1.jpg"
  },
  {
    id: 2,
    name: "PRINTED STRETCHY SHIRT",
    brand: "Zara",
    price: 400 ,
    rating: 4.5,
    image: "https://alin00r.github.io/E-Shop-Website/img/products/f2.jpg"
  },
  {
    id: 3,
    name: "FLORAL PRINT SHIRT",
    brand: "Zara",
    price: 350,
    rating: 4.5,
    image: "https://alin00r.github.io/E-Shop-Website/img/products/f3.jpg"
  },
  {
    id: 4,
    name: "FLORAL PRINT SHIRT",
    brand: "Zara",
    price: 350,
    rating: 4.5,
    image: "https://alin00r.github.io/E-Shop-Website/img/products/f4.jpg"
  },
  {
    id: 5,
    name: "FLORAL PRINT SHIRT",
    brand: "Zara",
    price: 350,
    rating: 4.5,
    image: "https://alin00r.github.io/E-Shop-Website/img/products/f5.jpg"
  },
  {
    id: 6,
    name: "FINE CORDUROY SHIRT",
    brand: "Zara",
    price: 450,
    rating: 4.5,
    image: "https://alin00r.github.io/E-Shop-Website/img/products/f6.jpg"
  },
  {
    id: 7,
    name: "Wide linen-blend trousers",
    brand: "Zara",
    price: 275,
    rating: 4.5,
    image: "https://alin00r.github.io/E-Shop-Website/img/products/f7.jpg"
  },
  {
    id: 8,
    name: "Women Summer Top",
    brand: "Zara",
    price: 290,
    rating: 4.5,
    image: "https://alin00r.github.io/E-Shop-Website/img/products/f8.jpg"
  }


  // ... Add all other products with their respective data
];

const newArrivals = [
  {
    id: 9,
    name: "Regular Fit shirt",
    brand: "H&M",
    price: 279,
    rating: 3.5,
    image: "https://alin00r.github.io/E-Shop-Website/img/products/n1.jpg"
  },
  {
    id: 10,
    name: "Classic Sleeved Shirt",
    brand: "LC WAIKIKI",
    price: 230,
    rating: 3.5,
    image: "https://alin00r.github.io/E-Shop-Website/img/products/n2.jpg"
  },
  {
    id: 11,
    name: "Regular Fit shirt",
    brand: "H&M",
    price: 350,
    rating: 3.5,
    image: "https://alin00r.github.io/E-Shop-Website/img/products/n3.jpg"
  },
  {
    id: 12,
    name:"Polo T-Shirt",
    brand: "H&M",
    price: 285,
    rating: 3.5,
    image: "https://alin00r.github.io/E-Shop-Website/img/products/n4.jpg"
  },
  {
    id: 13,
    name: "H&M",
    brand: "JEANS SHIRT",
    price:390,
    rating: 3.5,
    image: "https://alin00r.github.io/E-Shop-Website/img/products/n5.jpg"
  },
  {
    id: 14,
    name: "LC WAIKIKI",
    brand: "Cartoon Astronaut T-shirts",
    price:198,
    rating: 3.5,
    image: "https://alin00r.github.io/E-Shop-Website/img/products/n6.jpg"
  },
  {
    id: 15,
    name: "LC WIKIKI",
    brand: "Regular Fit Linen-blend overshirt",
    price: 300,
    rating: 3.5,
    image: "https://alin00r.github.io/E-Shop-Website/img/products/n7.jpg"
  },
  {
    id: 16,
    name: "Regular Fit Resort Shirt",
    brand: "H&M",
    price: 265,
    rating: 3.5,
    image: "https://alin00r.github.io/E-Shop-Website/img/products/n8.jpg"
  },

  // ... Add all other new arrival products
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">E-Shop</h1>
          <button
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-full relative"
          >
            <CartIcon className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Featured Products</h2>
          <p className="text-gray-600 mb-6">Summer Collection New Modern Design</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>

        <section className="bg-gray-800 text-white py-16 px-8 rounded-lg text-center mb-12">
          <h4 className="text-xl mb-2">Repair Services</h4>
          <h2 className="text-3xl mb-4 text-yellow-400">
            Up to <span className="text-yellow-400">70% off</span> - All T-shirts & Accessories
          </h2>
          <button className="bg-white text-gray-800 px-6 py-2 rounded hover:bg-gray-100 transition-colors">
            Explore More
          </button>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">New Arrivals</h2>
          <p className="text-gray-600 mb-6">Summer Collection New Modern Design</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>
      </main>

      <Cart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateCartItemQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
}

export default App;