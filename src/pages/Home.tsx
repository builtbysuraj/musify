import Favourite from "./Favourite"
import PlayList from "./PlayList"

export default function Home() {
  return (
    <div className="w-100 mt-4">
      <p>Your favourites </p>
      <Favourite />
      <hr className="w-100" />
      <p>Your playlist</p>
      <PlayList />
    </div>
  )
}
