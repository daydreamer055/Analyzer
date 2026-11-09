import React from 'react'
import { useEffect,useState } from 'react'
import { FaMoon, FaSun} from "react-icons/fa"


const DarkMode = () => {
  const [darkMode ,setDarkMode] = useState(
  localStorage.getItem("theme")==="dark"
  );
  useEffect(()=> {
    if(darkMode){
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme","dark");
    }else{
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
  },[darkMode])
  return (
    <button
      onClick={()=> setDarkMode(!darkMode)}
      className ='p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
      >
        {darkMode?<FaSun></FaSun> :<FaMoon></FaMoon>}
    </button>
  )
}

export default DarkMode
