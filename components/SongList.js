import SongListItem from './SongListItem'
import musicStyles from '../styles/Music.module.css'
import songs from '../assets/songs.json'

const SongList = () => {
  return (
    <div className={musicStyles.grid}>
      {songs.map((song) => (
        <SongListItem key={song.id} song={song} />
      ))}
    </div>
  )
}

export default SongList
