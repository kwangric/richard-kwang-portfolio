import { useState } from 'react'
import projectStyles from '../styles/Project.module.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkIcon from '@mui/icons-material/Link'
import Image from 'next/image'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Tooltip from '@mui/material/Tooltip'

const ProjectListItem = ({ project }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <div className={projectStyles.cardMargin}>
        <div className={projectStyles.card} onClick={handleOpen}>
          <div className={projectStyles.projectImageContainer}>
            <Image
              className={projectStyles.projectImage}
              src={`/thumbnails/${project.img}.jpg`}
              alt={project.img}
              layout="fill"
            />
            <div className={projectStyles.projectTitleOverlay}>
              <p>{project.title}</p>
              <div className={projectStyles.projectTechnologyIcons}>
                {project.technologies
                  .filter((tech) => !['React Native', 'Express'].includes(tech))
                  .map((tech, index) => {
                    return (
                      <Tooltip title={tech} key={index}>
                      <div
                        className={projectStyles.projectTechnologyIcon}

                      >

                          <Image
                            src={`/icons/${tech}.png`}
                            layout="fill"
                            alt={tech}
                          />
                      </div>
                        </Tooltip>
                    )
                  })}
              </div>
            </div>
            <div className={projectStyles.projectImageOverlay} />
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={projectStyles.modal}>
            <div className={projectStyles.projectInfo}>
              <div>
                <h3 className={projectStyles.projectTitle}>{project.title}</h3>
                <p className={projectStyles.projectDescription}>
                  {project.description}
                </p>
                <div className={projectStyles.projectTechnologyModalIcons}>
                {project.technologies
                  .filter((tech) => !['React Native', 'Express'].includes(tech))
                  .map((tech, index) => {
                    return (
                      <Tooltip title={tech} key={index}>
                      <div
                        className={projectStyles.projectTechnologyModalIcon}

                      >

                          <Image
                            src={`/icons/${tech}.png`}
                            layout="fill"
                            alt={tech}
                          />
                      </div>
                        </Tooltip>
                    )
                  })}
              </div>
              </div>
              <div className={projectStyles.projectIcons}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${project.projectLink}`}
                >
                  <LinkIcon className={projectStyles.projectIcon} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${project.githubLink}`}
                >
                  <GitHubIcon className={projectStyles.projectIcon} />
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  )
}

export default ProjectListItem
