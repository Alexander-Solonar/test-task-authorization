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

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Birthday_date</th>
            <th colSpan="2"> Phone_number</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, email, birthday_date, phone_number }) => (
            <tr key={id} className={css.item}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{birthday_date}</td>
              <td>{phone_number}</td>
              <td>
                <button
                  className={css.button}
                  type="button"
                  onClick={() => {
                    dispatch(deleteContact(id));
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
