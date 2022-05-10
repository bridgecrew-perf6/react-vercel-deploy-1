import react from "react";
import "../css/main.sector.scss";
import IntroSector from "./intro.sector";
import Header from "./component/header";
import CompanySector from "./company.sector";
import ProjectSector from "./project.sector";
import SkillSector from "./skill.sector";

const MainSector = () => {
  return (
    <div className="div-main">
      <Header />
      <div className="div-context">
        <IntroSector />
        <CompanySector />
        <ProjectSector />
        <SkillSector />
      </div>
    </div>
  )
}

export default MainSector;