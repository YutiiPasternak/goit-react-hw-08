import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (values, action) => {
    dispatch(register(values));
    console.log(values);
    action.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field type="text" name="name" placeholder="username" />
          <Field type="email" name="email" placeholder="email" />
          <Field
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
          />
          <button
            type="button"
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}
          >
            {showPassword ? "hide" : "show"}
          </button>
          <button type="submit">Registration</button>
        </Form>
      </Formik>
    </div>
  );
}
