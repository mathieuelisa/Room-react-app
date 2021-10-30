import "./styles.scss";

function Avatar({ job, name, description, image }) {
  return (
    <div className="container-profil">
      <div className="profil-card">
        <img className="myPics" src={image} alt="profil1" />

        <div className="title-work">{job}</div>
      </div>

      <div className="title-card">
        <h3>{name}</h3>
      </div>

      <div className="text-card">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Avatar;
