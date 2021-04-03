import Button from 'react-bootstrap/Button';
import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function Legend (){
    return (
        <CardDeck>
       {/* EMERGENCY BUTTONS */}
         <Card style ={{height:"fit-content", width: "fit-content"}} className="display-none">
         <Card.Header className="text-center"> SEVERITY LEVELS</Card.Header>
              <Card.Body>

             
        <Row>
            <Col >
         <strong> STATUS </strong>
            </Col>
            <Col>
          <strong>  DESCRIPTION </strong>
            </Col>
        </Row>
        
        <Row>
            <Col>
          <Button variant= 'primary'> Alpha </Button> 
            </Col>
            <Col>
            Non Serious or non life threatening
            </Col>
        </Row>
        <Row>
            <Col>
            <Button variant= 'info'> Bravo </Button>
            </Col>
            <Col>
            Serious not life threatening – urgent
            </Col>
        </Row>
        <Row>
            <Col>
            <Button variant= 'btn btn-success'> Charlie </Button> 
            </Col>
            <Col>
            Serious not life threatening
            </Col>
        </Row>
        <Row>
            <Col>
            <Button variant= 'btn btn-warning'> Delta </Button> 
            </Col>
            <Col>
            Life threatening, NOT cardiac or respiratory arrest
            </Col>
        </Row>
        <Row>
            <Col>
            <Button variant= 'btn btn-danger'> Echo </Button>  
            </Col>
            <Col>
          Life threatening – Cardiac or respiratory arrest 
            </Col>
        </Row>
   

     {/* <ul>
 <li ><Button variant= 'primary'> Alpha </Button> Non Serious or non life threatening</li>
   <li>  <Button variant= 'info'> Bravo </Button>Serious not life threatening – urgent</li>
   <li>  <Button variant= 'btn btn-success'> Charlie </Button> Serious not life threatening </li>
    <li> <Button variant= 'btn btn-warning'> Delta  </Button> Life threatening other than cardiac or respiratory arrest </li>
    <li> <Button variant= 'btn btn-danger'> Echo </Button>  Life threatening – Cardiac or respiratory arrest </li>
     </ul>  */}
       </Card.Body>
      <Card.Footer className="text-muted">Submitted/not submitted</Card.Footer>
    </Card>
     
     {/* EMERGENCY GROUPS */}
    <Card style ={{height:"fit-content", width: "fit-content"}} className="display-none">
         <Card.Header className="text-center">SPECIAL CONTACT NUMBERS</Card.Header>
              <Card.Body>
<Container>
    <ul>
        <Row>
            <Col>
         <strong> POLICE DIVISION</strong>
            </Col>
            <Col>
          <strong>  PHONE NUMBER</strong>
            </Col>
        </Row>
        <Row>
            <Col>
           <u> Metropolitan Toronto Police Headquarters:</u>
            </Col>
            <Col>
            (416) 808-2222
            </Col>
        </Row>
         <Row>
            <Col>
           <u> Metropolitan Toronto Police Headquarters:</u>
            </Col>
            <Col>
            (416) 808-2222
            </Col>
        </Row>
        <Row>
            <Col>
            <u> Toronto Police Service (Scarborough):</u>
            </Col>
            <Col>
            (416) 808-4960
            </Col>
        </Row>
        <Row>
            <Col>
          <u>  Toronto Police Service 22 Division:</u>
            </Col>
            <Col>
            (416) 808-2200
            </Col>
        </Row>
        <Row>
            <Col>
           <u> Toronto Police Service 52 Division:</u>
            </Col>
            <Col>
            (416) 808-5200
            </Col>
        </Row>
        <Row>
            <Col>
          <u>  Toronto Police Service 13 Division: </u>
            </Col>
            <Col>
            (416) 808-1300 
            </Col>
        </Row>
        <Row>
            <Col>
           <u> Toronto Police Service 14 Division:</u>
            </Col>
            <Col>
            (416) 808-1400 
            </Col>
        </Row>
        <Row>
            <Col>
           <u> Toronto Police Service - 53 Division:</u>
            </Col>
            <Col>
            (416) 808-5300
            </Col>
        </Row>
        <Row>
            <Col>
          <u>  Toronto Police Service - 32 Division:</u>
            </Col>
            <Col>
            (416) 808-3200
            </Col>
        </Row>
        <Row>
            <Col>
           <u> Toronto Police Service - 11 Division: </u>
            </Col>
            <Col>
            (416) 808-1100
            </Col>
        </Row>
        <Row>
            <Col>
          <u>  Toronto Police Service 55 Division:</u>
            </Col>
            <Col>
            (416) 808-5500
            </Col>
        </Row>
        <Row>
            <Col>
          <u>  Toronto Police Service 23 Division:</u>
            </Col>
            <Col>
            (416) 808-2300
            </Col>
        </Row>
        <Row>
            <Col>
           <u> Toronto Police Service 43 Division:</u>
            </Col>
            <Col>
            (416) 808-4300
            </Col>
        </Row>
        <Row>
            <Col>
          <u>  Toronto Police Service 31 Division:</u>
            </Col>
            <Col>
            (416) 808-3100
            </Col>
        </Row>
        <Row>
            <Col>
         <u>Toronto Police Service 41 Division: </u>
            </Col>
            <Col>
            (416) 808-4100
            </Col>
        </Row>
        <Row>
            <Col>
           <u> Toronto Police 12 Division: </u>
            </Col>
            <Col>
            (416) 808-1200
            </Col>
        </Row>
        <Row>
            <Col>
         <u>   Toronto Police Service 33 Division:</u>
            </Col>
            <Col>
            (416) 808-3300
            </Col>
        </Row>
        <Row>
            <Col>
          <u>  Toronto Police Service 42 Division:</u>
            </Col>
            <Col>
            (416) 808-4200
            </Col>
        </Row>
 {/* <li><strong>Metropolitan Toronto Police Headquarters:</strong> (416) 808-2222 </li
    <li>Toronto Police Service 42 Division: (416) 808-4200</li> */}

     {/* <li><strong>Metropolitan Toronto Police Headquarters:</strong> (416) 808-2222 </li>
   <li>Toronto Police Service (Scarborough): (416) 808-4960 </li>
   <li>Toronto Police Service 22 Division: (416) 808-2200 </li>
   <li> Toronto Police Service 52 Division : (416) 808-5200 </li>
    <li> Toronto Police Service 13 Division:  (416) 808-1300  </li>
    <li>Toronto Police Service 14 Division: (416) 808-1400 </li>
    <li>Toronto Police Service - 53 Division: (416) 808-5300</li>
    <li>Toronto Police Service - 32 Division: (416) 808-3200</li>
    <li>Toronto Police Service - 11 Division:  (416) 808-1100</li>
    <li>Toronto Police Service 55 Division: (416) 808-5500</li>
    <li>Toronto Police Service 23 Division: (416) 808-2300</li>
    <li>Toronto Police Service 43 Division: (416) 808-4300</li>
    <li>Toronto Police Service 31 Division: (416) 808-3100</li>
    <li>Toronto Police Service 41 Division: (416) 808-4100</li>
    <li>Toronto Police 12 Division: (416) 808-1200</li>
    <li>Toronto Police Service 33 Division: (416) 808-3300</li>
    <li>Toronto Police Service 42 Division: (416) 808-4200</li> */}

    
     </ul>

     </Container>
       </Card.Body>
      <Card.Footer className="text-muted">Submitted/not submitted</Card.Footer>
    </Card>

     </CardDeck>
     
     )
}

export default Legend


// function Legend (){
//     return (
// <Col-8 >
// <Card style ={{width:"900px"}} className="display-none">
// <Card.Header>Recommended Severity Levels</Card.Header>
//       <Card.Body>
{/* NEAREST AMBULANCE */}
    {/* <Card className="text-center" >
      <Card.Header>LEGEND</Card.Header>
      <Card.Body >
        <Row>
        <Col sm><Button variant= 'primary'> Alpha </Button> Non Serious or non life threatening</Col>
        </Row>
        <Row>
        <Col sm><Button variant= 'info'> Bravo </Button>Serious not life threatening – urgent</Col>
        </Row>
        <Row>
        <Col sm><Button variant= 'btn btn-success'> Charlie </Button> Serious not life threatening – immediate</Col>
        </Row>
        <Row>
        <Col sm><Button variant= 'btn btn-warning'> Delta  </Button> Life threatening other than cardiac or respiratory arrest</Col>
        </Row>
        <Row>
        <Col sm><Button variant= 'btn btn-danger'> Echo </Button>  Life threatening – Cardiac or respiratory arrest</Col>
        </Row>
      
    //   <ul>
    // <li> <Button variant= 'primary'> Alpha </Button> Non Serious or non life threatening</li>
    // <li> <Button variant= 'info'> Bravo </Button>Serious not life threatening – urgent</li>
    // <li> <Button variant= 'btn btn-success'> Charlie </Button> Serious not life threatening </li>
    // <li> <Button variant= 'btn btn-warning'> Delta  </Button> Life threatening other than cardiac or respiratory arrest</li>
    // <li> <Button variant= 'btn btn-danger'> Echo </Button>  Life threatening – Cardiac or respiratory arrest</li>
    // </ul>
    //  </Card.Body>
    //  </Card>
      {/* </Card.Body>
      <Card.Footer className="text-muted">Submitted/not submitted</Card.Footer>
    </Card> */}
// </Col-8>

//     )
// }


// export default Legend