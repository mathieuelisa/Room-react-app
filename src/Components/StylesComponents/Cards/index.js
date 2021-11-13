import "./styles.scss";

function Cards({ src, title }) {
  return (
    <div className="container-products">
      <img className="container-products-images" src={src} alt="photo chaise" />
      <h2>{title}</h2>
    </div>
  );
}

export default Cards;
