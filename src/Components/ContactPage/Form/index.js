import "./styles.scss";

function Form() {
  return (
    <form className="formulaire">
      <div>
        <label>Nom: </label>
        <input />
      </div>

      <div>
        <label>Prenom: </label>
        <input />
      </div>

      <div>
        <label>Telephone: </label>
        <input />
      </div>

      <div>
        <label>Email: </label>
        <input />
      </div>

      <div>
        <label>Magasin: </label>
        <input />
      </div>

      <div>
        <label>Commentaire: </label>
        <input />
      </div>
    </form>
  );
}

export default Form;
