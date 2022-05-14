import style from '../style/Register.module.css';

export const SubmitButton = ({ isSubmitting }) => (
  <button type="submit" disabled={isSubmitting} className={style.register__btn}>
    Create
  </button>
);
