import style from './phonebook-app.module.css';

import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class PhonebookApp extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    ],
    filter: '',
  };

  componentDidMount() {
    const storedData = JSON.parse(localStorage.getItem('contacts'));
    if (storedData) {
      this.setState({ contacts: [...storedData] });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }


  addContact = newData => {
    const { name, number } = newData;
    const { contacts } = this.state;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already added!`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => {
      const { contacts } = prevState;
      return {
        contacts: [...contacts, newContact],
      };
    });
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(item => item.id !== id),
    }));
  };

  filterChange = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  getFilteredContactsList = () => {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const filterQuery = filter.toLowerCase();
    const filteredItems = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterQuery)
    );
    return filteredItems;
  };

  render() {
    const { addContact, deleteContact, filterChange, getFilteredContactsList } =
      this;
    const contacts = getFilteredContactsList();
    return (
      <div className={style.bookSection}>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2 className={style.title}>Contacts</h2>
        <Filter filterChange={filterChange} />
        <ContactList contacts={contacts} deleteContact={deleteContact} />
      </div>
    );
  }
}

export default PhonebookApp;
