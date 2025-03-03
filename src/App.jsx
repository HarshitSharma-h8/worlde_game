import React from "react";
import ThemeSwitcher from "./Components/ThemeSwitcher";
import WordleMainComponent from "./Components/WordleMainComponent";

const App = () => {
  return (
    <>
      <div className="dark:bg-dark h-[100vh] w-[100vh]">
        <h1 className="text-5xl text-green-400 uppercase">Wordle</h1>
        <ThemeSwitcher />
        <WordleMainComponent />
      </div>
    </>
  );
};

export default App;
