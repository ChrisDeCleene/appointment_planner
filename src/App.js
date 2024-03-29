import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  const [contacts, setContacts] = useState([]);

  const addContact = (name, phone, email) => {
    const contact = {
      name: name,
      phone: phone,
      email: email
    }

    setContacts((prev) => ([
      ...prev,
      contact
    ]))
  };

  const [appointments, setAppointments] = useState([]);

  const addAppointment = (title, contact, date, time) => {
    const appointment = {
      title: title, 
      contact: contact, 
      date: date, 
      time: time
    }

    setAppointments((prev) => ([
      ...prev,
      appointment
    ]))
  };

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage 
              contacts={contacts} 
              addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage 
              appointments={appointments} 
              addAppointment={addAppointment} 
              contacts={contacts} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
