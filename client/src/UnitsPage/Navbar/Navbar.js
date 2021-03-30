import React from 'react'
import './Navbar.css'

const Navbar = (props) => {
    return(
        <nav class="col-6">
        <div class="site-title">
          <p>RoadRunner App</p>
        </div>
        <ul>
          <li><button type="button" data-bs-toggle="modal" data-bs-target="#requestFor">Request +</button></li>
          <div class="modal fade" id="requestFor" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Request Modal</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  Dispatch will respond to your request.
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#confirmReq">Police</button>
                  <button type="button" class="btn btn-warning" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#confirmReq">Fire</button>
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#confirmReq">PCP Backup</button>
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#confirmReq">ACP Backup</button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal fade" id="confirmReq" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Confirm Request?</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Understood</button>
                </div>
              </div>
            </div>
          </div>
          <li>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dangerBtn">
              10-2000
            </button>
            <div class="modal fade" id="dangerBtn" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Confirm Danger</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Confirm</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
    
        </ul>
      </nav>
    )
}

export default Navbar