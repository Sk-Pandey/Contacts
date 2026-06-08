import React from "react";

const ContactList = ({ contacts, search, deleteContact, edit }) => {
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.email.toLowerCase().includes(search.toLowerCase()) ||
      contact.phone.includes(search),
  );

  return (
    <div className="mt-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-white">Saved Contacts</h2>

        <span className="badge badge-primary badge-lg">
          {contacts.length} Contact{contacts.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Contact List */}
      <div className="space-y-4">
        {filteredContacts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 bg-slate-900/30 p-10 text-center">
            <div className="text-5xl mb-3">📭</div>

            <h3 className="text-xl font-semibold text-white">
              No Contacts Found
            </h3>

            <p className="mt-2 text-slate-400">
              {contacts.length === 0
                ? "You haven't added any contacts yet."
                : "No contacts match your search."}
            </p>
          </div>
        ) : (
          filteredContacts.map((person) => {
            return (
              <div
                key={person.id}
                className="group rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-center justify-between">
                  {/* Left Section */}
                  <div className="flex items-center gap-4">
                    {/* First Letter Avatar */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-xl font-bold text-white shadow-md capitalize">
                      {person.name.charAt(0)}
                    </div>

                    {/* Contact Details */}
                    <div>
                      <h3 className="text-lg font-semibold text-white capitalize">
                        {person.name}
                      </h3>

                      <div className="mt-1 flex items-center gap-2 text-sm text-slate-400">
                        <span>📞</span>
                        <span>{person.phone}</span>
                      </div>

                      <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                        <span>📧</span>
                        <span>{person.email}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="flex items-center gap-2">
                    <button
                      className="btn btn-circle btn-sm btn-ghost hover:bg-info/20"
                      aria-label="Edit"
                      onClick={() => edit(person.id)}
                    >
                      ✏️
                    </button>

                    <button
                      className="btn btn-circle btn-sm btn-ghost hover:bg-error/20"
                      aria-label="Delete"
                      onClick={() => deleteContact(person.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ContactList;
