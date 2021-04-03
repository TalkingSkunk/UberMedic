import React, {useContext, useState} from 'react'
import {MedicDispatchContext} from "../../../utils/MedicDispatchContext";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";


const medReq = () =>{

    const {value2} = React.useContext(MedicDispatchContext)
    const [ medReqOut, setMedReqOut ] = value2

    // modals stuff clicks
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <ListGroup>
            {medReqOut.map(data=>{
                <ListGroup.Item action onClick={handleShow}>
                [{data.id}] Requesting {data.for}...
                </ListGroup.Item>
            })}
        </ListGroup>
    )
}
export default medReq
