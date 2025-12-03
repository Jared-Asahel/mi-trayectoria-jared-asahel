const ProjectCard = ({ title, techs, description, link }) => {
  return (
    <div className="projectCard">
      <h1 className="projectCard__title">{title}</h1>
      <div className="projectCard__content">
        {techs.map((tech, i) => (
          <div key={i} className="projectCard__icon">
            {tech}
          </div>
        ))}
      </div>
      <p className="projectCard__paragraph">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="projectCard__button"
      >
        <i className="fa-brands fa-github fa-2x"></i> Código
      </a>
    </div>
  );
};

export default ProjectCard;
