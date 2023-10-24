import css from './EditForm.module.css';

const EditForm = ({ editedContact, setEditedContact, handleSaveEdit }) => {
  return (
    <div className={css.blockEdit}>
      <input
        className={css.inputField}
        type="text"
        value={editedContact.name}
        onChange={e =>
          setEditedContact({ ...editedContact, name: e.target.value })
        }
      />
      <input
        className={css.inputField}
        type="email"
        value={editedContact.email}
        onChange={e =>
          setEditedContact({ ...editedContact, email: e.target.value })
        }
      />
      <input
        className={css.inputField}
        type="text"
        value={editedContact.birthday_date}
        onChange={e =>
          setEditedContact({
            ...editedContact,
            birthday_date: e.target.value,
          })
        }
      />
      <input
        type="text"
        value={editedContact.phone_number}
        onChange={e =>
          setEditedContact({
            ...editedContact,
            phone_number: e.target.value,
          })
        }
      />

      <button type="button" onClick={handleSaveEdit}>
        Save
      </button>
    </div>
  );
};

export default EditForm;
