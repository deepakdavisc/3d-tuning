import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-5 py-3 c-space">
          <a
            className="text-neutral-400 text-xl font-bold hover:text-white transition-colors"
            href="#home"
          >
            3D Cars
          </a>
          <button>
            <img src="/assets/menu.svg" alt="menu" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
