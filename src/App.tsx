import { useAuth0 } from "@auth0/auth0-react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import LoginButton from "./components/Login"
import Sidebar from "./components/Sidebar"
import Favourite from "./pages/Favourite"
import Home from "./pages/Home"
import PlayList from "./pages/PlayList"
import Search from "./pages/Search"

export default function App() {
  const { isAuthenticated } = useAuth0()
  return (
    <>
      {isAuthenticated ? (
        <BrowserRouter>
          <div className="d-flex container">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/favourite" element={<Favourite />} />
              <Route path="/playlist" element={<PlayList />} />
            </Routes>
          </div>
        </BrowserRouter>
      ) : (
        <LoginButton />
      )}
    </>
  )
}
