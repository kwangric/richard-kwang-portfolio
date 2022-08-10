import Head from 'next/head'
import SongList from '../components/SongList'
import musicStyles from '../styles/Music.module.css'

const music = () => {
  return (
    <div>
      <Head>
        <title>McQueen</title>
        <meta
          name="keywords"
          content="web development, software engineer, programming, richard kwang"
        />
      </Head>
      <h1 className={musicStyles.musicTitle}>McQueen</h1>
      <hr className={musicStyles.musicLine}/>
      <p className={musicStyles.subtitle}>All songs written and produced by Richard Kwang</p>
      <SongList />
    </div>
  )
}

export default music
