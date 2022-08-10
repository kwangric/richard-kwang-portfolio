import Head from 'next/head'
import SongList from '../components/SongList'
import musicStyles from '../styles/Music.module.css'
import {songs} from '../assets/songs'

const music = ({songs}) => {
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
      <SongList songs={songs}/>
    </div>
  )
}

export const getStaticProps = async () => {
  console.log(songs)
  return {
    props: {
      songs: songs
    }
  }
}

export default music
