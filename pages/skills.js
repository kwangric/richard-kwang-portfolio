import Head from 'next/head'
import SkillList from '../components/SkillList'

const skills = () => {
  return (
    <div>
      <Head>
        <title>Skills | Richard Kwang</title>
        <meta
          name="keywords"
          content="web development, software engineer, programming, richard kwang"
        />
      </Head>
      <SkillList />
    </div>
  )
}

export default skills
