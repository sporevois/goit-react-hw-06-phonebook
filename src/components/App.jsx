import FormAddContact from './FormAddContact/FormAddContact';
import ContatList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getFilteredContacts } from 'redux/selectors';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { setFilter } from 'redux/filterSlice';

export const App = () => {
  const contacts = useSelector(getFilteredContacts);
  console.log(contacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value } = event.target;
    const action = setFilter(value);
    dispatch(action);
  };

  const onAddContact = (name, number) => {
    if (isDublicate(name)) {
      return alert(`${name} is already in contacts.`);
    }
    const action = addContact({ name, number });
    dispatch(action);
  };

  const onDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  const isDublicate = name => {
    return contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
  };

  return (
    <div
      style={{
        padding: '15px',
        fontSize: '20px',
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <FormAddContact onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter handleChange={handleChange} filter={filter} />
      <ContatList contacts={contacts} deleteContact={onDeleteContact} />
    </div>
  );
};
