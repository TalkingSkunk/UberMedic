import React, {useState, createContext, useEffect} from "react"
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8080";

export const MedicDispatchContext = createContext()

export const MedicDispatchProvider = props => {

    const socket = socketIOClient(ENDPOINT)


    const [ medReqOut, setMedReqOut ] = useState([
        {
            id:2022, for:"BHP"
        }
    ])

    useEffect(()=>{
        socket.on('medReqOut', data=>{
            const dataOut = JSON.parse(data)
            console.log('receiving medic requests, dispatchside', dataOut)
            setMedReqOut(prevReq => [...prevReq, {id: dataOut.id, for: dataOut.for}])
        })
    },[])




    // id of ambulance
    const [ medicDispatch, setMedicDispatch ] = useState({
        "2021": {
            lngDest: 0,
            latDest: 0,
        },
        "1984": {
            lngDest: 0,
            latDest: 0
        }
    });



    return(
        // { value: [value, setValue], value2: [value2, setValue2] }
        <MedicDispatchContext.Provider value={{ medDest: [medicDispatch, setMedicDispatch], medRequest: [ medReqOut, setMedReqOut ] }}>
            {props.children}
        </MedicDispatchContext.Provider>
    );
}