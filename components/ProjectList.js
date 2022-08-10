import ProjectListItem from './ProjectListItem'
import projectStyles from '../styles/Project.module.css'
import projects from '../assets/projects.json'

const ProjectList = () => {
  return (
    <div className={projectStyles.grid}>
      {projects.map((project) => (
        <ProjectListItem key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectList
