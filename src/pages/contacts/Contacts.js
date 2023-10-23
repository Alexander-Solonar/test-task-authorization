import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactList from '../../components/contactList';
import { fetchContacts } from 'redux/operations';
import css from './Contacts.module.css';
import Filter from 'components/filter';

const Contacts = () => {
  const { items, isLoading, error } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {items.length === 0 && <h2>No added numbers!</h2>}
      {items.length > 0 && <Filter />}
      {isLoading && <p className={css.loader}>Loading...</p>}
      {error && <p className={css.error}>{error}</p>}
      {items.length > 0 && <ContactList />}
    </div>
  );
};

export default Contacts;
