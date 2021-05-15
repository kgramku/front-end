import React, { useState } from "react";
import SignUp from "./SignUp";
import SignupFormSuccess from "./SignUpSuccess";

const SignUpForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ForSubmitForm = () => {
    setIsSubmitted(true);
  };

  return (
    <div>
      {!isSubmitted ? (
        <SignUp ForSubmitForm={ForSubmitForm} />
      ) : (
        <SignupFormSuccess />
      )}
    </div>
  );
};

export default SignUpForm;
