import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const {signInUser} = use(AuthContext)

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email,password).then(res => {
        console.log(res.user)
    }).catch(err => {
        alert(err.message)
    })
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
              className="input bg-base-200"
              placeholder="Email"
            />
            <label className="label text-primary text-sm font-bold mt-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input bg-base-200"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-primary mt-4">Login</button>
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
