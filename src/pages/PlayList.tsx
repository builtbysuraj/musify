import { useSongList } from "../context/SongProvider"

export default function PlayList() {
  const { playlist } = useSongList()

  return (
    <>
      {playlist.length > 0 ? (
        <>
          {playlist.map((play, i) => {
            return (
              <div key={i} className="m-3">
                <div className="d-flex gap-4 flex-wrap">
                  <div>
                    <img
                      className="fav-custom-img"
                      src={play?.images?.coverart}
                      alt={play?.title}
                    />
                    <p>{play?.title}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </>
      ) : (
        <>
          <h1>Search to add songs in Playlist </h1>
        </>
      )}
    </>
  )
}
