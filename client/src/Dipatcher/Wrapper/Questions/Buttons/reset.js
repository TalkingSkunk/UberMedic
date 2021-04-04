import React from 'react'
import Button from 'react-bootstrap/Button'
import '../../Questions/Questions.css'

function Reset() {
    function reset(){
        console.log('this works')
      
        document.getElementsByClassName('card-header')[7].classList.add('reset')
    }
 
    return (
        <div>
            
        <button class='btn btn-primary' onClick={reset}>Reset </button>
       
        
        </div>
    )
}

export default Reset
