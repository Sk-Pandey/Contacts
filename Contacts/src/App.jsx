import React from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import { Search } from "./components/Search";

const App = () => {
  return (
    <div>
      <Nav />
      <Form />
      <div className="mt-10 bg-slate-800 shadow-[0px_0px_150px_50px_white] p-4 m-4 rounded-xl">
        <Search />
        <ContactList />
      </div>
    </div>
  );
};

export default App;
