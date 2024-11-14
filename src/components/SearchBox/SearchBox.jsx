import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/contactsSlice";

export default function SearchBox() {
  const searchedName = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.search}>
      <p>Find contacts by name</p>
      <input
        className={styles.inputSearch}
        value={searchedName}
        type="text"
        onChange={(event) => {
          dispatch(changeFilter(event.target.value));
        }}
        placeholder="Name or Surname"
      ></input>
    </div>
  );
}
