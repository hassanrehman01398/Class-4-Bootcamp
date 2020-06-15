import React, { useState } from 'react';
import './room.css';


function Room(){
    let [islit,outlit]=useState(false);
    let [age,setage]=useState(20);
    let hello='Hello ${age} World';
    function updatelit(){
        outlit(!islit);


    }
    function updateage(){
  
        setage(age++);


    }
 //console.log(state);
        return(

            <div className={'room {islit? "lit":"dark"}'}>

<div>hello</div>
                My Room : {islit?'Lit':'dark'};
                <br/>
                <br/>

                <button id="button1" onClick={updatelit}>Toogle Light</button>
                <br/>
                <br/>
                
                My Age : {age};
              
                <br/>
                <br/>
                
                <button id="button2" onClick={updateage}>Increase Age</button>
                <br/>
                <button id="button3" onClick={()=>
                setage(age++)
                
                }>Arrow Function Button</button>
            </div>
        );

}

export default Room;
