import { useState } from 'react';
import { addContact } from '../services/paramsAPI';
import { TextField, Button } from '@mui/material';

const AddContacts = () => {
  const [contact, setContact] = useState()

  const onChangeHandler = (event) => {
    const {name, value} = event
      setContact((prev) => {
        return {...prev, [name]: value}
      })
  }

  const sumbitForm = (event) => { // TODO: Add validation
    event.preventDefault()
    console.log("--contact--", contact)
    addContact(contact);
  }

  return (
    <div>
      <h2>Add Contact:</h2>
      <form onSubmit={sumbitForm} className='form-wrap'>
        <TextField
          name="userName"
          id="standard-basic"
          label="Name"
          variant="standard"
          onChange={(e) => onChangeHandler(e.target)}
        />
        <TextField
          name="phoneNumber"
          id="standard-basic"
          label="Phone"
          variant="standard"
          onChange={(e) => onChangeHandler(e.target)}
          className='phone-input'
        />
        <Button type="submit" variant="outlined">Add +</Button>
      </form>
    </div>
  );
};

export default AddContacts;
