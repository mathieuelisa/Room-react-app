import "./styles.scss";

function CardsDescription({ textDescription }) {
  return (
    <div className="mainContainer__products-descriptions">
      <p className="mainContainer__products-descriptions-text">
        {textDescription}
      </p>
    </div>
  );
}

export default CardsDescription;
