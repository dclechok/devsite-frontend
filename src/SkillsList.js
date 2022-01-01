import "./SkillsList.css";

function SkillsList() {
  return (
    <section className="skills-list">
      <li className="skill-subgroup">
        <h4>
          <strong>Prominent Tech Skills</strong>
        </h4>
        <ul>
          <li>JavaScript ES6</li>
          <li>HTML5/CSS (semantic)</li>
          <li>React Framework</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Bootstrap</li>
          <li>PostgreSQL</li>
          <li>Knex</li>
          <li>Test-driven Development</li>
          <li>RESTful API</li>
          <li>Version Control (Git)</li>
        </ul>
      </li>

      <li className="skill-subgroup">
        <h4>
          <strong>Other Tech Skills</strong>
        </h4>
        <ul>
          <li>Java SE 12</li>
          <li>C/C++</li>
          <li>Visual Basic</li>
          <li>Ruby</li>
          <li>Visual Studio Code</li>
          <li>Deployment (Heroku, Vercel)</li>
          <li>Typing 96 WPM</li>
          <li></li>
        </ul>
      </li>

      <li className="skill-subgroup">
        <h4>
          <strong>Soft Skills</strong>
        </h4>
        <ul>
          <li>Eagerness to Learn</li>
          <li>Effective Communication</li>
          <li>Team Player</li>
          <li>Dependability</li>
          <li>Creativity</li>
          <li>Problem Solving</li>
        </ul>
      </li>
    </section>
  );
}

export default SkillsList;
