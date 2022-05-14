import { Formik, Field, Form } from 'formik';
import { Button } from 'module/Utils';
import { ErrorMessage } from 'module/Contact/component';
import { useCreateNewContact } from 'helpers';
import { schema } from 'module/Contact/helpers/validationForm';
import style from './ContactForm.module.css';
const { phonebook, phonebook__label, phonebook__input } = style;

export const ContactForm = () => {
  const { createContact } = useCreateNewContact();
  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={schema}
      onSubmit={async (value, { resetForm }) => {
        await createContact({ name: value.name, number: value.phone });
        resetForm();
      }}
    >
      <Form className={phonebook}>
        <label className={phonebook__label}>
          Name
          <Field className={phonebook__input} type="text" name="name" />
          <ErrorMessage name="name" />
        </label>

        <label className={phonebook__label}>
          Number
          <Field className={phonebook__input} type="tel" name="phone" />
          <ErrorMessage name="phone" />
        </label>
        <Button type="submit" styleFor="submit" text={'Add contact'} />
      </Form>
    </Formik>
  );
};

// ContactForm.propTypes = {
//   allContacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
//   onSubmit: PropTypes.func.isRequired,
// };
