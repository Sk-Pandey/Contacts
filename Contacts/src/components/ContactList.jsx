import React from "react";

const ContactList = ({ contacts, search, deleteContact, edit }) => {
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.email.toLowerCase().includes(search.toLowerCase()) ||
      contact.phone.includes(search),
  );

  return (
    <div className="mt-6 sm:mt-8">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-5">
        <h2 className="text-lg sm:text-xl font-bold text-white">
          Saved Contacts
        </h2>

        <span className="badge badge-primary badge-lg self-start sm:self-auto">
          {contacts.length} Contact{contacts.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Contact List */}
      <div className="space-y-4">
        {filteredContacts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 bg-slate-900/30 p-6 sm:p-10 text-center">
            <div className="text-4xl sm:text-5xl mb-3">📭</div>

            <h3 className="text-lg sm:text-xl font-semibold text-white">
              No Contacts Found
            </h3>

            <p className="mt-2 text-sm sm:text-base text-slate-400">
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
                className="group rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm p-4 sm:p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  {/* Left Section */}
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
                    {/* Avatar */}
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-lg sm:text-xl font-bold text-white shadow-md capitalize shrink-0">
                      {person.name.charAt(0)}
                    </div>

                    {/* Contact Details */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-white capitalize break-words">
                        {person.name}
                      </h3>

                      <div className="mt-1 flex items-start gap-2 text-sm text-slate-400">
                        <span className="shrink-0">📞</span>
                        <span className="break-all">{person.phone}</span>
                      </div>

                      <div className="mt-1 flex items-start gap-2 text-sm text-slate-500">
                        <span className="shrink-0">📧</span>
                        <span className="break-all">{person.email}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="flex items-center gap-2 self-end sm:self-auto">
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
