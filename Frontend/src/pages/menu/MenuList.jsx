import React from "react";
import Header from "../../components/Header";
import Cart from "./Cart";
import Category from "./Category";
import Menu from "./Menu";

const MenuList = () => {
  return (
    <>
    <div className="h-screen flex flex-col bg-background-light">
      <Header />

      <main className="flex flex-1 overflow-hidden">
        {/* LEFT */}
        <section className="flex-1 flex flex-col overflow-hidden">
          <Category />
          <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-slate-50/50">
            <Menu />
          </div>
        </section>

        {/* RIGHT */}
        <Cart />
      </main>
    </div>
    </>
  );
}

export default MenuList;
