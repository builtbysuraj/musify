import Favourite from "./Favourite"
import PlayList from "./PlayList"

export default function Home() {
  return (
    <div className="w-100 mt-4">
      <p>Your favourites </p>
      <div className="d-flex flex-wrap">
        <Favourite />
      </div>
      <hr className="w-100" />
      <div>
        <p>Your playlist</p>
        <div className="d-flex flex-wrap">
          <PlayList />
        </div>
      </div>
    </div>
  )
}
