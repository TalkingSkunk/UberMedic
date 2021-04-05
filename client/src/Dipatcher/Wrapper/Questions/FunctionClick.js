import React from 'react'
import Button from 'react-bootstrap/Button'
import '../Questions/Questions.css'

function FunctionClick(event) {

    function clickHandler(){
        console.log('this works')
        document.getElementsByClassName('card-header')[7].classList.add('test')
        document.getElementsByClassName('card-footer')[5].classList.add('test')
    }

    function bravo(){
        console.log('this works too ')
        document.getElementsByClassName('card-header')[7].classList.add('test2')
        document.getElementsByClassName('card-footer')[5].classList.add('test2')
    }

    function charlie(){
        console.log('works')
        document.getElementsByClassName('card-header')[7].classList.add('test3')
        document.getElementsByClassName('card-footer')[5].classList.add('test3')
    }

    function delta(){
        console.log('works')
        document.getElementsByClassName('card-header')[7].classList.add('test4')
        document.getElementsByClassName('card-footer')[5].classList.add('test4')
    }

    function echo(){
        console.log('works')
        document.getElementsByClassName('card-header')[7].classList.add('test5')
        document.getElementsByClassName('card-footer')[5].classList.add('test5')
    }

if (event = clickHandler){

    return (
        <div>
            
        <button class='btn btn-primary' onClick={clickHandler}>Alpha </button>
        <button class='btn btn-info'onClick={bravo}> Bravo</button>
        <button class='btn btn-success'onClick={charlie}> Charlie</button>
        <button class='btn btn-warning'onClick={delta}> Delta</button>
        <button class='btn btn-danger'onClick={echo}> Echo</button>
        
        </div>
    )
} else if (event = bravo){
    return(

        <div>
            
        <button class='btn btn-primary' onClick={clickHandler}>Alpha </button>
        <button class='btn btn-info'onClick={bravo}> Bravo</button>
        <button class='btn btn-success'onClick={charlie}> Charlie</button>
        <button class='btn btn-warning'onClick={delta}> Delta</button>
        <button class='btn btn-danger'onClick={echo}> Echo</button>
        
        </div>
    )
} else if (event = charlie){
    return (
        <div>
            
        <button class='btn btn-primary' onClick={clickHandler}>Alpha </button>
        <button class='btn btn-info'onClick={bravo}> Bravo</button>
        <button class='btn btn-success'onClick={charlie}> Charlie</button>
        <button class='btn btn-warning'onClick={delta}> Delta</button>
        <button class='btn btn-danger'onClick={echo}> Echo</button>
        
        </div>
    )
} else if (event = delta){
    return (
        <div>
            
        <button class='btn btn-primary' onClick={clickHandler}>Alpha </button>
        <button class='btn btn-info'onClick={bravo}> Bravo</button>
        <button class='btn btn-success'onClick={charlie}> Charlie</button>
        <button class='btn btn-warning'onClick={delta}> Delta</button>
        <button class='btn btn-danger'onClick={echo}> Echo</button>
        
        </div>
    )
} else {
    return (
        <div>
            
        <button class='btn btn-primary' onClick={clickHandler}>Alpha </button>
        <button class='btn btn-info'onClick={bravo}> Bravo</button>
        <button class='btn btn-success'onClick={charlie}> Charlie</button>
        <button class='btn btn-warning'onClick={delta}> Delta</button>
        <button class='btn btn-danger'onClick={echo}> Echo</button>
        
        </div>
    )
}
}

export default FunctionClick


