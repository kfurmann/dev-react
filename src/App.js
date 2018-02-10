import React from 'react';
import ContactList from './Contact/Contact-list/ContactList';
import "./App.css";

import * as users from './mockUsers';

function App() {

  return (
      <div className="app">
        <ContactList title="All contacts" users={users}></ContactList>
        <ContactList title="Favorites" users={users.filter((u) => u.favorite)}></ContactList>
      </div>
  )
}

export default App;