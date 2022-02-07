import "./Nav.css";
import LinkedinIcon from './images/linkedin-icon.png';
import GithubIcon from './images/github-icon.png';

function Nav({ setNav }) {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.id, 'ehh');
    setNav(e.target.id); //about, projects, or contact
  };

  return (
    <nav>
      <div className="name">
        <h1>Daniel C. Lechok</h1>
      </div>
      <p>Welcome to my development portfolio...</p>
      <div>
        <h3>about | test |  <a href='http://linkedin.com/in/dclechok'><img src={LinkedinIcon} /></a> <img src={GithubIcon} /></h3>
      </div>
    </nav>
  );
}

export default Nav;
