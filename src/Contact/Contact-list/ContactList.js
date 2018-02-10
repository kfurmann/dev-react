import React from 'react';
import Contact from '../Contact-single/Contact'

function ContactList({title, users}) {
  return (
      <div>
        <h1 style={{marginLeft: '1rem'}}>{title}</h1>
        {users.map((u) => {
          return <Contact user={u} key={u.id.value}/>
        })}
      </div>
  )
}

export default ContactList;