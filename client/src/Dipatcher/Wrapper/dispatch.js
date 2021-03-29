import React from 'react';
import './style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import CardDeck from 'react-bootstrap/CardDeck';
import CardText from 'react-bootstrap/CardDeck';



function Dispatch() {
    return (
        // <div className="header-wrapper">
        //     <div className="main-info">

        //         <div className="card">
                    
        //             <div className="content">
        //                 <ul>
        //                     <li>
        //                         <strong>Location:</strong> 
        //                     </li>
        //                     <li>
        //                         <strong>Address:</strong> 
        //                     </li>
        //                     <li>
        //                         <strong>Postal Code:</strong> 
        //                     </li>
        //                 </ul>
        //             </div>

                    
        //         </div>


        //         <div className="card">
                    
        //             <div className="content">
        //                 <ul>
        //                     <li>
        //                         <strong>Location:</strong> 
        //                     </li>
        //                     <li>
        //                         <strong>Address:</strong> 
        //                     </li>
        //                     <li>
        //                         <strong>Postal Code:</strong> 
        //                     </li>
        //                 </ul>
        //             </div>

                    
        //         </div>

        //     </div>

        // </div>

        // <Card style={{ width: '30vw', height: '40vh', marginLeft: '20vw', marginTop: '0.05vh', backgroundColor: '#FAFAFA', }}>
        // <CardText color="#263238" style={{ fontSize: '3vw', }}>
        //   Lorem Ipsum Lorem Ipsum
        // </CardText>
        // </card
  
<div >
<CardDeck >
<Card style={{ width: '95vw', height: '1000vh', margin: 'auto', marginTop: '0.05vh',  }}>
    
    {/* First card */}
      <Card style={{ width: '45rem', }}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Incident location</Card.Title>
      <Card.Text>
        Location, address, postal code, interesction etc.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>


{/* Second Card */}

  {/* <Card style={{ width: '45rem', }}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card> */}


  <Card style={{ width: '44rem', marginLeft: '50vw', marginTop: '-39vh', marginBottom: '10vh' }}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Caller information</Card.Title>
      <Card.Text>
        Where the information, name, phone nubmer will come in 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card style={{ width: '70rem', marginTop: '-8vh' }}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title> Medical questions</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card style={{ marginLeft: '50vw',  marginTop: '-8vh' }}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Closest Unit available</Card.Title>
      <Card.Text>
      This is where the closest team will be shown .{' test'}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>


  <div id="check">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
    </div>

    </Card>
</CardDeck>
</div>
   
 
    )
}

export default Dispatch
