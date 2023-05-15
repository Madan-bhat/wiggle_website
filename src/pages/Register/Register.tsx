import { ReactElement, ReactNode, useCallback, useState } from "react";
import "../Register/Register.styles.css";
import { CometChat } from "@cometchat-pro/chat";
import { createUser } from "../../utils/firebase.methods";

interface IForm {
  username: string;
  password: string;
  email: string;
}

const Register = () => {
  const [form, setForm] = useState<IForm>({
    username: "",
    password: "",
    email: "",
  });

  const handleInputChange = (key: keyof IForm, value: string) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleRegister = useCallback(async () => {
    let res = await createUser(form);
    console.log(res);
  }, [form]);

  return (
    <div className="App">
      <div className="loginContainer">
        <h2 className="title">Lets's Start Roaming Around</h2>
        <div className="inputContainer">
          <div>
            <span className="label">Name:</span>
            <input
              onChange={(e) => handleInputChange("username", e.target.value)}
              className="input"
            />
          </div>
          <span className="label">Email:</span>
          <input
            onChange={(e) => handleInputChange("email", e.target.value)}
            type="email"
            className="input"
          />
          <span className="label">Password:</span>
          <input
            onChange={(e) => handleInputChange("password", e.target.value)}
            type="password"
            className="input"
          />
        </div>
        <span className="termsAndConditions">
          By clicking the button You Agree to our Terms and Conditions
        </span>
        <button onClick={handleRegister} className="button">
          <span className="buttonText">Register</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
