import React from "react";
import ContactList from "./ContactList";
import ContactsForm from "./ContactsForm";
import Header from "./Header";

//Contact: name, email, imageurl
export const App = () => (
  <div>
    <Header />

    <div className="min-h-full">
      <div className="max-w-4xl mx-auto p-2">
        <ContactsForm />
        <ContactList />
      </div>
    </div>
  </div>
);
