import skillsStyles from '../styles/Skills.module.css'

const SkillList = () => {
  const proficient = [
    'React',
    'Redux',
    'MUI',
    'JavaScript',
    'Node.js',
    'Express',
    'PostgreSQL',
    'Sequelize',
    'HTML',
    'CSS',
  ]
  const familiar = [
    'Python',
    'MongoDB',
    'Mongoose',
    'Webpack',
    'Vite',
    'Bootstrap',
    'JQuery',
    'EJS',
  ]
  const interested = [
    'Vue',
    'Svelte',
    'WordPress',
    'TypeScript',
    'Swift',
    'PHP',
  ]

  return (
    <div className={skillsStyles.skillsContainer}>
      <div className={skillsStyles.skills}>
        <h3>Proficient in:</h3>
        <hr />
        <ul>
          {proficient.map((skill, index) => {
            return <li key={index}>{skill}</li>
          })}
        </ul>
      </div>
      <div className={skillsStyles.skills}>
        <h3>Familiar with:</h3>
        <hr />
        <ul>
          {familiar.map((skill, index) => {
            return <li key={index}>{skill}</li>
          })}
        </ul>
      </div>
      <div className={skillsStyles.skills}>
        <h3>Interested in:</h3>
        <hr />
        <ul>
          {interested.map((skill, index) => {
            return <li key={index}>{skill}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default SkillList
