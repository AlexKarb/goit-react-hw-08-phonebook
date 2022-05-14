import PropTypes from 'prop-types';
import style from './Button.module.css';
const { button, button__submit, button__delete_user } = style;

export const Button = ({ type = 'button', styleFor, onClick, text }) => {
  const cssStyle = [button];

  styleFor === 'submit' && cssStyle.push(button__submit);
  styleFor === 'delete' && cssStyle.push(button__delete_user);

  return (
    <button type={type} className={cssStyle.join(' ')} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  styleFor: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
