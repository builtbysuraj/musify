import { Heart, Home, PlayCircle, Search } from "react-feather"
import { Link } from "react-router-dom"
import LogoutButton from "./Logout"

export default function Sidebar() {
  return (
    <div className="d-flex flex-nowrap">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
        style={{ width: "280px" }}
      >
        <Link
          to={"/"}
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none m-2"
        >
          <span className="fs-1 fw-bold">Musify</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-4">
          <li className="nav-item">
            <Link to={"/"} className="nav-link" aria-current="page">
              <div className="d-flex align-items-center fs-4">
                <Home className="bi pe-none me-2" />
                Home
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/search"} className="nav-link link-body-emphasis">
              <div className="d-flex align-items-center fs-4">
                <Search className="bi pe-none me-2" />
                Search
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/favourite"} className="nav-link link-body-emphasis">
              <div className="d-flex align-items-center fs-4">
                <Heart className="bi pe-none me-2" />
                Favourite
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/playlist"} className="nav-link link-body-emphasis">
              <div className="d-flex align-items-center fs-4">
                <PlayCircle className="bi pe-none me-2" />
                Playlist
              </div>
            </Link>
          </li>
        </ul>
        <LogoutButton />
      </div>
    </div>
  )
}
