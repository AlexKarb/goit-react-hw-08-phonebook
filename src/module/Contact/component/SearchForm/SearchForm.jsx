import style from './SearchForm.module.css';
// import PropTypes from 'prop-types';
import { useFilter } from 'helpers/useFilter';
const { searchForm, searchForm__label } = style;

export const SearchForm = () => {
  const { filterValue, setFilterValue } = useFilter();

  return (
    <label className={searchForm__label}>
      Find contacts by name
      <input
        autoComplete="off"
        className={searchForm}
        value={filterValue}
        onChange={setFilterValue}
        type="text"
        name="filter"
      />
    </label>
  );
};

// SearchForm.propType = {
//   filter: PropTypes.string,
// };
