import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import { registerUserSchema } from "../../utils/schemas";
import { useId } from "react";
import toast, { Toaster } from "react-hot-toast";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    toast.promise(
      dispatch(register(values)).unwrap(),
      {
        pending: "Registering...",
        error: (error) => {
          if (error === "Request failed with status code 400") {
            return "User with this email already exists";
          }
          return "Oops.. something went wrong. Try again later";
        },
      },
      {
        duration: 3000,
        position: "top-center",
      }
    );
    actions.resetForm();
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  return (
    <div className={css.register}>
      <h2>Sign up</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registerUserSchema}
      >
        <Form className={css.form} autoComplete="off">
          <label htmlFor={nameFieldId} className={css.label}>
            Username
          </label>
          <Field
            id={nameFieldId}
            type="text"
            name="name"
            className={css.field}
            placeholder="Altavana"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
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
            placeholder="********"
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
          <button type="submit" className={css.btnReg}>
            Register
          </button>
        </Form>
      </Formik>
      <Toaster />
    </div>
  );
};
export default RegistrationForm;
