import { useRouter } from "next/router"
import { FaEye, FaBroom, FaPlus } from "react-icons/fa"
import styles from "./sidebar.module.css"

const Sidebar = () => {
    const router = useRouter()

    function toBelleza() {
      router.push(`/belleza`)
    }

    function toLimpieza() {
      router.push(`/limpieza`)
    }

    function toMedicamentos() {
      router.push(`/medicamentos`)
    }

    return(
        <div className={styles.sideBarContainer}>
          <nav>
            <ul className={styles.sideBar}>
              <li>
                <a href="#" onClick={toBelleza}><FaEye /><span>Belleza</span></a>
              </li>
              <li>
                <a href="#" onClick={toLimpieza}><FaBroom /><span>Limpieza</span></a>
              </li>
              <li>
                <a href="#" onClick={toMedicamentos}><FaPlus /><span>Medicamentos</span></a>
              </li>
            </ul>
          </nav>
        </div>
    )
}

export default Sidebar;
