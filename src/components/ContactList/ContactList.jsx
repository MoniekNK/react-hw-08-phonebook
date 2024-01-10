import React from 'react';

import { getContacts, getFilter } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact({ contactId }));
  };

  return (
    <ul className={css.list}>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => {
          return (
            <li key={contact.id}>
              {contact.name} : {contact.number}{' '}
              <button id={contact.id} onClick={() => handleDelete(contact.id)}>
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
