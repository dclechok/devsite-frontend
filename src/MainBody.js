import "./MainBody.css";
import SkillsList from "./SkillsList";
import About from "./About";
import React from "react";

function MainBody({ nav }) {
  return (
    <main className="main-body">
      <section className="nested-body">
        {nav === "about" && (
          <React.Fragment>
            <About />
            <SkillsList />
          </React.Fragment>
        )}
        {nav === "projects" && 
          (<p>Projects coming soon...</p>)
        }
        {nav === "contact" && 
          (<p>Contact coming soon...</p>)
        }
      </section>
    </main>
  );
}

export default MainBody;
