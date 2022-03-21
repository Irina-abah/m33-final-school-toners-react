import "./Main.css";
import { HashLink as Link } from 'react-router-hash-link';
import chhs from "../../images/cheadle-hulme-high-school.svg";
import chsf from "../../images/cheadle-hulme-sixth-form.svg";
import gb from "../../images/gorsey-bank.svg";
import chps from "../../images/cheadle-hulme-primary-school.svg";
import lch from "../../images/laurus-cheadle-hulme.svg";
import lr from "../../images/laurus-ryecroft.svg";
import dhs from "../../images/didsbury-high-school.svg";
import hghs from "../../images/Hazel_Grove.svg";
import wd from "../../images/woodford.png";

const Main = () => {
  return (
    <main className="main">
      <section className="promo">
        <h1 className="promo__title">This app helps to keep Printer toners levels up-to-date.</h1>
        <p className="promo__subtitle">Login or create an account to manage stock levels for all <Link className="link promo__span" to="#schools">schools of Laurus Trust</Link> </p>
      </section>
      <section className="main-schools" id="schools">
      <h2 className="section__title">Laurus Trust Schools</h2>
        <ul className="schools__list">
          <li className="school__item"><img className="school__photo" src={chhs} alt="chhs"/></li>
          <li className="school__item green"><img className="school__photo" src={chsf} alt="chsf"/></li>
          <li className="school__item"><img className="school__photo" src={gb} alt="gb"/></li>
          <li className="school__item"><img className="school__photo" src={chps} alt="chps"/></li>
          <li className="school__item green"><img className="school__photo" src={lch} alt="lch"/></li>
          <li className="school__item"><img className="school__photo" src={lr} alt="lr"/></li>
          <li className="school__item"><img className="school__photo" src={dhs} alt="dhs"/></li>
          <li className="school__item green"><img className="school__photo" src={hghs} alt="hghs"/></li>
          <li className="school__item"><img className="school__photo" src={wd} alt="wd"/></li>
        </ul>
      </section>
      <section className="techs">
        <h2 className="section__title">Technologies</h2>
        <div className="techs__info">
          <h3 className="techs__title">10 tecnhologies</h3>
          <p className="techs__subtitle">Technology stack used for this project:</p>
        </div>
        <ul className="techs__list">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Node.js</li>
          <li className="techs__item">Express</li>
          <li className="techs__item">MySQL</li>
          <li className="techs__item">Sequelize</li>
        </ul>
        <ul className="techs__list">
          <li className="techs__item">Git</li>
          <li className="techs__item">Netlify</li>
          <li className="techs__item">Heroku</li>
        </ul>
      </section>
    </main>
  )
}

export default Main;