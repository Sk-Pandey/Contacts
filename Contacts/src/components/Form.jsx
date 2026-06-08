import React from "react";

const Form = ({ formData, setFormData, handleData, saveContact, editId }) => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md lg:max-w-lg rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 md:p-8 shadow-xl">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-5 sm:mb-6">
          {editId ? "Update Contact" : "Add New Contact"}
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleData}
            placeholder="Full Name"
            className="input input-bordered w-full bg-slate-900/50 text-sm sm:text-base"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleData}
            placeholder="Email Address"
            className="input input-bordered w-full bg-slate-900/50 text-sm sm:text-base"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleData}
            placeholder="Phone Number"
            className="input input-bordered w-full bg-slate-900/50 text-sm sm:text-base"
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                saveContact();
              }
            }}
          />

          <button
            className="btn btn-primary w-full rounded-xl text-sm sm:text-base"
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
