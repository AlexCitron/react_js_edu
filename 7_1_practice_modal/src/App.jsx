import './index.css'
import Main from "./components/Main.jsx";
import Button from "./components/Button.jsx";
import { useState } from "react";
import Modal from "./components/Modal.jsx";
import {openModal, closeModal, alertCloseModal} from "./handlers.js";

export default function App() {

    const [IsModalOpen, setIsModalOpen] = useState(false);

  return (
        <div className={'app'}>
            <Main>
                <Button onClick={() => openModal(setIsModalOpen)}>Open Modal</Button>
                {IsModalOpen &&
                <Modal
                    title={'Confirm Your Action'}
                    content={'Are you sure you want to proceed? This action cannot be undone.'}
                    closeModal={() => closeModal(setIsModalOpen)}
                >
                    <Button className={'closeButton'} onClick={() => closeModal(setIsModalOpen)}>&times;</Button>
                    <Button className={'secondaryButton'} onClick={() => closeModal(setIsModalOpen)}>Cancel</Button>
                    <Button className={'primaryButton'} onClick={() => alertCloseModal(setIsModalOpen)}>Yes, continue</Button>
                </Modal>
                }
            </Main>
        </div>
  )
}
