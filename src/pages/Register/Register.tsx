import { ReactElement, ReactNode, useCallback, useState } from "react";
import "../Register/Register.styles.css";
import { CometChat } from "@cometchat-pro/chat";

const Register = () => {
  const [form, setForm] = useState({
    authKey: "5815484d96f8fabc2df5ee407b2c9b5314fa9fa2",
  });

  const [name, setName] = useState("");

  const handleInputChange = (key: string, value: string) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  let UID = Math.floor(Math.random() * 1000000000).toString();

  let user = new CometChat.User(UID);

  user.setName(name);

  const createUser = useCallback(async () => {
    if (name) {
      CometChat.createUser(user, form.authKey).then(
        async (res) => {
          res.setAuthToken(UID);
          let token = await res.getAuthToken();
          console.log(token);
          localStorage.setItem("token", token);
          console.log("user created", user);
        },
        (error) => {
          console.log("error", error);
        }
      );
    }
  }, [name, form]);

  return (
    <div className="App">
      <div className="loginContainer">
        <h2 className="title">Lets's Start Roaming Around</h2>
        <div className="inputContainer">
          <div>
            <span className="label">Name:</span>
            <input
              onChange={(e) => setName(e.target.value)}
              className="input"
            />
          </div>
          <span className="label">Email:</span>
          <input type="email" className="input" />
          <span className="label">Password:</span>
          <input type="password" className="input" />
        </div>
        <span className="termsAndConditions">
          By clicking the button You Agree to our Terms and Conditions
        </span>
        <button onClick={createUser} className="button">
          <span className="buttonText">Register</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
