import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { getError, getIsLoading } from '../redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <header>
        <UserMenu />
      </header>
      <div className="container">
        <div className="border">
          <ContactForm />
        </div>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Loading...</b>}
        <ContactList />
      </div>
    </>
  );
};
