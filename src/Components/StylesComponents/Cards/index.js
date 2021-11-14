import "./styles.scss";
// Import react reveal
import Fade from "react-reveal/Fade";

function Cards({ src, alt, className, id }) {
  return (
    <div className="container-products">
      <Fade bottom delay={500} duration={2000}>
        <img className={className} id={id} src={src} alt={alt} />
      </Fade>
    </div>
  );
}

export default Cards;
