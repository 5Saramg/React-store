import { async } from "@firebase/util";
import { Fragment, useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignInFormInput from "../signIn/signIn-form-input/signIn-form-input.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Ya tienes un registro con ese correo");
      } else {
        console.log("No se ha creado el usuario correctamente", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Fragment>
      <h1>Registrarse con email </h1>
      <form onSubmit={handleSubmit}>
        <div className="container-input">
          <SignInFormInput
            nameLabel={"Nombre completo"}
            inputOptions={{
              type: "text",
              onChange: handleChange,
              value: displayName,
              required: true,
              name: "displayName",
            }}
          ></SignInFormInput>
        </div>
        <div className="container-input">
          <SignInFormInput
            nameLabel={"Email "}
            type="email"
            onChange={handleChange}
            value={email}
            name="email"
            required
          ></SignInFormInput>
        </div>
        <div className="container-input">
          <SignInFormInput
            nameLabel={"Contraseña"}
            onChange={handleChange}
            type="password"
            value={password}
            name="password"
            required
          ></SignInFormInput>
        </div>
        <div className="container-input">
          <SignInFormInput
            nameLabel={"Confirmación contraseña"}
            type="password"
            onChange={handleChange}
            value={confirmPassword}
            required
            name="confirmPassword"
          ></SignInFormInput>
        </div>
        <button type="Submit" className="btn btn-submit">
          Registrarme
        </button>
      </form>
    </Fragment>
  );
};

export default SignUpForm;
