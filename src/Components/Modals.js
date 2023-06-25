import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import './Modalstyle.css';

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false)
    const [isOpenModal2, openModal2, closeModal2] = useModal(false)
    const [isOpenModal3, openModal3, closeModal3] = useModal(false)
    const [isOpenModal4, openModal4, closeModal4] = useModal(false)
    return(
        <div>
            <button class="btFb" onClick={openModal1}>Facebook</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <p>Fue creada para poder mantener en contacto a personas, y que éstos pudieran compartir información, noticias y contenidos</p>
                <div class="ImagenFB"></div>
            </Modal>
            <button class="btWts" onClick={openModal2}>Whatsapp</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <p>Aplicación de chat para teléfonos móviles de última generación, los llamados smartphones. Sirve para enviar mensajes de texto y multimedia</p>
                <div class="ImagenWTS"></div>
            </Modal>
            <button class="btIg" onClick={openModal3}>Instagram</button>
            <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
                <p>Es una aplicación móvil al mismo tiempo, que permite a sus usuarios subir imágenes y vídeos con múltiples efectos fotográficos</p>
                <div class="ImagenIG"></div>
            </Modal>
            <button class="btTw" onClick={openModal4}>Twitter</button>
            <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
                <p>Es una red social gratuita y cualquier persona puede crearse una cuenta o perfil para compartir opiniones</p>
                <div class="ImagenTW"></div>
            </Modal>
        </div>
    )
}
export default Modals