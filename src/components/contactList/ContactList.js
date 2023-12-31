import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';
import css from './ContactList.module.css';
import EditForm from '../editForm/EditForm';

const ContactList = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectVisibleContacts);
  const [editedContact, setEditedContact] = useState(null);

  const handleEditClick = contact => {
    setEditedContact(contact);
  };

  const convertToYYYYMMDDFormat = dateString => {
    const parts = dateString.split('-');

    if (parts.length === 3) {
      const [day, month, year] = parts;
      return `19${year}-${month}-${day}`;
    }
    return dateString;
  };

  const handleSaveEdit = () => {
    if (editedContact) {
      const formattedBirthday = convertToYYYYMMDDFormat(
        editedContact.birthday_date
      );
      const updatedContact = {
        ...editedContact,
        birthday_date: formattedBirthday,
      };

      dispatch(editContact(updatedContact));
      setEditedContact(null);
    }
  };

  return (
    <div className={css.container}>
      {data.length === 0 && <h2>Contact not found!</h2>}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Birthday_date</th>
            <th colSpan="2">Phone_number</th>
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
                  onClick={() =>
                    handleEditClick({
                      id,
                      name,
                      email,
                      birthday_date,
                      phone_number,
                    })
                  }
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editedContact && (
        <EditForm
          editedContact={editedContact}
          setEditedContact={setEditedContact}
          handleSaveEdit={handleSaveEdit}
        />
      )}
    </div>
  );
};

export default ContactList;
