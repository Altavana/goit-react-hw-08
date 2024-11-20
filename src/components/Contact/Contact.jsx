import styles from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";

const Contact = (props) => {
  const { id, name, number } = props;
  const dispatch = useDispatch();
  const onDeleteContact = (profileId) => {
    const action = deleteContact(profileId);
    toast.promise(
      dispatch(action).unwrap(),
      {
        success: "The contact deleted",
        error: "Failed to delete contact",
      },
      {
        duration: 3000,
        position: "top-center",
      }
    );
  };
  return (
    <div className={styles.cardContact}>
      <div className={styles.cardInfo}>
        <p>
          <IoPerson className={styles.icons} />
          {name}
        </p>
        <p>
          <BsFillTelephoneFill className={styles.icons} />
          {number}
        </p>
      </div>

      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
      <Toaster />
    </div>
  );
};
export default Contact;
