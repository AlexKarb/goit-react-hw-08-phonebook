import { Formik } from 'formik';
import { SubmitButton, Title } from './component';
import { EmailInput, NameInput, PasswordInput } from './component';
import { SignupSchema, initialValue, useSubmitForm } from './helpers';
import style from 'module/Register/component/style/Register.module.css';
const Register = () => {
  const [handleSubmit] = useSubmitForm();

  return (
    <div className={style.register__container}>
      <Formik
        initialValues={initialValue}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {propsFormik => (
          <form onSubmit={propsFormik.handleSubmit} className={style.register}>
            <Title />
            <NameInput props={propsFormik} />
            <EmailInput props={propsFormik} />
            <PasswordInput props={propsFormik} />
            <SubmitButton isSubmitting={propsFormik.isSubmitting} />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
