import React, { useEffect, useState, useContext }  from 'react';
import CallDetailsForm from "../CallDetailsForm/CallDetailsForm";
import Map from '../Map/Map';
import Navbar from '../Navbar/Navbar';
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { MedicDispatchProvider, MedicDispatchContext } from "../../utils/MedicDispatchContext";
// import DispatcherMap from "../DispatcherMap/DispatcherMap"

//import id number of user
const id = 30000

const isMedic = id < 10000


// const [medicDispatch, setMedicDispatch] = useContext(MedicDispatchContext)
{/* <div>{JSON.stringify(medicDispatch, null, 2)}</div> */}
function MedicWrapper(){
    return(

            <Container>
                {/* {isMedic
                    ? <Row>
                        <Navbar />
                        <CallDetailsForm />
                        <Map />
                    </Row>
                    : <Row>
                        <DispatcherMap />
                    </Row>
                } */}

                <Row>
                    <Navbar />
                    <CallDetailsForm />
                    <Map />
                </Row>

                
            </Container>

    )


}
export default MedicWrapper;