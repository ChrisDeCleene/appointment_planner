import React from "react";

export const ContactPicker = ({
  name,
  value,
  contacts,
  onChange,
  placeholder
}) => {
  return (
    <select 
      name={name}
      value={value} 
      onChange={onChange}
      placeholder={placeholder} >
      <option 
        key={-1} 
        value={''} 
        selected='selected'>
          Please select contact
      </option>
      {contacts.map((contact, index) => (
        <option 
          key={index} 
          value={contact.name}>
            {contact.name}
        </option>
      ))}
    </select>
  );
};
