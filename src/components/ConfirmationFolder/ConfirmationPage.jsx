import "./ConfirmationPage.css";

export const ConfirmationScreen = () => {
  return (
    <section className="confirmation-screen">
      <header>
        <h1 className="app-title">Paw Pops</h1>
      </header>
      <figure className="confirmation-star">
        <img src="../assets/star.png" alt="Happy Star" className="star-image" />
      </figure>
      <h2 className="score-title">Purr-fect Score!</h2>
      <p className="confirmation-message">
        Your pawsome performance has set a new standard of excellence!
      </p>
      <div className="score-badge">
        <span className="lightning-icon">
          <img
            src="../assets/lightning.png"
            alt="Score"
            className="score-image"
          />
        </span>
        <span className="score-points"></span>
      </div>
    </section>
  );
};
