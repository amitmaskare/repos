import React from "react";
import { Moon, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6 justify-between">
      
      {/* Left Section */}
      <div className="flex items-center gap-4">
        
        {/* Logo */}
        <div className="h-10 w-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold text-lg">
          R
        </div>

        {/* Title */}
        <h1 className="text-lg font-semibold text-gray-900">
          Table Dashboard
        </h1>

        {/* Status */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm font-medium">
          <span className="h-2 w-2 bg-green-500 rounded-full"></span>
          System Online
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        
        {/* Icons */}
        <button className="text-gray-500 hover:text-gray-800 transition">
          <Moon size={20} />
        </button>

        <button className="text-gray-500 hover:text-gray-800 transition">
          <Settings size={20} />
        </button>

        {/* Divider */}
        <div className="h-8 w-px bg-gray-200" />

        {/* Profile */}
        <div className="flex items-center gap-3">
          <div className="text-right leading-tight">
            <p className="text-sm font-semibold text-gray-900">
              Alex Manager
            </p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Admin
            </p>
          </div>

          <div className="h-9 w-9 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-semibold">
            A
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
