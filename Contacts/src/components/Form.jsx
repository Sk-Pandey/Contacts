import React from "react";

const Form = () => {
  return (
    <div className="flex justify-center mt-10">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">New Contact</legend>

        <label className="label">Name</label>
        <input type="text" className="input" placeholder="Name" />
        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Phone</label>
        <input type="tel" className="input" placeholder="Phone" />

        <button className="btn btn-soft btn-success mt-4">Save</button>
      </fieldset>
    </div>
  );
};

export default Form;
