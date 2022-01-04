import "./MainBody.css";
import SkillsList from "./SkillsList";
import About from "./About";

function MainBody() {
  return (
    <main className="main-body">
      <section className="nested-body">
        <About />
        <SkillsList />
      </section>
    </main>
  );
}

export default MainBody;
