import style from '../style/Register.module.css';

export const NameInput = ({
  props: { handleChange, handleBlur, errors, touched, values },
}) => (
  <div className={style.register__inputwrap}>
    <span className={style.register_label}>Name</span>
    <input
      type="text"
      name="name"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.name}
      autoComplete="off"
      className={style.register__input}
    />
    {errors.name && touched.name && errors.name}
  </div>
);
