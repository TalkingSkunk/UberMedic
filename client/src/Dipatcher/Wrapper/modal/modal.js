import React, {useState} from 'react';
import Modal from 'react-modal';
import Questions from '../Questions/Questions';


function ModalInFunctionalComponent (){

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return(
        <>
            <button onClick={setModalIsOpenToTrue}>MEDICAL QUESTIONS</button>

            <Modal isOpen={modalIsOpen}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <Questions/>
            </Modal>
        </>
    )
}
export default ModalInFunctionalComponent;