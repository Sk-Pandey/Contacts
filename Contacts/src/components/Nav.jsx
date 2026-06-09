import React from "react";

const Nav = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="nav-bar px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="nav-icon shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18H12.01"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M9 7H15M9 11H13"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="min-w-0">
              <h1 className="nav-title truncate">Connectly</h1>
              <p className="nav-sub truncate">Your personal address book</p>
            </div>
          </div>

          {/* Right badge */}
          <div className="nav-badge hidden sm:flex items-center gap-2">
            <span className="pulse-dot"></span>
            <span>Active</span>
          </div>
        </div>
      </div>

      <style>{`
        .nav-bar {
          background: rgba(10, 10, 20, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(139, 92, 246, 0.18);
          box-shadow: 0 1px 40px rgba(139, 92, 246, 0.08);
        }
        .nav-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 18px rgba(124, 58, 237, 0.5);
        }
        @media (min-width: 640px) {
          .nav-icon { width: 44px; height: 44px; border-radius: 14px; }
        }
        .nav-title {
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(90deg, #a78bfa, #818cf8, #c4b5fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @media (min-width: 640px) { .nav-title { font-size: 1.3rem; } }
        .nav-sub {
          font-size: 0.7rem;
          color: rgba(148, 163, 184, 0.7);
          margin-top: 1px;
        }
        .nav-badge {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #a78bfa;
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.25);
          border-radius: 20px;
          padding: 4px 12px;
          gap: 6px;
        }
        .pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 8px #34d399;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
      `}</style>
    </header>
  );
};

export default Nav;
