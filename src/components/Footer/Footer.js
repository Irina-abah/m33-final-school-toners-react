import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaShareAltSquare } from "react-icons/fa";
import { SiMicrosoftteams } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__title">Graduation project for Code Nation</h2>
      <p className="footer__subtitle">Student: Iryna Abah</p>
      <div className="footer__info">
        <div className="footer__policy">
          <a className="link policy__link" href="https://www.laurustrust.co.uk/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a>
          <p className="footer__subtitle">The Laurus Trust is a limited company registered in England and Wales. Company number 07907463, Data Protection Registration Number Z5543382. Registered office address is Cheadle Hulme High School, Woods Lane, Cheadle Hulme, Cheadle, Cheshire SK8 7JY.</p>
        </div>
        <div className="footer__content">
          <p className="copyright">&#169; {new Date().getFullYear()}</p>
          <nav className="menu">
            <a className="link menu__link" href="http://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF/></a>
            <a className="link menu__link" href="http://twitter.com" target="_blank" rel="noreferrer"><FaTwitter/></a>
            <a className="link menu__link" href="https://laurustrust.sharepoint.com/sites/LCH" target="_blank" rel="noreferrer"><FaShareAltSquare/></a>
            <a className="link menu__link" href="https://teams.microsoft.com" target="_blank" rel="noreferrer"><SiMicrosoftteams/></a>
          </nav>
        </div>
      </div>
    </footer>
  )
};

export default Footer;