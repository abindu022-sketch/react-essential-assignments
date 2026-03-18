import { useState } from "react";
import Avatar from "./Avatar";
import "./PortfolioCard.css";

function PortfolioCard() {

  const profiles = [
    {
      name: "Prakash",
      role: "Frontend Developer",
      bio: "Frontend Engineer having experience around 9+ years. Build competitive edge UI designs in previous projects.I design and build calm, focused product experiences for fast-moving teams.",
      image: "https://i.pravatar.cc/150?img=1",
      skills: ["Design System","React","TypeScript","Figma"]
    },
    {
      name: "Srijanya",
      role: "Frontend Developer",
      bio: "Frontend developer passionate about building responsive UI. Having experience of 2+ years in UI. Having exposure to user experence designs in previous project. I design and build calm, focused product experiences for fast-moving teams.",
      image: "https://i.pravatar.cc/150?img=2",
      skills: ["React","JavaScript","CSS"]
    },
    {
      name: "Satyam",
      role: "UI/UX Designer",
      bio: "Creative designer focused on user experience. Passionated to work on UI in competetive environment. I design and build calm, focused product experiences for fast-moving teams.",
      image: "https://i.pravatar.cc/150?img=3",
      skills: ["Figma","UX","Prototyping"]
    },
    {
      name: "Manohar",
      role: "Full Stack Developer",
      bio: "Engineer who builds performant applications. Build creative designs by focusing on user experience. Having 15+ years of experience. I design and build calm, focused product experiences for fast-moving teams.",
      image: "https://i.pravatar.cc/150?img=4",
      skills: ["Node","React","MongoDB"]
    }
  ];

  const [index,setIndex] = useState(0);
  const [dark,setDark] = useState(false);
  const [liked, setLiked] = useState(false);
const [likes, setLikes] = useState(128);

  const nextProfile = () => {
    setIndex((index + 1) % profiles.length);
  };

  const prevProfile = () => {
    setIndex((index - 1 + profiles.length) % profiles.length);
  };

  const showContact = () => {
    alert(`Contact button clicked will contact ${profiles[index].name}`);
  };

  const toggleLike = () => {
  if (liked) {
    setLikes(prev => prev - 1);
    setLiked(false);
  } else {
    setLikes(prev => prev + 1);
    setLiked(true);
    }
  };

  const profile = profiles[index];

  return (

    <div className="container">

      {/* Top Right Toggle */}
      <div className="toggle-theme">
        <button onClick={()=>setDark(!dark)}>
          ☀ Toggle theme
        </button>
      </div>

      <div className={`portfolio-card ${dark ? "dark" : ""}`}>

        {/* Profile Section */}
        <div className="profile-section">

          <Avatar image={profile.image}/>

          <div className="profile-info">

            <h2>{profile.name}</h2>
            <p className="role">{profile.role}</p>

            <p className="bio">{profile.bio}</p>

            <h4>Skills</h4>

            <div className="skills">
              {profile.skills.map((skill,i)=>(
                <span key={i} className="skill">{skill}</span>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer">

      <div className="footer-left">

        {/* Dark Mode Toggle */}
        <span
          className="dark-toggle"
          onClick={() => setDark(!dark)}
          style={{ cursor: "pointer" }}
        >
          {dark ? "☀ Light" : "🌙 Dark"}
        </span>

        <span onClick={prevProfile} className="arrow">❮</span>

        <span onClick={nextProfile} className="arrow">❯</span>

        <span>{index + 1} / {profiles.length}</span>

        <span className="like-section" onClick={toggleLike}>
            <span className={`heart-icon ${liked ? "liked" : ""}`}>
              {liked ? "❤️" : "♡"}
            </span>
            {likes}
        </span>

      </div>

  <button className="contact-btn" onClick={showContact}>
    Contact
  </button>

</div>

      </div>

    </div>
  );
}

export default PortfolioCard;