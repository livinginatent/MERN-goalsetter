import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
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
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Please enter your name"
              onChange={onChange}
            />
            <br></br>
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
            <br></br>
            <input
              type="password"
              className="form-control"
              id="password2"
              password="password2"
              value={password2}
              placeholder="Confirm password"
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

export default Register;
