import { useContext } from "react"
import { ChatContext } from "../context/chatContext"
import { Navigate } from "react-router-dom"

const RouteProtected = ({ children }) => {
  const { loggedUser } = useContext(ChatContext)

  if (!loggedUser) {
    return <Navigate to="/Login" replace />
  }

  return (
    children
  )
}

export { RouteProtected }