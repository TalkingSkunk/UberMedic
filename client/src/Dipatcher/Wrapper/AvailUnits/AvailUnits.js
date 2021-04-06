import React, {useEffect, useState} from 'react'
// import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
// import Button from "react-bootstrap/Button";
import socketIOClient from "socket.io-client";
const ENDPOINT = "ws://localhost:8080";

const AvailUnits = () =>{    
    const socket = socketIOClient(ENDPOINT, {transports: ['websocket']})

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


    return(
        <ListGroup>
            {availUnits.map(data=>{
                return (
                    <>
                        <li class="list-group-item" aria-current="true" onClick={handleActive} data-unit={data.unit}>
                            [{data.unit}]: Status [ {data.availability} ]
                        </li>
                    </>
                )
            })}
        </ListGroup>
    )
}
export default AvailUnits
