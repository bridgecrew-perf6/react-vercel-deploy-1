import React from "react";
import "../css/project.sector.scss";
import equniconx from "../assets/equniconx.png";
import pepbasket from "../assets/pepbasket.png";
import vikingswap from "../assets/vikingswap.png";

const ProjectSector = () => {
  return (
    <div className="project-div">
      <p className="txt-title">Portfolio</p>
      <div className="sub-project-div">
        <div className="div-img">
          <img className="img-project-logo" src={equniconx} />
        </div>
        <div className="div-description">
          <p className="txt-project-name">Equniconx</p>
          <p className="txt-project-description">This site creates a network of horse lovers, catering to all equine disciplines and abilities.</p>
          <a
            href="https://www.equiconx.com"
            target="_blank"
            className="project-link"
          >
            Click here to visit site
          </a>
        </div>
      </div>
      <div className="sub-project-div">
        <div className="div-img">
          <img className="img-project-logo" src={pepbasket} />
        </div>
        <div className="div-description">
          <p className="txt-project-name">pepbasket</p>
          <p className="txt-project-description">            
            The delivery site saves your time.
          </p>
          <a
            href="https://dev.invaluable.market/"
            target="_blank"
            className="project-link"
          >
            Click here to visit site
          </a>
        </div>
      </div>
      <div className="sub-project-div">
        <div className="div-img">
          <img className="img-project-logo" src={vikingswap} />
        </div>
        <div className="div-description">
          <p className="txt-project-name">Invaluable MarketPlace</p>
          <p className="txt-project-description">            
            INVALUABLE is a utility driven NFT marketplace created by collectors for collectors featuring our own metaverse, the INVALUABLE CLUB: a digital playground that brings collectors, artists, musicians, athletes, and brands together through an interactive and immersive experience.
          </p>
          <a
            href="https://dev.invaluable.market/"
            target="_blank"
            className="project-link"
          >
            Click here to visit site
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectSector;