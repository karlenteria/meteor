import React, { useState } from "react";
import { ContactsCollection } from "../api/ContactsCollection";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const saveContact = () => {
    console.log({ name, email, imageUrl });
    ContactsCollection.insert({ name, email, imageUrl });
    setName("");
    setEmail("");
    setImageUrl("");
  };
  return (
    <>
      <h2>Contacts Form</h2>
      <form>
        <div style={{ marginBottom: 3 }}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: 3 }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: 3 }}>
          <label htmlFor="imageUrl">Image</label>
          <input
            type="text"
            value={imageUrl}
            id="imageUrl"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button type="button" onClick={saveContact}>
          Save Contact
        </button>
      </form>
    </>
  );
};

export default ContactsForm;
