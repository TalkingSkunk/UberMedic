import Button from 'react-bootstrap/Button';
import React from 'react'
import Card from 'react-bootstrap/Card'

function Legend (){
    return (
        <Col-8 >
         <Card style ={{height:"fit-content"}} className="display-none">
         <Card.Header>Recommended Severity Levels</Card.Header>
              <Card.Body>

    <ul>
 <li><Button variant= 'primary'> Alpha </Button> Non Serious or non life threatening</li>
   <li>  <Button variant= 'info'> Bravo </Button>Serious not life threatening – urgent</li>
   <li>  <Button variant= 'btn btn-success'> Charlie </Button> Serious not life threatening </li>
    <li> <Button variant= 'btn btn-warning'> Delta  </Button> Life threatening other than cardiac or respiratory arrest </li>
    <li> <Button variant= 'btn btn-danger'> Echo </Button>  Life threatening – Cardiac or respiratory arrest </li>
     </ul>
       </Card.Body>
      <Card.Footer className="text-muted">Submitted/not submitted</Card.Footer>
    </Card> 
     </Col-8>
    
     
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