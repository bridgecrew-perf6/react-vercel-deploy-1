import React from "react";
import logo from "../../assets/me.jpg";
import "../../css/header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrap">
        <img className="img-logo" src={logo} />
        <span className="txt-name">Suzuki Akira</span>
        <div className="div-contact">
          <a 
            href="https://github.com/CryptoFist" 
            target="_blank" 
            className="contact-link"
            rel="noopener"
          >
            <img 
              loading="lazy" 
              className="img-contact" 
              src="https://metis.io/wp-content/uploads/2021/03/github.png" 
              alt="" />  
          </a>

          <a 
            href="https://t.me/CryptoFist1002" 
            target="_blank" 
            className="contact-link"
            rel="noopener"
          >
            <img 
              loading="lazy" 
              className="img-contact" 
              src="https://metis.io/wp-content/uploads/2021/03/telegram.png" 
              alt="" />  
          </a>

          <a 
            href="https://discord.gg/CryptoFist#3136" 
            target="_blank" 
            className="contact-link"
            rel="noopener"
          >
            <img 
              loading="lazy" 
              className="img-contact" 
              src="https://www.metis.io/wp-content/uploads/2021/10/discord-icn.png" 
              alt="" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;