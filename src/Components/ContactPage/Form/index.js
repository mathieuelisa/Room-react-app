import "./styles.scss";

function Form() {
  return (
    <form className="formulaire">
      <div className="formulaire__input">
        <label className="formulaire__label">Nom: </label>
        <input />
      </div>

      <div className="formulaire__input">
        <label className="formulaire__label">Prenom: </label>
        <input />
      </div>

      <div className="formulaire__input">
        <label className="formulaire__label">Telephone: </label>
        <input />
      </div>

      <div className="formulaire__input">
        <label className="formulaire__label">Email: </label>
        <input />
      </div>

      <div className="formulaire__input">
        <label className="formulaire__label">Magasin: </label>
        <input />
      </div>

      <div className="formulaire__input">
        <label className="formulaire__label">Commentaire: </label>
        <textarea />
      </div>
    </form>
  );
}

export default Form;
