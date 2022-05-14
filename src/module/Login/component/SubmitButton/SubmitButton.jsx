import style from '../style/Login.module.css';

export const SubmitButton = ({ isSubmitting }) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className={style.login_form__btn}
  >
    Log In
  </button>
);
