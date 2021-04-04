import React from 'react'
import Button from 'react-bootstrap/Button'
import '../../Questions/Questions.css'

function Alpha(){
    console.log('this works')
    document.getElementsByClassName('card-header')[7].classList.add('test')

return (
    <div>
        
    <button class='btn btn-primary' onClick={Alpha}>Alpha </button>
    </div>
    )
}
export default Alpha
