import React from 'react';
import { useTheme } from "../Hooks/useTheme";
import { FaMoon } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";


const ThemeSwitcher = () => {

    const {theme, setTheme} = useTheme();

    const handelThemeChange = (newTheme)=>{
        setTheme(newTheme);
    }
  return (
    <span className="bg-black dark:bg-white inline-flex items-center justify-between gap-2 px-1 py-1 rounded-full ">
      <button onClick={()=>handelThemeChange('dark')} className={` cursor-pointer  transition-all duration-300 ease-in-out rounded-full p-1 ${theme === 'dark' ? 'bg-primary text-white' : 'text-white'}`}>
      <FaMoon />
      </button>
      <button onClick={()=>handelThemeChange('light')} className={`text-white dark:text-black cursor-pointer  transition-all duration-300 ease-in-out rounded-full p-1 ${theme === 'light' ? 'bg-primary text-white' : 'text-black'}`}>
      <MdOutlineWbSunny />
      </button>
    </span>
  )
}

export default ThemeSwitcher;
