import React, { useState } from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import { Search } from "./components/Search";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  // useState to handle values of form input
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  // uses=State to handle List Of Contacts
  const [contacts, setContacts] = useState([]);

  // Function to handle input SetFormData
  const handleData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // UseState to handle Search
  const [search, setSearch] = useState("");

  // Function to add contact
  const saveContact = () => {
    // Check empty fields
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      alert("All fields are required!");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address!");
      return;
    }

    // Phone validation (exactly 10 digits)
    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(formData.phone)) {
      alert("Phone number must contain exactly 10 digits!");
      return;
    }

    // Save contact
    setContacts((prev) => [...prev, { ...formData, id: uuidv4() }]);

    // Reset form
    setFormData({
      id: "",
      name: "",
      email: "",
      phone: "",
    });
  };

  // delete contact function
  const deleteContact = (id) => {
    setContacts(contacts.filter((person) => person.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <Nav />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <Form
          handleData={handleData}
          formData={formData}
          setFormData={setFormData}
          saveContact={saveContact}
        />

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-2xl">
          <Search search={search} setSearch={setSearch} />
          <ContactList contacts={contacts} search={search} deleteContact={deleteContact}/>
        </div>
      </div>
    </div>
  );
};

export default App;
