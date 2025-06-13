import { useDispatch, useSelector } from "react-redux";
import { filterContact } from "../redux/filters/slice";
import { selectNameFilter } from "../redux/filters/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const handleChange = (e) => {
    dispatch(filterContact(e.target.value));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleChange} />
    </>
  );
}
