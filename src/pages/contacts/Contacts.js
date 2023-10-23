import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactList from '../../components/contactList';
import { fetchContacts } from 'redux/operations';
import css from './Contacts.module.css';
import Filter from 'components/filter';

const Contacts = () => {
  const [offset, setOffset] = useState(10);
  const { items, isLoading, error } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts(offset));
  }, [dispatch, offset]);

  const handleIncreasePage = () => {
    setOffset(prevState => prevState + 10);
  };
  const handleDecreasePage = () => {
    setOffset(prevState => prevState - 10);
  };

  return (
    <div>
      {items.length > 0 && <Filter />}
      {isLoading && <p className={css.loader}>Loading...</p>}
      {error && <p className={css.error}>{error}</p>}
      {items.length > 0 && <ContactList />}
      {items.length > 0 && (
        <div className={css.buttonContainer}>
          <button
            className={css.decreaseButton}
            onClick={handleDecreasePage}
            disabled={offset === 10}
          >
            decrease
          </button>

          <button
            className={css.increaseButton}
            onClick={handleIncreasePage}
            disabled={offset === 50}
          >
            increase
          </button>
        </div>
      )}
    </div>
  );
};

export default Contacts;
