import SongListItem from './SongListItem'
import musicStyles from '../styles/Music.module.css'

const SongList = ({ songs }) => {
  return (
    <div className={musicStyles.grid}>
      {songs.map((song) => (
        <SongListItem key={song.id} song={song} />
      ))}
    </div>
  )
}

export default SongList
