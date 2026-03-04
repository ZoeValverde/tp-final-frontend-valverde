import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { NotFound } from "../views/NotFound"
import { Login } from "../views/Login"
import { RouteProtected } from "../components/RouteProtected"
import { Register } from "../views/Register.jsx"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteProtected><Home /></RouteProtected>} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }