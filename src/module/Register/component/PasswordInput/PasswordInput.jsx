import style from '../style/Register.module.css';

export const PasswordInput = ({
  props: { handleChange, handleBlur, errors, touched, values },
}) => (
  <div className={style.register__inputwrap}>
    <span className={style.register_label}>Password</span>
    <input
      type="password"
      name="password"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password}
      autoComplete="off"
      className={style.register__input}
    />
    {errors.password && touched.password && errors.password}
  </div>
);
