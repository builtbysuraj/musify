import { Auth0Provider } from "@auth0/auth0-react"
import { createRoot } from "react-dom/client"
import App from "./App.js"
import SongProvider from "./context/SongProvider.js"
import "./main.css"

const domain = `${import.meta.env.VITE_AUTH_DOMAIN}`
const clientId = `${import.meta.env.VITE_AUTH_CLIENTID}`

createRoot(document.querySelector("#root") as HTMLElement).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <SongProvider>
      <App />
    </SongProvider>
  </Auth0Provider>
)
