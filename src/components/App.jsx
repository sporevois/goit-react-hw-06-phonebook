import FormAddContact from './FormAddContact/FormAddContact';
import ContatList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <div
      style={{
        padding: '15px',
        fontSize: '20px',
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <FormAddContact />
      <h2>Contacts</h2>
      <Filter />
      <ContatList />
    </div>
  );
};
