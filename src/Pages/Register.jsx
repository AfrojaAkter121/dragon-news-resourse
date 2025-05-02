import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const {signUpUser, setUser} = use(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        signUpUser(email, password).then(result => {
            setUser(result.user)
        })
        .catch(err => {
            alert(err.message)
        })
        
    }

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-7">
        <h1 className="font-semibold text-2xl text-center text-primary ">
          Register your account
        </h1>
        <hr className="text-base-300 mt-5" />
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label text-primary text-sm font-bold">Name</label>
            <input
              type="name"
              name="name"
              className="input bg-base-200"
              placeholder="Your Name"
              required
            />
            {/* photoUrl */}
            <label className="label text-primary text-sm font-bold">
              Photo Url
            </label>
            <input
              type="photo"
              name="photo"
              className="input bg-base-200"
              placeholder="Photo Url"
              required
            />
            {/* email */}
            <label className="label text-primary text-sm font-bold">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="input bg-base-200"
              placeholder="Email"
              required
            />
            {/* password */}
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
            {/* terms */}
            <label className="label">
              <input type="checkbox" defaultChecked className="checkbox" required/>
              Accept Term & Conditions
            </label>
            {/*button  */}
            <button type="submit" className="btn btn-primary mt-4">Register</button>
            <p>
              Already Have An Account ?{" "}
              <Link to="/auth/login" className="text-secondary font-semibold">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
