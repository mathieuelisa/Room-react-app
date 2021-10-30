import "./styles.scss";

function Avatar({ job, name, description, image, classNameWork }) {
  return (
    <div className="container-profil">
      <div className="container-profil-card">
        <img className="container-profil-pics" src={image} alt="profil1" />

        <div className={classNameWork}>{job}</div>
      </div>

      <div className="container-profil-titleCard">
        <h3>{name}</h3>
      </div>

      <div className="container-profil-description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Avatar;
