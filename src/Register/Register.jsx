import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../component/firebase/firebase.init";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const registeredUser = result.user;
        console.log(registeredUser);
        setSuccess("User created successfully");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  return (
    <div className="text-center py-8">
      <div className="bg-gray-200 py-10 w-1/2 mx-auto">
        <h2 className="text-3xl font-medium">Please Register</h2>
        <form onSubmit={handleRegistration}>
          <input
            className="w-2/3 mb-4 mt-4 border-black border-[1px] pl-3 py-2"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <br />
          <input
            className="w-2/3 mb-4 border-black border-[1px] pl-3 py-2"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <br />
          <input
            className="w-2/3 mb-4 border-black border-[1px] pl-3 py-2"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <br />

          {registerError && (
            <p className="text-red-800 mb-4 font-bold">{registerError}</p>
          )}
          {success && (
            <p className="text-green-800 mb-4 font-bold">{success}</p>
          )}
          <input
            className="btn btn-secondary w-1/3 border-black border-[1px]"
            type="submit"
            value="Register"
          />
          <br />
        </form>
        <p className="mt-3">
          Already have an account? Please{" "}
          <Link className="text-blue-600" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
