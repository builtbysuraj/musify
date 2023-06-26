import { useSongList } from "../context/SongProvider"

type SelectSongProps = {
  selectedSong: {
    images?: {
      coverart?: string
    }
    title?: string
  }
}

export default function SelectSong({ selectedSong }: SelectSongProps) {
  const { setPlaylist, setFavourite } = useSongList()

  const onFavouriteClick = () => {
    setFavourite((prev) => [...prev, selectedSong])
  }
  const onPlaylistClick = () => {
    setPlaylist((prev) => [...prev, selectedSong])
  }

  return (
    <div className=" container d-flex flex-column justify-content-center align-items-center">
      <img
        className="custom-selected-img"
        src={selectedSong?.images?.coverart}
        alt="searched song image"
      />
      <span className="fs-4">{selectedSong?.title}</span>
      <div className="d-flex m-2 gap-2 justify-content">
        <button onClick={() => onFavouriteClick()} className="btn btn-primary">
          Add to favourites
        </button>
        <button onClick={() => onPlaylistClick()} className="btn btn-primary">
          Add to playlist
        </button>
      </div>
    </div>
  )
}
