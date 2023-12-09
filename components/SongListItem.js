import musicStyles from '../styles/Music.module.css'
import Image from 'next/image'

const SongListItem = ({ song }) => {
  const credits = song.credits

  return (
    <div className={musicStyles.card}>
      <a target="_blank" rel="noopener noreferrer" href={`${song.url}`}>
        <div className={musicStyles.musicArtContainer}>
          <Image
            className={musicStyles.musicArt}
            src={`/thumbnails/${song.image}.jpg`}
            alt={song.image}
            layout="fill"
          />

          <div className={musicStyles.songOverlay}>
            <div className={musicStyles.songInfo}>
              <h3 className={musicStyles.songTitle}>{song.title}</h3>
              <p className={musicStyles.year}>{song.year} - {song.type}</p>
              {credits.map((credit, index) => (
                <p className={musicStyles.credits} key={index}>
                  {credit}
                </p>
              ))}
            </div>
          </div>
          <div className={musicStyles.songImageOverlay} />
        </div>
      </a>
    </div>
  )
}

export default SongListItem
