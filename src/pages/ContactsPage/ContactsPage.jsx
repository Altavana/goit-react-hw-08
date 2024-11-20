import css from "./ContactsPage.module.css";
import imgErr from "../../images/something_happening.jpg";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactPageWrap}>
      <h2>Phonebook</h2>
      <ContactForm />
      <SearchBox />
      {loading && !error && <Loader />}
      {error && (
        <div className={css.errorMas}>
          <h3 className={css.errorStatus}>
            Oops... Sorry, something was wrong...{" "}
          </h3>
          <p>{error}</p>
          <img className={css.errorImage} src={imgErr} alt="Error image" />
        </div>
      )}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
