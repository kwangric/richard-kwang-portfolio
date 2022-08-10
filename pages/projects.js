import Head from 'next/head'
import ProjectList from '../components/ProjectList'
import { projectsList } from '../assets/projects'

const projects = ({ projectsList }) => {
  return (
    <div>
      <Head>
        <title>Projects | Richard Kwang</title>
        <meta
          name="keywords"
          content="web development, software engineer, programming, richard kwang"
        />
      </Head>
      <ProjectList projects={projectsList} />
    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      projectsList: projectsList,
    },
  }
}

export default projects
