import React, { useContext, useState } from "react";
import PageName from "../Shared/PageName";
import logo from "../../assets/Layout/logo.png";
import { Link } from "react-router";
import { IoIosEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { AuthContext } from "../../context/Authcontext";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../firebase.config";
import axios from "axios";
import axiosPublic from "../../config/axiosPublic";

const Signup = () => {
  const [error, setError] = useState(null);
  const [showPasword, setShowPassword] = useState(false);
  const [confirmPasword, setConfirmPassword] = useState(false);

  const { createUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!name && !email && !password && !confirmPassword) {
      setError("Name , Email , password and confirm password is required");
      return;
    }

    if (password !== confirmPassword) {
      setError("password didn't matched ");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "password must includes atleast 1 uppercase , 1 lowercase , 1 digit and should be 8 character"
      );
      return;
    }

    setError("");

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        if (res?.user?.email) {
          updateProfile(auth.currentUser, {
            displayName: name
          })
            .then(() => {
              console.log(res);
              const user = {
                name: res.user.displayName,
                email: res.user.email
              }

              console.log(user);
              axios.post("http://localhost:3000/user", user)
                .then(() => {
                  axiosPublic.post("/jwt", { email: res.user.email })
                    .then(res => console.log(res.data))
                })
            })
        }
      })
      .catch((err) => console.log(err));

    console.log({ name, email, password, confirmPassword });
  };

  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then((res) => {

        console.log(res.user);

        axiosPublic.post("/jwt", { email: res.user.email })
          .then(res => console.log(res.data))



        const user = {
          name: res.user.displayName,
          email: res.user.email,

        }

        axiosPublic.post("/user", user)
          .then(() => {
          })
      })
      .catch((err) => console.log(err));
  };


  const handleGithubSignin = () => {
    signInWithGithub()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex text-black/70 py-20 justify-center items-center">
      <div className="max-w-lg w-full p-10  bg-white shadow-md ">
        <div className="flex justify-center items-center">
          <img src={logo} className="w-16" />
          <div>
            <h2 className="capitalize font-bold font-sans text-2xl">foodzy</h2>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset mt-5">
            <legend className="fieldset-legend">Enter Your Name*</legend>
            <input
              type="text"
              required
              className="input focus:outline-0 focus:border-primary w-full"
              placeholder="Enter your Name"
              name="name"
            />
          </fieldset>

          <fieldset className="fieldset mt-5">
            <legend className="fieldset-legend">Enter Your Email*</legend>
            <input
              type="text"
              name="email"
              required
              className="input focus:outline-0 focus:border-primary w-full"
              placeholder="Enter your Email"
            />
          </fieldset>
          <fieldset className="fieldset relative mt-2">
            <legend className="fieldset-legend">Password*</legend>
            <input
              type={showPasword ? "text" : "password"}
              name="password"
              required
              className="input focus:outline-0 focus:border-primary w-full"
              placeholder="Enter your Password"
            />
            <div
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute z-[50] right-3 text-lg top-3"
            >
              {showPasword ? <IoMdEyeOff /> : <IoIosEye />}
            </div>
          </fieldset>
          <fieldset className="fieldset relative mt-2">
            <legend className="fieldset-legend">Confirm Password*</legend>
            <input
              type={confirmPasword ? "text" : "password"}
              name="confirmPassword"
              required
              className="input focus:outline-0 focus:border-primary w-full"
              placeholder="Confirm Password"
            />
            <div
              onClick={() => setConfirmPassword((prev) => !prev)}
              className="absolute z-[50] right-3 text-lg top-3"
            >
              {showPasword ? <IoMdEyeOff /> : <IoIosEye />}
            </div>
          </fieldset>

          <div className="flex my-4 justify-between">
            <div className="flex gap-2">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox rounded-sm checked:text-white checked:bg-primary"
              />
              Remember Me
            </div>
          </div>

          <p className="my-2 text-red-500 ">{error}</p>

          <div className="flex  my-4 mt-5 items-center justify-between">
            <button type="submit" className="btn btn-primary bg-primary">
              {" "}
              Signup
            </button>

            <Link to={"/login"}>Login ?</Link>
          </div>
        </form>

        <div className="divider">OR</div>

        <button onClick={handleGoogleSignin} className="flex cursor-pointer active:scale-95 duration-300 items-center gap-2 w-full justify-center py-2 bg-base-200">
          <FcGoogle /> Continue With Google
        </button>

        <button onClick={handleGithubSignin} className="flex mt-2 cursor-pointer active:scale-95 duration-300 items-center gap-2 w-full justify-center py-2 bg-base-200">
          <FaGithub /> Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
