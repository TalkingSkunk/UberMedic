import { createContext } from "react"

const MedicDispatchContext = createContext({})

export default MedicDispatchContext;




// import React, {useState, createContext} from "react"

// export const MedicDispatchContext = createContext()

// export const MedicDispatchProvider = props => {
    //id of ambulance
    // const [ medicDispatch, setMedicDispatch ] = useState({
    //     2021: {
    //         lngMedic: 1,
    //         latMedic: 1,
    //     },
    //     1824: {
    //         lngMedic: 34,
    //         latMedic: 34
    //     }
    // }
    // );
//     return(
//         <MedicDispatchContext.Provider value={[medicDispatch, setMedicDispatch]}>
//             {props.children}
//         </MedicDispatchContext.Provider>
//     );
// }