import useForm from "./useForm";
import validate from "./validator";

function SignupForm() {
  const { values, handleInput, handleSubmit, errors } = useForm(validate);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Sign up!</h1>
      <div className="form-inputs">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="fabrezey_fresh"
          value={values.username}
          onChange={handleInput}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>

      <div className="form-inputs">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Type your password"
          value={values.password}
          onChange={handleInput}
        />
      </div>
      <div className="form-inputs">
        <label htmlFor="password-verification">Verify Password</label>
        <input
          type="password"
          id="verifyPassword"
          name="verifyPassword"
          placeholder="Verify your password"
          value={values.verifyPassword}
          onChange={handleInput}
        />
      </div>
      <button type="submit" id="submit">
        Submit
      </button>
    </form>
  );
}

export default SignupForm;
