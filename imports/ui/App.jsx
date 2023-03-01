import React from "react";
import ContactList from "./ContactList";
import ContactsForm from "./ContactsForm";

//Contact: name, email, imageurl
export const App = () => (
  <div>
    <h1>Meteor Wallet</h1>
    <ContactsForm />
    <ContactList/>
  </div>
);
