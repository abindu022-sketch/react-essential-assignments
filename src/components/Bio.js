/*function Bio (){
    const bio = "Passionate software engineer with a love for coding and problem-solving. Experienced in developing web applications using JavaScript, React, and Node.js. Always eager to learn new technologies and contribute to innovative projects.";
    const skills = ["JavaScript", "React.js", "Node.js", "HTML", "CSS", "GIT", "MySql", "Azure", "Java"];
    return (
        <div className="bio-section">
            <h3>About Me</h3>
            <p className="bio-text">{bio}</p>
            <h3>skills</h3>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                ))}
            </div>
        </div>
    );
}

export default Bio;
*/

function Bio({ bio, skills }) {
    return (
      <div className="bio-section">
        <h3>About Me</h3>
        <p className="bio-text">{bio}</p>
  
        <h3>Skills</h3>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  }
  
  export default Bio;
  