import React, { useEffect, useState, useContext }  from 'react';
import CallDetailsForm from "../CallDetailsForm/CallDetailsForm";
import Map from '../Map/Map';
import Navbar from '../Navbar/Navbar';
import Check from '../Check/Check'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Container, Row, CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import '../Wrapper/Wrapper.css'
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
              <body>
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
                <h1 style={{textAlign:"center"}}>RoadRunner App</h1>
                    <Navbar />
                 <CardDeck>
                    <CallDetailsForm />
                    <Col>
                    <Map />
                    <Button style={{marginTop:"20px"}} >Acknowledge</Button>
                    </Col>
                    </CardDeck>
                 
                </Row>

                </body>
            </Container>

    )


}
export default MedicWrapper;