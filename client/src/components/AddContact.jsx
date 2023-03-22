import { useState } from 'react';
import { addContact } from '../services/paramsAPI';

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
    addContact(contact);
  }

  return (
    <div>
      <h2>Add Contact:</h2>
      <form onSubmit={sumbitForm}>
        <table>
          <tbody>
            <tr><td>Name:</td><td>
              <input type="text" name="userName" value={contact?.userName} onChange={(e) => onChangeHandler(e.target)} />
              </td></tr>
            <tr><td>Phone:</td><td>
              <input type="text" name="phoneNumber" value={contact?.phoneNumber} onChange={(e) => onChangeHandler(e.target)} />
            </td></tr>
            <tr><td>
              <button type="submit">Submit</button>
            </td></tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AddContacts;
