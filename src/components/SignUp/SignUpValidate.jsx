const SignUpValidate = (values) => {
  let errors = {};

  if (!values.username) {
    errors.username = "Username is required.";
  }

  if (!values.email) {
    errors.email = "Email is required";
  }
  // else if (!values.email.endsWith("ku.edu.np")) {
  //     errors.email = "KU email is required.";
  //   }

  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 5) {
    errors.password = "Password must be more than five structures.";
  }

  return errors;
};

export default SignUpValidate;
