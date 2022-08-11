import Head from 'next/head'
import SongList from '../components/SongList'
import musicStyles from '../styles/Music.module.css'
import { songs } from '../assets/songs'

const music = ({ songs }) => {
  return (
    <div>
      <Head>
        <title>McQueen | Richard Kwang</title>
        <meta
          name="keywords"
          content="web development, software engineer, programming, richard kwang"
        />
      </Head>
      <div className={musicStyles.musicTitleContainer}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://open.spotify.com/artist/6lohbb4AT5dqX3bPzfhjra?si=TyOYQdIwTa2X26rsOAG62w"
      >
        <h1 className={musicStyles.musicTitle}>McQueen</h1>
      </a>
      </div>
      <hr className={musicStyles.musicLine} />
      <p className={musicStyles.subtitle}>
        All songs written and produced by Richard Kwang
      </p>
      <SongList songs={songs} />
    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      songs: songs,
    },
  }
}

export default music
