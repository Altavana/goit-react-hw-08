import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { loginUserSchema } from "../../utils/schemas";
import { useId } from "react";
import toast, { Toaster } from "react-hot-toast";

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const handleSubmit = (values, actions) => {
    toast.promise(
      dispatch(login(values)).unwrap(),
      {
        pending: "Your secret...are coming",
        error: "Oops.. something went wrong.",
      },
      {
        duration: 3000,
        position: "top-center",
      }
    );

    actions.resetForm();
  };
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <div className={css.login}>
      <h2>Log in</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginUserSchema}
      >
        <Form className={css.form} autoComplete="off">
          <label htmlFor={emailFieldId} className={css.label}>
            Email
          </label>
          <Field
            id={emailFieldId}
            type="email"
            name="email"
            className={css.field}
            placeholder="example@gmail.com"
          />
          <ErrorMessage className={css.error} name="email" component="span" />
          <label htmlFor={passwordFieldId} className={css.label}>
            Password
          </label>
          <Field
            id={passwordFieldId}
            type="password"
            name="password"
            className={css.field}
            placeholder="Enter your password"
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
          <button type="submit" className={css.btnLogin}>
            Log In
          </button>
        </Form>
      </Formik>
      <Toaster />
    </div>
  );
};
export default LoginForm;
