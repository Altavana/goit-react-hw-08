import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import style from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { validationSchema } from "../../utils/schemas";
import toast, { Toaster } from "react-hot-toast";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();
  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    const action = addContact(newContact);
    toast.promise(
      dispatch(action).unwrap(),
      {
        success: "You have successfully added a contact",
        error: "Failed to add contact",
      },
      {
        duration: 3000,
        position: "top-center",
      }
    );
    actions.resetForm();
  };

  return (
    <div>
      <Toaster />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={style.form}>
          <label htmlFor={nameFieldId} className={style.label}>
            Name
          </label>
          <Field
            id={nameFieldId}
            type="text"
            name="name"
            className={style.field}
            placeholder="Name Surname"
          />
          <ErrorMessage className={style.error} name="name" component="span" />
          <label htmlFor={numberFieldId} className={style.label}>
            Number
          </label>
          <Field
            id={numberFieldId}
            type="text"
            name="number"
            className={style.field}
            placeholder="Please enter ukrainian phone number"
          />
          <ErrorMessage
            className={style.error}
            name="number"
            component="span"
          />
          <button type="submit" className={style.addButton}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
