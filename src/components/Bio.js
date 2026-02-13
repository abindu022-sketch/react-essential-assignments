function Bio({ userData}) {
    return (
      <div className="bio-section">
        <h3>About Me</h3>
        <p className="bio-text">{userData.bio}</p>
  
        <h3>Skills</h3>
        <div className="skills-container">
          {userData.skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  }
  
  export default Bio;
  