import React, {useState, createContext} from "react"

export const MedicDispatchContext = createContext()

export const MedicDispatchProvider = props => {
    const [ medicDispatch, setMedicDispatch ] = useState( {
        lngMedic: 1,
        latMedic: 1
    } );
    return(
        <MedicDispatchContext.Provider value={[medicDispatch, setMedicDispatch]}>
            {props.children}
        </MedicDispatchContext.Provider>
    );
}