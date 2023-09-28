import { Navigate, Outlet, redirect, useLocation } from "react-router-dom";

const AuthRequired = () => {
  // Check if the user is logged in by looking in local storage
  const isLoggedIn = localStorage.getItem("loggedin");

  // Get the current location from the React Router's useLocation hook
  let location = useLocation();

  // If the user is not logged in, navigate to the login page with a message
  if (!isLoggedIn) {
    // The 'from' property is used to remember the previous location
    // before the user was redirected to the login page. This helps in
    // redirecting the user back to where they initially intended to go
    // after they log in successfully.

    // The 'replace' prop is set to true to replace the current location
    // in the history stack with the new location. This prevents the
    // user from being redirected to the login page again when they
    // press the back button after logging in.
    return (
      <Navigate
        to="/login"
        state={{ message: "You must log in first.", from: location }}
        replace // Replace the current history entry
      />
    );
  }

  // If the user is logged in, render the child routes
  return <Outlet />;
};

export default AuthRequired;
