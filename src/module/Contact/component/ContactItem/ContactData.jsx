import PropTypes from 'prop-types';
import style from './ContactItem.module.css';
import { IoMdContact } from 'react-icons/io';
const { contact__photo, contact__container } = style;

export const ContactData = ({ name, number, photo }) => (
  <div className={contact__container}>
    <span className={contact__photo}>
      {photo || <IoMdContact size={'100%'} />}
    </span>
    {name} : {number}
  </div>
);

ContactData.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  photo: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};
