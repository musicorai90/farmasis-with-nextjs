import styles from './footer.module.css'
import { FaWhatsapp, FaFacebook, FaInstagram} from 'react-icons/fa'

const Footer = () => {
    const clases = styles
    return (
        <footer className={clases.footer}>
            <FaWhatsapp className="whatsapp" /> <FaFacebook className="facebook" /> <FaInstagram className="instagram" />
        </footer>
    )
}

export default Footer;