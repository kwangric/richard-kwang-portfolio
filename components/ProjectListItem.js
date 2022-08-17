import { useState } from 'react'
import projectStyles from '../styles/Project.module.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkIcon from '@mui/icons-material/Link';
import Image from 'next/image'
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'

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
            <p className={projectStyles.projectTitleOverlay}>{project.title}</p>
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
                <p>{`Built with: ${project.technologies.join(', ')}`}</p>
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
