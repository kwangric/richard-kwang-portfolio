import Image from 'next/image'
import ProfilePic from '../public/me.png'
import aboutStyles from '../styles/About.module.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SchoolIcon from '@mui/icons-material/School'

const AboutMe = () => {
  return (
    <div className={aboutStyles.container}>
      <div className={aboutStyles.profilePicContainer}>
        <div className={aboutStyles.profilePic}>
          <Image
            priority
            src={ProfilePic}
            alt="Richard Kwang"
            width={250}
            height={250}
          />
        </div>
      </div>
      <div className={aboutStyles.aboutIcons}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kwangric"
        >
          <GitHubIcon className={aboutStyles.aboutIcon} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/richardkwang/"
        >
          <LinkedInIcon className={aboutStyles.aboutIcon} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="/resume.pdf">
          <SchoolIcon className={aboutStyles.aboutIcon} />
        </a>
      </div>
      <p>Hi, I&apos;m Richard!</p>
      <p>
        I am a software engineer, musician, and a lifelong learner with a desire
        to improve how people interact with technology. I believe that the
        internet has the power to build strong communities and bring people
        together, and my mission is to work towards helping others experience
        what the web has to offer in an intuitive and concise way.
      </p>
    </div>
  )
}

export default AboutMe
