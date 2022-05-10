import React from "react";
import "../css/company.sector.scss";

const CompanySector = () => {
  return (
    <div className="company-div">
      <p className="txt-title">Work Experience</p>
      <div className="sub-company-div">
        <div className="div-role">
          <p className="txt-company-name">Jun 2019 ~ PRESENT </p>
          <p className="txt-company-role">Senior Full-Stack Developer | BlockChain</p>
        </div>
        
        <ul className="ul-point">
          <li className="li-point">
            Architected infrastructures of new projects, implemented good ideas into the projects, and divided the projects among the developers.
          </li>
          <li className="li-point">
            Improved the page speed by 40% for the eCommerce site which brought about $30M annually in revenue by leveraging browser caching and improving server response times thanks to server-side rendering by Next.js.
          </li>
          <li className="li-point">
            Collaborated with app developers to build a strong search functionality in React.js for an eCommerce site with 30k+ products leading to an increase in page views per session of 35%.
          </li>
          <li className="li-point">
            Maintenanced and supported customers of an eCommerce website in terms of technical issues and guideline.
          </li>
          <li className="li-point">
            Built up extensive experience with DEX, DAO, Staking, Yield Farming, NFT minting, NFT marketplace platforms.
          </li>
          <li className="li-point">
            Well-experienced with ERC20, ERC721, ERC721A, ERC1155 token standard, Openzepplin, upgradable smart contract, zepplinOS, off-chain oracle.
          </li>
        </ul>
      </div>

      <div className="sub-company-div">
        <div className="div-role">
          <p className="txt-company-name">Jul 2018 ~ Jun 2019</p>
          <p className="txt-company-role">BackEnd developer</p>
        </div>
        
        <ul className="ul-point">
          <li className="li-point">
            Figured out the technical problems senior developers faced and helps junior developers to improve their qualities.
          </li>
          <li className="li-point">
            Enhanced application security and capability to work well with multiple APIs and databases.
          </li>
          <li className="li-point">
            Collaborated with front-end developers to build a headless CMS with 5k+ product data for node.js frameworks.
          </li>
          <li className="li-point">
            Designed & developed a successful node.js server with TypeScript for an eCommerce website and deployed it on Heroku.
          </li>
        </ul>
      </div>

      <div className="sub-company-div">
        <div className="div-role">
          <p className="txt-company-name">May 2015 ~ Jul 2018</p>
          <p className="txt-company-role">Senior Front-End Developer</p>
        </div>
        
        <ul className="ul-point">
          <li className="li-point">
            Built a UI for an eCommerce website with 10k customers using React.js and deployed it on Vercel.
          </li>
          <li className="li-point">
            Enhanced store with persist store for preventing UI blocking before the store is ready.
          </li>
          <li className="li-point">
            Implemented redux for store management in React.js eCommerce website.
          </li>
          <li className="li-point">
            Boosted loading speed by 46% for an eCommerce website by realizing the lazy-load idea to optimize the main bundle for the very first rendering.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CompanySector;