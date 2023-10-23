import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  const data = useSelector(selectVisibleContacts);

  return (
    <div>
      {data.length === 0 && <h2>Сontact not found!</h2>}
      <ul className={css.list}>
        {data.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <span className={css.name}>{name}:</span>
            <span className={css.number}> {number}</span>
            <button
              className={css.button}
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
