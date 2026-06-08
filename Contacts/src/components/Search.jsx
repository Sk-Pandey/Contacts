import React from "react";

export const Search = () => {
  return (
    <div className="flex justify-center">
      <label className="input input-bordered flex items-center gap-2 w-full max-w-lg bg-slate-900/50">
        <svg
          className="h-5 w-5 opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>

        <input
          type="search"
          className="grow"
          placeholder="Search contacts..."
        />
      </label>
    </div>
  );
};
