import style from '../style/Login.module.css';

export const NameInput = ({
  props: { handleChange, handleBlur, errors, touched, values },
}) => (
  <div className={style.login_form__inputwrap}>
    <span className={style.login_form_label}>Email</span>
    <input
      type="email"
      name="email"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}
      autoComplete="off"
      className={style.login_form__input}
    />
    {errors.email && touched.email && errors.email}
  </div>
);
