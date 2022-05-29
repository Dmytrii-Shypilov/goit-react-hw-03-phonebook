import style from './contact-form.module.css';

import { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  onSubmitHandle = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    event.target.reset();
  };

  render() {
    const { onInputChange, onSubmitHandle } = this;
    return (
      <form className={style.form} onSubmit={onSubmitHandle}>
        <label className={style.label}>Name:</label>
        <input
          onChange={onInputChange}
          className={style.field}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
        />

        <label className={style.label}> Number: </label>

        <input
          onChange={onInputChange}
          className={style.field}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Number"
        />

        <button className={style.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
