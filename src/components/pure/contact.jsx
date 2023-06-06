import { useState } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

function ContactComponent({ contact }) {
    const [status, setStatus] = useState(contact.isOnline)
    const changeState = () => {
        setStatus(!status)
    }
  return (
    <div>
        <h3>Nombre: {contact.name}</h3>
        <h4>Apellido: {contact.lastname}</h4>
        <h5>Email: {contact.email}</h5>
        <h6>Estado: {status ? "🟢 Contacto - En Línea" : "🔴 Contacto - No Disponible"}</h6>
        <button onClick={changeState}>Cambiar Estado</button>
    </div>
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
}

export default ContactComponent
