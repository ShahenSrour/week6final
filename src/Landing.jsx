import emoji from './assets/emoji.gif';
function Landing() {
  return (
    <>
      <section className="landing-page">
        <div className="landing-page-main">
          <img
            className="landing-page__left"
            src={emoji}
            alt=""
          />
          <div className="landing-page__right">
            <h1 className="landing-page__title">
              GET <span className="yellow">BLOWN!</span>
            </h1>
            <p className="landing-page__subtitle">
              by the best emoji dictionary in the{" "}
              <span className="yellow">WORLD!!</span>
            </p>
          </div>
        </div>
        <div className="landing-page-notmain">
          <a href="#results">
            <h1 className="arrow heartbeat">
              <i className="fa-solid fa-arrow-down"></i>
            </h1>
          </a>
        </div>
      </section>
    </>
  );
}

export default Landing;
