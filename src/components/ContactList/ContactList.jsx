import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { useSelector } from "react-redux";

const ContactList = () => {
  const filtredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={styles.listContacts}>
      {filtredContacts.map((item) => {
        return (
          <li key={item.id}>
            <Contact name={item.name} number={item.number} id={item.id} />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
