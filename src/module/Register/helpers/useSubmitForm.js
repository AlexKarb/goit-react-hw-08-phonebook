import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperation';

export const useSubmitForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(registerUser(values));
    resetForm();
  };

  return [handleSubmit];
};
