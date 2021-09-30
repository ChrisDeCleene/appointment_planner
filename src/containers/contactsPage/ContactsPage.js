import React, { useEffect, useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({
  contacts,
  addContact
}) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  useEffect(() => {
    if(contacts.find(contact => contact.name === name)) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [contacts, name])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(duplicate) {
      alert('Contact already exists!');
      return;
    };
    addContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
