import utilStyles from '../styles/utils.module.css'
import Footer from './footer'

export default function LayoutTwo({children}) {
  return (
    <div className={utilStyles.container}>
        {children}
        <Footer/>
    </div>
  )
}