import React from "react";

const Nav = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl">
      <div className="navbar border-b border-white/10 bg-slate-900/70 px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-white text-lg">
            📞
          </div>

          <div>
            <h1 className="text-xl font-bold">Contacts</h1>
            <p className="text-xs text-slate-400">Manage your connections</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
