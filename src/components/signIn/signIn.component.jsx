import { getRedirectResult } from "firebase/auth";
import { Fragment, useEffect } from "react";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../signUp-form/singUp-form.components";
import SignInForm from "./SignIn-form/signIn-form.component";
import "./signIn.styles.scss";

const SignInComponent = () => {
  /*useEffect(async () =>{
      const response = await getRedirectResult(auth);
      if(response){
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }, []);*/
  const logGoogleUser = async () => {
    const user = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div className="container container-signIn">
      <div className="container-signIn__form">
      <div>
      <SignInForm></SignInForm>
      </div>
        
        <div>
          <SignUpForm></SignUpForm>
          <div className="container-signIn__redirect">
            <button onClick={logGoogleUser} className= "btn btn-google">Ingresar con Google</button>
            {/*<button onClick={signInWithGoogleRedirect}>Ingresar con Google Redirect</button>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
