import Link from 'next/link'
import Head from 'next/head'
import ProjectList from '../components/ProjectList'
import projectStyles from '../styles/Project.module.css'

const projects = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta
          name="keywords"
          content="web development, software engineer, programming, richard kwang"
        />
      </Head>
      <ProjectList />
    </div>
  )
}

export default projects
