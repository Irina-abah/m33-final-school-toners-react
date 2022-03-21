import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <section className="promo">
      <div className="promo__container">
        {/* <img className="promo__image" src={PromoIcon} alt="Main page promo logo" /> */}
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      </div>
    </section>
    <section className="techs" id="techs">
      <h2 className="section__title">Technologies</h2>
      <div className="techs__info">
        <h3 className="techs__title">7 tecnhologies</h3>
        <p className="techs__subtitle">Technology stack used for this project:</p>
      </div>
      <ul className="techs__list">
        <li className="techs__item">HTML</li>
        <li className="techs__item">CSS</li>
        <li className="techs__item">Git</li>
        <li className="techs__item">React</li>
        <li className="techs__item">Node.js</li>
        <li className="techs__item">Express</li>
        <li className="techs__item">MySQL</li>
      </ul>
    </section>
    </main>
  )
}

export default Main;