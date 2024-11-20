import css from "./HomePage.module.css";
import imgBackgr from "../../images/phonebook_app.jpg";
const HomePage = () => {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to the Secret phonebook!</h1>
        <p className={css.text}>
          Easily store, manage, and protect your personal contacts all in one
          place. Your privacy is our priority - access your contacts securely
          anytime, anywhere. Join us and experience a new level of convenience
          and security for your phonebook.
        </p>
        <img className={css.mainImage} src={imgBackgr} alt="secret phonebook" />
      </div>
    </>
  );
};
export default HomePage;
