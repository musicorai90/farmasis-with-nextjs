import utilStyles from '../styles/utils.module.css'
import Header from './header'
import Footer from './footer'
import styles from './layout.module.css'

export default function LayoutThree({children}) {
  return (
    <div className={utilStyles.container}>
        <Header />
        <main className={styles.main}>
            {children}
        </main>
        <Footer />
    </div>
  )
}
