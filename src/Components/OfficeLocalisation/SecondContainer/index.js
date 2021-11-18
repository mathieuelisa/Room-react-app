import "./styles.scss";

function SecondContainer() {
  return (
    <div className="location__second-container">
      <div className="location__second-container-general">
        <div className="location__second-container-text">
          <h3 className="store__detail-title">ROOM HEADQUARTERS</h3>
          <p>178 rue sebastien</p>
          <p className="store__detail-adress">75011 PARIS</p>

          <p>Lundi - Vendredi</p>
          <p className="store__detail-hours">9h - 13h / 14h - 19h</p>

          <p>Samedi</p>
          <p className="store__detail-hours">9h - 12h</p>

          <p className="store__detail-phoneNumber">09 87 66 88 38</p>
          <p className="store__detail-mail">room@service-client.com</p>
        </div>

        <div className="location__second-container-map">
          <p>Map</p>
        </div>
      </div>
    </div>
  );
}

export default SecondContainer;