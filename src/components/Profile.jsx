import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { 
  User, 
  Package, 
  Heart, 
  MapPin, 
  CreditCard, 
  Bell, 
  Lock,
  ChevronRight,
  ShoppingBag,
  LogOut
} from 'lucide-react';

const Profile = () => {
  const [user] = useState({
    name: 'Chauhan Dhaval',
    email: 'dhavalchauhan00321@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    memberSince: 'January 2024',
    orders: [
      {
        id: '#ORD-2024-001',
        date: '15 Mar 2024',
        status: 'Delivered',
        amount: '$156.00'
      },
      {
        id: '#ORD-2024-002',
        date: '10 Mar 2024',
        status: 'In Transit',
        amount: '$89.99'
      }
    ]
  });

  const [activeSection, setActiveSection] = useState('profile');
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleQuickAction = (action) => {
    setActiveSection(action.toLowerCase());
    // You would typically navigate to the respective page here
    console.log(`Navigating to ${action}`);
  };

  const handleOrderClick = (orderId) => {
    console.log(`Viewing order details for ${orderId}`);
    // You would typically navigate to order details page
  };

  const handleViewAllOrders = () => {
    console.log('Viewing all orders');
    setActiveSection('orders');
  };

  const handleSettingClick = (setting) => {
    if (setting === 'Sign Out') {
      setShowLogoutConfirm(true);
    } else {
      setActiveSection(setting.toLowerCase().replace(/ /g, '-'));
      console.log(`Navigating to ${setting}`);
    }
  };

  const handleLogout = () => {
    console.log('Logging out...');
    // Add your logout logic here
    setShowLogoutConfirm(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center gap-6">
          <img 
            src={user.avatar} 
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-gray-50 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => handleSettingClick('Edit Profile')}
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-400 mt-1">Member since {user.memberSince}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Package, label: 'My Orders' },
                { icon: Heart, label: 'Wishlist' },
                { icon: MapPin, label: 'Addresses' },
                { icon: CreditCard, label: 'Payment Methods' },
                { icon: Bell, label: 'Notifications' },
                { icon: Lock, label: 'Security' }
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(item.label)}
                  className={`flex flex-col items-center justify-center p-4 rounded-lg border ${
                    activeSection === item.label.toLowerCase()
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-100 hover:border-blue-500 hover:bg-blue-50'
                  } transition-all duration-200 active:scale-95`}
                >
                  <item.icon className="w-6 h-6 text-blue-600 mb-2" />
                  <span className="text-sm text-gray-600">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Recent Orders</h2>
              <button 
                onClick={handleViewAllOrders}
                className="text-blue-600 text-sm hover:underline hover:text-blue-700 transition-colors"
              >
                View All
              </button>
            </div>
            <div className="divide-y">
              {user.orders.map((order) => (
                <div 
                  key={order.id} 
                  onClick={() => handleOrderClick(order.id)}
                  className="py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors rounded-lg px-3"
                >
                  <div>
                    <p className="font-medium text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{order.amount}</p>
                    <p className="text-sm text-green-600">{order.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Settings Panel */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Settings</h2>
          <div className="space-y-4">
            {[
              { icon: User, label: 'Edit Profile',link: './EditProfile' },
              { icon: ShoppingBag, label: 'Shopping Preferences' },
              { icon: Bell, label: 'Notification Settings' },
              { icon: Lock, label: 'Privacy & Security' },
              { icon: LogOut, label: 'Sign Out', className: 'text-red-600' }
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleSettingClick(item.label)}
                className={`w-full flex items-center justify-between p-3 rounded-lg ${
                  activeSection === item.label.toLowerCase().replace(/ /g, '-')
                    ? 'bg-gray-50'
                    : 'hover:bg-gray-50'
                } transition-colors active:bg-gray-100`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`w-5 h-5 ${item.className || 'text-gray-600'}`} />
                  <Link to={item.link}><span className={`text-sm ${item.className || 'text-gray-600'}`}>{item.label}</span></Link>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold mb-2">Confirm Logout</h3>
            <p className="text-gray-600 mb-4">Are you sure you want to log out?</p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;