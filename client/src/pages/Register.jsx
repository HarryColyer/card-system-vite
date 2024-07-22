
import { useState } from "react";
import { Link } from "react-router-dom";
import UserIcon from "../component/UserIcon";
import InputText from "../component/InputText";

const Register = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center px-12">
      <div className="absolute top-4 right-4">
        <Link to="/">
          <UserIcon />
        </Link>
      </div>
      <form action="#" className="form">
        <h1 className="font-sans text-2xl font-semibold font-wide">Register</h1>
        <div className="space-y-1">
          <label htmlFor="name">Name</label>
          <InputText type="text" name="name"/>
        </div>
        <div className="space-y-1">
          <label htmlFor="email">Email</label>
          <InputText type="email" name="email" />
        </div>
        <div className="space-y-1">
          <label htmlFor="password">Password</label>
          <InputText type="password" name="password" />
        </div>
        <div className="mt-64">
          <button type="submit" className="form-btn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
