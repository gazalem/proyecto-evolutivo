import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

function ContactComponent({ contact }) {
    const [status, setStatus] = useState(contact.isOnline)
    const changeState = () => {
        setStatus(!status)
    }
  return (
    <div>
        <h1>Nombre: {contact.name}</h1>
        <h2>Apellido: {contact.lastname}</h2>
        <h3>Email: {contact.email}</h3>
        <h4 onClick={changeState}>Estado: {status ? "Contacto En Línea" : "Contacto No Disponible"}</h4>
    </div>
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
}

export default ContactComponent
