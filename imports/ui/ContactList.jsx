import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { useTracker } from "meteor/react-meteor-data";
const ContactList = () => {
  const contacts = useTracker(() => ContactsCollection.find({}).fetch());
  return (
    <>
      <h3>Contact Lists</h3>
      {contacts.map((contact) => {
        return (
          <li key={contact.email}>
            {contact.name} - {contact.email}
          </li>
        );
      })}
    </>
  );
};

export default ContactList;
