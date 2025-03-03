import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-[20px] md:px-[100px] py-[10px] border-b-1 border-gray-200 ">
      <h1 className="text-xl dark:text-white">WORDLE</h1>
      <div className="flex items-center gap-5">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
