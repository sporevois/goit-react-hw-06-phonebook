import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../Filter/Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value } = event.target;
    const action = setFilter(value);
    dispatch(action);
  };

  return (
    <label className={styles.title}>
      Find conacts by name
      <input
        className={styles.field}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;
