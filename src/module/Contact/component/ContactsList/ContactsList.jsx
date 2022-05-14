import { SearchForm, ContactItem } from 'module/Contact/component';
import { useFilter } from 'helpers/useFilter';
import { NoFound } from 'module/Utils';
// import PropTypes from 'prop-types';

export const ContactsList = () => {
  const { filteringList } = useFilter();
  console.log('~ filteringList', filteringList);
  const haveContact = filteringList.length > 0;

  return (
    <>
      <SearchForm />

      {haveContact && (
        <ul>
          <ContactItem />
        </ul>
      )}

      {!haveContact && <NoFound text={'No found contacts'} />}
    </>
  );
};

// ContactsList.propTypes = {
//   // contactsList: PropTypes.array.isRequired,
//   filter: PropTypes.string,
//   onDelete: PropTypes.func.isRequired,
// };
