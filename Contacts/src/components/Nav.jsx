import React from "react";

const Nav = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl">
      <div className="navbar border-b border-white/10 bg-slate-900/70 px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white text-lg shadow-md shrink-0">
            📞
          </div>

          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl font-bold truncate">Contacts</h1>

            <p className="text-xs text-slate-400 truncate">
              Manage your connections
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
