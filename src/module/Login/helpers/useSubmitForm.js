import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/authOperation';

export const useSubmitForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logInUser(values));
    resetForm();
  };

  return [handleSubmit];
};
