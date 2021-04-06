import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8080";

const MedReq = () => {
  const socket = socketIOClient(ENDPOINT);
  const [medReqOut, setMedReqOut] = useState([]);

  useEffect(() => {
    socket.emit("fetchRequests");
  }, []);
  useEffect(() => {
    socket.on("fetchRequestsOut", (data) => {
      const populateReq = JSON.parse(data);
      console.log("populating medic requests, dispatchside", populateReq);
      setMedReqOut(populateReq);
    });
  }, []);

  useEffect(() => {
    socket.on("medReqOut", (data) => {
      console.log("receiving medic requests, dispatchside", JSON.parse(data));
      const medReqArray = JSON.parse(data);
      setMedReqOut(medReqArray);
    });
  }, []);

  const handleApprove = (e) => {
    // clear request after approve from the list
    // setMedReqOut(prevReq => [...prevReq, {id: dataOut.id, for: dataOut.for}])
    // const revisedComments = state.comments.filter( (_,idx)=>idx!==action.value )
    const isUnit = e.target.dataset.unit;
    const isFor = e.target.dataset.for;
    socket.emit(
      "approveReq",
      JSON.stringify({
        unit: isUnit,
        isFor: isFor,
        status: "approved",
      })
    );
    setShow(false);
  };

  const handleClose = (e) => {
    const isUnit = e.target.dataset.unit;
    const isFor = e.target.dataset.for;
    socket.emit(
      "rejectReq",
      JSON.stringify({
        unit: isUnit,
        isFor: isFor,
        status: "rejected",
      })
    );
    setShow(false);
  };

  // modals stuff clicks
  const [show, setShow] = useState(false);
  const [modalUnit, setModalUnit] = useState("");
  const [modalFor, setModalFor] = useState("");
  const [reqContent, setReqContent] = useState("");

  // when the request list is clicked... show modal
  const handleShow = (e) => {
    setReqContent(e.target.innerText);
    setModalUnit(e.target.dataset.unit);
    setModalFor(e.target.dataset.for);
    setShow(true);
  };

  return (
    <ListGroup>
      {medReqOut.map((data) => {
        return (
          <>
            <ListGroup.Item
              action
              onClick={handleShow}
              data-unit={data.unit}
              data-for={data.reqFor}
            >
              {data.createdAt}: [{data.unit}] Requesting >>{data.reqFor}...
            </ListGroup.Item>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Resource Request</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {reqContent}
                <br />
                Please Contact Ambulance Prior to Decision.
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={handleClose}
                  data-unit={modalUnit}
                  data-for={modalFor}
                >
                  Disregard
                </Button>
                <Button
                  variant="primary"
                  onClick={handleApprove}
                  data-unit={modalUnit}
                  data-for={modalFor}
                >
                  Approve
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      })}
    </ListGroup>
  );
};
export default MedReq;
