import "./MainBody.css";
import SkillsList from "./SkillsList";
import About from "./About";

function MainBody() {
  return (
    <main className="main-body">
      <About />
      <SkillsList />
    </main>
  );
}

export default MainBody;
