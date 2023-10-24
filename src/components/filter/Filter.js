import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <label className={css.label}>
      <span>Find contacts by name</span>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={e => {
          dispatch(filterChange(e.target.value));
        }}
      />
    </label>
  );
};

export default Filter;
