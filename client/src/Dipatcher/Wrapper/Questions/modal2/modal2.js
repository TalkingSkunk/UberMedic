import React, {useState} from 'react';
import Modal from 'react-modal';
import Legend from '../Legend/Legend';


function ModalInFunctionalComponent (){

    const [modalIsOpen,setModalIsOpen,sm] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return(
        <>
            <button onClick={setModalIsOpenToTrue}>LEGEND</button>

            <Modal isOpen={modalIsOpen}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <Legend/>
            </Modal>
        </>
    )
}
export default ModalInFunctionalComponent;