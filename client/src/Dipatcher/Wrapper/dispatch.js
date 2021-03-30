import React from 'react';
import './style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import CardDeck from 'react-bootstrap/CardDeck';
import CardText from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';




function Dispatch() {
    return (
       
  
<div >
{/* <Card className="text-center" style={{ width: '80vw', margin: 'auto', marginTop: '0.05vh',  }}> */}

<CardDeck >

  <Card className="text-center" >
      <Card.Header>Incident Location</Card.Header>
      <Card.Body>
        <Card.Title>Enter Location below</Card.Title>
        <Card.Text>
          Some Card body content goes here
        </Card.Text>
       <form> 
         <input/>
       </form>
        
        <Button variant="primary">Primary Button</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Card footer title Goes Here</Card.Footer>
    </Card>
    <Card className="text-center" >
      <Card.Header>Card Header title Goes Here</Card.Header>
      <Card.Body>
        <Card.Title>Card Title Goes Here</Card.Title>
        <Card.Text>
          Some Card body content goes here
        </Card.Text>
        <Button variant="primary">Primary Button</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Card footer title Goes Here</Card.Footer>
    </Card>
</CardDeck>


<CardDeck >

<Card className="text-center" >
      <Card.Header>Card Header title Goes Here</Card.Header>
      <Card.Body>
        <Card.Title>Card Title Goes Here</Card.Title>
        <Card.Text>
          Some Card body content goes here
        </Card.Text>
        <Button variant="primary">Primary Button</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Card footer title Goes Here</Card.Footer>
    </Card>
</CardDeck>



<CardDeck>

<Card className="text-center" >
      <Card.Header>Card Header title Goes Here</Card.Header>
      <Card.Body>
        <Card.Title>Card Title Goes Here</Card.Title>
        <Card.Text>
          Some Card body content goes here
        </Card.Text>
        <Button variant="primary">Primary Button</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Card footer title Goes Here</Card.Footer>
    </Card>

</CardDeck>
</div>
   
 
    )
}

export default Dispatch
