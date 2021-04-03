import React, { useRef, useEffect, useState } from 'react';

const Navbar = () => {

    const [requestFor, setRequestFor] = useState('')


    const handleReq = (state, action) => {
        switch (action.type) {
        case "POST":
          return { ...state, comments: [ action.value, ...state.comments ] };
        case "DELETE":
          // ADD delete code?
          return { ...state };
        default:
          throw new Error(`Invalid action type: ${action.type}`)
        }
      }
    
    return(
        <nav>
            <div className="site-title">
            <p>RoadRunner App</p>
            </div>
            
            <ul>

                <li><button type="button" data-bs-toggle="modal" data-bs-target="#requestFor">Request +</button></li>
                
                <div className="modal fade" id="requestFor" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Request Modal</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        Dispatch will respond to your request.
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-warning" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#confirmReq">BHP</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#confirmReq">Police</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#confirmReq">Fire</button>
                        <button type="button" className="btn btn-secdonary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#confirmReq">PCP Backup</button>
                        <button type="button" className="btn btn-dark" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#confirmReq">ACP Backup</button>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="modal fade" id="confirmReq" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Requesting {requestFor}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Confirm</button>
                        </div>
                    </div>
                    </div>
                </div>
                <li>

                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#dangerBtn">
                    10-2000
                    </button>

                    <div className="modal fade" id="dangerBtn" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Confirm Danger</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Confirm</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </li>
        
            </ul>
        </nav>
    );
}


export default Navbar;
