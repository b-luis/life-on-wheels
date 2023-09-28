import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api";

const styles = {
  signUpFormWrapper:
    "flex flex-col items-center justify-center mx-auto py-20 px-2",
  signUpDiv:
    "w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ",
  signUpPadding: "p-6 space-y-4 md:space-y-6 sm:p-8",
  signUpTitle:
    "text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white",
  signUpForm: "space-y-4 md:space-y-6",
  signUpLabel: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
  signUpInput:
    "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
  signUpBtn:
    "w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:border",
  loginAcc: "text-sm font-light text-gray-500 dark:text-gray-400",
  loginLink:
    "font-medium text-primary-600 hover:underline dark:text-primary-500",
};

const SignUp = () => {
  const [user, setUser] = useState({});
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const createAcc = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       auth,
  //       signUpForm.email,
  //       signUpForm.password
  //     );
  //     console.log(user);
  //   } catch (error) {
  //     const errorMessage = error.message;
  //     console.log(errorMessage);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      signUpForm.email,
      signUpForm.password
    ).then((data) => console.log(data, "authData"));
  };

  return (
    <div className={styles.signUpFormWrapper}>
      <div className={styles.signUpDiv}>
        <div className={styles.signUpPadding}>
          <h1 className={styles.signUpTitle}>Create an account</h1>
          <div className={styles.signUpForm}>
            <div>
              <label className={styles.signUpLabel}>Your email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className={styles.signUpInput}
                placeholder="Enter your email"
                value={signUpForm.email}
                required
              />
            </div>
            <div>
              <label className={styles.signUpLabel}>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className={styles.signUpInput}
                value={signUpForm.password}
                required
              />
            </div>
            <div>
              <label className={styles.signUpLabel}>Confirm password</label>
              <input
                type="password"
                name="confirmPass"
                placeholder="Confirm Password"
                onChange={handleChange}
                className={styles.signUpInput}
                value={signUpForm.confirmPass}
                required
              />
            </div>
            <button onClick={handleSubmit} className={styles.signUpBtn}>
              Create an account
            </button>
            <p className={styles.loginAcc}>
              Already have an account?{" "}
              <Link to="/login" className={styles.loginLink}>
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
