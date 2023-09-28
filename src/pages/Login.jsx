import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import van from "../assets/images/background/login.jpg";
import { AiOutlineWarning } from "react-icons/ai";
// import { loginUser, auth } from "../api";
// import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Get the previous location (if available) from the state object
  // to redirect the user back to their original destination after login
  let from = location.state?.from?.pathname || "/";

  /* const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    loginUser(loginFormData)
      .then((data) => {
        setError(null);
        //* Set the 'loggedin' flag in local storage
        localStorage.setItem("loggedin", true);
        //* Redirect the user back to the previous page or /host
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setStatus("idle");
      });

     //* NOTE:
     //* By wrapping setStatus("idle") in a function inside the finally block,
     //* you ensure that it only gets executed after the asynchronous operations
     //* in the try block (and any potential catch block) have completed.
     //*
     //* This way, the status state is updated appropriately based on the
     //* actual outcome of the login operation.
     
  }; */

  /**
   * NOTE:
   * The use of square brackets [name] within the object literal
   * is a way to dynamically set a property key in JavaScript.
   * This is often used when you want to update an object's property
   * based on a variable (in this case, the name attribute of the input field).
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const signIn = async () => {
  //   await createUserWithEmailAndPassword(
  //     auth,
  //     loginFormData.email,
  //     loginFormData.password
  //   );
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-section">
      <img className="login-image" src={van} alt="" />
      <div className="login-container">
        {error?.message && (
          <h3 className="login-first fade-in">{error?.message}</h3>
        )}
        <h1>Sign in to your account</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Email address"
            value={loginFormData.email}
          />
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            value={loginFormData.password}
          />
          <button disabled={status === "submitting"}>
            {status === "submitting" ? "Logging in..." : "Log in"}
          </button>
        </form>
        {/*
           If the user decides to click on a protected route, like "/host", and they are not logged in,
          a warning message will appear at the bottom of the login page. This message requests the user
          to log in first before gaining access to the protected "host" page.

          This came from the <Navigate/> component in the AuthRequired where we pass something
          to it like props, in that way we can pass information from component to component.
        */}
        {location.state?.message && (
          <p className="login-first fade-in ">
            <AiOutlineWarning className="inline text-lg mb-[4px] mx-1" />
            {location.state.message}
          </p>
        )}
        <p className="text-slate-500 py-5">
          Don't have an account?
          <span>
            {" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
