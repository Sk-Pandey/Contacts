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
      <Search />
      <ContactList />
    </div>
  );
};

export default App;
