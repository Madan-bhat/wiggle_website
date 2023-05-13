import { ReactElement, ReactNode, useState } from "react";
import "../Login/Login.css";

const Login = () => {
    const [form,setForm] = useState({
        email:"",
        password:''
    })

    const hadnleInputChange = (key:string,value:string) => {
        setForm({
            ...form,
            [key]:value
        })
    }

  return (
    <div className="App">
      <div className="loginContainer">
        <h2 className="title">Let's Get You Started .....</h2>
        <div className="inputContainer">
          <span className="label">Email:</span>
          <input type="email" className="input" />
          <span className="label">Password:</span>
          <input type="password" className="input" />
        </div>
        <span className="termsAndConditions">
          By clicking the Login You Agree to our Terms and Conditions
        </span>
        <button onClick={(handlePressed) => {}} className="button">
          <span className="buttonText">Login</span>
        </button>
      </div>
    </div>
  );
};

export default (Login);
