import utilStyles from '../styles/utils.module.css'
import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import styles from './layout.module.css'

export default function Layout({children}) {
  return (
    <div className={utilStyles.container}>
        <ToastContainer position="bottom-right"></ToastContainer>
        <Header />
        <main className={styles.main}>
            <Sidebar />
            <div className={styles.productsContainer}>
                {children}
            </div>
        </main>
        <Footer />
    </div>
  )
}