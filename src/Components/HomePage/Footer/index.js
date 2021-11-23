// Import React Router
import { Link } from "react-router-dom";
// Import styles
import "./styles.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="mainFooter__container">
        <div className="mainFooter__container-first">
          <h2 className="mainFooter__container-first-title">MEET & INFOS</h2>
          <Link className="mainFooter__container-first-link" to="">
            Contact professionnel
          </Link>
          <Link
            className="mainFooter__container-first-link"
            to="/mentionsLegales"
          >
            Mentions legales
          </Link>
          <Link className="mainFooter__container-first-link" to="/location">
            Nos bureaux
          </Link>
        </div>

        <div className="mainFooter__container-second">
          <h2 className="mainFooter__container-second-title">FOLLOW</h2>
          <Link
            className="mainFooter__container-first-link"
            to={{ pathname: "https://fr-fr.facebook.com/" }}
            target="_blank"
          >
            Facebook
          </Link>
          <Link
            className="mainFooter__container-first-link"
            to={{ pathname: "https://www.instagram.com/" }}
            target="_blank"
          >
            Instagram
          </Link>
          <Link
            className="mainFooter__container-first-link"
            to={{ pathname: "https://twitter.com/" }}
            target="_blank"
          >
            Twitter
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Footer;
