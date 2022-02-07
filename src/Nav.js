import "./Nav.css";
import LinkedinIcon from "./images/linkedin-icon.png";
import GithubIcon from "./images/github-icon.png";

function Nav({ setNav }) {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.id, "ehh");
    setNav(e.target.id); //about, projects, or contact
  };

  return (
    <nav>
      <div>
        <h1>Daniel C. Lechok</h1>
      </div>

      <div className="center-flex">
        <h3>Full Stack Engineer · Portfolio</h3>
      </div>
      <div>
        <nobr>
          <h3>
            <span><b>a</b>bout | test | contact          </span>
            <a href="http://linkedin.com/in/dclechok">
              <img src={LinkedinIcon} />
            </a>{" "}
            <a href="http://github.com/dclechok">
              <img src={GithubIcon} />
            </a>
          </h3>
        </nobr>
      </div>
    </nav>
  );
}

export default Nav;
