// import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {
    const defaultContact = new Contact("John", "Wick", "john@babayaba.com", true);

  return (
    <>
    <h2>Su contacto:</h2>
    {/* TODO: Apply for/map to render contact list */}
    <ContactComponent contact={defaultContact}/>
    </>
  )
}

export default ContactListComponent