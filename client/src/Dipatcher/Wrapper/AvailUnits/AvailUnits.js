import React, {useEffect, useState} from 'react'
// import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
// import Button from "react-bootstrap/Button";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8080";


const AvailUnits = () =>{    
    const socket = socketIOClient(ENDPOINT)

    useEffect(()=>{
        socket.emit('fetchUnits')
    },[])
    useEffect(()=>{
        socket.on('fetchUnitsOut', data=>{
            const populateUnits = JSON.parse(data)
            console.log('populating available units, dispatchside', populateUnits)
            setAvailUnits(populateUnits)
        })
    },[])

    // useEffect(()=>{
    //     socket.on('medReqOut', data=>{
    //         console.log('receiving medic requests, dispatchside', JSON.parse(data))
    //         const medReqArray = JSON.parse(data)
    //         setMedReqOut(medReqArray)
    //     })
    // },[])

    const [ availUnits, setAvailUnits ] = useState([])

    //clickety click listgroupitem makes them active
    const handleActive = (e) => {
        if(e.target.classList.contains('active')){
            e.target.classList.remove('active')
            const isUnit = e.target.dataset.unit
            socket.emit('offUnit', JSON.stringify(isUnit))
        } else {
            e.target.classList.add('active')
            const isUnit = e.target.dataset.unit
            socket.emit('onUnit', JSON.stringify(isUnit))
        }
    }

    const [ selectUnit, setSelectUnit ] = useState("")

    

    // const handleApprove = (e)=>{
    //     // clear request after approve from the list
    //     // setMedReqOut(prevReq => [...prevReq, {id: dataOut.id, for: dataOut.for}])
    //     // const revisedComments = state.comments.filter( (_,idx)=>idx!==action.value )
    //     const isUnit = e.target.dataset.unit
    //     const isFor = e.target.dataset.for
    //     socket.emit('approveReq', JSON.stringify({
    //         unit: isUnit,
    //         isFor: isFor,
    //         status: "approved"
    //     }))
    //     setShow(false);
    // }

    // const handleClose = (e) => {
    //     const isUnit = e.target.dataset.unit
    //     const isFor = e.target.dataset.for
    //     socket.emit('rejectReq', JSON.stringify({
    //         unit: isUnit,
    //         isFor: isFor,
    //         status: "rejected"
    //     }))
    //     setShow(false);
    // }



    return(
        <ListGroup>
            {availUnits.map(data=>{
                return (
                    <>
                        <li class="list-group-item" aria-current="true" onClick={handleActive} data-unit={data.unit}>
                            [{data.unit}] Status >> {data.availability}
                        </li>
                    </>
                )
            })}
        </ListGroup>
    )
}
export default AvailUnits
