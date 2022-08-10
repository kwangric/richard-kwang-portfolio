import homeStyles from '../styles/Home.module.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SchoolIcon from '@mui/icons-material/School'

const Homepage = () => {
  return (
    <div className={homeStyles.homeCard}>
      <h1 className={homeStyles.homeTitle}>Richard Kwang</h1>
      <hr className={homeStyles.homeLine}/>
      <div className={homeStyles.homeIcons}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kwangric"
        >
          <GitHubIcon className={homeStyles.homeIcon}/>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/richardkwang/"
        >
          <LinkedInIcon className={homeStyles.homeIcon}/>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/resume.pdf"
        >
          <SchoolIcon className={homeStyles.homeIcon}/>
        </a>
      </div>
    </div>
  )
}

export default Homepage
