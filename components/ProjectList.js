import ProjectListItem from './ProjectListItem'
import projectStyles from '../styles/Project.module.css'

const ProjectList = ({ projects }) => {
  return (
    <div className={projectStyles.grid}>
      {projects.map((project) => (
        <ProjectListItem key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectList
