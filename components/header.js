import { FaBars } from "react-icons/fa"
import { useRouter } from "next/router"
import styles from "./header.module.css"
import { useState } from "react"

const Header = () => {
  const router = useRouter()
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobile = () => setClick(false)

  function toHome() {
    router.push('/home')
  }

  function toNosotros() {
    router.push('/nosotros')
    closeMobile()
  }

  function toMision() {
    router.push('/mision')
    closeMobile()
  }

  function toVision() {
    router.push('/vision')
    closeMobile()
  }

  return (
    <header className={styles.headerContent}>
      <div>
        <h1 className={styles.headerTitle}>Farmasis</h1>
      </div>
      <nav className={click ? styles.active : ""}>
        <ul className={styles.headerNav}>
          <li>
            <a href="#" onClick={toHome}>Inicio</a>
          </li>
          <li>
            <a href="#" onClick={toNosotros}>Sobre nosotros</a>
          </li>
          <li>
            <a href="#" onClick={toMision}>Mision</a>
          </li>
          <li>
            <a href="#" onClick={toVision}>Vision</a>
          </li>
        </ul>
      </nav>
      <FaBars className={styles.headerBtn} onClick={handleClick} />
    </header>
  )
}

export default Header;
