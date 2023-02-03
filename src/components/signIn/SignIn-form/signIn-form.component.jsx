import { Fragment, useState, useContext } from "react";
import { UserContext } from "../../../context/user.context";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../../utils/firebase/firebase.utils";
import SignInFormInput from "../signIn-form-input/signIn-form-input.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      console.log("Error al iniciar sesión", error);
    }
  };
  const logGoogleUser = async () => {
    const user = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  return (
    <Fragment>
      <h1>Ya tengo una cuenta </h1>
      <form onSubmit={handleSubmit}>
        <div className="container-input">
          <SignInFormInput
            nameLabel={"Email"}
            inputOptions={{
              onChange:handleChange,
              type: "email",
              required: true,
              name: "email",
              value: email,
            }}
          ></SignInFormInput>
        </div>
        <div className="container-input">
          <SignInFormInput
            nameLabel={"Contraseña"}
              type= "password"
              value= {password}
              name= "password"
              required
          ></SignInFormInput>
        </div>

        
        <button type="Submit" className="btn btn-submit">
          Iniciar sesión
        </button>

        <button
          type="button"
          className="btn btn-google"
          onClick={logGoogleUser}
        >
          Iniciar con Google
        </button>
      </form>
    </Fragment>
  );
};

export default SignInForm;
