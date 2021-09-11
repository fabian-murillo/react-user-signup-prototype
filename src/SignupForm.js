import useForm from "./useForm";
import validate from "./validator";
import "./SignupForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function SignupForm() {
  const { values, handleInput, handleSubmit, errors } = useForm(validate);
  return (
    <div className="card">
      <FontAwesomeIcon color={"var(--black)"} size="2x" icon={faUser} />
      <form className="form" onSubmit={handleSubmit}>
        <h1>Sign up!</h1>
        <div className="form-inputs">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="example_username"
            value={values?.username || ""}
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
            placeholder="Password"
            value={values?.password || ""}
            onChange={handleInput}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="verifyPassword">Verify Password</label>
          <input
            type="password"
            id="verifyPassword"
            name="verifyPassword"
            placeholder="Confirm password"
            value={values?.verifyPassword || ""}
            onChange={handleInput}
          />
          {errors.verifyPassword && <p>{errors.verifyPassword}</p>}
        </div>
        <div className="form-inputs">
          <button type="submit" id="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
