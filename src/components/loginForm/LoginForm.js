import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import css from './LoginForm.module.css';

let schema = object({
  username: string().trim().required('Username is a required field'),
  password: string().trim().required('Password is a required field'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <p className={css.error}>{message}</p>}
    />
  );
};

const LoginForm = () => {
  const initialValues = {
    username: '',
    password: '',
  };
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <h1>Log in</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.label}>
            <Field
              className={css.input}
              type="text"
              name="username"
              placeholder="Username"
            />
            <FormError name="username" />
          </div>
          <div className={css.label}>
            <Field
              className={css.input}
              type="password"
              name="password"
              placeholder="Password"
            />
            <FormError name="password" />
          </div>
          <button className={css.button} type="submit">
            Log in
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
