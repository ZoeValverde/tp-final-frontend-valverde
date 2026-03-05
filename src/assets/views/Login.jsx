import { useContext, useState } from "react"
import { ChatContext } from "../context/chatContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [error, setError] = useState(null)
    const { login } = useContext(ChatContext)

    const navigate = useNavigate()
    
    const handleNavigate = () => {
        navigate("/Register")
    }

    const handleChangeEmail = (e) => { 
    setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        setError(null)
        e.preventDefault()
        const response = login({ email, password, name })
        if (!response) {
            setError(true)
            return
        }

     navigate("/")
    }
    
    return (
        <section>
            <h2>INCIA SESIO</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="correo electronico"  onChange={handleChangeEmail} value={email}/>
                <input type="text" placeholder="nombre de usuario"  onChange={handleChangeName} value={name}/>
                <input type="password" placeholder="contraseña"  onChange={handleChangePassword} value={password}/>
                <button>INGRESAR</button> 
                {error && <h3>Error en alguno de los datos</h3>}
            </form>
            <h2>¿No tienes una cuenta?</h2>
            <button onClick={handleNavigate}>Registrate Aquí</button>
        </section>
    )
}

export { Login }