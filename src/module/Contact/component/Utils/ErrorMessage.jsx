import { ErrorMessage as Error } from 'formik';
import PropTypes from 'prop-types';
import style from '../ContactForm/ContactForm.module.css';

export const ErrorMessage = ({ name }) => (
  <Error
    name={name}
    render={message => <p className={style.errorMessage}>{message}</p>}
  />
);

ErrorMessage.propTypes = {
  name: PropTypes.string,
};
