import Button from 'react-bootstrap/Button';
import React from 'react'

function Legend (){
    return (
<div>
    <ul>
 <li><Button variant= 'primary'> Alpha </Button> Non Serious or non life threatening</li>
   <li>  <Button variant= 'info'> Bravo </Button>Serious not life threatening – urgent</li>
   <li>  <Button variant= 'btn btn-success'> Charlie </Button> Serious not life threatening </li>
    <li> <Button variant= 'btn btn-warning'> Delta  </Button> Life threatening other than cardiac or respiratory arrest </li>
    <li> <Button variant= 'btn btn-danger'> Echo </Button>  Life threatening – Cardiac or respiratory arrest </li>
     </ul>
    
     </div>
     )
}

export default Legend