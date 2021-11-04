import { useState } from "react";
import "./styles.scss";

function Form() {
  const [myState, setMyState] = useState({
    lastname: "",
    firstname: "",
    phone: "",
    email: "",
    shop: "",
    commentaires: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    e.preventDefault();

    setMyState({
      ...myState,
      [e.target.name]: e.target.value,
    });

    console.log(myState);
  }

  return (
    <>
      <h1 className="formulaire__mainTitle">FORMULAIRE</h1>
      <form className="formulaire" onSubmit={handleSubmit}>
        <div className="formulaire__input">
          <label className="formulaire__label">Nom: </label>
          <input
            type="text"
            className="formulaire__allInputs"
            name="lastname"
            value={myState.lastname}
            onChange={handleChange}
          />
        </div>

        <div className="formulaire__input">
          <label className="formulaire__label">Prenom: </label>
          <input
            type="text"
            className="formulaire__allInputs"
            name="firstname"
            value={myState.firstname}
            onChange={handleChange}
          />
        </div>

        <div className="formulaire__input">
          <label className="formulaire__label">Telephone: </label>
          <input
            type="tel"
            className="formulaire__allInputs"
            name="phone"
            value={myState.phone}
            onChange={handleChange}
          />
        </div>

        <div className="formulaire__input">
          <label className="formulaire__label">Email: </label>
          <input
            type="email"
            className="formulaire__allInputs"
            name="email"
            value={myState.email}
            onChange={handleChange}
          />
        </div>

        <div className="formulaire__input-shop">
          <label className="formulaire__label">Magasin: </label>
          <select
            className="formulaire__label-select"
            name="shop"
            onChange={handleChange}
            value={myState.shop}
          >
            <option>--Choissisez votre magasin--</option>
            <option>Paris Sud - Evry</option>
            <option>Paris Sud - Thiais</option>
            <option>Paris Est - Villiers sur Marne</option>
            <option>Paris Ouest - Plaisir</option>
            <option>Paris Nord - Roissy</option>
            <option>Lyon - Grand Parilly</option>
          </select>
        </div>

        <div className="formulaire__input-textAreaInput">
          <label className="formulaire__label-textAreaInput">
            Commentaire:{" "}
          </label>
          <textarea
            type="text"
            className="formulaire__textArea"
            name="commentaires"
            value={myState.commentaires}
            onChange={handleChange}
          />
        </div>
        <p>couou</p>
        <button className="formulaire__button-valide" type="submit">
          Valide
        </button>
      </form>
    </>
  );
}

export default Form;
