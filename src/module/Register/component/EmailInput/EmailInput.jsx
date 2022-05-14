import style from '../style/Register.module.css';

export const EmailInput = ({
  props: { handleChange, handleBlur, errors, touched, values },
}) => (
  <div className={style.register__inputwrap}>
    <span className={style.register_label}>Email</span>
    <input
      type="email"
      name="email"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}
      autoComplete="off"
      className={style.register__input}
    />
    {errors.email && touched.email && errors.email}
  </div>
);
