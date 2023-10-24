import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactList from '../../components/contactList';
import { fetchContacts } from 'redux/operations';
import css from './Contacts.module.css';
import Filter from 'components/filter';

const Contacts = () => {
  const [offset, setOffset] = useState(0);
  const { items, isLoading, error } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts(offset));
  }, [dispatch, offset]);

  const handleNextPage = () => {
    setOffset(prevState => prevState + 10);
  };
  const handlePrevPage = () => {
    setOffset(prevState => prevState - 10);
  };

  return (
    <div className={css.container}>
      {items.length > 0 && <Filter />}
      {isLoading && <p className={css.loader}>Loading...</p>}
      {error && <p className={css.error}>{error}</p>}
      {items.length > 0 && <ContactList />}
      {items.length > 0 && (
        <div className={css.buttonContainer}>
          <button
            className={css.prevButton}
            onClick={handlePrevPage}
            disabled={offset === 0}
          >
            {offset > 0 ? `page ${offset / 10}` : 'page'}
          </button>

          <button
            className={css.nextButton}
            onClick={handleNextPage}
            disabled={items.length < 10}
          >
            page {offset / 10 + 2}
          </button>
        </div>
      )}
    </div>
  );
};

export default Contacts;
