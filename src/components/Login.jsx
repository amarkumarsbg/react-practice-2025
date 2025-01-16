import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <form className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>
        <div className="mb-4">
          <p className="block  font-medium text-gray-600">Email</p>
          <input
            type="text"
            className="mt-2 w-full px-4 py-2 border rounded-lg  focus:outline-none "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            autoComplete="email"
          />
        </div>
        <div>
          <p className="block  font-medium text-gray-600">Password</p>
          <input
            type="password"
            className="w-full mt-2 border px-4 py-2 rounded-lg focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            autoComplete="password"
          />
        </div>
        <button className="w-full border bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 mt-4">
          Login
        </button>
        <p className="mt-2">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-700 cursor-pointer">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
