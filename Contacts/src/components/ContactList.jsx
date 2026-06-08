import React from "react";

const ContactList = () => {
  return (
    <div className="mt-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-white">Saved Contacts</h2>

        <span className="badge badge-primary badge-lg">1 Contact</span>
      </div>

      {/* Contact List */}
      <div className="space-y-4">
        <div className="group rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
          <div className="flex items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              {/* First Letter Avatar */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-xl font-bold text-white shadow-md">
                D
              </div>

              {/* Contact Details */}
              <div>
                <h3 className="text-lg font-semibold text-white">Dio Lupa</h3>

                <div className="mt-1 flex items-center gap-2 text-sm text-slate-400">
                  <span>📞</span>
                  <span>9415251793</span>
                </div>

                <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                  <span>📧</span>
                  <span>DioLupa@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              <button
                className="btn btn-circle btn-sm btn-ghost hover:bg-info/20"
                aria-label="Edit"
              >
                ✏️
              </button>

              <button
                className="btn btn-circle btn-sm btn-ghost hover:bg-error/20"
                aria-label="Delete"
              >
                🗑️
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
