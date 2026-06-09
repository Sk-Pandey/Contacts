import React from "react";

const Form = ({ formData, setFormData, handleData, saveContact, editId }) => {
  return (
    <div className="form-wrap">
      <div className="form-card">
        {/* Card Header */}
        <div className="form-header">
          <div className="form-header-icon">
            {editId ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5v14M5 12h14"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
          <div>
            <h2 className="form-title">
              {editId ? "Edit Contact" : "New Contact"}
            </h2>
            <p className="form-subtitle">
              {editId
                ? "Update the details below"
                : "Fill in the details below"}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="form-divider" />

        {/* Fields */}
        <div className="form-fields">
          <div className="field-group">
            <label className="field-label">Full Name</label>
            <div className="field-wrapper">
              <span className="field-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleData}
                placeholder="e.g. Rohan Sharma"
                className="field-input"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="field-group">
            <label className="field-label">Email Address</label>
            <div className="field-wrapper">
              <span className="field-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="22,6 12,13 2,6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleData}
                placeholder="e.g. rohan@email.com"
                className="field-input"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="field-group">
            <label className="field-label">Phone Number</label>
            <div className="field-wrapper">
              <span className="field-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18L5 0a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleData}
                placeholder="10-digit number"
                className="field-input"
                autoComplete="off"
                onKeyDown={(e) => {
                  if (e.key === "Enter") saveContact();
                }}
              />
            </div>
          </div>

          <button
            className={`save-btn ${editId ? "save-btn--edit" : "save-btn--add"}`}
            onClick={saveContact}
          >
            {editId ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="17,21 17,13 7,13 7,21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="7,3 7,8 15,8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Save Changes
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 5v14M5 12h14"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                Add Contact
              </>
            )}
          </button>
        </div>
      </div>

      <style>{`
        .form-wrap {
          display: flex;
          justify-content: center;
        }
        .form-card {
          width: 100%;
          max-width: 460px;
          background: rgba(18, 12, 38, 0.7);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 20px;
          padding: 24px 20px;
          box-shadow: 0 8px 40px rgba(124, 58, 237, 0.12), 0 0 0 1px rgba(255,255,255,0.03) inset;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .form-card:hover {
          border-color: rgba(139, 92, 246, 0.38);
          box-shadow: 0 12px 50px rgba(124, 58, 237, 0.2);
        }
        @media (min-width: 640px) {
          .form-card { padding: 30px 28px; border-radius: 24px; }
        }
        .form-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }
        .form-header-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          display: flex;
          align-items: center;
          justify-content: center;
          shrink: 0;
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.4);
          flex-shrink: 0;
        }
        .form-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #f1f5f9;
          letter-spacing: -0.02em;
        }
        @media (min-width: 640px) { .form-title { font-size: 1.25rem; } }
        .form-subtitle {
          font-size: 0.72rem;
          color: rgba(148, 163, 184, 0.6);
          margin-top: 2px;
        }
        .form-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.25), transparent);
          margin-bottom: 20px;
        }
        .form-fields { display: flex; flex-direction: column; gap: 16px; }
        .field-group { display: flex; flex-direction: column; gap: 7px; }
        .field-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: rgba(167, 139, 250, 0.8);
        }
        .field-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .field-icon {
          position: absolute;
          left: 14px;
          color: rgba(148, 163, 184, 0.5);
          display: flex;
          align-items: center;
          pointer-events: none;
          z-index: 1;
        }
        .field-input {
          width: 100%;
          padding: 11px 14px 11px 40px;
          background: rgba(15, 10, 35, 0.6);
          border: 1px solid rgba(139, 92, 246, 0.18);
          border-radius: 12px;
          color: #e2e8f0;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }
        .field-input::placeholder { color: rgba(100, 116, 139, 0.55); }
        .field-input:focus {
          border-color: rgba(139, 92, 246, 0.6);
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.12);
          background: rgba(20, 12, 45, 0.75);
        }
        @media (min-width: 640px) { .field-input { padding: 13px 14px 13px 42px; font-size: 0.95rem; } }
        .save-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 13px;
          border: none;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
          margin-top: 4px;
          color: white;
        }
        .save-btn--add {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          box-shadow: 0 4px 20px rgba(124, 58, 237, 0.35);
        }
        .save-btn--edit {
          background: linear-gradient(135deg, #0ea5e9, #6366f1);
          box-shadow: 0 4px 20px rgba(14, 165, 233, 0.3);
        }
        .save-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
          box-shadow: 0 8px 28px rgba(124, 58, 237, 0.45);
        }
        .save-btn:active { transform: translateY(0); filter: brightness(0.95); }
        @media (min-width: 640px) { .save-btn { padding: 14px; font-size: 0.95rem; border-radius: 14px; } }
      `}</style>
    </div>
  );
};

export default Form;
