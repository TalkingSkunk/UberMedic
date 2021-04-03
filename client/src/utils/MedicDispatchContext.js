import React, {useState, createContext} from "react"

export const MedicDispatchContext = createContext()

export const MedicDispatchProvider = props => {
    // id of ambulance
    const [ medicDispatch, setMedicDispatch ] = useState({
        "2021": {
            lngDest: 0,
            latDest: 0,
        },
        "1824": {
            lngDest: 0,
            latDest: 0
        }
    });
    return(
        <MedicDispatchContext.Provider value={[medicDispatch, setMedicDispatch]}>
            {props.children}
        </MedicDispatchContext.Provider>
    );
}