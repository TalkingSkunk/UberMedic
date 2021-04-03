import React, { useEffect, useState, useContext }  from 'react';
import CallDetailsForm from "../CallDetailsForm/CallDetailsForm";
import Map from '../Map/Map';
import Navbar from '../Navbar/Navbar';
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DispatcherMap from "../DispatcherMap/DispatcherMap"
import ProfileContext from "../../utils/MedicDispatchContext";


//import id number of user
const id = 30000

const isMedic = id < 10000


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
                <div><h1>Medicside View</h1></div>
                    <Navbar />
                    <CallDetailsForm />
                    <Map />
                </Row>


                
            </Container>
    )


}
export default MedicWrapper;