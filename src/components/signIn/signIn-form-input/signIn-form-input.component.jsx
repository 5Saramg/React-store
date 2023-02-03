import { Fragment } from "react";

const SignInFormInput = ({ nameLabel, ...otherProps }) => {

  return (
    <Fragment>
      {nameLabel && (<label>{nameLabel}</label>)}
      <input {...otherProps}/>
    </Fragment>
  );
};

export default SignInFormInput;
