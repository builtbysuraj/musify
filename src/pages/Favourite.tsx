import { useSongList } from "../context/SongProvider"

export default function PlayList() {
  const { favourite } = useSongList()

  return (
    <>
      {favourite.length > 0 ? (
        <>
          {favourite.map((fav, i) => {
            return (
              <div key={i} className="m-3">
                <div className="d-flex gap-4 flex-wrap">
                  <div>
                    <img
                      className="fav-custom-img"
                      src={fav?.images?.coverart}
                      alt={fav?.title}
                    />
                    <p>{fav?.title}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </>
      ) : (
        <>
          <h1>Search to add songs in Favourite </h1>
        </>
      )}
    </>
  )
}
