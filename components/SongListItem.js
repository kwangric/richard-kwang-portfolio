import musicStyles from '../styles/Music.module.css'
import Image from 'next/image'

const SongListItem = ({ song }) => {
  const credits = song.credits

  return (
    <div className={musicStyles.card}>
      <div className={musicStyles.musicArtContainer}>
        <a target="_blank" rel="noopener noreferrer" href={`${song.url}`}>
          <Image
            className={musicStyles.musicArt}
            src={`/thumbnails/${song.image}.jpg`}
            alt={song.image}
            layout="fill"
          />
        </a>
      </div>
      <div className={musicStyles.songInfo}>
        <h3 className={musicStyles.songTitle}>{song.title}</h3>
        <p className={musicStyles.year}>{song.year}</p>
        {credits.map((credit, index) => (
          <p className={musicStyles.credits} key={index}>
            {credit}
          </p>
        ))}
      </div>
    </div>
  )
}

export default SongListItem
