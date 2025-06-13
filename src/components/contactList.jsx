import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../redux/contacts/slice";
import Contact from "./contact";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map((phoneContact) => (
        <li key={phoneContact.id}>
          <Contact
            id={phoneContact.id}
            name={phoneContact.name}
            number={phoneContact.number}
          />
        </li>
      ))}
    </ul>
  );
}
