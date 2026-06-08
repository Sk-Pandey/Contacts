import React from "react";

const ContactList = () => {
  return (
    <div className="mt-6">
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Saved Contacts
        </li>

        <li className="list-row">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center font-bold bg-slate-600 rounded-full w-10 h-10 ">
              D
            </div>
          </div>
          <div>
            <div>Dio Lupa</div>
            <div className="text-2xs uppercase font-semibold opacity-60">
              9415251793
            </div>
            <div className="text-xs uppercase font-semibold opacity-60">
              DioLupa@gmail.com
            </div>
          </div>
          <button className="btn btn-square btn-ghost" aria-label="Edit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-[1.2em]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487a2.1 2.1 0 1 1 2.97 2.97L7.5 19.79l-4 1 1-4L16.862 4.487Z"
              />
            </svg>
          </button>

          <button
            className="btn btn-square btn-ghost text-error"
            aria-label="Delete"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-[1.2em]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6h18M8 6V4h8v2m-9 0v14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ContactList;
