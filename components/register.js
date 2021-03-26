import styles from "./form.module.css"
import { useRouter } from "next/router"

function Register() {
    const router = useRouter()

    const toHome = (e) => {
        e.preventDefault()
    	router.push("/home")    
    }

    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
            	<h1>Registrate</h1>
                <input type="mail" placeholder="Correo" />
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <input type="submit" value="Aceptar" onClick={toHome} />
            </form>
        </div>
    )
}

export default Register;
