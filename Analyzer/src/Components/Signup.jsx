import {Link, useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';
import { useState } from 'react';
const Signup = () => {
  const [name , setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const navigate = useNavigate();

  
const handleSubmit = (e) => {
  e.preventDefault();

  if (!name.trim() || !email.trim() || !password) {
    toast.error("Please fill in all fields!");
    return;
  }

  const userData = {
    name: name.trim(),
    email: email.trim(),
    password
  };

  localStorage.setItem("user", JSON.stringify(userData));

  // New signup should not automatically log in
  localStorage.setItem("isLoggedIn", "false");
  window.dispatchEvent(new Event("authChange"));

  toast.success("You have created an account");

  setName("");
  setEmail("");
  setPassword("");

  setTimeout(() => {
    navigate("/login");
  }, 1500);
};

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4  bg-blue-300  dark:bg-blue-900" >
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md">
        <h1 className="font-extrabold flex justify-center items-center ">Create Your Account</h1>
         <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
        </div>
        <div> 
          <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
            <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your E-mail"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
        </div>
        <button type="submit"
        className="w-full mt-1 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-200"
        >
        Sign Up
        </button>
       
       <p className='text-center mt-5 dark:text-white '>
               Already have an account?
               <Link to="/login" className='text-blue-600 font-semibold  dark:text-gray-400' > Login </Link>
             </p>
      </form>
      </div>
    </div>
  )
}

export default Signup