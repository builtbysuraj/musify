import { useAuth0 } from "@auth0/auth0-react"

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <button className="btn btn-primary fs-3" onClick={() => loginWithRedirect()}>
        Log In / Sign up
      </button>
    </div>
  )
}
