import React from "react";

export const Search = ({ search, setSearch }) => {
  return (
    <div className="search-wrap">
      <div className="search-box">
        <span className="search-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle
              cx="11"
              cy="11"
              r="8"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m21 21-4.3-4.3"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <input
          type="search"
          className="search-input"
          placeholder="Search by name, email or phone…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button
            className="search-clear"
            onClick={() => setSearch("")}
            aria-label="Clear search"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>

      <style>{`
        .search-wrap {
          margin-bottom: 20px;
        }
        .search-box {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
        }
        .search-icon {
          position: absolute;
          left: 15px;
          color: rgba(148, 163, 184, 0.5);
          display: flex;
          align-items: center;
          pointer-events: none;
          z-index: 1;
        }
        .search-input {
          width: 100%;
          padding: 12px 44px 12px 44px;
          background: rgba(15, 10, 35, 0.6);
          border: 1px solid rgba(139, 92, 246, 0.18);
          border-radius: 14px;
          color: #e2e8f0;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }
        .search-input::placeholder { color: rgba(100, 116, 139, 0.5); }
        .search-input::-webkit-search-cancel-button { display: none; }
        .search-input:focus {
          border-color: rgba(139, 92, 246, 0.55);
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.12), 0 4px 20px rgba(124, 58, 237, 0.1);
          background: rgba(20, 12, 48, 0.75);
        }
        @media (min-width: 640px) {
          .search-input { padding: 13px 44px 13px 46px; font-size: 0.95rem; border-radius: 16px; }
        }
        .search-clear {
          position: absolute;
          right: 14px;
          color: rgba(148, 163, 184, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(139, 92, 246, 0.12);
          border: none;
          border-radius: 6px;
          width: 26px;
          height: 26px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .search-clear:hover {
          background: rgba(239, 68, 68, 0.18);
          color: #f87171;
        }
      `}</style>
    </div>
  );
};
