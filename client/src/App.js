import React from "react";
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';
import './scss/style.scss';

function App() {
  return (
    <div className="App">
      <AddContact />
      <Contacts />
    </div>
  );
}

export default App;
