import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <input 
        id='name' 
        type='text' 
        placeholder='Contact Name' 
        value={name} 
        required
        onChange={(e) => setName(e.target.value)} >
       </input>
      <input 
        id='phone' 
        type='tel'  
        placeholder='Contact Phone Number' 
        value={phone}
        pattern='^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$'
        required
        onChange={(e) => setPhone(e.target.value)}>
      </input>
      <input 
        id='email' 
        type='email' 
        placeholder='Contact Email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)} ></input>
      <input type='submit'></input>
    </form>
  );
};
