function validator(values) {
  let errors = {};

  // if (values === null) {
  //   errors.username = "Please enter a username.";
  //   errors.password = "Please enter a password.";
  //   errors.verifyPassword = "Please verify password.";

  //   return errors;
  // }

  if (!values?.username.trim()) {
    errors.username = "Please enter a username.";
  }

  if (!values?.password) {
    errors.password = "Please enter a password.";
  }

  if (values?.password?.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  if (!values?.verifyPassword) {
    errors.verifyPassword = "Please verify password.";
  }

  if (values?.password !== values?.verifyPassword) {
    errors.verifyPassword = "Passwords do not match.";
  }

  return errors;
}

export default validator;
