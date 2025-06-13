import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/operations";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field type="email" name="email" placeholder="username" />
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
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
}
