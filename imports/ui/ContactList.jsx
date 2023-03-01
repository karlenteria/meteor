import React, { useState, memo } from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { useSubscribe, useFind } from "meteor/react-meteor-data";
import { SuccessAlert } from "./components/SuccessAlert";

const ContactList = () => {
  const [success, setSuccess] = useState("");

  const isLoading = useSubscribe("allContacts");
  const contacts = useFind(() => {
    return ContactsCollection.find({}, { sort: { createdAt: -1 } });
  });

  const showSuccess = () => {
    setSuccess("Contact Removed!");
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };
  const removeContact = (event, _id) => {
    event.preventDefault();

    Meteor.call("contact.remove", { contactId: _id });
    console.log("success remove");
    showSuccess();
  };
  if (isLoading()) {
    return (
      <div>
        <div className="mt-10">
          <h3 className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
            Loading...
          </h3>
        </div>
      </div>
    );
  }

  const ContactItem = memo(({ contact }) => {
    return (
      <li className="py-4 flex items-center justify-between space-x-3">
        <div className="min-w-0 flex-1 flex items-center space-x-3">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={contact.imageUrl}
              alt=""
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900 truncate">
              {contact.name}
            </p>
            <p className="text-sm font-medium text-gray-500 truncate">
              {contact.email}
            </p>
          </div>
          <div>
            <a
              href=""
              onClick={(event) => removeContact(event, contact._id)}
              className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-md"
            >
              Remove
            </a>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div>
      <div className="mt-10">
        {success && <SuccessAlert message={success} />}
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Contact List
        </h3>
        <ul
          role="list"
          className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
        >
          {contacts.map((contact) => (
            <ContactItem key={contact._id} contact={contact} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ContactList;
