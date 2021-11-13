import "./styles.scss";

function Cards({ src, alt, className, id }) {
  return (
    <div className="container-products">
      <img className={className} id={id} src={src} alt={alt} />
    </div>
  );
}

export default Cards;
