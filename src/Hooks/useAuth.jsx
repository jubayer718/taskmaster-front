import { useContext } from "react"
import { authContext } from "../Provider/AuthProvider"

export const UseAuth = () => {
  const auth = useContext(authContext);
  return auth
}