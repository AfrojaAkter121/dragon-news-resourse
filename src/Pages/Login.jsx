import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { Bounce, toast } from "react-toastify";

const Login = () => {
  const [err, setErr] = useState("");
  const { signInUser } = use(AuthContext);
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((res) => {
        if (!res.user.emailVerified) {
          toast(
            "Please check your email address. and confirm your varification email"
          );
          return;
        }
        toast.success("User Login Successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        setErr(err.message);
      });
  };

  const handleChangePassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("A password reset email is sent . please check your email");
      })
      .catch((err) => {
        setErr(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center mt-9">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-7">
        <h1 className="font-semibold text-2xl text-center text-primary ">
          Login your account
        </h1>
        <hr className="text-base-300 mt-5" />
        <form onSubmit={handleLogIn} className="card-body">
          <fieldset className="fieldset">
            <label className="label text-primary text-sm font-bold">
              Email address
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              className="input bg-base-200"
              placeholder="Email"
              required
            />
            <label className="label text-primary text-sm font-bold mt-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input bg-base-200"
              placeholder="Password"
              required
            />
            <div>
              <a onClick={handleChangePassword} className="link link-hover">
                Forgot password?
              </a>
            </div>

            {err && <p className="text-red-600">{err}</p>}

            <button type="submit" className="btn btn-primary mt-4">
              Login
            </button>
            <p>
              Dont’t Have An Account ?{" "}
              <Link
                to="/auth/register"
                className="text-secondary font-semibold"
              >
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
