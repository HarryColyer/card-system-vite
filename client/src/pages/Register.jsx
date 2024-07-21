import UserIcon from "../component/UserIcon";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center px-12">
      <div className="absolute top-4 right-4">
        <Link to="/">
          <UserIcon />
        </Link>
      </div>
      <form
        action="#"
        className="space-y-5 bg-slate-800 text-slate-100 flex justify-center flex-col w-full sm:max-w-80 p-9 rounded-sm shadow-md"
      >
        <h1 className="font-sans text-2xl font-semibold font-wide">Register</h1>
        <div className="space-y-1">
          <label htmlFor="name">Name</label>
          <input
            className="px-2 w-full rounded-sm h-8 bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-700"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email">Email</label>
          <input
            className="px-2 w-full rounded-sm h-8 bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-700"
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="password">Password</label>
          <input
            className="px-2 w-full rounded-sm h-8 bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-700"
            type="text"
            name="password"
            id="password"
          />
        </div>
        <div className="mt-64">
          <button
            type="submit"
            className="w-full  inline-block bg-green-600 rounded-sm p-3 hover:bg-green-700 transition-all ease-in mt-4"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
