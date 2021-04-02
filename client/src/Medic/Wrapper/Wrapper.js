import React, { useEffect, useState }  from 'react';
import CallDetailsForm from "../CallDetailsForm/CallDetailsForm";
import Map from '../Map/Map';
import Navbar from '../Navbar/Navbar';
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";





function MedicWrapper(){


    return(
        <Container>
            <Row>
                <Navbar />
                <CallDetailsForm />
                <Map />
            </Row>
        </Container>
    )


}
export default MedicWrapper;