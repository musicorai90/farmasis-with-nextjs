import { useState } from 'react'
import Modal from 'react-modal'
import { toast } from 'react-toastify'
import styles from './product.module.css'
import Image from 'next/image'
 
Modal.setAppElement('#__next')
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.3)';

function Product(props) {
    var subtitle
    const [modalIsOpen,setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }

    function afterOpenModal() {
        subtitle.style.color = '#000'
    }

    function closeModal(){
        setIsOpen(false)
    }

    function toList(){
        closeModal()
	    let result           = ''
        const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        const charactersLength = characters.length
        for ( var i = 0; i < 10; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        toast(<div>Reservado con exito<br/><br/>(Código: {result})</div>,{className: styles.toast})
    }

    return (
        <div className={styles.product}>
            <span>$ 100</span>
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Image src={props.photo} alt="Photo by Caroline Attwood on Unsplash" width="640" height="384"/>
            <a href="#" onClick={openModal}>Reservar</a>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              className={styles.modal}
              contentLabel="Example Modal"
            >
                <button className={styles.modalClose} onClick={closeModal}>X</button>
                <h2 className={styles.modalTitle} ref={_subtitle => (subtitle = _subtitle)}>Ingrese los datos:</h2>
                <form>
                    <div className={styles.modalInputContent}>
                        <input placeholder="Nombre" />
                        <input placeholder="Cédula" /> 
                    </div>
                    <input className={styles.modalButton} type="submit" value="Reservar" onClick={toList} />
                </form>
            </Modal>
        </div>
    )
}

export default Product;
