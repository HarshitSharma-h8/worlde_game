import React, {useEffect, useState} from "react";
import ThemeSwitcher from "./Components/ThemeSwitcher";
import WordleMainComponent from "./Components/WordleMainComponent";
import Header from "./Components/Header";
import RulesCard from "./Components/RulesCard";

const App = () => {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    setShowCard(true); // Show modal when user arrives
  }, []);
  return (
    <>
      {showCard && <RulesCard onClose={() => setShowCard(false)}/>}
      <div className="h-screen flex flex-col">
        <Header />
        <div className="dark:bg-dark flex-1 flex justify-center items-center">
          <WordleMainComponent />
        </div>
      </div>
    </>
  );
};

export default App;
