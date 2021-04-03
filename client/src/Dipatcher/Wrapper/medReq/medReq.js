import React, {useContext, useEffect, useState} from 'react'
import {MedicDispatchContext} from "../../../utils/MedicDispatchContext";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";



const MedReq = () =>{
    const {medRequest} = useContext(MedicDispatchContext)
    const [ medReqOut, setMedReqOut ] = medRequest


    const handleApprove = ()=>{
        // clear request after approve from the list
        
    }

    // modals stuff clicks
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <ListGroup>
            {medReqOut.map(data=>{
                return (
                    <>
                        <ListGroup.Item action onClick={handleShow}>
                            [{data.id}] Requesting {data.for}...
                        </ListGroup.Item>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Please Contact Ambulance Prior to Decision.
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Disregard
                            </Button>
                            <Button variant="primary" onClick={handleApprove}>Approve</Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                )
            })}
        </ListGroup>
    )
}
export default MedReq
