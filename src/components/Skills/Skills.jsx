import ProjectCard from "./ProjectCard/ProjectCard";
import { projectData } from "../../utils/projectData";

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="skills__title">Habilidades y Tecnologías</h2>

      <div className="skills__content-cards">
        {projectData.map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            techs={project.techs}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
