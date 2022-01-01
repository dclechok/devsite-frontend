import "./MainNav.css";

function MainNav() {
  return (
    <div>
      <div className="title-container">
        <header>
          <h1>Daniel C. Lechok</h1>
          <br />
          <span className="subtitle-one">Full Stack Engineer</span>
          <br />
          <p className="subtitle-two">Welcome to my development portfolio.</p>
        </header>
      </div>
      <hr />
      <nav className="nav">about | projects | contact | this | that </nav>
    </div>
  );
}

export default MainNav;
