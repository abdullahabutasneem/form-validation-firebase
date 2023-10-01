import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../component/firebase/firebase.init";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const termsRegister = e.target.terms.checked;
    console.log(name, email, password, termsRegister);

    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters");
      return;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      setRegisterError("Please enter a valid Email");
      return;
    } else if (!termsRegister) {
      setRegisterError("Please accept our terms and condition!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const registeredUser = result.user;
        console.log(registeredUser);
        setSuccess("User created successfully");
        sendEmailVerification(registeredUser)
        .then(() => {
            alert("Check your email to verify the account");
        })
        .catch(error => {
            console.error(error.message);
        })
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  return (
    <div className="py-8">
      <div className="bg-gray-200 pl-10 py-10 w-1/2 mx-auto">
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
          <div className="w-2/3 relative">
            <input
              className="w-full mb-4 border-black border-[1px] pl-3 py-2"
              type={ !showPassword ? "password" : "text"}
              name="password"
              placeholder="Enter your password"
              required
            />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-3 right-3 cursor-pointer">
                {
                    !showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                }
            </span>
          </div>
          <div>
            <input
              className="mb-4 mr-1"
              type="checkbox"
              name="terms"
              id="terms"
            />
            <label htmlFor="terms">Accept Terms and Conditions</label>
          </div>
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
