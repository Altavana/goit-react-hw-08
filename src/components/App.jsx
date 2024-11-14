import css from "./App.module.css";
import imgErr from "../images/errorMessage.jpg";
import ContactList from "./ContactList/ContactList";
import Loader from "./Loader/Loader";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import { selectError, selectLoading } from "../redux/contactsSlice";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <Loader />}
      {error && (
        <div className={css.errorMas}>
          <h3>Oops... Sorry, something was wrong... </h3>
          <p>{error}</p>
          <img
            className={css.errorImage}
            src={imgErr}
            alt="Error image"
            width="200"
            height="200"
          />
        </div>
      )}
      <ContactList />
    </div>
  );
};

export default App;
