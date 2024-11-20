import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import styles from "./SearchBox.module.css";
import { selectFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const searchedName = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.search}>
      <p>Find contacts by name or number</p>
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
};
export default SearchBox;
