import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { addContact } from "../redux/contacts/operations";

export default function ContactForm() {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(30, "Too long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(12, "Too long!")
      .required("Required"),
  });
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
        id: nanoid(),
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <label htmlFor="">Name</label>
        <Field type="text" name="name"></Field>
        <ErrorMessage name="name" component="span"></ErrorMessage>
        <label htmlFor="">Number</label>
        <Field type="text" name="number"></Field>
        <ErrorMessage name="number" component="span"></ErrorMessage>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
