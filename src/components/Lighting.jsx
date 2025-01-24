import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const categories = [
  {
    id: '1',
    name: 'Pendant Lights',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=240&h=320&q=80',
    itemCount: 124
  },
  {
    id: '2',
    name: 'Floor Lamps',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=240&h=320&q=80',
    itemCount: 89
  },
  {
    id: '3',
    name: 'Table Lamps',
    image: 'https://images.unsplash.com/photo-1534105615256-13940a56ff44?auto=format&fit=crop&w=240&h=320&q=80',
    itemCount: 167
  },
  {
    id: '4',
    name: 'Wall Sconces',
    image: 'https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?auto=format&fit=crop&w=240&h=320&q=80',
    itemCount: 92
  },
  {
    id: '5',
    name: 'Floor Lamps',
    image: 'https://ts4.mm.bing.net/th?id=OIP.b3pTI7c6x6DQDtu4gkrDjwHaIJ&pid=15.1',
    itemCount: 50
  },
  {
    id: '6',
    name: 'Table Lamps',
    image: 'https://th.bing.com/th/id/OIP.MISpeGWDixQHUkpQynTyLgHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain',
    itemCount: 65
  },
  {
    id: '7',
    name: 'Floor Lamps',
    image: 'https://cdn.manomano.com/livingandhome-arched-floor-lamp-tall-curved-design-with-marble-base-orange-lampshade145-to-220cm-P-12840388-28210311_1.jpg',
    itemCount:45
  },
  {
    id: '8',
    name: 'Wall Lamps',
    image: 'https://www.homestratosphere.com/wp-content/uploads/2018/10/wall-lamp-oct292018-min.jpg',
    itemCount:85
  },

  

];


export default function CategoryNav() {
  const scrollRef = useRef(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -240 : 240;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-12 bg-white overflow-y-hidden" ref={inViewRef}>
      <div className="container mx-auto py-4 px-4 overflow-x-hidden-hidden">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x py-4 px-4 snap-mandatory scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className={`flex-none w-60 group cursor-pointer transform transition-transform duration-300 hover:scale-105 snap-start ${
                inView ? 'animate-fade-in' : 'opacity-0'
              }`}
            >
              <div className="relative h-80 mb-4 overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
              </div>
              
           


              <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
              <p className="text-gray-600">{category.itemCount} items</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}