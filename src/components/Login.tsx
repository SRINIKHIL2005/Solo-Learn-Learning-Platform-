import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const handleLogin = async (email: string, password:string):Promise<void> => {
    try {
      const response = await fetch("http://localhost:3000/api/login", {
      // const response = await fetch("http://localhost:6160/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('userData', JSON.stringify(data.message));
     
             
        navigate("/profile");
      } else {
        alert(data.message || "Sign-in failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      handleLogin(email, password);
      setIsLoading(false);
      setEmail("");
      setPassword("");
    }, 2000);
  };

  const handleGuestLogin = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({ name: "Guest", email: "guest@example.com" })
    );
    navigate("/hero");
  };

  const handleMagicLink = () => {
    alert(`✨ A magic link has been sent to ${email}. Check your inbox!`);
  };

  return (
    <>
<style>
  {`
  body{
    margin-top: -70px
  }
  `}
</style>
    <div
      className={`relative flex h-screen w-full items-center justify-center transition-all duration-1000 ease-in-out ${
        darkMode
          ? "bg-[url('images/bg17.jpg')] bg-cover bg-no-repeat bg-center"
          : "bg-[url('images/dark16.jpg')] bg-cover bg-no-repeat bg-center"
      }`}
    >
      {/* Animated Gradient Background */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
          darkMode
            ? "bg-gradient-to-r from-gray-900/50 via-gray-800/50 to-gray-900/50"
            : "bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-teal-900/50"
        } animate-gradient-x`}
      ></div>

      {/* Floating Animated Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-20 left-1/4 w-64 h-64 ${
            darkMode ? "bg-gray-700/20" : "bg-purple-500/20"
          } rounded-full blur-3xl animate-float-1 transition-all duration-1000`}
        ></div>
        <div
          className={`absolute bottom-20 right-1/4 w-56 h-56 ${
            darkMode ? "bg-gray-600/20" : "bg-blue-500/20"
          } rounded-full blur-3xl animate-float-2 transition-all duration-1000`}
        ></div>
        <div
          className={`absolute top-1/3 left-1/2 w-48 h-48 ${
            darkMode ? "bg-gray-500/20" : "bg-teal-500/20"
          } rounded-full blur-3xl animate-float-3 transition-all duration-1000`}
        ></div>
      </div>

      {/* Login Card */}
      <div
        className={`relative ${
          darkMode ? "bg-gray-900/50" : "bg-white/10"
        } backdrop-blur-2xl border ${
          darkMode ? "border-gray-700/20" : "border-white/20"
        } shadow-2xl p-10 rounded-3xl w-full max-w-md transition-all duration-500 hover:shadow-[0_0_30px_#3B82F6]/30 animate-float`}
      >
        <h1
          className={`font-poppins font-extrabold text-5xl text-center mb-6 bg-gradient-to-r ${
            darkMode ? "from-purple-400 to-blue-400" : "from-purple-500 to-blue-500"
          } bg-clip-text text-transparent transition-all duration-1000`}
        >
          Welcome Back
        </h1>
        <p
          className={`text-center mb-8 font-poppins text-lg ${
            darkMode ? "text-white-300" : "text-white"
          }`}
        >
          🔑 Sign in to continue
        </p>

        <form onSubmit={submitHandler} className="flex flex-col space-y-6">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`w-full ${
              darkMode ? "text-white" : "text-black"
            } font-poppins font-semibold ${
              darkMode ? "bg-gray-800/50" : "bg-white/10"
            } border ${
              darkMode ? "border-gray-700/30" : "border-white/30"
            } text-lg py-3 px-5 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-blue-400 transition-all shadow-lg ${
              darkMode ? "shadow-gray-800/50" : "shadow-gray-900/50"
            }`}
            type="email"
            placeholder="📧 Enter your email"
          />
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`w-full ${
                darkMode ? "text-white" : "text-black"
              } font-poppins font-semibold ${
                darkMode ? "bg-gray-800/50" : "bg-white/10"
              } border ${
                darkMode ? "border-gray-700/30" : "border-white/30"
              } text-lg py-3 px-5 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-blue-400 transition-all shadow-lg ${
                darkMode ? "shadow-gray-800/50" : "shadow-gray-900/50"
              }`}
              type={showPassword ? "text" : "password"}
              placeholder="🔒 Enter password"
            />
            <span
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              } cursor-pointer hover:text-white transition-all duration-300`}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>

          <button
            type="submit"
            className={`w-full text-white font-poppins font-semibold text-lg py-3 rounded-xl transition-all duration-300 shadow-lg ${
              isLoading
                ? "bg-gray-500 cursor-not-allowed"
                : `bg-gradient-to-r ${
                    darkMode ? "from-purple-600 to-blue-600" : "from-purple-500 to-blue-500"
                  } hover:from-purple-600 hover:to-blue-600 hover:shadow-[0_0_20px_#3B82F6] hover:scale-105`
            } relative overflow-hidden group`}
            disabled={isLoading}
          >
          
            <span className="relative z-10">
              {isLoading ? "🔄 Logging In..." : "🚀 Sign In"}
            </span>
          
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-white/20"></div>
          <span className="text-gray-400 px-3 font-poppins">or</span>
          <div className="flex-grow border-t border-white/20"></div>
        </div>

        <button
          onClick={handleGuestLogin}
          className={`w-full flex items-center justify-center bg-gradient-to-r ${
            darkMode ? "from-purple-600 to-pink-600" : "from-purple-500 to-pink-500"
          } text-white font-poppins font-semibold py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group`}
        >
          <span className="relative z-10">👤 Continue as Guest</span>
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
        </button>

        <button
          onClick={handleMagicLink}
          className={`w-full flex items-center justify-center bg-gradient-to-r ${
            darkMode ? "from-green-600 to-teal-600" : "from-green-500 to-teal-500"
          } text-white font-poppins font-semibold py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 mt-3 relative overflow-hidden group`}
        >
          <span className="relative z-10">✨ Get a Magic Link</span>
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
        </button>

        <div className="flex justify-between items-center mt-6 text-gray-300 text-sm font-poppins">
          <a href="#" className="hover:text-blue-400 transition-all">
            ❓ Forgot Password?
          </a>
          <a href="/SignUp" className="hover:text-blue-400 transition-all">
            ➕ Create Account
          </a>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-all text-2xl"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </div>
    </>
  );
};

export default Login;





