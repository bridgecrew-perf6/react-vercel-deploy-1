import React from "react";
import "../css/intro.sector.scss";
import myAvatar from "../assets/me.jpg";

const IntroSector = () => {
  return (
    <div className="intro-div">
      <div className="div-wrap">
        { window.innerWidth <= 768 &&
          <div className="div-avatar">
            <img className="img-avatar" src={myAvatar} />
          </div>
        }
        <div className="div-bio">
          <p className="txt-bio">Over 9 years of experience in full-stack web development. <br/>
          A master in the art of managing technical decisions and trade-offs, always knowing how to avoid both analysis paralysis as well as rushed solutions. <br/>
          Adapted to using modern learning tools to stay at the forefront of knowledge in modern technologies, frameworks, and libraries.<br/>
          Passionate about sharing new learnings with others and optimizing personal and team productivity.<br/>
          Always deliver clean, optimize, commented, and best quality code.
          </p>
        </div>
        { window.innerWidth > 768 &&
          <div className="div-avatar">
            <img className="img-avatar" src={myAvatar} />
          </div>
        }
      </div>
    </div>
  )
}

export default IntroSector;