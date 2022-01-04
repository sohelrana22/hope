import React, { useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { Link,  useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  //Dynamic Title
  useEffect(() => {
    document.title = "Register | Hopewell Hospital";
  }, []);

  return (
    <div className="bg-cyan-50">
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-lg mx-auto shadow-xl shadow-cyan-200 overflow-hidden py-10 px-20 bg-white relative z-2">
          <div
            onClick={() => navigate("/")}
            className="absolute top-2 right-0 btn px-4"
          >
            <GrClose size="1.5em" />
          </div>
          <form className="space-y-6">
            <div className="">
              <h2 className="text-cyan-500 text-2xl font-bold text-center">
                Register
              </h2>
              <p className="text-cyan-500 text-center">Hey! Nice to see you!</p>
            </div>

            <div className="grid items-center grid-cols-6 gap-6 space-y-2">
              <div className="col-span-6 md:col-span-3">
                <input
                  id="fName"
                  name="fName"
                  type="name"
                  className="input-field"
                  placeholder="First Name"
                />
              </div>
              <div className="col-span-6 md:col-span-3">
                <input
                  id="lName"
                  name="lName"
                  type="name"
                  className="input-field"
                  placeholder="Last Name"
                />
              </div>

              <div className="col-span-6">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input-field"
                  placeholder="Email Address"
                />
              </div>

              <div className="col-span-6">
                <input
                  required
                  type="password"
                  name="password"
                  id="password"
                  className="input-field"
                  placeholder="Your Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </div>

            <p className="text-center">
              Already registered?
              <Link
                className="text-cyan-500 hover:text-cyan-400 no-underline ml-2"
                to="/login"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
