
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Get registered user from localStorage
    const savedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (!savedUser) {
      alert("Please create an account first.");
      return;
    }

    // Validate credentials
    if (
      email.trim().toLowerCase() ===
        savedUser.email.trim().toLowerCase() &&
      password === savedUser.password
    ) {
      // Save login status
      localStorage.setItem("isLoggedIn", "true");

      // Update Navbar immediately
      window.dispatchEvent(new Event("authChange"));

      // Redirect to dashboard
      navigate("/dashboard");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200 dark:bg-blue-900 px-4">

      <div className="w-full max-w-md bg-white p-8 dark:bg-blue-400 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-center">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Login to your account
        </p>

        <form onSubmit={handleLogin} className="mt-6">

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 mb-6 border rounded-lg"
          />

          {/* Password */}
          <div className="relative w-full">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 pr-12 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              aria-label={
                showPassword ? "Hide password" : "Show password"
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 mt-5"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-5 dark:text-white">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold dark:text-gray-200"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
