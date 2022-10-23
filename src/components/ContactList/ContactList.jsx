import styles from '../ContactList/ContactList.module.css';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

const ContatList = () => {
  const { contacts } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact => {
      const normalizedName = contact.name.toLowerCase();
      const result = normalizedName.includes(normalizedFilter);
      return result;
    });
    return filteredContacts;
  };

  return (
    <ul>
      {getFilteredContacts().map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          {name}: {number}
          <button
            className={styles.btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContatList;
