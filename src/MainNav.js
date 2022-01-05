import "./MainNav.css";

function MainNav({ setNav }) {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.id, 'ehh');
    setNav(e.target.id); //about, projects, or contact
  };

  return (
    <div>
      <div className="title-container">
        <header>
          <h1>Daniel C. Lechok</h1>
          <br />
          <span className="subtitle-one">Full Stack Developer</span>
          <br />
        </header>
      </div>
      <hr />
      <nav className="nav">
        <a href="/" onClick={handleClick} id="about">
          about
        </a>
        |
        <a href="/" onClick={handleClick} id="projects">
          projects
        </a>
        | 
        <a href="/" onClick={handleClick} id="contact">
        contact
        </a>
      </nav>
      <br />
      <p className="subtitle-two">Welcome to my development portfolio...</p>
    </div>
  );
}

export default MainNav;
