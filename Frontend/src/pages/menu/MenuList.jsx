import React from "react";
import Cart from "./Cart";
import Category from "./Category";
import Menu from "./Menu";

const MenuList = () => {
  return (
    <div className="flex h-full gap-4">
      
      {/* LEFT CONTENT */}
      <div className="flex-1 flex flex-col bg-white rounded-xl overflow-hidden">
        <Category />

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-slate-50/50">
          <Menu />
        </div>
      </div>

      {/* RIGHT CART */}
      <div className="w-[360px] shrink-0">
        <Cart />
      </div>

    </div>
  );
};

export default MenuList;
