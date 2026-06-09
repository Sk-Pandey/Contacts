import React from "react";

// Distinct gradient sets per initial letter group
const avatarGradients = [
  "linear-gradient(135deg, #7c3aed, #4f46e5)",
  "linear-gradient(135deg, #0ea5e9, #6366f1)",
  "linear-gradient(135deg, #ec4899, #8b5cf6)",
  "linear-gradient(135deg, #10b981, #0ea5e9)",
  "linear-gradient(135deg, #f59e0b, #ef4444)",
  "linear-gradient(135deg, #06b6d4, #3b82f6)",
];

function getGradient(name) {
  const code = name.charCodeAt(0) || 0;
  return avatarGradients[code % avatarGradients.length];
}

const ContactList = ({ contacts, search, deleteContact, edit }) => {
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.email.toLowerCase().includes(search.toLowerCase()) ||
      contact.phone.includes(search),
  );

  return (
    <div className="cl-root">
      {/* Header row */}
      <div className="cl-header">
        <h2 className="cl-heading">Contacts</h2>
        <span className="cl-badge">{contacts.length} saved</span>
      </div>

      {/* List */}
      <div className="cl-list">
        {filteredContacts.length === 0 ? (
          <div className="cl-empty">
            <div className="cl-empty-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                  stroke="rgba(139,92,246,0.5)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="9"
                  cy="7"
                  r="4"
                  stroke="rgba(139,92,246,0.5)"
                  strokeWidth="1.8"
                />
                <path
                  d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                  stroke="rgba(139,92,246,0.3)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="cl-empty-title">
              {contacts.length === 0 ? "No contacts yet" : "Nothing matches"}
            </p>
            <p className="cl-empty-sub">
              {contacts.length === 0
                ? "Add your first contact using the form above."
                : "Try a different name, email or number."}
            </p>
          </div>
        ) : (
          filteredContacts.map((person) => (
            <div key={person.id} className="cl-card">
              {/* Glow line top */}
              <div className="cl-card-glow" />

              <div className="cl-card-inner">
                {/* Avatar */}
                <div
                  className="cl-avatar"
                  style={{ background: getGradient(person.name) }}
                >
                  {person.name.charAt(0).toUpperCase()}
                </div>

                {/* Details */}
                <div className="cl-details">
                  <h3 className="cl-name">{person.name}</h3>
                  <div className="cl-info">
                    <span className="cl-info-icon">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18L5 0a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{person.phone}</span>
                  </div>
                  <div className="cl-info cl-info--muted">
                    <span className="cl-info-icon">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
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
                        />
                      </svg>
                    </span>
                    <span>{person.email}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="cl-actions">
                  <button
                    className="cl-btn cl-btn--edit"
                    aria-label="Edit contact"
                    onClick={() => edit(person.id)}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    className="cl-btn cl-btn--delete"
                    aria-label="Delete contact"
                    onClick={() => deleteContact(person.id)}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <polyline
                        points="3,6 5,6 21,6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 11v6M14 11v6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <style>{`
        .cl-root { margin-top: 4px; }
        .cl-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 8px;
        }
        .cl-heading {
          font-size: 1rem;
          font-weight: 800;
          color: #f1f5f9;
          letter-spacing: -0.01em;
        }
        @media (min-width: 640px) { .cl-heading { font-size: 1.15rem; } }
        .cl-badge {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #a78bfa;
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.25);
          border-radius: 20px;
          padding: 4px 12px;
        }
        .cl-list { display: flex; flex-direction: column; gap: 10px; }

        /* Empty state */
        .cl-empty {
          border: 1px dashed rgba(139, 92, 246, 0.2);
          border-radius: 18px;
          padding: 40px 24px;
          text-align: center;
          background: rgba(15, 10, 35, 0.3);
        }
        .cl-empty-icon {
          width: 60px;
          height: 60px;
          border-radius: 18px;
          background: rgba(139, 92, 246, 0.08);
          border: 1px solid rgba(139, 92, 246, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }
        .cl-empty-title {
          font-size: 1rem;
          font-weight: 700;
          color: #e2e8f0;
          margin-bottom: 6px;
        }
        .cl-empty-sub { font-size: 0.82rem; color: rgba(148, 163, 184, 0.55); max-width: 280px; margin: 0 auto; }

        /* Card */
        .cl-card {
          position: relative;
          background: rgba(18, 12, 40, 0.65);
          border: 1px solid rgba(139, 92, 246, 0.14);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
        }
        .cl-card:hover {
          border-color: rgba(139, 92, 246, 0.4);
          box-shadow: 0 6px 30px rgba(124, 58, 237, 0.15);
          transform: translateY(-1px);
        }
        .cl-card-glow {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.4), transparent);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .cl-card:hover .cl-card-glow { opacity: 1; }
        .cl-card-inner {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px;
        }
        @media (min-width: 640px) { .cl-card-inner { padding: 16px 18px; gap: 16px; } }

        /* Avatar */
        .cl-avatar {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 800;
          color: white;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          text-transform: uppercase;
        }
        @media (min-width: 640px) { .cl-avatar { width: 52px; height: 52px; font-size: 1.2rem; border-radius: 16px; } }

        /* Details */
        .cl-details { flex: 1; min-width: 0; }
        .cl-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: #f1f5f9;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-transform: capitalize;
          margin-bottom: 5px;
        }
        @media (min-width: 640px) { .cl-name { font-size: 0.98rem; } }
        .cl-info {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: rgba(148, 163, 184, 0.75);
          margin-bottom: 3px;
          overflow: hidden;
        }
        .cl-info span:last-child {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .cl-info--muted { color: rgba(100, 116, 139, 0.6); }
        .cl-info-icon {
          color: rgba(139, 92, 246, 0.55);
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .cl-info--muted .cl-info-icon { color: rgba(100, 116, 139, 0.5); }

        /* Actions */
        .cl-actions { display: flex; gap: 8px; flex-shrink: 0; }
        .cl-btn {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          border: 1px solid transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
          background: transparent;
        }
        .cl-btn--edit {
          color: rgba(99, 102, 241, 0.7);
          background: rgba(99, 102, 241, 0.08);
          border-color: rgba(99, 102, 241, 0.12);
        }
        .cl-btn--edit:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.4);
          color: #818cf8;
          transform: scale(1.1);
          box-shadow: 0 0 14px rgba(99, 102, 241, 0.25);
        }
        .cl-btn--delete {
          color: rgba(248, 113, 113, 0.6);
          background: rgba(239, 68, 68, 0.07);
          border-color: rgba(239, 68, 68, 0.1);
        }
        .cl-btn--delete:hover {
          background: rgba(239, 68, 68, 0.18);
          border-color: rgba(239, 68, 68, 0.35);
          color: #f87171;
          transform: scale(1.1);
          box-shadow: 0 0 14px rgba(239, 68, 68, 0.2);
        }
        .cl-btn:active { transform: scale(0.95); }
        @media (min-width: 640px) {
          .cl-btn { width: 36px; height: 36px; border-radius: 11px; }
        }
      `}</style>
    </div>
  );
};

export default ContactList;
