import { Formik } from 'formik';
import { initialValue, SignupSchema, useSubmitForm } from './helpers';
import { NameInput, PasswordInput } from './component';
import { SubmitButton, Title } from './component';
import style from './component/style/Login.module.css';

const LoginForm = () => {
  const [handleSubmit] = useSubmitForm();

  return (
    <div className={style.login_form__container}>
      <Formik
        initialValues={initialValue}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {propsFormik => (
          <form
            onSubmit={propsFormik.handleSubmit}
            className={style.login_form}
          >
            <Title />
            <NameInput props={propsFormik} />
            <PasswordInput props={propsFormik} />
            <SubmitButton isSubmitting={propsFormik.isSubmitting} />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
