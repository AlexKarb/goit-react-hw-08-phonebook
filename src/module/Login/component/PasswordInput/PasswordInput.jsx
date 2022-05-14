import style from '../style/Login.module.css';

export const PasswordInput = ({
  props: { handleChange, handleBlur, errors, touched, values },
}) => (
  <div className={style.login_form__inputwrap}>
    <span className={style.login_form_label}>Password</span>
    <input
      type="password"
      name="password"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password}
      className={style.login_form__input}
      autoComplete="off"
    />
    {errors.password && touched.password && errors.password}
  </div>
);
