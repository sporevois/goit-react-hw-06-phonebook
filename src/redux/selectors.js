export const getFilter = store => store.filter;

export const getContacts = store => store.contacts;

export const getFilteredContacts = ({filter, contacts}) => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase()
    const filteredContacts = contacts.filter(contact => {
        const normalizedName = contact.name.toLowerCase();
        const result = normalizedName.includes(normalizedFilter);
        return result;
    });
    return filteredContacts;
};