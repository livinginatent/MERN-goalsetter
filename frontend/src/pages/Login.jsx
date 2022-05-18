import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
   
    email: "",
    password: "",
   
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
      setFormData((prevState) => ({
          ...prevState,
          [e.target.name]:e.target.value,
      }))
  };
  const onSubmit = (e) => {
      e.preventDefault()
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Sign In
        </h1>
        <p>Login and start setting goals</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
      
            <input
              type="email"
              className="form-control"
              id="email"
              email="email"
              value={email}
              placeholder="Please enter your email"
              onChange={onChange}
            />
            <br></br>
            <input
              type="password"
              className="form-control"
              id="password"
              password="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            />
           
      
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
