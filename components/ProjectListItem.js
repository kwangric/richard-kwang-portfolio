import projectStyles from '../styles/Project.module.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkIcon from '@mui/icons-material/Link'
import Image from 'next/image'

const ProjectListItem = ({ project }) => {
  return (
    <div className={projectStyles.cardMargin}>
      <div className={projectStyles.card}>
        <Image
          src={`/thumbnails/${project.img}.png`}
          alt={project.img}
          className={projectStyles.projectImage}
          width="200"
          height="200"
          priority="true"
        />
        <div className={projectStyles.projectInfo}>
          <div>
            <h3 className={projectStyles.projectTitle}>{project.title}</h3>
            <p className={projectStyles.projectDescription}>
              {project.description}
            </p>
          </div>
          <div className={projectStyles.projectIcons}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`${project.githubLink}`}
            >
              <GitHubIcon className={projectStyles.projectIcon} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`${project.projectLink}`}
            >
              <LinkIcon className={projectStyles.projectIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectListItem
