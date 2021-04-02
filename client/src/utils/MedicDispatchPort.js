import React, { createContext, useReducer, useContext } from "react"

export const ACTIONS = {
  // made up names for actions
   SEND_COORDS : 'send-medic-coords',
   RECEIVE_COORDS : 'receive-medic-coords',
}

const initialData = {}
// receiving dispatch({type:SEND_COORDS, lng: 3})
/*! IMPORTANT all your reducer functionality goes here */
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SEND_COORDS:
      state = {
        latOut: action.latOut,
        lngOut: action.lngOut
      }
      return state
    case ACTIONS.RECEIVE_COORDS:
      return state
    default:
      console.log(`Invalid action type: ${action.type}`)
      return state
  }
}



const EmsContext = createContext()

const useEmsContext = ()=>{
  return useContext(EmsContext)
}

const EmsProvider = (props)=>{
  const [state, dispatch] =  useReducer( reducer, initialData )
  return (
  <EmsContext.Provider value={[state, dispatch]} {...props} />
  )
}

export { EmsProvider, useEmsContext }