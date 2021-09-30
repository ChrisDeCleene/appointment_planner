import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  contacts,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        name='title'
        type='text'
        placeholder='Appointment Title'
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)} >
      </input>
      <ContactPicker
        name='contact'
        value={contact}
        contacts={contacts}
        onChange={(e) => setContact(e.target.value)}
        placeholder='Appointment With'
        />
      <input
        name='date'
        type='date'
        value={date}
        min={getTodayString()}
        required
        onChange={(e) => setDate(e.target.value)} >
      </input>
      <input
        name='time'
        type='time'
        value={time}
        required
        onChange={(e) => setTime(e.target.value)} >
      </input>
      <input 
        type='submit'
        value='Add Appointment' >
      </input>
    </form>
  );
};
