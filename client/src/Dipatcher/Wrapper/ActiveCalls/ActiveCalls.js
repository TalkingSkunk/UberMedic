import React, {useEffect, useState} from 'react'
import ListGroup from "react-bootstrap/ListGroup";
import socketIOClient from "socket.io-client";
const ENDPOINT = "ws://localhost:8080";

const ActiveCalls = () =>{    
    const socket = socketIOClient(ENDPOINT, {transports: ['websocket']})

    useEffect(()=>{
        socket.emit('fetchActiveCalls')
    },[])
    useEffect(()=>{
        socket.on('fetchActiveCallsOut', data=>{
            const populateActiveCalls = JSON.parse(data)
            console.log('populating available units, dispatchside', populateActiveCalls)
            setActiveCalls(populateActiveCalls)
        })
    },[])

    const [ activeCalls, setActiveCalls ] = useState([])

    // activeCalls.filter((call=>{
    //     call.toc 
    // }).toc !== []){
    //     activeCalls.
    // }

    // const [callStatus, setCallStatus] = useState([
    //     'acknowledge',
    //     'mobile',
    //     'arrivedDest',
    //     'ptContact',
    //     'departDest',
    //     'arrivedHosp',
    //     'toc'
    // ])


    return(
        <ListGroup>
            {activeCalls.map(data=>{
                return (
                    <>
                        <li class="list-group-item" aria-current="true" data-unit={data.unit}>
                            [{data.unit}]: 
                        </li>
                    </>
                )
            })}
        </ListGroup>
    )
}
export default ActiveCalls
