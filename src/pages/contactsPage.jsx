import { useDispatch } from "react-redux";
import ContactList from "../components/contactList";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import ContactForm from "../components/contactForm";
import SearchBox from "../components/searchBox";

export default function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Contacts</h2>
      <SearchBox />
      <ContactList />
      <ContactForm />
    </>
  );
}
