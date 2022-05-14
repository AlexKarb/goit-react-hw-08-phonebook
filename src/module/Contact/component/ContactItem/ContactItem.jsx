import { TiUserDelete } from 'react-icons/ti';
import { useDeleteContactMutation } from 'redux/contacts/contactsQuery';
import { useFilter, notify } from 'helpers';
import { Button, SpinerDots } from 'module/Utils';
import { ContactData } from 'module/Contact/component';
import style from './ContactItem.module.css';

export const ContactItem = () => {
  const [onDelete, { isLoading: isDeliting }] = useDeleteContactMutation();
  const { filteringList } = useFilter();
  console.log('~ filteringList', filteringList);

  return (
    <>
      {filteringList.map(({ id, name, number, phone, photo }) => (
        <li key={id} className={style.contact__item}>
          <ContactData name={name} number={number || phone} photo={photo} />

          <Button
            styleFor="delete"
            onClick={() => {
              onDelete(id);
              notify({
                text: ` contact ${name} is delete`,
                type: 'info',
              });
            }}
            text={<TiUserDelete />}
          />
          {isDeliting && <SpinerDots />}
        </li>
      ))}
    </>
  );
};

// Contact.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
