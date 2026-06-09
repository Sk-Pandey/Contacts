import React, { useState } from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import { Search } from "./components/Search";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const handleData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveContact = () => {
    if (editId) {
      setContacts(
        contacts.map((person) =>
          person.id === editId ? { ...formData, id: editId } : person,
        ),
      );
      setFormData({ id: "", name: "", email: "", phone: "" });
      setEditId(null);
      return;
    }
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      alert("All fields are required!");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address!");
      return;
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Phone number must contain exactly 10 digits!");
      return;
    }
    setContacts((prev) => [...prev, { ...formData, id: uuidv4() }]);
    setFormData({ id: "", name: "", email: "", phone: "" });
  };

  const deleteContact = (id) => {
    if (editId === id) {
      setEditId(null);
      setFormData({ id: "", name: "", email: "", phone: "" });
    }
    setContacts(contacts.filter((person) => person.id !== id));
  };

  const edit = (id) => {
    setEditId(id);
    const contact = contacts.find((person) => person.id === id);
    setFormData(contact);
  };

  return (
    <div className="app-root">
      {/* Background orbs */}
      <div className="bg-orb bg-orb--1" />
      <div className="bg-orb bg-orb--2" />
      <div className="bg-orb bg-orb--3" />

      <Nav />

      <main className="app-main">
        <div className="app-container">
          {/* Hero label */}
          <div className="hero-label">
            <span>✦</span>
            <span>Manage your connections in one place</span>
          </div>

          {/* Form */}
          <Form
            handleData={handleData}
            formData={formData}
            setFormData={setFormData}
            saveContact={saveContact}
            editId={editId}
          />

          {/* Contacts panel */}
          <div className="contacts-panel">
            <Search search={search} setSearch={setSearch} />
            <ContactList
              contacts={contacts}
              search={search}
              deleteContact={deleteContact}
              edit={edit}
            />
          </div>
        </div>
      </main>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #07050f; }

        .app-root {
          position: relative;
          min-height: 100vh;
          background: radial-gradient(ellipse at 30% 0%, rgba(76, 29, 149, 0.28) 0%, transparent 55%),
                      radial-gradient(ellipse at 80% 80%, rgba(17, 24, 79, 0.35) 0%, transparent 55%),
                      #07050f;
          color: #e2e8f0;
          overflow-x: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
        }

        .bg-orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
          opacity: 0.18;
        }
        .bg-orb--1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #7c3aed, transparent 70%);
          top: -200px; left: -100px;
          animation: floatOrb 18s ease-in-out infinite;
        }
        .bg-orb--2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, #4f46e5, transparent 70%);
          bottom: 100px; right: -120px;
          animation: floatOrb 22s ease-in-out infinite reverse;
        }
        .bg-orb--3 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, #0ea5e9, transparent 70%);
          top: 60%; left: 50%;
          opacity: 0.1;
          animation: floatOrb 16s ease-in-out infinite 4s;
        }
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -20px); }
          66% { transform: translate(-20px, 25px); }
        }

        .app-main {
          position: relative;
          z-index: 1;
          padding: 24px 16px 48px;
        }
        @media (min-width: 640px) { .app-main { padding: 32px 24px 64px; } }
        @media (min-width: 1024px) { .app-main { padding: 40px 32px 80px; } }

        .app-container {
          max-width: 640px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        @media (min-width: 1024px) { .app-container { max-width: 680px; } }

        .hero-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: rgba(167, 139, 250, 0.6);
          margin-bottom: -6px;
        }

        .contacts-panel {
          background: rgba(18, 12, 40, 0.55);
          border: 1px solid rgba(139, 92, 246, 0.15);
          border-radius: 20px;
          padding: 20px 16px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 8px 40px rgba(0,0,0,0.3);
        }
        @media (min-width: 640px) {
          .contacts-panel { padding: 24px 22px; border-radius: 24px; }
        }
      `}</style>
    </div>
  );
};

export default App;
