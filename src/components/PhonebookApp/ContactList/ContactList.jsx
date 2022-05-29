import style from './contact-list.module.css';

import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  const elements = contacts.map(contact => {
    const { name, number, id } = contact;
    return (
      <li className={style.listItem} key={id}>
        {name} : {number}
        <button
          className={style.btn}
          type="button"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    );
  });
  return <ul className={style.list}>{elements}</ul>;
};

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propsTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
