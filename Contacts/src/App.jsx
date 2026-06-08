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
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <Nav />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <Form formData={formData} setFormData={setFormData} />

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-2xl">
          <Search />
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default App;
