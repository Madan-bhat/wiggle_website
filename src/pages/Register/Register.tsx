import "../Register/Register.styles.css";

const Login = ({ handlePressed }: { handlePressed: () => void }) => {
  return (
    <div className="App">
      <div className="loginContainer">
        <h2 className="title">Let's Get You Started .....</h2>
        <div className="inputContainer">
          <span className="label">Name:</span>
          <input className="input" />
          <span className="label">Email:</span>
          <input type="email" className="input" />
          <span className="label">Password:</span>
          <input type="password" className="input" />
        </div>
        <span className="termsAndConditions">
          By clicking the button You Agree to our Terms and Conditions
        </span>
        <button onClick={handlePressed} className="button">
          <span className="buttonText">Login</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
