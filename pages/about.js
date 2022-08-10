import AboutMe from '../components/AboutMe'
import Head from 'next/head'

const about = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta
          name="keywords"
          content="web development, software engineer, programming, richard kwang"
        />
      </Head>
      <AboutMe />
    </div>
  )
}

export default about
