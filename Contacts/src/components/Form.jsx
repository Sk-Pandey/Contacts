import React from "react";

const Form = ({ formData, setFormData, handleData, saveContact, editId }) => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl">
        <h2 className="text-xl font-bold mb-5">Add New Contact</h2>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleData}
            placeholder="Full Name"
            className="input input-bordered w-full bg-slate-900/50"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleData}
            placeholder="Email Address"
            className="input input-bordered w-full bg-slate-900/50"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleData}
            placeholder="Phone Number"
            className="input input-bordered w-full bg-slate-900/50"
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                saveContact();
              }
            }}
          />

          <button
            className="btn btn-primary w-full rounded-xl"
            onClick={saveContact}
          >
            {editId ? "Update Contact" : "Save Contact"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
