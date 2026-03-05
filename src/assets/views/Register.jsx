import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ChatContext } from "../context/chatContext"

const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const { handleAccounts } = useContext(ChatContext)
  const navigate = useNavigate()

  const handleNavigate= ()=> {
   navigate("/Login")
  }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!email || !password || !name){return}

    
      handleAccounts({ email, name, password })
      
    navigate("/")
  }

  return (
    <section>
      <h2>REGISTRATE</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="correo electronico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="nombre de usuario"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">INGRESAR</button>
      </form>
      <h2>¿Ya tienes una cuenta?</h2>
      <button onClick={handleNavigate}>Inicia Sesion aquí</button>
    </section>
  )
}

export { Register }