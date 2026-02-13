/*
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import Avatar from "./Avatar";
import Bio from "./Bio";

import "./PortfolioCard.css";

function PortfolioCard( ) {
  return (
    <div className="portfolio-card">
      <Header />
      <div className="card-content">
        <Avatar />
        <PersonalInfo />
        <Bio />
      </div>
    </div>
  );
}

export default PortfolioCard;
*/

import { useState } from "react";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import Avatar from "./Avatar";
import Bio from "./Bio";

import "./PortfolioCard.css";

function PortfolioCard() {
  const [darkMode, setDarkMode] = useState(false);

  // Likes State
  const [likes, setLikes] = useState(0);

  // Handlers
  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  const showAlert = () => {
    alert("Thanks for visiting my profile!");
  };

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  const userData = {
    bio: "Passionate software engineer who loves building interactive applications.",
    skills: ["JavaScript", "React", "Node.js", "CSS"]
  };

  return (
    <div className={`portfolio-card ${darkMode ? "dark" : ""}`}>
      <Header />

      <div className="card-content">
        <Avatar />

        <PersonalInfo />
        <Bio bio={userData.bio} skills={userData.skills} />

        <div style={{ marginTop: "15px" }}>
          <button onClick={handleLike}>❤️ Like</button>
          <p>{likes} Likes</p>
        </div>

        <button onClick={toggleTheme}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>

        <button onClick={showAlert}>Show Alert</button>
      </div>
    </div>
  );
}

export default PortfolioCard;



