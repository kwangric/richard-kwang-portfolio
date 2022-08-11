import Image from 'next/image'
import ProfilePic from '../public/me.png'
import aboutStyles from '../styles/About.module.css'

const AboutMe = () => {
  return (
    <div className={aboutStyles.container}>
      <div className={aboutStyles.profilePic}>
        <Image
          priority
          src={ProfilePic}
          alt="Richard Kwang"
          width={300}
          height={300}
        />
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
