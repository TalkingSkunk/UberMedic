import React, {useContext, useState} from 'react'
import {MedicDispatchContext} from "../../../utils/MedicDispatchContext";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";



const MedReq = () =>{
    const {medRequest} = useContext(MedicDispatchContext)
    const [ medReqOut, setMedReqOut ] = medRequest

    const [reqContent, setReqContent] = useState("")

    const handleApprove = (e)=>{
        // clear request after approve from the list
        // setMedReqOut(prevReq => [...prevReq, {id: dataOut.id, for: dataOut.for}])
        // const revisedComments = state.comments.filter( (_,idx)=>idx!==action.value )
        const isId = e.target.dataset.id
        const isFor = e.target.dataset.for
        setMedReqOut(prevReq=>{
            prevReq.filter(item=>item.id !== isId && item.for !== isFor )
        })
        setShow(false);
    }

    // modals stuff clicks
    const [show, setShow] = useState(false);
    const [modalId, setModalId] = useState("")
    const [modalFor, setModalFor] = useState("")
    
    const handleClose = (e) => {
        const isId = e.target.dataset.id
        const isFor = e.target.dataset.for
        setMedReqOut(prevReq=>{
            prevReq.filter(item=>item.id !== isId && item.for !== isFor )
        })
        setShow(false);
    }
    const handleShow = (e) => {
        setReqContent(e.target.innerText)
        setModalId(e.target.dataset.id)
        setModalFor(e.target.dataset.for)
        setShow(true);
    }

    return(
        <ListGroup>
            {medReqOut.map(data=>{
                return (
                    <>
                        <ListGroup.Item action onClick={handleShow} data-id={data.id} data-for={data.for}>
                            [{data.id}] Requesting >> {data.for}...
                        </ListGroup.Item>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                            <Modal.Title>Resource Request</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {reqContent}
                                <br/>
                                Please Contact Ambulance Prior to Decision.
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose} data-id={modalId} data-for={modalFor}>
                                Disregard
                            </Button>
                            <Button variant="primary" onClick={handleApprove} data-id={modalId} data-for={modalFor}>Approve</Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                )
            })}
        </ListGroup>
    )
}
export default MedReq
