import styles from "./form.module.css"
import { useRouter } from "next/router"

function Login() {
    const router = useRouter()

    const toHome = (e) =>  {
        e.preventDefault()
        router.push('/home')
    }

    const toRegister = (e) =>  {
        e.preventDefault()
        router.push('/register')
    }

    return (
	    <div className={styles.formContainer}>
            <form className={styles.form}>
            	<h1>Farmasis</h1>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <input type="submit" value="Aceptar" onClick={toHome} />
                <a href="#" onClick={toRegister}>Registrar</a>
            </form>
        </div>
    )
}

export default Login;